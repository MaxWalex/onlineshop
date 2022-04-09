<?php
// Сообщение
$to = 'vijoca9626@whwow.com';

$name = $_POST['your_name'];
$email = $_POST['your_email'];
$subject = $_POST['your_subject'];
$message = $_POST['your_message'];

$message = "
    Имя: $name
    Почта: $email
    Тема: $subject
    Сообщение: $message
";

// Отправляем
mail($to, 'Сообщение со страници контактов', $message);
?>