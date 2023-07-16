(function () {
  let toggle = document.getElementById('nav-toggle')
  let content = document.getElementById('nav-content')

  let show = () => {
    toggle.setAttribute('aria-expanded', true)
    content.setAttribute('aria-hidden', false)
  }

  let hide = () => {
    toggle.setAttribute('aria-expanded', false)
    content.setAttribute('aria-hidden', true)
  }

  toggle.addEventListener('click', event => {
    event.stopPropagation()
    JSON.parse(toggle.getAttribute('aria-expanded')) ? hide() : show()
  })

  let handleClosure = event => !content.contains(event.target) && hide()

  window.addEventListener('click', handleClosure)
  window.addEventListener('focusin', handleClosure)
})();

let menu = document.querySelector(".menu__list");
menu.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("menu__link")) {
    menu.style.setProperty(
      "--line-width",
      `${e.target.offsetWidth}px`
    );
    menu.style.setProperty(
      "--line-offset-x",
      `${e.target.offsetLeft}px`
    );
  }
});
menu.addEventListener("mouseleave", () =>
  menu.style.setProperty("--line-width", "0")
);
window.addEventListener('load', function () {
  let menu = document.querySelector('.menu__list');
  let menuLink = menu.querySelectorAll('.menu__link');
  let box = parseInt(getComputedStyle(document.querySelector('.header')).height);



  if (window.location.hash != "") {
    scrollToId(window.location.hash, box);
  }
  menu.addEventListener('click', function (e) {
    if (e.target.classList.contains('menu__link')) {
      e.preventDefault();
      let link = e.target;
      scrollToId(link.hash, box);

    }
  });
  let bntUp = document.querySelector('.up');
  window.addEventListener('scroll', function () {
    for (let i = menuLink.length - 1; i >= 0; i--) {
      let link = document.querySelector(menuLink[i].hash);
      if (link != null) {
        let position = link.getBoundingClientRect().y + pageYOffset;

        if (position < window.pageYOffset + box) {
          menu.querySelector('.menu__link--active').classList.remove('menu__link--active');
          menuLink[i].classList.add('menu__link--active');
          break;
        }
      }
    };
    if (pageYOffset >= window.innerHeight) {
      bntUp.classList.add('up--active');
    }
    else {
      bntUp.classList.remove('up--active');
    }
  });
  bntUp.addEventListener('click', function () {
    scroll(0);
  });
  function scrollToId(id, head) {
    let target = document.querySelector(id);
    if (target !== null) {
      let position = target.getBoundingClientRect().y + pageYOffset - head;
      scroll(position);
    }
  }
  let form = document.querySelector('.price__subtitle-list');
  let activRadio = form.querySelector('input:checked');
  let select = form.querySelector('.select');
  let contetns = document.querySelectorAll('[data-price-content]')
  let radio = form.querySelectorAll('.price__subtitle-item');
  select.innerText = activRadio.value;
  if (document.documentElement.clientWidth < 768) {
    form.addEventListener('click', function (e) {
      console.log(this);
      this.classList.toggle('price__subtitle-list--active');
      // if(e.target.classList.contains('active')){
      //   this.classList.remove('active');
      // }
      // else{
      //   this.classList.add('active');
      // }

      if (e.target.classList.contains('price__subtitle-input')) {
        // toargetItem(e.target.value);
        select.innerText = e.target.value;

        this.classList.toggle('price__subtitle-list--active');
        for (let i = 0; i < radio.length; i++) {
          console.log(radio[i])
          if (radio[i].classList.contains('price__subtitle-item-active')) {
            radio[i].classList.remove('price__subtitle-item-active');
          }
          e.target.parentNode.classList.add('price__subtitle-item-active')


        }

        let activeAtribute = e.target.getAttribute('data-price-radio');

        for (let i = 0; i < contetns.length; i++) {
          let conetnAtribute = contetns[i].getAttribute('data-price-content');
          if (activeAtribute === conetnAtribute) {
            // console.log(this);
            contetns[i].classList.add('price__cost-item--active');
          }
          else {
            contetns[i].classList.remove('price__cost-item--active');
          }
        };
      }
    });
  }

  let price = document.querySelector('.price');

  price.addEventListener('click', function (e) {
    if (e.target.classList.contains('price__name')) {
      showPrice(e.target);
    }
  });

});
function showPrice(cost) {
  let infoPrice = cost.parentNode.querySelector('.price__info');
  let heightPrice = infoPrice.scrollHeight;
  if (infoPrice.animateFlag) {
    return
  }
  infoPrice.animateFlag = true;
  if (infoPrice.classList.contains('price__info--active')) {
    let animate = infoPrice.animate([
      { height: heightPrice + 'px' },
      { height: '0px' }
    ], {
      duration: 400
    });
    animate.addEventListener('finish', function () {
      infoPrice.classList.remove('price__info--active');
      cost.classList.remove('price__name--active');
      infoPrice.animateFlag = false;

    })
  }
  else {
    infoPrice.classList.add('price__info--active');
    cost.classList.add('price__name--active');
    let animate = infoPrice.animate([
      { height: '0px' },
      { height: heightPrice + 'px' }
    ], {
      duration: 400
    });
    animate.addEventListener('finish', function () {
      infoPrice.animateFlag = false;
    })
  }
}
function scroll(varible) {
  window.scrollTo({
    top: varible,
    behavior: 'smooth'
  })
}
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    720: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  pagination: {
    el: ".swiper-pagination",
  },


});

// Подключение карты
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.38032309, 36.71389993],
    zoom: 15,
    size: (700, 700)
  }),
    myPieChart = new ymaps.Placemark([
      55.38032309, 36.7138999
    ], {
          // Задаем стиль метки (метка в виде круга).
    preset: "islands#circleDotIcon",
    // Задаем цвет метки (в формате RGB).
    iconColor: '#ff0000'
    });
  myMap.geoObjects
    .add(new ymaps.Placemark([55.38032309, 36.7138999], {
      balloonContent: 'Время работы: <br> ПН — ВС с 9:00 до 20:00 ',
      iconCaption: 'Салон Нурилло',

    }, {
      preset: 'islands#greenDotIconWithCaption',
      iconColor: '#E18700'
    }));

}
//Библиотека Rellax
var rellax = new Rellax('.rellax');
