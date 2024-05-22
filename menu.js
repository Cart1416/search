/// execute_script.js
var version = "Release 1.4 2";

var keepRunning = true;
var modScripts = {};
var repoList = {};

const secretMenu = {
help: "Show all commands",
exit: "Exit the menu, you can also use cancel of esc",
secretCommand1: "Perform secret command 1",
darkmode: "Enable Dark mode for this page",
version: "Show the menu version",
runcode: "Run some javascript code",
cartgames: "Open Cart's Games",
editmode: "Make text on this page editable",
googlecache: "See a cached version of a site",
SpontaneousC: "Open SpontaneousC",
library: "Open the library of javascript code",
importrepo: "Import a repository (case sensetive)",
reoplist: "Import an official repository easily (case sensetive)",
devtools: "Add Eruda Developer Tools",
// Add more secret commands as needed
};

function setElementStyle(selector, styles) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
      Object.assign(element.style, styles);
  });
}

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

function secretCommand2(variable) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.querySelector('p').style.color = '#b3b3b3';
    document.querySelector('a').style.color = '#4db8ff';
    document.querySelector('h1').style.color = 'white';
    document.querySelector('div').style.backgroundColor = 'black';
    setElementStyle('p, span, li, td, th, label', {
        color: '#b3b3b3',
    });
    
    setElementStyle('a', {
        color: '#4db8ff',
        textDecoration: 'none',
    });
    
    setElementStyle('h1, h2, h3, h4, h5, h6', {
        color: 'white',
    });
    
    setElementStyle('div, article, section, main, aside, nav', {
        backgroundColor: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: '5px',
        padding: '10px',
    });
    
    setElementStyle('button, input[type="button"], input[type="submit"]', {
        backgroundColor: '#4db8ff',
        color: 'white',
        padding: '8px 12px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    });
    if (variable = true) {
      alert("Dark Mode successful");
    }
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
  keepRunning = false;
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

function autoImportRepo(repoLink) {
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
              alert(`Mod '${selectedMod}' from the selected repo has been loaded.`);
          } else {
              alert("Invalid mod selection.");
          }
      })
      .catch(error => {
          console.error('Error fetching repository:', error);
          alert("Error fetching repository. Check the link and try again.");
      });
}

function runRepoList() {
  keepRunning = false;
  fetch("https://Cart1416.github.io/search/repolist.txt")
      .then(response => response.text())
      .then(data => {
          const repoLines = data.split('\n');
          for (const repoLine of repoLines) {
              const [repoName, repoLink] = repoLine.split(': ');
              repoList[repoName] = repoLink;
          }

          const repoNames = Object.keys(repoList);
          const selectedRepo = prompt("Choose a repository to import mods from:\n" + repoNames.join('\n'));

          if (repoList[selectedRepo]) {
              autoImportRepo(repoList[selectedRepo]);
          } else {
              alert("Invalid repository selection.");
          }
      })
      .catch(error => {
          console.error('Error fetching repolist:', error);
          alert("Error fetching repolist. Check the link and try again.");
      });
}

function runDevTools() {
  var script1 = document.createElement('script');
  script1.src = "https://cdn.jsdelivr.net/npm/eruda";
  document.body.appendChild(script1);
  
  var script2 = document.createElement('script');
  script2.textContent = "eruda.init();";
  document.body.appendChild(script2);

  setTimeout(() => {
    var script1 = document.createElement('script');
    script1.src = "https://cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script1);
    
    var script2 = document.createElement('script');
    script2.textContent = "eruda.init();";
    document.body.appendChild(script2);
  }, 500);
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
      secretCommand2(true);
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
      runImportRepo();
      break;
    case "exit":
      keepRunning = false;
      break;
    case "repolist":
      keepRunning = false;
      runRepoList();
      break;
    case "devtools":
      keepRunning = false;
      runDevTools();
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
});

function noGuardian() {
  let titleText = "OH YEAH!!!"
  let descText = "This webpage has been blocked with direction AND magnitude!"
  //let linkText = chrome.runtime.getURL("vector2.png");
  let linkText = "https://i.imgflip.com/3j9iwc.jpg";
  
  //
  let lla = $('h1:contains("Restricted")').html().replace("Restricted", titleText);
  $('h1:contains("Restricted")').html(lla);
  $(".content h1").css("color", "#ff9e42")
  
  //
  let tta = $("body").html().replace("This website has been blocked by your administrator.", descText)
  $("body").html(tta)
  
  //
  $(".content").css("background-image", `url("${linkText}"`)
}

noGuardian();