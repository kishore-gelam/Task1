let running = false;

function runExample() {
  if (!running) {
    document.getElementById("output").innerText = "Output: John";
    running = true;
    document.getElementById("runBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;
  }
}

function stopExample() {
  document.getElementById("output").innerText = "";
  running = false;
  document.getElementById("runBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
}