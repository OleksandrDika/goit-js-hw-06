// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
//  і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const list = document.querySelector("#categories")
const listItem = [...list.children]

let totalCategories = 0;
for (let index = 0; index < listItem.length; index++) {
    totalCategories =totalCategories + 1;      
}

console.log(`Number of categories: ${totalCategories}`);

const item = document.querySelectorAll('.item');
for (let index = 0; index < item.length; index++) {
     const Category = item[index].firstElementChild.textContent

    console.log(`Category: ${Category}`)
    const elements = item[index].lastElementChild 
    
    const elem = [...elements.children]
    console.log(`Elements: ${elem.length}`)

}








