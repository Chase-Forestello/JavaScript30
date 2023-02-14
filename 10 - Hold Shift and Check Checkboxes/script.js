const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxs);

let lastChecked;

function handleCheck(e) {
  // check if they had shift key down
  // check if they are checking or unchecking

  let inbetween = false;
  if (e.shiftKey && this.checked) {
    // handle checks through last checked box
    checkboxs.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inbetween = !inbetween;
        console.log(`Starting to check inbetween`);
      }
      if (inbetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxs.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
