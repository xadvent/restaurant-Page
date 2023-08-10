import Cheese from '../img/cheeseSticks.jpg'
import bkgrd from '../img/louis-hansel-Pizzeria.jpg'
import Pasta from '../img/pasta.png'
import Pizza from '../img/pizza.png'
import PizzaBoy from '../img/pizzaboy.jpeg'
import Logo from '../img/restaurantLogo.png'

const makeFetch = function (path) {
    const preload = document.createElement('link')
    preload.rel = 'prefetch'
    preload.href = path

    document.head.appendChild(preload)
}

export default function(){
    makeFetch(Logo)
    makeFetch(PizzaBoy)
    makeFetch(Pizza)
    makeFetch(Pasta)
    makeFetch(bkgrd)
    makeFetch(Cheese)

    const favIcon = document.createElement('link')
    favIcon.rel = 'icon'
    favIcon.href = Logo
    favIcon.type = 'image/x-icon'
    document.head.appendChild(favIcon)
}