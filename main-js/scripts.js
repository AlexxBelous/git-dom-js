// /* ----Создать div */ 



// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами


// Поместить этот DIV до элемента <ul></ul>


// Добавить для 2-го параграфа класс text


// Удалить 1-й параграф


// Создать функцию generateAutoCard, 
// которая принимает 3 аргумента: brand, color, year


// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>


// Создать новый DIV с классом autos


// Создать 3 карточки авто, используя функцию generateAutoCard
// const carsList = [
//   {brand: 'Tesla', year: 2015, color: 'Красный'},
//   {brand: 'Lexus', year: 2016, color: 'Серебристый'},
//   {brand: 'Nissan', year: 2012, color: 'Черный'},
// ]


// Поместить эти 3 карточки внутрь DIV с классом autos


// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper


// Добавить кнопку Удалить на каждую карточку авто


// При клике на кнопку - удалять карточку из структуры DOM

// 1. Выбрать все кнопки
// 2. Создать функцию удаления
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку



































/* ----Создать div */ 
const div = document.createElement('div');




/* ----Поместить его внутрь тэга body */ 
const body = document.body;
body.appendChild(div);






/* ----Создать функцию generateAutoCard, которая принимает 3 аргумента: brand, color, year */ 
const generateAutoCard = (brand, color, year) => {
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    return `
        <div class="autoCard">
            <h2>${brand.toUpperCase()} ${year}</h2>
            <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${curYear - year} лет.</p>
            <p>Цвет: ${color}</p>
            <button type='button' class='btn'>Удалить</button>
        </div>
    `;
}


/* Функция должна возвращать разметку HTML: */ 
{/* <div class="autoCard">
  <h2>BRAND YEAR</h2>
  <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
 </div> */}



/* Создать новый DIV с классом autos */ 
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');



/* Создать 3 карточки авто, используя функцию generateAutoCard */ 
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'},
]

const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');

/* Поместить эти 3 карточки внутрь DIV с классом autos */ 
carsDiv.innerHTML = carsHTML;


/* Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper */ 
div.insertAdjacentElement('beforebegin', carsDiv);


/*  Добавить кнопку Удалить на каждую карточку авто */
/* При клике на кнопку - удалять карточку из структуры DOM */ 
/* 1. Выбрать все кнопки */ 
const buttons = document.querySelectorAll('.btn');



/* 2. Создать функцию удаления */ 
function handleClick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove();
    // console.log(currentButton.parentElement)
}


/* 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку */ 
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})