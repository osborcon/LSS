var columns = 5;
        var pricePointMsg = "";
        $(".merchColumn").hide();
        // Get page elements we want to use in our custom //
        // merch table and place them into arrays.        //
        var myMerchCellsArray = $('.merchItem');
        var myArraySize = myMerchCellsArray.length;
        var merchImage = $('.merchImage');
        var merchDesc = $('.merchTitle').parent();
        var merchSKU = $('.merchSKU');
        var merchPrice = $('.merchPriceCurrent');
		var merchDiscount = $('.merchDiscount');

        // Create new merch table, add rows and cells //
        var rowCount = 0;

        // Create the table //
        $('<table id="myMTable" class="myMTable"><tbody></tbody></table>').insertBefore('.merchColumn');
        for (var i = 0; i < myArraySize; i += columns) {
            // Create a row //
            $('<tr id="myRow' + rowCount + '"></tr>').appendTo('#myMTable');
            for (var j = 0;
                (j < columns) && ((i + j) < myArraySize); ++j) {
                // Add cells to the row //
                $('<td id="mcell' + (i + j) + '"></td>').appendTo("#myRow" + rowCount);
            }++rowCount;
        }

        // Now append the merch image, short description,  //
        // and SKU number to our table cells.              //
        jQuery.each(merchImage, function(i, val) {
            //$(val).appendTo("#mcell" + i);
            var newVal = $("<a>", {
                "class": "imageBorder",
                "href": merchDesc[i].href,
            });
            var newVal2 = $("<img>", {
                "class": "imageBorder",
                "src": merchImage[i].src,
                "border": '1px',
                'style': 'border:1px solid #F0EFED;padding: 19px;height: 140px;margin: 10px;border-color:rgb(240,239,237);',
            });
            $(newVal2).appendTo(newVal);
            $(newVal).appendTo("#mcell" + i);
            $("<br />").appendTo("#mcell" + i);
        });

        jQuery.each(merchDesc, function(i, valD) {
            $(valD).appendTo("#mcell" + i);
            $("<br />").appendTo("#mcell" + i);
        });

        jQuery.each(merchSKU, function(i, valS) {
            $(valS).appendTo("#mcell" + i);
            $("<br /><br />").appendTo("#mcell" + i);

            // Append the base price span if available.  //
            $(merchPrice[i]).appendTo("#mcell" + i);
            $("<br />").appendTo("#mcell" + i);

			$(merchDiscount[i]).appendTo("#mcell" + i);
            $("<br />").appendTo("#mcell" + i);
        });

        // Add classes to content to allow for CSS styling //
        $("td[id^=mcell]").addClass("mTableCell");
        $("td[id^=mcell]").hover(function() {
            $(this).addClass('mTableCellHover');
        }, function() {
            $(this).removeClass('mTableCellHover');
        });
        $('a[id*=MerchDesc]').addClass("mDescriptionLink");
        $('span[id*=_LblSKU]').addClass("mSKU");
        $('span[id*=_salePriceBlock]').addClass("mPriceFields");

        $('.firstBackward').addClass('button');
        $('.prevBackward').addClass('button');
        $('.nextForward').addClass('button');
        $('.lastForward').addClass('button');
        $('.merchResultsSelect').css('display', 'inline');
        $('.merchResultsSelect').css('width', 'auto');
        $('.merchResultsSelect').css('background-image', 'url(https://order.centralstores.iastate.edu/SiteImages/215-SchoolImages/215-icon_select.png)');
        $('.merchResultsSelect').css('padding', '6px 31px 6px 6px');

		//changes the sort by drop down
		$("span:contains('Sort By:')").remove();
		if ($('#hiddenSort').val() == 8) {
			$('#hiddenSort').val(0);
		}
		var valueNum = $('#hiddenSort').val();
			var optionText = $('.merchSortBy.form-control.wauto.displayib').children("option[value='" + valueNum + "']").text();
           $('.merchSortBy.form-control.wauto.displayib').children("option[value='" + valueNum + "']").text("Sort By: " + optionText);
		$('.merchSortBy').change(function () {
			var valueNum = $('#hiddenSort').val();
			var optionText = $('.merchSortBy.form-control.wauto.displayib').children("option[value='" + valueNum + "']").text();
           $('.merchSortBy.form-control.wauto.displayib').children("option[value='" + valueNum + "']").text("Sort By: " + optionText);
        });

		var stringMin = $('.merchResultsText.displayib.right5').children('#showResults1').text();
		var stringMax = $('.merchResultsText.displayib.right5').children('#showResults2').text();
		var stringFull = $('.merchResultsText.displayib.right5').text();
		var stingPos = stringFull.indexOf('of');
		stingPos = stingPos + 3;
		var stringTotal = stringFull.substr(stingPos);
		if(stringMax == stringTotal) {
			$('a.nextForward.btn.btn-primary.btn-xs.top5.displayn.button').attr('style', 'display: none !important');
			$('a.lastForward.btn.btn-primary.btn-xs.top5.displayn.button').attr('style', 'display: none !important');
		}
		if (stringMin == '1') {
			$('a.firstBackward.btn.btn-primary.btn-xs.top5.displayn.button').attr('style', 'display: none !important');
			$('a.prevBackward.btn.btn-primary.btn-xs.top5.displayn.button').attr('style', 'display: none !important');
		}

    }