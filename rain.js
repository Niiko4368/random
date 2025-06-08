const rain = document.querySelector('.rain');
for (let i = 0; i < 100; i++) {
  const drop = document.createElement('div');
  drop.classList.add('drop');
  drop.style.left = Math.random() * window.innerWidth + 'px';
  drop.style.animationDuration = 0.5 + Math.random() * 0.7 + 's';
  drop.style.opacity = Math.random();
  rain.appendChild(drop);
}