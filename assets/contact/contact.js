function post(data, on_success, on_error) {

    if (!on_error) on_error = '';

    if (!on_success) on_success = '';

    if (!data) data = {};



    var ajax_data = {
        type: 'POST',
        url: "contact/contact.php",
        data: data,
        success: function(r) {
            if (on_success !== '') on_success(r); //en caso contrario ejecutamos la funci贸n que nos dijeron
        },

        error: function(xml_http_request, text_status, error_thrown) {
            if (on_error !== '') {
                var t2 = text_status || '',
                    et2 = error_thrown || '';
                on_error(t2 + '' + et2);

            }

        }

    };

    $.ajax(ajax_data);

}


$(document).ready(function() {

});


$("#btn_contactanos").click(function() {
    enviar_correo();
});

function myFunction() {

    return false;

};

function enviar_correo() {

    console.log("Funcion JS contact")

    var nombre = $("#contacto_nombre").val();
    var email = $("#contacto_email").val();
    var asunto = $("#contacto_asunto").val();
    var mensaje = $("#contacto_mensaje").val();

    var arrayEnviarCorreo = {};
    arrayEnviarCorreo = [nombre, asunto, email, mensaje];

    if (nombre != '' && asunto != '' && email != '' && mensaje != '') {

        post({
                tipoTransaccion: 'enviarCorreo',
                correo: JSON.stringify(arrayEnviarCorreo)
            },
            function(r) {
                //fue una respuesta exitosa?
                // r = JSON.parse(r);


                swal("", "Correo enviado con exito", "success", { button: false, timer: 1500 });


                $("#contacto_nombre").val('');
                $("#contacto_asunto").val('');
                $("#contacto_email").val('');
                $("#contacto_mensaje").val('');
            }
        );
    } else {
        swal("", "Ingresa todos los datos del formulario", "warning", { button: false, timer: 1500 });

    }
}