var bandera = true;

function cambiaColor(){
  if(bandera == true){
    document.getElementById('miBtn').classList.add("claseFalse");
    document.getElementById('miBtn').classList.remove("claseTrue");
    bandera = false;
  }else{
    document.getElementById('miBtn').classList.add("claseTrue");
    document.getElementById('miBtn').classList.remove("claseFalse");
    bandera = true;
  }
}
