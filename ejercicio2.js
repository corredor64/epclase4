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
    firstName: 'Cristina',
    lastName: 'Romero',
    age: '54'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

//elimina al alumno "Mario Blanco"
Persona.destroy({
  where: {
    firstName: 'Mario',
    lastName: 'Blanco'
  }
}).then(() => {
  console.log("Registro Eliminado...");
});



