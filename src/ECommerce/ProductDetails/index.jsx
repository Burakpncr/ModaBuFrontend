import { useState,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'      
import { useDispatch, useSelector } from 'react-redux'        
import { fetchProductById } from '../../features/products/productsSlice'
import { addItem } from '../../features/cart/cartSlice'
import Header from "../../Header/index"
import Footer from "../../Footer/index"
import resim from "/assets/img/keten.jpg"
import "./Detail.css"
function ProductDetails() {
  const { id } = useParams()                                    // ← URL’den id parametresi
  const dispatch = useDispatch()                                // ← Redux dispatch
  const navigate = useNavigate()                                // ← Geri dön tuşu için

  // Redux’tan ürüne ait state’leri al
  const { detail, loadingDetail, detailError } = useSelector(state => state.products)
  const handleAddToCart = () => {
    console.log('⚡ Sepete ekle tetiklendi:', detail.productId)
    dispatch(addItem({
      id: detail.productId,
      productName: detail.productName,
      productPrice: detail.productPrice,
      imageUrl: detail.imageUrl,
      productDescription: detail.productDescription,
    }))
  }
  // Component mount olduğunda veriyi çek
  useEffect(() => {
    dispatch(fetchProductById(id))
  }, [dispatch, id])

  // Yükleniyor, hata veya bulunamadı durumları
  if (loadingDetail) {
    return <div className="container"><p>Yükleniyor…</p></div>
  }
  if (detailError) {
    return (
      <div className="container">
        <p className="error">Hata: {detailError}</p>
        <button onClick={() => navigate(-1)}>Geri Dön</button>
      </div>
    )
  }
  if (!detail) {
    return (
      <div className="container">
        <p>Ürün bulunamadı.</p>
        <button onClick={() => navigate(-1)}>Geri Dön</button>
      </div>
    )
  }
  return (
    <div>

    
    <Header/>
    <div className="container">
          <div className="product-image">
            <img
              src={"../../../public/assets/img/"+detail.imageUrl}
              alt={detail.productName}
            />
          </div>
          <div className="product-info">
            <h2>{detail.productName}</h2>
            <p><strong>Sezon:</strong> {detail.season}</p> 
            <p><strong>Cinsiyet:</strong> {detail.gender}</p>
            <p><strong>Beden:</strong> {detail.productSize}</p>
            <p><strong>Fiyat:</strong> ₺{detail.productPrice}</p>
            <p><strong>Açıklama:</strong> {detail.productDescription}</p>
            <p>{detail.productInStock > 1 ? <strong>Stokta var</strong> : <strong>Stokta yok</strong>  }</p>
            <button
              className="btn btn-primary"
              onClick={handleAddToCart}
            >
              Sepete Ekle
            </button>
            <button
              className="btn btn-secondary"
              style={{ marginLeft: '1rem' }}
              onClick={() => navigate(-1)}
            >
              Geri Dön
            </button>
            <p className="product-note">
              Bu ürün, MODABU üzerinden <strong>{detail.sellerName}</strong> tarafından gönderilecektir…
            </p>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default ProductDetails
