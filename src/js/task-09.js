// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color 
// і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// ============== НЕ СОВСЕМ ПОНЯЛ УСЛОВИЕ, МЕНЯЮ У <body> backgroundColor, жду правки если надо переделатьб спасибо======

const btnChange = document.querySelector(".change-color");
console.log(btnChange);

const viewColor = document.querySelector(".color");
console.log(viewColor);



btnChange.addEventListener("click", getRandomHexColor)

function getRandomHexColor() {
  viewColor.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
    document.body.style.backgroundColor = viewColor.textContent;
}




// function getRandomHexColor() {
//   document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`
  
// }
