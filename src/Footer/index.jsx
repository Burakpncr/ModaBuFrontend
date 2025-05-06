import { useState } from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer id="footer" class="footer">

    <div class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-6">
            <h4>Moda Dünyasında Sizde Yerinizi Alın</h4>
            <p>Moda dünyasında yerinizi almak ve yeni trendleri keşfetmek için hemen üye olun</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="d-flex align-items-center">
            <span class="sitename">MODABU</span>
          </a>
          <div class="footer-contact pt-3">
            <p>İzmir Buca</p>
            <p>Türkiye</p>
            <p class="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
            <p><strong>Email:</strong> <span>contact@example.com</span></p>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Hızlı Linkler</h4>
          <ul>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Anasayfa</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Hakkımızda</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Kurumsal</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Ürünler</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">İletişim</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Hizmetler</h4>
          <ul>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Giyim</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Ayakkabı</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Aksesuar</a></li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-12">
          <h4>Sosyal Medya</h4>
          <p>Büyük indirimlerden ve yeni trendlerden haberdar olmak içn bizi sosyal medyadan takip edin</p>
          <div class="social-links d-flex">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">MODABU</strong> <span>Tüm Hakları Saklıdır</span></p>
      <div class="credits"> Bu site <a href="https://bootstrapmade.com/">MODABU</a> Teknoloji ekibi tarafından hazırlanmıştır
      </div>
    </div>

  </footer>

  )
}

export default Footer