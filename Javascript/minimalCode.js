/*=====================================================================================
| 
|                               Global Code Start
|
======================================================================================*/

// Start Search Function		  
$("#search-input").on('keypress', function (e) {
    if (e.keyCode == 13) {
        // InSite Search
        search();
        return false;
    }
});


function search() {
    var search_input = $('#search-input').val();
    search_input = search_input.replace(/[^a-zA-Z 0-9]+/g, '');
    document.location.href = 'https://order.centralstores.iastate.edu/merchlist?searchtype=all&txtSearch=' + search_input;

}
// End Search Function	


/*=====================================================================================
| 
|                               Global Code End
|
======================================================================================*/


/*=====================================================================================
| 
|                               Customer Registration Code Start
|
======================================================================================*/

// Start Customer Registration Overrides ----------------------------------
$(document).ready(function () {
    $('input#custBillBusiness').attr('placeholder', 'Building & Room # *');
    $('input#custShipBusiness').attr('placeholder', 'Building & Room # *');
});

$(".col-xs-12").hide();

$(document).ready(function () {
    $('span.form-group col-xs-12').remove();
    $('p').remove();
});

$(window).load(function () {
    $('input#custStudID').attr('placeholder', 'ISU ID# *');
});

// End Customer Registration Overrides ----------------------------------

/*=====================================================================================
| 
|                               Customer Registration Code End
|
======================================================================================*/

/*=====================================================================================
| 
|                                Checkout Code Start
|
======================================================================================*/

//change student ID in placholder text to Univeristy ID	
$('input#custStudID').attr('placeholder', 'Univerisity ID *');

//change Account Number placeholder
$('input#campusAccount').attr('placeholder', 'Program ID # (PG000000)');
// appends input for Worktag or Department Detail
//$('div#paymentChoice').append('<input class="form-control bottom10 text-box single-line" id="campusAccount" maxlength="50" minlength="1" name="PaymentModel.accountNumber" placeholder="Worktag / Department Detail" required="True" requiredtype="text" title="Please Enter Your Worktag or Department Detail" type="text" value="">');

$(document).ready(function () {
    $(document).ready(function () {
        //Removes cookies override from mobile due to refresh problem
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Mac|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //Skip This
        } else {
            //Stores users payment selection in cookies, calls upon revisiting
            var selected = sessionStorage.getItem("selected");
            var dropdown = $("#ddlPayment");
            dropdown.val(selected == null ? "4267" : selected);
            dropdown.trigger("change");
            $('option[selected]').click();
            dropdown.change(function () {
                sessionStorage.setItem("selected", this.value);

            });

        }

        //change Account Number placeholder to Program ID
        $('input#campusAccount').attr('placeholder', 'Worktag (Program ID, Grant, ect.)');

        //Comment Section
        $('textarea#orderComments.normal.form-control.bottom10.text-box.single-line').attr('placeholder', 'Departmental Detail/Work Order & Order or Delivery Comments...');

        //Notifying user to enter delivery info message
        $('div#paymentText').prepend("<div id='notice_wrapper'><div id='paymentText' class='clear col-sm-6 col-xs-12'>*<b>Please include your building name and room number for delivery below.</b><p></p></div></div>");

        // Change Program ID to caps

        $("input[type=text]").keyup(function () {
            $(this).val($(this).val().toUpperCase());
        });


    });
});

/*=====================================================================================
| 
|                                Checkout Code End
|
======================================================================================*/


/*=====================================================================================
| 
|                                Merch Detail Code Start
|
======================================================================================*/

$(document).ready(function () {
    $("#imageLightBox").on('shown.bs.modal', function () {
        var height = $('.modalDetailImage').find('img').height();
        var height2 = $('.imageLightBoxLeft').height();
        var imageHeight = height / 2;
        var imageHeight = imageHeight - height2;
        $('.imageLightBoxLeft').css('margin-top', imageHeight);
        $('.imageLightBoxRight').css('margin-top', imageHeight);
    });
    $('.imageLightBoxLeft').click(function () {
        var dataID = $('.imageLightBoxBig').attr('data-id');
        var dataCount = $('.modalDetailImage').attr('data-count');
        var data = dataID - 1;
        if (dataID != 1) {
            var src = $('.modalDetailThumbnail').find('[data-id="' + data + '"]').attr('data-high');
            var newDataID = $('.modalDetailThumbnail').find('[data-id="' + data + '"]').attr('data-id');
            var newAltText = $('.modalDetailThumbnail').find('[data-id="' + data + '"]').attr('alt');
            $('.imageLightBoxBig').attr('src', src);
            $('.imageLightBoxBig').attr('alt', newAltText);
            $('.imageLightBoxBig').attr('data-id', newDataID);
        } else {
            var src = $('.modalDetailThumbnail').find('[data-id="' + dataCount + '"]').attr('data-high');
            var newDataID = $('.modalDetailThumbnail').find('[data-id="' + dataCount + '"]').attr('data-id');
            var newAltText = $('.modalDetailThumbnail').find('[data-id="' + dataCount + '"]').attr('alt');
            $('.imageLightBoxBig').attr('src', src);
            $('.imageLightBoxBig').attr('alt', newAltText);
            $('.imageLightBoxBig').attr('data-id', newDataID);
        }
    });
    $('.imageLightBoxRight').click(function () {
        var dataID = $('.imageLightBoxBig').attr('data-id');
        var dataCount = $('.modalDetailImage').attr('data-count');
        var data = parseInt(dataID);
        data = data + 1;
        if (dataID != dataCount) {
            var src = $('.modalDetailThumbnail').find('[data-id="' + data + '"]').attr('data-high');
            var newDataID = $('.modalDetailThumbnail').find('[data-id="' + data + '"]').attr('data-id');
            var newAltText = $('.modalDetailThumbnail').find('[data-id="' + data + '"]').attr('alt');
            $('.imageLightBoxBig').attr('src', src);
            $('.imageLightBoxBig').attr('alt', newAltText);
            $('.imageLightBoxBig').attr('data-id', newDataID);
        } else {
            var src = $('.modalDetailThumbnail').find('[data-id="1"]').attr('data-high');
            var newDataID = $('.modalDetailThumbnail').find('[data-id="1"]').attr('data-id');
            var newAltText = $('.modalDetailThumbnail').find('[data-id="1"]').attr('alt');
            $('.imageLightBoxBig').attr('src', src);
            $('.imageLightBoxBig').attr('alt', newAltText);
            $('.imageLightBoxBig').attr('data-id', newDataID);
        }

    });
    $(document).on('click', '.imageLightBoxSmall', function () {
        var source = $(this).attr('data-high');
        var altText = $(this).attr('alt');
        var dataID = $(this).attr('data-id');
        $('.imageLightBoxBig').attr('src', source);
        $('.imageLightBoxBig').attr('alt', altText);
        $('.imageLightBoxBig').attr('data-id', dataID);
    });
    $(window).resize(function () {
        var height = $('.modalDetailImage').find('img').height();
        var height2 = $('.imageLightBoxLeft').height();
        var imageHeight = height / 2;
        var imageHeight = imageHeight - height2;
        $('.imageLightBoxLeft').css('margin-top', imageHeight);
        $('.imageLightBoxRight').css('margin-top', imageHeight);
        if ($(window).width() > 991) {
            $('.imageLightBoxLeft').addClass('btn-lg');
            $('.imageLightBoxRight').addClass('btn-lg');
        } else {
            $('.imageLightBoxLeft').removeClass('btn-lg');
            $('.imageLightBoxRight').removeClass('btn-lg');

        }
    });
});

/*=====================================================================================
| 
|                                Merch Detail Code End
|
======================================================================================*/



//Start append merch descriptions to merch cells ------------------------------------
var merchDesc = $('.merchDesc');

jQuery.each(merchDesc, function (i, valD) {
    $(valD).appendTo("#mcell" + i);
    $("<br />").appendTo("#mcell" + i);
});

function goBack() {
    window.history.back();
}

//End append merch descriptions to merch cells ------------------------------------

