import React from 'react'
//import './style.css'

export const Login = () => {
  return (
    <div>
    <section id="topbar" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
        <i class="bi bi-phone d-flex align-items-center ms-4"><span>+243 000000000</span></i>
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        
      </div>
    </div>
  </section>
        <header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html">ONG<span>PROJET</span></a></h1>
     

      <nav id="navbar" class="navbar">
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </div>
  )
}