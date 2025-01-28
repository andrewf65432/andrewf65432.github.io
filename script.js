// Helper to disable pasting in text inputs
function disablePaste(input) {
  input.addEventListener("paste", (e) => e.preventDefault());
}

// Max character limit for text boxes
const MAX_CHARS = 250;

// Step 1: Enter Topic
document.getElementById("submitTopic").addEventListener("click", () => {
  const topic = document.getElementById("topicInput").value.trim();
  if (!topic) {
    document.getElementById("topicResponse").textContent = "Please enter a valid topic.";
    return;
  }

  // Simulated AI Response: 3 clarifying questions
  const clarifyingQuestions = [
    `What specific aspect of "${topic}" would you like to focus on?`,
    `Who is your target audience for this topic?`,
    `What level of depth would you like (e.g., beginner, advanced)?`,
  ];

  const clarificationSection = document.getElementById("step2");
  const clarificationInputs = clarifyingQuestions
    .map(
      (question, index) => `
      <div class="clarification-item">
        <label for="clarificationInput${index}">${question}</label>
        <input type="text" id="clarificationInput${index}" maxlength="${MAX_CHARS}" placeholder="Enter your answer...">
        <p class="error-message hidden" id="error${index}">Please answer this question.</p>
      </div>`
    )
    .join("");

  document.getElementById("clarificationQuestions").innerHTML = clarificationInputs;

  // Disable pasting for all inputs
  clarifyingQuestions.forEach((_, index) =>
    disablePaste(document.getElementById(`clarificationInput${index}`))
  );

  clarificationSection.classList.remove("hidden");
});

// Step 2: Clarify Topic
document.getElementById("submitClarification").addEventListener("click", () => {
  let allFilled = true;

  // Check if all inputs are filled
  for (let i = 0; i < 3; i++) {
    const input = document.getElementById(`clarificationInput${i}`);
    const error = document.getElementById(`error${i}`);
    if (input.value.trim() === "") {
      input.classList.add("error");
      error.classList.remove("hidden");
      allFilled = false;
    } else {
      input.classList.remove("error");
      error.classList.add("hidden");
    }
  }

  if (!allFilled) return;

  // Simulated response
  document.getElementById("clarificationResponse").innerHTML = `
    Thanks for clarifying! Based on your input, the topic is refined. Moving to the title selection step.
  `;

  // Future Function:
  // submitClarifications(answers) - Sends clarification responses to backend for processing.

  document.getElementById("step3").classList.remove("hidden");
});

// Step 3: Choose Title
const titleOptions = [
  "The Secrets of Time Management",
  "Mastering Productivity in Life",
  "Unlocking Your Inner Potential",
  "The Path to Organized Living",
  "Efficiency for Everyday People",
];

function renderTitleOptions() {
  const titleOptionsDiv = document.getElementById("titleOptions");
  titleOptionsDiv.innerHTML = titleOptions
    .map(
      (title, index) =>
        `<button class="title-option" data-title="${title}">Option ${index + 1}: ${title}</button>`
    )
    .join("");

  // Add event listener to each button
  document.querySelectorAll(".title-option").forEach((button) =>
    button.addEventListener("click", (event) => {
      const selectedTitle = event.target.getAttribute("data-title");
      alert(`You selected: "${selectedTitle}"`);
      document.getElementById("step4").classList.remove("hidden");
    })
  );
}

document.getElementById("submitTitle").addEventListener("click", () => {
  const customTitle = document.getElementById("customTitle").value.trim();

  if (!customTitle) {
    alert("Please select a title or provide a custom one.");
    return;
  }

  alert(`You selected: "${customTitle}"`);
  document.getElementById("step4").classList.remove("hidden");
});

// Step 4: Review Outline
const hardcodedOutline = `
<h4>Introduction: The Basics of Productivity</h4>
<ul>
  <li>Chapter 1: Understanding Time</li>
  <li>Chapter 2: Setting Realistic Goals</li>
  <li>Chapter 3: Strategies for Focus</li>
  <li>Chapter 4: Overcoming Procrastination</li>
  <li>Chapter 5: Maintaining Momentum</li>
</ul>
<h4>Conclusion: Sustaining Long-Term Success</h4>
`;

document.getElementById("outlinePreview").innerHTML = hardcodedOutline;

document.getElementById("approveOutline").addEventListener("click", () => {
  alert("Outline approved! Proceeding to ebook generation...");
  document.getElementById("step5").classList.remove("hidden");
});

document.getElementById("requestOutlineChanges").addEventListener("click", () => {
  alert("Feedback submitted! Generating updated outline...");
  document.getElementById("outlineResponse").textContent =
    "Updated outline coming soon (hardcoded response).";
});
