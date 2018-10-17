var head=document.getElementById('header');
head.style.color='black';

function getRandomColor() {
  var letters="0123456789ABCDEF";
  var color='#';
  for (var i = 0; i < 6; i++) {
    color +=letters[Math.floor(Math.random()*16)];
    }
    return color;
  }

  function changeColor() {
    color=getRandomColor();
    head.style.color=color;
  }
  setInterval("changeColor()",300);
