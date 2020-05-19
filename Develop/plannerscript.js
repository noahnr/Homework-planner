const clock = document.getElementById("currentDay");
setInterval(() => {
    const now = moment();
    const humanReadable = now.format('MMMM Do YYYY, h:mm:ss a');
    currentDay.textContent = humanReadable;
}, 1000);

