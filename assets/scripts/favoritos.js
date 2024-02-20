document.addEventListener("DOMContentLoaded", function () {
    generateTableData();
});



const nombres = ['Diego Siney', 'Uriel Sanchez'];

function generateTableData() {
    var tbody = document.getElementById("key");

    for (var i = 0; i < nombres.length; i++) {
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
            <th scope="row">${i + 1}</th>
            <td>${nombres[i]}</td>
            <td><button  id="person${i + 1}"  onclick="detalleContacto(${i})" type="button"  class="btn btn-warning">Detalles</button></td>
        `;
        tbody.appendChild(newRow);
    }
}

function detalleContacto(number) {
    switch (number) {
        case 0:
            var parametros = {
                nombresCompleto: 'Diego Siney',
                correoElectronico: 'dsiney@mail.com',
                telefono: '2312-4123',
                calle: 'calle 2',
                ciudad: 'Uruguay',
                estado: 'Monetevideo'
            }
        
            break;
        case 1:
            var parametros = {
                nombresCompleto: 'Uriel Sanchez',
                correoElectronico: 'usanchez@mail.com',
                telefono: '1234-5124',
                calle: 'calle 5',
                ciudad: 'Mexico',
                estado: 'Mexicali'
            }
            break;
        default:
            break;
    }
    detalles(parametros);
}



function detalles(parametros) {

    localStorage.setItem('misParametros', JSON.stringify(parametros));

    window.location.href = '../pages/detalleContacto.html';
}

function cambioPagina() {
    window.location.href = `../pages/nuevoContacto.html`;
}