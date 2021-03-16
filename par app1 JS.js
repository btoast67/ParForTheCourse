// selectors
let updateParButton = document.querySelector('#update_par');
let addHoleButton = document.querySelector('#add_hole');
let coursePar = document.querySelector('#course_par');
let parInput = document.querySelector('#par_input');
let totalScore = document.querySelector('#total_score');
let scoreInput = document.querySelector('#score_input');
let holeInput = document.querySelector('#hole_input');
let holeList = document.querySelector('#hole_list');
let totalScore = document.querySelector('#total_score');

// events
updateParButton.onclick = updatePar;
addHoleButton.onclick = addHole;

// variables
let coursePar = 0;
let holes = [];
let scoreTotal = 0;
let balance = 0;

// functions
function updatePar(event) {
    event.preventDefault();
    coursePar = parInput.value;
    
    parInput.value = '';
    updateScore();
}

function updateScore() {
    balance = coursePar - scoreTotal;
    totalScore.innerText =  balance;
  if (balance > 0) {
      remainingBalance.classList.remove('green');
      remainingBalance.classList.add('red');
  } else {
    remainingBalance.classList.remove('red');
    remainingBalance.classList.add('green');
}
    }

    function addHole(event) {
        event.preventDefault();
        let holeList = {
            holeName: holeInput.value,
            holeScore: scoreInput.value
        }
        let newHole = document.createElement('p');
        newHole.innerText = hole.holeName + hole.holeScore;
        holeList.appendChild(newHole);
        holeScore = parseInt(scoreInput.value);
        holes.push(expenseAmount);
        holeInput.value = '';
        scoreInput.value = '';
        updateScoreTotal();
    }

    function updateScoreTotal() {
scoreTotal = 0;
// expenses = [100, 300, 200];
//             0     1    2

// expenses[0] = 100
// expenses[1] = 300

// expenseTotal = 0 + 100
// expenseTotal = 100 + 300
// expenseTotal = 400 + 200

for (let i = 0; i < holes.length; i++) {
    scoreTotal = scoreTotal + holes[i]
}
totalScore.innerText = expenseTotal;
updateBalance();
    }