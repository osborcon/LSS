$(document).ready(function () {
    $('.itemLink').click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    });
    $(".searchMerchHor").click(function () {
        var search = $(".searchBoxHor").val();
        if (search == '') {
            $('.errorHorizontal').show();
            return;
        } else {
            $('.errorHorizontal').hide();
            var url = 'http://order.centralstores.iastate.edu/' + 'merchlist?searchtype=all&txtSearch=' + search; // 'Url.Action("CourseMaterials", "SelectTermDept", New With {.Ids = "__id__"})';
            window.location.href = url; // url.replace('__id__', search);
            return;
        }
    });
    $(".searchMerchVer").click(function () {
        var search = $(".searchBoxVer").val();
        if (search == '') {
            $('.errorVertical').show();
            return;
        } else {
            $('.errorVertical').hide();
            var url = 'http://order.centralstores.iastate.edu/' + 'merchlist?searchtype=all&txtSearch=' + search; // 'Url.Action("CourseMaterials", "SelectTermDept", New With {.Ids = "__id__"})';
            window.location.href = url; // url.replace('__id__', search);
            return;
        }
    });
    $(".searchBox").keyup(function (e) {
        var searchBox = $(this);
        if (e.keyCode == 13) {
            var search = $(this).val();
            if (search == '') {
                $('#errorMesg').append("<li>Please enter search criteria.</li>");
                return;
            } else {
                var url = 'http://order.centralstores.iastate.edu/' + 'merchlist?searchtype=all&txtSearch=' + search; // 'Url.Action("CourseMaterials", "SelectTermDept", New With {.Ids = "__id__"})';
                window.location.href = url; // url.replace('__id__', search);
                return;
            }
        }
    });
});

$(document).ready(function () {
    function deleteItemSearch() {
        $('.itemSearchWrapper').fadeOut();
        $('.itemSearchWrapper').remove();
    };
    $(".searchBoxHor").keyup(function (e) {
        var searchBox = $(this);
        if (e.keyCode !== 13) {
            var search = $(this).val();
            if (search.length >= 3) {
                $.ajax({
                    url: '//order.centralstores.iastate.edu/MerchList/searchResults',
                    data: { "text": search },
                    dataType: "json",
                    type: "POST",
                    error: function (xhr) {
                        $('#errorModal').modal('show');
                        $('#errorModal').focus();
                    },
                    success: function (data, jqXHR) {
                        if (data.showHTML === true) {
                            $('.itemSearchWrapper').fadeOut();
                            $(data.html).appendTo('#H_Search');
                            var item = $('.itemSearchWrapper');
                            $('.itemSearchWrapper').not(':last').remove();
                            $(item).delay(30000).fadeOut();
                        }
                    }
                });
            } else if (search.length < 1) {
                $('.itemSearchWrapper').fadeOut();
                $('.itemSearchWrapper').remove();
            }
        }
    });
});

