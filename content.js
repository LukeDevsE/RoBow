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
header.innerHTML = 'Games';
const bannerContainer = document.querySelector('.banner-container');
bannerContainer.className = 'banner-container hidden';