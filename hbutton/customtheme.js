var colorWell;
            var defaultColor = "#696969";

            window.addEventListener("load", startup, false);

            function startup() {
              colorWell = document.querySelector("#colorbg");
              colorWell.value = defaultColor;
              colorWell.addEventListener("input", updateFirst, false);
              colorWell.addEventListener("change", updateAll, false);
              colorWell.select();
              }
            function updateFirst(event) {
              var bo = document.querySelector("#body");

              if (bo) {
                bo.style.backgroundColor = event.target.value;
                }
              }

            var colorWell2;
            var defaultColor2 = "black";

            window.addEventListener("load", startup2, false);

            function startup2() {
              colorWell2 = document.querySelector("#colorh");
              colorWell2.value = defaultColor2;
              colorWell2.addEventListener("input", updateFirst2, false);
              colorWell2.addEventListener("change", updateAll, false);
              colorWell2.select();
              }
            function updateFirst2(event) {
              var h = document.querySelector("#body");

              if (h) {
                h.style.color = event.target.value;
                }
              }
            
            var colorWell3;
            var defaultColor3 = "#ff0080";

            window.addEventListener("load", startup3, false);

            function startup3() {
              colorWell3 = document.querySelector("#colorbgbut");
              colorWell3.value = defaultColor3;
              colorWell3.addEventListener("input", updateFirst3, false);
              colorWell3.addEventListener("change", updateAll, false);
              colorWell3.select();
              }
            function updateFirst3(event) {
              var texbuth = document.querySelector("#home");

              if (texbuth) {
                texbuth.style.backgroundColor = event.target.value;
                }
                var texbutt = document.querySelector("#themes");

              if (texbutt) {
                texbutt.style.backgroundColor = event.target.value;
                }
              }

            var colorWell4;
            var defaultColor4 = "black";

            window.addEventListener("load", startup4, false);

            function startup4() {
              colorWell4 = document.querySelector("#colortexbut");
              colorWell4.value = defaultColor4;
              colorWell4.addEventListener("input", updateFirst4, false);
              colorWell4.addEventListener("change", updateAll, false);
              colorWell4.select();
              }
            function updateFirst4(event) {
              var texbutht = document.querySelector("#home");

              if (texbutht) {
                texbutht.style.color = event.target.value;
                }
                var texbuttt = document.querySelector("#themes");

              if (texbuttt) {
                texbuttt.style.color = event.target.value;
                }
              }

            var colorWell5;
            var defaultColor5 = "#ff9966";

            window.addEventListener("load", startup5, false);

            function startup5() {
              colorWell5 = document.querySelector("#colorhbgbut");
              colorWell5.value = defaultColor5;
              colorWell5.addEventListener("input", updateFirst5, false);
              colorWell5.addEventListener("change", updateAll, false);
              colorWell5.select();
              }
            function updateFirst5(event) {
              var hbg = document.querySelector("#hbutton");

              if (hbg) {
                hbg.style.backgroundColor = event.target.value;
                }
              }

            var colorWell6;
            var defaultColor6 = "black";

            window.addEventListener("load", startup6, false);

            function startup6() {
              colorWell6 = document.querySelector("#colorhtexbut");
              colorWell6.value = defaultColor6;
              colorWell6.addEventListener("input", updateFirst6, false);
              colorWell6.addEventListener("change", updateAll, false);
              colorWell6.select();
              }
            function updateFirst6(event) {
              var htex = document.querySelector("#hbutton");

              if (htex) {
                htex.style.color = event.target.value;
                }
              }