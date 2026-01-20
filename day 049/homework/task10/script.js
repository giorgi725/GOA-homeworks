const btn = document.getElementById('laptopBtn');

const laptop = {
    ram: 32,
    price: 10000,
    turnOn(){
        console.log('Laptop is On!');
    }
}

btn.addEventListener('click', laptop.turnOn);