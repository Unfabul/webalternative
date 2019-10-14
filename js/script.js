// Бургер
let sectionMenuNav = document.querySelector('.menu');
let burger = document.querySelector('.burger-button');

burger.addEventListener('click', function(){
    if(this.classList.contains('open')){
        this.classList.remove('open');
        sectionMenuNav.style.display = 'none';
    }else{
        this.classList.add('open');
        sectionMenuNav.style.display = 'flex';
    }
});