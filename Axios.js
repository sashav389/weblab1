import axios from 'axios';

const rootElement = document.getElementById('root');

// Функція для відправки POST-запиту на сервер
const buyCar = () => {
    const carData = {
        make: 'BMW',
        model: 'X5',
        price: 50000
    };

    axios.post('https://bugatti/buyax', carData)
        .then(response => {
            // Обробка успішної відповіді
            const message = response.data.message;
            const successElement = document.createElement('p');
            successElement.textContent = message;
            rootElement.appendChild(successElement);
        })
        .catch(error => {
            // Обробка помилки
            console.error('Помилка при купівлі машини:', error);
        });
};

// Створення кнопки "Купити машину"
const buyButton = document.createElement('button');
buyButton.textContent = 'Купити машину';
buyButton.addEventListener('click', buyCar);
rootElement.appendChild(buyButton);
