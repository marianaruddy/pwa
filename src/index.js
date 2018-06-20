import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("A2HS", event);

  window.a2hsEvent = event;
});

registerServiceWorker();
