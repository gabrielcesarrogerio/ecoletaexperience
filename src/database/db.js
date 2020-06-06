//importar a dependênica do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no bdd
const db = new sqlite3.Database("./src/database/database.db")
//para exportar para outro local
module.exports=db
//utilizar o objeto de bd para as operações
db.serialize(() => {
    //com comandos sql eu vou:
    
    //criar uma tabela
   // db.run(`
        //CREATE TABLE IF NOT EXISTS places (
         //   id INTEGER PRIMARY KEY AUTOINCREMENT,
         //   image TEXT,
         //   name TEXT,
         //   address TEXT,
        //    address2 TEXT,
        //    state TEXT,
        //    city TEXT,
       //     items TEXT
      //  );

   // `)
    
   //inserir dados na tabela
  //  const query = `
   // INSERT INTO places(
    //    image,
    //    name,
    //    address,
    //    address2,
    //    state,
   //     city,
   //     items
   // ) VALUES(?,?,?,?,?,?,?);
//`
      //  const values = 
      //  ["https://bhrecicla.com.br/imagens/blogpost69.jpg",
   // "Papersider",
  //  "Guilherme Gemballa, Jardim América",
   // "Nº 260",
   // "Santa Catarina",
    //"Rio do Sul",
   // "Papéis e papelão"

//]
    //function afterInsertData(err){
       // if(err){
       //    return console.log(err)
       // }
       // console.log("Cadastrado com sucesso")
       // console.log(this)
   // }
    //db.run(query, values, afterInsertData)
    
    //consultar os dados na tabela
    //db.all(`SELECT name FROM places`, function(err, rows){
       // if(err){
          //  return console.log(err)
      //  }
       // console.log("Aqui estão os seus registros")
       // console.log(rows)
    //})
    
    //deletar dados na tabela
   //  db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
   //     if(err){
   //          return console.log(err)
   //      }
   //      console.log("Registro deletado com sucesso")
   //  })
    
})