import {dataFood} from './dataFood.js';

window.addEventListener("load", (e) => {
    const container = document.querySelector("#container-js")
    dataFood.forEach(data => {
        // card
        const card = document.createElement("div")
        card.classList.add("card")

        // img
        const img = document.createElement("img")
        img.src = data.image
        img.classList.add("cardImg")
        card.appendChild(img)

        // description container
        const descriptionContainer = document.createElement("div")
        descriptionContainer.classList.add("descriptionContainer")

        // name
        const name = document.createElement("p")
        name.innerText = data.name
        name.classList.add("cardName")
        descriptionContainer.appendChild(name)

        // description
        const description = document.createElement("p")
        description.innerText = data.description
        description.classList.add("cardDescription")
        descriptionContainer.appendChild(description)

        // price container
        const priceContainer = document.createElement("div")
        priceContainer.classList.add("priceContainer")

        // price
        const price = document.createElement("p")
        price.innerText = data.price + "$"
        price.classList.add("cardPrice")
        priceContainer.appendChild(price)

        // quantity
        const quantity = document.createElement("p")
        quantity.innerText = data.quantity
        quantity.classList.add("cardQuantity")
        priceContainer.appendChild(quantity)

        card.appendChild(descriptionContainer)
        card.appendChild(priceContainer)
        container.appendChild(card)
    })
})