
let a= {name:"person1",age:5};  
let b = {age:5,name:"person1"};



let c= JSON.stringify(a,Object.keys(a).reverse())
console.log(c);
let d=JSON.stringify(b,Object.keys(b))
console.log(d);

if (c===d){
    console.log(" jason is equal ");
}
else {
    console.log("json is not equal");
}





var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function (){

    var data = request.response;
   //console.log(data);
   var result = JSON.parse(data)
   //console.log(result);
   for (var i=0;i<result.length;i=i+1){
    console.log(result[i].flags.png);
   }
}

 






var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
    var data = request1.response;
   //console.log(data);
   var result1 = JSON.parse(data)
   //console.log(result);
   for (var i=0;i<result1.length;i=i+1){
    console.log("country name:" +result1[i].name.common,"Region:"+result1[i].region,"Sub Region:"+result1[i].subregion,"Population:"+result1[i].population);
   }
}  



