function displayPoem(response) {
  console.log("generated poem");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "f55d396ae54o7a80b1e5dfc1t9302b80";
  let context =
    "You are a romantic Poem expert and love to write short poem. Your mission is to generate a 4 line poem in basic HTLM separating each line with a <br> element. Make sure to follow the user instructions. Sign the Poem with 'SheCodes AI' in a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions are: Generate a French poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
