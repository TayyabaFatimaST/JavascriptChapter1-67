$(function() {
    var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    
    var links = this.el.find('.link');
    
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    
    Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    $this = $(this),
    $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if (!e.data.multiple) {
    $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    }
    }
    
    var accordion = new Accordion($('#accordion'), false);
    });


    //===Chapter1 Tasks===//
 
 function showAlert() { 
    alert ("Welcome!")
  } 
 showAlert(); 


function myFunction() {
    alert ("Welcome To JS Land...");

    alert ("Happy Coding!\nPrevent this page for additional dialogs.");
 
}

//===Chapter2 Tasks===//
function myName() {
   var userName = "myName - TayyabaFatima";
   document.getElementById("demo").innerHTML = userName;
}

function myMessage() {
   var message = "Hello World";
         alert(message);
}

function myStudent() {
var name = "Jhone Doe";
var age = "15 year old";
var degree = "Certified Mobile Application Development"; 

alert (name);
alert (age);
alert (degree);

}

function myEmail() {
  var str1 = "My email address is ";
  var email = "example@example.com";
  
  alert (str1.concat(email));

}

function myJava() {
  var book = "A smarter way to learn JavaScript";
  
  alert ("I am trying to learn from the Book " + book );

}

function myDisplay() {
 document.getElementById("display").innerHTML = "Yah! I can write HTML Content through JavaScript";

}

function myDesign() {
  var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
  alert (design);

}

//==Chapter 3 Task===//

function myAge() {
var age = "I am 15 year old";
alert (age);

}


function nameDefined(ckie,nme)
{
   var splitValues
   var i
   for (i=0;i<ckie.length;++i)
   {
      splitValues=ckie[i].split("=")
      if (splitValues[0]==nme) return true
   }
   return false
}

function delBlanks(strng)
{
   var result=""
   var i
   var chrn
   for (i=0;i<strng.length;++i) {
      chrn=strng.charAt(i)
      if (chrn!=" ") result += chrn
   }
   return result
}
function getCookieValue(ckie,nme)
{
   var splitValues
   var i
   for(i=0;i<ckie.length;++i) {
      splitValues=ckie[i].split("=")
      if(splitValues[0]==nme) return splitValues[1]
   }
   return ""
}
function myVisit() {
 readCookie()
 displayCounter()
}
 function displayCounter() {
 alert("You've visited this page " + counter+" times.")
 }
function readCookie() {
 var cookie=document.cookie
 counter=0
 var chkdCookie=delBlanks(cookie)  //are on the client computer
 var nvpair=chkdCookie.split(";")
 if(nameDefined(nvpair,"pageCount"))
 counter=parseInt(getCookieValue(nvpair,"pageCount"))
 ++counter
 var futdate = new Date()
 var expdate = futdate.getTime()
 expdate += 3600000 * 24 *30  //expires in 1 hour
 futdate.setTime(expdate)

 var newCookie="pageCount="+counter
 newCookie += "; expires=" + futdate.toGMTString()
 window.document.cookie=newCookie
}

function myBirth() {
  var birthYear = "1998";
   document.getElementById("birth").innerHTML = "My birth year is" + birthYear + "<br/> Datatype of my declared varible is number";

}

function onlineClothing() {
  var visitorName = "John Doe";
  var result = visitorName.bold();
   var order = "5 T-shirt";
    var resultSec = order.bold();

   
   
   document.getElementById("store").innerHTML = result + " Order " + resultSec + "(s) on XYZ Clothing store";

}

//==Chapter 4 Task===//

function oneStatement() {
  var person = "John Doe", carName = "Volvo", price = 500;
document.getElementById("one").innerHTML = person + carName + price;

}

function legalVariable () {

  var legal = "Legal Variable <br /> My_variable<br /> $my_variable <br />_my_variable <br /> my_variable_example<br /> MyVariableExample<br /><br />";
  var illegal =" Illegal Variable <br /> 1my_example<br />	@my_variable<br /> ++my_variable<br /> %my_variable<br /> #my_variable<br /> ~my_variable";
document.getElementById("variable").innerHTML = legal + illegal;

}

function browserDisplay() {

var heading="Rules For Naming JS Variable	<br/><br/><br/>";
  var result = heading.bold();
   
  
document.getElementById("browser").innerHTML = result + "<br />A heading stating Rules for naming JS variables<br />	Variable names can only contain ______, ______,______ and ______.<br />For example $my_1stVariable<br />Variables must begin with a ______, ______ or_____. <br />	For example $name, _name or name<br />Variable names are case _________<br />Variable names should not be JS _________";

}

//==Chapter 5 Task ===//

function sumVari(){

var x = 3;
var y = 5;
var z = x + y;
document.getElementById("sum").innerHTML = "Sum of " + x + " and " + y + " is " + z;

}

function subVari(){

var x = 3;
var y = 5;
var z = x - y;
document.getElementById("sub").innerHTML = "Sub of " + x + " and " + y + " is " + z;

}


function mulVari(){

var x = 3;
var y = 5;
var z = x * y;
document.getElementById("mul").innerHTML = "Mul of " + x + " and " + y + " is " + z;

}

function divVari(){

var x = 3;
var y = 5;
var z = x / y;
document.getElementById("div").innerHTML = "Div of " + x + " and " + y + " is " + z;

}

function generateTable()
{
var myVar = 4;
var myString = "";
for (i=1; i<=10; i++) {
myString += myVar+ " x " +i+ " = " +(i*myVar)+ "<br/>";
}
document.write(myString);
}

function markSheet()
{
var totalMarks = prompt("Enter Your Total Marks");
var obtMarks = prompt("Enter Your Obtain Marks");
var per = obtMarks * 100 / totalMarks;

document.getElementById("mark").innerHTML = "Total Marks:" + totalMarks + "<br />"+ "Obtain Marks:" + obtMarks + "<br />"+ "Percentage:" + per + "<br />";


}

//==Chapter 6-9 Task===//

function outputResult() {
var a = 2, b = 1; 
var result = --a - --b + ++b + b--;

--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; 

document.getElementById("res").innerHTML = "a: " + a + " <br /> b: " + b + " <br/> result: " + result;
}

function greetUser() {
  var txt;
  var person = prompt("Please enter your name:", "Your Name");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! How are you today?";
  }
  document.getElementById("greet").innerHTML = txt;
}

function myBydefault() {
  var myVar;
  var myString;
  var person = prompt("Please enter number:", "You want the table of?");
  if (person == null || person == "") {
   myVar = 5;
   myString = "";
for (i=1; i<=10; i++) {
myString += myVar+ " x " +i+ " = " +(i*myVar)+ "<br/>";
}
document.write(myString);
  } 
  else {
  
myVar = person;
   myString = "";
for (i=1; i<=10; i++) {
myString += myVar+ " x " +i+ " = " +(i*myVar)+ "<br/>";
}
document.write(myString);
                
                }
  document.getElementById("default").innerHTML = myVar;
}


function myTbl()
{
var english = prompt("Enter Your English Marks");
var maths = prompt("Enter Your Maths Marks");
var urdu = prompt("Enter Your Urdu Marks");
var totalMarks = ("Enter Your Total Marks", "300");
var obtMarks = parseInt(english) + parseInt(maths) + parseInt(urdu) ;
var percantage = obtMarks * 100 / totalMarks;

document.getElementById("tbl").innerHTML = english;
document.getElementById("tbl2").innerHTML = maths;
document.getElementById("tbl3").innerHTML = urdu;
document.getElementById("tbl4").innerHTML = obtMarks;


document.getElementById("per1").innerHTML = parseInt(english)* 100 / 100 + "%";
document.getElementById("per2").innerHTML = parseInt(maths)* 100 / 100 + "%";
document.getElementById("per3").innerHTML = parseInt(urdu)* 100 / 100 + "%";
document.getElementById("per4").innerHTML = percantage + "%";

}

function cityName() {
  var txt;
  var city = prompt("Please enter city name:", "City Name");
  if (city == "karachi") {
    txt = "“Welcome to city of lights”";
  } else {
    txt = "Your city can not modify";
  }
  document.getElementById("cn").innerHTML = txt;
}

function genderName() {
  var txt;
  var gender = prompt("Please Gender:", "female or male");
  
  if (gender == "male") {
    txt = "Good Morning Sir";
  } 
  else if (gender == "female") {
    txt = "Good Morning Mam";
  } 
  
  else {
    txt = "Gender not Enter";
  }
  document.getElementById("g").innerHTML = txt;
}


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} //==Output given condition for variable a is true ===//

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} //=== Output not show b/c od condition flase==//

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}//===Output Condition true 2 and true 4===//


 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}//=== Output Cost not Equal==//


if (true){
alert("True");
}
if (false){
alert("False");
}//==Output True==//

if("car" < "cat"){
alert("car is smaller than cat");
} //== Output car is smalle than cat==//


//==Chapter 12- 20 Tasks ===//
function twoInt() {
var input1 = prompt("Enter first number:");
var input2 = prompt("Enter second number:");

  document.getElementById("large").innerHTML = Math.max(input1, input2);
}

function myFix() {
  var greeting;
  var time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("fx").innerHTML = greeting;
}



let Stu = { firstName: "" };

var person = {
  firstName: "John",
  lastName: "Doe"
};

alert(
person.firstName
);

function myStringarry() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = fruits.toString();
  document.getElementById("srtn").innerHTML = x;
}
function myArraynum() {
  var num = ["1", "2", "3", "4"];
  var x = num.toString();
  document.getElementById("anum").innerHTML = x;
}

function myBoolean() {
  document.getElementById("boln").innerHTML = Boolean(10 > 9);
}
 
 function myMixed(){
var ArrMixed = [1, "A ", 2, "Mixed ",3,"Array."];
var num;
var displayArray = "The Mixed array elements: <BR>";

for (num=0; num < ArrMixed.length; num++){
    displayArray += ArrMixed[num] + "<BR>";
    }
    document.getElementById("div_demo").innerHTML = displayArray; 

}

function myQua(){
var ArrMixed = ["1) SSC", "2) HSC", "3) BCS", " 4) BS ","5) BCOM","6) MS", "7) M. Phil", "8) PhD"];
var num;
var displayArray = "Qualifications: <BR> <BR>";

for (num=0; num < ArrMixed.length; num++){
    displayArray += ArrMixed[num] + "<BR>";
    }
    document.getElementById("div_qua").innerHTML = displayArray; 

}

function myMarks(){

var num1 = prompt("Please enter Marks Of Michale:", "Your Number");
var num2 = prompt("Please enter Marks Of Jhon:", "Your Number");
var num3 = prompt("Please enter Marks Of Tony:", "Your Number");

var res= ((num1/500)*100);
var res2= ((num2/500)*100);
var res3= ((num3/500)*100);

    document.getElementById("div_mar").innerHTML = " The Score Of Michale is " + num1 + ". Percentage : " + res + "%" + "<br/> The Score Of Jhon is " + num2 + ". Percentage : " + res2 + "% " + "<br/> The Score Of Tony is " + num3 + ". Percentage : " + res3 + "%"; 

}

var points = [320, 230, 480, 120];
var point = [320, 230, 480, 120];
document.getElementById("demo").innerHTML = "Score Of Student: "+ points;

function mySort() {
  point.sort(function(a, b){return a-b});
  document.getElementById("sort").innerHTML = "Score Of Student: "+ points + "<br><br>" + "Order Score Of Score : " + point;
}

var n1 = prompt("Please enter first value", "Your input");
var n2 = prompt("Please enter second value", "Your input");
var n3 = prompt("Please enter third value", "Your input");

var fifo = [n1, n2, n3];
document.getElementById("ff").innerHTML = fifo;

function myFifo() {
  fifo.shift();
  document.getElementById("ff").innerHTML = fifo;
}

function myLoop() {
  var fruits = ["Apple", "Banana", "Mango", "Orange", "strawberry"];
  var a = fruits.indexOf("Apple");
  var b = fruits.indexOf("Banana");
  var m = fruits.indexOf("Mango");
  var o = fruits.indexOf("Orange");
  var s = fruits.indexOf("strawberry");

document.getElementById("lo").innerHTML = " Element at index " + a + " is Apple <br>" + "Element at index " + b + " is Banana <br> " + "Element at index " + m + " is Mango <br>" + "Element at index " + o + " is Orange <br>" + "Element at index " + s + " is strawberry <br>" ;
}

function greetUser() {
  var txt;
  var fname = prompt("Please enter First Name:", "Your Name");
  var lname = prompt("Please enter Last Name:", "Your Name");
	var fullName = fname + lname;
  if (fullName == null || fname == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + fname + "" + lname + "! How are you today?";
  }
  document.getElementById("greet").innerHTML = txt;
}

function myFavmbl() {

var mbl = prompt("Enter Your Favorite Moblie Name:", "Your Fav Mbl Name");
  var n = mbl.length;
  
 document.getElementById("mob").innerHTML = " My Favorite Phone is: " + mbl + "<br />"+ "Length Of The String: "+ n;
}

function myIndex() {
  var str = "Pakistani";
  var n = str.indexOf("n");
 document.getElementById("check").innerHTML = " String: " + str + "<br />"+ "Index of n is: "+ n;
 }
 
 function myIndextwo() {
  var str = "Hello World!";
  var l = str.lastIndexOf("l");
 document.getElementById("chek").innerHTML = " String: " + str + "<br />"+ "Index of l is: "+ l;
 }
 
 function myIndexvalue() {
  var str = "Pakistani";
  var res = str.charAt(3)
  document.getElementById("click").innerHTML = " String: " + str + "<br />"+ " Character Of Index 3rd is: " + res;
}
 
 function myCnt() {
var fname = prompt("Please enter First Name:", "Your Name");
  var lname = prompt("Please enter Last Name:", "Your Name");
  var children = fname.concat(lname); 
  document.getElementById("rep").innerHTML = " Hello " + children + " How are you today?";
}
 
 
 function myRep() {
  var str = " Hyderabad " ; 
  var res = str.replace("Hyder", "Islam");
  document.getElementById("rp").innerHTML = " City: " + str + "<br />"+ "After Replacement: "+ res;
}


function myRep2() {
  var str = " Ali and Sami are best friends.They play cricket and football together." ; 
  var res = str.replace(/and/g, "&");
  document.getElementById("rp2").innerHTML = " Before Replacement: " + str + "<br />"+ "After Replacement: "+ res;
}


function myUpcase() {
var str = prompt("Please Enter Any String:", "lowercase");
var res = str.toUpperCase();
  document.getElementById("up").innerHTML =  " User input: " + str + " <br/ >" + "Upper case: " +  res;
}
 
function titleCase() {
     var string = prompt("challenge no. 11 Please Enter String :", "lowercase for titlecase");
      var sentence = string.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
 document.write("User input: " + string + " <br/> ");
   document.write("Title case: " + sentence.join(" "));
   return sentence;
   }
   titleCase(""); 

   function myDot() {
    var str = '35.36';
         document.write("Number: "+str);
         
         var res = str.replace(/\./g,'');
         document.write("<br>Result: "+res);

  document.getElementById("dot").innerHTML = numberAsString;
}

function myLastchr() {
  var str = "Pakistan";
  var res = str.charAt(str.length-1);
  document.getElementById("clk").innerHTML = "  Userinput: " + str + "<br />"+ " Last character of input is: " + res;
}
 
 function myMaths() {
  var value = prompt("Please enter positive floating point number:", "3.45214");

  document.getElementById("Maths").innerHTML = " Number: " + value + "<br />"+ " Round off value: " + Math.round(value) + "<br /> Floor value: " + Math.floor(value) + "<br /> ceil value:	" +  Math.ceil(value);
}

function myMaths2() {
  var value = prompt("Please enter the negative floating point	number :", "-2.673");

  document.getElementById("Maths2").innerHTML = " Number: " + value + "<br />"+ " Round off value: " + Math.round(value) + "<br /> Floor value: " + Math.floor(value) + "<br /> ceil value:	" +  Math.ceil(value);
}

function myAbsl() {
  var value = prompt("Please enter absolute value:", "-4");

  document.getElementById("abss").innerHTML = " The absoluste value " + value + " is:  " + Math.abs(value);
}

function getRndInteger() {
var diceRoll = Math.floor( Math.random() * 6 ) +1;
alert('Random diec value: ' + diceRoll);
var dice = "Random dice value is: " + diceRoll ;
  return dice;
}

function getRnd() {
var coinRoll = Math.floor( Math.random() * 2 ) +1;
var coin = coinRoll;

if  (coin == 2) {
alert(coinRoll + ' Random coin value is Head ');

}
 else if (coin == 1) {
 alert(coinRoll + ' Random coin value is Tails');
 }
 
  return coinRoll;
}

function getRndnum() {
var ranNum = Math.floor(Math.random() * 100);
alert(' Random Number between 1 till 100 is ' + ranNum );
  return ranNum;
}

function getRndsecnum() {
var secNum = prompt("Please enter number between 1- 10:", "Your Number");
var sec = 6;

if  (secNum == sec) {
alert(' congratulate your number match');

}
 else {
 alert(' Try Again! ');
 }
 
}
//==Task 31 - 34 ===//

function myMonth() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var n = month[d.getMonth()];
  document.getElementById("month").innerHTML = "Current Month is: " + n;
}

function myDay() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  document.getElementById("day").innerHTML = "Today is " + n;
}

function myFavday() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  
  if ( n = weekday[6] || weekday[0] ) {
  
    document.getElementById("fday").innerHTML = "It's Fun day!";
  
  }
else {

    document.getElementById("fday").innerHTML = "Today is " + n;

}

}

//===Task 35-40===//

function currentDatetime() {

var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;

 document.getElementById('dmt').innerHTML = dateTime;
}


function add(){
var a,b,c;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
c= a + b;
document.getElementById("answer").value= c;
}

function mySquare() {

  var value = prompt("Please enter Number for Square:", "Your Number");

  document.getElementById("sq").innerHTML = value + " Square is equal to : " + Math.pow(value, 2);
}

function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

  document.getElementById("fac").innerHTML = "The Factorial Number of 5! is: "  + factorialize(5);

function myCount() {
var num1 = prompt("Please enter Number1:", "Your Number");
var num2 = prompt("Please enter Number2:", "Your Number");

  var text = "";
  var i;
  for (i = num1; i <= num2; i++) {
    text += "The number is " + i + "<br>";
  }
  document.getElementById("cnt").innerHTML = text;
}

function myHypo() {
var a = prompt("Please Enter Base Of Triangle:", "in cm ");
var b = prompt("Please Enter Perpendicular Of Triangle: ", "in cm");
var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

 
  document.getElementById("hyp").innerHTML = " Formula: Hypotenuse2 = Base2 + Perpendicular2 <br/> <br /> The Hypoth is: " + a + "cm + " + b + "cm = " + c + "cm";
} 

function myArear() {
var w = prompt("Please Enter Weight Of Rectangle:", "Value");
var h = prompt("Please Enter Height Of Rectangle: ", "Variable");
var a = w * h ;

 
  document.getElementById("area").innerHTML = " Formula: A = width * height <br/> <br /> The Area Of A Rectangle is: " + w + " * " + h + " = " + a;
} 

//== Console  palindrome or not ==//
function check_Palindrome(str_entry){
   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var ccount = 0;
	if(cstr==="") {
		console.log("Nothing found!");
		return false;
	}
	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
		if (cstr.length === 1) {
			console.log("Entry is a palindrome.");
			return true;
		} else {
			ccount = (cstr.length - 1) / 2;
		}
	}
	for (var x = 0; x < ccount; x++) {
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			console.log("Entry is not a palindrome.");
			return false;
		}
	}
	console.log("The entry is a palindrome.");
	return true;
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));


function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

function calcCircumference() {
var a = 2;
var pi = 3.14159265359;
var r = prompt("Please Enter Radius Of Circle:", "Radius ");
var c = a * pi * r;

document.getElementById("calc").innerHTML = " Formula: Circumference of circle = 2πr <br/> <br /> The Circumference of circle is: " + a + "π" + r + " = " + c ;
} 


function calcArea() {
var pi = 3.14159265359;
var r = prompt("Please Enter Radius Of Circle:", "Radius ");
var c = pi * Math.pow(r, 2);

document.getElementById("calcA").innerHTML = " Formula: Area of circle = πr<small>2</small> <br/> <br /> The Area of circle is: π" + r + "<small>2</small> = " + c;
} 

$(".img-col").click(function($this) {
  alert("Thankyou for purchasing this mobile");
});

//Quesiton 3
var rows = [{
    name: "John",
    class: 2,
}, {
    name: "Jack",
    class: 5,
}, {
    name: "DSon",
    class: 8,
},
  {
    name: "Dack",
    class: 2,
}];
let index = document.querySelectorAll('.usertable tr td:nth-child(1)');
let name = document.querySelectorAll('.usertable tr td:nth-child(2)');
let studenClass = document.querySelectorAll('.usertable tr td:nth-child(3)');
for (let i = 0; i < name.length; ++i) {
  index[i].innerHTML = i;
  name[i].innerHTML = rows[i].name;
  studenClass[i].innerHTML = rows[i].class;
}
$('.delete').click(function(e){
   $(this).closest('tr').remove()
})

//Quesiton 4
function setNewImage() {
  document.getElementById("img-1").src = "assets/img/mobile-3.png";
}
function setOldImage() {
  document.getElementById("img-1").src = "assets/img/mobile-1.jpg";
}

//Quesiton 5
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue()
{
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number2').value = value;
}

$(function() {
var Accordion = function(el, multiple) {
this.el = el || {};
this.multiple = multiple || false;

var links = this.el.find('.link');

links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
}

Accordion.prototype.dropdown = function(e) {
var $el = e.data.el;
$this = $(this),
$next = $this.next();

$next.slideToggle();
$this.parent().toggleClass('open');

if (!e.data.multiple) {
$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
}
}

var accordion = new Accordion($('#accordion'), false);
});

var a = document.getElementById('main-content');
//ques no ii:
console.log(a.childNodes)
//ques no v:
var g = document.getElementById('last-name')
var text = document.createTextNode("Bank")
g.appendChild(text)
console.log(g)
var h = document.getElementById('email')
var text = document.createTextNode("alexbank@example.com")
h.appendChild(text)
console.log(h)
//task no 2:
//ques no ii:
var b = document.getElementById('lastName')
console.log(b.nodeType);
console.log(b.childNodes[0].nodeValue)
//ques no iii:
var target = document.getElementById('lastName')
target.setAttribute('lastName',"glader")
console.log(target)
var j = document.getElementById('lastName')
var text = document.createTextNode("glader")
target.appendChild(text)
console.log(target)
//ques no iv:
var m = document.getElementById('main-content')
console.log(m.childNodes[1])
var m = document.getElementById('main-content')
console.log(m.childNodes[8])
//ques no vi:
var x = document.getElementById('email')
console.log(x.parentNode)
console.log(x.nodeType)


