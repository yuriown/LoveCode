function calcularTempo() {
    const dataConhecimento = new Date(2021, 7, 10, 0, 0, 0); // Mês é 7 porque é zero-indexado (0 = Janeiro)
    const agora = new Date();
    
    let anos = agora.getFullYear() - dataConhecimento.getFullYear();
    let meses = agora.getMonth() - dataConhecimento.getMonth();
    let dias = agora.getDate() - dataConhecimento.getDate();
    let horas = agora.getHours() - dataConhecimento.getHours();
    let minutos = agora.getMinutes() - dataConhecimento.getMinutes();
    let segundos = agora.getSeconds() - dataConhecimento.getSeconds();
  
    if (segundos < 0) {
      segundos += 60;
      minutos--;
    }
    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
    if (horas < 0) {
      horas += 24;
      dias--;
    }
    if (dias < 0) {
      const ultimoDiaMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
      dias += ultimoDiaMes;
      meses--;
    }
    if (meses < 0) {
      meses += 12;
      anos--;
    }
  
    document.getElementById("contador").innerHTML = 
      `Anos: ${anos}, Meses: ${meses}, Dias: ${dias}.`;
  }
  
  setInterval(calcularTempo, 1000);