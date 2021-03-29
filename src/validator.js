const validator = {
    maskifySinFor: function (creditCardNumber){
      let remplazar= Array.from(creditCardNumber);
      let mascara =remplazar.fill("#", 0, remplazar.length-4);
      const resultado=mascara.join(" ");
      return resultado;
      
      /*isValid(remplazar);*/
    },
    maskify: function (creditCardNumber){
      let resultado=""; 
      let tamaño=creditCardNumber.length-4;
      for (let dato = 0; dato < tamaño; dato++) {
      resultado=resultado+"#";
      }
      for (let i= tamaño; i<creditCardNumber.length; i++){
        resultado=resultado+creditCardNumber[i];
      }
      return resultado;
    }
}
//isValid 
/*let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);*/
export default validator;



/*validator.isValid(creditCardNumber): creditCardNumber es un string con el número de tarjeta que se va a verificar. Esta función debe retornar un boolean dependiendo si es válida de acuerdo al algoritmo de Luhn.

validator.maskify(creditCardNumber): creditCardNumber es un string con el número de tarjeta y esta función debe retornar un string donde todos menos los últimos cuatro caracteres sean reemplazados por un numeral (#) o 🐱. 
Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún cuando el string sea de menor longitud.*/

