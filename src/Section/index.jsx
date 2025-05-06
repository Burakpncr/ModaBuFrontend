import { useState } from 'react'
import "./Section.css"
function Section() {
  return (
    <section id="hero" class="hero section light-background">

    <div class="container">
      <div class="row gy-4">
          <h1>MODABU<span></span></h1>
          <p>Yeni nesil moda dünyasına ayak uydurmak istiyorsan geç kalmadan hemen alışverişe başla. </p>
          
          <div class="d-flex">
            <a href="/Urunler" class="btn-get-started">Hemen Alışverişe Başlayın</a>
          </div>
      </div>
    </div>

  </section>
  
  )
}

export default Section
