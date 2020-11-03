<html>

<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>A Website!</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet">

    <link href="CSS/Boot_CSS/bootstrap.css" type="text/css" rel="stylesheet">
    <link href="CSS/Boot_CSS/bootstrap.min.css" type="text/css" rel="stylesheet">
    <link href="CSS/Boot_CSS/bootstrap-theme.css" type="text/css" rel="stylesheet">
    <link href="CSS/Boot_CSS/bootstrap-theme.min.css" type="text/css" rel="stylesheet">

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
        
        #Text1 {
            padding-left: 30px;
        }
        
        #Text3 {
            padding-left: 30px;
        }
        
        #SuccessFail {
            color: blue;
        }
        
        .loader {
          border: 6px solid #f3f3f3; /* Light grey */
          border-top: 6px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 45px;
          height: 45px;
          animation: spin 2s linear infinite;
          display: none;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        

        
    </style>
</head>

<body>

   <!-- Static navbar -->
<?php
include 'navbar.php';
?>
        
    <h2 id="Heading1">
        RSA
    </h2>
    
    
    <button id="customCreate" onclick="runPage1()" class="btn-primary btn-large" type="button">Custom Create RSA Keys</button>
    <button id="randomCreate" onclick="runPage2()" class="btn-primary btn-large" type="button">Generate Random Keys</button>
    <button id="probeRSA" onclick="runPage3()" class="btn-primary btn-large" type="button">Cracking/Statistics</button>
   
    </br></br>
    
    <h5 id="subHeading">
        <i>
        Custom RSA
        </i>
    </h5>
    
    
    <form id="form1">
            <input type="text" name="first" id="firstprime" size="70"/> First Prime Number<br>

            <input type="text" name="last" id="secondprime" size="70"/> Second Prime Number<br>
            
            <input type="text" class="form-control" id="messagetoencode" placeholder="Message to Encode." />  
    </form>
    
    <form id= "form2">
        
        
    </form>
        
        <button id="Button1" onclick="bigIntRSA()">Submit</button>

    </br></br>
    </br>
    <p id="Text0" style="font-size:10px">
        
        Try these primes: </br>
        p = 10933766183632575817611517034730668287155799984632223454138745671121273456287670008290843302875521274970245314593222946129064538358581018615539828479146469
            </br>
        q = 10910616967349110231723734078614922645337060882141748968209834225138976011179993394299810159736904468554021708289824396553412180514827996444845438176099727
            </br>
    </p>
    
    <div id="myDiv" class="loader"></div>
   
    <p id="Text1"></p>
    
     <div id="myDiv2" class="loader"></div> <!--The second loading wheel for getting PKCS keys-->

    <p id="Text3"></p>
        
    </br></br>
    <footer id="footer">
    </footer>

    <script src="JavaScript/Boot_Script/bootstrap.js" type="text/javascript"></script>
    <script src="JavaScript/Boot_Script/bootstrap.min.js" type="text/javascript"></script>
    <script src="https://peterolson.github.io/BigInteger.js/BigInteger.min.js"></script>
    <script src="JavaScript/RSATest.js" type="text/javascript"></script>

    <script>
       //var param = gup();
       var heading1 = "Federalist 10";
       //showLetters(body, heading1);
       $(window).load(function(){ 
           //switchLetters(bodyFed, heading1, 4); 
           //$('footer').html("<img id=\"myImg\" src=\"1200px-Constitution_of_the_United_States,_page_1.png\" alt=Constitution>");
           //document.getElementById("myDiv").style.display = "none";
       })
    </script>

    
</body>


</html>