

class Computadora{
    constructor(procesador, placaDeVideo, almacenamiento, ram, placaMadre, fuente, precio) {
        this.procesador = procesador,
            this.placaDeVideo = placaDeVideo,
            this.almacenamiento = almacenamiento,
            this.ram = ram,
            this.placaMadre = placaMadre
        this.fuente = fuente
        this.precio = precio
    }


}
// console.log(computadora);
let totalComputadoras = [];

const crearNuevaComputadora= (event) => {
    event.preventDefault();

    const procesador = document.getElementById('procesador').value;
    const placaDeVideo = document.getElementById('placaDeVideo').value;
    const almacenamiento = document.getElementById('almacenamiento').value;
    const ram = document.getElementById('ram').value;
    const placaMadre = document.getElementById('placaMadre').value;
    const fuente = document.getElementById('fuente').value;
    const precio = calcularPrecio();

    const nuevaComputadora= new Computadora(procesador, placaDeVideo, almacenamiento, ram, placaMadre, fuente, precio)
    // console.log(nuevacomputadora);

    totalComputadoras.push(nuevaComputadora)

    mostrarComputadoras()
}

const mostrarComputadoras = () => {
    // console.log(totalComputadoras);

    computadorasAgregadas.innerHTML = '';

    totalComputadoras?.map((computadora) => {

        const divComputadora = document.createElement('div');
        divComputadora.id = 'computadora';
        divComputadora.className = 'computadora';

        const procesador = document.createElement('p')
        procesador.innerHTML = `Procesador: ${computadora.procesador.charAt(0).toUpperCase() + computadora.procesador.slice(1)}`
        divComputadora.appendChild(procesador)

        const placaDeVideo = document.createElement('p')
        placaDeVideo.innerHTML = `Placa de video: ${computadora.placaDeVideo.charAt(0).toUpperCase() + computadora.placaDeVideo.slice(1)}`
        divComputadora.appendChild(placaDeVideo)

        const almacenamiento = document.createElement('p')
        almacenamiento.innerHTML = `Almacenamiento: ${computadora.almacenamiento.charAt(0).toUpperCase() + computadora.almacenamiento.slice(1)}`
        divComputadora.appendChild(almacenamiento)


        const ram = document.createElement('p')
        ram.innerHTML = `Memoria RAM: ${computadora.ram}`
        divComputadora.appendChild(ram)


        const placaMadre = document.createElement('p')
        placaMadre.innerHTML = `Placa madre: ${computadora.placaMadre.charAt(0).toUpperCase() + computadora.placaMadre.slice(1)}`
        divComputadora.appendChild(placaMadre)

        const fuente = document.createElement('p')
        fuente.innerHTML = `Fuente: ${computadora.fuente.charAt(0).toUpperCase() + computadora.fuente.slice(1)}`
        divComputadora.appendChild(fuente)

        const precio = document.createElement('p')
        precio.innerHTML = `Precio: $${computadora.precio}`
        divComputadora.appendChild(precio)
        
        computadorasAgregadas.appendChild(divComputadora);
    })


}



const calcularPrecio = () => {
    // obtengo el precio de un componente, sea cual sea el que llegue
    let precioTotal = 0;

    const obtenerPrecio = (componente) => {
        const precio = parseFloat(componente.options[componente.selectedIndex].getAttribute('data-precio'))
        return precio
    }
    // le asigno el precio recibido del procesador al procesador
    const obtenerPrecioProcesador = () => {
        const procesadorSeleccionado = obtenerPrecio(procesador);
        // console.log(`Precio de ${procesador.value}: $${procesadorSeleccionado}`);
        return procesadorSeleccionado
    }
    // le asigno el precio recibido del la placa de video a la placa
    const obtenerPrecioPlacaVideo = () => {
        const placaDeVideoSeleccionada = obtenerPrecio(placaDeVideo);
        // console.log(`Precio de ${placaDeVideo.value}: $${placaDeVideoSeleccionada}`);
        return placaDeVideoSeleccionada
    }
    // le asigno el precio recibido del la placa de video a la placa
    const obtenerPrecioAlmacenamiento = () => {
        const almacenamientoSeleccionado = obtenerPrecio(almacenamiento);
        // console.log(`Precio de ${almacenamiento.value}: $${almacenamientoSeleccionado}`);
        return almacenamientoSeleccionado
    }
    // le asigno el precio recibido del la placa de video a la placa
    const obtenerPrecioRam = () => {
        const ramSeleccionada = obtenerPrecio(ram);
        // console.log(`Precio de ${ram.value}: $${ramSeleccionada}`);
        return ramSeleccionada
    }
    // le asigno el precio recibido del la placa de video a la placa
    const obtenerPlacaMadre = () => {
        const placaMadreSeleccionada = obtenerPrecio(placaMadre);
        // console.log(`Precio de ${placaMadre.value}: $${placaMadreSeleccionada}`);
        return placaMadreSeleccionada
    }
    // le asigno el precio recibido del la placa de video a la placa
    const obtenerPrecioFuente = () => {
        const fuenteSeleccionada = obtenerPrecio(fuente);
        // console.log(`Precio de ${fuente.value}: $${fuenteSeleccionada}`);
        return fuenteSeleccionada
    }
    const precioProcesador = obtenerPrecioProcesador();
    const precioPlacaDeVideo = obtenerPrecioPlacaVideo();
    const precioAlmacenamiento = obtenerPrecioAlmacenamiento();
    const precioRam = obtenerPrecioRam();
    const precioPlacaMadre = obtenerPlacaMadre();
    const precioFuente = obtenerPrecioFuente();
    precioTotal = precioProcesador + precioPlacaDeVideo + precioAlmacenamiento + precioRam + precioPlacaMadre + precioFuente;

    console.log(`Precio total: ${precioTotal}`);
    
    return precioTotal
}


verPrecio.addEventListener('click',  crearNuevaComputadora)

// showComputadoras.addEventListener('click', mostrarComputadoras)

// form.addEventListener('submit', crearNuevaComputadora)



// form.addEventListener('submit', crearNuevacomputadora())