// ---------array de objetos a mostrar en pantalla
let datos=[
    {
        titulo: "Maletin de herramientas" ,
        descripcion: "un buen maletin para transportar tus herramientas" ,
        precio: "$500",
        imagen:"imagenes/ferreteria/maletin.jpg",
        id:0

    }, {
        titulo:"Mecha 5mm" ,
        descripcion: "mecha de acero rápido",
        precio:"$20.50",
        imagen:"imagenes/ferreteria/mechas.jpg",
        id:1


    }, {
        titulo:"Tornillo T1" ,
        descripcion: "Tornillo autoperforante Durlock",
        precio:"$5.20",
        imagen:"imagenes/ferreteria/tornilloT1.jpg",
        id:2

    },
    {
        titulo: "Taladro inalambrico",
        descripcion: "Taladro inalambrico 13mm",
        precio:"$20199",
        imagen:"imagenes/herramientas/Taladro.jpg",
        id:3

    }
]
let ProductosCarrito=[];

// Captura de objetos
let tarjeta=document.getElementById("containerOf");
// let botonAgregar=document.getElementsByClassName("card-button");
// console.log(botonAgregar);
let carrito=document.getElementById('carrito');
let Cantidadproductos=0;
carrito.addEventListener("click",function (){
    console.log(ProductosCarrito);
});


console.log(tarjeta);

function CrearTarjeta(datoTarg){
    console.log(datoTarg);
const card = document.createElement('containerOf');
card.className = 'card';
card.id=datoTarg.id;
card.tag=datoTarg.precio;
card.onclick=function(){
    console.log(datoTarg.precio);
    Cantidadproductos++;
    carrito.textContent = Cantidadproductos;
    nuevo={nombre:datoTarg.titulo, precio:datoTarg.precio};
    ProductosCarrito.push(nuevo);
}

// Crea el título de la tarjeta
const titulo = document.createElement('h2');
titulo.className = 'card-title';
titulo.textContent = datoTarg.titulo;

// Crea la imagen
const imagen = document.createElement('img');
imagen.className = 'card-image';
imagen.src = datoTarg.imagen;
imagen.alt = 'Imagen del producto';

// Crea el precio
const precio = document.createElement('div');
precio.className = 'card-price';
precio.textContent = datoTarg.precio;
// precio.tagName=datoTarg.precio;

// Crea la descripción
const descripcion = document.createElement('p');
descripcion.className = 'card-description';
descripcion.textContent = datoTarg.descripcion;
1
// Crea el botón
const boton = document.createElement('button');
boton.className = 'card-button';
boton.textContent = 'Comprar';
boton.id==datoTarg.id;

// Agrego los elementos hijos al contenedor de la tarjeta
card.appendChild(titulo);
card.appendChild(imagen);
card.appendChild(descripcion);
card.appendChild(precio);
card.appendChild(boton);

// Agrego la tarjeta al contenedor principal
tarjeta.appendChild(card);

}

// -----Cargar las tarjetas --------
for (var i=0;i<datos.length;i++){
    CrearTarjeta(datos[i]);
    id=datos[i].id;
     let captura=document.getElementById(i);
     console.log(datos[i].precio);
    //  captura.addEventListener('click',function(){
    //      console.log(captura.getAttribute('tagname'));
    //      console.log(datos[i]);
    // });
}

// agregarListener();
