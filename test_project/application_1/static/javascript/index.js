function updateTime() {
    // Получаем текущее время в формате "ЧЧ:ММ:СС"
    var currentTime = new Date().toLocaleTimeString();

    // Находим элемент на странице, куда будем выводить время
    var timeElement = document.getElementById('time');

    // Обновляем содержимое элемента
    timeElement.innerHTML = currentTime;
}

// Запускаем функцию обновления времени каждые 1 секунду
setInterval(updateTime, 1000);