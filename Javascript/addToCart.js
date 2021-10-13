$(document).ready(function () {
  $(".addToCart").click(function () {
    var istypeless = $(this).attr("data-isTypeless");
    var merchID = $(this).attr("data-Id");
    var disclaimer = $(this).attr("data-disclaimer");
    var isChecked = $('[data-disclaimer="' + merchID + '"]').is(":checked");
    var typeValue = $('[data-select="' + merchID + '"]').val();
    var pricePoint = $(this).attr("data-pricePoint");

    model = {
      Name: "",
      Id: "",
      LCSId: "", //selected lcs option
      isTypless: "",
      classId: "",
      loyaltyPrice: "",
      currentPrice: "",
      regularPrice: "",
      isLoyalty: "",
      merch_form_id: "",
      isOnSale: "",
      isEGiftCard: "",
      isNonMerch: "",
      merch_cs_id: "",
      merStoreId: "",
      quantity: "",
      reload: "",
    };
    model.Name = $('.merchTitle[data-id="' + merchID + '"]').text();
    model.Id = $(this).attr("data-Id");
    model.isTypless = $(this).attr("data-isTypeless");
    model.classId = $(this).attr("data-classid");
    model.loyaltyPrice = $(".merchPoints").text();
    model.currentPrice = $(".merchPriceCurrent").text();
    model.currentPrice = model.currentPrice.replace("$", "");
    model.currentPrice = model.currentPrice.replace(",", "");
    model.regularPrice = $(this).attr("data-regularPrice");
    model.isLoyalty = $(this).attr("data-isloyalty");
    model.merch_form_id = $(this).attr("data-formid");
    model.isOnSale = $(this).attr("data-isonsale");
    model.isEGiftCard = $(this).attr("data-egiftcard");
    model.isNonMerch = $(this).attr("data-nonmerch");
    model.merch_cs_id = $(this).attr("data-csid");
    model.merStoreId = $(this).attr("data-storeid");
    model.quantity = $('[data-qtyid="' + merchID + '"]').val();
    model.reload = $(this).attr("data-reload");
    if (model.isLoyalty.toLowerCase() == "false") {
      if (istypeless.toLowerCase() == "false") {
        if (typeValue == null) {
          $('[data-selectError="' + merchID + '"]').show();
          $('[data-disclaimerError="' + merchID + '"]').hide();
          $('[data-select="' + merchID + '"]').focus();
          return false;
        } else {
          model.LCSId = typeValue;
          if (pricePoint.toLowerCase() == "true") {
            var selectThis = $('[data-select="' + merchID + '"]');
            var lcsText = $(selectThis).find("option:selected").text();
            lcsTextPlace = lcsText.lastIndexOf("($");
            lcsTextPlace = lcsTextPlace + 2;
            lcsText = lcsText.substr(lcsTextPlace);
            lcsText = lcsText.replace(")", "");
            lcsText = lcsText.replace(",", "");
            model.currentPrice = lcsText;
            model.regularPrice = lcsText;
          }
        }
      }
    } else {
      var availablePoints = "0";
      var current = parseInt(model.loyaltyPrice);
      var available = parseInt(availablePoints);
      if (current > available) {
        $("#notEnough").modal("show");
        return false;
      } else if (istypeless.toLowerCase() == "false") {
        if (typeValue == null) {
          $('[data-selectError="' + merchID + '"]').show();
          $('[data-disclaimerError="' + merchID + '"]').hide();
          $('[data-select="' + merchID + '"]').focus();
          return false;
        } else {
          model.LCSId = typeValue;
          if (pricePoint.toLowerCase() == "true") {
            var selectThis = $('[data-select="' + merchID + '"]');
            var lcsText = $(selectThis)
              .find("option:selected")
              .attr("data-points");
            model.loyaltyPrice = lcsText;
          }
        }
      }
    }

    if (disclaimer.toLowerCase() == "true") {
      if (isChecked === false) {
        $('[data-disclaimerError="' + merchID + '"]').show();
        $('[data-selectError="' + merchID + '"]').hide();
        $('[data-disclaimer="' + merchID + '"]').focus();
        return false;
      }
    }
    $(".hiddenForm").attr("data-form", merchID);
    $.ajax({
      cache: false,
      type: "POST",
      url: "//order.centralstores.iastate.edu/shoppingCart/AddMerchItemMain",
      data: model,
      dataType: "json",
      error: function (xhr) {
        $("#errorModal").modal("show");
        $("#errorModal").focus();
      },
      success: function (data, jqXHR) {
        if (data.showModal == true) {
          $(".itemFormModalContent").html(data.modaldata);
          $(".itemFormTitle").html(model.Name);
          $("#itemFormModal").modal();
          $("#itemFormButton").val(merchID);
          $("#itemFormType").val("single");
        } else {
          if (data.mesg == true) {
            //Here we need to update mini cart with total and count values
            var count = data.count;
            var total = data.total;
            total = parseFloat(Math.round(total * 100) / 100).toFixed(2);
            total = "$" + total;
            $("#ItemCount").text(count);
            $("#SubTotal").text(total);
            $(".addedToCart").css("display", "inline-block");
          }
          if (data.showcarttype) {
            $(".addedToCart").css("display", "none");
            $(".cartTypeBody").html(data.cartType);
            $("#cartType").modal();
          }
          if (data.showLoyaltyModal) {
            $(".addedToCart").css("display", "none");
            $("#notEnough").modal("show");
          }
        }
      },
    });
  });
});

//     <html>
// <div id="contentSection" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

//                 <!--Breadcrumbs-->

//             <ul class="breadcrumb background_none">
//                     <li> <a class="small" href="https://order.centralstores.iastate.edu/merchandise?mc_id=-1"> Merchandise Categories</a></li>
//                     <li> <a class="small" href="https://order.centralstores.iastate.edu/merchlist?ID=21285"> BATTERY</a></li>
//                     <li> <a class="small"> ALKALINE BATTERY 9V</a></li>

//             </ul>

//                 <!--Breadcrumbs End-->
//                 <a class="floatr right15 top-50 pageHelp" href="https://order.centralstores.iastate.edu/help/MerchandiseDetail.htm">Help</a>
//             <form action="/MerchDetail?MerchID=663797&amp;CategoryName=BATTERY&amp;CatID=21285&amp;Name=BATTERY" method="post"><input name="__RequestVerificationToken" type="hidden" value="z6kHLslzFuGc4tURqaiUC3kpuciEoaQp3tjvfPVf5GSv-OJMKLWGytRMFaCqk6G3gRGmvQCNVWlACIUzgg_FIcvHMy81"><input id="hiddenType" name="itemType" type="hidden" value=""><input id="customerLoyaltyRWD_totalPointsAvail" name="customerLoyaltyRWD.totalPointsAvail" type="hidden" value="0">                <div class="center">
//                                 <h1 class="page_header bottom10">ALKALINE BATTERY 9V</h1>
//                             </div>
//                             <!--One Item-->
//                             <div class="merchItem col-xs-12 padding0">
//                                 <div class="merchImage col-xs-12 col-sm-5">
//                                             <div class="merchImageMain col-xs-12">
//                                                 <img class="merchDetailImage margin_auto img-responsive" data-id="1" src="/storeimages/422-663797-1.jpg" data-high="/storeimages/422-663797-1.jpg" data-thumb="/storeimages/422-663797-1_th.jpg" alt="Cover Image For ALKALINE BATTERY 9V">
//                                             </div>
//                                         <div id="imageLightBox" class="modal fade" role="dialog" tabindex="0">
//                                             <div class="modal-dialog modal-lg">

//                                                 <div class="modal-content">
//                                                     <div class="modal-body">
//                                                         <div class="col-xs-12 padding0 bottom10">
//                                                             <div class="col-md-1 col-sm-2 col-xs-2 textl">
//                                                                 <a class="imageLightBoxLeft btn btn-default btn-lg" style="display: inline-block;" tabindex="0"><span class="glyphicon glyphicon-chevron-left"></span></a>

//                                                             </div>
//                                                             <div class="modalDetailImage textc col-md-10 col-sm-8 col-xs-8" data-count="0">
//                                                                 <img data-id="1" class="imageLightBoxBig img-responsive margin_auto" alt="">
//                                                             </div>
//                                                             <div class="col-md-1 col-sm-2 col-xs-2 textr">
//                                                                 <a class="imageLightBoxRight btn btn-default btn-lg" style="display: inline-block;" tabindex="0"><span class="glyphicon glyphicon-chevron-right"></span></a>
//                                                             </div>
//                                                         </div>
//                                                         <div class="modalDetailThumbnail textc">

//                                                         </div>

//                                                     </div>
//                                                     <div class="modal-footer">
//                                                         <button type="button" class="btn btn-default" data-dismiss="modal" tabindex="0">Close</button>
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                         <style>
//                                              .merchDetailImage {
//                                                  cursor: zoom-in;
//                                              }
//                                         </style>
//                                     <!--Merch Image-->
//                                 </div>
//                                 <!--Hidden Information to display in modal-->
//                                 <div class="merchInfo col-xs-12 col-sm-7">
//                                     <!--Merch Title-->
//                                     <h2 class="merchTitle top5" data-id="663797" style="display: none;">ALKALINE BATTERY 9V</h2>
//                                                             <!--Merch Long Description-->
//                                     <div class="merchDesc"><p><b>Product Description:</b></p>
//                                         <div id="mainDes">
//             BATTERY, 9 VOLT ALKALINE, ENERGIZER EN22   <p></p><b>Order by:  EACH </b><em>(ORDER 72 FOR BOX)</em><p></p><b>Old #: </b>10410517<p></p><b>Warehouse Location: </b>A5C4<p style="color:white;font-size:0px;">Batteries</p></div>

//                                     </div>
//                                     <!--Merch Item Number-->

//                                     <!--Merch Price-->

//                                                             <!--Add to Cart Button-->

//                                 <div id="product_info" style="margin-bottom:30px;"><div id="priceBlock"><p class="merchPrice top5" style="font-size: 180%;"><strong>Price: </strong><span class="merchPriceCurrent">$1.39</span></p></div><div id="Qty" style="margin: 20px 0"><label>Quantity: </label><button id="decrease" class="action-box" type="button">-</button><input id="merchQTY" data-qtyid="663797" class="form-control merchDetailQTY QTY1 max displayib" value="1" maxlength="3" min="1" max="999" aria-label="Quantity" type="text" size="10" style="width: 40px !important; margin: 0px 20px; display: inline-block; text-align: center;"><button id="increase" class="action-box" type="button">+</button></div><div class="addToCartButton top5" style="margin: 30px 0px;">
//                                             <span class="displayib" style="display: none;"><strong>QTY: </strong></span>
//                                             <div class="displayib left15">

//                                                         <a tabindex="0" class="addToCart btn button" data-name="ALKALINE BATTERY 9V" data-id="663797" data-istypeless="True" data-regularprice="1.39" data-isloyalty="False" data-formid="-1" data-isonsale="False" data-egiftcard="False" data-nonmerch="False" data-classid="0" data-csid="0" data-storeid="422" data-pricepoint="false" data-disclaimer="False" data-reload="False">Add To Cart</a>
//                                                                                         <p class="addedToCart displayn"><span class="glyphicon glyphicon-ok Gift_Checkmark faa-shake animated Checkmark_Color padding0"></span> This item has been added to your Cart.</p>
//                                             </div>
//                                         </div><p class="merchItem"><strong>Item: </strong><span>2000064           </span></p></div></div>
//                             </div>
//                             <div class="backCart col-xs-12 textr">
//                                 <a class="hover_pointer btn btn-primary backButton" tabindex="0" href="https://order.centralstores.iastate.edu/MerchList?ID=21285">Back</a>
//                                 <a href="https://order.centralstores.iastate.edu/shoppingcart" class="hover_pointer btn btn-primary cartButton" tabindex="0">Shopping Cart</a>
//                             </div>
//                             <!--End One Item-->
//                             <div id="itemFormModal" class="modal fade" role="dialog" tabindex="0">
//                                 <input type="hidden" value="" id="itemFormButton">
//                                 <input type="hidden" value="" id="itemFormType">
//                                 <div class="modal-dialog">

//                                     <!-- Modal content-->
//                                     <div class="modal-content itemFormModalContent">

//                                     </div>

//                                 </div>
//                             </div>
//                             <div id="cartType" class="modal fade" role="dialog" tabindex="0">
//                                 <div class="modal-dialog">

//                                     <!-- Modal content-->
//                                     <div class="modal-content">
//                                         <div class="modal-body cartTypeBody">

//                                         </div>

//                                     </div>

//                                 </div>
//                             </div>
//                             <div id="reportPostModal" class="modal fade" role="dialog" tabindex="0">
//                                 <div class="modal-dialog">

//                                     <!-- Modal content-->
//                                     <div class="modal-content">
//                                         <div class="modal-header">
//                                             <h3 class="modal-title">Report Comment</h3>
//                                         </div>
//                                         <div class="modal-body">
//                                             <p>Are you sure you want to report this comment for inappropriate content?</p>
//                                         </div>
//                                         <div class="modal-footer">
//                                             <button type="button" class="btn btn-default reportCommentYes" tabindex="0">Yes</button>
//                                             <button type="button" class="btn btn-default" data-dismiss="modal" tabindex="0">Close</button>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                             <div id="notEnough" class="modal fade" role="dialog" tabindex="0">
//                                 <div class="modal-dialog">

//                                     <!-- Modal content-->
//                                     <div class="modal-content">
//                                         <div class="modal-header">
//                                         </div>
//                                         <div class="modal-body">
//                                             <p>This item requires more points than you have available.</p>
//                                         </div>
//                                         <div class="modal-footer">
//                                             <button type="button" class="btn btn-default" data-dismiss="modal" tabindex="0">Close</button>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//             </form>

//                         </div>

//     </html>
