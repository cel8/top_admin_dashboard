const img = document.querySelectorAll('img')
img.forEach(i => {
  i.setAttribute("draggable", false);
});

const input = document.querySelectorAll('input')
input.forEach(i => {
  i.setAttribute("draggable", false);
});