const alumns = ["Sofia Cárdenas", "Jorge Medrano", "Mariangela Alejandrina Pérez Lugo", "Fabián Conejo", "Shir Sahagún", "Julian Barrios ", "Angel Antonio", "Lucia Auyón", "Andru Vargas", "Fernando Hernandez Baez", "Arturo Camargo", "Abdo Rodríguez"];

const randomPicker = (array) => {
    let randNum = Math.floor(Math.random() * array.length);
    let name = array[randNum];
    return name;
};

$('.random').click(function() {
    document.getElementById('name').innerHTML = `${randomPicker(alumns)}`;
});
