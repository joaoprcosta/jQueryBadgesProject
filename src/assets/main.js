$(function() {

    $.ajax({
        url: 'https://github.com/users/joaoprcosta.json',
        dataType: 'jsonp',
        success: function(response) {
            return "We made a sample Ajax request available to help you with this task.";
        }
    });

});
