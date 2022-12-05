// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


// ================= НЕ МОГУ ДОБИТЬСЯ "Anonymous" ПРИ ПУСТОМ INPUTe ЧТО НЕ ДЕЛАЛ... ЖДУ ПОМОЩЬ))

const enterName = document.querySelector('#name-input')
console.log(enterName)
const enterNameView = document.querySelector('#name-output')
console.log(enterNameView)


enterName.addEventListener("input", (event) => {
  return event.currentTarget.value ? enterNameView.textContent = event.currentTarget.value : enterNameView.textContent ='Anonymous';
    
  });

