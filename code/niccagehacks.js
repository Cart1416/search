var keepRunning = true;

const NCSecretMenu = {
help: "Show all commands",
speed: "Multiply the speed of the player",
deletecelery: "Delete all celery",
toporbit: "Stop celery from orbiting"
};

function NCShowHelp() {
  let helpMessage = "Available Commands:\n";
  for (const key in NCSecretMenu) {
    helpMessage += `${key}: ${NCSecretMenu[key]}\n`;
  }
  alert(helpMessage);
}

function runSpeed() {
    speedModifier = prompt("Enter Speed Multiplier");
    multiplier = Number(speedModifier);
    player.speed = multiplier * 250;
    keepRunning = false;
}

function runDeleteCelery() {
    enemyarr = [];
    keepRunning = false;
}

function runInvulnerable() {
    keysDown.push(32);
    keepRunning = false;
}

function runStopOrbit() {
    var protectingtoken = false;
    keepRunning = false;
}

function NCMenu() {
  let userInput;
  keepRunning = true;
  do {
    if (keepRunning) {
      userInput = prompt("Nic Cage Eats Stuff Hacking Menu>");
      if (userInput) {
        NCProcessCommand(userInput);
      }
    } else {return;}
  } while (userInput !== null);
}

function NCProcessCommand(command) {
  switch (command) {
    case "help":
      NCShowHelp();
      break;
    case "speed":
      runSpeed();
      break;
    case "deletecelery":
      runDeleteCelery();
      break;
    case 'invulnerable':
      runInvulnerable();
      break;
    case 'stoporbit':
      runStopOrbit();
      break;
    default:
      alert("Invalid command. Type 'help' for a list of commands.");
  }
}

NCMenu();