//=========================================================================================================
// JS № 13 - Обработка ошибок. Работа в классе - Практическая работа 
//=========================================================================================================


//=========================================================================================================
// Создайте функцию на JavaScript, которая будет делить два числа, 
// но при этом использовать блок try-catch для обработки возможной ошибки деления на ноль. 
// Если при делении произошла ошибка, функция должна выдавать сообщение "Ошибка: деление на ноль!".
//  Если ошибки не произошло, функция должна выводить результат деления.
//---------------------------------------------------------------------------------------------------------
// Создайте функцию на JavaScript, которая будет принимать массив чисел и возвращать их сумму. 
// Однако, если в массиве есть хотя бы один элемент, который не является числом, 
// функция должна выдавать сообщение "Ошибка: в массиве есть неверные данные!" с 
// использованием блока try-catch.
//---------------------------------------------------------------------------------------------------------
// Создайте функцию на JavaScript, которая будет принимать строку и возвращать её длину.
//  Однако, если входная строка не является строкой, 
// функция должна выдавать сообщение "Ошибка: введенное значение не является строкой!" с 
// использованием блока try-catch.
//=========================================================================================================

console.log("=== Практическая работа: Обработка ошибок ===");

let logData = []; // Логирование всех действий


// 1️⃣ **Функция для деления чисел**
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Ошибка: деление на ноль!");
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}

// Функция запроса чисел у пользователя
function divideNumbersPrompt() {
    let a = parseFloat(prompt("Введите первое число:"));
    let b = parseFloat(prompt("Введите второе число:"));

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("divisionResult").innerHTML = "❌ Ошибка: Введите корректные числа!";
        return;
    }

    let result = divideNumbers(a, b);
    document.getElementById("divisionResult").innerHTML = `➗ Результат: ${result}`;
    logData.push({ task: "Деление чисел", a, b, result });
}


// 2️⃣ **Функция для суммы массива**
function sumArray(numbers) {
    try {
        if (!Array.isArray(numbers)) {
            throw new Error("Ошибка: переданное значение не является массивом!");
        }
        if (numbers.some(num => typeof num !== 'number')) {
            throw new Error("Ошибка: в массиве есть неверные данные!");
        }
        return numbers.reduce((sum, num) => sum + num, 0);
    } catch (error) {
        return error.message;
    }
}

// Функция запроса массива у пользователя
function sumArrayPrompt() {
    let input = prompt("Введите числа через запятую:").split(",");
    let numbers = input.map(num => parseFloat(num.trim()));

    if (numbers.some(isNaN)) {
        document.getElementById("arraySumResult").innerHTML = "❌ Ошибка: Введите только числа!";
        return;
    }

    let result = sumArray(numbers);
    document.getElementById("arraySumResult").innerHTML = `🔢 Сумма: ${result}`;
    logData.push({ task: "Сумма массива", input, result });
}


// 3️⃣ **Функция для вычисления длины строки**
function getStringLength(input) {
    try {
        if (typeof input !== 'string') {
            throw new Error("Ошибка: введенное значение не является строкой!");
        }
        return input.length;
    } catch (error) {
        return error.message;
    }
}

// Функция запроса строки у пользователя
function getStringLengthPrompt() {
    let input = prompt("Введите строку:");

    if (!input) {
        document.getElementById("stringLengthResult").innerHTML = "❌ Ошибка: Введите строку!";
        return;
    }

    let result = getStringLength(input);
    document.getElementById("stringLengthResult").innerHTML = `📏 Длина строки: ${result}`;
    logData.push({ task: "Длина строки", input, result });
}


// ✅ **Вывод лога всех действий**
function showLog() {
    console.log("=== ЛОГ ВЫПОЛНЕННЫХ ДЕЙСТВИЙ ===");
    console.table(logData);
    document.getElementById("logOutput").textContent = JSON.stringify(logData, null, 2);
}
