var headOne= document.querySelector("#one");
var headTwo= document.querySelector("#two");
var headThree= document.querySelector("#three");

headOne.addEventListener('mouseover',function(){
  headOne.textContent ="Mouse is currently over";
  headOne.style.color='blue';
})

headOne.addEventListener('mouseout',function(){
  headOne.textContent="Hover over me";
  headOne.style.color='black';
})

headTwo.addEventListener("click",function(){
  headTwo.textContent="i was clicked";
  headTwo.style.color='blue';
  // consol.log("i was clicked")
})

headThree.addEventListener('dblclick',function(){
  headThree.textContent='i was double clicked';
  headThree.style.color='red';
})
