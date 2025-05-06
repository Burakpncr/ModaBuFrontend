import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, clearCart } from '../features/cart/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/auth/authSlice'
import "./Header.css"
function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(state => state.auth.token)
  
  const handleLogout = () => {
    console.log('1️⃣ dispatch log out...')
    dispatch(logout())

    console.log('2️⃣ localStorage.clear()')
    localStorage.clear()

    const still = localStorage.getItem('token')
    console.log('3️⃣ token after clear:', still)
    // now let the Link do the navigation
  }

  
  const items = useSelector(state => state.cart.items)
  const distinctCount = items.length
   
  const total = items.reduce(
    (sum, item) => sum + item.productPrice * item.quantity,
    0
  )
  return (
    <header id="header" class="header sticky-top">

    <div class="topbar d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
          <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
        </div>
        {
          token ?  <div class="social-links d-none d-md-flex align-items-center">
          <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          <a href="/Sepetim" class="linkedin">Sepetim {items.length}</a> <a href="/Sepetim" class="linkedin">Siparişlerim</a> <Link to="/GirisYap" onClick={handleLogout}>Çıkış Yap</Link> 
        </div> : <div class="social-links d-none d-md-flex align-items-center">
          <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          <a href="/GirisYap" class="linkedin">Giriş Yap</a> <a href="/KayıtOl" class="linkedin">Üye Ol</a> <a href="/Sepetim" class="linkedin">Sepetim {items.length}</a> 
        </div>
        }
       
      </div>
    </div>

    <div class="branding d-flex align-items-cente">

      <div class="container position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
          <h1 class="sitename">MODABU</h1>
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="#hero" class="active">Anasayfa</a></li>
            <li><a href="#about">Hakkımızda</a></li>
            <li class="dropdown"><a href="#"><span>Kurumsal</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Kurumsal</a></li>
                <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="/Urunler">Ürünler</a></li>
            <li><a href="#team">İletişim</a></li>
            </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

      </div>

    </div>

  </header>

  )
}

export default Header