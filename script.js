// переменная, в которой хранится выбранное действие
var op;

// функция, которая подсветит выбранное действие
function sel_light(sel_id) {
  // убираем класс подсветки со всех кнопок
  document.getElementById("plus").classList.remove("light")
  document.getElementById("minus").classList.remove("light")
  document.getElementById("times").classList.remove("light")
  document.getElementById("divide").classList.remove("light")

  // добавляем только к нажатой
  document.getElementById(sel_id).classList.add("light")

  // в зависимости от нажатой клавиши меняем значение op
  switch (sel_id) {
    case 'plus':
    op = '+';
    break;
    case 'minus':
    op = '-';
    break;
    case 'times':
    op = '*';
    break;
    case 'divide':
    op = '/';
    break;
  }
}

// функция расчёта
function func() {
  // переменная для результата
  var result;
  // получаем первое и второе число
  var num1_str = String(document.getElementById("num1").value);
  var num2_str = String(document.getElementById("num2").value);

  // проверяем, не пустая ли первая строка (пустая или содержит пробелы)
  if ((num1_str.length == 0) || (num1_str.indexOf(' ') != -1)) {
    // пустая - выводим сообщение
    document.getElementById('result').innerHTML = 'Вы не ввели первое число';
    // выходим
    return;
  }

  // проверяем, не пустая ли вторая строка (пустая или содержит пробелы)
  if ((num2_str.length == 0) || (num2_str.indexOf(' ') != -1)) {
    // пустая - выводим сообщение
    document.getElementById('result').innerHTML = 'Вы не ввели второе число';
    // выходим
    return;
  }

  // переводим строки в числа
  let num1 = Number(num1_str);
  let num2 = Number(num2_str);

  // проверяем, получилось ли число из первой строки
  if (isNaN(num1)) {
    // не получилось - выводим сообщение
    document.getElementById('result').innerHTML = 'Калькулятор не распознал число. Проверьте, пожалуйста';
    // выходим
    return;
  }
  // проверяем, получилось ли число из второй строки
  if (isNaN(num2)) {
    document.getElementById('result').innerHTML = 'Калькулятор не распознал число. Проверьте, пожалуйста';
    return;
  }

  // проверяем размер числа
  if ((num1 > 99999999) || (num2 > 99999999)) {
    document.getElementById('result').innerHTML = 'Калькулятор может работать с числами не больше 99 999 999';
    return;
  }

  // проверка второго числа на ноль при делении
  if ((num2 == 0) && (op == '/')) {
    document.getElementById('result').innerHTML = 'На ноль делить нельзя!';
    return;
  }

  // действуем исходя из переменной с действием
  switch (op) {
    case '+':
    result = num1 + num2;
    break;
    case '-':
    result = num1 - num2;
    break;
    case '*':
    result = num1 * num2;
    break;
    case '/':
    result = num1 / num2;
    break;
    default: result = 'Выберите действие!';
  }
  // отправяляем результат на страницу
  document.getElementById("result").innerHTML = result;
}