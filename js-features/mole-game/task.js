const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let counterDead = 0;
let counterLost = 0;

const getHole = (index) => {
    return document.getElementById(`hole${index}`);
}


for (i = 1; i <= 9; i++) {
    let hole = getHole(i);
    hole.onclick = () => {
        if(hole.classList.contains("hole_has-mole")){
            counterDead++;
            dead.textContent = counterDead;
            console.log("hello");
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }

        if (counterDead === 10) {
            alert("Победа!");
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
            lost.textContent = counterLost;
        }
        if (counterLost === 5){
            alert("Поражение!");
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
            lost.textContent = counterLost;   

        }
    }
}
