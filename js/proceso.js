
async function leerJSON(url) {

  try {
    let response = await fetch(url);
    let user = await response.json();
    return user;
  } catch(err) {
    
    alert(err);
  }
}

function mostrar()
{
var url="https://raw.githubusercontent.com/madarme/persistencia/main/pizza.json";
var resultado=document.getElementById("r");
var msg="";
//resultado.innerHTML=msg;

leerJSON(url).then(datos=>{


console.log(datos);

msg+="<h1>"+datos.nombrePizzeria+"</h1>";

var adicional=datos.adicional;
var pizzas=datos.pizzas;



resultado.innerHTML=msg+leerAdicional(adicional)+leerPizzas(pizzas);
})

}


function leerPizzas(pizzas)
{

var msg="";
for(let i=0;i<pizzas.length;i++)
{

	msg+="<hr>"+pizzas[i].sabor+",<a href='"+pizzas[i].url_Imagen+"'>Ver imagen</a>";
	var precios=pizzas[i].precio;
	msg+=leerPrecios(precios);

}
return msg;
}

function leerPrecios(precios)
{

var msg="";
for(let i=0;i<precios.length;i++)
{

	msg+="<br> Tamaño:"+precios[i].tamano+", Precio:"+precios[i].precio;
	

}
return msg;
}


function leerAdicional(adicional)
{

var msg="<hr><br>Ingredientes adicionales</br>";
for(let i=0;i<adicional.length;i++)
{

	msg+="<br>"+adicional[i].nombre_ingrediente+","+adicional[i].valor;

}
return msg;
}

mostrar();