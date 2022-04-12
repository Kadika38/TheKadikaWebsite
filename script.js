//Object setup and manipulation

// Character Object
var character = {
    //name
    firstName: "",
    lastName: "",
    title: "",
    //stats
    str: {
        stat: 0,
        bonus: 0,
        calcBonus: function() {
            this.bonus = Math.floor((this.stat - 10)/2);
        },
    },
    dex: {
        stat: 0,
        bonus: 0,
        calcBonus: function() {
            this.bonus = Math.floor((this.stat - 10)/2);
        },
    },
    con: {
        stat: 0,
        bonus: 0,
        calcBonus: function() {
            this.bonus = Math.floor((this.stat - 10)/2);
        },
    },
    int: {
        stat: 0,
        bonus: 0,
        calcBonus: function() {
            this.bonus = Math.floor((this.stat - 10)/2);
        },
    },
    wis: {
        stat: 0,
        bonus: 0,
        calcBonus: function() {
            this.bonus = Math.floor((this.stat - 10)/2);
        },
    },
    cha: {
        stat: 0,
        bonus: 0,
        calcBonus: function() {
            this.bonus = Math.floor((this.stat - 10)/2);
        },
    },
    //equipment proficiencies
    equipmentProficiencies: [],
    toolProficiencies: [],
    //racial things
    race: "",
    size: "",
    speed: 0,
    raceTraits: [],
    languages: [],
    visions: [],
    //saves
    strSave: {
        base: 0,
        proficiency: false,
        value: 0,
        calcSave: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    dexSave: {
        base: 0,
        proficiency: false,
        value: 0,
        calcSave: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    conSave: {
        base: 0,
        proficiency: false,
        value: 0,
        calcSave: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    intSave: {
        base: 0,
        proficiency: false,
        value: 0,
        calcSave: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    wisSave: {
        base: 0,
        proficiency: false,
        value: 0,
        calcSave: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    chaSave: {
        base: 0,
        proficiency: false,
        value: 0,
        calcSave: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    //skills
    acrobatics: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    animalHandling: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    arcana: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    athletics: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    deception: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    history: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    insight: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    intimidation: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    investigation: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    medicine: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    nature: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    perception: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    performance: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    persuasion: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    religion: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    sleightOfHand: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    stealth: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    survival: {
        base: 0,
        proficiency: false,
        expertise: false,
        value: 0,
        calcSkill: function() {
            if (this.proficiency) {
                this.value = (this.base + character.proficiencyBonus);
            }
            if (this.expertise) {
                this.value = (this.base + (2 * character.proficiencyBonus));
            }
            else if (!this.proficiency) {
                this.value = this.base;
            }
        }
    },
    //other
    background: "",
    feats: [],
    classOfCharacter: "",
    classFeatures: [],
    passivePerception: 0,
    proficiencyBonus: 0,
    inventory: [],
    money: 0,
    hpBase: 0,
    hpUpper: 0,
    maxHP: 0,
    level: 1,
    //functions
    mapSavesAndSkills: function() {
        this.strSave.base = this.str.bonus;
        this.dexSave.base = this.dex.bonus;
        this.conSave.base = this.con.bonus;
        this.intSave.base = this.int.bonus;
        this.wisSave.base = this.wis.bonus;
        this.chaSave.base = this.cha.bonus;
        this.acrobatics.base = this.dex.bonus;
        this.animalHandling.base = this.wis.bonus;
        this.arcana.base = this.int.bonus;
        this.athletics.base = this.str.bonus;
        this.deception.base = this.cha.bonus;
        this.history.base = this.int.bonus;
        this.insight.base = this.wis.bonus;
        this.intimidation.base = this.cha.bonus;
        this.investigation.base = this.int.bonus;
        this.medicine.base = this.wis.bonus;
        this.nature.base = this.int.bonus;
        this.perception.base = this.wis.bonus;
        this.performance.base = this.cha.bonus;
        this.persuasion.base = this.cha.bonus;
        this.religion.base = this.int.bonus;
        this.sleightOfHand.base = this.dex.bonus;
        this.stealth.base = this.dex.bonus;
        this.survival.base = this.wis.bonus;
    },
    calcProficiencyBonus: function() {
        this.proficiencyBonus = ((Math.ceil(this.level / 4))+ 1);
    },
    calcMaxHP: function() {
        this.maxHP = (this.hpBase + this.con.bonus + ((this.hpUpper + this.con.bonus) * (this.level - 1)));
    },
    // Function for recalculating everything for changed factors
    recalculate: function() {
        //calculate stat bonuses
        this.str.calcBonus();
        this.dex.calcBonus();
        this.con.calcBonus();
        this.int.calcBonus();
        this.wis.calcBonus();
        this.cha.calcBonus();
        //copy over passive perception
        this.passivePerception = this.wis.stat;
        //map saves and skills
        this.mapSavesAndSkills();
        //calculate max HP
        this.calcMaxHP();
        //calculate proficiency bonus
        this.calcProficiencyBonus();
        //calculate saving throws
        this.strSave.calcSave();
        this.dexSave.calcSave();
        this.conSave.calcSave();
        this.intSave.calcSave();
        this.wisSave.calcSave();
        this.chaSave.calcSave();
        //calculate skills
        this.acrobatics.calcSkill();
        this.animalHandling.calcSkill();
        this.arcana.calcSkill();
        this.athletics.calcSkill();
        this.deception.calcSkill();
        this.history.calcSkill();
        this.insight.calcSkill();
        this.intimidation.calcSkill();
        this.investigation.calcSkill();
        this.medicine.calcSkill();
        this.nature.calcSkill();
        this.perception.calcSkill();
        this.performance.calcSkill();
        this.persuasion.calcSkill();
        this.religion.calcSkill();
        this.sleightOfHand.calcSkill();
        this.stealth.calcSkill();
        this.survival.calcSkill();
    },
    //functions for passing in parameters
    addStats: function(s, d, co, i, w, ch) {
        this.str.stat = s;
        this.dex.stat = d;
        this.con.stat = co;
        this.int.stat = i;
        this.wis.stat = w;
        this.cha.stat = ch;
    },
    statChange: function(s, d, co, i, w, ch) {
        this.str.stat += s;
        this.dex.stat += d;
        this.con.stat += co;
        this.int.stat += i;
        this.wis.stat += w;
        this.cha.stat += ch;
    },
    addName: function(string1, string2) {
        this.firstName = string1;
        this.lastName = string2;
    },
    addSize: function(string1) {
        this.size = string1;
    },
    addLanguages: function(...langs) {
        for (af = 0; af < langs.length; af++) {
            this.languages.push(langs[af]);
        };
    },
    addSaveProficiencies: function(...saves) {
        for (af = 0; af < saves.length; af++) {
            if (saves[af] == 0) {this.strSave.proficiency = true;}
            if (saves[af] == 1) {this.dexSave.proficiency = true;}
            if (saves[af] == 2) {this.conSave.proficiency = true;}
            if (saves[af] == 3) {this.intSave.proficiency = true;}
            if (saves[af] == 4) {this.wisSave.proficiency = true;}
            if (saves[af] == 5) {this.chaSave.proficiency = true;}
        };
    },
    addSkillProficiencies: function(...skills) {
        for (af = 0; af < skills.length; af++) {
            if (skills[af] == 0) {this.acrobatics.proficiency = true;}
            if (skills[af] == 1) {this.animalHandling.proficiency = true;}
            if (skills[af] == 2) {this.arcana.proficiency = true;}
            if (skills[af] == 3) {this.athletics.proficiency = true;}
            if (skills[af] == 4) {this.deception.proficiency = true;}
            if (skills[af] == 5) {this.history.proficiency = true;}
            if (skills[af] == 6) {this.insight.proficiency = true;}
            if (skills[af] == 7) {this.intimidation.proficiency = true;}
            if (skills[af] == 8) {this.investigation.proficiency = true;}
            if (skills[af] == 9) {this.medicine.proficiency = true;}
            if (skills[af] == 10) {this.nature.proficiency = true;}
            if (skills[af] == 11) {this.perception.proficiency = true;}
            if (skills[af] == 12) {this.performance.proficiency = true;}
            if (skills[af] == 13) {this.persuasion.proficiency = true;}
            if (skills[af] == 14) {this.religion.proficiency = true;}
            if (skills[af] == 15) {this.sleightOfHand.proficiency = true;}
            if (skills[af] == 16) {this.stealth.proficiency = true;}
            if (skills[af] == 17) {this.survival.proficiency = true;}
        };
    },
    addEquipmentProficiencies: function(...stuff) {
        for (af = 0; af < stuff.length; af++) {
            this.equipmentProficiencies.push(stuff[af]);
        };
    },
    addToolProficiencies: function(...stuff) {
        for (af = 0; af < stuff.length; af++) {
            this.toolProficiencies.push(stuff[af]);
        };
    },
    addVisions: function(...stuff) {
        for (af = 0; af < stuff.length; af++) {
            this.visions.push(stuff[af]);
        };
    },
    addRaceTraits: function(...stuff) {
        for (af = 0; af < stuff.length; af++) {
            this.raceTraits.push(stuff[af]);
        };
    },
    addFeats: function(...stuff) {
        for (af = 0; af < stuff.length; af++) {
            this.feats.push(stuff[af]);
        };
    },
    addClassFeatures: function(...stuff) {
        for (af = 0; af < stuff.length; af++) {
            this.classFeatures.push(stuff[af]);
        };
    },
    addToInventory: function(...stuff) {
        for (af = 0; af < stuff.length; af++) {
            this.inventory.push(stuff[af]);
        };
    },
    addMoney: function(num) {
        character.money += num;
    },
    addSpeed: function(num) {
        this.speed = num;
    },
    //Function compilations
    addRace: function(stuff) {
        this.race = stuff[0];
        this.addSize(stuff[1]);
        this.addSpeed(stuff[2]);
        statStuff = stuff[3];
        this.statChange(statStuff[0], statStuff[1], statStuff[2], statStuff[3], statStuff[4], statStuff[5]);
        if (stuff[4].length > 0) {
            for (i = 0; i < stuff[4].length; i++) {
                this.addLanguages(stuff[4][i]);
            };
        };
        if (stuff[5].length > 0) {
            for (i = 0; i < stuff[5].length; i++) {
                character.addSaveProficiencies(stuff[5][i]);
            };
        };
        if (stuff[6].length > 0) {
            for (i = 0; i < stuff[6].length; i++) {
                character.addSkillProficiencies(stuff[6][i]);
            };
        };
        if (stuff[7].length > 0) {
            for (i = 0; i < stuff[7].length; i++) {
                character.addEquipmentProficiencies(stuff[7][i]);
            };
        };
        if (stuff[8].length > 0) {
            for (i = 0; i < stuff[8].length; i++) {
                character.addToolProficiencies(stuff[8][i]);
            };
        };
        if (stuff[9].length > 0) {
            for (i = 0; i < stuff[9].length; i++) {
                character.addVisions(stuff[9][i]);
            };
        };
        if (stuff[10].length > 0) {
            for (i = 0; i < stuff[10].length; i++) {
                character.addRaceTraits(stuff[10][i]);
            };
        };
        for (i = 0; i < character.raceTraits.length; i++) {
            character.useRaceTrait(character.raceTraits[i]);
        }
        if (stuff[11].length > 0) {
            for (i = 0; i < stuff[11].length; i++) {
                character.addFeats(stuff[11][i]);
            };
        };
    },
    addBackground: function(stuff) {
        this.background = stuff[0];
        if (stuff[1].length > 0) {
            for (i = 0; i < stuff[1].length; i++) {
                character.addSkillProficiencies(stuff[1][i]);
            };
        };
        if (stuff[2].length > 0) {
            for (i = 0; i < stuff[2].length; i++) {
                this.addLanguages(stuff[2][i]);
            };
        };
        if (stuff[3].length > 0) {
            for (i = 0; i < stuff[3].length; i++) {
                character.addEquipmentProficiencies(stuff[3][i]);
            };
        };
        if (stuff[4].length > 0) {
            for (i = 0; i < stuff[4].length; i++) {
                character.addToInventory(stuff[4][i]);
            };
        };
        this.addMoney(stuff[5]);
    },

    addClass: function(stuff) {
        character.classOfCharacter = stuff[0];
        character.hpBase = stuff[1];
        character.hpUpper = stuff[2];
        if (stuff[3].length > 0) {
            for (i = 0; i < stuff[3].length; i++) {
                this.addLanguages(stuff[3][i]);
            };
        };
        if (stuff[4].length > 0) {
            for (i = 0; i < stuff[4].length; i++) {
                character.addSaveProficiencies(stuff[4][i]);
            };
        };
        if (stuff[5].length > 0) {
            for (i = 0; i < stuff[5].length; i++) {
                character.addSkillProficiencies(stuff[5][i]);
            };
        };
        if (stuff[6].length > 0) {
            for (i = 0; i < stuff[6].length; i++) {
                character.addEquipmentProficiencies(stuff[6][i]);
            };
        };
        if (stuff[7].length > 0) {
            for (i = 0; i < stuff[7].length; i++) {
                character.addToInventory(stuff[7][i]);
            };
        };
        if (stuff[8].length > 0) {
            for (i = 0; i < stuff[8].length; i++) {
                character.addClassFeatures(stuff[8][i]);
            };
        };
    },

    getVisionDescription: function(v) {
        //get rid of spaces in v
        v = v.replace(/\s/g, "");
        for (i = 0; i < visionsArray.length; i++) {
            if (visionsArray[i].key == v) {
                return visionsArray[i].description;
            };
        };
    },

    getRaceTraitDescription: function(v) {
        //get rid of spaces in v
        v = v.replace(/\s/g, "");
        for (i = 0; i < raceTraitsArray.length; i++) {
            if (raceTraitsArray[i].key == v) {
                return raceTraitsArray[i].description;
            };
        };
    },

    getFeatDescription: function(v) {
        //get rid of spaces in v
        v = v.replace(/\s/g, "");
        for (i = 0; i < featsArray.length; i++) {
            if (featsArray[i].key == v) {
                return featsArray[i].description;
            };
        };
    },

    getClassFeatureDescription: function(v) {
        //get rid of spaces in v
        v = v.replace(/\s/g, "");
        for (i = 0; i < classFeaturesArray.length; i++) {
            if (classFeaturesArray[i].key == v) {
                return classFeaturesArray[i].description;
            };
        };
    },

    useRaceTrait: function(v) {
        //get rid of spaces in v
        v = v.replace(/\s/g, "");
        for (uf = 0; uf < raceTraitsArray.length; uf++) {
            if (raceTraitsArray[uf].key == v) {
                raceTraitsArray[uf].use();
                return;
            };
        };
    },

    useFeat: function(v) {
        //get rid of spaces in v
        v = v.replace(/\s/g, "");
        for (uf = 0; uf < featsArray.length; uf++) {
            if (featsArray[uf].key == v) {
                featsArray[uf].use();
                return;
            };
        };
    },

    useClassFeature: function(v) {
        //get rid of spaces in v
        v = v.replace(/\s/g, "");
        for (uf = 0; uf < classFeaturesArray.length; uf++) {
            if (classFeaturesArray[uf].key == v) {
                classFeaturesArray[uf].use();
                return;
            };
        };
    },

    useItem: function(v) {
        //get rid of spaces in v
        v = v.replace(/\s/g, "");
        for (uf = 0; uf < itemArray.length; uf++) {
            if (inventory[uf].key == v) {
                inventory[uf].use();
                return;
            };
        };
    },

    //print functions
    printCharacter: function() {
        console.log(this);
    },
    
};

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


//choice functions
function makeChoiceSimple(anArray2) {
    //show user choices
    //user picks choice
    pick2 = 0;
    //return user choice
    return anArray2[pick2];
};

function makeChoiceChooseNum(anArray3) {
    //choose #
    chooseNum = anArray3[0];
    anArray3.shift();
    //show user choices
    //user picks choices
    pick3 = [0, 5, 9, 10];
    picks = [];
    for (mcc = 0; mcc < chooseNum; mcc++) {
        pick3spot = pick3[mcc];
        pick3val = anArray3[pick3spot];
        picks.push(pick3val);
    }
    return picks;
}

function chooseTest(disArray) {
    newArray = disArray;
    for (i = 0; i < disArray.length; i++) {
        newArray[i] = ifIsChoice(disArray[i]);
    };
    return newArray;
};

function ifIsChoice(anArray) {
    pick = "not";
    if (Array.isArray(anArray)) {
        if (anArray[0] == "notChoices") {
            anArray.shift();
            return anArray
        };
        pick = makeChoiceSimple(anArray);
        if (anArray[0] == "chooseNumChoice") {
            anArray.shift();
            pickedArray = makeChoiceChooseNum(anArray);
            return pickedArray;
        }
        if (anArray[0] == "multipleChoices") {
            anArray.shift();
            finalTArray = [];
            for (t = 0; t < anArray.length; t++) {
                tArray = anArray[t];
                tpick = ifIsChoice(tArray);
                anArray[t] = tpick;
            };
            upArray = [];
            aup = 0;
            for (up = 0; up < anArray.length; up++) {
                if (!(Array.isArray(anArray[up]))) {
                    upArray[aup] = anArray[up];
                    aup++;
                }
                if (Array.isArray(anArray[up])) {
                    holdAnArrayUp = anArray[up];
                    for (up2 = 0; up2 < holdAnArrayUp.length; up2++) {
                        upArray[aup] = holdAnArrayUp[up2];
                        aup++;
                    }
                }
            }
            anArray = upArray;
            return anArray;
        };
    }
    if (Array.isArray(pick)) {
        return ifIsChoice(pick);
    }
    if (pick == "not") {
        return anArray;
    }
    pickedArray = [];
    pickedArray.push(pick);
    return pickedArray;
}

/* character.addName("Ashley", "Appleguard");
character.addStats(16, 18, 10, 16, 9, 8);
character.addRace(chooseTest(dwarfArray));
character.addBackground(chooseTest(fisherArray));
character.addClass(chooseTest(rogueArray));
character.recalculate();
character.printCharacter(); */

// Making the New Character button function
var newCharacterBtn = document.querySelector("#newCharacter");

newCharacterBtn.addEventListener("click", createNewCharacter);

//spot vars
var statContainerSpot = document.querySelector("#statContainer");
var nameSpot = document.querySelector("#characterName");
var strSpot = document.querySelector("#str");
var strBonusSpot = document.querySelector("#strBonus");
var dexSpot = document.querySelector("#dex");
var dexBonusSpot = document.querySelector("#dexBonus");
var conSpot = document.querySelector("#con");
var conBonusSpot = document.querySelector("#conBonus");
var intSpot = document.querySelector("#int");
var intBonusSpot = document.querySelector("#intBonus");
var wisSpot = document.querySelector("#wis");
var wisBonusSpot = document.querySelector("#wisBonus");
var chaSpot = document.querySelector("#cha");
var chaBonusSpot = document.querySelector("#chaBonus");

//element creations vars
var divy = document.createElement("div");

// Full process for inputing New Character info
function createNewCharacter() {
    //take input of character name
    fn = prompt("Characters first name: ");
    ln = prompt("Characters last name: ");
    //add name to character object
    character.addName(fn, ln);
    //set name to visual
    nameSpot.innerHTML= (character.firstName + " " + character.lastName);

    //take input of character stats
    strInput = prompt("Strength: ");
    dexInput = prompt("Dexterity: ");
    conInput = prompt("Constitution: ");
    intInput = prompt("Intelligence: ");
    wisInput = prompt("Wisdom: ");
    chaInput = prompt("Charisma: ");
    //add stats to character object
    character.addStats(strInput, dexInput, conInput, intInput, wisInput, chaInput);
    character.recalculate();
    //set stats to visuals
    strSpot.innerHTML = character.str.stat;
    strBonusSpot.innerHTML = character.str.bonus;
    dexSpot.innerHTML = character.dex.stat;
    dexBonusSpot.innerHTML = character.dex.bonus;
    conSpot.innerHTML = character.con.stat;
    conBonusSpot.innerHTML = character.con.bonus;
    intSpot.innerHTML = character.int.stat;
    intBonusSpot.innerHTML = character.int.bonus;
    wisSpot.innerHTML = character.wis.stat;
    wisBonusSpot.innerHTML = character.wis.bonus;
    chaSpot.innerHTML = character.cha.stat;
    chaBonusSpot.innerHTML = character.cha.bonus;
}
