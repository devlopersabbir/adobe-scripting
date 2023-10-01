if (app && app.name === "Adobe Illustrator") {
  const document = app.activeDocument;

  if (document) {
    // get number of pages
    const pageLength = document.artboards.length;
    for (let i = 0; i <= pageLength; i++) {
      alert("the page is: " + document.artboards[i]);
    }
  } else {
    alert("No document is open!");
  }
} else {
  alert("Adobe Illustrator is not running.");
}
