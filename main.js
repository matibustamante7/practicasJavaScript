

const form = document.getElementById('form');
const nuevaTiendaResultado = document.getElementById('nuevaTiendaResultado');
const showName = document.getElementById('showName');
const showDireccion = document.getElementById('showDireccion');
const showPropietario = document.getElementById('showPropietario');
const showRubro = document.getElementById('showRubro');
const showEmpleados = document.getElementById('showEmpleados');
const showTiendas = document.getElementById('showTiendas');
const contenedorTiendas = document.getElementById('contenedorTiendas');


class Tienda {
    constructor(nombreConst, direccionConst, propietarioConst, rubroConst, cantEmpleadosConst,) {
        this.nombre = nombreConst,
            this.direccion = direccionConst,
            this.propietario = propietarioConst,
            this.rubro = rubroConst,
            this.cantEmpleados = Number(cantEmpleadosConst)
    }
}
// console.log(Tienda);
let totalTiendas = [];

const crearNuevaTienda = (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const propietario = document.getElementById('propietario').value;
    const rubro = document.getElementById('rubro').value;
    const cantEmpleados = document.getElementById('empleados').value;
    const nuevaTienda = new Tienda(nombre, direccion, propietario, rubro, cantEmpleados)
    // console.log(nuevaTienda);

    totalTiendas.push(nuevaTienda)  
}

const mostrarTiendas = () => {
    // console.log(totalTiendas);

    totalTiendas?.map((tienda) => {
            
        const divTiendas = document.createElement('div');
        divTiendas.id = 'tienda';
        divTiendas.className = 'tienda';
        
        const nombre = document.createElement('p')
        nombre.innerHTML =`Nombre: ${tienda.nombre.charAt(0).toUpperCase() + tienda.nombre.slice(1)}`
        divTiendas.appendChild(nombre)
        
        const direccion = document.createElement('p')
        direccion.innerHTML =`Direccion: ${tienda.direccion.charAt(0).toUpperCase() + tienda.direccion.slice(1)}`
        divTiendas.appendChild(direccion)
        
        const propietario = document.createElement('p')
        propietario.innerHTML =`Popietario: ${tienda.propietario.charAt(0).toUpperCase() + tienda.propietario.slice(1)}`
        divTiendas.appendChild(propietario)

    
        const rubro = document.createElement('p')
        rubro.innerHTML =`Ubicacion: ${tienda.rubro.charAt(0).toUpperCase() + tienda.rubro.slice(1)}`
        divTiendas.appendChild(rubro)

    
        const cantEmpleados = document.createElement('p')
        cantEmpleados.innerHTML =`Empleados: ${tienda.cantEmpleados}`
        divTiendas.appendChild(cantEmpleados)

        contenedorTiendas.appendChild(divTiendas);
    })


}

showTiendas.addEventListener('click', mostrarTiendas)

form.addEventListener('submit', crearNuevaTienda)



// form.addEventListener('submit', crearNuevaTienda())