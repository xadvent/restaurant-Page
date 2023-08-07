
export const makeElementWithClass = function (element, selectedClass) {
    const newElement = document.createElement(element);
    newElement.classList.add(selectedClass)
    return newElement
}