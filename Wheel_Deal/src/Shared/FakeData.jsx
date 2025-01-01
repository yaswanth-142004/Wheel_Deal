import { faker } from "@faker-js/faker";

function createRandomCarList() {
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibEskGer-6r_4dfMoLJwntzNBQnUarozaKQ&s',
        miles: 1000,
        gearType:"Automatic",
        price: faker.finance.amount(4000, 30000) 
    };
}

const carList = faker.helpers.multiple(createRandomCarList, {
    count: 7
});

export default {
    carList 
};