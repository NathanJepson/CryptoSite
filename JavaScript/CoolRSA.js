var shuffleValue = function(charA)
{
  //Maybe will be used later
};

var retrieveValue = function(charA)
{
  //Maybe will be used later
};

//Built by myself using pseudocode from Wikipedia
//https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm
var Euclid_Inverse = function(a,n) {
  var t = 0;
  var newt = 1;
  var r = n;
  var newr = a;
  while (newr != 0)
  {
    var quotient = Math.floor(r/newr);
    var tmpt = t;
    t = newt;
    newt = tmpt - (quotient * newt);
    //--------------------------------
    var tmpr = r;
    r = newr;
    newr = tmpr - (quotient * newr);
  }
  if (r > 1)
  {
    return ("a is not invertible");
  }
  else if (t < 0)
  {
    t = t + n;
  }
  return t;
};


//From https://gist.github.com/krzkaczor/0bdba0ee9555659ae5fe
//Fast modular exponentiation for a ^ b mod n
var fastModularExponentiation = function(a, b, n) {
    a = a % n;
    var result = 1;
    var x = a;
  
    while(b > 0){
      var leastSignificantBit = b % 2;
      b = Math.floor(b / 2);
  
      if (leastSignificantBit == 1) {
        result = result * x;
        result = result % n;
      }
      x = x * x;
      x = x % n;
    }
    return result;
  };
  
  var assert = function(actual, expected){
    if (actual != expected){
      throw new Error('Assertion failed');
    }
  };


function  gcd(a, h) 
{
    var temp; 
    while (1) 
    { 
        temp = a%h; 
        if (temp == 0) 
          return h; 
        a = h; 
        h = temp; 
    } 
}

function writeText(tempVariable)
{
    
    var iterator = 0;
     while (iterator < tempVariable.length)
    {
        for (var tmp3 = 0; tmp3 < 140; tmp3++)
        {
            document.getElementById("Text1").innerHTML += tempVariable.charAt(iterator);
            iterator++;
            if (tmp3 == 139)
            {
                document.getElementById("Text1").innerHTML += '</br>';
            }
        }
    }
}

function writeText2(tempArray)
{
    var tmpString = "";
    document.getElementById("Text1").innerHTML += "Encrypted message:";
    document.getElementById("Text1").innerHTML += '</br>';
    var iterator = 0;
    for (var i=0; i < tempArray.length; i++)
    {
        
        tmpString += tempArray[i].toString();
        tmpString += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
    }
    
    for (var i=0; i < tmpString.length; i++)
    {
        if (iterator == 180)
        {
            iterator = 0;
            document.getElementById("Text1").innerHTML += '</br>';
        }
        
        document.getElementById("Text1").innerHTML += tmpString.charAt(i);
        iterator++;
    }
    
}



document.getElementById("Text0").innerHTML = "Debugging primes: ";

document.getElementById("Text0").innerHTML += '</br>';
document.getElementById("Text0").innerHTML += "p = 10933766183632575817611517034730668287155799984632223454138745671121273456287670008290843302875521274970245314593222946129064538358581018615539828479146469";
document.getElementById("Text0").innerHTML += '</br>';
document.getElementById("Text0").innerHTML += "q = ";
document.getElementById("Text0").innerHTML += "10910616967349110231723734078614922645337060882141748968209834225138976011179993394299810159736904468554021708289824396553412180514827996444845438176099727";
    
document.getElementById("Text0").innerHTML += '</br>';



function bigIntRSA()
{
//Inspired by: https://en.wikipedia.org/wiki/RSA_(cryptosystem)
    
var p = bigInt(document.getElementById("firstprime").value);
var q = bigInt(document.getElementById("secondprime").value);
var e = bigInt(65537);

var phi = p.minus(1).multiply(q.minus(1));
var n = p.multiply(q);


if (e.toJSNumber() > phi.toJSNumber())
{
    e = bigInt(2);
    while (e.toJSNumber() < phi.toJSNumber())
    {
        if (bigInt.gcd(e, phi) == 1)
        {
            break;
        }
        else
        {
            e = e.next();
            console.log(e.toString());
        }
        
    }
}


var d = e.modInv(phi);

var currText = document.getElementById("messagetoencode").value;
    
    //alert(currText);
    
    var tmpString = "";
    var blocks = [];
    for (var i=0; i < currText.toString().length; i++) {
        var currChar = currText.charAt(i);
        if (n.toJSNumber() <= 127)
        {
        currChar = (currChar.charCodeAt())-50;
        }
        else
        {
            currChar = (currChar.charCodeAt());
        }
        blocks[i] = currChar;
        tmpString += currChar;
        tmpString += " ";
    }
    
    
    
    
    if (n.toJSNumber() <= 127)
    {
    document.getElementById("Text0").innerHTML += "*Since primes are small, ASCII values have been shifted by 50 to compensate."
    document.getElementById("Text0").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML = "ASCII unencrypted (shifted by 50): " + tmpString;
    }
    
    else
    {
        document.getElementById("Text0").innerHTML = "";
        document.getElementById("Text1").innerHTML = "ASCII unencrypted: " + tmpString;
    }
    document.getElementById("Text1").innerHTML += '</br>';
    
    //alert(tmpString);
    
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += "PUBLIC KEY"
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += "==============================================="
    document.getElementById("Text1").innerHTML += '</br>';
    
    document.getElementById("Text1").innerHTML += "n: ";
    
    writeText(n.toString());
   
    document.getElementById("Text1").innerHTML += '</br>';
    
    
    document.getElementById("Text1").innerHTML += "e: " + e.toString();
    document.getElementById("Text1").innerHTML += '</br>';
    
    
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += "PRIVATE KEY"
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += "==============================================="
    document.getElementById("Text1").innerHTML += '</br>';
    
    document.getElementById("Text1").innerHTML += "p: " + p.toString();
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += "q: " + q.toString();
    document.getElementById("Text1").innerHTML += '</br>';
    
    
    
    document.getElementById("Text1").innerHTML += "Φ: ";
    
    writeText(phi.toString());
    document.getElementById("Text1").innerHTML += '</br>';
    
    var k = 2;  // A constant value
    
    document.getElementById("Text1").innerHTML += "d: ";
    
    writeText(d.toString());
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += '</br>';
    
    var encrypted = [];
    
    
    // Encryption 
    //=================================
    //Using: c = (msg ^ e) % n 
    for (var i=0; i < blocks.length; i++)
    {
        //encrypted[i] = (blocks[i] ** e) % n;
        encrypted[i] = bigInt(blocks[i]).modPow(e,n);
    }
    
    writeText2(encrypted);
    
     var tempPlaceHolder;
    
    // Decryption 
    //==================================
    //Using: m = (c ^ d) % n
    var decrypted = [];
    for(var i=0; i < encrypted.length; i++)
    {
        var thisChar = encrypted[i];
        
        tempPlaceHolder = bigInt(thisChar).modPow(d, n);
        if (n.toJSNumber() <= 127)
        {
            thisChar = String.fromCharCode((tempPlaceHolder.add(50)).toString());
        }
        else
        {
            thisChar = String.fromCharCode(tempPlaceHolder);
        }
        decrypted[i] = thisChar;
    }
    tmpString = "";
    for (var i=0; i < decrypted.length; i++)
    {
        tmpString += decrypted[i];
    }
    
    document.getElementById("Text1").innerHTML += '</br></br>';
    
    document.getElementById("Text1").innerHTML += ("Decrypted Message: " + tmpString);
    
    
    if (tmpString == currText)
    {
    document.getElementById("Text1").innerHTML += '</br><p id="SuccessFail">If you see your message above, then the message was able to encrypted and decrypted successfully.</p>';
    }
    else
    {
         document.getElementById("Text1").innerHTML += '</br><p id="SuccessFail">There seems to be an error with decrypting your message. Try using smaller prime numbers. There will be a fix for this in the future.</p>';
        document.getElementById("SuccessFail").style.color = "red";
    }
    
    
   // document.getElementById("Text1").style.width = "36em";
    
}


function RunRSA()
{

    var p = document.getElementById("firstprime").value;
    var q = document.getElementById("secondprime").value;
    var n = p*q; 
    
    var e = 2;
    var phi = (p-1)*(q-1); 
    
    var currText = document.getElementById("messagetoencode").value;
    
    //alert(currText);
    
    var tmpString = "";
    var blocks = [];
    for (var i=0; i < currText.toString().length; i++) {
        var currChar = currText.charAt(i);
        if (n <= 127)
        {
        currChar = (currChar.charCodeAt())-50;
        }
        else
        {
            currChar = (currChar.charCodeAt());
        }
        blocks[i] = currChar;
        tmpString += currChar;
        tmpString += " ";
    }
    
    
    if (n <= 127)
    {
    document.getElementById("Text0").innerHTML = "*Since primes are small, ASCII values have been shifted by 50 to compensate."
    document.getElementById("Text0").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML = "ASCII unencrypted (shifted by 50): " + tmpString;
    }
    else
    {
        document.getElementById("Text0").innerHTML = "";
        document.getElementById("Text1").innerHTML = "ASCII unencrypted: " + tmpString;
    }
    document.getElementById("Text1").innerHTML += '</br>';
    
    //alert(tmpString);
    
  
    while (e < phi) 
    { 
        // e must be co-prime to phi and 
        // smaller than phi. 
        if (gcd(e, phi)==1) 
            break; 
        else
            e++; 
    } 
    
    
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += "PUBLIC KEY"
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += "==============================================="
    document.getElementById("Text1").innerHTML += '</br>';
    
    document.getElementById("Text1").innerHTML += "n: " + n;
    document.getElementById("Text1").innerHTML += '</br>';
    
    
    document.getElementById("Text1").innerHTML += "e: " + e;
    document.getElementById("Text1").innerHTML += '</br>';
    
    
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += "PRIVATE KEY"
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += "==============================================="
    document.getElementById("Text1").innerHTML += '</br>';
    
    document.getElementById("Text1").innerHTML += "p: " + p;
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += "q: " + q;
    document.getElementById("Text1").innerHTML += '</br>';
    
    
    
    document.getElementById("Text1").innerHTML += "Φ: " + phi;
    document.getElementById("Text1").innerHTML += '</br>';
    
    var k = 2;  // A constant value
    
    var d = Euclid_Inverse(e,phi); //This was really hard to find!
    
    document.getElementById("Text1").innerHTML += "d: " + d;
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += '</br>';
    
    var encrypted = [];
    
    
    // Encryption 
    //=================================
    //Using: c = (msg ^ e) % n 
    for (var i=0; i < blocks.length; i++)
    {
        //encrypted[i] = (blocks[i] ** e) % n;
        encrypted[i] = fastModularExponentiation(blocks[i],e,n);
    }
    
    tmpString = ""
    for (var i=0; i < encrypted.length; i++)
    {
        tmpString += " ";
        tmpString += encrypted[i];
    }
    document.getElementById("Text1").innerHTML += ("Encrypted: " + tmpString);
    
    
    
    // Decryption 
    //==================================
    //Using: m = (c ^ d) % n
    var decrypted = [];
    for(var i=0; i < encrypted.length; i++)
    {
        var thisChar = encrypted[i];
        thisChar = fastModularExponentiation(thisChar, d, n);
        if (n <= 127)
        {
            thisChar = String.fromCharCode(thisChar + 50);
        }
        else
        {
            thisChar = String.fromCharCode(thisChar);
        }
        decrypted[i] = thisChar;
    }
    tmpString = "";
    for (var i=0; i < decrypted.length; i++)
    {
        tmpString += decrypted[i];
    }
    
    document.getElementById("Text1").innerHTML += '</br>';
    document.getElementById("Text1").innerHTML += ("Decrypted Message: " + tmpString);
    
    
    if (tmpString == currText)
    {
    document.getElementById("Text1").innerHTML += '</br><p id="SuccessFail">If you see your message above, then the message was able to encrypted and decrypted successfully.</p>';
    }
    else
    {
         document.getElementById("Text1").innerHTML += '</br><p id="SuccessFail">There seems to be an error with decrypting your message. Try using smaller prime numbers. There will be a fix for this in the future.</p>';
        document.getElementById("SuccessFail").style.color = "red";
    }

}