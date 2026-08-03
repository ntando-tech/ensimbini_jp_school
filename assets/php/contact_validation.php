<?php
$name=$POST['name'];
$email=$_POST['email'];
$phoneNumber=$POST['phoneNumber'];
$subject=$POST['subject'];
$message=$POST['message'];

if(empty($name) || empty($email) || empty($phoneNumber) || empty($subject) || empty($message))
{
    echo "Error: All fields are required"
}
else
{
    if(!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        echo "Error: Invalid email Format"
    }
    else
    {
        if(!preg_match("/^\d{10}$/",$phoneNumber))
        {
            echo "Error: Invalid phone Number format. Please enter 10-digit number.";
        }
        else
        {
            $to = "andmhlongo17@gmail";
            $subjectt = "$subject";
            $messagee = "Name: $name \n";
            $messagee .= "Email: $email \n";
            $messagee .= "Phone Number: $phoneNumber \n";
            $messagee .= "Subject: $subjectt";
            $messagee .= "Message: $message";
            $headers ="From: $email";

            if(mail($to,$subjectt,$messagee,$headers))
            {
                echo "The Email has been sent successfully"
            }
            else
            {
                echo "Error: Unable to send the Email"
            }
            
        }
    }
}

?>
