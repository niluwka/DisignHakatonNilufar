// let btn = document.querySelector('.main__get-btn');
// let btnClickRight =  document.querySelector('.main__get-link');
// let btnClickLeft = document.querySelector('.main__link-free')
// btn.addEventListener('click', function(){
 
//   btnClickRight.classList.toggle('move');
//   btnClickLeft.classList.toggle('active')
// })

function toggleItem(elem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function(e) {
      var current = this;
      for (var i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
          elem[i].classList.remove('active');
        } else if (current.classList.contains('active') === true) {
          current.classList.remove('active');
        } else {
          current.classList.add('active')
        }
      }
      e.preventDefault();
    });
  };
}
toggleItem(document.querySelectorAll('.button'));

// const current = document.querySelector('href');
// const menuItem = document.querySelectorAll('.button');
// const menuLenght = menuItem.length
// for (let i = 0; i < menuLenght; i++) {
//   if (menuItem[i].current === current) {
//     menuItem[i].className = 'active'
//   }  
// }