function dark_to_light() {
    $('link#themecss').attr('href', 'css/bootstrap-light.min.css');
    $('#light-dark-toggle .form-check-label').text("Light Mode");
    $('#light-dark-toggle').data("mode", 0);
    $('#light-dark-toggle .form-check-input').removeAttr("checked");
}
function light_to_dark() {
    $('link#themecss').attr('href', 'css/bootstrap-dark.min.css');
    $('#light-dark-toggle .form-check-label').text("Dark Mode");
    $('#light-dark-toggle').data("mode", 1);
    $('#light-dark-toggle .form-check-input').attr("checked", "true");
}

// $.removeCookie('playerName');
if ($.cookie('playerName') == null) {
    $.cookie('playerName', 'Demo Player');
}
$('#pname').val($.cookie('playerName'));

$('#welmes h1').text("Welcome " + $.cookie('playerName') + "!");

$(document).ready(function() {
    if ($.cookie('theme') == 0 || $.cookie('theme') == null) {
        dark_to_light();
    }
    else {
        light_to_dark();
    }

    $('#light-dark-toggle').click(function () {
        if ($('#light-dark-toggle').data("mode") == 1) {
            dark_to_light();
            $.cookie('theme', 0);
        }
        else {
            light_to_dark();
            $.cookie('theme', 1);
        }
    });

    $('#pname').on('input', function() {
        if ($('#pname').val() == $.cookie('playerName')) {
            $('#name-save').attr('disabled', 'true');
        }
        else {
            $('#name-save').removeAttr('disabled');
        }
    });

    $('#name-save').click(function() {
        $.cookie('playerName', $('#pname').val());
        $('#welmes h1').text("Welcome " + $.cookie('playerName') + "!");
        $('#name-save').addClass('btn-success');
        $('#name-save').html('<i class="fa-solid fa-check"></i>');

        setTimeout(function () {
            $('#name-save').text('Save');
            $('#name-save').removeClass('btn-success');
            $('#name-save').attr('disabled', 'true');
        }, 2000);
    });

    $('#maxn').on('input', function() {
        console.log($('#maxn').val());
    });
});