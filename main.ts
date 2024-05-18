#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let generalKnowledgeQuiz = await inquirer.prompt([
    {
        name: "q1",
        type: "list",
        message: chalk.yellow.bold("\nQ1: The Second largest city of Pakistan is____________?\n\n"),
        choices: ["Rawalpindi", "Lahore", "Multan", "Quetta"]
    },
    {
        name: "q2",
        type: "list",
        message: chalk.yellow.bold("\nQ2: Which is the capital of Pakistan?\n"),
        choices: ["Lahore", "Hyderabad", "Karachi", "Islamabad"]
    },
    {
        name: "q3",
        type: "list",
        message: chalk.yellow.bold("\nQ3: Which is the largest city of Pakistan\n"),
        choices: ["Islamabad", "Multan", "Karachi","Sukkur"]
    },
    {
        name: "q4",
        type: "list",
        message: chalk.yellow.bold("\nQ4: The currency of Saudi Arabia is _________?\n"),
        choices: ["Rupee", "Dollar", "Riyal", "Euro"]
    },
    {
        name: "q5",
        type: "list",
        message: chalk.yellow.bold("\nQ5: The largest ocean of the world is __________?\n"),
        choices: ["Atlantic ocean", "Pacific ocean", "Indian ocean", "None of these"]
    },
    {
        name: "q6",
        type: "list",
        message: chalk.yellow.bold("\nQ6: The largest democratic country in the world is _________.\n"),
        choices: ["India", "China", "United States", "Japan"]
    },
    {
        name: "q7",
        type: "list",
        message: chalk.yellow.bold("\nQ7: The smallest Ocean of the World is __________.\n"),
        choices: ["Atlantic ocean", "Artic Ocean", "Indian Ocean", "Pasific Ocean"]
    },
    {
        name: "q8",
        type: "list",
        message: chalk.yellow.bold("\nQ8: The biggest Island of the World is _________.\n"),
        choices: ["Greenland", "Iceland", "Srilanka", "England"]
    },
    {
        name: "q9",
        type: "list",
        message: chalk.yellow.bold("\nQ9: The highest part of the Earth is __________ .\n"),
        choices: ["North Pole", "Norway", "K2", "Mount Everest"]
    },
    {
        name: "q10",
        type: "list",
        message: chalk.yellow.bold("\nQ10: Emirates is an airline of __________.\n"),
        choices: ["Qatar", "UAE", "Malaysia", "Saudi Arabia"]
    },
    {
        name: "q11",
        type: "list",
        message: chalk.yellow.bold("\nQ11: Prophet Muhammad (PBUH) belonged to __________ family.\n"),
        choices: ["Madni", "Qureshi", "Makki", "Hashmi"]
    },
    {
        name: "q12",
        type: "list",
        message: chalk.yellow.bold("\nQ12: Prophet Muhammad (PBUH) had __________ sons.\n"),
        choices: ["4", "1", "3", "2"]
    },
    {
        name: "q13",
        type: "list",
        message: chalk.yellow.bold("\nQ13: Prophet Muhammad (PBUH) had __________ daughters.\n"),
        choices: ["1", "4", "2", "3"]
    },
    {
        name: "q14",
        type: "list",
        message: chalk.yellow.bold("\nQ14: To what Prophet the Zabur was revealed by Allah?\n"),
        choices: ["Prophet Dawood (A.S)", "Prophet Ibraheem (A.S)", "Prophet Essa (A.S)", "Prophet Moosa (A.S)"]
    },
    {
        name: "q15",
        type: "list",
        message: chalk.yellow.bold("\nQ15: To what Prophet the Injeel was revealed by Allah?\n"),
        choices: ["Prophet Essa (A.S)", "Prophet Moosa (A.S)", "Prophet Dawood (A.S)", "Prophet Ibraheem (A.S)"]
    },
    {
        name: "q16",
        type: "list",
        message: chalk.yellow.bold("\nQ16: __________ takes out souls of life bearing creatures.\n"),
        choices: ["Mikael (A.S)", "Jibrael (A.S)", "Israfeel (A.S)", "Izraeel (A.S)"]
    },
    {
        name: "q17",
        type: "list",
        message: chalk.yellow.bold("\nQ17: Cave Hira is in the _________ mountain.\n"),
        choices: ["As-Safa", "Uhad", "Sil", "An-Noor"]
    },
    {
        name: "q18",
        type: "list",
        message: chalk.yellow.bold("\nQ18: The first Masjid (Mosque) on the surface of Earth is?\n"),
        choices: ["Masjid-e-Aqsa", "Masjid e Quba", "Masjid-ul-Haram", "Masjid-e-Nabavi"]
    },
    {
        name: "q19",
        type: "list",
        message: chalk.yellow.bold("\nQ19: Who made the design of Pakistan’s first Stamp Ticket?\n"),
        choices: ["None of these", "Waqar-ul-Hassan", "Rehmat Ali", "Abdur-rehaman Chugtai"]
    },
    {
        name: "q20",
        type: "list",
        message: chalk.yellow.bold("\nQ20: The height of all 4 Minars of Badshai Mosque are \n"),
        choices: ["172 feet", "175 feet", "177 feet", "170 feet"]
    },
    {
        name: "q21",
        type: "list",
        message: chalk.yellow.bold("\nQ21: Who was the first governor general of Pakistan? \n"),
        choices: ["Sir Abdur Rashid", "Sir Syed Ahmed Khan", "Quaid-e-Azam", "Allama Iqbal"]
    },
    {
        name: "q22",
        type: "list",
        message: chalk.yellow.bold("\nQ22: The first Nobel Prize was awarded in __________ . \n"),
        choices: ["1907", "1913", "1919", "1901"]
    },
    {
        name: "q23",
        type: "list",
        message: chalk.yellow.bold("\nQ23: The Earth’s second Largest ocean is __________ ?\n"),
        choices: ["Indian", "Artic", "Pacific", "Atlantic"]
    },
    {
        name: "q24",
        type: "list",
        message: chalk.yellow.bold("\nQ24: The largest Continent (by Area) of the World is __________.\n"),
        choices: ["Antarctica", "Europe", "Asia", "Australia"]
    },
    {
        name: "q25",
        type: "list",
        message: chalk.yellow.bold("\nQ25: The Earth surface is divided in __________ Continents.\n"),
        choices: ["3 Continent", "4 Continent", "7 Continent", "8 Continent"]
    },
    {
        name: "q26",
        type: "list",
        message: chalk.yellow.bold("\nQ26: The hottest desert of the world is?\n"),
        choices: ["Cholistan Desert", "Arabian Desert", "Sahara Desert", "Arctic Desert"]
    },
    {
        name: "q27",
        type: "list",
        message: chalk.yellow.bold("\nQ27: Quid-e-Azam’s mother tongue was\n"),
        choices: ["Gujarati", "Hindi", "Urdu", "none of these"]
    },
    {
        name: "q28",
        type: "list",
        message: chalk.yellow.bold("\nQ28: When did Fatima Jinnah joined All India Muslim league?\n"),
        choices: ["1927", "1939", "1947", "1949"]
    },
    {
        name: "q29",
        type: "list",
        message: chalk.yellow.bold("\nQ29: The capital of Saudi Arabia is?\n"),
        choices: ["Riyadh", "Madina", "Taif", "Makkah"]
    },
    {
        name: "q30",
        type: "list",
        message: chalk.yellow.bold("\nQ30: Which is the largest Oil Producing Member Country of OPEC?\n"),
        choices: ["Kuwait", "Saudi Arabia", "Bahrain", "Qatar"]
    },
    {
        name: "q31",
        type: "list",
        message: chalk.yellow.bold("\nQ31: Pakistan’s National Flag was prepared by\n"),
        choices: ["Abdur-rehaman Chugtai", "Liaqat Ali", "Ameer-ud-din Qadwai", "Chaudhary Rehmat Ali"]
    },
    {
        name: "q32",
        type: "list",
        message: chalk.yellow.bold("\nQ32: Which country is largest in area?\n"),
        choices: ["Russia", "Canada", "China", "India"]
    },
    {
        name: "q33",
        type: "list",
        message: chalk.yellow.bold("\nQ33: The longest river in Pakistan is?\n"),
        choices: ["River Ravi", "River Jehlum", "River Cheenab", "River Sindh"]
    },
    {
        name: "q34",
        type: "list",
        message: chalk.yellow.bold("\nQ34: What is the world’s largest living mammal?\n"),
        choices: ["Shark", "Elephant", "Giraffe", "Blue Whale"]
    },
    {
        name: "q35",
        type: "list",
        message: chalk.yellow.bold("\nQ35: Which is the national bird of Pakistan?\n"),
        choices: ["Markhor", "Parrot", "Chakor", "Pigeon"]
    },
    {
        name: "q36",
        type: "list",
        message: chalk.yellow.bold("\nQ36: Which is the national Animal of Pakistan?\n"),
        choices: ["Markhor", "Parrot", "Chakor", "Pigeon"]
    },
    {
        name: "q37",
        type: "list",
        message: chalk.yellow.bold("\nQ37: How many squares has a chessboard ?\n"),
        choices: ["24", "45", "52", "64"]
    },
    {
        name: "q38",
        type: "list",
        message: chalk.yellow.bold("\nQ38: What does the CPEC stands for?\n"),
        choices: ["China Pakistan Electrical Coal", "China Pakistan Economic Corridor", "China Portagal Economical Corporation", "China Pakistan Electronics Corporation"]
    },
    {
        name: "q39",
        type: "list",
        message: chalk.yellow.bold("\nQ39: Which is the currency of Iraq?\n"),
        choices: ["Rupee", "Taka", "Peso", "Dinar"]
    },
    {
        name: "q40",
        type: "list",
        message: chalk.yellow.bold("\nQ40: The Capital of Canada is ___________?\n"),
        choices: ["Deneva", "Birmingham", "Otawa", "Brussels"]
    },
])

console.log(chalk.blue(`1: Your answer is Submited: ${generalKnowledgeQuiz.q1}`))
if(generalKnowledgeQuiz.q1 === "Rawalpindi"){
    console.log(chalk.red.bold("Ans1: Wrong Answer"))
}else if(generalKnowledgeQuiz.q1 === "Lahore"){
    console.log(chalk.green.bold("Ans1: Correct Answer"))
}else if(generalKnowledgeQuiz.q1 === "Multan"){
    console.log(chalk.red.bold("Ans1: Wrong Answer"))
}else if(generalKnowledgeQuiz.q1 === "Quetta"){
    console.log(chalk.red.bold("Ans1: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`2: Your answer is Submited: ${generalKnowledgeQuiz.q2}`))
if(generalKnowledgeQuiz.q2 === "Lahore"){
    console.log(chalk.red.bold("Ans2: Wrong Answer"))
}else if(generalKnowledgeQuiz.q2 === "Hyderabad"){
    console.log(chalk.red.bold("Ans2: Wrong Answer"))
}else if(generalKnowledgeQuiz.q2 === "Karachi"){
    console.log(chalk.red.bold("Ans2: Wrong Answer"))
}else if(generalKnowledgeQuiz.q2 === "Islamabad"){
    console.log(chalk.green.bold("Ans2: Correct Answer"))
}
console.log("\n")

console.log(chalk.blue(`3: Your answer is Submited: ${generalKnowledgeQuiz.q3}`))
if(generalKnowledgeQuiz.q3 === "Islamabad"){
    console.log(chalk.red.bold("Ans3: Wrong Answer"))
}else if(generalKnowledgeQuiz.q3 === "Multan"){
    console.log(chalk.red.bold("Ans3: Wrong Answer"))
}else if(generalKnowledgeQuiz.q3 === "Karachi"){
    console.log(chalk.green.bold("Ans3: Correct Answer"))
}else if(generalKnowledgeQuiz.q3 === "Sukkur"){
    console.log(chalk.red.bold("Ans3: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`4: Your answer is Submited: ${generalKnowledgeQuiz.q4}`))
if(generalKnowledgeQuiz.q4 === "Rupee"){
    console.log(chalk.red.bold("Ans4: Wrong Answer"))
}else if(generalKnowledgeQuiz.q4 === "Dollar"){
    console.log(chalk.red.bold("Ans4: Wrong Answer"))
}else if(generalKnowledgeQuiz.q4 === "Riyal"){
    console.log(chalk.green.bold("Ans4: Correct Answer"))
}else if(generalKnowledgeQuiz.q4 === "Euro"){
    console.log(chalk.red.bold("Ans4: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`5: Your answer is Submited: ${generalKnowledgeQuiz.q5}`))
if(generalKnowledgeQuiz.q5 === "Atlantic ocean"){
    console.log(chalk.red.bold("Ans5: Wrong Answer"))
}else if(generalKnowledgeQuiz.q5 === "Pacific ocean"){
    console.log(chalk.green.bold("Ans5: Correct Answer"))
}else if(generalKnowledgeQuiz.q5 === "Indian ocean"){
    console.log(chalk.red.bold("Ans5: Wrong Answer"))
}else if(generalKnowledgeQuiz.q5 === "None of these"){
    console.log(chalk.red.bold("Ans5: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`6: Your answer is Submited: ${generalKnowledgeQuiz.q6}`))
if(generalKnowledgeQuiz.q6 === "India"){
    console.log(chalk.green.bold("Ans6: Correct Answer"))
}else if(generalKnowledgeQuiz.q6 === "China"){
    console.log(chalk.red.bold("Ans6: Wrong Answer"))
}else if(generalKnowledgeQuiz.q6 === "United States"){
    console.log(chalk.red.bold("Ans6: Wrong Answer"))
}else if(generalKnowledgeQuiz.q6 === "Japan"){
    console.log(chalk.red.bold("Ans6: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`7: Your answer is Submited: ${generalKnowledgeQuiz.q7}`))
if(generalKnowledgeQuiz.q7 === "Atlantic ocean"){
    console.log(chalk.red.bold("Ans7: Wrong Answer"))
}else if(generalKnowledgeQuiz.q7 === "Artic Ocean"){
    console.log(chalk.green.bold("Ans7: Correct Answer"))
}else if(generalKnowledgeQuiz.q7 === "Indian Ocean"){
    console.log(chalk.red.bold("Ans7: Wrong Answer"))
}else if(generalKnowledgeQuiz.q7 === "Pasific Ocean"){
    console.log(chalk.red.bold("Ans7: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`8: Your answer is Submited: ${generalKnowledgeQuiz.q8}`))
if(generalKnowledgeQuiz.q8 === "Greenland"){
    console.log(chalk.green.bold("Ans8: Correct Answer"))
}else if(generalKnowledgeQuiz.q8 === "Iceland"){
    console.log(chalk.red.bold("Ans8: Wrong Answer"))
}else if(generalKnowledgeQuiz.q8 === "Srilanka"){
    console.log(chalk.red.bold("Ans8: Wrong Answer"))
}else if(generalKnowledgeQuiz.q8 === "England"){
    console.log(chalk.red.bold("Ans8: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`9: Your answer is Submited: ${generalKnowledgeQuiz.q9}`))
if(generalKnowledgeQuiz.q9 === "North Pole"){
    console.log(chalk.red.bold("Ans9: Wrong Answer"))
}else if(generalKnowledgeQuiz.q9 === "Norway"){
    console.log(chalk.red.bold("Ans9: Wrong Answer"))
}else if(generalKnowledgeQuiz.q9 === "K2"){
    console.log(chalk.red.bold("Ans9: Wrong Answer"))
}else if(generalKnowledgeQuiz.q9 === "Mount Everest"){
    console.log(chalk.green.bold("Ans9: Correct Answer"))
}
console.log("\n")

console.log(chalk.blue(`10: Your answer is Submited: ${generalKnowledgeQuiz.q10}`))
if(generalKnowledgeQuiz.q10 === "Qatar"){
    console.log(chalk.red.bold("Ans10: Wrong Answer"))
}else if(generalKnowledgeQuiz.q10 === "UAE"){
    console.log(chalk.green.bold("Ans10: Correct Answer"))
}else if(generalKnowledgeQuiz.q10 === "Malaysia"){
    console.log(chalk.red.bold("Ans10: Wrong Answer"))
}else if(generalKnowledgeQuiz.q10 === "Saudi Arabia"){
    console.log(chalk.red.bold("Ans10: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`11: Your answer is Submited: ${generalKnowledgeQuiz.q11}`))
if(generalKnowledgeQuiz.q11 === "Madni"){
    console.log(chalk.red.bold("Ans11: Wrong Answer"))
}else if(generalKnowledgeQuiz.q11 === "Qureshi"){
    console.log(chalk.red.bold("Ans11: Wrong Answer"))
}else if(generalKnowledgeQuiz.q11 === "Makki"){
    console.log(chalk.red.bold("Ans11: Wrong Answer"))
}else if(generalKnowledgeQuiz.q11 === "Hashmi"){
    console.log(chalk.green.bold("Ans11: Correct Answer"))
}
console.log("\n")

console.log(chalk.blue(`12: Your answer is Submited: ${generalKnowledgeQuiz.q12}`))
if(generalKnowledgeQuiz.q12 === "4"){
    console.log(chalk.red.bold("Ans12: Wrong Answer"))
}else if(generalKnowledgeQuiz.q12 === "1"){
    console.log(chalk.red.bold("Ans12: Wrong Answer"))
}else if(generalKnowledgeQuiz.q12 === "3"){
    console.log(chalk.green.bold("Ans12: Correct Answer"))
}else if(generalKnowledgeQuiz.q12 === "2"){
    console.log(chalk.red.bold("Ans12: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`13: Your answer is Submited: ${generalKnowledgeQuiz.q13}`))
if(generalKnowledgeQuiz.q13 === "1"){
    console.log(chalk.red.bold("Ans13: Wrong Answer"))
}else if(generalKnowledgeQuiz.q13 === "4"){
    console.log(chalk.green.bold("Ans13: Correct Answer"))
}else if(generalKnowledgeQuiz.q13 === "2"){
    console.log(chalk.red.bold("Ans13: Wrong Answer"))
}else if(generalKnowledgeQuiz.q13 === "3"){
    console.log(chalk.red.bold("Ans13: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`14: Your answer is Submited: ${generalKnowledgeQuiz.q14}`))
if(generalKnowledgeQuiz.q14 === "Prophet Dawood (A.S)"){
    console.log(chalk.green.bold("Ans14: Correct Answer"))
}else if(generalKnowledgeQuiz.q14 === "Prophet Ibraheem (A.S)"){
    console.log(chalk.red.bold("Ans14: Wrong Answer"))
}else if(generalKnowledgeQuiz.q14 === "Prophet Essa (A.S)"){
    console.log(chalk.red.bold("Ans14: Wrong Answer"))
}else if(generalKnowledgeQuiz.q14 === "Prophet Moosa (A.S)"){
    console.log(chalk.red.bold("Ans14: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`15: Your answer is Submited: ${generalKnowledgeQuiz.q15}`))
if(generalKnowledgeQuiz.q15 === "Prophet Dawood (A.S)"){
    console.log(chalk.red.bold("Ans15: Wrong Answer"))
}else if(generalKnowledgeQuiz.q15 === "Prophet Ibraheem (A.S)"){
    console.log(chalk.red.bold("Ans15: Wrong Answer"))
}else if(generalKnowledgeQuiz.q15 === "Prophet Essa (A.S)"){
    console.log(chalk.green.bold("Ans15: Correct Answer"))
}else if(generalKnowledgeQuiz.q15 === "Prophet Moosa (A.S)"){
    console.log(chalk.red.bold("Ans15: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`16: Your answer is Submited: ${generalKnowledgeQuiz.q16}`))
if(generalKnowledgeQuiz.q16 === "Mikael (A.S)"){
    console.log(chalk.red.bold("Ans16: Wrong Answer"))
}else if(generalKnowledgeQuiz.q16 === "Jibrael (A.S)"){
    console.log(chalk.red.bold("Ans16: Wrong Answer"))
}else if(generalKnowledgeQuiz.q16 === "Israfeel (A.S)"){
    console.log(chalk.red.bold("Ans16: Wrong Answer"))
}else if(generalKnowledgeQuiz.q16 === "Izraeel (A.S)"){
    console.log(chalk.green.bold("Ans16: Correct Answer"))
}
console.log("\n")

console.log(chalk.blue(`17: Your answer is Submited: ${generalKnowledgeQuiz.q17}`))
if(generalKnowledgeQuiz.q17 === "As-Safa"){
    console.log(chalk.red.bold("Ans17: Wrong Answer"))
}else if(generalKnowledgeQuiz.q17 === "Uhad"){
    console.log(chalk.red.bold("Ans17: Wrong Answer"))
}else if(generalKnowledgeQuiz.q17 === "Sil"){
    console.log(chalk.red.bold("Ans17: Wrong Answer"))
}else if(generalKnowledgeQuiz.q17 === "An-Noor"){
    console.log(chalk.green.bold("Ans17: Correct Answer"))
}
console.log("\n")

console.log(chalk.blue(`18: Your answer is Submited: ${generalKnowledgeQuiz.q18}`))
if(generalKnowledgeQuiz.q18 === "Masjid-e-Aqsa"){
    console.log(chalk.red.bold("Ans18: Wrong Answer"))
}else if(generalKnowledgeQuiz.q18 === "Masjid e Quba"){
    console.log(chalk.red.bold("Ans18: Wrong Answer"))
}else if(generalKnowledgeQuiz.q18 === "Masjid-ul-Haram"){
    console.log(chalk.green.bold("Ans18: Correct Answer"))
}else if(generalKnowledgeQuiz.q18 === "Masjid-e-Nabavi"){
    console.log(chalk.red.bold("Ans18: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`19: Your answer is Submited: ${generalKnowledgeQuiz.q19}`))
if(generalKnowledgeQuiz.q19 === "None of these"){
    console.log(chalk.red.bold("Ans19: Wrong Answer"))
}else if(generalKnowledgeQuiz.q19 === "Waqar-ul-Hassan"){
    console.log(chalk.red.bold("Ans19: Wrong Answer"))
}else if(generalKnowledgeQuiz.q19 === "Rehmat Ali"){
    console.log(chalk.red.bold("Ans19: Wrong Answer"))
}else if(generalKnowledgeQuiz.q19 === "Abdur-rehaman Chugtai"){
    console.log(chalk.green.bold("Ans19: Correct Answer"))
}
console.log("\n")

console.log(chalk.blue(`20: Your answer is Submited: ${generalKnowledgeQuiz.q20}`))
if(generalKnowledgeQuiz.q20 === "172 feet"){
    console.log(chalk.red.bold("Ans20: Wrong Answer"))
}else if(generalKnowledgeQuiz.q20 === "175 feet"){
    console.log(chalk.red.bold("Ans20: Wrong Answer"))
}else if(generalKnowledgeQuiz.q20 === "177 feet"){
    console.log(chalk.green.bold("Ans20: Correct Answer"))
}else if(generalKnowledgeQuiz.q20 === "170 feet"){
    console.log(chalk.red.bold("Ans20: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`21: Your answer is Submited: ${generalKnowledgeQuiz.q21}`))
switch (generalKnowledgeQuiz.q21){
    case  "Sir Abdur Rashid":
        console.log(chalk.red.bold("Ans21: Wrong Answer"))
        break;
    case  "Sir Syed Ahmed Khan":
        console.log(chalk.red.bold("Ans21: Wrong Answer"))
        break;
    case  "Quaid-e-Azam":
        console.log(chalk.green.bold("Ans21: Correct Answer"))
        break;
    case  "Allama Iqbal":
        console.log(chalk.red.bold("Ans21: Wrong Answer"))
}
console.log("\n")

console.log(chalk.blue(`22: Your answer is Submited: ${generalKnowledgeQuiz.q22}`))
switch(generalKnowledgeQuiz.q22){
    case "1907":
        console.log(chalk.red.bold("Ans22: Wrong Answer"));
        break;
    case "1913":
        console.log(chalk.red.bold("Ans22: Wrong Answer"));
        break;
    case "1919":
        console.log(chalk.red.bold("Ans22: Wrong Answer"));
        break;
    case "1901":
        console.log(chalk.green.bold("Ans22: Correct Answer"))
}
console.log("\n")

console.log(chalk.blue(`23: Your answer is Submited: ${generalKnowledgeQuiz.q23}`))
switch(generalKnowledgeQuiz.q23){
    case "Indian":
        console.log(chalk.red.bold("Ans23: Wrong Answer"));
        break;
    case "Artic":
        console.log(chalk.red.bold("Ans23: Wrong Answer"));
        break;
    case "Pacific":
        console.log(chalk.red.bold("Ans23: Wrong Answer"));
        break;
    case "Atlantic":
        console.log(chalk.green.bold("Ans23: Correct Answer"));
}
console.log("\n")

console.log(chalk.blue(`24: Your answer is Submited: ${generalKnowledgeQuiz.q24}`))
switch(generalKnowledgeQuiz.q24){
    case "Antarctica":
        console.log(chalk.red.bold("Ans24: Wrong Answer"));
        break
    case "Europe":
        console.log(chalk.red.bold("Ans24: Wrong Answer"));
        break;
    case "Asia":
        console.log(chalk.green.bold("Ans24: Correct Answer"));
        break;
    case "Australia":
        console.log(chalk.red.bold("Ans24: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue(`25: Your answer is Submited: ${generalKnowledgeQuiz.q25}`))
switch(generalKnowledgeQuiz.q25){
    case "3 Continent":
        console.log(chalk.red.bold("Ans25: Wrong Answer"));
        break;
    case "4 Continent":
        console.log(chalk.red.bold("Ans25: Wrong Answer"));
        break;
    case "7 Continent":
        console.log(chalk.green.bold("Ans25: Correct Answer"));
        break;
    case "8 Continent":
        console.log(chalk.red.bold("Ans25: Wrong Answer"));     
}
console.log("\n")

console.log(chalk.blue(`26: Your answer is Submited: ${generalKnowledgeQuiz.q26}`))
switch(generalKnowledgeQuiz.q26){
    case "Cholistan Desert":
        console.log(chalk.red.bold("Ans26: Wrong Answer"));
        break;
    case "Arabian Desert":
        console.log(chalk.red.bold("Ans26: Wrong Answer"));
        break;
    case "Sahara Desert":
        console.log(chalk.green.bold("Ans26: Correct Answer"));
        break;
    case "Arctic Desert":
        console.log(chalk.red.bold("Ans26: Wrong Answer"));       
}
console.log("\n")

console.log(chalk.blue(`27: Your answer is Submited: ${generalKnowledgeQuiz.q27}`))
switch(generalKnowledgeQuiz.q27){
    case "Gujarati":
        console.log(chalk.green.bold("Ans27: Correct Answer"));
        break;
    case "Hindi":
        console.log(chalk.red.bold("Ans27: Wrong Answer"));
        break;
    case "Urdu":
        console.log(chalk.red.bold("Ans27: Wrong Answer"));
        break;
    case "none of these":
        console.log(chalk.red.bold("Ans27: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue(`28: Your answer is Submited: ${generalKnowledgeQuiz.q28}`))
switch(generalKnowledgeQuiz.q28){
    case "1927":
        console.log(chalk.red.bold("Ans28: Wrong Answer"));
        break;
    case "1939":
        console.log(chalk.green.bold("Ans28: Correct Answer"));
        break;
    case "1947":
        console.log(chalk.red.bold("Ans28: Wrong Answer"));
        break;
    case "1949":
        console.log(chalk.red.bold("Ans28: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue(`29: Your answer is Submited: ${generalKnowledgeQuiz.q29}`))
switch(generalKnowledgeQuiz.q29){
    case "Riyadh":
        console.log(chalk.green.bold("Ans29: Correct Answer"));
        break;
    case "Madina":
        console.log(chalk.red.bold("Ans29: Wrong Answer"));
        break;
    case "Taif":
        console.log(chalk.red.bold("Ans29: Wrong Answer"));
        break;
    case "Makkah":
        console.log(chalk.red.bold("Ans29: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue(`30: Your answer is Submited: ${generalKnowledgeQuiz.q30}`))
switch(generalKnowledgeQuiz.q30){
    case "Kuwait":
        console.log(chalk.green.bold("Ans30: Wrong Answer"));
        break;
    case "Saudi Arabia":
        console.log(chalk.green.bold("Ans30: Correct Answer"));
        break;
    case "Bahrain":
        console.log(chalk.red.bold("Ans30: Wrong Answer"));
        break;
    case "Qatar":
        console.log(chalk.red.bold("Ans30: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue(`31: Your answer is Submited: ${generalKnowledgeQuiz.q31}`))
switch(generalKnowledgeQuiz.q31){
    case "Abdur-rehaman Chugtai":
        console.log(chalk.red.bold("Ans31: Wrong Answer"));
        break;
    case "Liaqat Ali":
        console.log(chalk.red.bold("Ans31: Wrong Answer"));
        break;
    case "Ameer-ud-din Qadwai":
        console.log(chalk.green.bold("Ans31: Correct Answer"));
        break;
    case "Chaudhary Rehmat Ali":
        console.log(chalk.red.bold("Ans31: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue(`32: Your answer is Submited: ${generalKnowledgeQuiz.q32}`))
switch(generalKnowledgeQuiz.q32){
    case "Russia":
        console.log(chalk.green.bold("Ans32: Correct Answer"));
        break;
    case "Canada":
        console.log(chalk.red.bold("Ans32: Wrong Answer"));
        break;
    case "China":
        console.log(chalk.red.bold("Ans32: Wrong Answer"));
        break;
    case "India":
        console.log(chalk.red.bold("Ans32: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue(`33: Your answer is Submited: ${generalKnowledgeQuiz.q33}`))
switch(generalKnowledgeQuiz.q33){
    case "River Cheenab":
        console.log(chalk.red.bold("Ans33: Wrong Answer"));
        break;
    case "River Jehlum":
        console.log(chalk.red.bold("Ans33: Wrong Answer"));
        break;
    case "River Ravi":
        console.log(chalk.red.bold("Ans33: Wrong Answer"));
        break;
    case "River Sindh":
        console.log(chalk.green.bold("Ans33: Correct Answer"));
}
console.log("\n")

console.log(chalk.blue(`34: Your answer is Submited: ${generalKnowledgeQuiz.q34}`))
switch(generalKnowledgeQuiz.q34){
    case "Shark":
        console.log(chalk.red.bold("Ans34: Wrong Answer"));
        break;
    case "Elephant":
        console.log(chalk.red.bold("Ans34: Wrong Answer"));
        break;
    case "Giraffe":
        console.log(chalk.red.bold("Ans34: Wrong Answer"));
        break;
    case "Blue Whale":
        console.log(chalk.green.bold("Ans34: Correct Answer"));
}
console.log("\n")

console.log(chalk.blue(`35: Your answer is Submited: ${generalKnowledgeQuiz.q35}`))
switch(generalKnowledgeQuiz.q35){
    case "Markhor":
        console.log(chalk.red.bold("Ans35: Wrong Answer"));
        break;
    case "Parrot":
        console.log(chalk.red.bold("Ans35: Wrong Answer"));
        break;
    case "Chakor":
        console.log(chalk.green.bold("Ans35: Correct Answer"));
        break;
    case "Pigeon":
        console.log(chalk.red.bold("Ans35: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue(`36: Your answer is Submited: ${generalKnowledgeQuiz.q36}`))
switch(generalKnowledgeQuiz.q36){
    case "Markhor":
        console.log(chalk.green.bold("Ans36: Correct Answer"));
        break;
    case "Deer":
        console.log(chalk.red.bold("Ans36: Wrong Answer"));
        break;
    case "Rabbit":
        console.log(chalk.red.bold("Ans36: Wrong Answer"));
        break;
    case "Tiger":
        console.log(chalk.red.bold("Ans36: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue(`37: Your answer is Submited: ${generalKnowledgeQuiz.q37}`))
switch(generalKnowledgeQuiz.q37){
    case "64":
        console.log(chalk.green.bold("Ans37: Correct Answer"));
        break;
    case "52":
        console.log(chalk.red.bold("Ans37: Wrong Answer"));
        break;
    case "45":
        console.log(chalk.red.bold("Ans37: Wrong Answer"));
        break;
    case "24":
        console.log(chalk.red.bold("Ans37: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue(`38: Your answer is Submited: ${generalKnowledgeQuiz.q38}`))
switch(generalKnowledgeQuiz.q38){
    case "China Pakistan Electrical Coal":
        console.log(chalk.red.bold("Ans38: Wrong Answer"));
        break;
    case "China Pakistan Economic Corridor":
        console.log(chalk.green.bold("Ans38: Correct Answer"));
        break;
    case "China Portagal Economical Corporation":
        console.log(chalk.red.bold("Ans38: Wrong Answer"));
        break;
    case "China Pakistan Electronics Corporation":
        console.log(chalk.red.bold("Ans38: Wrong Answer"));
}
console.log("\n")

console.log(chalk.blue(`39: Your answer is Submited: ${generalKnowledgeQuiz.q39}`))
switch(generalKnowledgeQuiz.q39){
    case "Rupee":
        console.log(chalk.red.bold("Ans39: Wrong Answer"));
        break;
    case "Taka":
        console.log(chalk.red.bold("Ans39: Wrong Answer"));
        break;
    case "Peso":
        console.log(chalk.red.bold("Ans39: Wrong Answer"));
        break;
    case "Dinar":
        console.log(chalk.green.bold("Ans39: Correct Answer"));
}
console.log("\n")

console.log(chalk.blue(`40: Your answer is Submited: ${generalKnowledgeQuiz.q40}`))
switch(generalKnowledgeQuiz.q40){
    case "Deneva":
        console.log(chalk.red.bold("Ans40: Wrong Answer"));
        break;
    case "Birmingham":
        console.log(chalk.red.bold("Ans40: Wrong Answer"));
        break;
    case "Otawa":
        console.log(chalk.green.bold("Ans40: Correct Answer"));
        break;
    case "Brussels":
        console.log(chalk.red.bold("Ans40: Wrong Answer"));
}
console.log("\n")

