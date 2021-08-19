 var counter = {
     value: 0,
     add: function() {
         if (event.keyCode >= 48 && event.keyCode <= 90)
             this.value = this.value + 1;
         else {
             (event.keyCode == 8 || event.keyCode == 46)
             var x = document.getElementsByName("txtText")
             var texto = x[0].value.length
             this.value = texto
         }
         document.getElementById("demo").innerHTML = this.value;
     }
 };
 document.getElementById("demo").innerHTML = counter.value;