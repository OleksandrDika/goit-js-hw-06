// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Заранее прошу прщения, но все перепробовал, в цикле получалось только создать Li, а вот присвоить им класс и textContent никак не дошло как...

const list = document.createElement('ul');
list.classList.add('#ingredients');
// console.log(list);

const li = document.createElement('li');
li.classList.add('item');
// console.log(li);

let createList = ingredients.map(ingredient => `<li class = "item">${ingredient}<li>`).join("")

// console.log(createList)
list.insertAdjacentHTML("afterbegin", createList)
console.log(list)

// const li1 =document.createElement('li');
// li1.textContent = ingredients[0];
// li1.classList.add('item')

// const li2 =document.createElement('li');
// li2.textContent = ingredients[1];
// li2.classList.add('item')

// const li3 =document.createElement('li');
// li3.textContent = ingredients[2];
// li3.classList.add('item')

// const li4 =document.createElement('li');
// li4.textContent = ingredients[3];
// li4.classList.add('item')

// const li5 =document.createElement('li');
// li5.textContent = ingredients[4];
// li5.classList.add('item')

// const li6 =document.createElement('li');
// li6.textContent = ingredients[5];
// li6.classList.add('item')

// list.append(li1,li2,li3,li4,li5,li6)

// console.log(list)








