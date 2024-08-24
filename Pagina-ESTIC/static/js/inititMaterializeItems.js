var sideNavs;
var carousels;

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    sideNavs = M.Sidenav.init(elems);

    elems = document.querySelectorAll('.carousel');
    var carousels = M.Carousel.init(elems,{
      fullWidth: true,
      indicators: true
    });
  });