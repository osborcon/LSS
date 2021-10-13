var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://secure3.mbsbooks.com/employee/iCMDesign?id=89704&s=order.centralstores.iastate.edu/manifest.json')
ourRequest.onload = function(){
    console.log(ourRequest.responseText);
}
ourRequest.send();