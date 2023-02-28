const container = document.querySelector('.container');
const linkUnsplash = 'https://source.unsplash.com/random/'

for (let i = 0; i < 15; i++) {
  const img = document.createElement('img');
  img.src = `${linkUnsplash}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random(1,10) * 10) + 400;
}