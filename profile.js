let showFavColor = () => {
    alert('My favorite color is Green.')
}

let favColor = document.querySelector("#color");
favColor.addEventListener('click', showFavColor);


let showFavPlace = () => {
    alert('My favorite place is Costa Rica!')
}

let favPlace = document.querySelector("#place");
favPlace.addEventListener('click', showFavPlace);


let showFavRitual = () => {
    alert('My favorite ritual is drinking my morning Redbull.')
}

let favRitual = document.querySelector("#ritual");
favRitual.addEventListener('click', showFavRitual);