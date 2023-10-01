if (app && app.name === "Adobe Illustrator") {
  try {
    var document = app.activeDocument;
    if (!document) {
      alert("No document is open!");
    }
    // get the number of pages
    var pageLength = document.artboards.length;
    for (var i = 0; i < pageLength; i++) {
      var artboard = document.artboards[i];
    //   var labelText = "Page " + (i + 1);

      // create a new text frame
      var textFrame = document.textFrames.add();
      textFrame.contents = labelText;

      // Position the text frame at the right top corner
      textFrame.left = artboard.artboardRect[2] - 110; // Set to the right edge of the artboard
      textFrame.top = artboard.artboardRect[1] - 30; // Adjust the vertical position as needed

      textFrame.textRange.characterAttributes.size = 30; // Set the desired text size

    }
    app.redraw();
    // alert("Page numbers added to the right top corner.");
  } catch (error) {
    alert("Error occurred: " + error);
  }
} else {
  alert("Adobe Illustrator is not running.");
}
