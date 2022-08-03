"use strict";

let wordList = [
  "evade",
  "naval",
  "serve",
  "heath",
  "dwarf",
  "model",
  "karma",
  "stink",
  "grade",
  "quiet",
  "bench",
  "abate",
  "feign",
  "major",
  "death",
  "fresh",
  "crust",
  "stool",
  "colon",
  "abase",
  "marry",
  "react",
  "batty",
  "pride",
  "floss",
  "helix",
  "croak",
  "staff",
  "paper",
  "unfed",
  "whelp",
  "trawl",
  "outdo",
  "adobe",
  "crazy",
  "sower",
  "repay",
  "digit",
  "crate",
  "cluck",
  "spike",
  "mimic",
  "pound",
  "maxim",
  "linen",
  "unmet",
  "flesh",
  "booby",
  "forth",
  "first",
  "stand",
  "belly",
  "ivory",
  "seedy",
  "print",
  "yearn",
  "drain",
  "bribe",
  "stout",
  "panel",
  "crass",
  "flume",
  "offal",
  "agree",
  "error",
  "swirl",
  "argue",
  "bleed",
  "delta",
  "flick",
  "totem",
  "wooer",
  "front",
  "shrub",
  "parry",
  "biome",
  "lapel",
  "start",
  "greet",
  "goner",
  "golem",
  "lusty",
  "loopy",
  "round",
  "audit",
  "lying",
  "gamma",
  "labor",
  "islet",
  "civic",
  "forge",
  "corny",
  "moult",
  "basic",
  "salad",
  "agate",
  "spicy",
  "spray",
  "essay",
  "fjord",
  "spend",
  "kebab",
  "guild",
  "aback",
  "motor",
  "alone",
  "hatch",
  "hyper",
  "thumb",
  "dowry",
  "ought",
  "belch",
  "dutch",
  "pilot",
  "tweed",
  "comet",
  "jaunt",
  "enema",
  "steed",
  "abyss",
  "growl",
  "fling",
  "dozen",
  "boozy",
  "erode",
  "world",
  "gouge",
  "click",
  "briar",
  "great",
  "altar",
  "pulpy",
  "blurt",
  "coast",
  "duchy",
  "groin",
  "fixer",
  "group",
  "rogue",
  "badly",
  "smart",
  "pithy",
  "gaudy",
  "chill",
  "heron",
  "vodka",
  "finer",
  "surer",
  "radio",
  "rouge",
  "perch",
  "retch",
  "wrote",
  "clock",
  "tilde",
  "store",
  "prove",
  "bring",
  "solve",
  "cheat",
  "grime",
  "exult",
  "usher",
  "epoch",
  "triad",
  "break",
  "rhino",
  "viral",
  "conic",
  "masse",
  "sonic",
  "vital",
  "trace",
  "using",
  "peach",
  "champ",
  "baton",
  "brake",
  "pluck",
  "craze",
  "gripe",
  "weary",
  "picky",
  "acute",
  "ferry",
  "aside",
  "tapir",
  "troll",
  "unify",
  "rebus",
  "boost",
  "truss",
  "siege",
  "tiger",
  "banal",
  "slump",
  "crank",
  "gorge",
  "query",
  "drink",
  "favor",
  "abbey",
  "tangy",
  "panic",
  "solar",
  "shire",
  "proxy",
  "point",
  "robot",
  "prick",
  "wince",
  "crimp",
  "knoll",
  "sugar",
  "whack",
  "mount",
  "perky",
  "could",
  "wrung",
  "light",
  "those",
  "moist",
  "shard",
  "pleat",
  "aloft",
  "skill",
  "elder",
  "frame",
  "humor",
  "pause",
  "ulcer",
  "ultra",
  "robin",
  "cynic",
  "aroma",
  "caulk",
  "shake",
  "dodge",
  "swill",
  "tacit",
  "other",
  "thorn",
  "trove",
  "bloke",
  "vivid",
  "spill",
  "chant",
  "choke",
  "rupee",
  "nasty",
  "mourn",
  "ahead",
  "brine",
  "cloth",
  "hoard",
  "sweet",
  "month",
  "lapse",
  "watch",
  "today",
  "focus",
  "smelt",
  "tease",
  "cater",
  "movie",
  "saute",
  "allow",
  "renew",
  "their",
  "slosh",
  "purge",
  "chest",
  "depot",
  "epoxy",
  "nymph",
  "found",
  "shall",
  "stove",
  "lowly",
  "snout",
  "trope",
  "fewer",
  "shawl",
  "natal",
  "comma",
  "foray",
  "scare",
  "stair",
  "black",
  "squad",
  "royal",
  "chunk",
  "mince",
  "shame",
  "cheek",
  "ample",
  "flair",
  "foyer",
  "cargo",
  "oxide",
  "plant",
  "olive",
  "inert",
  "askew",
  "heist",
  "shown",
  "zesty",
  "trash",
  "larva",
  "forgo",
  "story",
  "hairy",
  "train",
  "homer",
  "badge",
  "midst",
  "canny",
  "shine",
  "gecko",
  "farce",
  "slung",
  "tipsy",
  "metal",
  "yield",
  "delve",
  "being",
  "scour",
  "glass",
  "gamer",
  "scrap",
  "money",
  "hinge",
  "album",
  "vouch",
  "asset",
  "tiara",
  "crept",
  "bayou",
  "atoll",
  "manor",
  "creak",
  "showy",
  "phase",
  "froth",
  "depth",
  "gloom",
  "flood",
  "trait",
  "girth",
  "piety",
  "goose",
  "float",
  "donor",
  "atone",
  "primo",
  "apron",
  "blown",
  "cacao",
  "loser",
  "input",
  "gloat",
  "awful",
  "brink",
  "smite",
  "beady",
  "rusty",
  "retro",
  "droll",
  "gawky",
  "hutch",
  "pinto",
  "egret",
  "lilac",
  "sever",
  "field",
  "fluff",
  "agape",
  "voice",
  "stead",
  "berth",
  "madam",
  "night",
  "bland",
  "liver",
  "wedge",
  "roomy",
  "wacky",
  "flock",
  "angry",
  "trite",
  "aphid",
  "tryst",
  "midge",
  "power",
  "elope",
  "cinch",
  "motto",
  "stomp",
  "upset",
  "bluff",
  "cramp",
  "quart",
  "coyly",
  "youth",
  "rhyme",
  "buggy",
  "alien",
  "smear",
  "unfit",
  "patty",
  "cling",
  "glean",
  "label",
  "hunky",
  "khaki",
  "poker",
  "gruel",
  "twice",
  "twang",
  "shrug",
];

let randomIndex = Math.floor(Math.random() * wordList.length);
let secret = wordList[randomIndex];

let currentAttempt = "";
let history = [];

function handleKeyDown(e) {
  if (e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }
  handleKey(e.key);
}

function handleKey(key) {
  if (history.length === 6) {
    return;
  }
  if (isAnimating) {
    return;
  }
  let letter = key.toLowerCase();
  if (letter === "enter") {
    if (currentAttempt.length < 5) {
      return;
    }
    if (!wordList.includes(currentAttempt)) {
      alert("없는 단어 입니다");
      return;
    }
    if (history.length === 5 && currentAttempt !== secret) {
      alert(secret);
    }
    history.push(currentAttempt);
    currentAttempt = "";
    updateKeyboard();
    saveGame();
    pauseInput();
  } else if (letter === "backspace") {
    currentAttempt = currentAttempt.slice(0, currentAttempt.length - 1);
  } else if (/^[a-z]$/.test(letter)) {
    if (currentAttempt.length < 5) {
      currentAttempt += letter;
      animatePress(currentAttempt.length - 1);
    }
  }
  updateGrid();
}

let isAnimating = false;

function pauseInput() {
  if (isAnimating) throw Error("멈춤");
  isAnimating = true;
  setTimeout(() => {
    isAnimating = false;
  }, 3000);
}
//create grid div
function buildGrid() {
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("div");
    for (let j = 0; j < 5; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      let front = document.createElement("div");
      front.className = "front";
      let back = document.createElement("div");
      back.className = "back";
      let surface = document.createElement("div");
      surface.className = "surface";
      surface.style.transitionDelay = j * 300 + "ms";
      surface.appendChild(front);
      surface.appendChild(back);
      cell.appendChild(surface);
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
}

//Grid Update
function updateGrid() {
  for (let i = 0; i < 6; i++) {
    let row = grid.children[i];
    if (i < history.length) {
      drawAttempt(row, history[i], true);
    } else if (i === history.length) {
      drawAttempt(row, currentAttempt, false);
    } else {
      drawAttempt(row, "", false);
    }
  }
}

//시도
function drawAttempt(row, attempt, solved) {
  for (let i = 0; i < 5; i++) {
    let cell = row.children[i];
    let surface = cell.firstChild;
    let front = surface.children[0];
    let back = surface.children[1];
    if (attempt[i] !== undefined) {
      front.textContent = attempt[i];
      back.textContent = attempt[i];
    } else {
      // lol
      front.innerHTML = '<div style="opacity: 0">X</div>';
      back.innerHTML = '<div style="opacity: 0">X</div>';
      clearAnimation(cell);
    }
    front.style.backgroundColor = BLACK;
    front.style.borderColor = "";
    if (attempt[i] !== undefined) {
      front.style.borderColor = MIDDLEGREY;
    }
    back.style.backgroundColor = getBgColor(attempt, i);
    back.style.borderColor = getBgColor(attempt, i);
    if (solved) {
      cell.classList.add("solved");
    } else {
      cell.classList.remove("solved");
    }
  }
}

let BLACK = "#111";
let GREY = "#212121";
let MIDDLEGREY = "#666";
let LIGHTGREY = "#888";
let GREEN = "#538d4e";
let YELLOW = "#b59f3b";
//
function getBgColor(attempt, i) {
  let correctLetter = secret[i];
  let attemptLetter = attempt[i];
  if (attemptLetter === undefined || secret.indexOf(attemptLetter) === -1) {
    return "#212121";
  }
  if (correctLetter === attemptLetter) {
    return "#538d4e";
  }
  return "#b59f3b";
}

function buildKeyboard() {
  buildKeyboardRow("qwertyuiop", false);
  buildKeyboardRow("asdfghjkl", false);
  buildKeyboardRow("zxcvbnm", true);
}

function buildKeyboardRow(letters, isLastRow) {
  let row = document.createElement("div");
  if (isLastRow) {
    let button = document.createElement("button");
    button.className = "button";
    button.textContent = "Enter";
    button.style.backgroundColor = LIGHTGREY;
    button.onclick = () => {};
    row.appendChild(button);
  }
  for (let letter of letters) {
    let button = document.createElement("button");
    button.className = "button";
    button.textContent = letter;
    button.style.backgroundColor = LIGHTGREY;
    button.onclick = () => {};
    row.appendChild(button);
  }
  if (isLastRow) {
    let button = document.createElement("button");
    button.className = "button";
    button.textContent = "backspace";
    button.style.backgroundColor = LIGHTGREY;
    button.onclick = () => {};
    row.appendChild(button);
  }
  keyboard.appendChild(row);
}

function getBetterColor(a, b) {
  if (a === GREEN || b || GREEN) {
    return GREEN;
  }
  if (a === YELLOW || b == YELLOW) {
    return YELLOW;
  }
  return GREY;
}

function updateKeyboard() {
  let bestColors = new Map();
  for (let attempt of history) {
    for (let i = 0; i < attempt.length; i++) {
      let color = getBetterColor(attempt, i);
      let key = attempt[i];
      let bestColor = bestColors.get(key);
      bestColors.set(key, getBetterColor(color, bestColor));
    }
  }
  for (let [key, button] of keyboardButtons) {
    button.style.backgroundColor = bestColors.get(key);
    button.style.borderColor = bestColors.get(key);
  }
}

function animatePress(index) {
  let rowIndex = history.length;
  let row = grid.children[rowIndex];
  let cell = row.children[index];
  cell.style.animationName = "press";
  cell.style.animationDuration = "100ms";
  cell.style.animationTimingFuction = "ease-out";
}

function clearAnimation(cell) {
  cell.style.animationName = "";
  cell.style.animationDuration = "";
  cell.style.animationTimingFuction = "";
}

function saveGame() {
  let data = JSON.stringify({
    secret,
    history,
  });
  try {
    localStorage.setItem("data", data);
  } catch (error) {}
}

let grid = document.getElementById("grid");
let keyboard = document.getElementById("keyboard");
let keyboardButtons = new Map();

buildGrid();
updateGrid();
buildKeyboard();
window.addEventListener("keydown", handleKeyDown);
