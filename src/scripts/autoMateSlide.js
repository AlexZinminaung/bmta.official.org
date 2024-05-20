let slideElement = document.getElementsByClassName('hero-slider');
let index = 0


const autoMateSlide = () =>
    {
        slideElement[index].classList.remove('active');
        if (index < slideElement.length -1){
            index +=1;
            slideElement[index].classList.add('active');
            
        }

        else {
            index = 0;
            slideElement[index].classList.add('active');
        }

    setTimeout(autoMateSlide, 6000)
    }

slideElement[index].classList.add('active');

setTimeout(autoMateSlide, 6000);
