import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Success() {
  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <div className="container" style={{ textAlign: 'center', margin: '2rem auto' }}>
        <h2>🎉 Siparişiniz başarıyla oluşturuldu!</h2>
        <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Anasayfaya Dön
        </Button>
      </div>
      <Footer />
    </div>
  )
}

export default Success
