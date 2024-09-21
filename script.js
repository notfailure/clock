function updateClock() {
    const now = new Date();

    const hour = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const sec = String(now.getSeconds()).padStart(2, '0');

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    document.getElementById('hour').textContent = hour;
    document.getElementById('min').textContent = min;
    document.getElementById('sec').textContent = sec;

    document.getElementById('year').textContent = year;
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
}

setInterval(updateClock, 1000);
updateClock();