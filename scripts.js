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