const overlay2 = document.querySelector(".overlay-2");
window.addEventListener("load", function () {
  overlay2.style.display = "none";
})

const calcularPeriodo = (inicio, forma) => {
  let dataInicio = new Date(inicio);
  let dataAtual = new Date();
  
  forma = forma.toLowerCase();
  
  let diferencaSegundos = Math.floor(dataAtual.getTime() - dataInicio.getTime());
  let diferencaAnos = null;
  
  if(forma == 'meses'){
    diferencaAnos = Math.floor(diferencaSegundos / (1000 * 3600 * 24 * 30));
  }else if(forma == 'anos'){
    diferencaAnos = Math.floor(diferencaSegundos / (1000 * 3600 * 24 * 365.3));
  }
  
  return diferencaAnos;
}

const ajustarPeriodoProgramando = () => {
  const forma = 'meses';
  const diferencaAnos = calcularPeriodo('2022-01-01 00:00:00', forma);
  
  const periodoProgramando = document.querySelectorAll('[data-periodo-programando');
  periodoProgramando.forEach(periodo => {
    periodo.textContent = `${diferencaAnos} ${forma}`;
  })
}

const ajustarIdade = () => {
  const diferencaAnos = calcularPeriodo('2004-01-27 00:00:00', 'anos');
  
  const idadeAtual = document.querySelectorAll('[data-idade-atual]');
  idadeAtual.forEach(idade => {
    idade.textContent = diferencaAnos;
  })
}

const botaoModal = document.querySelectorAll('[data-direito-autorais]');
botaoModal.forEach(botao => {
  botao.addEventListener('click', (evento) => {
    const modal = document.querySelector('[data-modal]');
    modal.showModal();
    
    const btnFecha = modal.querySelector('[data-modal-fecha]');
    btnFecha.addEventListener('click', () => {
      modal.close();
    })
  })
});

const botaoRecarregar = document.querySelectorAll('[data-recarrega-pagina]');
botaoRecarregar.forEach(botao => {
  botao.addEventListener('click', () => {
    window.location.reload();
  })
})

ajustarPeriodoProgramando();
ajustarIdade();