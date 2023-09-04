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
    firstName: 'Pedro',
    lastName: 'Tana',
    age: '60'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

//Se actualiza la edad de una persona existente en alumnos 
Persona.update({ age: '33' }, {
  where: {
    firstName: 'Mario',
    lastName: 'Blanco'
  }
}).then(() => {
  console.log("Actualizacion Terminada...");
});



