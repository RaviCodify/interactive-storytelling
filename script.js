// Select the DOM elements
const startContainer = document.querySelector(".start-container")
const startGame = document.querySelector(".start-game")
const storyBox = document.querySelector(".story-box");
const optionsContainer = document.querySelector(".options-container");

// Button to start the game.
startGame.addEventListener("click",()=>{
  startContainer.innerHTML=""
  startContainer.style.backgroundColor = "transparent"
  startContainer.style.zIndex = "-1"
})

let currentStage = 0; // Track the current stage of the story

// Define the story stages and options
const storyStages = [
  {
    text: "You are in a forest. What do you do?",
    options: ["Explore", "Rest", "Build Shelter"],
  },
  {
    text: "You hear a sound. What do you do?",
    options: ["Ignore", "Hide", "Follow the sound"],
  },
  {
    text: "You find an ancient, overgrown statue. What do you do?",
    options: ["Examine it", "Leave it", "Take a piece"],
  },
  {
    text: "You find a river. What do you do?",
    options: ["Swim", "Fish", "Follow the river"],
  },
  {
    text: "You encounter a wild animal. What do you do?",
    options: ["Fight", "Run", "Climb a tree"],
  },
  {
    text: "You find a cave. What do you do?",
    options: ["Enter", "Ignore", "Look around"],
  },
  {
    text: "You see smoke in the distance. What do you do?",
    options: ["Investigate", "Avoid", "Signal for help"],
  },
  {
    text: "You find a backpack. What do you do?",
    options: ["Open it", "Leave it", "Take it with you"],
  },
  {
    text: "You encounter another person. What do you do?",
    options: ["Talk", "Avoid", "Observe from a distance"],
  },
  {
    text: "It starts to rain heavily. What do you do?",
    options: ["Find shelter", "Keep moving", "Collect rainwater"],
  },
  {
    text: "You come across a fallen tree. What do you do?",
    options: ["Climb over", "Go around", "Rest against it"],
  },
  {
    text: "You find a map. What do you do?",
    options: ["Read it", "Ignore it", "Follow it"],
  },
  {
    text: "You spot a fruit tree. What do you do?",
    options: ["Pick the fruit", "Leave it", "Examine it"],
  },
  {
    text: "You discover an abandoned campsite. What do you do?",
    options: ["Search it", "Leave it", "Use it for shelter"],
  },
  {
    text: "You find a mysterious object. What do you do?",
    options: ["Pick it up", "Ignore it", "Examine it"],
  },
  {
    text: "Night is falling. What do you do?",
    options: ["Set up camp", "Keep moving", "Climb a tree for safety"],
  },
  {
    text: "You find a hidden path. What do you do?",
    options: ["Follow it", "Ignore it", "Mark it"],
  },
  {
    text: "You see a glimmering light ahead. What do you do?",
    options: ["Investigate", "Avoid", "Set up camp nearby"],
  },
  {
    text: "You find a strange symbol on the ground. What do you do?",
    options: ["Examine it", "Ignore it", "Draw it in your journal"],
  },
  {
    text: "You reach a clearing with a beautiful view. What do you do?",
    options: ["Rest", "Take a picture", "Keep moving"],
  },
];

// Function to create options based on the current stage
function createOptions() {
  const currentStory = storyStages[currentStage];
  storyBox.textContent = currentStage + 1 + ". " + currentStory.text;
  optionsContainer.innerHTML = "";

  currentStory.options.forEach((optionText) => {
    const option = document.createElement("div");
    option.classList.add(
      "options",
      "border",
      "border-danger",
      "p-2",
      "m-2",
      "rounded",
      "col-4",
      "hover-scale"
    );
    option.style.cursor = "pointer";
    option.textContent = optionText;
    optionsContainer.appendChild(option);

    option.addEventListener("click", () => {
      proceedToNextStage();
    });
  });
}

// Function to proceed to the next stage
function proceedToNextStage() {
  currentStage++;
  if (currentStage < storyStages.length) {
    createOptions();
  } else {
    endStory();
  }
}

// Function to end the story
function endStory() {
  optionsContainer.innerHTML = "";
  const endMessage = document.createElement("div");
  endMessage.textContent = "The End";
  endMessage.classList.add(
    "end-message",
    "border",
    "border-primary",
    "rounded",
    "col-4",
    "p-2",
    "mx-auto",
    "my-2"
  );
  optionsContainer.appendChild(endMessage);
}

// Initialize the story
createOptions();
