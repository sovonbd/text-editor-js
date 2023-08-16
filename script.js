function textStyle(elementID, changeType, changeTo) {
  document.getElementById(elementID).addEventListener("click", function () {
    document.getElementById("textarea").style[changeType] = changeTo;
  });
}
document.getElementById("font-size").addEventListener("change", function () {
  document.getElementById("textarea").style.fontSize = document.getElementById("font-size").value + "px";
});
document.getElementById("case").addEventListener("change", function () {
  document.getElementById("textarea").style.textTransform = document.getElementById("case").value;
});
document.getElementById("color").addEventListener("input", function (event) {
  const text = document.getElementById("textarea");
  if (text) {
    text.style.color = event.target.value;
  }
});
textStyle("bold", "fontWeight", "bold");
textStyle("italic", "fontStyle", "italic");
textStyle("underline", "textDecoration", "underline");
textStyle("left", "textAlign", "left");
textStyle("center", "textAlign", "center");
textStyle("right", "textAlign", "right");
textStyle("justify", "textAlign", "justify");
textStyle("upper", "textTransform", "uppercase");
// textStyle("lower", "textTransform", "lowercase");
// textStyle("color", "color", "lowercase");
