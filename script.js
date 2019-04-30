function getTriangle(){
    var a = parseFloat(prompt("side a"));
    var b = parseFloat(prompt("side b"));
    var c = parseFloat(prompt("side c"));

    //  var determine = function(a,b,c){
 if(a+b<=c||a+c<=b||b+c<=a){
            alert("Not a triangle");
 }

   else if( a==b && b==c && a==c){
            alert("Equilateral triangle");
        }
     
        else if(a===b || a===c || b===c){
            alert("Isosceles triangle");
        }
        else if(a+b<=c||a+c<=b||b+c<=a){
            alert("Not a triangle");

        }
        else {
            alert ("Triangle is Scalene");
        }

        }

    