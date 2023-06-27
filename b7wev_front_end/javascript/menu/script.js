function clique(){
    let  menu = document.querySelector('.menu-item')
    if( menu.classList.contains('open')){
        menu.classList.remove('open')
    }else{
        menu.classList.add('open')
    }
}