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
    var img = document.getElementById("img1");
    


boton.addEventListener('click', function () {
    lista.innerHTML = '';
    checks.forEach((e) => {
        if (e.checked == true) {
            var elemento = document.createElement('li');
            elemento.className = 'list-group-item';
            elemento.id = e.className;
            elemento.onclick = image();
            elemento.innerHTML = e.value;
            lista.appendChild(elemento);
        }
    });
});

//así con JS normal
//accediendo directamente a src
function cambiarImagenJS() {
    document.getElementById("img1").src = "image2.jpg";
}

function image() {
    var j = 0;
    var img = document.getElementById("img1");
    var list = document.getElementById('list');
    var checkboxes = document.querySelectorAll('#check');
    var srcs = ["img/catalogo1.png", "img/catalogo2.png", "img/catalogo3.png", "img/catalogo4.png", "img/catalogo5.png", "img/catalogo6.png", "img/catalogo7.png", "img/catalogo8.png", "img/catalogo9.png", "img/catalogo10.png", "img/catalogo11.png", "img/catalogo12.png"];
    var id_src = [];

    if (checkboxes[0].checked) {
        id_src.push(0);
    }

    if (checkboxes[1].checked) {
        id_src.push(1);
    }

    if (checkboxes[2].checked) {
        id_src.push(2);
    }

    if (checkboxes[3].checked) {
        id_src.push(3);
    }

    if (checkboxes[4].checked) {
        id_src.push(4);
    }

    if (checkboxes[5].checked) {
        id_src.push(5);
    }

    if (checkboxes[6].checked) {
        id_src.push(6);
    }

    if (checkboxes[7].checked) {
        id_src.push(7);
    }

    if (checkboxes[8].checked) {
        id_src.push(8);
    }

    if (checkboxes[9].checked) {
        id_src.push(9);
    }

    if (checkboxes[10].checked) {
        id_src.push(10);
    }

    if (checkboxes[11].checked) {
        id_src.push(11);
    }
    
    img.addEventListener("click", (event) => {
        if (j >= id_src.length) {
            j = 0
        }
        if(j>0) {
            img.src = srcs[id_src[j]];
            j++;
        } else {
            img.src = srcs[id_src[j]];
            j++;
        }
        console.log(j)
    });
}

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

