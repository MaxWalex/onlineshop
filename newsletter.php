<?php
// Сообщение
$to = 'vijoca9626@whwow.com';
$email = $_POST['emailNewLetter'];

$message = "
    Рассылка на эту почту: $email
";

// Отправляем
mail($to, 'Рассылка', $message);
?>