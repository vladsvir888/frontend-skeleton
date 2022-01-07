// bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

// normalize.css
import "normalize.css";

// animate.css
import "animate.css";

// wow.js
import Wow from 'wow.js';

// glightbox
// import GLightbox from 'glightbox'; 
// import 'glightbox/dist/css/glightbox.min.css';

// font-awesome
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import { faPercent } from '@fortawesome/free-solid-svg-icons';

// library.add([faPercent]);

// dom.watch();

// styles
import "./styles/style.scss";

// modules
// import LightCountdown from "./modules/lightCountdown/lightCountdown";
import form from "./modules/form";
import calc from "./modules/calc";
import lazyImages from "./modules/lazyImages";

document.addEventListener('DOMContentLoaded', () => {
  // new LightCountdown({animation: "animate__animated animate__flipInX"}).play();
  form();
  calc();
  lazyImages();

  // wow.js
  new Wow().init();
  
  // glightbox
  // GLightbox({
  //   touchNavigation: true,
  //   loop: false,
  // });
});