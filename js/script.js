function updateSpan() {
    const divElement = document.querySelector('.tab-pane.show');
    if (divElement) {
        const myText = divElement.getAttribute('mytext');
        const spanElement = document.querySelector('.title-tab');
        if (spanElement) {
        spanElement.textContent = myText;
        } else {
        console.error('not find span and title-tab');
        }
    } else {
    console.error('not find tab-pane and show');
    }
}
const element = document.querySelector('.nav');
function applyAttributes() {
    if (window.innerWidth <= 992) {
        element.setAttribute('data-bs-target', '#sections-nav');
    }else {
        element.setAttribute('data-bs-target', '#');
    }
}

applyAttributes();
window.addEventListener('resize', applyAttributes);

document.addEventListener('DOMContentLoaded', function () {
    updateSpan()
    const tabLinks = document.querySelectorAll('button[data-bs-toggle="pill"]');
    tabLinks.forEach(function (tab) {
        tab.addEventListener('shown.bs.tab', function () {
            updateSpan();
        });
    });
    updateSpan()
});

// ! Define required variables
let cardSelectedElemnt = () => {
    let cardElemnt = document.querySelector('.card-selected');
    let containerHeader = cardElemnt.children[0];
    let containerBody = cardElemnt.children[1];
    let containerFooter = cardElemnt.children[2];
    let chipCardActive = containerHeader.children[1].children[0];
    let classListContainerFooter = containerFooter.classList;
    let logoFooterCard = containerFooter.children[0].children[1].children[0];
    return {
        cardElemnt,
        containerHeader,
        containerBody,
        containerFooter,
        chipCardActive,
        classListContainerFooter,
        logoFooterCard
    }
}

// func remove class
let deleteClass = (nameClass) => {
    let nameClassRemove = document.querySelectorAll(`.${nameClass}`)   
    nameClassRemove.forEach(element => {
        element.classList.remove(nameClass);
    })
}
// func add class
let addClass = (nameClass, classListElement) => {
    classListElement.add(nameClass)
}
// func change active card
let changeActiveCard = (event) => {
    let cardSelected = cardSelectedElemnt();
    cardSelected.classListContainerFooter.add("footer-card-other");
    deleteClass("card-selected");
    deleteClass("active-mod-card");
    cardSelected.logoFooterCard.setAttribute("src", "img/logo-card.svg");
    cardSelected.chipCardActive.setAttribute("src", "img/chip.svg");
    let cardElemntEvent = event.target.parentElement;
    let containerHeaderEvent = cardElemntEvent.children[0];
    let containerFooterEvent = cardElemntEvent.children[2];
    let chipCardActiveEvent = containerHeaderEvent.children[1].children[0];
    let classListContainerFooterEvent = containerFooterEvent.classList;
    let logoFooterCardEvent = containerFooterEvent.children[0].children[1].children[0];
    classListContainerFooterEvent.remove("footer-card-other");
    logoFooterCardEvent.setAttribute("src", "img/logo-card-active.svg")
    chipCardActiveEvent.setAttribute("src", "img/chip-active.svg")
    event.target.parentElement.classList.add("active-mod-card")
    event.target.parentElement.classList.add("card-selected")
}

let cards = document.querySelectorAll(".container-card");
cards.forEach(card => {
    card.addEventListener("click", changeActiveCard);
})
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
