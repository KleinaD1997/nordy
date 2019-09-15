<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

/**********************  Settings ****************************/

$admin_email    = "daniel@marketolog.sale";

// SMTP
$email_host     = "ssl://smtp.mail.ru";
$email_port     = "465";
$email_login    = "daniel@marketolog.sale";
$email_password = "19AaZ9bJ";

$subject = "Заявка с сайта interior.nordy.space";

$user = array(
	// Основные поля
	'name'  => isset($_POST["name"])  ? $_POST["name"]   : "",
	'phone' => isset($_POST["phone"]) ? $_POST["phone"]  : "",
);

$dict = array(
	// Основные поля
	'name'  => 'Имя',
	'phone' => 'Телефон',
);

$body  = "<!DOCTYPE html>";
$body .= "<html><head>";
$body .= "<meta charset='UTF-8' />";
$body .= "<title>".$subject."</title>";
$body .= '</head><body><table cellspacing=0 style="border:1px solid #ccc;">';

foreach ($user as $key => $value) {
	if ( !$value ) continue;

	$body .= '<tr><td style="padding:5px 30px 5px 10px;border:1px solid #ccc;font-weight:bold;">' . $dict[$key] . ': </td>';
	$body .= '<td style="padding:5px 30px 5px 10px;border:1px solid #ccc;">' . $value . '</td></tr>';
}

$body .= "</table></body></html>";

/************************************************************/

date_default_timezone_set("Europe/Moscow");

require "mailer/PHPMailerAutoload.php";
$mail = new PHPMailer();

if ( file_exists("/language/phpmailer.lang-ru.php") ) 
	$mail->SetLanguage("ru", "/language/");
else 
	$mail->SetLanguage("en", "/language/");

// SMTP
$mail->isSMTP();
$mail->Host = $email_host;
$mail->Port = $email_port;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'SSL';
$mail->Username = $email_login;
$mail->Password = $email_password;

$mail->CharSet = "UTF-8";

$mail->setFrom($admin_email, $admin_email);
$mail->addReplyTo($admin_email, $admin_email);

$mail->Subject = $subject;
$mail->isHTML(true);

$mail->msgHTML($body);

$mail->addAddress($admin_email, $admin_email);








if ( !$mail->send() ) {
	$output = $mail->ErrorInfo;
} else {
	$output = "<script>window.location = 'https://interior.nordy.space'</script>";
}

echo $output;