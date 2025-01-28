const GPT_API_URL = "https://api.openai.com/v1/engines/gpt-4o/completions"; // Placeholder
const GPT_API_KEY = "YOUR_API_KEY_HERE"; // Replace with your key

const topicInput = document.getElementById("topicInput");
const submitTopicButton = document.getElementById("submitTopic");
const aiResponseDiv = document.getElementById("aiResponse");

submitTopicButton.addEventListener("click", async () => {
  const topic = topicInput.value.trim();

  if (!topic) {
    aiResponseDiv.innerHTML = "<p>Please enter a valid topic.</p>";
    return;
  }

  aiResponseDiv.innerHTML = "<p>Submitting your topic...</p>";

  try {
    const response = await fetch(GPT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GPT_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `The user wants to write an eBook about: ${topic}. Ask clarifying questions about the topic to refine it.`,
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    const aiMessage = data.choices[0].text.trim();

    aiResponseDiv.innerHTML = `<p>${aiMessage}</p>`;
  } catch (error) {
    console.error(error);
    aiResponseDiv.innerHTML = "<p>There was an error processing your request. Please try again later.</p>";
  }
});
