<?php
$to = "ya-zhanna.balash@yandex.ru"; // емайл получателя данных из формы
$tema = "Форма обратной связи на РНР"; // тема полученного емайла
$message = "Ваше имя: " .$_POST [' name ']."<br>";
$message .= "E-mail: ".$_POST['email']."<br>";
$message .= "Номер телефона: ".$_POST['number']."<br>"; 
$message .= "Сообщение: " .$_POST [ 'message']."<br>"; 
$headers = 'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'Content-type: text/html;
charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); 
?>