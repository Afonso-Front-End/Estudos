let dia = 6

let dianome = ''
switch(dia){
    case 6:
    case 7:
        dianome = 'Final de semana'
        break;

    default:
        dianome = 'Dia de semana'
        break;
}
document.getElementById('dia').innerHTML = `Hoje é ${dianome}`