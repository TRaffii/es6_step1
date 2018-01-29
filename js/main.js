var isDataEmpty = function(name, tax, net, gross) {
    if (!name || !tax || !(net | gross)) return true;
    return false;
};

document.getElementById('calcBtn').addEventListener('click', function (){
   console.log("OK");
   var name = document.getElementById('name').value;
   var netValue = parseFloat(document.getElementById('net').value);
   var grossValue = parseFloat(document.getElementById('gross').value);
   var taxValue = document.getElementById('tax').value;

   if (isDataEmpty(name, taxValue, netValue, grossValue)) {
       alert("Provided data is not correct, you must provide at least name, tax and net or gross value");
       return false;
   }
    
   if (netValue) {
       document.getElementById('gross').value = (netValue + parseFloat(netValue * parseFloat(taxValue / 100))).toPrecision(4);
   }
   else if (grossValue) {
       document.getElementById('net').value = (grossValue / (1 + parseFloat(taxValue / 100))).toPrecision(4);
   }
});
