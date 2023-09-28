let menu = document.getElementById("menu");
let head = document.getElementById("head");
let home = document.getElementById("home");
let nav = document.getElementById("nav");
let exitMenu = document.getElementById("exitMenu");

let who = document.getElementById("who");
let exitWho = document.getElementById("exitWho");
let t = document.getElementById("t");
let showM = document.getElementById("showM");
let showE = document.getElementById("showE");
let WhoTimer = document.getElementById("WhoTimer");
let WhoAudio = document.getElementById("WhoAudio");
let WhoMain = document.getElementById("WhoMain");
let WhoStop = document.getElementById("WhoStop");

let five = document.getElementById("five");
let showQ = document.getElementById("showQ");
let fTimer = document.getElementById("fTimer");
let exitFive = document.getElementById("exitFive");
let f = document.getElementById("f");
let fStop = document.getElementById("fStop");





menu.onclick=()=>{
    menu.classList.add("active")
    head.classList.add("active")
    home.classList.add("active")
    nav.classList.add("active")
}
exitMenu.onclick=()=>{
    menu.classList.remove("active")
    head.classList.remove("active")
    home.classList.remove("active")
    nav.classList.remove("active")
}
t.onclick=()=>{
    who.classList.add("active")
}
f.onclick=()=>{
    five.classList.add("active")
}
exitWho.onclick=()=>{
    who.classList.remove("active")
}
exitFive.onclick=()=>{
    five.classList.remove("active")
}
function show(){
    showE.onclick=()=>{
        let {name,img} =players[Math.floor(Math.random() * players.length)];
        document.querySelector("#WhoNames").innerHTML = name;
        WhoMain.src = img;
        WhoMain.classList.add("active");
        WhoTimer.classList.remove("active");
        WhoTimer.classList.remove("none");
        function resAlarm(){
            time = 59;
            let seconds = time;
            WhoTimer.innerHTML = seconds;
        }
        resAlarm()
    }
    showM.onclick=()=>{
        let {name,img} =photos[Math.floor(Math.random() * photos.length)];
        document.querySelector("#WhoNames").innerHTML = name;
        WhoMain.src = img;
        WhoMain.classList.add("active");
        WhoTimer.classList.remove("active");
        WhoTimer.classList.remove("none");
        function resAlarm(){
            time = 59;
            let seconds = time;
            WhoTimer.innerHTML = seconds;
        }
        resAlarm()
    }
}
show()



function WhoAlarm(){
    WhoTimer.onclick=()=>{
        WhoTimer.classList.add("none")
        let time = 59;
        let stop = setInterval(()=>{
            let seconds = time;
            WhoTimer.innerHTML = seconds;
            time--;
            if(seconds === 0){
                clearInterval(stop);
                alarmWho();
                WhoTimer.classList.add("active")
            }

            WhoStop.onclick=()=>{
                function stoper(){
                    clearInterval(stop);
                    time=59;
                    let seconds = time;
                    WhoTimer.innerHTML = seconds;
                    WhoTimer.classList.remove("none")
                }
                stoper()
            }
        },1000)
    }
}
WhoAlarm()
function alarmWho(){
    WhoAudio.play()
}

function fivee(){
    showQ.onclick=()=>{
        let {quest} =quests[Math.floor(Math.random() * quests.length)];
        document.querySelector("#board").innerHTML =quest ;
        fTimer.classList.remove("none")
        function resFive(){
            time = 9;
            let seconds = time;
            fTimer.innerHTML = seconds;
        }
        resFive()
    }

}
fivee()

function fiveTimer(){
    fTimer.onclick=()=>{
        let time = 9;
        let stop = setInterval(()=>{
            let seconds = time;
            fTimer.innerHTML = seconds;
            time--;
            fTimer.classList.add("none")
            if(seconds === 0){
                clearInterval(stop);
                alarmWho()
            }

            fStop.onclick=()=>{
                function fStoper(){
                    clearInterval(stop);
                    time=9;
                    let seconds = time;
                    fTimer.innerHTML = seconds;
                    fTimer.classList.remove("none")
                }
                fStoper()
            }
        },1000)
    }
}
fiveTimer()

