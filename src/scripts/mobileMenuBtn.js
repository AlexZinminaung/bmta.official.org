const menuBtn = document.getElementsByClassName('mobile-menu')[0];
const dropBox = document.getElementsByClassName('nav-bar-mobile')[0];


const dropDown = () => {
    dropBox.classList.toggle('active');
}


menuBtn.addEventListener('click', dropDown);

// for mobile links

const dropDownList = document.getElementsByClassName('drop-down-container-mobile');
const dropLinkList = document.getElementsByClassName('drop-down-mobile');

for (let i = 0; i < dropDownList.length; i++)
    {
        const getDropLink = () => {
            dropLinkList[i].classList.toggle('active');
        }

        dropDownList[i].addEventListener('click', getDropLink);
    }