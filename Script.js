window.addEventListener("DOMContentLoaded",showTime())
//create time and session

function showTime(){

    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";

    if(h == 0) {
        h=12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

        h = h <10 ? (h = "0" + h) : h;
        m = m < 10 ? (m = "0" + m) : m;
        s = s < 10 ? (s = "0" + s) : s;

        const time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("myClockDisplay").innerText = time;
        setTimeout(showTime,1000);

        // background colour
        let bg;
        const userName = "Stranger";
        const user=document.getElementById("user")

        if (h < 8 && session ==="AM") {
            bg = `url(Morning.jpg)`;
            user.innerHTML = `Good morning ${userName}`;
        } else if (h < 11 && session === "AM") {
            bg = `url(daytime.jpg)`;
            user.innerHTML = `Good afternoon ${userName}`;
        } else if (h < 8 && session === "PM") {
            bg = `url(Evening.jpg)`;
            user.innerHTML = `Good evening ${userName}`;
        } else {
            bg = `url(Nighttime.jpg)`;
            user.innerHTML = `Good Night ${userName}`;
        }
        const body=document.querySelector("body");

        body.style.background=`${bg} center/cover`;
    }

