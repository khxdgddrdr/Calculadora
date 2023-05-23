function calcularJuros(tipo) {
    var principal = parseFloat(document.getElementById('principal').value);
    var taxa = parseFloat(document.getElementById('taxa').value);
    var periodo = parseFloat(document.getElementById('periodo').value);
    
    var juros, valorFuturo;
    
    if (tipo === 'simples') {
      juros = (principal * taxa * periodo) / 100;
      valorFuturo = principal + juros;
    } else if (tipo === 'compostos') {
      valorFuturo = principal * Math.pow(1 + taxa / 100, periodo);
    }
    
    exibirResultado(valorFuturo);
  }
  
  function exibirResultado(valorFuturo) {
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = 'Valor Futuro: R$ ' + valorFuturo.toFixed(2);
  }