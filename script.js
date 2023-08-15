function textStyle(elementID, changeType, changeTo) {
  document.getElementById(elementID).addEventListener("click", function () {
    document.getElementById("textarea").style[changeType] = changeTo;
  });
}

textStyle("bold", "fontWeight", "bold");
textStyle("italic", "fontStyle", "italic");
textStyle("underline", "textDecoration", "underline");
textStyle("left", "textAlign", "left");
textStyle("center", "textAlign", "center");
textStyle("right", "textAlign", "right");
textStyle("justify", "textAlign", "justify");
textStyle("upper", "textTransform", "uppercase");
textStyle("lower", "textTransform", "lowercase");
