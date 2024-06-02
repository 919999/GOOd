function showDate () {
    let currentDate = new Date();

    let ruDate = document.getElementById('ru-date');
    ruDate.innerHTML = 'Дата и время для русской локали: ' + currentDate.toLocaleString('ru-RU');

    let frDate = document.getElementById('fr-date');
    frDate.innerHTML = 'Дата и время для французской локали: ' + currentDate.toLocaleString('fr-FR');

    let arDate = document.getElementById('ar-date');
    arDate.innerHTML = 'Дата и время для арабской локали: ' + currentDate.toLocaleString('ar-AE');

    let krDate = document.getElementById('kr-date');
    krDate.innerHTML = 'Дата и время для локали Кореи: ' + currentDate.toLocaleString('ko-KR');

    let inDate = document.getElementById('in-date');
    inDate.innerHTML = 'Дата и время для локали Индии: ' + currentDate.toLocaleString('hi-IN');

    let currentYear = document.getElementById('current-year');
    currentYear.innerHTML = 'Текущий год: ' + currentDate.getFullYear();

  
    let currentMonth = document.getElementById('current-month');
    currentMonth.innerHTML = 'Текущий месяц: ' + (currentDate.getMonth() + 1);

    let currentDay = document.getElementById('current-day');
    currentDay.innerHTML = 'Текущая дата: ' + currentDate.getDate();

    let weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let currentWeekday = document.getElementById('current-weekday');
    currentWeekday.innerHTML = 'День недели: ' + weekdays[currentDate.getDay()];
}
function showWeekday() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let date = new Date(year, month - 1, day);
    let weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let weekday = weekdays[date.getDay()];

    let result = document.getElementById("weekday-result");result.innerHTML = `Для даты ${day}.${month}.${year} день недели - ${weekday}`;
  }