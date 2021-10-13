$(document).ready(function() {
    function deleteItemSearch() {
        $('.itemFindWrapper').fadeOut();
        $('.itemFindWrapper').remove();
    };
    $(".findBoxHor").keyup(function(e) {
        var findBox = $(this);
        if (e.keyCode !== 13) {
            var find = $(this).val();
            $('li').highlight(find);
            $('p').highlight(find);
        }
    });
});

$(document).ready(function() {
    $('#ClearFind').click(function() {
        $('#highlight-plugin').removeHighlight();
    });
});