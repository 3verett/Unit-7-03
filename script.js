document.getElementById('input').addEventListener('click', ageCheck);
let userAge = 0;

function ageCheck () {
  userAge = document.getElementById('age-input').value;
  userAge = parseInt(userAge);

  if (userAge >= 17) {
    document.getElementById('age-answer').innerHTML = 'You can see an R rated movie alone.'
  }
  else if (userAge >= 13) {
    document.getElementById('age-answer').innerHTML = 'You can see a PG-13 rated movie alone.'
  }
  else if (userAge < 13) {
    document.getElementById('age-answer').innerHTML = 'You can see a G rated movie.'
  }
  else {
    document.getElementById('age-answer').innerHTML = 'Please enter a valid age.'
  }
}
