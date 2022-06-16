function myFunction() {
    var x = document.getElementById("myheader");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }