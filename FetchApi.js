const rootElement = document.getElementById('root');

const buyCar = () => {
    const carData = {
        make: 'BMW',
        model: 'X6',
        price: 60000
    };

    fetch('https://bugatti/buyfetch', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка при купівлі машини');
            }
            return response.json();
        })
        .then(data => {
            const message = data.message;
            const successElement = document.createElement('p');
            successElement.textContent = message;
            rootElement.appendChild(successElement);
        })
        .catch(error => {
            console.error('Помилка при купівлі машини:', error);
        });
};

const buyButton = document.createElement('button');
buyButton.textContent = 'Купити машину';
buyButton.addEventListener('click', buyCar);
rootElement.appendChild(buyButton);
