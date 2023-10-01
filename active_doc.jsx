if (!app.homeScreenVisible) {
  app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}
const myDoc = app.documents.add();

// generate background color
generateBackground();
function generateBackground() {
  const doc = app.activeDocument;
  const background = doc.pathItems.add();
  background.filed = true;
  background.stock = false;
  // create object from CMYK color
  const bgfillColor = new CMYKColor();
  bgfillColor.cyan = 4;
  bgfillColor.magenta = 2;
  bgfillColor.yellow = 97;
  bgfillColor.black = 1;

  background.fillColor = bgfillColor;
  background.setEntirePath([
    [0, 0],
    [doc.width, 0],
    [doc.width, doc.height],
    [0, doc.height],
  ]);
}
