{
  {
    {
      {
        var sera = "Será?????";
        console.log(sera);
      }
    }
  }
}
console.log(sera);
//A váriavel Var tem 2 escopos possíveis. se criada fora de uma função ela tem escopo global
function teste() {
  var local = 123;
  console.log(local);
}

teste();
console.log(local); //não é possivel acessar o Var dentro de uma função
