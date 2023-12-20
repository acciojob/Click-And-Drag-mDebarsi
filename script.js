// Your code here.
let isDragging = false;
let startX, currentX, scrollLeft;

document.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('cube')) {
    isDragging = true;
    startX = e.clientX;
    scrollLeft = document.querySelector('.container').scrollLeft;
  }
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  currentX = e.clientX;
  const delta = currentX - startX;
  document.querySelector('.container').scrollLeft = scrollLeft - delta;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mouseleave', () => {
  isDragging = false;
});
