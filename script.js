function getTriangle() {
    var a = parseInt(document.getElementById('length1').value);
    var b = parseInt(document.getElementById('length2').value);
    var c = parseInt(document.getElementById('length3').value);

   
    //  var determine = function(a,b,c){
    if (a + b <= c || a + c <= b || b + c <= a) {
        alert("That is Not a triangle");
    }

    else if (a == b && b == c && a == c) {0
        alert("That is an Equilateral triangle");
    }

    else if (a === b || a === c || b === c) {
        alert("That is an Isosceles triangle");
    }
    // else if (a + b <= c || a + c <= b || b + c <= a) {
    //     alert("That is Not a triangle");

    // }
    else if(a!==b!==c) {
        alert("The Triangle is Scalene");
    }
    else{
        alert('Invalid input');
    }

};

