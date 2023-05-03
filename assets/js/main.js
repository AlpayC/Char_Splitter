function cutString() {
  let stringTxt = document.querySelector("#string").value;
  let stringWrd = document.querySelector("#cutstring").value;
  let splittedTxt = stringTxt.split(stringWrd, 1);
  let outputVorne = document.querySelector(".output-vorne");
  let outputHinten = document.querySelector(".output-hinten");
  const radioBefore = document.querySelector("#beforestring");
  const radioAfter = document.querySelector("#afterstring");
  const nonBgClass = document.querySelector(".nonanimatedbg");

  //   Checkt, ob überhaupt ein Wert in irgendeinem der beiden Inputs eingegeben wurde. Danach wird ein Alert ausgegeben
  if (stringWrd == "" || stringTxt == "") {
    alert("Bitte gebe die Zeichenkette und dein String ein");
    // Checkt ob, die Zeichenkette nach der falschen Schreibweise im String enthalten ist.
  } else if (stringTxt.split("" + stringWrd + "")[1] === undefined) {
    outputVorne.style.background = "rgb(226, 226, 226)";
    outputHinten.style.background = "rgb(226, 226, 226)";
    outputVorne.innerHTML = "Das Zeichen konnte leider nicht gefunden werden";
    outputHinten.innerHTML = stringTxt;
    // Wenn die Zeichenkette richtig geschrieben wurde, dann wird geprüft, ob einer der Radiobuttons ausgewählt wurde. Je nach Button, wird an richtiger Stelle getrennt
  } else if (radioBefore.checked) {
    outputVorne.innerHTML = splittedTxt;
    outputHinten.innerHTML =
      stringWrd + stringTxt.split("" + stringWrd + "")[1];
    outputVorne.style.background = "rgb(226, 226, 226)";
    outputHinten.style.background = "rgb(226, 226, 226)";
  } else if (radioAfter.checked) {
    outputVorne.innerHTML = splittedTxt + stringWrd;
    outputHinten.innerHTML = stringTxt.split("" + stringWrd + "")[1];
    outputVorne.style.background = "rgb(226, 226, 226)";
    outputHinten.style.background = "rgb(226, 226, 226)";
    // Hier wird ein Alert ausgegeben, falls die Zeichenkette im zweiten Input fehlt
  } else {
    alert("Bitte gebe die Zeichenkette ein");
  }
}
