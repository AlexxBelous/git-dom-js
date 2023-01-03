// Создать div

// Добавить к нему класс wrapper

// Поместить его внутрь тэга body

// Создать заголовок H1 "DOM (Document Object Model)"

// Добавить H1 перед DIV с классом wrapper

// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"


// Поместить список внутрь элемента с классом wrapper

// =================================================
// Создать изображение

// Добавить следующие свойства к изображению
// 1. Добавить атрибут source - https://picsum.photos/240

// 2. Добавить атрибут width со значением 240

// 3. Добавить класс super

// 4. Добавить свойство alt со значением "Super Man"

// Поместить изображение внутрь элемента с классом wrapper




























































// /* ----Создать div */ 
// const div = document.createElement('div');







// /* ----Добавить к нему класс wrapper */ 
// div.classList.add('wrapper');








// /* ----Поместить его внутрь тэга body */ 
// const body = document.body;
// body.appendChild(div);








// /* ----Создать заголовок h1 и вставьте текст - "DOM (Document Object Model)" */ 
// const header = document.createElement('h1');
// header.textContent = 'DOM (Document Object Model)';







// /* ----Добавить H1 перед DIV с классом wrapper */ 
// div.insertAdjacentElement('beforebegin', header);







// /*  -----Создать список <ul></ul> и добавить в него три элемента с текстом один, два, три*/
// const ul = `
//     <ul>
//         <li>один</li>
//         <li>два</li>
//         <li>три</li>
//     </ul>
// `;








// /* ----Поместить список внутрь элемента с классом wrapper */ 
// div.innerHTML = ul;










// /* ----Создать изображение */ 
// const img = document.createElement('img');










// /* ------Добавить следующие свойства к изображению: */ 
// /* 1. Добавить атрибут source */ 
// img.src = 'https://picsum.photos/240';

// /* 2. Добавить атрибут width со значением 240 */ 
// img.width = 240;

// /* 3. Добавить класс super */ 
// img.classList.add('super');

// /* 4. Добавить свойство alt со значением "Super Man" */ 
// img.alt = 'Super Man';







// /* ----Поместить изображение внутрь элемента с классом wrapper */ 
// div.appendChild(img)




