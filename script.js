let isRunning = false;

function toggleExample() {
  const btn = document.getElementById("toggleBtn");
  const output = document.getElementById("output");

  if (!isRunning) {
    const person = {
      name: "John",
      greet: function () {
        return this.name;
      }
    };

    output.innerText = "Output: " + person.greet();
    btn.innerText = "Stop Example";
    btn.classList.add("active");
    isRunning = true;
  } else {
    output.innerText = "";
    btn.innerText = "Run Example";
    btn.classList.remove("active");
    isRunning = false;
  }
}

