let clock = document.getElementById('clock');

function updateTime(){
    let now = new Date;
    let hrs = now.getHours().toString().padStart(2, 0);
    let mins = now.getMinutes().toString().padStart(2, 0);
    let secs = now.getSeconds().toString().padStart(2, 0);

    clock.textContent = `${hrs}:${mins}:${secs}`
};
updateTime();
setInterval(updateTime, 1000);