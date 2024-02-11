var parametrosString = localStorage.getItem('misParametros');
if (parametrosString) {
    var parametros = JSON.parse(parametrosString);
    document.getElementById('user-name').innerText = parametros.nombresCompleto;
    document.getElementById('user-email').innerText = parametros.correoElectronico;

    document.getElementById('fullName').value = parametros.nombresCompleto;
    document.getElementById('eMail').value = parametros.correoElectronico;
    document.getElementById('phone').value = parametros.telefono;
    document.getElementById('Street').value = parametros.calle;
    document.getElementById('ciTy').value = parametros.ciudad;
    document.getElementById('sTate').value = parametros.estado;
} else {
    console.log('No se encontraron parámetros.');
}

function regresar() {
    window.location.href = '../pages/contactos.html';
}