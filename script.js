function getTriangle(){
    var a = parseFloat(prompt("side a"));
    var b = parseFloat(prompt("side b"));
    var c = parseFloat(prompt("side c"));

    //  var determine = function(a,b,c){
        if( a==b && b==c && a==c){
            alert("Equilateral triangle");
        }
        if(a!==b && b!==c && c!==a){
            alert("Scalene triangle")
        }
        if(a===b || a===c || b===c){
            alert("Isosceles triangle");
        }
    }
    