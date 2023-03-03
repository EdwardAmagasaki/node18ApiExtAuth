//const Sequelize = require('sequelize');

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db1.sqlite3'
  });

const postagem = sequelize.define('postagens', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const itemLst = postagem.findAll();
console.log(itemLst);

const item = postagem.findByPk(1);
console.log(item);

item.titulo = 'titulo modificado';

console.log(item);

postagem.destroy({where: {id: 4}})

// Utilizar código quando ainda não houver o banco
// postagem.sync({force:true})

postagem.create({ id: null, titulo: "titulo", conteudo: "conteudo",createdAt:"2023-02-28 17:34:42.152 +00:00",updatedAt:"2023-02-28 17:34:42.152 +00:00"});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!!!");
}).catch(function(erro){
    console.log(erro);
})
