let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

function back(myTextarea) {
    console.log(myTextarea);
    myTextarea = myTextarea.substring(0, myTextarea.length - 1);
    return myTextarea;
}

let screenValue = "";
for (const item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        console.log("Button text is ", buttonText);

        if (buttonText == "x") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == "C") {
            x.pause();
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue);
        }
        else if (buttonText == "«") {
            screenValue = back(screenValue);
            screen.value = screenValue;
        }
        else if (buttonText == "√") {
            screenValue = Math.sqrt(eval(screenValue));
            screen.value = screenValue;
        }
        else if (buttonText == "☁") {
            setTimeout(() => {
                open("https://www.google.com/search?q=weather&rlz=1C1CHBF_enIN949IN949&oq=weat&aqs=chrome.0.0i67i131i433j69i57j0i67i433i457j0i402l2j0i67j0i67i433j0i433i512j0i512j0i131i433i512.2405j1j15&sourceid=chrome&ie=UTF-8", "_blank")
            }, 1000);
            screenValue = "Fetching weather...";
            screen.value = screenValue;
        }
        else if (buttonText == "♪") {
            x = document.getElementById("myAudio");
            x.play();
            screenValue = "Playing music...";
            screen.value = screenValue;
        }
        else if (buttonText == "✉") {
            setTimeout(() => {
                open('https://github.com/', '_blank');
            }, 1000);
            screenValue = "Fetching Github...";
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}