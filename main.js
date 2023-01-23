// JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


(function() {
    "use strict"; // Start of use strict
  
    var scrollToTop = document.querySelector('.scroll-to-top');
    
    if (scrollToTop) {
      
      // Scroll to top button appear
      window.addEventListener('scroll', function() {
        var scrollDistance = window.pageYOffset;
  
        if (scrollDistance > 100) {
          scrollToTop.style.display = 'block';
        } else {
          scrollToTop.style.display = 'none';
        }
      });
    }
  
    var mainNav = document.querySelector('#mainNav');
  
    if (mainNav) {
  
      var navbarCollapse = mainNav.querySelector('.navbar-collapse');
      
      if (navbarCollapse) {
        
        var collapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        
        var navbarItems = navbarCollapse.querySelectorAll('a');
        
        // Closes responsive menu when a scroll trigger link is clicked
        for (var item of navbarItems) {
          item.addEventListener('click', function (event) {
            collapse.hide();
          });
        }
      }
  
      // Collapse Navbar
      var collapseNavbar = function() {
  
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  
        if (scrollTop > 100) {
          mainNav.classList.add("navbar-shrink");
        } else {
          mainNav.classList.remove("navbar-shrink");
        }
      };
      // Collapse now if page is not at top
      collapseNavbar();
      // Collapse the navbar when page is scrolled
      document.addEventListener("scroll", collapseNavbar);
    }
  
  })(); // End of use strict
  