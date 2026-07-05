
    function openTab(evt, tabName) {
      let contents = document.querySelectorAll(".content");
      contents.forEach(content => content.classList.remove("active"));

      let buttons = document.querySelectorAll(".tab-btn");
      buttons.forEach(button => button.classList.remove("active"));

      document.getElementById(tabName).classList.add("active");
      evt.currentTarget.classList.add("active");
    }
    function checkQuiz() {
      let score = 0;
      if (document.querySelector('input[name="q1"]:checked')?.value === "a") score++;
      if (document.querySelector('input[name="q2"]:checked')?.value === "a") score++;
      if (document.querySelector('input[name="q3"]:checked')?.value === "a") score++;
      document.getElementById("quizResult").innerHTML =
        "Resultado: " + score + " de 3 respuestas correctas.";
    }

    function checkVF() {
      let score = 0;

      if (document.getElementById("vf1").value === "verdadero") score++;
      if (document.getElementById("vf2").value === "falso") score++;

      document.getElementById("vfResult").innerHTML =
        "Resultado: " + score + " de 2 respuestas correctas.";
    }

    function checkMatching() {
      let score = 0;

      if (document.getElementById("m1").value === "promocion") score++;
      if (document.getElementById("m2").value === "diseño") score++;

      document.getElementById("matchingResult").innerHTML =
        "Resultado: " + score + " de 2 respuestas correctas.";
    }

    const draggables = document.querySelectorAll('.draggable');
    const dropzones = document.querySelectorAll('.dropzone');

    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
      });

      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
      });
    });

    dropzones.forEach(zone => {
      zone.addEventListener('dragover', e => {
        e.preventDefault();
      });

      zone.addEventListener('drop', e => {
        e.preventDefault();

        const dragging = document.querySelector('.dragging');

        if (dragging.textContent.trim() === zone.dataset.answer) {
          zone.innerHTML = "Correcto: " + dragging.textContent;
          zone.style.background = "#d4edda";
        } else {
          zone.innerHTML = "Incorrecto";
          zone.style.background = "#f8d7da";
        }
      });
    });
