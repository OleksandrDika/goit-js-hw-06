// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// НЕ ЗНАЮ КАК ИСПРАВИТЬ, ОТНИМАЕТ ВРОДЕ НОРМАЛЬНО, А ДОБАВЛЯЕТ СТРОКИ........?????

const addNumber = document.querySelector('button[data-action="increment"]');

const subtractNumber = document.querySelector('button[data-action="decrement"]');

const value = document.querySelector('#value')

addNumber.addEventListener('click', plusNumber);
subtractNumber.addEventListener('click', minusNumber)

let result = 0;

console.log(value.textContent)
function plusNumber(){
   result += 1;
   value.textContent = result;    
}

function minusNumber(){
    value.textContent -= 1;
   
}

