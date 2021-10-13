
        var token = $('input[name="__RequestVerificationToken"]').val();
        $(document).ready(function () {
        $('.merchAdopt').each(function () {
            var title = $(this).attr('data-title');
            var newString = title.replace(/<(?:.|\n)*?>/gm, '');
            $(this).attr('data-title', newString);

        });
        $('.bookAdopt').each(function () {
            var title = $(this).attr('data-title');
            var newString = title.replace(/<(?:.|\n)*?>/gm, '');
            $(this).attr('data-title', newString);

        });
    });
    $(document).on('keydown', '.searchMerchInput', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            $('.searchMerchButton').click();
        }
    });
    $(document).on('click', '.searchMerchButton', function () {
        $('.merchSearchError').hide();
        var text = $('.searchMerchInput').val();
        if (text.trim() === "") {
            $('.merchSearchError').show();
            $('.searchMerchInput').focus();
            return false;
        }
        $.ajax({
            url: 'AdvancedAdoptionMerch/searchMerch',
            data: { __RequestVerificationToken: token, "text": text },
            dataType: "json",
            type: "POST",
            error: function (xhr) {
                $('#errorModal').modal('show');
                $('#errorModal').focus();
            },
            success: function (data, jqXHR) {
                $('.merchSearchBody').html(data.html);
            }
        });
    });
    $(document).on('click', '.oneCategoryLink', function () {
        var tabType = 'YourMerchList';
        var code = $(this).attr('data-code');
        $.ajax({
            url: 'AdvancedAdoptionMerch/LoadBrowseMerchandise',
            data: {__RequestVerificationToken: token, "type": tabType, "code": code, "startnum": 0, "endnum": 9 },
            dataType: "json",
            type: "POST",
            error: function (xhr) {
                $('#errorModal').modal('show');
                $('#errorModal').focus();
            },
            success: function (data, jqXHR) {
                $('.browseCol2').html(data.html);
            }
        });
    });
    $(document).on('click', '.oneCategory', function () {
        var cat = $(this);
        var code = $(this).attr('data-code');
        var open = $(this).attr('data-open');
        if (open === 'false') {
            $(this).attr('data-open', 'true');
            $(this).find('.glyphicon').removeClass('glyphicon-plus');
            $(this).find('.glyphicon').addClass('glyphicon-minus');
            $.ajax({
                url: 'AdvancedAdoptionMerch/MerchChildren',
                data: {__RequestVerificationToken: token, "code": code },
                dataType: "json",
                type: "POST",
                error: function (xhr) {
                    $('#errorModal').modal('show');
                    $('#errorModal').focus();
                },
                success: function (data, jqXHR) {
                    $(cat).next().html(data.html);
                }
            });
        } else {
            $(this).attr('data-open', 'false');
            $(this).find('.glyphicon').removeClass('glyphicon-minus');
            $(this).find('.glyphicon').addClass('glyphicon-plus');
            $(this).next().html('');
        }
    });
    $(document).on('click', '.merchAdopt', function () {
        var target = $(this);
        var merchid = $(target).attr('data-merchid');
        var title = $(target).attr('data-title');
        $.ajax({
            url: 'AdvancedAdoptionMerch/AddMerch',
            data: {__RequestVerificationToken: token, "merchid": merchid, "title": title },
            dataType: "json",
            type: "POST",
            error: function (xhr) {
                $('#errorModal').modal('show');
                $('#errorModal').focus();
            },
            success: function (data, jqXHR) {
                $(target).hide();
                $(target).prev().show();
                $('.merchCount').text(data.count);
            }
        });
    });
    $(document).on('click', '.merchRemove ', function () {
        var merchid = $(this).attr('data-merchid');
        $.ajax({
            url: 'AdvancedAdoptionMerch/RemoveMerch',
            data: {__RequestVerificationToken: token, "merchid": merchid },
            dataType: "json",
            type: "POST",
            error: function (xhr) {
                $('#errorModal').modal('show');
                $('#errorModal').focus();
            },
            success: function (data, jqXHR) {
                location.reload();
            }
        });
    });
    $(document).on('click', '.browseNum', function () {
        var num = $(this).attr('data-num');
        var endValue = $('#endValue').val();
        var startNum = $('#StartNum').val();
        var endNum = $('#EndNum').val();
        var maxNum = $('#MaxNum').val();
        var code = $('#BrowseCode').val();
        var searchtext = $('#SearchText').val();
        var tabType = 'YourMerchList';
            var multiply = (parseInt(num) - 1) * 10;
            startNum = parseInt(multiply);
            endNum = parseInt(startNum) + 9
            $.ajax({
                url: 'AdvancedAdoptionMerch/LoadBrowseMerchandise',
                data: {__RequestVerificationToken: token, "type": tabType, "code": code, "startNum": startNum, "endNum": endNum, "searchtext": searchtext },
                dataType: "json",
                type: "POST",
                error: function (xhr) {
                    $('#errorModal').modal('show');
                    $('#errorModal').focus();
                },
                success: function (data, jqXHR) {
                    if (tabType === "YourMerchList") {
                        $('.yourMerchListBody').html(data.html);
                    }
                    if (tabType === "BrowseMerch") {
                        $('.browseCol2').html(data.html);
                    }
                    if (tabType === "MerchSearch") {
                        $('.merchSearchBody').html(data.html);
                    }
                        var newRemain = parseInt(num) % 5;
                        var newMinus;
                        if (newRemain === 0) {
                            newMinus = 0;
                        } else {
                            newMinus = 5 - parseInt(newRemain);
                        }
                        var newEnd = parseInt(num) + parseInt(newMinus);
                        var newStart = parseInt(newEnd) - 4;

                        if (newStart <= 0) {
                            newStart = 1;
                        }
                        if (newEnd >= maxValue) {
                            newEnd = maxValue;
                    }
                        $('.browseNum').each(function () {
                            $(this).removeClass('activeList');
                            var browseNum = $(this).attr('data-num');
                            if (parseInt(browseNum) >= parseInt(newStart) && parseInt(browseNum) <= parseInt(newEnd)) {
                                if (parseInt(num) === parseInt(browseNum)) {
                                    $(this).addClass('activeList');
                                }
                                $(this).show();
                            } else {
                                $(this).hide();
                            }
                    });
                    $('#endValue').val(newEnd);
                            $('.merchAdopt').each(function () {
            var title = $(this).attr('data-title');
            var newString = title.replace(/<(?:.|\n)*?>/gm, '');
            $(this).attr('data-title', newString);

        });

                }
            });


    });
    $(document).on('click', '.browseRDot', function () {
        var endValue = $('#endValue').val();
        var maxValue = $('#maxValue').val();
        if (endValue === maxValue) {
            return false;
        }
        var startNum = $('#StartNum').val();
        var endNum = $('#EndNum').val();
        var maxNum = $('#MaxNum').val();
        var code = $('#BrowseCode').val();
        var tabType = 'YourMerchList';
        var searchtext = $('#SearchText').val();
        if (endNum === maxNum) {
            return false
        } else {
            var startNumNation = parseInt(endValue) + 1;
            if (startNumNation > maxValue) {
                startNumNation = maxValue;
            }
            startNum = (parseInt(startNumNation) - 1) * 10
            endNum = parseInt(startNum) + 10
            if (endNum > maxNum) {
                endNum = maxNum;
            }
            $.ajax({
                url: 'AdvancedAdoptionMerch/LoadBrowseMerchandise',
                data: {__RequestVerificationToken: token, "type": tabType, "code": code, "startNum": startNum, "endNum": endNum, "searchtext": searchtext },
                dataType: "json",
                type: "POST",
                error: function (xhr) {
                    $('#errorModal').modal('show');
                    $('#errorModal').focus();
                },
                success: function (data, jqXHR) {
                    if (tabType === "YourMerchList") {
                        $('.yourMerchListBody').html(data.html);
                    }
                    if (tabType === "BrowseMerch") {
                        $('.browseCol2').html(data.html);
                    }
                    if (tabType === "MerchSearch") {
                        $('.merchSearchBody').html(data.html);
                    }
                    var ajaxstartNum = parseInt(endValue) + 1;
                    var ajaxendNum = parseInt(endValue) + 5;
                    if (ajaxstartNum > maxValue) {
                        ajaxstartNum = maxValue;
                    }
                    if (ajaxendNum > maxValue) {
                        ajaxendNum = maxValue;
                    }
                    $('.browseNum').each(function () {
                        $(this).removeClass('activeList');
                        var num = $(this).attr('data-num');
                        if (num >= ajaxstartNum && num <= ajaxendNum) {
                            var newNum = parseInt(num);
                            if (parseInt(newNum) === parseInt(ajaxstartNum)) {
                                $(this).addClass('activeList');
                            }
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });
                    $('#endValue').val(ajaxendNum);
                    $('.merchAdopt').each(function () {
                        var title = $(this).attr('data-title');
                        var newString = title.replace(/<(?:.|\n)*?>/gm, '');
                        $(this).attr('data-title', newString);
                    });
                }
            });
        }
    });
    $(document).on('click', '.browseLDot', function () {
        var endValue = $('#endValue').val();
        if (endValue <= 5) {
            return false;
        }
        var startNum = $('#StartNum').val();
        var endNum = $('#EndNum').val();
        var maxNum = $('#MaxNum').val();
        var code = $('#BrowseCode').val();
        var tabType = 'YourMerchList';
        var searchtext = $('#SearchText').val();
        var remainder = endValue % 5;
        var startValue;
        if (remainder === 0) {
            startValue = parseInt(endValue) - 9;
            endValue = parseInt(endValue) - 5;

        } else {
            startValue = parseInt(endValue) - (4 + remainder);
            endValue = parseInt(endValue) - (remainder);
        }
        if (startValue < 1) {
            startValue = 1;
        }
        endNum = parseInt(endValue) * 10 - 1;
        startNum = parseInt(endNum) - 9;

        $.ajax({
            url: 'AdvancedAdoptionMerch/LoadBrowseMerchandise',
            data: {__RequestVerificationToken: token, "type": tabType, "code": code, "startNum": startNum, "endNum": endNum, "searchtext": searchtext },
            dataType: "json",
            type: "POST",
            error: function (xhr) {
                $('#errorModal').modal('show');
                $('#errorModal').focus();
            },
            success: function (data, jqXHR) {
                    if (tabType === "YourMerchList") {
                        $('.yourMerchListBody').html(data.html);
                    }
                    if (tabType === "BrowseMerch") {
                        $('.browseCol2').html(data.html);
                    }
                    if (tabType === "MerchSearch") {
                        $('.merchSearchBody').html(data.html);
                    }
                $('.browseNum').each(function () {
                    $(this).removeClass('activeList');
                    var num = $(this).attr('data-num');
                    var newNum = parseInt(num);
                    if (num >= startValue && num <= endValue) {
                        if (newNum === endValue) {
                            $(this).addClass('activeList');
                        }
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
                $('#endValue').val(endValue);
                    $('.merchAdopt').each(function () {
                        var title = $(this).attr('data-title');
                        var newString = title.replace(/<(?:.|\n)*?>/gm, '');
                        $(this).attr('data-title', newString);
                    });
            }
        });
    });
    $(document).on('click', '.browseNext', function () {
        var number = $('.activeList').attr('data-num');
        var maxValue = $('#maxValue').val();
        var endValue = $('#endValue').val();
        if (number === maxValue) {
            return false;
        }
        var startNum = $('#StartNum').val();
        var endNum = $('#EndNum').val();
        var maxNum = $('#MaxNum').val();
        var code = $('#BrowseCode').val();
        var tabType = 'YourMerchList';
        var searchtext = $('#SearchText').val();
        if (endNum === maxNum) {
            return false
        } else {
            startNum = parseInt(startNum) + 10;
            endNum = parseInt(endNum) + 10;
            if (endNum > maxNum) {
                endNum = maxNum
            }
            $.ajax({
                url: 'AdvancedAdoptionMerch/LoadBrowseMerchandise',
                data: {__RequestVerificationToken: token, "type": tabType, "code": code, "startNum": startNum, "endNum": endNum, "searchtext": searchtext },
                dataType: "json",
                type: "POST",
                error: function (xhr) {
                    $('#errorModal').modal('show');
                    $('#errorModal').focus();
                },
                success: function (data, jqXHR) {
                    if (tabType === "YourMerchList") {
                        $('.yourMerchListBody').html(data.html);
                    }
                    if (tabType === "BrowseMerch") {
                        $('.browseCol2').html(data.html);
                    }
                    if (tabType === "MerchSearch") {
                        $('.merchSearchBody').html(data.html);
                    }
                    var newNumber = parseInt(number);
                    var newRemainder = newNumber % 5;
                    if (newRemainder === 0) {
                        var ajaxEndValue = newNumber;
                        var ajaxStartNum = parseInt(ajaxEndValue) + 1;
                        var ajaxEndNum = parseInt(ajaxEndValue) + 5;
                        if (ajaxStartNum > maxValue) {
                            ajaxStartNum = maxValue;
                        }
                        if (ajaxEndNum > maxValue) {
                            ajaxEndNum = maxValue;
                        }
                        $('.browseNum').each(function () {
                            $(this).removeClass('activeList');
                            var num = $(this).attr('data-num');
                            if (num >= ajaxStartNum && num <= ajaxEndNum) {
                                var newNum = parseInt(num);
                                if (parseInt(newNum) === parseInt(ajaxStartNum)) {
                                    $(this).addClass('activeList');
                                    var detailEnd = num * 10;
                                    var detailStart = detailEnd - 9;
                                }
                                $(this).show();
                            } else {
                                $(this).hide();
                            }
                        });
                        $('#endValue').val(ajaxEndNum);
                    } else {
                        newNumber = newNumber + 1;
                        var newRemain = parseInt(newNumber) % 5;
                        var newMinus;
                        if (newRemain === 0) {
                            newMinus = 0;
                        } else {
                            newMinus = 5 - parseInt(newRemain);
                        }
                        var newEnd = newNumber + newMinus;
                        var newStart = newEnd - 4;

                        if (newStart <= 0) {
                            newStart = 1;
                        }
                        if (newEnd >= maxValue) {
                            newEnd = maxValue;
                        }
                        $('.browseNum').each(function () {
                            $(this).removeClass('activeList');
                            var browseNum = $(this).attr('data-num');
                            if (parseInt(browseNum) >= parseInt(newStart) && parseInt(browseNum) <= parseInt(newEnd)) {
                                if (parseInt(newNumber) === parseInt(browseNum)) {
                                    $(this).addClass('activeList');
                                }
                                $(this).show();
                            } else {
                                $(this).hide();
                            }
                        });
                        $('#endValue').val(newEnd);
                                $('.merchAdopt').each(function () {
            var title = $(this).attr('data-title');
            var newString = title.replace(/<(?:.|\n)*?>/gm, '');
            $(this).attr('data-title', newString);

        });
                    }
                }
            });
        }
    });
    $(document).on('click', '.browsePrev', function () {
        var number = $('.activeList').attr('data-num');
        if (number == 1) {
            return false;
        }
        var maxValue = $('#maxValue').val();
        var startNum = $('#StartNum').val();
        var endNum = $('#EndNum').val();
        var maxNum = $('#MaxNum').val();
        var code = $('#BrowseCode').val();
        var tabType = 'YourMerchList';
        var searchtext = $('#SearchText').val();
        var newNumber = parseInt(number) - 1;
        endNum = parseInt(newNumber) * 10 - 1;
        startNum = endNum - 9;

        $.ajax({
            url: 'AdvancedAdoptionMerch/LoadBrowseMerchandise',
            data: {__RequestVerificationToken: token, "type": tabType, "code": code, "startNum": startNum, "endNum": endNum, "searchtext": searchtext },
            dataType: "json",
            type: "POST",
            error: function (xhr) {
                $('#errorModal').modal('show');
                $('#errorModal').focus();
            },
            success: function (data, jqXHR) {
                    if (tabType === "YourMerchList") {
                        $('.yourMerchListBody').html(data.html);
                    }
                    if (tabType === "BrowseMerch") {
                        $('.browseCol2').html(data.html);
                    }
                    if (tabType === "MerchSearch") {
                        $('.merchSearchBody').html(data.html);
                    }
                var newNumber = parseInt(number);
                var newRemainder = newNumber % 5;
                if (newRemainder === 1) {
                    var endValue = parseInt(newNumber) - 1;
                    var remainder = endValue % 5;
                    var startValue, endValue;
                    if (remainder === 0) {
                        startValue = parseInt(endValue) - 4;
                    } else {
                        startValue = parseInt(endValue) - (4 + remainder);
                        endValue = parseInt(endValue) - (remainder);
                    }
                    if (startValue < 1) {
                        startValue = 1;
                    }
                    if (endValue <= 0) {
                        if (maxValue >= 5) {
                            endValue = 5;
                        } else {
                            endValue = maxValue;
                        }
                    }
                    $('.browseNum').each(function () {
                        $(this).removeClass('activeList');
                        var num = $(this).attr('data-num');
                        var newNum = parseInt(num);
                        if (num >= startValue && num <= endValue) {
                            if (newNum === endValue) {
                                $(this).addClass('activeList');
                            }
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });
                    $('#endValue').val(endValue);

                } else {
                        newNumber = newNumber - 1;
                        var newRemain = parseInt(newNumber) % 5;
                        var newMinus;
                        if (newRemain === 0) {
                            newMinus = 0;
                        } else {
                            newMinus = 5 - parseInt(newRemain);
                        }
                        var newEnd = newNumber + newMinus;
                        var newStart = newEnd - 4;

                        if (newStart <= 0) {
                            newStart = 1;
                        }
                        if (newEnd >= maxValue) {
                            newEnd = maxValue;
                        }
                        $('.browseNum').each(function () {
                            $(this).removeClass('activeList');
                            var browseNum = $(this).attr('data-num');
                            if (parseInt(browseNum) >= parseInt(newStart) && parseInt(browseNum) <= parseInt(newEnd)) {
                                if (parseInt(newNumber) === parseInt(browseNum)) {
                                    $(this).addClass('activeList');
                                }
                                $(this).show();
                            } else {
                                $(this).hide();
                            }
                        });
                    $('#endValue').val(newEnd);
                            $('.merchAdopt').each(function () {
            var title = $(this).attr('data-title');
            var newString = title.replace(/<(?:.|\n)*?>/gm, '');
            $(this).attr('data-title', newString);

        });
                }


            }
        });
    });

