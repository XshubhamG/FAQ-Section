
const questionSection = document.querySelectorAll('.question__section');
const answer = document.getElementsByClassName('answer');
const arrow = document.querySelectorAll('.arrow');



questionSection.forEach(question => {
    question.addEventListener('click', () => {
        if(question === questionSection[0]){
            answer[0].classList.toggle('display');
            arrow[0].classList.toggle('rotate');
        }else
        
        if(question === questionSection[1]) {
            answer[1].classList.toggle('display');
            arrow[1].classList.toggle('rotate');

        }else 
        
        if(question === questionSection[2]) {
            answer[2].classList.toggle('display');
            arrow[2].classList.toggle('rotate');
        }else 
        
        if(question === questionSection[3]) {
            answer[3].classList.toggle('display');
            arrow[3].classList.toggle('rotate');

        }else
        
        if(question === questionSection[4]) {
            answer[4].classList.toggle('display');
            arrow[4].classList.toggle('rotate');

        }

    })
})