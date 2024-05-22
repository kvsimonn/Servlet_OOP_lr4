document.addEventListener('DOMContentLoaded', function () {
    const carList = document.getElementById('carList');

    // Загрузка списка автомобилей при загрузке страницы
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8888/Servlet_OOP_lr4_war//car', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const cars = JSON.parse(xhr.responseText);
            displayCars(cars);
        } else {
            console.error('Произошла ошибка при загрузке списка автомобилей:', xhr.statusText);
        }
    };

    xhr.send();

    function displayCars(cars) {
        let tableHTML = `
    <table class="table table-striped table-bordered" style="width: 100%;">
        <thead class="thead-dark">
            <tr>
                <th style="width: 20%;">Марка</th>
                <th style="width: 20%;">Модель</th>
                <th style="width: 20%;">Кузов</th>
                <th style="width: 20%;">Год выпуска</th>
                <th style="width: 20%;">Объем </th>
            </tr>
        </thead>
        <tbody>
    `;

        cars.forEach(function (car) {
            tableHTML += `
            <tr>
                <td>${car.make}</td>
                <td>${car.model}</td>
                <td>${car.body}</td>
                <td>${car.year}</td>
                <td>${car.capacity}</td>
            </tr>
        `;
        });

        tableHTML += `
        </tbody>
    </table>
    `;

        carList.innerHTML = tableHTML;
    }
});