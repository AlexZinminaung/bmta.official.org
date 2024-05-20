const mlcBoxElement = document.getElementsByClassName('mcl-box');
const ContentElement = document.getElementsByClassName("mcl-drop-box");



for (let i = 0;i < mlcBoxElement.length; i++){
    const onSchoolLabel = () => {
        ContentElement[i].classList.toggle('active');
    }
    mlcBoxElement[i].addEventListener('click',onSchoolLabel);
}


