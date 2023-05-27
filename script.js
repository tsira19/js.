function gamotvale (){
    var x = document.getElementById ("input").value;
  
    if(x > 0){
        window.alert("რიცხვი დადებითია !");
    }else if(x == 0){
        window.alert("არ შეიძლება იყოს 0-ის ტოლი");
    }else{
        window.alert(" რიცხვი უარყოფითია!")
    }
}
