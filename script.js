// ----- Contact Form -----
const contactForm = document.querySelector('.contact-form');

const inputFirstName = document.querySelector('.input-first-name');
const eroareInputFirstName = document.querySelector('.eroare-input-first-name');

const inputSecondName = document.querySelector('.second-first-name');
const eroareInputSecondName = document.querySelector('.eroare-input-second-name');

const inputEmail = document.querySelector('.email-name');
const eroareEmailName = document.querySelector('.eroare-email-name');

const generalEnquiryInput = document.querySelector('.general-enquiry-input');
const supportRequestInput = document.querySelector('.support-request-input');
const eroareQueryFieldset = document.querySelector('.eroare-query-fieldset');

const inputMesage = document.querySelector('.mesage-name');
const eroareMesageName = document.querySelector('.eroare-message-name');

const checkboxInput = document.querySelector('.last-input-container');
const eroareCheckboxInput = document.querySelector('.eroare-checkbox-consent');

const checkboxInputDoi = document.querySelector('.last-input-container-doi');
const eroareCheckboxInputDoi = document.querySelector('.eroare-checkbox-consent-doi');

const primaPagina = document.querySelector(".prima-pagina");
const aDouaPagina = document.querySelector(".second-page");
const butonNext = document.querySelector(".button-next");
const continutDoi = document.querySelector(".second-page-container");
const buttonReset = document.querySelector(".button-reset-secound-page");

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

    if (generalEnquiryInput.checked === false && supportRequestInput.checked === false) {
        eroareQueryFieldset.style.display = 'block';
    } else {
        eroareQueryFieldset.style.display = 'none';
    }

    if (checkboxInput.checked === false) {
        eroareCheckboxInput.style.display = 'block';
    } else {
        eroareCheckboxInputDoi.style.display = 'none';
    }

    if (checkboxInputDoi.checked === false) {
        eroareCheckboxInputDoi.style.display = 'block';
    } else {
        eroareCheckboxInputDoi.style.display = 'none';
    }
};

contactForm.addEventListener('submit', handleSubmit);


//-----------
const buttonClean = document.querySelector(".button-class-clean-disabled");

const resetareFormular = () => {
    inputFirstName.value = "";
    inputSecondName.value = "";
    inputEmail.value = "";
    inputMesage.value = "";

    document.getElementById('radio1').checked = false;
    document.getElementById('radio2').checked = false;
}

buttonClean.addEventListener("click", resetareFormular);

//alert("Oare functioneaza?")

/* Buton pagina 2*/

const goToNextStep = () => {
const selectedButton = document.querySelector(".second-page");

if (selectedButton === null) {
    alert("Please select a rate");
} else {
    primaPagina.style.display = 'none';
    aDouaPagina.style.display = 'block';

    continutDoi.innerText = selectedButton.innerText;
}
}

butonNext.addEventListener("click", goToNextStep);

/* buton reset pagina 2 */

const resetButtonPasDoi = () => {
    primaPagina.style.display = 'block';
    aDouaPagina.style.display = 'none';
    butonNext.classList.remove("active-button")
    

}

buttonReset.addEventListener("click",resetButtonPasDoi);


/* 
                                                   Tema

*/