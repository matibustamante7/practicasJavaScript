

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


        divTiendas.innerHTML = `<p>Tienda: ${tienda.nombre}</p>`;
        divTiendas.innerHTML = `<p>Ubicacion: ${tienda.direccion}</p>`;
        divTiendas.innerHTML = `<p>Propietario: ${tienda.propietario}</p>`;
        divTiendas.innerHTML = `<p>Rubro: ${tienda.rubro}</p>`;
        divTiendas.innerHTML = `<p>Cantidad de empleados: ${tienda.cantEmpleados}</p>`;

        contenedorTiendas.appendChild(divTiendas);
    })



    //    

    //     totalTiendas.map((tienda)=>{
    //         // console.log(`nombre de la tienda: ${tienda.nombre}`);
    //         nuevaTiendaResultado.classList.remove('resultadoTienda');
    //         nuevaTiendaResultado.classList.add('showTienda');
    //         divTiendas.appendChild(nuevaTiendaResultado)
    //         showName.innerHTML = tienda.nombre
    //         showDireccion.innerHTML = tienda.direccion
    //         showPropietario.innerHTML = tienda.propietario
    //         showRubro.innerHTML = tienda.rubro
    //         showEmpleados.innerHTML = tienda.cantEmpleados
    //     })

}

showTiendas.addEventListener('click', mostrarTiendas)

form.addEventListener('submit', crearNuevaTienda)



// form.addEventListener('submit', crearNuevaTienda())