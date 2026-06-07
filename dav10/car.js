const fs = require('fs');

const CARS_FILE = 'cars.json';

function readCars() {
    if (!fs.existsSync(CARS_FILE)) return [];
    return JSON.parse(fs.readFileSync(CARS_FILE, 'utf8'));
}

function writeCars(cars) {
    fs.writeFileSync(CARS_FILE, JSON.stringify(cars, null, 2));
}

function addCar(name, year, color) {
    const cars = readCars();
    cars.push({
        carName: name,
        carReleaseDate: parseInt(year),
        carColor: color.toLowerCase()
    });
    writeCars(cars);
    console.log(`Added: ${name} (${year}, ${color})`);
}

function showCars(filter) {
    const cars = readCars();
    let filtered = cars;
    if (filter) {
        if (!isNaN(filter)) {
            filtered = cars.filter(c => c.carReleaseDate === parseInt(filter));
            console.log(`\n=== Cars from ${filter} ===`);
        } else {
            filtered = cars.filter(c => c.carColor === filter.toLowerCase());
            console.log(`\n=== ${filter.charAt(0).toUpperCase() + filter.slice(1)} Cars ===`);
        }
    } else {
        console.log('\n=== All Cars ===');
    }
    if (filtered.length === 0) {
        console.log('  No cars found.');
    } else {
        filtered.forEach((car, i) => console.log(`  ${i+1}. ${car.carName} (${car.carReleaseDate}) - ${car.carColor}`));
    }
    console.log('==================\n');
}

const args = process.argv.slice(2);
if (args.length === 3 && args[0] !== 'show') {
    addCar(args[0], args[1], args[2]);
} else if (args[0] === 'show') {
    showCars(args[1]);
} else {
    console.log('Usage:');
    console.log('  node car.js Ferrari 2020 red      -> add a car');
    console.log('  node car.js show                   -> show all cars');
    console.log('  node car.js show 2020              -> show cars from 2020');
    console.log('  node car.js show red               -> show red cars');
}