'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}
function displayResults(responseJson) {
  console.log(responseJson);

  if (responseJson.message === "Breed not found") {
    alert('breed not identifiable, try again.');
  } else {
    $('.results').html(`<h2>Check out this dog!</h2>`);

    let newUrl = responseJson.message.split("/")
    let breedName = newUrl[4];
    $('.results').append(`<h3>${breedName}</h3>`);

    $('.results').append(
      `<img src="${responseJson.message}" class="results-img" width="250" height="auto">`);
    $('.results').removeClass('hidden');
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breedOfDog = $('input[name="breedOfDog"]').val();
    getDogImage(breedOfDog);
  });
}
$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});