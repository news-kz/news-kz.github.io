
document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('body').classList.remove('not-anim');

    if(!getCookie(nameCookie)){
        let popUp = document.querySelector('.pop-up');
        popUp.classList.add('pop-up_show');
        document.querySelector('.wrapper').style.paddingTop = popUp.offsetHeight+'px';
        document.querySelector('.pop-up > button').addEventListener('click', function (e) {
            popUp.classList.remove('pop-up_show');
            document.querySelector('.wrapper').style.paddingTop = '0px';
            setCookie(nameCookie,'true',optionCoocie);
        });
    } else {
        // deleteCookie(nameCookie);
    }

    window.onscroll = function(){
        if(document.documentElement.scrollTop > 20){
            document.querySelector('h1').classList.add('scroll-h1');
        } else {
            document.querySelector('h1').classList.remove('scroll-h1');
        }
    }





});


