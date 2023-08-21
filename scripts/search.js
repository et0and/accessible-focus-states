const f = document.getElementById('form');
const q = document.getElementById('query');
const wcc = 'https://search.wellington.govt.nz/s/search.html?collection=wcc-search&profile=_default&query=';

function submitted(event) {
  event.preventDefault();
  const url = wcc + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);