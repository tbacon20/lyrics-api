function onClick(e) {
  e.preventDefault();
  alert("handler for click called")
  // get form values
  let artist = document.getElementById('artist').value;
  let title = document.getElementById('title').value;

  // check if number is empty
  if (number === "") {
    number = "random";
  }

  // setup URL
  let url = "https://api.lyrics.ovh/v1/" + artist + "/" + title;
  // call API
  fetch(url)
    .then(function(response) {
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      // update DOM with response
      updateResult(json.text);
    });
}

function updateResult(lyrics) {
  document.getElementById('result').textContent = lyrics;
}

document.getElementById('lyrics').addEventListener('click', onClick);
