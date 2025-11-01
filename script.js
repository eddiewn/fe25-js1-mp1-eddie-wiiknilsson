document.body.style = "margin: 0; padding: 0; box-sizing: border-box;"


const hDiv = document.createElement("div");
hDiv.style = "display: flex; flex-direction: column;"

let hue = 120;

for (let index = 5; index > 0; index--) {
    const createH = document.createElement(`h${index}`)
    createH.textContent = `Rad ${6 - index}`
    createH.style = `background-color: hsl(${hue} 89.6% 84.9%); color: #6E6EF7; text-align: center;`
    hDiv.appendChild(createH)
    hue = hue + 20;
}


document.body.appendChild(hDiv)

// start color: #B6FBB6

//end color: #B6E4FB





