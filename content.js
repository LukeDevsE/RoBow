console.log('RoBow is Awake');
const elements = document.querySelectorAll('.font-header-2.nav-menu-title.text-header');

elements.forEach(function(element) {
  if (element.textContent === 'Discover') {
    element.textContent = 'Games';
  } else if (element.textContent === 'Avatar Shop') {
    element.textContent = 'Catalog';
  }
});


const header = document.querySelector('.games-list-header h1');
if (header) {
  header.innerHTML = 'Games';
}
const bannerContainer = document.querySelector('.banner-container');
bannerContainer.className = 'banner-container hidden';

const navElements = ['nav-blog', 'nav-giftcards', 'nav-shop', 'nav-inventory'];

navElements.forEach(id => {
  const navElement = document.getElementById(id);
  const parent = navElement.parentElement;

  if (parent && parent.nodeName === 'LI') {
    parent.remove();
  } else {
    navElement.remove();
  }
});

const eventsElements = document.querySelectorAll('.font-bold.small.text-nav');

eventsElements.forEach(element => {
  if (element.innerText === 'Events' && element.nodeName === 'LI') {
    element.remove();
  }
});

const upgradeElements = document.querySelectorAll('.rbx-upgrade-now');

upgradeElements.forEach(element => {
  if (element.nodeName === 'LI') {
    element.remove();
  }
});
