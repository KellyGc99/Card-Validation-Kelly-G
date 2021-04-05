const validator = {

  maskify: function (creditCardNumber) {
    let resultado = "";
    let tamaño = creditCardNumber.length - 4;
    for (let dato = 0; dato < tamaño; dato++) {
      resultado = resultado + "#";
  } if(creditCardNumber<=4){
return creditCardNumber;
  }
    for (let i = tamaño; i < creditCardNumber.length; i++) {
      resultado = resultado + creditCardNumber[i];
    }
    return resultado;
  },

  isValid: function (creditCardNumber) {
    let validarNumero = creditCardNumber;
    let numeroDeDatos = validarNumero.length;
    let sumaImpares = 0;
    let sumaPosicionesPares = 0;
    for (let i = 0; i < numeroDeDatos; i += 2) {
      let validarPosicionesPares = validarNumero[i] * 2;
      if (validarPosicionesPares > 9) {
        validarPosicionesPares -= 9;
      }
      sumaPosicionesPares += validarPosicionesPares;
    }
    for (let j = 1; j < numeroDeDatos; j += 2) {
      sumaImpares += parseInt(validarNumero[j]);
    }
    validarNumero = sumaPosicionesPares + sumaImpares;
    if (validarNumero % 10 == 0) {
      return true;
    } else {
      return false;
    }
  }
}
export default validator;
