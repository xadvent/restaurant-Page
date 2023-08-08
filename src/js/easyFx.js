
export const makeElementWithClass = function (element, selectedClass) {
    const newElement = document.createElement(element);
    newElement.classList.add(selectedClass)
    return newElement
}

export const makeElementWithID = function(element, pickID){
    const newElement = document.createElement(element)
    newElement.id = pickID
    return newElement
}