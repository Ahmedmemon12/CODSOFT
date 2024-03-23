const PageBtn = document.getElementById('pageLink')
const BlogBtn = document.getElementById('BLogLink')
const PageDropper = document.getElementById('pageDrop')
const BlogDropper = document.getElementById('blogDrop')
const collapser = document.getElementById('navCollapser')
const CollapseBtn = document.getElementById('menuBtn')
const Navbar = document.getElementById('Navbar')
const MenFilters = document.querySelector('.MFilter')
const WomenFilters = document.querySelector('.WFilter')
const BabyFilters = document.querySelector('.BFilter')
const FashionFilters = document.querySelector('.FFilter')
const MenSlider = document.getElementById('MSlider')
const WomenSlider = document.getElementById('WSlider')
const BabySlider = document.getElementById('BSlider')
const FashionSlider = document.getElementById('FSlider')

const allSlider = document.querySelectorAll('.MSlider')
const allFilters = document.querySelectorAll('.filters')

window.addEventListener('DOMContentLoaded', function () {
  $('.Slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>"
  });
  $('.MSlider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.mSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.testSlider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  setTimeout(()=>{
      allSlider.forEach((item, index)=>{
          console.log(index,'----->', item);
          // item.forEach((slide, sIndex)=>{
          //     slide[sIndex].classList.add('HiderSlider')
          // })
          if (index > 0) {
              item.classList.add('HiderSlider')
          }
      })

  },200)

  

})



allFilters.forEach((btn, index)=>{
    btn.addEventListener('click', function () {
        allFilters.forEach((disabled, disIndex)=>{
            disabled.classList.remove('filters-active')
            allSlider[disIndex].classList.add('HiderSlider')
        })
        btn.classList.add('filters-active')
        allSlider[index].classList.remove('HiderSlider')
    })
})

PageBtn.addEventListener('mouseover', function () {
  PageDropper.style.display = 'flex'
})
PageBtn.addEventListener('mouseleave', function () {
  PageDropper.style.display = 'none'
})

PageDropper.addEventListener('mouseover', function () {
  PageDropper.style.display = 'flex'
})

BlogBtn.addEventListener('mouseover', function () {
  BlogDropper.style.display = 'flex'
})
BlogBtn.addEventListener('mouseleave', function () {
  BlogDropper.style.display = 'none'
})

BlogDropper.addEventListener('mouseover', function () {
  BlogDropper.style.display = 'flex'
})

CollapseBtn.addEventListener('click', function () {
  collapser.classList.toggle('collapsedNavShow')
})
// MenFilters.addEventListener('click', function () {
//     MenFilters.classList.add('filters-active')
//     WomenFilters.classList.remove('filters-active')
//     BabyFilters.classList.remove('filters-active')  
//     FashionFilters.classList.remove('filters-active')

//     MenSlider.classList.remove('HiderSlider')
//     WomenSlider.classList.add('HiderSlider')
//     BabySlider.classList.add('HiderSlider')
//     FashionSlider.classList.add('HiderSlider')
// })
// WomenFilters.addEventListener('click', function () {
//     MenFilters.classList.remove('filters-active')
//     WomenFilters.classList.add('filters-active')
//     BabyFilters.classList.remove('filters-active')  
//     FashionFilters.classList.remove('filters-active')  

//     MenSlider.classList.add('HiderSlider')
//     WomenSlider.classList.remove('HiderSlider')
//     BabySlider.classList.add('HiderSlider')
//     FashionSlider.classList.add('HiderSlider')
// })
// BabyFilters.addEventListener('click', function () {
//     MenFilters.classList.remove('filters-active')
//     WomenFilters.classList.remove('filters-active')
//     BabyFilters.classList.add('filters-active')  
//     FashionFilters.classList.remove('filters-active')  

//     MenSlider.classList.add('HiderSlider')
//     WomenSlider.classList.add('HiderSlider')
//     BabySlider.classList.remove('HiderSlider')
//     FashionSlider.classList.add('HiderSlider')
// })
// FashionFilters.addEventListener('click', function () {
//     MenFilters.classList.remove('filters-active')
//     WomenFilters.classList.remove('filters-active')
//     BabyFilters.classList.remove('filters-active')  
//     FashionFilters.classList.add('filters-active')  

//     MenSlider.classList.add('HiderSlider')
//     WomenSlider.classList.add('HiderSlider')
//     BabySlider.classList.add('HiderSlider')
//     FashionSlider.classList.remove('HiderSlider')
// })




window.addEventListener('scroll', function () {
  const currentPostion = window.pageYOffset

  if (currentPostion >= 300) {
    Navbar.classList.add('NavFix')
  }
  else if (currentPostion < 300) {
    Navbar.classList.remove('NavFix')
  }
})
