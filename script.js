const p = new URLSearchParams(location.search);
const f = (p.get('flower') || 'A').toUpperCase();

const imageMap = {
  A: 'A.JPG',
  B: 'B.JPG',
  C: 'C.JPG',
  D: 'D.JPG',
  E: 'E.JPG',
  F: 'F.JPG',
  G: 'G.JPG',
  H: 'H.JPG',
  I: 'I.JPG',
  J: 'J.JPG',
  K: 'K.JPG',
  L: 'L.PNG',
  M: 'M.JPG',
  N: 'N.JPG'
};

const intro = document.getElementById('intro');
const result = document.getElementById('result');
const openBtn = document.getElementById('openBtn');
const flowerImage = document.getElementById('flowerImage');

flowerImage.src = 'images/' + (imageMap[f] || imageMap.A);

openBtn.onclick = () => {
  const c = document.getElementById('petals');
  c.innerHTML = '';

  for (let i = 0; i < 22; i++) {
    const s = document.createElement('span');
    s.className = 'petal';
    s.textContent = '❀';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.fontSize = (14 + Math.random() * 12) + 'px';
    s.style.animationDelay = Math.random() * 0.45 + 's';
    c.appendChild(s);
  }

  setTimeout(() => {
    intro.style.display = 'none';
    result.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 520);

  setTimeout(() => {
    c.innerHTML = '';
  }, 2300);
};
