
function getFrequency(string) {

    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;

};


function calculation(arr){
   var newarr = [];

   for (var i = 0; i < arr.length /2; i++) {
   var  firstNumber = arr[i];
   var lastNumber = arr[arr.length - 1 - i];
   var sum = firstNumber + lastNumber;
   newarr.push (sum);
  }


   console.log("arr",arr);
   console.log("new",newarr);

  if (newarr.length>2) {
    oddOreven(newarr);

  }
  else {
  console.log("result" ,newarr.join(''));

}

  }

  function oddOreven(arr){
    if (Number.isInteger(arr.length/2)) {
      calculation(arr);
    }

    else {
      var middle = arr[((arr.length+1)/2)-1]
      arr.splice(middle,1);
      console.log("even",arr);


  }
}


function love(){
  var first = document.getElementById('firstInput');
  var second = document.getElementById('secondInput');
  var total = first.value+second.value;[]
  if (total.length>0) {

  var all = getFrequency(total);
  var arr = Object.values(all);
  console.log("all",all);
  oddOreven(arr);


  first.value = "";
  second.value = "";
}
else {
  alert("enter names")
}
}
