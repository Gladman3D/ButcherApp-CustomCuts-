// Minimal client-side app for the Butcher App starter
const PRODUCTS_URL = '/data/products.json'

function qs(sel){return document.querySelector(sel)}
function qsa(sel){return Array.from(document.querySelectorAll(sel))}

let products = []
let cart = JSON.parse(localStorage.getItem('butcher_cart')||'{}')

function formatPrice(n){return n.toFixed(2)}

async function loadProducts(){
  try{
    const res = await fetch(PRODUCTS_URL)
    products = await res.json()
    renderProducts()
    renderCart()
  }catch(e){
    qs('#products').textContent = 'Failed to load products.'
    console.error(e)
  }
}

function renderProducts(){
  const el = qs('#products')
  el.innerHTML = ''
  products.forEach(p=>{
    const card = document.createElement('div')
    card.className = 'product'
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="meta">
        <div>$${formatPrice(p.price_per_lb)}/lb</div>
        <div>
          <button class="btn add" data-id="${p.id}">Add</button>
        </div>
      </div>
    `
    el.appendChild(card)
  })
  qsa('.product .add').forEach(btn=>btn.addEventListener('click',onAdd))
}

function onAdd(e){
  const id = e.currentTarget.dataset.id
  const p = products.find(x=>x.id===id)
  if(!p) return
  // default add 1 lb
  const qty = 1
  if(!cart[id]) cart[id] = {id:p.id,name:p.name,price:p.price_per_lb,qty:0}
  cart[id].qty += qty
  saveCart()
  renderCart()
}

function saveCart(){
  localStorage.setItem('butcher_cart',JSON.stringify(cart))
}

function renderCart(){
  const container = qs('#cart-items')
  container.innerHTML = ''
  const ids = Object.keys(cart)
  if(ids.length===0){container.textContent='(empty)'; qs('#place-order').disabled=true; qs('#cart-total').textContent='0.00'; return}
  ids.forEach(id=>{
    const row = document.createElement('div')
    row.className = 'cart-row'
    const item = cart[id]
    row.innerHTML = `<div>${item.name} <small>x${item.qty} lb</small></div><div>$${formatPrice(item.price*item.qty)}</div>`
    container.appendChild(row)
  })
  const total = ids.reduce((s,i)=>s + cart[i].price*cart[i].qty,0)
  qs('#cart-total').textContent = formatPrice(total)
  qs('#place-order').disabled = false
}

qs('#place-order').addEventListener('click',()=>{
  const order = {id:`order_${Date.now()}`,items:Object.values(cart),total:qs('#cart-total').textContent,created_at:new Date().toISOString()}
  // For this starter we'll just save to localStorage and clear cart
  localStorage.setItem('butcher_last_order',JSON.stringify(order))
  cart = {}
  saveCart()
  renderCart()
  alert('Order placed (saved locally). Integrate with your backend to submit orders.')
})

// Initialize
loadProducts()
