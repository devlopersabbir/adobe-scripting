if (app && app.name === "Adobe Illustrator") {
  const document = app.activeDocument;

  if (document) {
    // get number of pages
    const totalPage = document.artboards.length;
    alert("the page is: " + totalPage);
  } else {
    alert("No document is open!");
  }
} else {
  alert("Adobe Illustrator is not running.");
}
