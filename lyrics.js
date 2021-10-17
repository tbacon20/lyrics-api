function findLyrics(event) {
   event.preventDefault();

   let artist = document.getElementById('artist').value;
   let title = document.getElementById('title').value;

   let url = "https://api.lyrics.ovh/v1/" + artist + "/" + title;

   fetch(url)
    .then(function(response) {
      if (response === "" || response === "undefined") {
        nope = "Sorry, couldn't find any lyrics!" +
        '</br>' + "Check your spelling or try another song!"
        return
      }

      return response.json();
    }).then(function(json) {
      console.log(json);
      lyrics = '<h2>' + title + ' by ' + artist + '</h2>';
      lyrics += json.lyrics;

      if (lyrics.includes("Paroles de la chanson")) {
        lyrics = lyrics.replace("Paroles de la chanson", "");
      }

      lyrics = lyrics.replaceAll("\n", '<br>');

      document.getElementById('result').innerHTML = lyrics;
    })


};

document.getElementById("lyrics").addEventListener("click", findLyrics);
