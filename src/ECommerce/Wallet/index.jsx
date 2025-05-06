import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, clearCart } from '../../features/cart/cartSlice'
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/index'
import Footer from '../../Footer/index'
import "./Wallet.css"
function Wallet() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const navigate = useNavigate();
  const total = items.reduce(
    (sum, item) => sum + item.productPrice * item.quantity,
    0
  )

  if (items.length === 0) {
    return (
      <div className="container">
        <h2>Sepetiniz Boş</h2>
      </div>
    )
  }

  return (
    <div>
    <Header />
    <div className="container">
      <h3>SEPETİM</h3>
      {items.map(item => (
        <div
          key={item.id}
          className="card mb-3"
          style={{ width: '100em' }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={"../../../public/assets/img/"+item.imageUrl}
                className="img-fluid rounded-start"
                alt={item.productName}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.productName}</h5>
                <p className="card-text">{item.productDescription}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Adet: {item.quantity} × ₺{item.productPrice} = ₺
                    {item.quantity * item.productPrice}
                  </small>
                </p>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Kaldır
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div style={{ justifyContent: 'space-between' }}>
        <h3>Toplam: ₺{total}</h3> <br />
        <div> 
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(clearCart())}
            style={{ marginRight: '1rem' }}
          >
            Sepeti Boşalt
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate('/Odeme')
            }}
          >
            Sepeti Onayla
          </button>
        </div>
      </div>
    </div>
    <Footer />
     </div>
  )
}

export default Wallet