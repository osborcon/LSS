/*
-----------------------------------------------------------Start MerchList Code ------------------------------------------------------------------------------------------------------------
*/

var keys = [];

//Refills the array with its contents on pageload in order to add favorites on multiple pages
$.each(JSON.parse(localStorage.getItem('Favorites')), function (index, value) {
    keys.push(value);
});


$(document).ready(function () {
    var favoriteButton = $("<button class =\'fa fa-star fa-2x\'></button>");
    $(favoriteButton).click(function () {                               //set function for button
        $(this).css('color', '#ecd80c');
        var favInfo = $(this).closest('td').html();                     //find closest td to button, get its 
        keys.push((favInfo));                                           //stores favorite in array
        event.preventDefault();                                         //stop error page from loading after event occurs
        localStorage.setItem("Favorites", JSON.stringify(keys));        //stores favorites array
    });
    favoriteButton.appendTo(".mTableCell");
});

/*
-----------------------------------------------------------Start Favorites Page Code------------------------------------------------------------------------------------------------------------
*/

var keys = [];

//Refills the array with its contents on pageload in order to add favorites on multiple pages
$.each(JSON.parse(localStorage.getItem('Favorites')), function (index, value) {
    keys.push(value);
});
// favorites = JSON.parse(localStorage.getItem('Favorites'));           //Retrieve info from storage, convert to object

var favoriteButton = "<button class =\'fa fa-star fa-2x\'></button>";
var html_string = '';                                                    //store all data
var count = 0;
$.each(JSON.parse(localStorage.getItem('Favorites')), function (index, value) {
    html_string += '<td class="favTd">' + value.replace("<button class=\"fa fa-star fa-2x\"></button>", "") + "<div class ='\count'\ id=\'count\'>" + count + "</div>" + '</td>';
    count++;
});

$(document).ready(function () {
    var favoriteButton = $("<button class =\'fa fa-star fa-2x\'></button>");
    $(favoriteButton).click(function () {                               //set function for button 
        var favInfo = $(this).closest('div.count').html();                    
        event.preventDefault();                                         //stop error page from loading after event occurs
        deleteFav = favInfo.replace("<button class=\"fa fa-star fa-2x\"></button>", "");
        Number(deleteFav);
        keys.splice(deleteFav, 1);
        localStorage.setItem('Favorites', JSON.stringify(keys));
        window.location.reload();
    });
    favoriteButton.appendTo(".count");
});

$('.popFavs').html(html_string);

//Start of cleaning up data for Favorites Page
$(document).ready(function () {
    $('.merchPriceCurrent').remove();
    $('br').remove();
    $('.merchPriceCurrent').remove();
});

$(document).ready(function () {
    var clearData = $("<button class = \'clear'\>Clear All Favorites</button>")
        $(clearData).click(function () {
            let deleteAll = confirm("Are you sure you'd like to clear all favorites? This cannot be undone.")
            if(deleteAll === true){
                localStorage.clear();
                window.location.reload();
            }
        });
        clearData.appendTo(".clearData");
});

$("span.merchSKU").prepend('<b>SKU: </b>');

// Profile Code Starts here
$(document).ready(function () {
   
  $("#accountUL").prepend('<li><a href="/favorites"><span class="tab">Favorites - <b>NEW!</b></span></a></li>');
    });
    
