// Query Selected elements
var landing = document.querySelector("#landing");
var newCharacterBtn = document.querySelector("#newCharacterBtn");

// Functionality for Create New Character button
newCharacterBtn.addEventListener("click", startCharacterCreation);

function startCharacterCreation() {
    landing.remove();
    characterSec = document.createElement("section");
    characterSec.setAttribute("id", "characterSec");
    document.body.appendChild(characterSec);
    //create name div
    createDiv(characterSec, "characterNameDiv");
    var characterNameDiv = document.querySelector("#characterNameDiv");
    createPwithId(characterNameDiv, "Character Name: ", "characterNameP");
    var characterNameP = document.querySelector("#characterNameP");
    createInput(characterNameDiv, "characterNameInput");
    var characterNameInput = document.querySelector("#characterNameInput");
    createButton(characterNameDiv, "submitNameButton", "Save Name");
    var submitNameButton = document.querySelector("#submitNameButton");
    submitNameButton.addEventListener("click", submitName);
};

function submitName() {
    character.addName(characterNameInput.value);
    characterNameInput.remove();
    characterNameP.textContent = ("Character Name: " + character.charName);
    submitNameButton.remove();
    createCharacterSixStatsSection();
}

function createCharacterSixStatsSection() {
    createDiv(characterSec, "sixStatsDiv");
    var sixStatsDiv = document.querySelector("#sixStatsDiv");

    //str sec
    createDiv(sixStatsDiv, "strDiv");
    var strDiv = document.querySelector("#strDiv");
    strDiv.setAttribute("class", "oneOfSixStatsDiv")
    createPwithId(strDiv, "Strength:", "strP");
    var strP = document.querySelector("#strP");
    createInput(strDiv, "strInput");
    var strInput = document.querySelector("#strInput");
    createDiv(sixStatsDiv, "strBonusDiv");
    var strBonusDiv = document.querySelector("#strBonusDiv");
    createPwithId(strBonusDiv, "Bonus: N/A", "strBonusP");
    var strBonusP = document.querySelector("#strBonusP");

    //dex sec
    createDiv(sixStatsDiv, "dexDiv");
    var dexDiv = document.querySelector("#dexDiv");
    dexDiv.setAttribute("class", "oneOfSixStatsDiv")
    createPwithId(dexDiv, "Dexterity:", "dexP");
    var dexP = document.querySelector("#dexP");
    createInput(dexDiv, "dexInput");
    var dexInput = document.querySelector("#dexInput");
    createDiv(sixStatsDiv, "dexBonusDiv");
    var dexBonusDiv = document.querySelector("#dexBonusDiv");
    createPwithId(dexBonusDiv, "Bonus: N/A", "dexBonusP");
    var dexBonusP = document.querySelector("#dexBonusP");

    //con sec
    createDiv(sixStatsDiv, "conDiv");
    var conDiv = document.querySelector("#conDiv");
    conDiv.setAttribute("class", "oneOfSixStatsDiv")
    createPwithId(conDiv, "Constitution:", "conP");
    var conP = document.querySelector("#conP");
    createInput(conDiv, "conInput");
    var conInput = document.querySelector("#conInput");
    createDiv(sixStatsDiv, "conBonusDiv");
    var conBonusDiv = document.querySelector("#conBonusDiv");
    createPwithId(conBonusDiv, "Bonus: N/A", "conBonusP");
    var conBonusP = document.querySelector("#conBonusP");

    //int sec
    createDiv(sixStatsDiv, "intDiv");
    var intDiv = document.querySelector("#intDiv");
    intDiv.setAttribute("class", "oneOfSixStatsDiv")
    createPwithId(intDiv, "Intelligence:", "intP");
    var intP = document.querySelector("#intP");
    createInput(intDiv, "intInput");
    var intInput = document.querySelector("#intInput");
    createDiv(sixStatsDiv, "intBonusDiv");
    var intBonusDiv = document.querySelector("#intBonusDiv");
    createPwithId(intBonusDiv, "Bonus: N/A", "intBonusP");
    var intBonusP = document.querySelector("#intBonusP");

    //wis sec
    createDiv(sixStatsDiv, "wisDiv");
    var wisDiv = document.querySelector("#wisDiv");
    wisDiv.setAttribute("class", "oneOfSixStatsDiv")
    createPwithId(wisDiv, "Wisdom:", "wisP");
    var wisP = document.querySelector("#wisP");
    createInput(wisDiv, "wisInput");
    var wisInput = document.querySelector("#wisInput");
    createDiv(sixStatsDiv, "wisBonusDiv");
    var wisBonusDiv = document.querySelector("#wisBonusDiv");
    createPwithId(wisBonusDiv, "Bonus: N/A", "wisBonusP");
    var wisBonusP = document.querySelector("#wisBonusP");

    //cha sec
    createDiv(sixStatsDiv, "chaDiv");
    var chaDiv = document.querySelector("#chaDiv");
    chaDiv.setAttribute("class", "oneOfSixStatsDiv")
    createPwithId(chaDiv, "Charisma:", "chaP");
    var chaP = document.querySelector("#chaP");
    createInput(chaDiv, "chaInput");
    var chaInput = document.querySelector("#chaInput");
    createDiv(sixStatsDiv, "chaBonusDiv");
    var chaBonusDiv = document.querySelector("#chaBonusDiv");
    createPwithId(chaBonusDiv, "Bonus: N/A", "chaBonusP");
    var chaBonusP = document.querySelector("#chaBonusP");

    createDiv(sixStatsDiv, "saveSixStatsHolder");
    var saveSixStatsHolder = document.querySelector("#saveSixStatsHolder");
    createButton(saveSixStatsHolder, "saveSixStatsButton", "Save Stats");
    var saveSixStatsButton = document.querySelector("#saveSixStatsButton");
    saveSixStatsButton.addEventListener("click", submitStats);
}

function submitStats() {
    character.addStats(strInput.value, dexInput.value, conInput.value, intInput.value, wisInput.value, chaInput.value);
    character.recalculate();

    strP.textContent = "Strength: " + character.str.stat;
    strBonusP.textContent = "Bonus: " + character.str.bonus;
    strInput.remove();

    dexP.textContent = "Dexterity: " + character.dex.stat;
    dexBonusP.textContent = "Bonus: " + character.dex.bonus;
    dexInput.remove();

    conP.textContent = "Constitution: " + character.con.stat;
    conBonusP.textContent = "Bonus: " + character.con.bonus;
    conInput.remove();

    intP.textContent = "Intelligence: " + character.int.stat;
    intBonusP.textContent = "Bonus: " + character.int.bonus;
    intInput.remove();

    wisP.textContent = "Wisdom: " + character.wis.stat;
    wisBonusP.textContent = "Bonus: " + character.wis.bonus;
    wisInput.remove();

    chaP.textContent = "Charisma: " + character.cha.stat;
    chaBonusP.textContent = "Bonus: " + character.cha.bonus;
    chaInput.remove();

    saveSixStatsButton.remove();
    createSavesSec();
}

function createSavesSec() {
    console.log("hi");
}



//helper funcs
function createDiv(parent, id) {
    dude = document.createElement("div");
    dude.setAttribute("id", id);
    parent.appendChild(dude);
}

function createP(parent, contents) {
    dude = document.createElement("p");
    dude.textContent = contents;
    parent.appendChild(dude);
}

function createPwithId(parent, contents, id) {
    dude = document.createElement("p");
    dude.textContent = contents;
    dude.setAttribute("id", id);
    parent.appendChild(dude);
}

function createInput(parent, id) {
    dude = document.createElement("input");
    dude.setAttribute("id", id);
    parent.appendChild(dude);
}

function createButton(parent, id, contents) {
    dude = document.createElement("button");
    dude.setAttribute("id", id);
    dude.textContent = contents;
    parent.appendChild(dude);
}