/*******************************************
  При клике на черный квадрат,
  который находится на странице(элемент div c 
  классом square) необходимо добавлять еще одни 
  класс с именем green
 *******************************************/

let square = document.querySelector('.square');

square.addEventListener('click', function() {
    square.classList.add('green');
})



/*******************************************
  При клике на зеленый круг,
  который находится на странице(элемент div c 
  классом square-green) необходимо удалить второй 
  класс с именем green.
 *******************************************/


  let circle = document.querySelector('.circle');

  circle.addEventListener('click', function() {
      circle.classList.remove('green');
  })




  /*******************************************
  При клике на желтый треугольник, который находится 
  на странице(элемент div c классом triangle)
  необходимо проверить существует ли в блоке класс 
  yellow и если существует, то необходимо его удалить 
  и на его место добавить второй класс с именем green.
  ******************************************/



  let triangle = document.querySelector('.triangle');

  triangle.addEventListener('click', function() {
    if (triangle.classList.contains('yellow')) {
        triangle.classList.add('green')
        triangle.classList.remove('yellow')
    }
    else {
        triangle.classList.add('yellow')
        triangle.classList.remove('green');
    }
  })