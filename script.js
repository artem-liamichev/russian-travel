const allLangs = ['ru', 'en'];
let currentLang = localStorage.getItem('language') || checkBrowserLanguage() || 'ru';
const langButtons =  document.querySelectorAll('[data-btn]');
const currentPathName = window.location.pathname;
const ruElems = document.querySelectorAll(".ru")
const enElems = document.querySelectorAll(".en")

const currentText = {
    'lead-title': {
        ru: 'Путешествия по России',
        en: 'Travelling around Russia',
  },
    'lead-subtitle': {
        ru: 'Настоящая страна не в выпускахновостей, а здесь.',
        en: 'The real country is not in the news, but here',
  },
}

function changeLang() {
    for (const key in currentText) {
        const elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = currentText[key][currentLang]
        }
    }

    switch (currentLang) {
      case 'ru':
          enElems.forEach(elem => {
              elem.style.display = "none";
          });
          ruElems.forEach(elem => {
            elem.style.display = "block";
          });
          break;
      case 'en':
          ruElems.forEach(elem => {
              elem.style.display = "none";
          });
          enElems.forEach(elem => {
            elem.style.display = "block";
          });
          break;
    default:
          enElems.forEach(elem => {
              elem.style.display = "none";
          });
          ruElems.forEach(elem => {
            elem.style.display = "block";
          });
          break;
    }
}

changeLang();

langButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        currentLang = event.target.dataset.btn;
        localStorage.setItem('language', event.target.dataset.btn)
        resetActiveClass(langButtons, 'header__lang-link_active')
        btn.classList.add('header__lang-link_active');
        changeLang();
    })
});

function resetActiveClass(arr, activeClass) {
    arr.forEach(elem => {
        elem.classList.remove(activeClass)
    });
}

function checkActiveLnagButton() {
    switch (currentLang) {
        case 'ru':
            document
                .querySelector('[data-btn="ru"]')
                .classList.add('header__lang-link_active');
            break;
        case 'en':
            document
                .querySelector('[data-btn="en"]')
                .classList.add('header__lang-link_active');
            break;
      default:
          document
            .querySelector('[data-btn="en"]')
            .classList.add('header__lang-link_active');
          break;
    }
}
checkActiveLnagButton();

function checkBrowserLanguage() {
  const navLang = navigator.language.slice(0,2).toLowerCase();
  const result = allLangs.some(elem => {
      return elem === navLang;
  });

  if(result) {
      return navLang;
  }
}
