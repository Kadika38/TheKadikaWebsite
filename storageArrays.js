//arrays

//ALL VISIONS
var visionsArray = [
    {key: "darkvision", description: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."},
];

//ALL RACE TRAITS
//delete test later
var raceTraitsArray = [
    {key: "test", description: "testing", use: function() {
        character.addMoney(50);
    }}
];

//ALL FEATS
var featsArray = [

];

//ALL CLASS FEATURES
var classFeaturesArray = [

];

//race arrays format [name, size, speed, str+, dex+, con+, int+, wis+, cha+, langs, save profs, skill profs, equip profs, tool profs, visions, traits, feats]
//race array minimum size ["", "", 0, [0, 0, 0, 0, 0, 0], [], [], [], [], [], []]
var dwarfArray = ["dwarf", "medium", 25, ["notChoices", 0, 0, 2, 0, 0, 0], ["notChoices", "common", "dwarvish"], ["notChoices"], ["notChoices"], ["notChoices", "battleaxe", "handaxe", "light hammer", "warhammer"], ["smiths tools", "brewers supplies", "masons tools"], ["notChoices", "darkvision"], ["notChoices", "dwarven resilience", "stonecunning"], ["notChoices"]];

//background arrays format [name, skill profs, languages, equip profs, inventory, money]
//background array minimum size ["", [], [], [], [], 0]
var fisherArray = ["fisher", ["notChoices", 5, 17], ["orc", "allOtherLangs"], ["notChoices"], [["notChoices", "fishing tackle", "net", "favorite fishing lure", "travelers clothes"], ["notChoices", "fishing tackle", "net", "oiled leather wading boots", "travelers clothes"]], 10];

//class arrays format [name, hp base, hp upper, langs, save profs, skill profs, equip profs, inventory, class features]
var rogueArray = ["rogue", 8, 5, ["notChoices"], ["notChoices", 1, 3], ["chooseNumChoice", 4, 0, 3, 4, 6, 7, 8, 11, 12, 13, 15, 16], ["notChoices", "simple weapons", "hand crossbows", "longswords", "rapiers", "shortswords", "thieves tools"], ["multipleChoices", ["rapier", "shortsword"], [["notChoices", "shortbow", "quiver", "20 arrows"], "shortsword"], ["burglars pack", "dungeoneers pack", "explorers pack"], ["notChoices", "leather armor", "dagger", "dagger", "thieves tools"]], ["notChoices", "expertise", "sneak attack", "thieves cant"]];

