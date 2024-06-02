function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('header-time').innerHTML = currentTime;

    let seconds = today.getSeconds();
    document.getElementById('clock-hand').style.transform = `rotate(${seconds * 6}deg)`;

    document.getElementById('seconds-counter').textContent = seconds;
    
    setTimeout(showTime, 1000);
}
    window.onload = showTime;
  


