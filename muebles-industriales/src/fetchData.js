const productos = [
    {
        id: 1,
        nombre: "Mesa ratona aurora",
        precio: 8000,
        descripcion: "Mesa ratona en madera mazisa en su color natural y base en hierro.",
        imagen:"src/assets/img-mesaratona.jpeg"
    },

    {
        id: 2,
        nombre: "Mesa ratona Boni",
        precio: 8500,
        descripcion: "Mesas ratonas nido, en su forma natural e ireegular.",
        imagen:"src/assets/img-mesaratona-boni.jpeg",
    },

    {
        id: 3,
        nombre: "Mesa ratona Lili",
        precio: 9500,
        descripcion:"Mesa rectangular simple, en su color nastural. Base en hierro.",
        imagen:"src/assets/mesalili.jpeg",
    },

    {
        id: 4,
        nombre: "Recibidor Gaia",
        precio: 10500,
        descripcion:"Recibidor todo en madera (cipres), color natural o en color crudo.",
        imagen:"src/assets/img-recibidor-.jpeg",
    },

    {
        id: 5,
        nombre: "Recibidor Simple",
        precio: 7000,
        descripcion:"Recibidor super sensillo que le va a dar un toque muy canchero a tu hogar.",
        imagen:"src/assets/img-recibidor.jpeg"

    },

    {
        id: 6,
        nombre: "Recibidor",
        precio: 5590,
        descripcion:"Recibidor sensillo con dos niveles",
        imagen:"src/assets/img-recibidor-2.jpeg"
    },

    {
        id: 7,
        nombre: "Mueble Big",
        precio: 17500,
        descripcion:"Mueble grande , multiuso",
        imagen:"src/assets/img-muebleBig.jpg"
    },

    {
        id: 8,
        nombre: "Rack",
        precio: 9500,
        descripcion:"Rack en madera finsher, y puertas enmalla metalica.",
        imagen: "src/assets/img-rack.jpeg",
    },

    {
        id: 9,
        nombre: "Mueble Pared",
        precio: 22500,
        descripcion:"Mueble pared ideales para separar espacios en tu casa.",
        imagen:"src/assets/img-mueble-pared.jpeg"
    },
];

export default function fetchdata(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
};