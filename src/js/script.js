"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { burger, dynamicAdaptive, mobileCheck } from "./functions/";

// Components
// import { formValidation } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  dynamicAdaptive();
});
