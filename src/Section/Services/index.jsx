import { useState } from 'react'
import "./Services.css"
function Services() {
  return (
    <section id="stats" class="stats section">

    <div class="container" >

      <div class="row gy-4">

        <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
          <i class="bi bi-emoji-smile"></i>
          <div class="stats-item">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
            <h1>1000+</h1>
            <p>Kullanıcı</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
          <i class="bi bi-journal-richtext"></i>
          <div class="stats-item">
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
            <h1>1000+</h1>
            <p>Firma</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
          <i class="bi bi-headset"></i>
          <div class="stats-item">
            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
            <h1>1000+</h1>
            <p>Ürün</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex flex-column align-items-center">
          <i class="bi bi-people"></i>
          <div class="stats-item">
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
            <h1>1000+</h1>
            <p>Satış</p>
          </div>
        </div>

      </div>

    </div>

  </section>
  )
}

export default Services