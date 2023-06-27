
function showTime(){
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let dat = d.toLocaleDateString()
    
    document.querySelector('.hora').innerHTML = `${h}`
    document.querySelector('.minutos').innerHTML = `${m}`
    document.querySelector('.segundos').innerHTML = `${s}`
    document.querySelector('.data').innerHTML = `${dat}`
}
//showTime()
//atualizar automaticamente
let timer
function iniciar(){
    timer = setInterval(showTime, 1000)

}
function parar(){
    clearInterval(timer)
}


