const consoleLog = document.querySelector("#consoleLog");
const alertt = document.querySelector("#alertt")
const promptt = document.querySelector("#promptt")

consoleLog.addEventListener("click", () => {
    alert("Служит для вывода информации в консоль.");
})

alertt.addEventListener("click", () => {
    alert("Показывает окно с текстовой информацией и кнопку подтверждения прочтения");
})

promptt.addEventListener("click", () => {
    alert("Выводит в окне браузера окно с полем для ввода текста и кнопкой подтверждения ввода");
})