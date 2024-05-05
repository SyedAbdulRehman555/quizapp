var arr = [
  {
    qname: "Q1) HTML stands for ?",
    option1: "Hyper text markup language",
    option2: "hyper language",
    option3: "text markup language",
    corr_answer: "1",
  },
  {
    qname: "Q2) Css stands for ?",
    option1: "Cascading style sheet",
    option2: "cascading sheets",
    option3: "styling sheets",
    corr_answer: "1",
  },
  {
    qname: "Q3) Javascript is case sensitive ?",
    option1: "True",
    option2: "False",
    option3: "none",
    corr_answer: "1",
  },
  {
    qname: "Q4) br tag is used for line break ?",
    option1: "True",
    option2: "False",
    option3: "none",
    corr_answer: "1",
  },
  {
    qname: "Q5) h6 is the smallest heading  in HTML ?",
    option1: "False",
    option2: "True",
    option3: "None",
    corr_answer: "2",
  },
];
var scorearr = [];
var content = document.getElementsByClassName("content");
var ques = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var btn = document.getElementById("btn");
var opt_grp = document.getElementsByClassName("opt_grp");
var g1 = document.getElementsByName("g1");
var index = 0;
var ans;
var score = 0;

btn.disabled = true;
console.log(arr.length);

function enable_btn() {
  btn.disabled = false;
}

function startQuiz() {
  ques.innerHTML = arr[index].qname;
  p1.innerHTML = arr[index].option1;
  p2.innerHTML = arr[index].option2;
  p3.innerHTML = arr[index].option3;
  index = 1;
}

function getQues() {
  if (index != arr.length) {
    ques.innerHTML = arr[index].qname;
    p1.innerHTML = arr[index].option1;
    p2.innerHTML = arr[index].option2;
    p3.innerHTML = arr[index].option3;
    console.log(arr[index - 1].qname);

    for (i = 0; i < g1.length; i++) {
      if (g1[i].checked) {
        var ans = g1[i].value;
      }
    }
    console.log("value of answer is " + parseInt(ans));
    console.log(
      "correct value of answer is " + parseInt(arr[index].corr_answer)
    );

    if (parseInt(ans) == parseInt(arr[index - 1].corr_answer)) {
      console.log("yes");
      scorearr.push(1);
    }

    opt1.checked = false;
    opt2.checked = false;
    opt3.checked = false;
    index++;

    ans = "";
  } else {
    alert("quiz has completed");
    content[0].innerHTML = ` <h1 id="ques"> Quiz has completed..<br>Your Percentage is ${
      (scorearr.length / 5) * 100
    }</h1>`;
    console.log(content);
    console.log("total score is ==== " + score);
    console.log(scorearr.length);
  }
  btn.disabled = true;
}
