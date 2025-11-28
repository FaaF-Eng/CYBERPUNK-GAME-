function drinkCoffeeModal(){
  console.log("Abriu o modal")
  window.abrirModalCoffee = function() {
  var modalEl = document.getElementById('basicModal');
  if (!modalEl) {
    console.error('Modal não encontrado na página.');
    return;
  }

  var modal = new bootstrap.Modal(modalEl);
  modal.show();
};
abrirModalCoffee();
  
}
