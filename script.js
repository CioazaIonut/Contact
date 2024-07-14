// ----- Contact Form -----
const contactForm = document.querySelector('.contact-form');

const inputFirstName = document.querySelector('.input-first-name');
const eroareInputFirstName = document.querySelector('.eroare-input-first-name');

const inputSecondName = document.querySelector('.second-first-name');
const eroareInputSecondName = document.querySelector('.eroare-input-second-name');

const inputEmail = document.querySelector('.email-name');
const eroareEmailName = document.querySelector('.eroare-email-name');

const inputQuery = document.querySelector('.query-name');
const eroareQuery = document.querySelector('.eroare-email-name');

const inputMesage = document.querySelector('.mesage-name');
const eroareMesageName = document.querySelector('.eroare-message-name');

const handleSubmit = (e) => {
    e.preventDefault();

    if (inputFirstName.value.length === 0) {
        eroareInputFirstName.style.display = 'block';
    } else {
        eroareInputFirstName.style.display = 'none';
    }

    if (inputSecondName.value.length === 0) {
        eroareInputSecondName.style.display = 'block';
    } else {
        eroareInputSecondName.style.display = 'none';
    }

    if (inputEmail.value.length === 0) {
        eroareEmailName.style.display = 'block';
    } else {
        eroareEmailName.style.display = 'none';
    }

    if (inputMesage.value.length === 0) {
        eroareMesageName.style.display = 'block';
    } else {
        eroareMesageName.style.display = 'none';
    }

    if (inputQuery.value.length === 0) {
        eroareQuery.style.display = 'block';
    } else {
        eroareQuery.style.display = 'none';
    }
};

contactForm.addEventListener('submit', handleSubmit);


//-----------
const buton = document.querySelector(".button-class");

const buttonClean = document.querySelector(".button-class-clean");


const singurulButon = () => {


}

buton.addEventListener("click",singurulButon);


const butonsCleanAll = () => {
    

}

buton.addEventListener("click",singurulButon);

//alert("Oare functioneaza?")


/* 
                                                   Tema
*/