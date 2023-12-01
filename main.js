

class Computadora {
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
// let totalComputadorasOriginal = [...totalComputadoras];

const crearNuevaComputadora = (event) => {
    event.preventDefault();

    const procesador = document.getElementById('procesador').value;
    const placaDeVideo = document.getElementById('placaDeVideo').value;
    const almacenamiento = document.getElementById('almacenamiento').value;
    const ram = document.getElementById('ram').value;
    const placaMadre = document.getElementById('placaMadre').value;
    const fuente = document.getElementById('fuente').value;
    const precio = calcularPrecio();

    const nuevaComputadora = new Computadora(procesador, placaDeVideo, almacenamiento, ram, placaMadre, fuente, precio)
    // console.log(nuevacomputadora);

    totalComputadoras.push(nuevaComputadora)
    totalComputadorasOriginal = [...totalComputadoras]
    mostrarComputadoras()
    totalDeLosTotales(precio)
}

const mostrarComputadoras = () => {
    // console.log(totalComputadoras);

    computadorasAgregadas.innerHTML = '';
    // console.log(totalComputadoras);
    // console.log(totalComputadorasOriginal);
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
        return totalComputadoras
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

    // console.log(`Precio total: ${precioTotal}`);

    return precioTotal
}

let totalDeLosTotalesCount = 0;
const totalDeLosTotales = (precioTotal) => {

    const showTotal = document.getElementById('totalDeLosTotales');

    totalDeLosTotalesCount = totalDeLosTotalesCount + precioTotal;
    showTotal.innerText = `Total: $${totalDeLosTotalesCount}`;


    return totalDeLosTotalesCount
}
verPrecio.addEventListener('click', crearNuevaComputadora)

const resetComputadoras = (precioTotal) => {

    precioTotal = precioTotal - 2000
    console.log(precioTotal);

    // tomo el array de computadoras y elimino el ultimo
    totalComputadoras.pop(totalComputadoras.length - 1)
    // despues de eliminar el ultimo vuelvo a mostrar las computadoras pero actualizadas
    // sin el ultimo elemento eliminado
    mostrarComputadoras();

}

deleteUltimo.addEventListener('click', resetComputadoras)



const buscar = document.getElementById('buscar');

// necesito recibir el event que el input esta siendo modificado
const buscarComputadora = (event) => {
    // agrego el evento.target.value a una variable para que sea mas amigable el manejo
    let prodBuscar = event.target.value;

    // realizamos un filter para buscar entre las computadoras creadas por nombre del procesador

    //  devuelve un array con el resultado,

    // si el nuevo array tiene longitud mayor a cero procedemos a asignar nuevamente la variable totalComputadoras con el nuevo array y ejecutamos la funcion para mostrar nuevamente las computadoras posibles
    if (prodBuscar.length === 0) {
        // console.log(`no hay para buscar`);
        totalComputadoras = [...totalComputadorasOriginal]
        mostrarComputadoras()
    } else if (prodBuscar.length > 0) {
        let prodEncontrado = [...totalComputadorasOriginal].filter((producto) => producto.procesador.includes(prodBuscar))
        totalComputadoras = prodEncontrado
        mostrarComputadoras()
    }

}

buscar.addEventListener('input', buscarComputadora)




const showName = () => {
    const guardarPcs = (clave, valor) => { localStorage.setItem(clave, valor) }


    // almacenar objetos por separado
    for (const computadora of totalComputadoras) {
        guardarPcs(computadora.id, JSON.stringify(computadora))
        // console.log(computadora);
    }

    // almacenar array completo
    const arrpcs = guardarPcs("listaComputadoras", JSON.stringify(totalComputadoras))

    console.log(arrpcs);
}

nombreee.addEventListener('click', showName)