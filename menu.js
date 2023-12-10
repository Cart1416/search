/// execute_script.js
var version = "alpha 6";

const secretMenu = {
help: "Show all commands",
secretCommand1: "Perform secret command 1",
darkmode: "Enable Dark mode for this page",
version: "Show the menu version",
runcode: "Run some javascript code",
cartgames: "Open Cart's Games",
editmode: "Make text on this page editable",
// Add more secret commands as needed
};

function showHelp() {
  let helpMessage = "Available Commands:\n";
  for (const key in secretMenu) {
    helpMessage += `${key}: ${secretMenu[key]}\n`;
  }
  alert(helpMessage);
}

function performSecretCommand1() {
  alert("Executing secret command 1...");
}

function secretCommand2() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.querySelector('p').style.color = '#b3b3b3';
    document.querySelector('a').style.color = '#4db8ff';
    document.querySelector('h1').style.color = '#ffcc66';
    alert("Dark Mode successful");
}

function showversion() {
    alert(version);
}

function runjscode() {
    eval(prompt("js to execute:"));
}

function runcartgames() {
    window.open("https://cg.pythonanywhere.com/")
}

function runeditmode() {
  if(document.body.contentEditable !== 'true') {
      document.body.contentEditable = 'true'; document.designMode='on'; void 0
  } else {
      document.body.contentEditable = 'false'; document.designMode='off'; void 0
  }
}

function menu() {
  let userInput;
  do {
    userInput = prompt("Cart's Hacking Menu>");
    if (userInput) {
      processCommand(userInput);
    }
  } while (userInput !== null);
}

function processCommand(command) {
  switch (command) {
    case "help":
      showHelp();
      break;
    case "secretCommand1":
      performSecretCommand1();
      break;
    case "darkmode":
      secretCommand2();
      break;
    case "version":
      showversion();
      break;
    case "runcode":
      runjscode();
      break;
    case "cartgames":
      runcartgames();
      break;
    case "editmode":
      runeditmode();
      break;
    // Add more cases for additional commands
    default:
      alert("Invalid command. Type 'help' for a list of commands.");
  }
}

window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
        menu();
    }
})
