function myFunction() {
    var x = document.getElementById("res-left");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
