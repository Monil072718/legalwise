function setHeader(id) {
    let header = document.getElementById(id);
    header.innerHTML = `
    <header class="header-nav nav-homepage-style stricky main-menu bg-white stricky-fixed border-0">
      <nav class="posr">
        <div class="container posr">
          <div class="row align-items-center justify-content-between">
            <div class="col-auto px-0 px-xl-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="logos">
                  <!-- <a class="header-logo logo1" href="index.html"><img src="images/Legalwize.png" alt="Header Logo"></a> -->
                  <a class="header-logo logo2" href="index.html"><img src="images/Legalwize-black.png"
                      alt="Header Logo"></a>
                </div>
                <ul id="respMenu" class="ace-responsive-menu d-flex justify-content-between align-items-center ms-5"
                  data-menu-style="horizontal">
                  <li class="visible_list"> <a class="list-item" href="index.html"><span class="title">Home</span></a></li>
                  <li class="visible_list"><a class="list-item" href="documentation.html"><span class="title">Study Material</span></a>
                  </li>
                  <li class="visible_list"> <a class="list-item" href="casestudy.html"><span class="title">Case Study</span></a>
                  </li>
                  <li class="visible_list"> <a class="list-item" href="wize-ai.html"><span class="title">Wize AI</span></a></li>
                  <li class=""> <a class="list-item" href="contact.html"><span class="title">Contact</span></a></li>
                </ul>
              </div>
            </div>
            <div class="col-auto pe-0 pe-xl-3">
              <div class="d-flex align-items-center">
                <a class="login-info" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><span
                    class="flaticon-loupe"></span></a>
                <a class="ud-btn btn-white add-joining bdrs50 text-thm2 mx-3" href="lawyer.html">Consult an
                  Expert</a>
                <a class="ud-btn btn-white add-joining bdrs50 text-thm2"" href="cart.html">Add to Cart</a>
                <a class="ud-btn btn-white add-joining bdrs50 text-thm2" href="login.html"> Sign In</a>
                <a class="ud-btn btn-white add-joining bdrs50 text-thm2" href="register.html"> Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    `;
}



function setFooter(id) {
    let footer = document.getElementById(id);
    footer.innerHTML = `
    <!-- Our Footer -->
    <section class="footer-style1 at-home6 home2-footer-radius pt25 pb-0">
      <div class="container">
        <div class="row bb-white-light pb10 mb60">
          <div class="col-md-7">
            <div
              class="d-block text-center text-md-start justify-content-center justify-content-md-start d-md-flex align-items-center mb-3 mb-md-0">
              <a class="fz17 fw500 text-white mr15-md mr30" href="">Terms of Service</a>
              <a class="fz17 fw500 text-white mr15-md mr30" href="">Privacy Policy</a>
            </div>
          </div>
          <div class="col-md-5">
            <div class="social-widget text-center text-md-end">
              <div class="social-style1">
                <a class="text-white me-2 fw500 fz17" href="">Follow us</a>
                <a href=""><i class="fab fa-facebook-f list-inline-item"></i></a>
                <a href=""><i class="fab fa-twitter list-inline-item"></i></a>
                <a href=""><i class="fab fa-instagram list-inline-item"></i></a>
                <a href=""><i class="fab fa-linkedin-in list-inline-item"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <img src="images/Legalwize.png" alt="">
            <p class="mt-3 text-white">Your Rights Our Responsibility</p>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="link-style1 mb-4 mb-sm-5">
              <h5 class="text-white mb15 text-start mt-0 ps-0">Services</h5>
              <ul class="ps-0">
                <li><a href="">Consultation</a></li>
                <li><a href="">Documentation</a></li>
                <li><a href="">Litigation</a></li>
                <li><a href="">Defence</a></li>
                <li><a href="">Payment Options</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="link-style1 mb-4 mb-sm-5">
              <h5 class="text-white mb15">Company</h5>
              <ul class="ps-0">
                <li><a href="">About Us</a></li>
                <li><a href="">Our Services</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Blogs</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="link-style1 mb-4 mb-sm-5">
              <h5 class="text-white mb15">Pages</h5>
              <ul class="ps-0">
                <li><a href="">Our Team</a></li>
                <li><a href="">Appointments</a></li>
                <li><a href="">Blog Details</a></li>
                <li><a href="">Contact Us</a></li>
              </ul>
            </div>
          </div>

        </div>
        </div>
      <div class="container white-bdrt1 py-4">
        <div class="text-center text-lg-stsart"><p class="copyright-text mb-0 text-white-light ff-heading text-center">Copyright 2023 © Legalwize All rights reserved.</p></div>
      </div>
  </section>
    `
}