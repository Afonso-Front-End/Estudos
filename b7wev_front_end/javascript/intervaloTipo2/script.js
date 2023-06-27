let timer
function iniciar(){
    //parar timer
    timer = setTimeout(function(){
        //parar timer 
    let data = new Date()
    let d = data.toLocaleDateString()
    document.querySelector('.data').innerHTML = `${d}`
    },2000)
}
function parar(){
    clearTimeout(timer)
}


