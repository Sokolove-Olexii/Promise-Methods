// Завдання 1

// "Порівняння кількох промісів"

// Ви маєте набір функцій, які
// повертають проміси з випадковими затримками.
// Ваше завдання — виконати всі проміси одночасно
// за допомогою Promise.all і обробити результати.

//     Створіть функцію delayedPromise,
//     яка приймає значення і затримку (у мілісекундах)
//     і повертає проміс, який вирішується з заданим
//     значенням після затримки.
//     Створіть масив з 5 промісів,
//     використовуючи функцію delayedPromise,
//     із різними значеннями та затримками.
//     Використайте Promise.all, щоб
//     одночасно виконати всі проміси з масиву.
//     Обробіть результати вирішення
//     промісів та виведіть їх у консоль.

function delayedPromise(value, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}

const promises1 = [
  delayedPromise("A", 3000),
  delayedPromise("B", 1500),
  delayedPromise("C", 4000),
  delayedPromise("D", 1000),
  delayedPromise("E", 2500),
];

Promise.all(promises1)
  .then((result) => console.log("race:", result))
  .error((error) => console.log("error:"), error);

// Завдання 2

// "Змагання промісів"

// Ви маєте набір функцій,
// які повертають проміси з випадковими затримками.
// Ваше завдання — виконати всі проміси одночасно
// за допомогою Promise.race і отримати результат
// найшвидшого проміса.

//     Створіть функцію randomDelay, яка
//     приймає значення і повертає проміс з
//     випадковою затримкою (від 1000 до 5000 мілісекунд).
//     Створіть масив з 5 промісів, використовуючи
//     функцію randomDelay, із різними значеннями.
//     Використайте Promise.race, щоб виконати всі
//     проміси з масиву і отримати результат найшвидшого проміса.
//     Обробіть результат найшвидшого проміса та виведіть його у консоль.

function randomDelay(value) {
  const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}

const promises2 = [
  randomDelay("Q"),
  randomDelay("W"),
  randomDelay("E"),
  randomDelay("R"),
  randomDelay("T"),
  randomDelay("Y"),
];

Promise.race(promises2)
  .then((result) => console.log("Promise.race result:", result))
  .catch((error) => console.error("Promise.race error:", error));
