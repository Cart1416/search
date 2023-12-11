/// execute_script.js
var version = "alpha 11";

var keepRunning = true;
var modScripts = {};

const secretMenu = {
help: "Show all commands",
secretCommand1: "Perform secret command 1",
darkmode: "Enable Dark mode for this page",
version: "Show the menu version",
runcode: "Run some javascript code",
cartgames: "Open Cart's Games",
editmode: "Make text on this page editable",
googlecache: "See a cached version of a site",
SpontaneousC: "Open SpontaneousC",
library: "Open the library of javascript code",
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
    keepRunning = false;
}

function showversion() {
    alert(version);
}

function runjscode() {
    eval(prompt("js to execute:"));
    keepRunning = false;
}

function runcartgames() {
  var linkElement = document.createElement("a");
  linkElement.href = "https://cg.pythonanywhere.com/";
  linkElement.target = "_blank";
  linkElement.click();
  keepRunning = false;
}

function runeditmode() {
  if(document.body.contentEditable !== 'true') {
      document.body.contentEditable = 'true'; document.designMode='on'; void 0
  } else {
      document.body.contentEditable = 'false'; document.designMode='off'; void 0
  }
  keepRunning = false;
}

function rungooglecache() {
  var val = prompt("Enter the webpage you want to see:", "");location = "http://webcache.googleusercontent.com/search?q=cache:" + escape(val)
}

function runSpontaneousC() {
  var linkElement = document.createElement("a");
  linkElement.href = "https://sites.google.com/stjosephmaumee.org/spontaneousc/";
  linkElement.target = "_blank";
  linkElement.click();
  keepRunning = false;
}

function runLibrary() {
  var linkElement = document.createElement("a");
  linkElement.href = "https://Cart1416.github.io/search/official.html";
  linkElement.target = "_blank";
  linkElement.click();
  keepRunning = false;
}

function runImportRepo() {
  var repoLink = prompt("Enter the link to the repository txt file:");
  if (!repoLink) {
      alert("Invalid repository link.");
      return;
  }

  fetch(repoLink)
      .then(response => response.text())
      .then(data => {
          const modLines = data.split('\n');
          for (const modLine of modLines) {
              const [modName, modScriptLink] = modLine.split(': ');
              modScripts[modName] = modScriptLink;
          }

          const modNames = Object.keys(modScripts);
          const selectedMod = prompt("Choose a mod to run:\n" + modNames.join('\n'));

          if (modScripts[selectedMod]) {
              const scriptElement = document.createElement("script");
              scriptElement.src = modScripts[selectedMod];
              document.body.appendChild(scriptElement);
              alert(`Mod '${selectedMod}' has been loaded.`);
          } else {
              alert("Invalid mod selection.");
          }
      })
      .catch(error => {
          console.error('Error fetching repository:', error);
          alert("Error fetching repository. Check the link and try again.");
      });
}

function menu() {
  let userInput;
  keepRunning = true;
  do {
    if (keepRunning) {
      userInput = prompt("Cart's Hacking Menu>");
      if (userInput) {
        processCommand(userInput);
      }
    } else {return;}
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
    case "googlecache":
      rungooglecache();
      break;
    case "spontaneousc":
      runSpontaneousC();
      break;
    case "library":
      runLibrary();
      break;
    case "importrepo":
      importRepo();
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
