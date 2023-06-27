//for loop
//for array
let carros = ['ferrai', 'fusca','corola','fusca','laborguini']
let html = '<ul>'

for(let i in carros){
    html += '<li>'+carros[i] +'</li>'
}
html += '</ul>'
document.getElementById('demo').innerHTML = html