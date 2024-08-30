document.addEventListener('DOMContentLoaded', () => {

  const preloader = () => {
    document.body.classList.add('lock');
    window.setTimeout(() => {
      document.body.classList.remove('lock');
      document.body.classList.add('loaded');
    }, 3000);
  };
  preloader();

  // табы
  const Tabs = () => {
    const tabsParent = document.querySelector('.services__tabs'),
          tabs = document.querySelectorAll('.services__tab'),
          tabsContent = document.querySelectorAll('.services__item')
  
    const tabsContentHide = () => {
      tabsContent.forEach((i) => {
        i.classList.add('services__item--hide')
        i.classList.remove('services__item--show')
      });
  
      tabs.forEach((i) => {
        i.classList.remove('services__tab--active')
      });
    };
  
    const tabsContentShow = (i = 0) => {
      tabsContent[i].classList.remove('services__item--hide');
      tabsContent[i].classList.add('services__item--show');
      tabs[i].classList.add('services__tab--active');
    };
  
    tabsContentHide();
    tabsContentShow();
  
    tabsParent.addEventListener('click', (e) => {
      const target = e.target;
  
      if (target && target.classList.contains('services__tab')) {
        tabs.forEach((item, i) => {
          if (target == item) {
            tabsContentHide();
            tabsContentShow(i);
          }
        });
      }
    });
  }
  Tabs();


//  бургер и header__btn
const mobileMenu = () => {
  const btnHeader = document.querySelector('.header__btn'),
        headerListSocial = document.querySelector('.header__listSocial'),
        headerItemSocial = document.querySelectorAll('.header__itemSocial'),
        headerSocial = document.querySelector('.header__social'),
        body = document.querySelector('body');
  
  const ShowHeaderListSocial = () => {
    btnHeader.addEventListener('click', () => {
      headerListSocial.classList.toggle('header__listSocial--show');
  
      headerItemSocial.forEach(i => {
        i.addEventListener('click', () => {
          headerListSocial.classList.remove('header__listSocial--show');
        });
      });
      
    });
  };
  ShowHeaderListSocial();
  
  
  const burger = document.querySelector('.burger'),
        headerList = document.querySelector('.header__list'),
        headerItem = document.querySelectorAll('.header__item');
  
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    headerList.classList.toggle('header__list--show');
    headerSocial.classList.toggle('header__social--active');
    body.classList.toggle('lock');
    
    headerItem.forEach(i => {
      i.addEventListener('click', () => {
        burger.classList.remove('burger--active');
        headerList.classList.remove('header__list--show');
        headerSocial.classList.remove('header__social--active');
        body.classList.remove('lock');
      });
    });
  });
  // mobileMenu
};
mobileMenu();


  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
      document.querySelector('.header').classList.add('header--sticky');
    } else {
      document.querySelector('.header').classList.remove('header--sticky');
    }
  });

  
  $(function(){
    $(".header__list a, .logo").on("click", function (event) {
  
        event.preventDefault();
  
        var id = $(this).attr('href'),
  
          top = $(id).offset().top;
  
        $('body,html').animate({ scrollTop: top }, 1500);
      });
    });


    // slick slider
  $('.certificates__content').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // variableWidth: true
    responsive: [
    {
      breakpoint: 1026,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });


// магия с счётчиком чисел от 0 до нужного значения (190 или 8 это скорость)
  const count = document.querySelectorAll(".countJS");

    for (let i of count) {

    let numberTop = i.getBoundingClientRect().top,
      start = +i.innerHTML,
      end = +i.dataset.max;

    window.addEventListener('scroll', function onScroll() {
      if (window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        let interval = this.setInterval(function () {
          i.innerHTML = ++start;
          if (start == end) {
            clearInterval(interval);
          }
        }, 190); 
      }
    });
  }

let number = document.querySelector('.countJS2'),
  numberTop = number.getBoundingClientRect().top,
  start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 2) {
    this.removeEventListener('scroll', onScroll);
    let interval = setInterval(function () {
      number.innerHTML = ++start;
      if (start == end) {
        clearInterval(interval);
      }
    }, 8);
  }
});


let footerCopyYear = new Date().getFullYear();
let footerCopyYearHTML = document.querySelector('.footer__logo-copyYear');
footerCopyYearHTML.textContent = footerCopyYear;



  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  );
  wow.init();


  // модальные окна 
  const Modal = () => {
    const popapClose = document.querySelectorAll('.popap__close'),
          body = document.querySelector('body'),
          popapOpen = document.querySelectorAll('[data-open]'),
          popap = document.querySelectorAll('[data-modal]');

    popapOpen.forEach((elem, num) => {
      elem.addEventListener('click', e => {
        body.classList.add('lock');
        popap[num].classList.add('popap--active');
      });
    });

    popap.forEach(i => {
      i.addEventListener('click', e => {
        const target = e.target;
        if (!target.closest('.popap__content')) {
          i.classList.remove('popap--active');
          body.classList.remove('lock');
        }
      })

      popapClose.forEach(close => {
        close.addEventListener('click', (e) => {
          e.preventDefault;
          i.classList.remove('popap--active');
          body.classList.remove('lock');
        });
      });


      document.addEventListener('keydown', e => {
        if (e.code === 'Escape' && i.classList.contains('popap--active')) {
          i.classList.remove('popap--active');
          body.classList.remove('lock');
        }
      });
    
    });

    //Modal
  };
  Modal();



//ContentLoaded
});