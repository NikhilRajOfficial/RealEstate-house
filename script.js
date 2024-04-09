
  'use strict ';

  // Navbar toggle in mobile

    document.addEventListener("DOMContentLoaded", function() {
    const $navbar = document.querySelector("[data-navbar]");
    const $navbarToggler = document.querySelector("[data-nav-toggler]");
  
    $navbarToggler.addEventListener("click", () => $navbar.classList.toggle("active"));




    //   header scroll state  
    const $header = document.querySelector("[data-header]");

  window.addEventListener("scroll", e => {
          $header.classList[window.scrollY > 50 ?  "add" : "remove"]("active");
            });



            const $favBtns = document.querySelectorAll(".fav-btn");

                $favBtns.forEach($favBtn => {
                    $favBtn.addEventListener("click", () => {
                        $favBtn.classList.toggle("active");
                    });
                });
  });

  


  