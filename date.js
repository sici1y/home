function updateDateTime() {

    const currentDate = new Date();


    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const Time = hour + ":" + minutes + ":" + seconds;

    const dateString = (currentMonth + 1) + "-" + currentDayOfMonth + "-" + currentYear;

    document.querySelector("#realTime").textContent = moment(Time, 'HH:mm:ss').format('h:mm:ss A');
    document.querySelector('#realDate').textContent = dateString;
}

setInterval(updateDateTime, 1000);