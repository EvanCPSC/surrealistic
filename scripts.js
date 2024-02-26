function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function openNav2() {
    document.getElementById("customNav").style.width = "250px";
  }
  
  function closeNav2() {
    document.getElementById("customNav").style.width = "0";
  }

  function goodDay() {
    var time = new Date().getHours();
      if (time < 10) {
        alert("good morning");
    } else if (time < 18) {
        alert("good day");
    } else {
        alert("good evening");
    }

  }
function dont() {
    document.write("<style>body { background-color: #505050; color: #bd2873; text-shadow: 1px 1px black; }</style><h1>why didnt you listen</h1> <hr> <h3>refresh the page</h3>")
}