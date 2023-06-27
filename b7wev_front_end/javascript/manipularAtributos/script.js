function trocarimg(filename,animalname){
    document.querySelector('.imagen').setAttribute('src', 'img/'+filename)
    document.querySelector('.imagen').setAttribute('data-animal',animalname)
}
function verfoto(){
    let foto = document.querySelector('.imagen').getAttribute('data-animal')
    alert('A foto é '+foto)
}