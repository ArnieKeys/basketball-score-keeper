let currentScoreHome = document.getElementById("current-score-home");
let currentScoreGuest = document.getElementById("current-score-guest");

let home1 = document.getElementById("home-1");
let home2 = document.getElementById("home-2");
let home3 = document.getElementById("home-3");
let guest1 = document.getElementById("guest-1");
let guest2 = document.getElementById("guest-2");
let guest3 = document.getElementById("guest-3");

home1.addEventListener("click", add1PointHome);
home2.addEventListener("click", add2PointsHome);
home3.addEventListener("click", add3PointsHome);

guest1.addEventListener("click", add1PointGuest);
guest2.addEventListener("click", add2PointsGuest);
guest3.addEventListener("click", add3PointsGuest);

let scoreUpdateHome = 0;
let scoreUpdateGuest = 0;

let freeThrow = 1;
let layUp = 2;
let threePointer = 3;

function add1PointHome() {
  scoreUpdateHome += freeThrow;
  currentScoreHome.textContent = scoreUpdateHome;
}
function add1PointGuest() {
  scoreUpdateGuest += freeThrow;
  currentScoreGuest.textContent = scoreUpdateGuest;
}

function add2PointsHome() {
  scoreUpdateHome += layUp;
  currentScoreHome.textContent = scoreUpdateHome;
}
function add2PointsGuest() {
  scoreUpdateGuest += layUp;
  currentScoreGuest.textContent = scoreUpdateGuest;
}

function add3PointsHome() {
  scoreUpdateHome += threePointer;
  currentScoreHome.textContent = scoreUpdateHome;
}
function add3PointsGuest() {
  scoreUpdateGuest += threePointer;
  currentScoreGuest.textContent = scoreUpdateGuest;
}
