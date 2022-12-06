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

const list = document.querySelector('#ingredients');
// list.classList.add('#ingredients');
// console.log(list);


const newArrey = [];
for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement('li')
  li.textContent = ingredients[i];
  li.classList.add('item');
  newArrey.push(li)
  
}
console.log(newArrey)

list.append(...newArrey)











