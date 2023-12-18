document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    

    alert("Регистрация успешна!");
});



function showDetails(tourId) {
    var modal = document.getElementById('modal');
    var titleElement = document.getElementById('modal-title');
    var descriptionElement = document.getElementById('modal-description');

    // Здесь вы можете использовать AJAX запрос для получения подробной информации о туре на сервере

    // Временные данные для примера
    var tourData = {
        'tour1': { title: 'Тур В США', description: 'Маршрут: Нью-Йорк Проживание по туру: Нью-Йорк 7 ночей Период действия тура: 10.01.2023-20.12.2023 Дни заездов: ежедневно Категория тура: индивидуальный тур Авиаперелет: оплачивается дополнительно' },
        'tour2': { title: 'Тур в Лондон', description: 'Туры в данную страну мы разрабатываем индивидуально, под запрос каждого клиента.Запросите путешествие по своему маршруту у наших экспертов: Номер телефона:87471448101' }
       

        

    };

    var tour = tourData[tourId];

    if (tour) {
        titleElement.textContent = tour.title;
        descriptionElement.textContent = tour.description;
        modal.style.display = 'block';
    }
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Закрываем модальное окно при клике за его пределами
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
