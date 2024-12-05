var size_min = 50;
var size_max = 200;

var formColor_min = 0;
var formColor_max = 220;

var pgb_width = 600;
var pgb_height = 290;
var pgb_left_min = 10;    // links
var pgb_left_max = pgb_left_min + pgb_width;   // rechts
var pgb_top_min = 200;     // oben
var pgb_top_max = pgb_top_min + pgb_height;//  + size_max;   // unten

var startTime = new Date();
// CODE, der gemessen werden soll
var minTime = new Date();

// border around playground ////////////////////////////////////////////////////////////////
function setPlayground()
{
	document.getElementById("playground").style.position = "absolute";
	document.getElementById("playground").style.left = pgb_left_min-3+"px";
	document.getElementById("playground").style.top = pgb_top_min-3+"px";
	document.getElementById("playground").style.width = pgb_width+size_max+2+"px";
	document.getElementById("playground").style.height = pgb_height+size_max+2+"px";
	document.getElementById("playground").style.border = "2px black solid";
}

setPlayground();


///////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', async function() {

	try{
		var input_1_lines = await readInput('input1.xml');

/*		console.log("input_1_lines: ");
		console.log(input_1_lines);
		var round = 0;
		for(let line of input_1_lines )
		{
			round++;
			console.log(round +": " + line);
		}
		document.getElementById("solution_1").innerHTML = "Lösung 1: " +	"hier muss Lösung 1 stehen ...";
*/

		var inArrLeft = [];
		var inArrRight = [];
		
		for(let line of input_1_lines )
		{
			var temp = line.split("   ");
			inArrLeft.push( parseInt(temp[0]) );
			inArrRight.push( parseInt(temp[1]) );
		}

		console.log(inArrLeft);
		console.log(inArrRight);

		inArrLeft.sort(function(a, b) {
			return a - b;
		});

		inArrRight.sort(function(a, b) {
			return a - b;
		});

		console.log(inArrLeft);
		console.log(inArrRight);
  
		var sum = 0;
		for (var idx=0; idx<inArrLeft.length;  idx++)
		{
			sum += Math.abs(inArrLeft[idx]-inArrRight[idx]);
		}
		console.log("sum: "+ sum);	
		document.getElementById("solution_1").innerHTML = "    Lösung: " + sum;

		sum = 0;
		for(let el of inArrLeft)
		{	
			console.log("el: " + el);
			sum += el;
		}
		console.log("sum: "+ sum);	
		
		
		// ––––––––

		var input_2_lines = await readInput('input2.xml');
		var round = 0;
		for(let line of input_2_lines )
		{
			round++;
			console.log(round +": " + line);
		}
		document.getElementById("solution_2").innerHTML = "Lösung 2: " +	"hier muss Lösung 2 stehen ...";
	}
	catch(error) {
        console.error('Fehler beim Einlesen der XML-Dateien:', error);
    }
});



async function readInput(InputFileName)
{
	try{
		var inputLines = [];
		const response = await fetch(InputFileName);

		if (!response.ok) 
		{
				throw new Error('Network response was not ok');
		}
		
		const xmlText = await response.text();
		const parser = new DOMParser();
		const xmlDoc = parser.parseFromString(xmlText, "text/xml");
		const input = xmlDoc.getElementsByTagName('input')[0];
		const inputText = xmlDoc.getElementsByTagName('input')[0].getElementsByTagName('text')[0].textContent;

//		console.log(InputFileName + ' - <text>: '+ inputText);
		inputLines = inputText.split('\n');
//		console.log("inputLines.length: "+ inputLines.length);
		inputLines.pop();
		inputLines.pop();
		inputLines.shift();
		inputLines.shift();

//		console.log("inputLines.length: "+ inputLines.length);
//		console.log("return inputLines;");
		return inputLines;

	}
	catch(error) {
        console.error('Fehler beim Einlesen der XML-Dateien:', error);
    }
};