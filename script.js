document.body.style = "margin: 0; padding: 0; box-sizing: border-box;"
document.p

const hDiv = document.createElement("div");
hDiv.style = "display: flex; flex-direction: column;"

let hue = 120;

for (let index = 5; index > 0; index--) {
    const createH = document.createElement(`h${index}`)
    createH.textContent = `Rad ${6 - index}`
    createH.style = `background-color: hsl(${hue} 89.6% 84.9%); color: #6E6EF7; text-align: center;`
    hDiv.appendChild(createH)
    hue += 20;
}

const secondDiv = document.createElement("div");
secondDiv.style = "border: 2px solid black; display: flex; justify-content: space-around; padding: 30px;"

const rowOne = document.createElement("div");
rowOne.style = "display: flex; flex-direction: column; width: 10%; background-color: #A8A8F0; padding: 20px;"

const rowTwo = document.createElement("div");
rowTwo.style = "display: flex; flex-direction: column-reverse; text-align: center; width: 10%; background-color: #A8A8F0; padding: 20px;"

const rowThree = document.createElement("div");
rowThree.style = "display: flex; flex-direction: column; text-align: end; width: 10%; background-color: #A8A8F0; padding: 20px;"
secondDiv.append(rowOne, rowTwo, rowThree)

const letterArray = ["ett" ,"två","tre","fyra","fem","sex","sju","åtta","nio","tio"];
const indexOpacityZero = [];


for (let index = 0; index < 3; index++) {
    const randomNumber = Math.floor(Math.random() * ((index + 1) * letterArray.length - index * letterArray.length)) + index * letterArray.length;
    indexOpacityZero.push(randomNumber)
}

console.log(indexOpacityZero)

for (let index = 0; index < letterArray.length * 3; index++) {
    const appendP = document.createElement("p");
    appendP.style.margin = "0";
    
    indexOpacityZero.includes(index) ? (appendP.style.backgroundColor = "rgba(255, 0, 0, 0)", index % 2 === 0 ? appendP.style.color = "white" : "black" ) : index % 2 === 0 ? (appendP.style.color = "white", appendP.style.backgroundColor = "black") : (appendP.style.backgroundColor = "white",appendP.style.color = "black")

    index < (letterArray.length) ? (appendP.textContent = `${index}`, rowOne.appendChild(appendP)) : index >= letterArray.length && index < letterArray.length * 2 ? (appendP.textContent = `${index - letterArray.length}`, rowTwo.appendChild(appendP)) : (appendP.textContent = `${letterArray[index - 20]}`, rowThree.appendChild(appendP));
}

document.body.append(hDiv, secondDiv)





