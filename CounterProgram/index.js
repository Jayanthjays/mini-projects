const Decreasebtn = document.getElementById(`Decreasebtn`)
const increasebtn = document.getElementById(`increasebtn`)
const Resetbtn = document.getElementById(`Resetbtn`)
const countLabel = document.getElementById(`countLabel`)

let count=0;

increasebtn.onclick = function(){
    count++;
    countLabel.textContent=count;
}
Decreasebtn.onclick = function(){
    count--;
    countLabel.textContent=count;
}
Resetbtn.onclick = function(){
    count=0;
    countLabel.textContent=count;
}

console.log(Math.PI);