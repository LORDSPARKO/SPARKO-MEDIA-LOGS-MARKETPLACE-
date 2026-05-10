import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    const { data } = await supabase.from('products').select()
    setProducts(data || [])
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>SPARKO MEDIA LOGS MARKETPLACE</h1>
      <p>Your marketplace is live! 🔥</p>
      <p>Products: {products.length}</p>
      <p style={{marginTop: '20px', color: 'gray'}}>
        Next: Connect Supabase to show real products
      </p>
    </div>
  )
}

export default App
