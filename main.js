
function check(){
    var check=document.getElementById("password").value;
    if( check == "Grfe1e35de"){
       var tex="Correct password";
      element = document. getElementById("web"); 
      
      element.style.visibility="visible";
      document.getElementById("wong").innerHTML=tex;
      element = document. getElementById("wong");
      element.style.color="Green";
    }
    else{
        var tex="Wrong password"
        document.getElementById("wong").innerHTML=tex;
        element = document. getElementById("wong");
      element.style.color="Red";
      element = document. getElementById("web"); 
      
      element.style.visibility="hidden";
    }
}