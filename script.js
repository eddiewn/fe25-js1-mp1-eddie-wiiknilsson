document.body.style = "margin: 0; padding: 0; box-sizing: border-box;"


const hDiv = document.createElement("div");
hDiv.style = "display: flex; flex-direction: column;"


for (let index = 5; index > 0; index--) {
    const createH = document.createElement(`h${index}`)
    createH.textContent = `Rad ${6 - index}`
    hDiv.appendChild(createH)

}

document.body.appendChild(hDiv)




