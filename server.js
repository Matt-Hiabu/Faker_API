const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;


const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    };
    return newFake;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country(),
        }};
    return newFake;
};
    
const newFakeCompany = createCompany();
console.log(newFakeCompany);


app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
    const userCompObj ={
        user: newFakeUser,
        company: newFakeCompany,
    };
    res.json(userCompObj);
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
