<?php
 echo "hola PHP";

 $tipoTrans = $_POST["tipoTransaccion"];

switch ($tipoTrans){

    case 'enviarCorreo':
    enviarCorreo(json_decode($_POST["correo"], true));                                  
        break; 
}  

function enviarCorreo($correo){

    echo"php correo";      

    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = $correo[2];
    $to = "d.ignacio292@gmail.com";
    $subject = $correo[1];
    $message = 'Nombre: '.$correo[0]."\n".'Mensaje: '.$correo[3];
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    

    $response = array("mensaje"   => "Correo enviado" ); 

    print json_encode($response); 

}

?>