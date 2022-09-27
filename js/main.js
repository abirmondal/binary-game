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

if (getCookie('playerName') == null) {
    setCookie('playerName', 'Demo Player');
}
if (getCookie('maxn') == null) {
    setCookie('maxn', 5);
}

$('#pname').val(getCookie('playerName'));

$('#welmes h1').text("Welcome " + getCookie('playerName') + "!");

$(document).ready(function() {
    if (getCookie('theme') == 0 || getCookie('theme') == null) {
        dark_to_light();
    }
    else {
        light_to_dark();
    }

    $('#maxn').val(getCookie('maxn'));

    $('#light-dark-toggle').click(function () {
        if ($('#light-dark-toggle').data("mode") == 1) {
            dark_to_light();
            setCookie('theme', 0);
        }
        else {
            light_to_dark();
            setCookie('theme', 1);
        }
    });

    $('#pname').on('input', function() {
        if ($('#pname').val() == getCookie('playerName')) {
            $('#name-save').attr('disabled', 'true');
        }
        else {
            $('#name-save').removeAttr('disabled');
        }
    });

    $('#name-save').click(function() {
        setCookie('playerName', $('#pname').val());
        $('#welmes h1').text("Welcome " + getCookie('playerName') + "!");
        $('#name-save').addClass('btn-success');
        $('#name-save').html('<i class="fa-solid fa-check"></i>');

        setTimeout(function () {
            $('#name-save').text('Save');
            $('#name-save').removeClass('btn-success');
            $('#name-save').attr('disabled', 'true');
        }, 2000);
    });

    $('#maxn').on('input', function() {
        setCookie('maxn', $('#maxn').val());
    });

    nextQ();

    $('#ansarea button[type = "submit"]').click(function(e) {
        e.preventDefault();
        if ($('#ansarea button[type = "submit"]').text() == 'Next') {
            $('#ansarea button[type = "submit"]').text('Submit');
            $('#ansarea button[type = "submit"]').removeClass('btn-success');
            $('#ansval').removeAttr('disabled');
            $('#ansval').removeClass('is-valid');
            $('#ansval').val(null);
            nextQ();
        }
        else if ($('#ansarea button[type = "submit"]').text() == 'Retry') {
            $('#ansarea button[type = "submit"]').text('Submit');
            $('#ansarea button[type = "submit"]').removeClass('btn-danger');
            $('#ansval').removeAttr('disabled');
            $('#ansval').removeClass('is-invalid');
        }
        else if ( checkans($('#ansval').val()) ) {
            $('#ansarea button[type = "submit"]').text('Next');
            $('#ansarea button[type = "submit"]').addClass('btn-success');
            $('#ansval').attr('disabled', 'true');
            $('#ansval').addClass('is-valid');
        }
        else {
            $('#ansarea button[type = "submit"]').text('Retry');
            $('#ansarea button[type = "submit"]').addClass('btn-danger');
            $('#ansval').attr('disabled', 'true');
            $('#ansval').addClass('is-invalid');
        }
    });
});