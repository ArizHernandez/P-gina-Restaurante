window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToScroll: 1,
        slidesToShow: 1,
        scrollLock: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 450,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 800,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll:1,
          }
        }
      ]
    });
  })
