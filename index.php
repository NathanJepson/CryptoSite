<html>

<head>
    <title>A Website!</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <link href="https://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet">

    <link href="CSS/Boot_CSS/bootstrap.css" type="text/css" rel="stylesheet">
    <!--<link href="CSS/Boot_CSS/bootstrap.min.css" type="text/css" rel="stylesheet">-->
    <link href="CSS/Boot_CSS/bootstrap-theme.css" type="text/css" rel="stylesheet">
    <!--<link href="CSS/Boot_CSS/bootstrap-theme.min.css" type="text/css" rel="stylesheet">-->

    <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>


    <link rel="icon" 
      type="image/ico" 
      href="img/favicon.ico">

    <style type="text/css">
        body {
            background-color: gainsboro;
        }
        article {
            padding-left: 50px;
            padding-right: 60px;
        }

        .myPadding {
            padding-left: 50px;
        }
    </style>
</head>

<body>

<!-- Static navbar -->
<?php
include 'navbar.php';
?>

    <h2 id="Heading1">
    </h2>
    
        <article id="allOfIt">
            <p id=Body1>
            </p>
        </article>
    </br></br>
    <footer id="footer">
    </footer>
    <script src="JavaScript/Boot_Script/bootstrap.js" type="text/javascript"></script>
    <script src="JavaScript/Boot_Script/bootstrap.min.js" type="text/javascript"></script>
    <script src="JavaScript/Fun_Script.js" type="text/javascript"></script>

    <script>
       //var param = gup();
       var heading1 = "Federalist 10";
       //showLetters(body, heading1);
       $(window).load(function(){ 
           switchLetters(bodyFed, heading1, 4); 
           $('footer').html("<img id=\"myImg\" src=\"img/Constitution.png\" alt=Constitution>");
       })   
    </script>

</body>


</html>