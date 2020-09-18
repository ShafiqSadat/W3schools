<?php
$username = $_GET["username"];
$password = $_GET["password"];
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TEST</title>
    <style>
        body{
            background: url("assests/images/1.jpg") fixed;
            margin: 0;
            padding: 0;
            font-family: Arial, serif;
        }
        .firstElements{
            text-align: center;
            color: #FFFFFF;
            font-weight: 200;
            margin-top: 50px;
            font-size: 40px;
            margin-bottom: 120px;
        }
        .firstElements p{
            margin: 0;
            padding: 0;
            font-weight: 200;
        }
        b{
            font-size: 20px;
            font-style: italic;
        }
        .welcomeText{
            font-size: 50px;
            color: white;
            opacity: 0.8;
            text-align: center;
            /*margin-top: 50px;*/
            margin-bottom: 120px;
        }
        .backToSite{
            text-decoration: none;
            font-size: 40px;
            color: white;
            border: white 2px solid;
            padding: 20px;
            border-radius: 10px;
            margin-left: 40%;
        }
        .backToSite:hover{
            opacity: 0.7;
        }
    </style>
</head>
<body>
<div class="firstElements">
    <p class="p1">____________________</p><br>
    Hi<b style="font-size: 40px"> <?php echo $username?></b>
    <p class="p2">____________________</p>
</div>
<p class="welcomeText">Welcome to W3Schools Login Page!</p>
<a href="./index.html" class="backToSite">Back To Site!</a>
</body>
</html>
