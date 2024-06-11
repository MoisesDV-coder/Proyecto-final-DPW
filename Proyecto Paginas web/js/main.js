import { contentDataCat, contentDataDog } from './content.js';

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    var url = window.location.href;

    var modal = document.getElementById("myModal");
    var modalTitle = document.getElementById("modal-title");
    var modalImage = document.getElementById("modal-image");
    var modalTable = document.getElementById("modal-table");
    var span = document.getElementsByClassName("close")[0];

    var images = document.getElementsByClassName("clickable-image");
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', (function (index) {
            return function () {
                if (url.includes("dog.html")) {
                    var content = contentDataDog[index];
                } else if (url.includes("cat.html")) {
                    var content = contentDataCat[index];
                }
                if (modalTable) {
                    modalTitle.textContent = content.title;
                    modalImage.src = content.imageUrl;
                    modalTable.innerHTML = ''; // Limpiar el contenido anterior
                    for (var j = 0; j < content.table.length; j++) {
                        var tr = document.createElement("tr");
                        for (var k = 0; k < content.table[j].length; k++) {
                            var td = document.createElement("td");
                            td.textContent = content.table[j][k];
                            tr.appendChild(td);
                        }
                        modalTable.appendChild(tr);
                    }
                } else {
                    console.error("El elemento con el ID 'modal-table' no se encontró en el HTML.");
                }
                modal.style.display = "block";
            };
        })(i));
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    const adoptButtons = document.getElementsByClassName("adopt-button");
    for (let i = 0; i < adoptButtons.length; i++) {
        adoptButtons[i].addEventListener('click', function () {
            window.location.href = "adopt.html"; // Aquí va el form de adopción
        });
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
