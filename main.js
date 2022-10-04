document.addEventListener('DOMContentLoaded', init)

let szamlalo= 0;


function init()
{
    document.getElementById('alma').addEventListener('click', alma);
    document.getElementById('sajt').addEventListener('click', sajt);
    document.getElementById('ragcsa').addEventListener('click', ragcsa);
    document.getElementById('remove').addEventListener('click', torles);
}




function alma()
{
let szuloElem = document.getElementById('lista');
let listaElem = document.createElement('li');
listaElem.textContent= "Alma - 20 kcal";
szuloElem.appendChild(listaElem);
szamlalo+=20;
document.getElementById('osszkal').textContent= szamlalo;
}


function sajt()
{
    let szuloElem = document.getElementById('lista');
    let listaElem = document.createElement('li');
    listaElem.textContent= "Sajt - 40 kcal";
    szuloElem.appendChild(listaElem);
    szamlalo+=40;
    document.getElementById('osszkal').textContent= szamlalo;
}


function ragcsa()
{
    let szuloElem = document.getElementById('lista');
    let listaElem = document.createElement('li');
    listaElem.textContent= "Rágcsa - 80 kcal";
    szuloElem.appendChild(listaElem);
    szamlalo+=80;
    document.getElementById('osszkal').textContent= szamlalo;
}

function torles()
{
    szamlalo=0;
    document.getElementById('osszkal').textContent= szamlalo;
    let szuloElem = document.getElementById('lista');
szuloElem.textContent="";
}