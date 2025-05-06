import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PaymentForm from './index' // doğru yoldan import et
import { postOrder } from '../../features/orders/ordersSlice'
import { clearCart } from '../../features/cart/cartSlice'

function Orders() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const items = useSelector(state => state.cart.items)
  const { loading, error, lastOrder } = useSelector(state => state.orders)
  
  const getUserIdFromToken = () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) return 0 // misafir kullanıcı
  
      const payloadBase64 = token.split('.')[1]
      const payload = JSON.parse(atob(payloadBase64))
      return payload.userId || 0
    } catch {
      return 0
    }
  }
  const handleSubmit = (formData) => {
    console.log('📨 Orders.js içinde handleSubmit çalıştı:', formData)
  
    const order = {
      userId: getUserIdFromToken(),
      orderDate: new Date().toISOString(),
      items: JSON.stringify(items),
      totalAmount: formData.total,
      status: 'Pending'
    }
  
    dispatch(postOrder(order))
  }
  

  useEffect(() => {
    if (lastOrder) {
      dispatch(clearCart())
      navigate('/OdemeBilgi')
    }
  }, [lastOrder, dispatch, navigate])

  return (
    <>
      {loading && <p>Gönderiliyor...</p>}
      {error && <p style={{ color: 'red' }}>Hata: {error}</p>}
      <PaymentForm onSubmit={handleSubmit} />
    </>
  )
}

export default Orders
