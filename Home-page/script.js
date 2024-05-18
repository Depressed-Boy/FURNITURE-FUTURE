document.getElementById("searchIcon").addEventListener("click", function () {
  var searchBox = document.getElementById("searchBox");
  if (searchBox.style.display === "none" || searchBox.style.display === "") {
    searchBox.style.display = "block";
  } else {
    searchBox.style.display = "none";
  }
});
