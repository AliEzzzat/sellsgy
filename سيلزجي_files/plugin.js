$(".rush").click(function () {
    $("html,body").animate({
        scrollTop: $(".block4").offset().top}, "slow")
});

function SubmitForm() {
    var jsFormData = $("#contact-form").serialize();
   $.ajax({
       type: "POST",
       url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeQrMKQU7IU02mFaPyMqAFhuLPR6m46HZyBPDAePvEsNYfqJw/formResponse",
       data: jsFormData,
       async: false,
       dataType: "xml",
       success: function () {
           SuccessResponse();
        }
    });
    SuccessResponse();
    window.open('thanks.html', '_self');

};


function SuccessResponse() {
    $('#btnSubmit').attr("disabled", 'true');
    $("#contact-form :input").attr('disabled', true);
};

function validateForm() {
    $("#contact-form").validate();
};
$().ready(function () {
    // validate the comment form when it is submitted
    $("#contact-form").validate({
        rules: {
            "entry.127422458": {
                required: true,
                digits: true
            }
        }
    });
 })


var url = $(location).attr("href"),
    parts = url.split("="),
    last_part = parts[parts.length - 1];
    last_part != url && $("#article").val(last_part);



