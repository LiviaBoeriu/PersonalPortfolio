<?php

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if (empty($name)) {
        $errors[] = 'Name is empty';
    }

    if (empty($email)) {
        $errors[] = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }

    if (empty($message)) {
        $errors[] = 'Message is empty';
    }


    if (empty($errors)) {
        $toEmail = 'ella.liv27@gmail.com';
        $emailSubject = 'New email from your contact form';
        
        $headers = "From: {$email}" . "\r\n" .
            "Reply-To: {$email}" . "\r\n" .
            "Content-type: text/html; charset=iso-8859-1" . "\r\n".
            "X-Mailer: PHP/" . phpversion();

        $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Message:", $message ];
        $body = join(PHP_EOL, $bodyParagraphs);

        if (mail($toEmail, $emailSubject, $body, $headers)) {
            header('Location: thank-you.html');
        } else {
            $errorMessage = 'Oops, something went wrong. Please try again later';
            header('Location: contact.html?formStatus=notSent');
        }
    } else {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
        header('Location: contact.html?formStatus=fieldEmpty');
    }
}

?>