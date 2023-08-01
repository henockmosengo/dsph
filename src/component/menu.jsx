import React, {useState} from 'react'
import './style.css'
import SearchBar from './searchBar';
export const Menu = () => {
        const table= [
            {id:1, acronyme: "AA", nom:"Arche de l'Alliance", risque:"Modéré", categorie: "ONG Nationale"},
            {id:2, acronyme: "AAI", nom:"Action Aid International RD Congo", risque:"Faible ", categorie: "ONG Internationale"},
            {id:3, acronyme: "AAP", nom:" Aide et Actions pour la Paix", risque:"Modéré", categorie: "ONG Nationale"},
            {id:4, acronyme: "AAP", nom:"Agence d'Achat de Performances", risque:"Modéré", categorie: "ONG Nationale"},
            
        
        ];  
        const [data, setData] = useState(table)

       

  return (
    <div>
        <section id="topbar" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
      <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">Victorinemonika@dsph.cd</a></i>
        <i class="bi bi-phone d-flex align-items-center ms-4"><span>+243 0000000000</span></i>
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        
      </div>
    </div>

  </section>
<header id="header" class="d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="index.html"><img className='logo-img' src={require("./logo_ministere).png")} alt="..."/></a></h1>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">A propo</a></li>
          <li><a class="nav-link scrollto" href={"./agent"}>Services</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Actualiter</a></li>
          {/* <li><a class="nav-link scrollto" href="#team">Team</a></li> */} 
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <img className='logo-menu' src={require("./menu_100px_1.png")} alt="..."/>
    </div>
    
  </header>
  <section id="hero" class="d-flex align-items-center">
    <div class="container" data-aos="zoom-out" data-aos-delay="100">
   
      <h1 className='cool-1'>Bienvenue au direction de <span> <br />solidarité et partenaria <br /> humanitaire (DSPH)</span></h1>
      <h2 className='cool-2'>Secretariat géneral <br /> aux actions humanitaires et a la solidarité national</h2>
      <div class="d-flex">
        <a href="#about" class="btn-get-started scrollto">Plus d'info</a>
      </div>
    </div>
  </section>
  <section id="clients" class="clients clients">
      <div class="container">

        <div class="row">

          <div class="col-lg-2 col-md-4 col-6">
            <img src={require("./unicef-logo.png")} class="img-fluid" alt="" data-aos="zoom-in"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={require("./2-logo_Ambassade-de-Belgique_300dpi-1024x324.png")} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={require("./DrapeauUE-rvbmention-18-1024x767.png")} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={require("./Logo_OIM.svg-1024x384.png")} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={require("./undp-logominAS.png")} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={require("./unesco-logo-EE9E97077A-seeklogo.com_.png")} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500"/>
          </div>

        </div>

      </div>
    </section>
  <br />
  <br />
  <div class="d-flex justify-content-center"><img src={require("./directrice.png")} class="d-block direc w-50" alt="..."/></div>
  
  <section id="about" class="about section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>A PROPOS</h2>
          <h3>En savoir plus <span>sur nous</span></h3>
          <p>Le Ministère des Affaires Sociales, Actions Humanitaires
et Solidarité Nationale est segmenté en quatre structures,
parmi lesquelles l’on cite l’administration générale,
l’assistance sociale, la promotion sociale et la promotion de
la solidarité nationale.</p>
        </div>
    </div>
    </section>

  <div className='div-1'>
    <div className="a1"></div>
    <div className="a2"></div>
    <div className="a3"></div>
</div>

<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("./R (1).jpg")} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Unicef</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={require("./R (2).jpg")} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Unicef</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={require("./R.jpg")} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Unicef</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 

<section id="featured-services" class="featured-services">
  <div class="container" data-aos="fade-up">
    <div class="row">
      <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
          <div class="icon"><i class="bx bxl-dribbble"></i></div>
          <h4 class="title"><a href="index.html">Denomination de l'ONG</a></h4>
          <p class="description">Siège social (Adresse), Province, Rayon d'activivé... </p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div class="icon"><i class="bx bx-file"></i></div>
          <h4 class="title"><a href="in">Domaines d'intervation</a></h4>
          <p class="description">Ex: Santé, Education, Nutrition, Protection, Abris & Article menagers essentiels, Securité alimentaire, Environnement, Eau-hygiene & assainissement.</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
          <div class="icon"><i class="bx bx-world"></i></div>
          <h4 class="title"><a href="index.html">Aide</a></h4>
          <p class="description">Contacter nous pour des plus ample details</p>
            <button type="button" class="btn btn-primary btn-sm">Contact</button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <img className='image-9' src={require("./images (9).png")} class="img-fluid" alt="..."></img> */}

    <fieldset>
    <div class="section-title">
               <h2>Liste ONG enrégistrer <br /> <br />
              
    <SearchBar  class="form-re" id="validationTooltip02" placeholder= {"filter"} filterField={(item) => item.nom} list={table} setList={setData} />
            
               </h2>       
       
        </div>
   {/* {data.map((item, index) => <div className='abc' key={index}>
        <div className='d-1'>{item.id}</div> 
        <div >{item.acronyme}</div>
        <div >{item.nom}</div>  
        <div>{item.risque}</div> 
        <div>{item.categorie}</div>
         </div>)} */}
   </fieldset>
<div class="container text-center">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
  <div class="row">
    <div class="col">
    <h3 class="text-light text-bg-warning"> ID</h3>
    </div>
    <div class="col">
      <h3 class="text-light text-bg-primary">NOM(ONG & ASBL)</h3>
    </div>
    <div class="col">
      <h3 class="text-light text-bg-danger">RISQUE</h3>
    </div>
    <div class="col">
      <h3 class="text-light text-bg-warning">CATEGORIE</h3>
    </div>
  </div></div>
</div>
<div class="container text-center">
  {data.map((item, index) => <div class="row">
    <div class="col" key={index}>
     {item.id} 
    </div>

    <div class="col">
    {item.nom}
    </div>
    <div class="col">
    {item.risque}
    </div>
    <div class="col">
    {item.categorie}
    </div>
  </div>)}
</div>
    {/* <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>CONTACT</h2>
          <h3><span>Contactez-nous</span></h3>
          <p></p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-6">
            <div class="info-box mb-4">
              <i class="bx bx-map"></i>
              <h3>Notre adresse</h3>
              <p>Avenue, Commun, Num......</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="info-box  mb-4">
              <i class="bx bx-envelope"></i>
              <h3>Envoyez-nous un email</h3>
              <p>contact@example.com</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="info-box  mb-4">
              <i class="bx bx-phone-call"></i>
              <h3>Appelez-nous</h3>
              <p>+243 0000000000</p>
            </div>
          </div>

        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-6 ">
          </div>
          <div class="col-lg-6">    
          </div>
        </div>
      </div>
    </section> */}

<br />
{/* <div class="card mb-3" id='bar-image'>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={require("./OIP.jpg")} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">Le programme de l’Administration générale est un
programme support. Il a pour but d’assurer le pilotage et la
coordination administrative de l’ensemble du Ministère qui
constituent ses deux actions.</p>
      </div>
    </div>
  </div>
</div> */}
 <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Action</h2>
          <h3>les actions <span>humanitaires</span></h3>
          <p>action humanitaire pous les enfants</p>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="member">
              <div class="member-img">
                <img src={require("./OIP.jpg")} class="img-fluid" alt=""/>
                <div class="social">
                </div>
              </div>
              <div class="member-info">
                <h4>Unicef</h4>
                <span>Action par unicef</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <div class="member-img">
                <img src={require("./R (3).jpg")} class="img-fluid" alt=""/>
              </div>
              <div class="member-info">
                <h4>Unicef</h4>
                <span>Action par unicef</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <div class="member-img">
                <img src={require("./R (4).jpg")} class="img-fluid" alt=""/>
                <div class="social">
                </div>
              </div>
              <div class="member-info">
                <h4>Unicef</h4>
                <span>Action par unicef</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <div class="member-img">
                <img src={require("./R (5).jpg")} class="img-fluid" alt=""/>
                <div class="social">
                </div>
              </div>
              <div class="member-info">
                <h4>Unicef</h4>
                <span>Action par unicef</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="featured-services" class="featured-services">
    <div class="section-title">
          <h3><span>Nos partenaires</span></h3>
          <p></p>
        </div>
  <div class="container" data-aos="fade-up">
    <div class="row">
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div class="icon"><i class="bx bx-file"></i></div>
          <img src={require("./unicef-logo.png")} class="img-fluid" alt=""/>
         </div>
      </div>
      <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div class="icon"><i class="bx bx-file"></i></div>
          <img src={require("./unesco-logo-EE9E97077A-seeklogo.com_.png")} class="img-fluid" alt=""/>
         </div>
      </div>

      <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div class="icon"><i class="bx bx-file"></i></div>
          <img src={require("./2-logo_Ambassade-de-Belgique_300dpi-1024x324.png")} class="img-fluid" alt=""/>
         </div>
      </div>

      <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div class="icon"><i class="bx bx-file"></i></div>
          <img src={require("./800px-UNFPA_logo.svg.png")} class="img-fluid" alt=""/>
         </div>
      </div>
      </div>
    </div>
  
</section>
<section id="featured-services" class="featured-services">
  <div class="container" data-aos="fade-up">
    <div class="row">
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div class="icon"><i class="bx bx-file"></i></div>
          <img src={require("./unesco-logo-EE9E97077A-seeklogo.com_.png")} class="img-fluid" alt=""/>
         </div>
      </div>
      <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div class="icon"><i class="bx bx-file"></i></div>
          <img src={require("./undp-logominAS.png")} class="img-fluid" alt=""/>
         </div>
      </div>

      <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div class="icon"><i class="bx bx-file"></i></div>
          <img src={require("./Logo_OIM.svg-1024x384.png")} class="img-fluid" alt=""/>
         </div>
      </div>

      <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div class="icon"><i class="bx bx-file"></i></div>
          <img src={require("./DrapeauUE-rvbmention-18-1024x767.png")} class="img-fluid" alt=""/>
         </div>
      </div>
      </div>
    </div>
  
</section>
<section id="contact" class="contact">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="contact-about">
              <h3>Newsletter</h3>
              <p>Inscrivez-vous à notre newsletter pour suivre nos actualités. Veuillez renseigner votre adresse email pour vous inscrire.</p>
              <div class="social-links">
                <a href="f" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="f" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="f" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="f" class="linkedin"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
            <div class="info">
              <div>
                <i class="ri-map-pin-line"></i>
                <p>Notre adresse<br/>Kinshasa</p>
              </div>

              <div>
                <i class="ri-mail-send-line"></i>
                <p>Victorinemonika@dsph.cd</p>
              </div>

              <div>
                <i class="ri-phone-line"></i>
                <p>+243 000000000</p>
              </div>

            </div>
          </div>

          <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
            <form action="" method="post" role="form" class="php-email-form">
              <div class="form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              {/* <div class="form-group">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div> */}
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

<footer className="footer">
    <br />
    <div class="footer-top">
      <div class="container">
        <div class="row">


          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Accès Rapide</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">a propos</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">contact</a></li>
            </ul>
          </div>


          <div class="col-lg-3 col-md-6 footer-links">
             <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  </footer>
  

    </div>

  )
}
