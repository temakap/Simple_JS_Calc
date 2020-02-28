function plus() {
var a, b;
a = document.getElementById("a").value;
a = parseInt(a);

b = document.getElementById("b").value;
b = parseInt(b);

result = a+b;

document.getElementById("num3").innerHTML = result;
}

function minus() {
    var a, b;
    a = document.getElementById("a").value;
    a = parseInt(a);
    
    b = document.getElementById("b").value;
    b = parseInt(b);
    
    result = a-b;
    
    document.getElementById("num3").innerHTML = result;
    }