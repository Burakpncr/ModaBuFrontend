import { useState } from 'react'
import "./About.css"

function About() {
  return (
    <section id="about" class="about section light-background">

    <div class="container section-title" >
      <h2>Hakkımızda</h2>
      <p><span>MODABU</span> <span class="description-title">Hakkında</span></p>
    </div>

    <div class="container">

      <div class="row gy-3">

        <div class="col-lg-6" >
          <img src="../../../public/assets/img/ChatGPT Image 16 Nis 2025 11_12_33.png" class="img-fluid" />
        </div>

        <div class="col-lg-6 d-flex flex-column justify-content-center" >
          <div class="about-content ps-0 ps-lg-3">
            <h3>En Yeni Moda Trendlerini Keşfedin</h3>
            <p class="fst-italic">
            Moda dünyasında en yeni trendleri ve tasarımları keşfetmek için doğru yerdesiniz. 
            Kullanıcılar ve moda şirketleri burada buluşarak, yaratıcı işbirlikleri kurar ve sektördeki en son gelişmelerden faydalanır.
            </p>
            <ul>
              <li>
                <i class="bi bi-diagram-3"></i>
                <div>
                  <h4>Moda Tasarımcıları ile Doğrudan İletişime Geçin</h4>
                  <p>Markalar ve kullanıcılar arasında sorunsuz bir etkileşim sağlayarak, moda endüstrisindeki her fırsata erişim imkanı sunuyoruz.</p>
                </div>
              </li>
              <li>
                <i class="bi bi-fullscreen-exit"></i>
                <div>
                  <h4>Moda Dünyasında İlham Verici İşbirlikleri</h4>
                  <p> Yenilikçi ve yaratıcı işbirlikleri ile moda dünyasında fark yaratın. Şirket sahipleri ve kullanıcılar burada birleşiyor!</p>
                </div>
              </li>
            </ul>
            <p>
            Siz de en son moda trendlerini keşfetmek, özgün tasarımlara ulaşmak ve favori markalarınızla doğrudan etkileşimde bulunmak istiyorsanız
            , doğru yerdesiniz! Moda dünyasına adım atın, markalarla tanışın ve alışverişinizi en kaliteli ürünlerle yapın. İster ilham almak, 
            ister yeni bir tarz oluşturmak isteyin, burada her kullanıcı için benzersiz fırsatlar sizi bekliyor. 
            Hemen kaydolun ve modanın nabzını tutmaya başlayın!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
