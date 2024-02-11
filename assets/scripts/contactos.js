document.addEventListener("DOMContentLoaded", function () {
    generateTableData();
});

const nombres = ['Angel Rodriguez', 'Diego Siney', 'Uriel Sanchez', 'Diana Carrillo', 'Edgar Guzman']

function generateTableData() {
    var tbody = document.getElementById("key");

    for (var i = 0; i < nombres.length; i++) {
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
            <th scope="row">${i + 1}</th>
            <td>${nombres[i]}</td>
            <td><button  id="person${i + 1}"  onclick="detalleContacto(${i + 1})" type="button"  class="btn btn-warning">Detalles</button></td>
        `;
        tbody.appendChild(newRow);
    }
}

function detalleContacto(number) {
    switch (number) {
        case 1:
            console.log("Apellido es Rodriguez")

            break;
        case 2:
            console.log("Apellido es Siney")

            break;
        case 3:
        default:
            break;
    }
}

function cambioPagina() {
    window.location.href = `../pages/nuevoContacto.html`;
}