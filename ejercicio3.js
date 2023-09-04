const Sequelize = require('sequelize');

const sequelize = new Sequelize('clase4', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class Persona extends Sequelize.Model {}
Persona.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING,
  age:Sequelize.INTEGER 	
}, { sequelize, modelName: 'alumnos' });


/* Inserta una persona*/
sequelize.sync()
  .then(() => Persona.create({
    firstName: 'Ricardo',
    lastName: 'Romero',
    age: '43'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

//Se actualiza el apellido de "Cristina Romero" 
Persona.update({ lastName: 'Blanco' }, {
  where: {
    firstName: 'Cristina',
    lastName: 'Romero'
  }
}).then(() => {
  console.log("Actualizacion1 Terminada...");
});

//Se actualiza la edad de "Pedro Tana" 
Persona.update({ age: '65' }, {
  where: {
    firstName: 'Pedro',
    lastName: 'Tana'
  }
}).then(() => {
  console.log("Actualizacion2 Terminada...");
});



