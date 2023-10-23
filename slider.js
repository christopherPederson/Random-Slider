/* Type: JavaScript
Author: Christopher Pederson 2023-10-20
Description: JavaScript for the slider page
Co-Author:
this is a random content generator that will cycle through provided content and display it in a random order
if you add to the project, please place your name and the date in the co-author section above
*/

const thumbnailsArray = []; // this array holds your image paths in a string format
const namesArray = []; // this array holds the slides title name in a string format
const descriptionsArray = []; // this array holds the description of the slide in a string format
let slideArray = [];//This array holds the slide objects, but you will not need to add content to this array

class slideObj {
    constructor(thumbnail, name, description) {
        this.thumbnail = thumbnail;
        this.name = name;
        this.description = description;
    }
}

//This event listener is to make sure the DOM is loaded before the script is run
document.addEventListener('DOMContentLoaded', () => {
    const slideCount = (document.querySelectorAll('[data-slide-id]')).length;

    setArray(slideArray, thumbnailsArray, namesArray, descriptionsArray);
    shuffleArray(slideArray);
    setSlides(slideArray, slideCount);
});

//The purpose of this function is to place the info from all three image, name, and description arrays into one _array of objects
let setArray = (_slideArray, _thumbnailsArray, _namesArray, _descriptionsArray) => {
    for (let i = 0; i < _thumbnailsArray.length; i++) {
        _slideArray.push(new slideObj(_thumbnailsArray[i], _namesArray[i], _descriptionsArray[i]));
    }
    console.log(_slideArray);
}

//The purpose of this function is to shuffle the array to randomize the occurrence of slides
let shuffleArray = (_array) => {
    let currentIndex = _array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);

        currentIndex -= 1;

        temporaryValue = _array[currentIndex];

        _array[currentIndex] = _array[randomIndex];

        _array[randomIndex] = temporaryValue;
    }
}

//The purpose of this function is to set the slides in the DOM
let setSlides = (_array, index) => {
    const imageElements = document.querySelectorAll('[data-image-id]');
    const nameElements = document.querySelectorAll('[data-name-id]');
    const descriptionElements = document.querySelectorAll('[data-description-id]');

    for (let i = 0; i < index; i++) {
        imageElements[i].src = _array[i].thumbnail;
        nameElements[i].innerHTML = _array[i].name;
        descriptionElements[i].innerHTML = _array[i].description;
    }
}
