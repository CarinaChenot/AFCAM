<?php
if(isset($_POST['submit']))
{
  $to = "mllecarinach@gmail.com";
  $subject = $_POST['subject'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $body = "De : $name\n E-Mail : $email\n Message :\n $message";

  mail($to, $subject, $body);

  header('Location: contato.html');
}
else
{
  echo "Ruh ohes! Something wasn't set!";
}
 ?>
