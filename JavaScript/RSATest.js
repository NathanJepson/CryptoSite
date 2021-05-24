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
      var tmp3 = 0;
       while (iterator < tempVariable.length)
      {
              document.getElementById("Text1").innerHTML += tempVariable.charAt(iterator);
              iterator++;
              tmp3++;
              if (tmp3 == 139)
              {
                  tmp3 = 0;
                  document.getElementById("Text1").innerHTML += '</br>';
              }
      }
      document.getElementById("Text1").innerHTML += '</br>';
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
          tmpString += '\xa0\xa0\xa0\xa0\xa0\xa0';
          
      }
      
      for (var j=0; j < tmpString.length; j++)
      {
          if (iterator == 151)
          {
              iterator = 0;
              document.getElementById("Text1").innerHTML += '</br>';
          }
          
          var c = tmpString.charAt(j);
          //alert (tmpString.charAt(j) == ' ');
          //alert (c == '\xa0');
          
          if ( tempArray[0].toString().length > 151)  {
              if (c == '\xa0') {
                  if (j != tmpString.length-1) {
                      if (tmpString.charAt(j+1) != '\xa0') {
                          document.getElementById("Text1").innerHTML += 
                          '</br></br>';
                          iterator = 0;
                      }
                  }
              }
          }
          
          document.getElementById("Text1").innerHTML += tmpString.charAt(j);
          iterator++;
      }
      
      
  }
  
  function writeText3(tempVariable) {
      var iterator = 0;
      var tmp3 = 0;
       while (iterator < tempVariable.length)
      {
              document.getElementById("Text3").innerHTML += tempVariable.charAt(iterator);
              iterator++;
              tmp3++;
              if (tmp3 == 139)
              {
                  tmp3 = 0;
                  document.getElementById("Text3").innerHTML += '</br>';
              }
      }
      document.getElementById("Text3").innerHTML += '</br>';
  }
  
  
  //From https://stackoverflow.com/questions/23190056/hex-to-base64-converter-for-javascript/41797377
  if (!window.atob) {
    var tableStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var table = tableStr.split("");
  
    window.atob = function (base64) {
      if (/(=[^=]+|={3,})$/.test(base64)) throw new Error("String contains an invalid character");
      base64 = base64.replace(/=/g, "");
      var n = base64.length & 3;
      if (n === 1) throw new Error("String contains an invalid character");
      for (var i = 0, j = 0, len = base64.length / 4, bin = []; i < len; ++i) {
        var a = tableStr.indexOf(base64[j++] || "A"), b = tableStr.indexOf(base64[j++] || "A");
        var c = tableStr.indexOf(base64[j++] || "A"), d = tableStr.indexOf(base64[j++] || "A");
        if ((a | b | c | d) < 0) throw new Error("String contains an invalid character");
        bin[bin.length] = ((a << 2) | (b >> 4)) & 255;
        bin[bin.length] = ((b << 4) | (c >> 2)) & 255;
        bin[bin.length] = ((c << 6) | d) & 255;
      };
      return String.fromCharCode.apply(null, bin).substr(0, bin.length + n - 4);
    };
  
    window.btoa = function (bin) {
      for (var i = 0, j = 0, len = bin.length / 3, base64 = []; i < len; ++i) {
        var a = bin.charCodeAt(j++), b = bin.charCodeAt(j++), c = bin.charCodeAt(j++);
        if ((a | b | c) > 255) throw new Error("String contains an invalid character");
        base64[base64.length] = table[a >> 2] + table[((a << 4) & 63) | (b >> 4)] +
                                (isNaN(b) ? "=" : table[((b << 2) & 63) | (c >> 6)]) +
                                (isNaN(b + c) ? "=" : table[c & 63]);
      }
      return base64.join("");
    };
  }
  
  //From https://stackoverflow.com/questions/23190056/hex-to-base64-converter-for-javascript/41797377
  function hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null,
      str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
    );
  }
  
  //From https://stackoverflow.com/questions/23190056/hex-to-base64-converter-for-javascript/41797377
  function base64ToHex(str) {
    for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
      var tmp = bin.charCodeAt(i).toString(16);
      if (tmp.length === 1) tmp = "0" + tmp;
      hex[hex.length] = tmp;
    }
    return hex.join(" ");
  }
  
  
  
  function runPage1()
  {
      document.getElementById("subHeading").innerHTML = '<i>Custom RSA</i>';
      document.getElementById("form1").innerHTML = '<input type="text" name="first" id="firstprime" size="120"/> First Prime Number<br> <input type="text" name="last" id="secondprime" size="120"/> Second Prime Number<br> <input type="text" class="form-control" id="messagetoencode" placeholder="Message to Encode (Optional)" />  ';
      document.getElementById("form2").innerHTML = ''; 
      document.getElementById("Text1").innerHTML = "";
      document.getElementById("Text3").innerHTML = "";
      
      document.getElementById("Text0").innerHTML = 'Try these primes: </br> p = 10933766183632575817611517034730668287155799984632223454138745671121273456287670008290843302875521274970245314593222946129064538358581018615539828479146469 </br> q = 10910616967349110231723734078614922645337060882141748968209834225138976011179993394299810159736904468554021708289824396553412180514827996444845438176099727 </br>';
      
      document.getElementById("Button1").onclick = generateKeys;
  }
  
  
  function runPage2()
  {
  
      document.getElementById("subHeading").innerHTML = '<i>Random Keys</i>';
      document.getElementById("Text0").innerHTML = "";
      document.getElementById("Text1").innerHTML = "";
      document.getElementById("Text3").innerHTML = "";
  
      document.getElementById("form1").innerHTML = "<input type=\"radio\" name=\"typeRSA\" id=\"1024\" value=\"1024\"> RSA 1024<br> <input type=\"radio\" name=\"typeRSA\" id=\"2048\" value=\"2048\"> RSA 2048<br> <input type=\"radio\" name=\"typeRSA\" id=\"4096\" value=\"4096\"> RSA 4096";
      document.getElementById("form2").innerHTML = ''; 
      document.getElementById("Button1").onclick = generateRandom;
      
  }
  
  function runPage3() {
      
          document.getElementById("subHeading").innerHTML = '<i>Cracking or Analytics</i>';
          document.getElementById("Text0").innerHTML = "";
          document.getElementById("Text1").innerHTML = "";
          document.getElementById("Text3").innerHTML = "";
  
          document.getElementById("form1").innerHTML = "<input type=\"radio\" name=\"typeRSA\" id=\"keyKnown\" value=\"keyKnown\"> Key is Known<br> <input type=\"radio\" id=\"keyUnknown\" name=\"typeRSA\" value=\"keyUnknown\"> Key is Not Known<br>";
          document.getElementById("form2").innerHTML = ''; 
          
          document.getElementById("keyKnown").onclick = crackKnown;
          document.getElementById("keyUnknown").onclick = crackUnknown;
          document.getElementById("Button1").onclick = sendError;
  }
  
  
  /*$('#Button1').on('click', function(e) {
          e.preventDefault();
          $('#Text0').innerHTML = "";
          $('#Text1').innerHTML = "";
          $('#spinner').fadeIn(function() {
              bigIntRSA(function() {
              $('#spinner').fadeOut();
      });
    });
  });
  */
  
  function addLoading() {
      //await sleep(40);
      document.getElementById("Text0").innerHTML = "";
      document.getElementById("Text1").innerHTML = "";
      document.getElementById("Text3").innerHTML = "";
      document.getElementById("myDiv2").style.display = "none";
      document.getElementById("myDiv").style.display = "block"; //Add loading wheel
  }
  
  function runRSA(prime1,prime2,hasMessage) {
      
      var p_tmp = prime1;
      var q_tmp = prime2;
  
      //Remove Commas if present
      p_tmp = p_tmp.replace(/,/g, '');
      q_tmp = q_tmp.replace(/,/g, '');
      
      var is_P_num = /^\d+$/.test(p_tmp);
      var is_Q_num = /^\d+$/.test(q_tmp);
      

      if (prime1 == '' || prime1 == null || prime2 == '' || prime2 == null) {
          document.getElementById("myDiv").style.display = "none";
          document.getElementById("Text1").innerHTML += '</br><p id="SuccessFail">Please fill in the two required fields.</p>';
          document.getElementById("SuccessFail").style.color = "red";
          return;
      }
      else if (!is_P_num || !is_Q_num) {
          document.getElementById("myDiv").style.display = "none";
          document.getElementById("Text1").innerHTML += '</br><p id="SuccessFail">Both numbers need to be valid integers.</p>';
          document.getElementById("SuccessFail").style.color = "red";
          return;
      }
      
          
      var p = bigInt(p_tmp);
      var q = bigInt(q_tmp);
      
      
          if (p.compare(q) === 0)
          {
              document.getElementById("myDiv").style.display = "none";
              document.getElementById("Text1").innerHTML += '</br><p id="SuccessFail">Both numbers need to be different.</p>';
              document.getElementById("SuccessFail").style.color = "red";
      
              return;
          }
          else if (p.isPrime() === false || q.isPrime() === false)
          {
              document.getElementById("myDiv").style.display = "none";
              document.getElementById("Text1").innerHTML += '</br><p id="SuccessFail">Both numbers need to be prime.</p>';
              document.getElementById("SuccessFail").style.color = "red";
      
              return;
          }
          
      
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
      if (hasMessage) {
          var currText = document.getElementById("messagetoencode").value;
      
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
          
              if (n.toJSNumber() <= 127)
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
          }
      }
      
      //alert(tmpString);
      
      document.getElementById("Text1").innerHTML += '</br>';
      document.getElementById("Text1").innerHTML += "PUBLIC KEY"
      document.getElementById("Text1").innerHTML += '</br>';
      document.getElementById("Text1").innerHTML += "==============================================="
      document.getElementById("Text1").innerHTML += '</br>';
      
      document.getElementById("Text1").innerHTML += "n: ";
      
      writeText(n.toString());
      
      
      document.getElementById("Text1").innerHTML += "e: " + e.toString();
      document.getElementById("Text1").innerHTML += '</br>';
      
      
      document.getElementById("Text1").innerHTML += '</br>';
      document.getElementById("Text1").innerHTML += "PRIVATE KEY"
      document.getElementById("Text1").innerHTML += '</br>';
      document.getElementById("Text1").innerHTML += "==============================================="
      document.getElementById("Text1").innerHTML += '</br>';
      
      document.getElementById("Text1").innerHTML += "p: ";
      writeText(p.toString());
      
      document.getElementById("Text1").innerHTML += "q: ";
      writeText(q.toString());
      
      
      document.getElementById("Text1").innerHTML += "Φ: ";
      writeText(phi.toString());
      
      var k = 2;  // A constant value
      
      document.getElementById("Text1").innerHTML += "d: ";
      
      writeText(d.toString());
      document.getElementById("Text1").innerHTML += '</br>';
      document.getElementById("Text1").innerHTML += '</br>';
      
      var encrypted = [];
      
      if (hasMessage) {
      
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
          
          document.getElementById("Text1").innerHTML += '</br></br><div id=\'temp7\'></div>';
          
          //document.getElementById("Text1").innerHTML += ("Decrypted Message: " + tmpString);
          document.getElementById("temp7").textContent = "Decrypted Message: " + tmpString;
          
          if (tmpString == currText)
          {
          document.getElementById("Text1").innerHTML += '</br><p id="SuccessFail">If you see your message above, then the message was able to encrypted and decrypted successfully.</p>';
          }
          else
          {
                document.getElementById("Text1").innerHTML += '</br><p id="SuccessFail">There seems to be an error with decrypting your message. That\'s all I know.</p>';
              document.getElementById("SuccessFail").style.color = "red";
          }
      }
      
     // document.getElementById("Text1").style.width = "36em";
     localStorage.d = d.toString();
     localStorage.e = e.toString();
     localStorage.n = n.toString();
     localStorage.p = p.toString();
     localStorage.q = q.toString();
     localStorage.phi = phi.toString();
     
     
    document.getElementById("Text1").innerHTML += '</br><button id="ASN" class="btn-primary btn-large" type="button">Get PKCS#1 and #8-Formatted Keys</button>';
    document.getElementById("ASN").onclick = asnDotOne;
      
    document.getElementById("myDiv").style.display = "none";
  }
  
  function bigIntRSA()
  {
    document.getElementById("Text1").innerHTML = "";
    var p_tmp = document.getElementById("firstprime").value
    var q_tmp = document.getElementById("secondprime").value;
          
    var currText = document.getElementById("messagetoencode").value;
          
    var hasMessage = false;
      
    if (currText.toString() != "" && currText.toString != " ") {
        hasMessage = true;
    }
  //Inspired by: https://en.wikipedia.org/wiki/RSA_(cryptosystem)
    
    runRSA(p_tmp,q_tmp,hasMessage)
}

 //Inspiration for this function comes from: https://stackoverflow.com/questions/50457805/sleep-is-not-defined-in-async-function
 async function generateKeys() {
    addLoading();
    window.setTimeout( () => {
        bigIntRSA();
    }, 50); //Run RSA function after giving the loading wheel 50 milliseconds to appear
}
  
  async function generateRandom() {
    {
        addLoading();
        window.setTimeout( () => {
            randRSA();
        }, 50);
    }
}

  async function asnDotOne()
  {
      asnLoading();
      window.setTimeout( () => {
          getASN();
      }, 50);
  }
  
  function asnLoading() {
      document.getElementById("myDiv2").style.display = "block"; //Add loading wheel
  }
  
  function getASN() {
      var hexD = bigInt(localStorage.d).toString(16);
      var hexE = bigInt(localStorage.e).toString(16);
      var hexN = bigInt(localStorage.n).toString(16);
      var hexP = bigInt(localStorage.p).toString(16);
      var hexQ = bigInt(localStorage.q).toString(16);
      var hexPhi = bigInt(localStorage.phi).toString(16);
      
      document.getElementById("Text3").innerHTML += '</br>';
      
      asnPublicKey(hexN,hexE);
      asnPrivateKey(hexN,hexE,hexD,hexP,hexQ);
      document.getElementById("myDiv2").style.display = "none";

      document.getElementById("Text0").innerHTML += '</br>';
  }

  function findASNLength(decnum)
  {
      var hexVal = decnum.toString(16);
      var iterator = 80;
      
      if (decnum <= 127)
      {
        if (hexVal.length % 2 !== 0)
        {
            return ("0" + hexVal);
        }
        else
        {
            return hexVal;
        }
      }
      else if (hexVal.length <= 2) //This will mean there is a leading bit on the very left
      {
          if (hexVal.length % 2 !== 0) //Pretty sure this if statement never executes
          {
              hexVal = "0" + hexVal;
          }
          return "81" + hexVal;
      }
      else
      {
          if (hexVal.length % 2 !== 0) //Pretty sure this if statement never executes
          {
              hexVal = "0" + hexVal;
          }
          var numBytes = hexVal.length/2;
          iterator = numBytes + iterator;
          return (iterator.toString() + hexVal.toString());
      }
      
      
  }
  
  function getASNInt(hexThis)
  {
      if (hexThis.length % 2 !== 0)
      {
          hexThis = "0" + hexThis;
      }
      var this_hex_size_dec = hexThis.length/2;
      var this_hex_size_hex = findASNLength(this_hex_size_dec);
      if (this_hex_size_hex.length % 2 !== 0)
      {
          this_hex_size_hex = "0" + this_hex_size_hex;
      }
      return("02" + this_hex_size_hex + hexThis);
  }
  
  function asnPublicKey(hexN,hexE)
  {
      hexE = "00" + hexE;
      hexN = "00" + hexN; //Prevent a negative in two's compliment
      
      var overArchingSeq;
      //----------------------
      //Element 1
      var sequenceA;
      var objectId;
      var nullObj;
      //----------------------
      //Element 2
      var bitString;
      var sequenceB;
      var int1_n;
      var int2_e;
      
      //Find int2_e
      if (hexE.length % 2 !== 0)
      {
          hexE = "0" + hexE;
      }
      var hexE_size_dec = hexE.length/2;
      var hexE_size_hex = findASNLength(hexE_size_dec);
      if (hexE_size_hex.length % 2 !== 0)
      {
          hexE_size_hex = "0" + hexE_size_hex;
      }
      int2_e = "02" + hexE_size_hex + hexE;
      
      //Find int1_n
      if (hexN.length % 2 !== 0)
      {
          hexN = "0" + hexN;
      }
      var hexN_size_dec = hexN.length/2;
      var hexN_size_hex = findASNLength(hexN_size_dec);
      if (hexN_size_hex.length % 2 !== 0)
      {
          hexN_size_hex = "0" + hexN_size_hex;
      }
      int1_n = "02" + hexN_size_hex + hexN;
      
      //Find sequenceB
      var two_int_hex = int1_n + int2_e;
      var two_int_hex_size_dec = two_int_hex.length/2;
      var two_int_hex_size_hex = findASNLength(two_int_hex_size_dec);
      if (two_int_hex_size_hex.length % 2 !== 0)
      {
          two_int_hex_size_hex = "0" + two_int_hex_size_hex;
      }
      sequenceB = "30" + two_int_hex_size_hex + two_int_hex;
      
      //Find bitString
      var hex_most_bit_string = "00" + sequenceB;
      var hex_most_bit_string_size_dec = hex_most_bit_string.length/2;
      var hex_most_bit_string_size_hex = findASNLength(hex_most_bit_string_size_dec);
      
      if (hex_most_bit_string_size_hex.length % 2 !== 0)
      {
          hex_most_bit_string_size_hex = "0" + hex_most_bit_string_size_hex;
      }
      bitString = "03" + hex_most_bit_string_size_hex + hex_most_bit_string;
      
      //nullObj
      nullObj = "0500";
      //objectId
      objectId = "06092a864886f70d010101";
      //sequenceA
      sequenceA = "300d" + objectId + nullObj;
      
      //find overArchingSeq
      var almostAll = sequenceA + bitString;
      var almostAll_size_dec = almostAll.length/2;
      var almostAll_size_hex = findASNLength(almostAll_size_dec);
      if (almostAll_size_hex.length % 2 !== 0)
      {
          almostAll_size_hex = "0" + almostAll_size_hex;
      }
      overarchingSeq = "30" + almostAll_size_hex + almostAll;
      
      document.getElementById("Text1").innerHTML += '</br>';
      writeText3("-----BEGIN PUBLIC KEY-----");
      writeText3(hexToBase64(overarchingSeq));
      writeText3("-----END PUBLIC KEY-----");
      //writeText("What it is in hex: 0x=" + overarchingSeq);
      
  }
  
  
  function asnPrivateKey(hexN,hexE,hexD,hexP,hexQ)
  {
      var d = localStorage.d;
      var p = localStorage.p;
      var q = localStorage.q;
      hexE = "00" + hexE;
      hexN = "00" + hexN; 
      hexD = "00" + hexD;
      hexP = "00" + hexP;
      hexQ = "00" + hexQ;
      
      //Prevent a negative in two's compliment
      var overarchingSeq;
      var int_z;
      var int_n;
      var int_e;
      var int_d;
      var int_p;
      var int_q;
      var int_other_1;
      var int_other_2;
      var int_other_3;
      
      //find int_other_3
      var invq_mod_p = bigInt(q).modInv(p);
      var hex_invqmodp = invq_mod_p.toString(16);
      
      hex_invqmodp = "00" + hex_invqmodp; //Preventing negative in two's compliment
      if (hex_invqmodp.length % 2 !== 0)
      {
          hex_invqmodp = "0" + hex_invqmodp;
      }
      var hex_invqmodp_size_dec = hex_invqmodp.length/2;
      var hex_invqmodp_size_hex = findASNLength(hex_invqmodp_size_dec);
      
      if (hex_invqmodp_size_hex.length % 2 !== 0)
      {
          hex_invqmodp_size_hex = "0" + hex_invqmodp_size_hex;
      }
      int_other_3 = "02" + hex_invqmodp_size_hex + hex_invqmodp;
      
      //find int_other_2
      //__________________________________________________________________________
      var q_minus_1 = bigInt(q).prev();
      var d_mod_qminus1 = bigInt(d).mod(q_minus_1);
      var dmodqminus1_hex = d_mod_qminus1.toString(16);
      dmodqminus1_hex = "00" + dmodqminus1_hex;
      if (dmodqminus1_hex.length % 2 !== 0)
      {
          dmodqminus1_hex = "0" + dmodqminus1_hex;
      }
      var dmodqminus1_hex_size_dec = dmodqminus1_hex.length/2;
      var dmodqminus1_hex_size_hex = findASNLength(dmodqminus1_hex_size_dec);
      
      if (dmodqminus1_hex_size_hex.length % 2 !== 0)
      {
          dmodqminus1_hex_size_hex = "0" + dmodqminus1_hex_size_hex;
      }
      int_other_2 = "02" + dmodqminus1_hex_size_hex + dmodqminus1_hex;
      
      //__________________________________________________________________________    
      //find int_other_1
      var p_minus_1 = bigInt(p).prev();
      var d_mod_pminus1 = bigInt(d).mod(p_minus_1);
      var dmodpminus1_hex = d_mod_pminus1.toString(16);
      dmodpminus1_hex = "00" + dmodpminus1_hex;
      if (dmodpminus1_hex.length % 2 !== 0)
      {
          dmodpminus1_hex = "0" + dmodpminus1_hex;
      }
      var dmodpminus1_hex_size_dec = dmodpminus1_hex.length/2;
      var dmodpminus1_hex_size_hex = findASNLength(dmodpminus1_hex_size_dec);
      
      if (dmodpminus1_hex_size_hex.length % 2 !== 0)
      {
          dmodpminus1_hex_size_hex = "0" + dmodpminus1_hex_size_hex
      }
      int_other_1 = "02" + dmodpminus1_hex_size_hex + dmodpminus1_hex;
      
      //find int_q
      int_q = getASNInt(hexQ);
      //find int_p
      int_p = getASNInt(hexP);
      //find int_d
      int_d = getASNInt(hexD);
      //find int_e
      int_e = getASNInt(hexE);
      //find int_n
      int_n = getASNInt(hexN);
      //find int_z
      int_z = "020100";
      
      //find overarchingSeq
      var almostAll = int_z + int_n + int_e + int_d + int_p + int_q + int_other_1 + int_other_2 + int_other_3;
      
      if (almostAll.length % 2 !== 0)
      {
          almostAll = "0" + almostAll;
      }
      almostAll_size_dec = almostAll.length/2;
      almostAll_size_hex = findASNLength(almostAll_size_dec);
      
      if (almostAll_size_hex.length % 2 !== 0)
      {
          almostAll_size_hex = "0" + almostAll_size_hex;
      }
      
      overarchingSeq = "30" + almostAll_size_hex + almostAll;
      document.getElementById("Text3").innerHTML += '</br></br>';
     
      writeText3("-----BEGIN RSA PRIVATE KEY-----");
      writeText3(hexToBase64(overarchingSeq));
      writeText3("-----END RSA PRIVATE KEY-----");
      //writeText("What it is in hex: 0x=" + overarchingSeq);
  }

  function generateRandomNBit(n)
  {
      var result = ''
      for (var i = 0; i < n; i++) {
         if (i == 0) {
            result += '1'
         }
         else {    
            var rand = Math.round(Math.random())
            if (rand == 1) {
                result += '1'
            } else {
                result += '0'
            }
        }
      }
      return bigInt(result, 2)
  }
  
  function findPrimes(size) {
      var length = Math.floor(size / 2)
      var lowerBound = ''
      var upperBound = ''
      for (var i = 0; i < length; i++) {
          if (i == 0) {
              lowerBound += '1'
          }
          else {
              lowerBound += '0'
          }
          upperBound += '1'
      }
      lowerBound = bigInt(lowerBound, 2)
      //document.getElementById("Text1").innerHTML += ('LowerBound: ' + lowerBound.toString() + '</br>')
      upperBound = bigInt(upperBound, 2)
      //document.getElementById("Text1").innerHTML += ('UpperBound: ' + upperBound.toString() + '</br>')
  
      /*var prime1 = bigInt(generateRandomBigInt(lowerBound, upperBound).toString()) */
      var prime1 = generateRandomNBit(length)
      while (upperBound.lt(prime1) === true || prime1.isPrime() === false) {
          //prime1 = bigInt(generateRandomBigInt(lowerBound, upperBound).toString())
          var prime1 = generateRandomNBit(length)
          if (prime1.isEven() === true) {
            prime1 = prime1.next() //Add 1
          }
          while (prime1.isPrime() === false) {
            prime1 = prime1.next()
            prime1 = prime1.next()
          }
      }
      //document.getElementById("Text1").innerHTML += ('Try for prime 1: ' + prime1.toString() + '</br>')
 
      //var prime2 = bigInt(generateRandomBigInt(lowerBound,upperBound).toString())
      var prime2 = generateRandomNBit(length)
      while (upperBound.lt(prime2) === true || prime2.isPrime() === false || prime1.compare(prime2) === 0) {
          //prime2 = bigInt(generateRandomBigInt(lowerBound, upperBound).toString())
          prime2 = generateRandomNBit(length)
          if (prime2.isEven() === true) {
            prime2 = prime2.next() //Add 1
          }
          while (prime2.isPrime() === false || prime1.compare(prime2) === 0) {
            prime2 = prime2.next()
            prime2 = prime2.next()
          }
      }
     
      //document.getElementById("Text1").innerHTML += ('Try for prime 2: ' + prime2.toString() + '</br>')
      return [prime1,prime2]
  }
  
  function randRSA()
  {
      
      if (document.getElementById("1024").checked == true) {
        let primes = findPrimes(1024);
        runRSA(primes[0].toString(),primes[1].toString(),false)

      } else if (document.getElementById("2048").checked == true) {      
        let primes = findPrimes(2048);
        runRSA(primes[0].toString(),primes[1].toString(),false)

      } else if (document.getElementById("4096").checked == true) {
        let primes = findPrimes(4096);
        runRSA(primes[0].toString(),primes[1].toString(),false)

      } else {
        document.getElementById("myDiv").style.display = "none";
      document.getElementById("Text1").innerHTML += '</br><p id="SuccessFail">Please select one of the options.</p>';
        document.getElementById("SuccessFail").style.color = "red";
      }
  }
  
  function crackKnown() {
          
      document.getElementById("Text1").innerHTML = "";
  
      document.getElementById("form2").innerHTML += '<input type="text" name="first" id="n_var" size="70"/> "N" (modulus)<br> <input type="text" name="last" id="d_var" size="70"/> "D" (exponent)<br>';
          
      document.getElementById("form2").innerHTML += '<textarea name=\"cipherText\" rows=\"7\" cols=\"90\" id=\"cipherText\" placeholder=\"Message to Decode (ciphertext).\"></textarea>';
      document.getElementById("Button1").onclick = crack1;
  
  }
  
  function crackUnknown() {
      
      document.getElementById("Text1").innerHTML = "";
      document.getElementById("form2").innerHTML = "";
      document.getElementById("Button1").onclick = crack2;
  }
  
  function sendError() {
      document.getElementById("myDiv").style.display = "none";
      document.getElementById("Text1").innerHTML = '</br><p id="SuccessFail">Please select one of the options.</p>';
      document.getElementById("SuccessFail").style.color = "red";
  }

  function sendError2() { 
    document.getElementById("myDiv").style.display = "none";
    document.getElementById("Text1").innerHTML = '</br><p id="SuccessFail">Fill out all three required fields.</p>';
    document.getElementById("SuccessFail").style.color = "red";
  }
  function sendError3() { 
    document.getElementById("myDiv").style.display = "none";
    document.getElementById("Text1").innerHTML = '</br><p id="SuccessFail">N and D need to be valid integers.</p>';
    document.getElementById("SuccessFail").style.color = "red";
  }
  function sendError4() { 
    document.getElementById("myDiv").style.display = "none";
    document.getElementById("Text1").innerHTML = '</br><p id="SuccessFail">Please include ciphertext as varying blocks of integers separated by \
    white space.</p>';
    document.getElementById("SuccessFail").style.color = "red";
  }
  
  function crack1() {
      
      document.getElementById("myDiv").style.display = "block";
      //document.getElementById("Text0").innerHTML = "";
  
      //document.getElementById("Text1").innerHTML = "Cracking...";
      
      //Remove whitespace
      var n_tmp = document.getElementById("n_var").value.replace(/\s/g,'');
      var d_tmp = document.getElementById("d_var").value.replace(/\s/g,'');

      n_tmp = n_tmp.replace(/,/g, '');
      d_tmp = d_tmp.replace(/,/g, '');
  
      //Variables used to check if N and D are valid integers
      var is_N_num = /^\d+$/.test(n_tmp);
      var is_D_num = /^\d+$/.test(d_tmp);

      var array_ciphertext = [];
      array_ciphertext = parseCipherText(document.getElementById("cipherText").value);

      var isNotValidCiphertext = false
      for (var i =0 ; i < array_ciphertext.length; i++) {
          if (!/^\d+$/.test(array_ciphertext[i]) ) {
              isNotValidCiphertext = true;
          }
      }
      
      if (n_tmp.length <= 0 || d_tmp.length <= 0 || array_ciphertext.length <= 0) {
          sendError2();
          return;
      } else if (!is_N_num || !is_D_num) {
        sendError3();
        return;
      } else if (isNotValidCiphertext) {
          sendError4();
          return;
      }

      var n = bigInt(n_tmp);
      var d = bigInt(d_tmp);

      var asciiTokens = [];
      document.getElementById("Text1").innerHTML = "Decoded Message: ";
      document.getElementById("Text1").innerHTML += '</br>';
  
      
      for (var i=0; i < array_ciphertext.length; i++) {
          var thisBigInt = array_ciphertext[i];
          var decoded = thisBigInt.modPow(d, n);
          document.getElementById("Text1").innerHTML += '</br>'
          asciiTokens.push(decoded);
           document.getElementById("Text1").innerHTML += decoded;
           document.getElementById("Text1").innerHTML += '\xa0\xa0';
      }
      
      document.getElementById("Text1").innerHTML += '</br></br>';
      document.getElementById("Text1").innerHTML += "Text from ASCII (if applicable): ";
      document.getElementById("Text1").innerHTML += '</br>';
      
      
      
      for (var i=0; i < asciiTokens.length; i++) {
          document.getElementById("Text1").innerHTML += String.fromCharCode(asciiTokens[i]);
      }
      
      document.getElementById("myDiv").style.display = "none";
      
  }
  
  function parseCipherText(cipherText) {
      
      var tokenConstructor = "";
      var arrayResult = [];
      var trigger = false;
  
      for (var i=0; i < cipherText.length; i++) {
          if (cipherText.charAt(i) == '\xa0' || cipherText.charAt(i) == ' ') {
              if (!trigger) {
                  
                  var bigIntToken = bigInt(tokenConstructor);
                  arrayResult.push(bigIntToken);
                  tokenConstructor = "";
                  trigger = true;
              }
          } else if (cipherText.charAt(i) != '\n') {
              if (trigger) {
                  trigger = false;
                 }
              tokenConstructor += cipherText.charAt(i);
          }
      }
      
      if (tokenConstructor != "" && tokenConstructor != " ") {
        if (!/^\d+$/.test(tokenConstructor)) {
            arrayResult.push('False');
        }
        else {
            arrayResult.push(bigInt(tokenConstructor));
        }
      }
      //alert(arrayResult);
      return arrayResult;
      
  }
  
  function crack2() {
      document.getElementById("Text1").innerHTML = "Can it be cracked?";
  }
