const timerEl = document.getElementById("timer");
const defuserEl = document.getElementById("defuser");

let countdown = 10;

const intervalId = setInterval(function () {
    countdown = countdown - 1;
    timerEl.textContent = countdown;

    if (countdown === 0) {
        timerEl.textContent = "BOOM!!";
        timerEl.style.color = "yellow";
        clearInterval(intervalId);
        return;
    }

    if (countdown <= 5) {
        timerEl.style.color = "red";
        timerEl.style.border="solid 2px"
        timerEl.style.width="100px"
        
    }
}, 1000);

defuserEl.addEventListener("keydown", function (event) {
    const bombEl = defuserEl.value;

    if (event.key === "Enter" && bombEl === "defuse" && countdown !== 0) {
        timerEl.textContent = "Successfully Done!";
        timerEl.style.color="white";
        timerEl.style.fontWeight="500"
        timerEl.style.padding="12px"
        timerEl.style.marginTop="10px"
        timerEl.style.backgroundColor="green"
        clearInterval(intervalId);
    }
});