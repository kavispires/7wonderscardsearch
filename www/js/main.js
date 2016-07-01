/* ==========================
   GLOBAL VARIABLES
   ========================== */
   var game = {
   	count:0, 
   	numPlayers:0, 
   	side:"", 
   	expansions:[], 
   	wonders:[], 
   	option1:false, 
   	option2:false, 
   	option3:false, 
   	freeCity:false
   },
   randomizerpage = 0,
   allCodes = [],
   availableWonders = [],
   availableWondersSub = [],
   selectedWonders = [],
   selectedWondersSub = [],
   doubleSidedWonders = [],
   finalWonders = [],
   finalResult = {};
/* ==========================
   HIDES EVERYTHING NECESSARY AT START
   ========================== */

//Hides Randomizer Logo
$('#randomizer-logo').fadeOut(0);
//Hides Return Flip Button
$('#btn-return').fadeOut(0);
//Hides Results Button from Randomizer
$('#randomizer-results').fadeOut(0);

/* ==========================
   RESET RANDOMIZER
   ========================== */


//Resets all gathered information
resetAll = function(){
	//resets Page count
	randomizerpage = 0;
	console.log("Randomizer Page: 0");
	//resets all button selections
	$('*').removeClass('btn-selected');
	console.log("All Selected States Removed.");
   	//reset options butons
   	$('*').removeClass('btn-checkbox-selected');
   	//resets to 0 Wonders On on wonder selection page
   	$("#wonderson").text(0);
   	console.log("Wonders On: 0");
   	//resets Available Wonders
   	availableWonders = [];
   	//resets Selected Wonders
   	selectedWonders = [];
	//reset game object
	game = {
		count:0, 
		numPlayers:0, 
		side:"", 
		expansions:[], 
		wonders:[], 
		option1:false, 
		option2:false, 
		option3:false, 
		freeCity:false
	};
    //clear all arrays
    availableWonders = [];
    availableWondersSub = [];
    selectedWonders = [];
    selectedWondersSub = [];
    doubleSidedWonders = [];
    finalWonders = [];
    finalResult = {};
    //empties results div
    $(".wonder-player-image").empty();
    $(".wonder-player-label").empty();
    $("#final-results li").show();
    console.log("Resetting Completed.");
};

/* ==========================
   ALERTS
   ========================== */

//All Alerts are created dynamically here
//For a new entry, add a else if, and when calling the popup alert, use its entry number
popupalert = function(i){
	var msg;
	if (i==1){
		msg="For a 2-player game, a third city will be automatically added as a Free City.";
	} else if (i==2){
		msg="For a 8-player game, you must play with Cities and/or Sailors.";
	} else if (i==3){
		msg="Only Wonders with both sides suitable for the expansions in play will be available.";
	} else if (i==4){
		msg="Only wonders suitable for the expansions in play will be available.";
	} else if (i==5){
		msg="Since it is a 8-player game, you must select Cities and/or Sailors.";
	} else if (i==6){
		msg="You haven't selected Cities or Sailors required for your 8-player game.";
	} else {
		msg="ERROR";
	}
	//html code for Alert Window
	$("body").prepend("<div id='alert-fullscreen'><div id='alert-box'><span class='icon-alert'></span><p>" + msg + "<p id='alert-close'>Close/Touch anywere to close.<span class='icon-x'></span></p></div></div>");
	setTimeout(function() {
      //hides any alert after 5 seconds showed
      $('#alert-fullscreen').fadeOut("slow");
  }, 5000);
};

/* ==========================
   RANDOMIZER FUNCTIONS
   ========================== */

//TIMELINE update
timeline = function(){
	//removes selected and visited from allslots
	$('#timeline').children().removeClass('slot-selected').removeClass('slot-visited');
	var i = randomizerpage,
	act = $('#slot-active'),
	vis = $('#slot-visited');
	//color block effect
	if(i==1){
		//positions active to far left
		act.css("left", "0");
		//rezised visited to 0
		vis.css("width", "0vw");
		//grows active to size
		act.animate({
			width: "16vw"
		});
	} else {
		//moves position
		act.animate({
			left: (i * 16)-16 + "vw"
		});	
	}
	//grows visited to siz
	vis.animate({
		width: (i*16) + "vw"
	});
};

//BUTTON NEXT CONDITIONS
btnNext = function(){
	//sort expansions array
	if(randomizerpage==3){
		game.expansions.sort();
	}
	//add to page counter
	randomizerpage++;
	//go to page
	location.href = '#randomizer-' + randomizerpage;
	//change timeline only if page is up to 5
	if(randomizerpage<=5){
		timeline();
	}
	//if going to Wonder Selection
	if(randomizerpage==5){
		wondersNeeded();
	}
	//if 8 player game, unable button next
	if(randomizerpage==3){
		if(game.numPlayers == 8){
			console.log("Game is for 8.");
			//unable next button
			$(".btn-next-3").addClass("btn-disabled").removeClass("btn-next");
		}
	}
};

//BUTTON BACK
btnBack = function(){
	//add to page counter
	randomizerpage--;
	//go to page
	location.href = '#randomizer-' + randomizerpage;
	//change timeline
	timeline();
};

//ACTIVATES NEXT BUTTON
btnNextActivation = function(section){
	var dis = "btn-disabled",
		next = "btn-next";
		//if theres data in the array
	if(section.length > 0 || section.length === undefined){
		//enable Next Button
		$(".btn-next-" + randomizerpage).removeClass(dis).addClass(next);
	} else {
		//disable Next Button
		$(".btn-next-" + randomizerpage).addClass(dis).removeClass(next);
	}
};

/* ==========================
   RANDOMIZER: WONDERS FILTERING
   //These steps ocurr when user is selecting Wonders to be randomized according to his criteria (Wonder Selection Page) 
   ========================== */

//function to compare if digit ATPOS from array NUMS is in array FROM and returns new array;
inPlay = function(nums, from, atPos) {
	if(Array.isArray(nums)) nums = nums.join('');
	nums = nums.toString();
	var toReturn = [];
	from.forEach(function(el) {
		if (nums.indexOf(el.toString()[atPos - 1]) !== -1) toReturn.push(el);
	});
	return toReturn;
};

//UPDATES ARRAY OF AVAILABLE WONDERS:
wondersNeeded = function(){
	

	//filters wonders with exclusive features of inplay expansions
	availableWonders = inPlay(game.expansions, allCodes, 7);
	//adds all wonders available for ANY game
	var any = inPlay(0, allCodes, 7);
	//updates available wonders with wonders for any game (concat = merge arrays)
	availableWonders = availableWonders.concat(any);
	//use function INPLAY for sides
	//filters side A(1) or B(2)
	if(game.side==1||game.side==2){
		availableWonders = inPlay(game.side, availableWonders, 5);
	}
	//filtes only Materials
	if(game.option1===true){
		//array with all materials digitas
		var mat = [1,2,3,4,5,6,7];
		availableWonders = inPlay(mat, availableWonders, 6);
	}
	//filters only Wonders with 3 Stages
	if(game.option3===true){
		availableWonders = inPlay(3, availableWonders, 8);
	}
};

//function to find matches in arrays and return new one NAO SEI PRA QUE ISSO!!!
keepDuplicates = function(arr1, arr2){

	var toReturn = [];
	arr1.sort();
	arr2.sort();
	for(var i = 0; i < arr1.length; i++) {
		if(arr2.indexOf( arr1[i] ) > -1){
			toReturn.push( arr1[i] );
		}
	}
	return toReturn;
};

//
wondersOn = function(){
 	//0.Resets variables
 	finalWonders = [];
 	selectedWonders = [];
 	selectedWondersSub = [];
 	availableWondersSub = [];
 	doubleSidedWonders = [];
 	//1. Create Selected Wonders array based on what user added to game.wonders (14)
 	selectedWonders = inPlay(game.wonders, allCodes, 2);
 	//2. Create a Sub Selected Wonders array with only 1 side per wonder (7)
 	$.each(selectedWonders, function(i, el) {
	    //creates var for 4 digit prefix
	    var prefix = el.toString().substring(0,4);
	    //if entry is not in sub array, add it
	    if ($.inArray(prefix, selectedWondersSub) === -1) { 
	    	selectedWondersSub.push(prefix);
	    }
	});
 	//3. Create a Sub Available Wonders array with only 1 side per wonder (arr2)
 	//4. Create a Double Sided Wonders array with data of double sided (arr3)
 	$.each(availableWonders, function(i, el) {
		//creates var for 4 digit prefix
		var prefix = el.toString().substring(0,4);
		//if entry is not in second array, add it
		if ($.inArray(prefix, availableWondersSub) === -1) { 
			availableWondersSub.push(prefix);
			//if entry is in second array, add to 3rd
		} else if ($.inArray(prefix, availableWondersSub) !== -1){
			doubleSidedWonders.push(prefix);
		}
	});
	//5. if Side Choice, transform availableWonderSub in doubleSidedWonders
	if(game.side===0){
		availableWondersSub = doubleSidedWonders;
	}
 	//6. Return finalWonders using keepDuplicates on SubAvail and SubSelected
 	finalWonders = keepDuplicates(availableWondersSub,selectedWondersSub);

 };

//
randomization = function() {
	console.log("It's starting.");
  //0. Create empty array (RR).
  var randomizeResults = [];
  //1. Populate RR with random values of finalWonders X number of players
  randomWonder = function() {
    //1.1 Runs a random number
    var tempNum = finalWonders[Math.floor(Math.random() * finalWonders.length)];
    //1.2 If number is not on RR, add it
    if (randomizeResults.indexOf(tempNum) == -1) {
    	randomizeResults.push(tempNum);
    	return tempNum;
    } else {
    	randomWonder();
    }
};
  //1.3 For each player, run function
  for (var i = 0; i < game.numPlayers; i++) {
  	randomWonder();
  }
  //1.4 Convert AW to strings
  var availableWondersStr = availableWonders.map(String);
  
  console.log("randomizeResults: "+randomizeResults);
  //2. Transform RR values into 8-digit numbers
  check = function(arr1, arr2, Pos) {
  	var num = Pos.toString();
  	if (Array.isArray(arr1)) arr1 = arr1.join('');
  	console.log("Join: " + arr1);
  	var toReturn = [];
  	arr2.forEach(function(el) {
  		var temp = arr1.indexOf(el + num);
  		if (temp !== -1) {
  			var temp2 = arr1.slice(temp, temp + 8);
  			toReturn.push(temp2);
  		}
  	});
  	return toReturn;
  };
  //2.1 If Side A only or Side B only, use digit-5
  if (game.side === 1 || game.side === 2) {
  	result = check(availableWondersStr, randomizeResults, game.side);
  	console.log("result: "+result);
  }
  //2.3 If Side Any, choose randomly 1 or 2 for digit-5
  if (game.side == 3) {
  	var rand = Math.round(Math.random()) + 1;
  	result = check(availableWondersStr, randomizeResults, rand);
  	console.log("result: "+result);
  }
  //2.4 if Choose, shows only side A
  if (game.side === 0) {
  	result = check(availableWondersStr, randomizeResults, 1);
  	console.log("result: "+result);
  }
  //3. Convert values of results into integer
  for (var i = 0; i < result.length; i++) {
  	result[i] = parseInt(result[i]);
  }
  //4. Render page with results
  //As long as j is greater than number
  for (var j = 9; j > game.numPlayers; j--) {
  	$('#result-' + j).hide();
  }
  //Insert images
  for (var k = 1; k <= game.numPlayers; k++){
  	//add label
  	$('#wpl-'+k).append("<img src='img/wonder-player-label-"+k+".svg'>");
  	//add image
  	var l = result[k-1];
  	$('#wpi-'+k).append("<img src='img/wonders_sm/"+l+".jpg'>");
  //Populate Obect FinalResult
  finalResult["player"+k] = result[k];
  detailWindow();
}
};

addSymbolz = function(arr){
		var temp = '';
		for(var i = 0; i < arr.length; i++){
			temp += '<img class="search-symbol" src="img/symbols/'+ arr[i] + '.png">';
		}
		return temp;
};

detailWindow = function(){
	//creates empty object
	var resultObject ={};

	//for each ARR element
	for (var p = 0; p < result.length; p++) {
		//creates item to be searched
		var toSearch = result[p];
		//search in each allWonders for result
		for (var r = 0; r < allWonders.length; r++) {
			if(toSearch === allWonders[r].code)  resultObject[p+1]= allWonders[r];
		}
	}

	console.log(resultObject);
	
	//Begins html
	var detailshtml = '<div id="result-fullscreen"><div id="result-box"><div id="close"><span class="icon-x"></span></div><div id="result-header">';
	//creates tabs based on numbers of players
	for (var xx = 1; xx <= result.length; xx++){
	detailshtml += '<div class="tab" id="tab' + xx + '">Player&nbsp;' + xx + '</div>';
	}

	//close header
	detailshtml += '</div>';

	//creates details for as many users
	for (var yy = 1; yy <= result.length; yy++){
	//1. Starts Player div
	detailshtml += '<div class="result-popup" id="result-player-' + yy + '">';
	//2. Adds Full name
	detailshtml +=	'<h2>'+resultObject[yy].fullname+'</h2>';
	//3.based on number of sides
	//if Player's Choice
	if(game.side === 0){
	console.log("I don't know what to do");
	//if Side A, Side B or Side Any
	} else {
	//3.1 Adds image
	detailshtml += '<div class="result-side-1"><div class="result-inner clearfix"><img src="img/wonders_sm/' + resultObject[yy].code + '.jpg">';
	//3.2 Adds Side and Initial Resource
	detailshtml += '<p><b>Side ' + resultObject[yy].side + '</b><br>';
	//3.3 Adds Initial Resource Image and Info
	detailshtml += '<b>Initial Resource: </b><img class="search-symbol" src="img/symbols/' + resultObject[yy].resource + '.png"><i> ' + resultObject[yy].resourceinfo + '</i></p><hr>';
	//3.4 Adds Stage 1
	detailshtml += '<ul><li><span>Stage 1</span></li>';
	//3.5 Adds Cost with images
	detailshtml += '<li>Cost: ' + addSymbolz(resultObject[yy].price1)+ '</li>';
	//3.6 Adds Stage 1 description
	detailshtml += '<li>' + resultObject[yy].stage1 + '</li></ul>';
	//3.7 if it has stage 2
	if(resultObject[yy].stage2 !== null){
	//3.7.1 Adds Stage 2
	detailshtml += '<hr><ul><li><span>Stage 2</span></li>';
	//3.7.2 Adds Cost with images
	detailshtml += '<li>Cost: ' + addSymbolz(resultObject[yy].price2)+ '</li>';
	//3.7.3 Adds Stage 2 description
	detailshtml += '<li>' + resultObject[yy].stage2 + '</li></ul>';
	}
	//3.8 if it has stage 3
	if(resultObject[yy].stage3 !== null){
	//3.8.1 Adds Stage 3
	detailshtml += '<hr><ul><li><span>Stage 3</span></li>';
	//3.8.2 Adds Cost with images
	detailshtml += '<li>Cost: ' + addSymbolz(resultObject[yy].price3)+ '</li>';
	//3.8.3 Adds Stage 3 description
	detailshtml += '<li>' + resultObject[yy].stage3 + '</li></ul>';
	}
	//3.9 if it has stage 4
	if(resultObject[yy].stage4 !== null){
	//3.9.1 Adds Stage 4
	detailshtml += '<hr><ul><li><span>Stage 4</span></li>';
	//3.9.2 Adds Cost with images
	detailshtml += '<li>Cost: ' + addSymbolz(resultObject[yy].price4)+ '</li>';
	//3.9.3 Adds Stage 4 description
	detailshtml += '<li>' + resultObject[yy].stage4 + '</li></ul>';
	}
	//3.10 if it has clarification
	if(resultObject[yy].clarification !== null){
	detailshtml += '<hr><p>Clarification: ' + resultObject[yy].clarification + '</p>';
	}
	//3.11 Closes inner and side divs
	detailshtml += '<br></div></div>';
	}
	//Closes result-player-yy
	detailshtml += '</div><!-- result-popup -->';

	}//loop users end

	//Closes html
	detailshtml += '</div><!-- result-box --></div><!-- result-fullscreen -->';

	//adds to body
	$('body').prepend(detailshtml);
	$('#result-fullscreen').hide();
};


/* ==========================
   RANDOMIZER-BUTTONS
   ========================== */

//START BTN is clicked
$('#randomizer-start').on('click', function(){
	//If Game Count is 0 change label to restart
	if(game.count === 0){
		$(this).text("Restart");
	}
	//If Game Count dif 0 reset all
	if(game.count !== 0){
		resetAll();
	}
	//Go to Randomizer Page 1
	location.href = "#randomizer-1";
	//Adds to Game Count
	game.count++;
	//gotoFirst Page
	btnNext();
	//populate array with json(js object) of all wonders
	for (var i in allWonders){
		//adds all codes to allCodes
		allCodes.push(allWonders[i].code);
	}

});

//NEXT BTN is clicked
$('body').on('click', '.btn-next', btnNext);

//BACK BTN is clicked
$('body').on('click', '.btn-back', btnBack);

//ANY NUMBER OF PLAYER is clicked
$('.randomizer-numplayers').on('click', 'li', function(){
	//creates variables click and selected
	var click = parseInt(this.id),
	selected = 'btn-selected';
	//if button does NOT have Selected class, call alerts
	if(!$(this).hasClass(selected)){
		//if 2 players are selected, alert
		if (click == 2){
			popupalert(1);
		//if 8 players are selected, alert
	} else if (click == 8){
		popupalert(2);
	} 
} 
	//adds or removes Selected style
	$(this).toggleClass(selected);
	//removes Selected style from all siblings
	$(this).siblings().removeClass(selected);
	//if value already equal to number of players
	if (click == game.numPlayers){
		//disable next
		$(".btn-next-1").addClass('btn-disabled').removeClass('btn-next');
		//clear numPlayers
		game.numPlayers = 0;
	} else if (click == 2 && game.numPlayers === 0) {
		//add value to game
		game.numPlayers = 3;
		//enable Next button
		btnNextActivation(game.numPlayers);
	} else if (click == 2 && game.numPlayers == 3 && game.freeCity === true){
		//disable next
		$(".btn-next-1").addClass('btn-disabled').removeClass('btn-next');
		//clear numPlayers
		game.numPlayers = 0;
	} else {
		//add value to game
		game.numPlayers = click;
		//enable Next button
		btnNextActivation(game.numPlayers);
	}
	
	//if it's not 2 or 8, enable Next btn
	if (click==2||click==8){}else{
		btnNext();
	}
	//updates Wonders Needed count and Wonders On
	$("#wondersneeded").text(game.numPlayers);
	//if 2 players, 
	if (click == 2) {
		//activates freeCity
		game.freeCity = !game.freeCity;
	}
	console.log('FreeCity: ' + game.freeCity);
	console.log('Number of Players: ' + game.numPlayers);
});

//ANY SIDE BUTTON is clicked
$('.randomizer-wondesides').on('click', 'li', function(){
	//creates variable click and selected
	var click = parseInt(this.id.slice(5));
	var selected = 'btn-selected';
	//if button does NOT have Selected class, call alerts
	if(!$(this).hasClass(selected)){
		//if Player's choice are selected, alert
		if (click === 0){
			popupalert(3);
		} 
	} 
	//adds or removes Selected style
	$(this).toggleClass(selected);
	//removes Selected style from all siblings
	$(this).siblings().removeClass(selected);
	//add value to game
	game.side = click;
	//enable Next button
	btnNextActivation(game.side);
	//if it's not 2 or 8, enable Next btn
	if (click === 0){}else{
		btnNext();
	}

	console.log('Wonder Side: ' + game.side);
});

//ANY EXPANSION BUTTON is clicked
$('.randomizer-expansions').on('click', 'li', function(){
	//creates variable click and selected
	var click = parseInt(this.id.slice(3)),
	selected = 'btn-selected',
	exp = game.expansions;

	//if has selected class, removes from array
	if($(this).hasClass(selected)){
		console.log("Removing... " + click);
		exp.splice($.inArray(click, exp),1);
	//else adds to array
} else {
	exp.push(click);
}
	//toggle Selected style
	$(this).toggleClass(selected);
	//if its an 8 player game
	if(game.numPlayers == 8){
		console.log("Game is for 8.");
		//unable next button
		$(".btn-next-3").addClass("btn-disabled").removeClass("btn-next");
		//check if cities or sailors is in array
		if($.inArray(7, exp)>-1||$.inArray(2, exp)>-1){
		//enable Next
		btnNextActivation(exp);	
		console.log("It has Sailors or Cities!");
	} else {
			//activate Alert
			popupalert(5);			
		}
		//if its not a 8player game enable next button
	}
	console.log('Expansions: ' + exp);
});

//ANY OPTION BUTTON is clicked
$('.randomizer-options').on('click', 'li', function(){
	//creates variable click and selected
	var click = parseInt(this.id.slice(6)),
	selected = 'btn-checkbox-selected';
	if(click==1){
		$("#option1 div:first-child").toggleClass(selected);
		game.option1 = !game.option1;
		console.log('Option: Only Materials Toggled.');
	} else if(click==2){
		$("#option2 div:first-child").toggleClass(selected);
		game.option2 = !game.option2;
		console.log('Option: Balanced Initial Resources Toggled.');
	} else if(click==3){
		$("#option3 div:first-child").toggleClass(selected);
		game.option3 = !game.option3;
		console.log('Option: Only 3 Stages Toggled.');
	}

});

//ANY WONDER BUTTON is clicked
$('.randomizer-wonders').on('click', 'li', function(){
	//creates variable click and selected
	var click = parseInt(this.id.slice(3)),
	selected = 'btn-selected',
	wond = game.wonders;

	//if has 'selected' class, adds to array
	if($(this).hasClass(selected)){
		wond.splice($.inArray(click, wond),1);
	//eslse removes from array
} else {
	wond.push(click);
}
	//adds or removes Selected style
	$(this).toggleClass(selected);
	
	//??
	wondersOn();
	//updates WondersOn number
	$("#wonderson").text(finalWonders.length);
	//if number of wonders selected is larger then wonders needed
	if (finalWonders.length >= game.numPlayers){
		//enable Next button if any button was clicked
		$(".btn-results").removeClass("btn-disabled").addClass("btn-next");
	} else {
		$(".btn-results").addClass("btn-disabled").removeClass("btn-next");
	}	
	console.log('Wonders: ' + wond);

});

//BUTTON RESULT is clicked
$('.btn-results').on('click', function(){
	//timeline
	//shrinks active	
	$('#slot-active').animate({
		left: 80 + "vw",
		width: 0 + "vw"
	});	
	//wait 3 seconds for animation
	setTimeout(function() {
		console.log("Randomization Complete!");
      	//run randomize results
      	randomization();
      	location.href = "#randomizer-7";
      }, 2000);
   	//shows Results button at Home
   	$('#randomizer-results').show();

   });

$('#randomizer-results').on('click', function(){
	location.href = "#randomizer-7";
});
$('#randomizer-done').on('click', function(){
	location.href = "#randomizer";
});
$('#randomizer-again').on('click', function(){
	//gost to Randomizer Gif Page
	location.href = "#randomizer-6";
	//after 2 seconds
	setTimeout(function() {
		console.log("Randomizing again!");
		//clear previous result
		$('.wonder-player-image').text('');
		$('.wonder-player-label').text('');
      	//run randomize results again
      	randomization();
      	location.href = "#randomizer-7";
      }, 2000);
});


//Results Clicks

//CREATE HIDDEN DETAILS

$('#final-results li').on('click', function(){
	console.log('this worked');
	var click = this.id.slice(7);
	//opens result popup window
	$('#result-fullscreen').show();
	//deselect any tab
	$('#result-header div').removeClass('tab-selected');
	//selects tab based on number clicked
	$('#tab'+click).addClass('tab-selected');
	//hides all popup results
	$('.result-popup').hide();
	//shows only clicked popup
	$('#result-player-' + click).show();
});

$('body').on('click', '.tab', function(){
	var click = this.id.slice(3);
	$('.result-popup').hide();
	/*var showing = '#result-player-' + click;*/
	$('#result-player-' + click).show();
	//deselect any tab
	$('#result-header div').removeClass('tab-selected');
	//selects tab based on number clicked
	$('#tab'+click).addClass('tab-selected');
});

$('body').on('click', '#close', function(){
	$('#result-fullscreen').fadeOut('fast');

});

/* ==========================
   SCORE SHEET
   ========================== */




   /* ==========================
   CARD SEARCH
   ========================== */



/* ==========================
   MAIN BUTTONS
   ========================== */

	//HOME BUTTONS
	$('.btn-home').on('click', function(){
   //removes 'activate-' from id
   var link = this.id.slice(9);
   //goes to anchor
   location.href = "#" + link;

   //Hides Home
   $('#home').fadeOut('fast');

   //show return button
   $('#btn-return').fadeIn('slow');

   //For Randomizer
   if (link === "randomizer"){
   		//show logo
   		$('#randomizer-logo').fadeIn('slow');
      	//resets timeline
      	$('#slot-visited').css("width", "0vw");
      	$('#slot-active').css("width", "0vw");
      } 
   //For Score Sheet
   else if (link === "scoresheet"){
   	console.log("Score Sheet Activated");
   }
   //For Card Search
   else if (link === "cardsearch"){
   	console.log("Card Search Activated");
   }
});

	//RETURN BUTTON
	$('#btn-return').on('click', function(){
	//removes current screen
	location.href = '#home';
	//shows home
	$('#home').fadeIn('slow');
	//hides randomizer logo
	$('#randomizer-logo').fadeOut('slow');
	//hides return button
	$('#btn-return').fadeOut('fast');

});
	//CLOSE ALERTS
	$('body').on('click', '#alert-fullscreen', function(){
		$('#alert-fullscreen').fadeOut(1000);

	});