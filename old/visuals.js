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
    strDiv.setAttribute("class", "fullFlexWrapDiv")
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
    dexDiv.setAttribute("class", "fullFlexWrapDiv")
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
    conDiv.setAttribute("class", "fullFlexWrapDiv")
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
    intDiv.setAttribute("class", "fullFlexWrapDiv")
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
    wisDiv.setAttribute("class", "fullFlexWrapDiv")
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
    chaDiv.setAttribute("class", "fullFlexWrapDiv")
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
    createDiv(characterSec, "savesDiv");
    var savesDiv = document.querySelector("#savesDiv");

    createDiv(savesDiv, "strSaveDiv");
    var strSaveDiv = document.querySelector("#strSaveDiv");
    createPwithId(strSaveDiv, "Strength Save: " + character.strSave.value, "strSaveP");

    createDiv(savesDiv, "dexSaveDiv");
    var dexSaveDiv = document.querySelector("#dexSaveDiv");
    createPwithId(dexSaveDiv, "Dexterity Save: " + character.dexSave.value, "dexSaveP");

    createDiv(savesDiv, "conSaveDiv");
    var conSaveDiv = document.querySelector("#conSaveDiv");
    createPwithId(conSaveDiv, "Constitution Save: " + character.conSave.value, "conSaveP");

    createDiv(savesDiv, "intSaveDiv");
    var intSaveDiv = document.querySelector("#intSaveDiv");
    createPwithId(intSaveDiv, "Intelligence Save: " + character.intSave.value, "intSaveP");

    createDiv(savesDiv, "wisSaveDiv");
    var wisSaveDiv = document.querySelector("#wisSaveDiv");
    createPwithId(wisSaveDiv, "Wisdom Save: " + character.wisSave.value, "wisSaveP");

    createDiv(savesDiv, "chaSaveDiv");
    var chaSaveDiv = document.querySelector("#chaSaveDiv");
    createPwithId(chaSaveDiv, "Charisma Save: " + character.chaSave.value, "chaSaveP");

    createSkillsSec();
}

function createSkillsSec() {
    createDiv(characterSec, "skillsDiv");
    var skillsDiv = document.querySelector("#skillsDiv");

    createDiv(skillsDiv, "acrobaticsDiv");
    var acrobaticsDiv = document.querySelector("#acrobaticsDiv");
    createPwithId(acrobaticsDiv, "Acrobatics: " + character.acrobatics.value, "acrobaticsP");

    createDiv(skillsDiv, "animalHandlingDiv");
    var animalHandlingDiv = document.querySelector("#animalHandlingDiv");
    createPwithId(animalHandlingDiv, "Animal Handling: " + character.animalHandling.value, "animalHandlingP");
    
    createDiv(skillsDiv, "arcanaDiv");
    var arcanaDiv = document.querySelector("#arcanaDiv");
    createPwithId(arcanaDiv, "Arcana: " + character.arcana.value, "arcanaP");

    createDiv(skillsDiv, "athleticsDiv");
    var athleticsDiv = document.querySelector("#athleticsDiv");
    createPwithId(athleticsDiv, "Athletics: " + character.athletics.value, "athleticsP");

    createDiv(skillsDiv, "deceptionDiv");
    var deceptionDiv = document.querySelector("#deceptionDiv");
    createPwithId(deceptionDiv, "Deception: " + character.deception.value, "deceptionP");

    createDiv(skillsDiv, "historyDiv");
    var historyDiv = document.querySelector("#historyDiv");
    createPwithId(historyDiv, "History: " + character.history.value, "historyP");

    createDiv(skillsDiv, "insightDiv");
    var insightDiv = document.querySelector("#insightDiv");
    createPwithId(insightDiv, "Insight: " + character.insight.value, "insightP");

    createDiv(skillsDiv, "intimidationDiv");
    var intimidationDiv = document.querySelector("#intimidationDiv");
    createPwithId(intimidationDiv, "Intimidation: " + character.intimidation.value, "intimidationP");

    createDiv(skillsDiv, "investigationDiv");
    var investigationDiv = document.querySelector("#investigationDiv");
    createPwithId(investigationDiv, "Investigation: " + character.investigation.value, "investigationP");
    
    createDiv(skillsDiv, "medicineDiv");
    var medicineDiv = document.querySelector("#medicineDiv");
    createPwithId(medicineDiv, "Medicine: " + character.medicine.value, "medicineP");

    createDiv(skillsDiv, "natureDiv");
    var natureDiv = document.querySelector("#natureDiv");
    createPwithId(natureDiv, "Nature: " + character.nature.value, "natureP");

    createDiv(skillsDiv, "perceptionDiv");
    var perceptionDiv = document.querySelector("#perceptionDiv");
    createPwithId(perceptionDiv, "Perception: " + character.perception.value, "perceptionP");

    createDiv(skillsDiv, "performanceDiv");
    var performanceDiv = document.querySelector("#performanceDiv");
    createPwithId(performanceDiv, "Performance: " + character.performance.value, "performanceP");

    createDiv(skillsDiv, "persuasionDiv");
    var persuasionDiv = document.querySelector("#persuasionDiv");
    createPwithId(persuasionDiv, "Persuasion: " + character.persuasion.value, "persuasionP");

    createDiv(skillsDiv, "religionDiv");
    var religionDiv = document.querySelector("#religionDiv");
    createPwithId(religionDiv, "Religion: " + character.religion.value, "religionP");

    createDiv(skillsDiv, "sleightOfHandDiv");
    var sleightOfHandDiv = document.querySelector("#sleightOfHandDiv");
    createPwithId(sleightOfHandDiv, "Sleight of Hand: " + character.sleightOfHand.value, "sleightOfHandP");

    createDiv(skillsDiv, "stealthDiv");
    var stealthDiv = document.querySelector("#stealthDiv");
    createPwithId(stealthDiv, "Stealth: " + character.stealth.value, "stealthP");

    createDiv(skillsDiv, "survivalDiv");
    var survivalDiv = document.querySelector("#survivalDiv");
    createPwithId(survivalDiv, "Survival: " + character.survival.value, "survivalP");
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