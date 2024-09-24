const menu =document.getElementById("menuburger");

menu.addEventListener('click', function () {
     const nav = document.getElementById('navbar')
     if (nav.style.display == 'flex') {
         nav.style.display = 'none'

     } else {
        
         nav.style.display = 'flex';
         nav.style.flexDirection = 'column'
     }

})



