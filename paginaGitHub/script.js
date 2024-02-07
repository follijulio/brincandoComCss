function exibirHoraAtual() {
    var elementoHora = document.getElementById("hora");
    var dataHora = new Date();
    var hora = dataHora.getHours();
    var minutos = dataHora.getMinutes();
    var horaFormatada = hora.toString().padStart(2, '0') + ":" + minutos.toString().padStart(2, '0')
    elementoHora.textContent = horaFormatada;
}

// Atualiza a hora a cada minuto
setInterval(exibirHoraAtual, 1000);