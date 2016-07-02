var allWonders = [
  {
    "code":90011503,
    "name":"Alexandria",
    "fullname":"The Lighthouse of Alexandria",
    "expansion":"Base",
    "side":"A",
    "oppositeside":90012503,
    "exclusive":"any",
    "resource":"glass",
    "stages":3,
    "resourceinfo":"Produces 1 Glass.",
    "price1":["stone", "stone"],
    "stage1":"Grants 3 VP.",
    "price2":["ore", "ore"],
    "stage2":"The player gains a resource of their choice from the 4 Raw material types (Stone, Clay, Wood, Ore) every turn.",
    "price3":["glass", "glass"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":90012503,
    "name":"Alexandria",
    "fullname":"The Lighthouse of Alexandria",
    "expansion":"Base",
    "side":"B",
    "oppositeside":90011503,
    "exclusive":"any",
    "resource":"glass",
    "stages":3,
    "resourceinfo":"Produces 1 Glass.",
    "price1":["brick", "brick"],
    "stage1":"Grants 1 Raw Resource per turn.",
    "price2":["wood", "wood"],
    "stage2":"Grants 1 Manufactured Good per turn.",
    "price3":["stone", "stone", "stone"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":90021103,
    "name":"Babylon",
    "fullname":"The Hanging Gardens of Babylon",
    "expansion":"Base",
    "side":"A",
    "oppositeside":90022103,
    "exclusive":"any",
    "resource":"brick",
    "stages":3,
    "resourceinfo":"Produces 1 Brick.",
    "price1":["brick", "brick"],
    "stage1":"Grants 3 VP.",
    "price2":["wood", "wood", "wood"],
    "stage2":"At the end of the game, the player gains an extra scientific symbol of their choice.",
    "price3":["brick", "brick", "brick", "brick"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":90022103,
    "name":"Babylon",
    "fullname":"The Hanging Gardens of Babylon",
    "expansion":"Base",
    "side":"B",
    "oppositeside":90021103,
    "exclusive":"any",
    "resource":"brick",
    "stages":3,
    "resourceinfo":"Produces 1 Brick.",
    "price1":["textile", "brick"],
    "stage1":"Grants 3 VP.",
    "price2":["glass", "wood", "wood"],
    "stage2":"Play must play the last card of each age.",
    "price3":["brick", "brick", "brick", "papyrus"],
    "stage3":"At the end of the game, the player gains an extra scientific symbol of their choice.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":90031603,
    "name":"Ephesus",
    "fullname":"The Temple of Arthemis in Ephesus",
    "expansion":"Base",
    "side":"A",
    "oppositeside":90032603,
    "exclusive":"any",
    "resource":"papyrus",
    "stages":3,
    "resourceinfo":"Produces 1 Papyrus.",
    "price1":["stone", "stone"],
    "stage1":"Grants 3 VP.",
    "price2":["wood", "wood"],
    "stage2":"The player takes 9 coins from the bank once.",
    "price3":["papyrus", "papyrus"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":90032603,
    "name":"Ephesus",
    "fullname":"The Temple of Arthemis in Ephesus",
    "expansion":"Base",
    "side":"B",
    "oppositeside":90031603,
    "exclusive":"any",
    "resource":"papyrus",
    "stages":3,
    "resourceinfo":"Produces 1 Papyrus.",
    "price1":["stone", "stone"],
    "stage1":"Grants 2 VP and 4 coins once.",
    "price2":["wood", "wood"],
    "stage2":"Grants 3 VP and 4 coins once.",
    "price3":["papyrus", "textile", "glass"],
    "stage3":"Grants 5 VP and 4 coins once.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":90041303,
    "name":"Giza",
    "fullname":"The Pyramids of Giza",
    "expansion":"Base",
    "side":"A",
    "oppositeside":90042304,
    "exclusive":"any",
    "resource":"stone",
    "stages":3,
    "resourceinfo":"Produces 1 Stone.",
    "price1":["stone", "stone"],
    "stage1":"Grants 3 VP.",
    "price2":["wood", "wood", "wood"],
    "stage2":"Grants 5 VP.",
    "price3":["stone", "stone", "stone", "stone"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":90042304,
    "name":"Giza",
    "fullname":"The Pyramids of Giza",
    "expansion":"Base",
    "side":"B",
    "oppositeside":90041303,
    "exclusive":"any",
    "resource":"stone",
    "stages":4,
    "resourceinfo":"Produces 1 Stone.",
    "price1":["wood", "wood"],
    "stage1":"Grants 3 VP.",
    "price2":["stone", "stone", "stone"],
    "stage2":"Grants 5 VP.",
    "price3":["brick", "brick", "brick"],
    "stage3":"Grants 5 VP.",
    "price4":["papyrus", "stone", "stone", "stone", "stone"],
    "stage4":"Grants 7 VP.",
    "clarification":null
  },
  {
    "code":90051703,
    "name":"Halicarnassus",
    "fullname":"The Mausoleum of Halicarnassus",
    "expansion":"Base",
    "side":"A",
    "oppositeside":90052703,
    "exclusive":"any",
    "resource":"textile",
    "stages":3,
    "resourceinfo":"Produces 1 Textile.",
    "price1":["brick", "brick"],
    "stage1":"Grants 3 VP.",
    "price2":["ore", "ore", "ore"],
    "stage2":"Player may choose one discarded card and play it for free now.",
    "price3":["textile", "textile"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":90052703,
    "name":"Halicarnassus",
    "fullname":"The Mausoleum of Halicarnassus",
    "expansion":"Base",
    "side":"B",
    "oppositeside":90051703,
    "exclusive":"any",
    "resource":"textile",
    "stages":3,
    "resourceinfo":"Produces 1 Textile.",
    "price1":["ore", "ore"],
    "stage1":"Grants 2 VP and player may choose one discarded card and play it for free now.",
    "price2":["brick", "brick", "brick"],
    "stage2":"Grants 1 VP and player may choose one discarded card and play it for free now.",
    "price3":["papyrus", "textile", "glass"],
    "stage3":"Player may choose one discarded card and play it for free now.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":90061403,
    "name":"Olympia",
    "fullname":"The Statue of Zeus in Olympia",
    "expansion":"Base",
    "side":"A",
    "oppositeside":90062403,
    "exclusive":"any",
    "resource":"wood",
    "stages":3,
    "resourceinfo":"Produces 1 Wood.",
    "price1":["wood", "wood"],
    "stage1":"Grants 3 VP.",
    "price2":["stone", "stone"],
    "stage2":"The player can, once per Age, build a structure of their hand for free.",
    "price3":["ore", "ore"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":90062403,
    "name":"Olympia",
    "fullname":"The Statue of Zeus in Olympia",
    "expansion":"Base",
    "side":"B",
    "oppositeside":90061403,
    "exclusive":"any",
    "resource":"wood",
    "stages":3,
    "resourceinfo":"Produces 1 Wood.",
    "price1":["wood", "wood"],
    "stage1":"Allows purchasing of Raw Materials from neighboring cities for 1 coin.",
    "price2":["stone", "stone"],
    "stage2":"Grants 5 VP.",
    "price3":["textile", "ore", "ore"],
    "stage3":"Copy a Guild card from a neighbour.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":90071203,
    "name":"Rhodes",
    "fullname":"The Colossus of Rhodes",
    "expansion":"Base",
    "side":"A",
    "oppositeside":90072202,
    "exclusive":"any",
    "resource":"ore",
    "stages":3,
    "resourceinfo":"Produces 1 Ore.",
    "price1":["wood", "wood"],
    "stage1":"Grants 3 VP.",
    "price2":["brick", "brick", "brick"],
    "stage2":"The player adds 2 Shields to their total in each conflict resolution.",
    "price3":["ore", "ore", "ore", "ore"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":90072202,
    "name":"Rhodes",
    "fullname":"The Colossus of Rhodes",
    "expansion":"Base",
    "side":"B",
    "oppositeside":90071203,
    "exclusive":"any",
    "resource":"ore",
    "stages":2,
    "resourceinfo":"Produces 1 Ore.",
    "price1":["stone", "stone", "stone"],
    "stage1":"Grants 1 Military shield, 3 VP and 3 coins (once).",
    "price2":["ore", "ore", "ore", "ore"],
    "stage2":"Grants 1 Military shield, 4 VP and 4 coins (once).",
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":91011912,
    "name":"Rome",
    "fullname":"The Colosseum in Rome",
    "expansion":"Leaders",
    "side":"A",
    "oppositeside":91012913,
    "exclusive":"leaders",
    "resource":"other",
    "stages":2,
    "resourceinfo":"Recruit Leaders for free.",
    "price1":["brick", "wood", "ore"],
    "stage1":"Grants 4 VP.",
    "price2":["stone", "stone", "textile", "brick"],
    "stage2":"Grants 6 VP.",
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":91012913,
    "name":"Rome",
    "fullname":"The Colosseum in Rome",
    "expansion":"Leaders",
    "side":"B",
    "oppositeside":91011912,
    "exclusive":"leaders",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Recruit Leaders for less 2 coins, and neighbours for less 1 coin.",
    "price1":["brick", "wood"],
    "stage1":"Grants 5 coins and 4 new random leaders.",
    "price2":["textile", "stone", "brick"],
    "stage2":"Grants 3 VP plus draws and plays a leader, paying its cost less 2.",
    "price3":["papyrus", "stone", "stone"],
    "stage3":"Same as II.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":92011323,
    "name":"Byzantium",
    "fullname":"The Hagia Sophia in Byzantium",
    "expansion":"Cities",
    "side":"A",
    "oppositeside":92012322,
    "exclusive":"cities",
    "resource":"stone",
    "stages":3,
    "resourceinfo":"Produces 1 Stone.",
    "price1":["ore", "brick"],
    "stage1":"Grants 3 VP.",
    "price2":["papyrus", "wood", "wood"],
    "stage2":"Grants 2 VP and 1 Diplomacy token.",
    "price3":["glass", "textile", "brick", "brick"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":92012322,
    "name":"Byzantium",
    "fullname":"The Hagia Sophia in Byzantium",
    "expansion":"Cities",
    "side":"B",
    "oppositeside":92011323,
    "exclusive":"cities",
    "resource":"stone",
    "stages":2,
    "resourceinfo":"Produces 1 Stone.",
    "price1":["glass", "ore", "papyrus", "wood"],
    "stage1":"Grants 3 VP and 1 Diplomacy token.",
    "price2":["brick", "textile", "ore", "ore"],
    "stage2":"Grants 4 VP and 1 Diplomacy token.",
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":92021103,
    "name":"Petra",
    "fullname":"The Al Khazneh in Petra",
    "expansion":"Cities",
    "side":"A",
    "oppositeside":92022122,
    "exclusive":"any",
    "resource":"brick",
    "stages":3,
    "resourceinfo":"Produces 1 Brick.",
    "price1":["wood", "stone"],
    "stage1":"Grants 3 VP.",
    "price2":["7coin"],
    "stage2":"Grants 7 VP.",
    "price3":["wood", "papyrus", "stone", "stone"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":92022122,
    "name":"Petra",
    "fullname":"The Al Khazneh in Petra",
    "expansion":"Cities",
    "side":"B",
    "oppositeside":92021103,
    "exclusive":"cities",
    "resource":"brick",
    "stages":2,
    "resourceinfo":"Produces 1 Brick.",
    "price1":["brick", "brick", "ore", "ore"],
    "stage1":"Grants 3 VP, and every other player loses 2 coins.",
    "price2":["14coin"],
    "stage2":"Grants 14 VP.",
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":93011613,
    "name":"Abu Simbel",
    "fullname":"Abu Simbel",
    "expansion":"Wonder Pack",
    "side":"A",
    "oppositeside":93012612,
    "exclusive":"leaders",
    "resource":"papyrus",
    "stages":3,
    "resourceinfo":"Produces 1 Papyrus.",
    "price1":["stone", "brick"],
    "stage1":"Grants 3 VP.",
    "price2":["wood", "ore"],
    "stage2":"Grants 5 VP.",
    "price3":["stone", "stone", "glass", "textile"],
    "stage3":"Select one of your played Leaders and place it face down on the right of your board. This cancels the leader effect, but grants double its cost in VP at the end of the game.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":93012612,
    "name":"Abu Simbel",
    "fullname":"Abu Simbel",
    "expansion":"Wonder Pack",
    "side":"B",
    "oppositeside":93011613,
    "exclusive":"leaders",
    "resource":"papyrus",
    "stages":2,
    "resourceinfo":"Produces 1 Papyrus.",
    "price1":["textile", "brick", "brick"],
    "stage1":"Select one of your played Leaders and place it face down on the right of your board. This cancels the leader effect, but grants double its cost in VP at the end of the game.",
    "price2":["glass", "wood", "wood"],
    "stage2":"Same as I.",
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":93021803,
    "name":"Brussel",
    "fullname":"Manneken Pin in Brussel",
    "expansion":"Wonder Pack",
    "side":"A",
    "oppositeside":93022801,
    "exclusive":"any",
    "resource":"money",
    "stages":3,
    "resourceinfo":"Grants 4 additional coins at the beginning of the game.",
    "price1":["brick", "stone"],
    "stage1":"Copies the effect of the first Stage of your left neighbouring city.",
    "price2":["ore", "wood"],
    "stage2":"Copies the effect of the second Stage of your right neighbouring city.",
    "price3":["papyrus", "textile", "glass"],
    "stage3":"Copies the effect of the third Stage of any neighbouring city.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":93022801,
    "name":"Brussel",
    "fullname":"Manneken Pin in Brussel",
    "expansion":"Wonder Pack",
    "side":"B",
    "oppositeside":93021803,
    "exclusive":"any",
    "resource":"money",
    "stages":1,
    "resourceinfo":"Grants 4 additional coins at the beginning of the game.",
    "price1":["ore", "brick", "textile", "wood", "stone", "glass", "papyrus"],
    "stage1":"Grants 7 coins, 7 VP, 1 Military shield and a beer.",
    "price2":null,
    "stage2":null,
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":93031923,
    "name":"Catan",
    "fullname":"Catan",
    "expansion":"Wonder Pack",
    "side":"A",
    "oppositeside":93032912,
    "exclusive":"cities",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Allows trading 2 identical resources for 1 resource of your choice.",
    "price1":["brick", "wood"],
    "stage1":"Grants 3 VP.",
    "price2":["ore", "ore", "ore"],
    "stage2":"Grants 7 coins and every other player loses 2 coins.",
    "price3":["stone", "stone", "glass", "papyrus"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":93032912,
    "name":"Catan",
    "fullname":"Catan",
    "expansion":"Wonder Pack",
    "side":"B",
    "oppositeside":93031923,
    "exclusive":"leaders",
    "resource":"other",
    "stages":2,
    "resourceinfo":"Allows trading 2 identical resources for 1 resource of your choice.",
    "price1":["wood", "textile"],
    "stage1":"Player draws and plays a leader, paying its cost.",
    "price2":["ore", "ore", "ore", "papyrus"],
    "stage2":"Grants 5 VP and 2 Military shields.",
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":93041403,
    "name":"Stonehenge",
    "fullname":"Stonehenge",
    "expansion":"Wonder Pack",
    "side":"A",
    "oppositeside":93042402,
    "exclusive":"any",
    "resource":"wood",
    "stages":3,
    "resourceinfo":"Produces 1 Wood.",
    "price1":["ore", "brick"],
    "stage1":"Grants 3 VP.",
    "price2":["papyrus", "brick", "brick"],
    "stage2":"Grants 5 VP.",
    "price3":["wood", "wood", "wood", "textile"],
    "stage3":"Grants 2 VP per Stone resource.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":93042402,
    "name":"Stonehenge",
    "fullname":"Stonehenge",
    "expansion":"Wonder Pack",
    "side":"B",
    "oppositeside":93041403,
    "exclusive":"any",
    "resource":"wood",
    "stages":2,
    "resourceinfo":"Produces 1 Wood.",
    "price1":["ore", "ore", "ore"],
    "stage1":"Grants 1 coin (imeditially) and 1 VP per Stone resource.",
    "price2":["brick", "brick", "brick", "papyrus"],
    "stage2":"Grants 1 VP per card of the same color of the card used to build this stage that your neighboring cities have.",
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":93051704,
    "name":"The Great Wall",
    "fullname":"The Great Wall of China",
    "expansion":"Wonder Pack",
    "side":"A",
    "oppositeside":93052724,
    "exclusive":"any",
    "resource":"textile",
    "stages":4,
    "resourceinfo":"Produces 1 Textile.",
    "price1":["wood", "wood"],
    "stage1":"Grants 8 coins.",
    "price2":["papyrus", "glass", "brick"],
    "stage2":"At the end of the game, the player gains an extra scientific symbol of their choice.",
    "price3":["stone", "stone", "stone"],
    "stage3":"Grants 2 Military shields",
    "price4":["ore", "ore", "ore"],
    "stage4":"Player must play a discarded card for free.",
    "clarification":null
  },
  {
    "code":93052724,
    "name":"The Great Wall",
    "fullname":"The Great Wall of China",
    "expansion":"Wonder Pack",
    "side":"B",
    "oppositeside":93051704,
    "exclusive":"cities",
    "resource":"textile",
    "stages":4,
    "resourceinfo":"Produces 1 Textile.",
    "price1":["papyrus", "wood"],
    "stage1":"Grants 8 coins for you and 2 for each neighbouring city.",
    "price2":["ore", "brick", "brick"],
    "stage2":"At the end of the game, the player copies an extra scientific symbol of their neighbors.",
    "price3":["papyrus", "wood", "wood"],
    "stage3":"Grants a Diplomacy Token and every other player loses 2 coins.",
    "price4":["stone", "stone"],
    "stage4":"Player can produce a resource that it doesn't play at all.",
    "clarification":null
  },
  {
    "code":94011943,
    "name":"Babel",
    "fullname":"The Tower of Babel",
    "expansion":"Babel",
    "side":"A",
    "oppositeside":94012942,
    "exclusive":"babel",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Allows taking one extra tile of the Babel Tower.",
    "price1":["ore", "stone"],
    "stage1":"Grants 3 VP.",
    "price2":["2coin", "papyrus"],
    "stage2":"Play one tile on your board (Red: effect applies to opponents only; Green: effect applies to you only)",
    "price3":["stone", "stone", "ore", "ore"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":94012942,
    "name":"Babel",
    "fullname":"The Tower of Babel",
    "expansion":"Babel",
    "side":"B",
    "oppositeside":94011943,
    "exclusive":"babel",
    "resource":"other",
    "stages":2,
    "resourceinfo":"Allows taking one extra tile of the Babel Tower.",
    "price1":["2coin", "textile", "brick"],
    "stage1":"Grants 3 VP plus play one tile on your board that will apply to all opponents.",
    "price2":["2coin", "glass", "wood"],
    "stage2":"Grants 3 VP plus play one tile on your board that will apply to you only.",
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":95011453,
    "name":"Ithake",
    "fullname":"Ithake",
    "expansion":"Myths",
    "side":"A",
    "oppositeside":95012452,
    "exclusive":"myth",
    "resource":"wood",
    "stages":3,
    "resourceinfo":"Produces 1 Wood.",
    "price1":["glass", "wood"],
    "stage1":"Grants 3 VP.",
    "price2":["papyrus", "wood", "wood"],
    "stage2":"Player may invoke 2 myths on age III, instead of 1.",
    "price3":["wood", "wood", "glass", "stone"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":95012452,
    "name":"Ithake",
    "fullname":"Ithake",
    "expansion":"Myths",
    "side":"B",
    "oppositeside":95011453,
    "exclusive":"myth",
    "resource":"wood",
    "stages":2,
    "resourceinfo":"Produces 1 Wood.",
    "price1":["glass", "brick", "wood"],
    "stage1":"Grants 3 VP and player may invoke 2 myths on age II, instead of 1.",
    "price2":["wood", "wood", "stone", "glass", "brick"],
    "stage2":"Grants 4 VP and player may invoke 2 myths on age III, instead of 1.",
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":95021123,
    "name":"Tartaros",
    "fullname":"Tartaros",
    "expansion":"Myths",
    "side":"A",
    "oppositeside":95022103,
    "exclusive":"cities",
    "resource":"brick",
    "stages":3,
    "resourceinfo":"Produces 1 Brick.",
    "price1":["age1"],
    "stage1":"Grants 2 VP.",
    "price2":["age2"],
    "stage2":"Grants 4 VP and every other player loses 1 coin.",
    "price3":["age3"],
    "stage3":"Grants 6 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":95022103,
    "name":"Tartaros",
    "fullname":"Tartaros",
    "expansion":"Myths",
    "side":"B",
    "oppositeside":95021123,
    "exclusive":"any",
    "resource":"brick",
    "stages":3,
    "resourceinfo":"Produces 1 Brick.",
    "price1":["age3"],
    "stage1":"Grants 6 VP.",
    "price2":["age3"],
    "stage2":"Grants 6 VP.",
    "price3":["age3"],
    "stage3":"Grants 6 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":96031963,
    "name":"Ourouk",
    "fullname":"Ziggurat in Ourouk",
    "expansion":"Ruins",
    "side":"A",
    "oppositeside":96032963,
    "exclusive":"ruins",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Neighbours must play their 4th ruin.",
    "price1":["ore", "wood"],
    "stage1":"Grants 3 VP.",
    "price2":["stone", "brick", "brick"],
    "stage2":"Grants 3 coins per unbuilt Wonder stage of your neighbors at this moment.",
    "price3":["papyrus", "stone", "wood"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":96032963,
    "name":"Ourouk",
    "fullname":"Ziggurat in Ourouk",
    "expansion":"Ruins",
    "side":"B",
    "oppositeside":96031963,
    "exclusive":"ruins",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Neighbours must play their 4th ruin.",
    "price1":["ore", "stone"],
    "stage1":"Neighboring cities must pay you one coin whenever they build a stage.",
    "price2":["papyrus", "wood"],
    "stage2":"Destroys the last stage of wonder of neighboring cities.",
    "price3":["textile", "stone", "wood"],
    "stage3":"Grants 4 VP per unbuilt stages of neighboring cities at the end of the game",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":96041963,
    "name":"Sinope",
    "fullname":"Serapeaum in Sinope",
    "expansion":"Ruins",
    "side":"A",
    "oppositeside":96042962,
    "exclusive":"ruins",
    "resource":"other",
    "stages":3,
    "resourceinfo":"You have one extra Ruin for every draft run.",
    "price1":["stone", "brick"],
    "stage1":"Grants 3 VP.",
    "price2":["ore", "ore", "wood"],
    "stage2":"Grants 1 reconstruction token.",
    "price3":["3coin", "stone", "wood"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":96042962,
    "name":"Sinope",
    "fullname":"Serapeaum in Sinope",
    "expansion":"Ruins",
    "side":"B",
    "oppositeside":96041963,
    "exclusive":"ruins",
    "resource":"other",
    "stages":2,
    "resourceinfo":"You have one extra Ruin for every draft run.",
    "price1":["textile", "papyrus", "stone"],
    "stage1":"Grants 2 VP and 1 Reconstruction token.",
    "price2":["4coin", "glass", "ore"],
    "stage2":"Grants 3 VP and 1 Reconstruction token.",
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":96051963,
    "name":"Turos",
    "fullname":"Necropolis in Turos",
    "expansion":"Ruins",
    "side":"A",
    "oppositeside":96052963,
    "exclusive":"ruins",
    "resource":"other",
    "stages":3,
    "resourceinfo":"You play 1 ruin less.",
    "price1":["wood", "brick"],
    "stage1":"Grants 3 VP.",
    "price2":["glass", "ore"],
    "stage2":"Deletes one of your Ruins.",
    "price3":["papyrus", "textile"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":96052963,
    "name":"Turos",
    "fullname":"Necropolis in Turos",
    "expansion":"Ruins",
    "side":"B",
    "oppositeside":96051963,
    "exclusive":"ruins",
    "resource":"other",
    "stages":3,
    "resourceinfo":"You play 1 ruin less.",
    "price1":["ore", "brick"],
    "stage1":"Exchange one Ruin with the discarded ones.",
    "price2":["ore", "wood"],
    "stage2":"Grants 5 VP.",
    "price3":["glass", "stone", "stone"],
    "stage3":"Both neighboring cities take an additional ruin.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":97011973,
    "name":"Amathous",
    "fullname":"Agora in Amathous",
    "expansion":"Sailors",
    "side":"A",
    "oppositeside":97012973,
    "exclusive":"sailors",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Eliminates coin cost of Orange cards.",
    "price1":["ore", "brick"],
    "stage1":"Grants 3 VP.",
    "price2":["4coin"],
    "stage2":"Take 1 unused orange card of each age, play 1 for free, discard the rest.",
    "price3":["papyrus", "stone", "stone"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":97012973,
    "name":"Amathous",
    "fullname":"Agora in Amathous",
    "expansion":"Sailors",
    "side":"B",
    "oppositeside":97011973,
    "exclusive":"sailors",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Eliminates coin cost of Orange cards.",
    "price1":["ore", "wood"],
    "stage1":"Grants 3 VP and nobody can invade you.",
    "price2":["glass", "stone", "stone"],
    "stage2":"Grants 1 coin from the bank for each orange card that you and non-neighbouring cities have.",
    "price3":["papyrus", "stone", "textile", "ore"],
    "stage3":"Doubles the VP from one orange card you have.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":97021973,
    "name":"Sidon",
    "fullname":"The Temple of Eshmun in Sidon",
    "expansion":"Sailors",
    "side":"A",
    "oppositeside":97022973,
    "exclusive":"sailors",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Allows maritime trade for 2 coins less.",
    "price1":["brick", "brick"],
    "stage1":"Grants 3 VP.",
    "price2":["papyrus", "ore", "ore"],
    "stage2":"Take 2 unused orange cards of age II, play 1 for free, discard the rest.",
    "price3":["textile", "ore", "brick"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":97022973,
    "name":"Sidon",
    "fullname":"The Temple of Eshmun in Sidon",
    "expansion":"Sailors",
    "side":"B",
    "oppositeside":97021973,
    "exclusive":"sailors",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Allows maritime trade for 2 coins less.",
    "price1":["stone", "stone"],
    "stage1":"Take 2 unused orange cards of age I, play 1 for free, discard the rest.",
    "price2":["papyrus", "wood", "wood"],
    "stage2":"Grants 5 VP.",
    "price3":["textile", "ore", "brick"],
    "stage3":"Take 2 unused orange cards of age III, play 1 for free, discard the rest.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":97031973,
    "name":"Sousa",
    "fullname":"Achaemenid Palace in Sousa",
    "expansion":"Sailors",
    "side":"A",
    "oppositeside":97032973,
    "exclusive":"sailors",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Allows buying Resources from any players as if they were maritime.",
    "price1":["ore", "ore"],
    "stage1":"Grants 3 VP.",
    "price2":["glass", "wood", "wood"],
    "stage2":"Grants 1 VP per orange card you have, and opponents lose 1 coin per orange card they have.",
    "price3":["brick", "brick", "brick"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":97032973,
    "name":"Sousa",
    "fullname":"Achaemenid Palace in Sousa",
    "expansion":"Sailors",
    "side":"B",
    "oppositeside":97031973,
    "exclusive":"sailors",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Allows buying Resources from any players as if they were maritime.",
    "price1":["wood", "wood"],
    "stage1":"Play oranges cards paying 1 resource less.",
    "price2":["textile", "stone", "stone"],
    "stage2":"Grants 1 Invasion token OR 1 Diplomacy Token.",
    "price3":["papyrus", "brick", "brick"],
    "stage3":"Grants 6 VP per set of Yellow, Orange and Red cards.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98011603,
    "name":"Alexandria II",
    "fullname":"The Library of Alexandria (II)",
    "expansion":"Empire",
    "side":"A",
    "oppositeside":98012623,
    "exclusive":"any",
    "resource":"papyrus",
    "stages":3,
    "resourceinfo":"Produces 1 Papyrus.",
    "price1":["wood", "wood"],
    "stage1":"Grants 1 Manufactured Good per turn.",
    "price2":["brick", "brick"],
    "stage2":"Grants 5 VP.",
    "price3":["papyrus", "glass", "textile"],
    "stage3":"Grants 1 coin and 1 VP for each Green card.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98012623,
    "name":"Alexandria II",
    "fullname":"The Library of Alexandria (II)",
    "expansion":"Empire",
    "side":"B",
    "oppositeside":98011603,
    "exclusive":"cities",
    "resource":"papyrus",
    "stages":3,
    "resourceinfo":"Produces 1 Papyrus.",
    "price1":["ore", "ore"],
    "stage1":"Grants 3 VP.",
    "price2":["stone", "stone"],
    "stage2":"At the end of the game, the player copies an extra scientific symbol of their neighbors.",
    "price3":["papyrus", "papyrus", "wood"],
    "stage3":"Every set of 3 scientific symbols grants 4 additional VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98021503,
    "name":"Athenai",
    "fullname":"The Acropolis of Athens (Athenai)",
    "expansion":"Empire",
    "side":"A",
    "oppositeside":98022513,
    "exclusive":"any",
    "resource":"glass",
    "stages":3,
    "resourceinfo":"Produces 1 Glass.",
    "price1":["ore", "ore"],
    "stage1":"Grants 3 VP.",
    "price2":["brick", "brick", "brick"],
    "stage2":"Grants 5 VP.",
    "price3":["glass", "glass"],
    "stage3":"Grants 3 VP per set of Blue, Yellow and Red cards.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98022513,
    "name":"Athenai",
    "fullname":"The Acropolis of Athens (Athenai)",
    "expansion":"Empire",
    "side":"B",
    "oppositeside":98021503,
    "exclusive":"leaders",
    "resource":"glass",
    "stages":3,
    "resourceinfo":"Produces 1 Glass.",
    "price1":["3coin"],
    "stage1":"Allows playing the last card of each age, paying its cost.",
    "price2":["stone", "ore", "wood", "brick"],
    "stage2":"Grants 5 VP per set of Purple, White (Leader) and City cards.",
    "price3":["papyrus", "glass", "textile"],
    "stage3":"Grants 6 VP per set of Brown, Gray, Blue, Yellow, Red and Green cards.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98031303,
    "name":"Babylon II",
    "fullname":"The Walls of Babylon (II)",
    "expansion":"Empire",
    "side":"A",
    "oppositeside":98032382,
    "exclusive":"any",
    "resource":"stone",
    "stages":3,
    "resourceinfo":"Produces 1 Stone.",
    "price1":["ore", "ore"],
    "stage1":"Every defeat token counts as a military shield.",
    "price2":["brick", "brick"],
    "stage2":"Grants 5 VP.",
    "price3":["textile", "stone", "stone", "stone"],
    "stage3":"Grants 3 VP for each set of 2 military shields.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98032382,
    "name":"Babylon II",
    "fullname":"The Walls of Babylon (II)",
    "expansion":"Empire",
    "side":"B",
    "oppositeside":98031303,
    "exclusive":"empire",
    "resource":"stone",
    "stages":2,
    "resourceinfo":"Produces 1 Stone.",
    "price1":["3coin", "brick"],
    "stage1":"Grants 1 Aggression token.",
    "price2":["4coin", "stone", "stone"],
    "stage2":"Grants 1 Aggression token.",
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98041703,
    "name":"Ninue",
    "fullname":"Sennacherib's Palace in Ninevah (Ninue)",
    "expansion":"Empire",
    "side":"A",
    "oppositeside":98042723,
    "exclusive":"any",
    "resource":"textile",
    "stages":3,
    "resourceinfo":"Produces 1 Textile.",
    "price1":["brick", "textile"],
    "stage1":"Allows trading 2 identical resources for 1 resource of your choice.",
    "price2":["wood", "wood"],
    "stage2":"Grants 5 VP.",
    "price3":["textile", "textile", "stone"],
    "stage3":"Grants 2 VP per card of the same color the one used to built this stage.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98042723,
    "name":"Ninue",
    "fullname":"Sennacherib's Palace in Ninevah (Ninue)",
    "expansion":"Empire",
    "side":"B",
    "oppositeside":98041703,
    "exclusive":"cities",
    "resource":"textile",
    "stages":3,
    "resourceinfo":"Produces 1 Textile.",
    "price1":["1coin", "brick"],
    "stage1":"Take 3 unused black cards of age I, play 1 for free, discard the rest.",
    "price2":["2coin", "brick", "ore"],
    "stage2":"Take 3 unused black cards of age II, play 1 for free, discard the rest.",
    "price3":["3coin", "glass", "papyrus"],
    "stage3":"Take 3 unused black cards of age III, play 1 for free, discard the rest.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98051203,
    "name":"Pasapura",
    "fullname":"Apadana Palace in Persepolis (Pasapura)",
    "expansion":"Empire",
    "side":"A",
    "oppositeside":98052203,
    "exclusive":"any",
    "resource":"ore",
    "stages":3,
    "resourceinfo":"Produces 1 Ore.",
    "price1":["stone", "stone"],
    "stage1":"Grants 3 VP.",
    "price2":["ore", "ore", "ore"],
    "stage2":"Grants 1 VP per chain of 2 cards.",
    "price3":["glass", "wood", "wood"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98052203,
    "name":"Pasapura",
    "fullname":"Apadana Palace in Persepolis (Pasapura)",
    "expansion":"Empire",
    "side":"B",
    "oppositeside":98051203,
    "exclusive":"any",
    "resource":"ore",
    "stages":3,
    "resourceinfo":"Produces 1 Ore.",
    "price1":["ore", "ore"],
    "stage1":"Produces one resource that the city doesn't produce at all.",
    "price2":["brick", "brick", "brick"],
    "stage2":"Grants 5 VP.",
    "price3":["ore", "ore", "ore", "wood", "stone"],
    "stage3":"Grants 4 VP for every complete chain (3 cards).",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98061403,
    "name":"Pergamon",
    "fullname":"The Great Altar of Pergamon",
    "expansion":"Empire",
    "side":"A",
    "oppositeside":98062403,
    "exclusive":"any",
    "resource":"wood",
    "stages":3,
    "resourceinfo":"Produces 1 Wood.",
    "price1":["wood", "wood"],
    "stage1":"Grants 3 VP.",
    "price2":["ore", "ore", "stone"],
    "stage2":"Grants 1 VP per Defeat token.",
    "price3":["textile", "stone", "stone"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98062403,
    "name":"Pergamon",
    "fullname":"The Great Altar of Pergamon",
    "expansion":"Empire",
    "side":"B",
    "oppositeside":98061403,
    "exclusive":"any",
    "resource":"wood",
    "stages":3,
    "resourceinfo":"Produces 1 Wood.",
    "price1":["glass", "wood"],
    "stage1":"Grants 5 VP minutes the number of Victory Tokens.",
    "price2":["papyrus", "ore", "ore"],
    "stage2":"During Conflict Resolution, all Defeat Tokens of this player are giving to Victorious neighbors. ",
    "price3":["wood", "wood", "wood"],
    "stage3":"Grants 1 VP for each Victory Tokens the neighboring cities have.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98071983,
    "name":"Roma II",
    "fullname":"The Pantheon of Rome (II)",
    "expansion":"Empire",
    "side":"A",
    "oppositeside":98072983,
    "exclusive":"empire",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Allows play one Black card for free per age.",
    "price1":["stone", "ore"],
    "stage1":"Grants 3 VP.",
    "price2":["3coin", "ore", "ore"],
    "stage2":"Grants 1 Invasion token OR 1 Diplomacy Token.",
    "price3":["wood", "stone", "stone"],
    "stage3":"Grants 7 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98072983,
    "name":"Roma II",
    "fullname":"The Pantheon of Rome (II)",
    "expansion":"Empire",
    "side":"B",
    "oppositeside":98071983,
    "exclusive":"empire",
    "resource":"other",
    "stages":3,
    "resourceinfo":"Coins from the bank are multiplied by 1.5 (rounded up)",
    "price1":["stone", "stone"],
    "stage1":"Grants 2 VP and Debt Immunity (no need to discard coins to the bank).",
    "price2":["brick", "brick", "ore"],
    "stage2":"Grants 5 VP.",
    "price3":["papyrus", "wood", "wood"],
    "stage3":"Every 3 coins grants one additional VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98081103,
    "name":"Saqqara",
    "fullname":"The Step Pyramid of Djoser in Saqqara",
    "expansion":"Empire",
    "side":"A",
    "oppositeside":98082112,
    "exclusive":"any",
    "resource":"brick",
    "stages":3,
    "resourceinfo":"Produces 1 Brick.",
    "price1":["brick", "brick"],
    "stage1":"Duplicates one resource the city already produces.",
    "price2":["stone", "stone", "wood"],
    "stage2":"Once per age, player may keep their current hand.",
    "price3":["glass", "wood", "stone", "ore"],
    "stage3":"Every Purple card grants 3 VP.",
    "price4":null,
    "stage4":null,
    "clarification":null
  },
  {
    "code":98082112,
    "name":"Saqqara",
    "fullname":"The Step Pyramid of Djoser in Saqqara",
    "expansion":"Empire",
    "side":"B",
    "oppositeside":98081103,
    "exclusive":"leaders",
    "resource":"brick",
    "stages":2,
    "resourceinfo":"Produces 1 Brick.",
    "price1":["brick", "papyrus"],
    "stage1":"Once per turn, player may buy one resource from the bank for 1 coin.",
    "price2":["wood", "wood", "brick", "brick", "stone"],
    "stage2":"Opponents replace one unplayed Leader for a new random one. Player may recruit one of the discarded Leaders for free.",
    "price3":null,
    "stage3":null,
    "price4":null,
    "stage4":null,
    "clarification":null
  }
];