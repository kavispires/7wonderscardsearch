var thehtml = '';

addSymbols = function(arr){
  var temp = '';
  for(var i = 0; i < arr.length; i++){
    temp += '<img class="search-symbol" src="img/symbols/'+ arr[i] + '.png">';
  }
  return temp;
};

$(function(){
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: allCards,
    onSelect: function (suggestion) {
      thehtml = '<div id="search-result"><div id="search-result-header" class="clearfix"><div id="search-result-image"><img src="img/cards_sm/' + suggestion.code + '.jpg"></div><div id="search-result-info"><h3>' + suggestion.value + '</h3><p><b>From: </b>' + suggestion.game + '<br><b>Type: </b>' + suggestion.type + '<br><hr>';
      //if Suggestion has age
      if("age" in suggestion){
        if(suggestion.age !== null){
          thehtml += '<b>Age: </b>' + suggestion.age + '<br>';
        }
      }
      //if Suggestion has players
      if("players" in suggestion){
        if(suggestion.players !== null){
          thehtml += '<b>Players: </b>' + suggestion.players + '<br>';
        }
      }
      //adds <p>
      thehtml += '</p><p>';
      //if Suggestion has biography
      if("biography" in suggestion){
        if(suggestion.biography !== null){
          thehtml += '<i>' + suggestion.biography + '</i><br><hr>';
        }
      }

      //if Suggestion has pantheon
      if("pantheon" in suggestion) {
          thehtml += '<b>' + suggestion.pantheon + '</b><br><hr>';
      }

      //if Suggestion has cost
      if("cost" in suggestion) {
        //creates cost symbols
        var newCost = addSymbols(suggestion.cost);

        thehtml += '<b>Cost: </b>'+ newCost + '</i><br><i>- ' + suggestion.effect +'<br><hr>';
      }

      //if Suggestion has cost1
      if("cost1" in suggestion) {
        //creates cost1 symbols
        var newCost1 = addSymbols(suggestion.cost1);
        thehtml += '<b>Age I Cost: </b>' + newCost1 + '<br><i>- ' + suggestion.effect1;
        //creates cost2 symbols
        var newCost2 = addSymbols(suggestion.cost2);
        thehtml += '</i><br><b>Age II Cost: </b>' + newCost2 + '<br><i>- ' + suggestion.effect2;
        //creates cost3 symbols
        var newCost3 = addSymbols(suggestion.cost3);
        thehtml += '</i><br><b>Age III Cost: </b>' + newCost3 + '<br><i>- ' + suggestion.effect3 + '</i><br><hr>';
      }

      //if Suggestion has clarification
      if("clarification" in suggestion) {
        if(suggestion.clarification !== null){
          thehtml += '<i>Clarification: </i>' + suggestion.clarification + '<br>';
        }
      }

      //if Suggestion has limitation
      if("limitation" in suggestion) {
        if(suggestion.limitation !== null){
          thehtml += '<i>Limited: </i>' + suggestion.limitation + '<br>';
        }
      }

      //if Suggestion has chain
      if("chain" in suggestion) {
        if(suggestion.chain !== null){
          thehtml += '<b>Build for free: </b><i>' + suggestion.chain + '</i><br>';
        }
      }

      //if Suggestion has upgraded
      if("upgraded" in suggestion) {
        if(suggestion.upgraded !== null){
          thehtml += '<b>Free Upgrade if you have: </b><i>' + suggestion.upgraded + '</i><br>';
        }
      }

      //if Type is Ruin
      if(suggestion.type == "Ruin") {
        thehtml += '<b>' + suggestion.effect +'</b><br>';
      }

            //if General info
      if("generalInfo" in suggestion){
        //resets var thehtml completely
        thehtml = '<div id="search-result"><div id="search-result-header" class="clearfix"><div id="search-result-image"><img src="img/cards_sm/' + suggestion.code + '.jpg"></div><div id="search-result-info"><h3>' + suggestion.value + '</h3><p><i>' + suggestion.description + '</i><br>';
        //if symbols are not null
        if(suggestion.symbols !== null){
          addSymbols(suggestion.symbols);
        }
        //adds presence
        thehtml += '<hr>' + suggestion.presence + '<br>';
        //adds backs
        thehtml += addSymbols(suggestion.back);
      }

      //if type is a Tile
      if(suggestion.type == "Tower of Babel Tile") {
        thehtml = '<div id="search-result"><div id="search-result-header" class="clearfix"><div id="search-result-image"><img src="img/tiles_sm/' + suggestion.code + '.jpg"></div><div id="search-result-info"><h3>' + suggestion.value + '</h3><p><i>' + suggestion.description + '</i>';
      }

      //if type is a Great Project Cards
      if(suggestion.type == "Great Project"){
        thehtml = '<div id="search-result"><div id="search-result-header" class="clearfix"><div id="search-result-image"><img src="img/cards_sm/' + suggestion.code + '.jpg"></div><div id="search-result-info"><h3>' + suggestion.value + '</h3><hr><p><b>Age: </b>' + suggestion.age + '<hr><b>Cost: </b>';
        //add card color
        thehtml += '<img class="search-symbol" src="img/symbols/card'+ suggestion.color + '.png"> + ';
        //add cost symbols
        if(suggestion.cost !== null){
          thehtml += addSymbols(suggestion.cost);
        }
          //continues code
        thehtml += '<br><hr><b>Reward: </b>' + suggestion.reward + '<br><b>Penalty: </b>' + suggestion.penalty + '<br><hr><i>If Project is a success, players who participate receive the reward and no one gets the penalty.<br>If Project is a failure, ONLY players who did NOT participate on the project, take its penalty.<br>If on any given turn, more players decide to participate than the number of Participation tokens available, more Participation tokens may be added.</i>';
      }

      //CLOSE divs
      thehtml += '</p></div></div></div>';

      $("#outputcontent").html(thehtml);
    }
  });
});