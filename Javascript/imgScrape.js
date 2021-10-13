(function(){
    var imgs = document.getElementsByTagName('img'),t=[];
    for (var i=0, n=imgs.length;i<n;i++) 
      t.push('<a href="'+imgs[i].src+'"><img src="'+
                         imgs[i].src+'" width="100"></a>'); 
    if (t.length) {
      var w=window.open('','_blank'); 
      if (w) {w.document.write(t.join('&nbsp;'));w.document.close();}
      else alert('cannot pop a window');  
    }    
   })();






//Get all images using this link, then clean data after all images downloaded

var images = document.getElementsByTagName('img');
var srcList = [];
var i = 0;

setInterval(function(){
    if(images.length > i){
        srcList.push(images[i].src);
        var link = document.createElement("a");
        link.id=i;
        link.download = images[i].src;
        link.href = images[i].src;
        link.click();
        i++;
    }
},1500);