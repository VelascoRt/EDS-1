const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    } );
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var boton = document.getElementById('mostrar');
    var lista = document.getElementById('lista');
    var checks = document.querySelectorAll('#check');

  boton.addEventListener('click', function () {
    lista.innerHTML = '';
    checks.forEach((e) => {
      if (e.checked == true) {
        var elemento = document.createElement('li');
        elemento.className = 'list-group-item';
        elemento.innerHTML = e.value;
        lista.appendChild(elemento);
      }
    });
  });

function calculateTotal() {
    var total = 0;

    var valores = document.getElementById('check');
    var checkboxes = document.querySelectorAll('#check');

    var totalElement = document.getElementById('total');

    if (checkboxes[0].checked) {
        total += (1000);
    }

    if (checkboxes[1].checked) {
        total += 2000;
    }

    if (checkboxes[2].checked) {
        total += 1500;
    }

    if (checkboxes[3].checked) {
        total += (1000);
    }

    if (checkboxes[4].checked) {
        total += 1000;
    }

    if (checkboxes[5].checked) {
        total += 1000;
    }

    if (checkboxes[6].checked) {
        total += (1000);
    }

    if (checkboxes[7].checked) {
        total += 1000;
    }

    if (checkboxes[8].checked) {
        total += 1000;
    }

    if (checkboxes[9].checked) {
        total += (1000);
    }

    if (checkboxes[10].checked) {
        total += 1000;
    }

    if (checkboxes[11].checked) {
        total += 1000;
    }

    console.log(total)
    totalElement.textContent = "$" + total;
}

