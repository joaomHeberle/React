const express = require('express');
const app = express();
const collection= require('firebase/firestore');
const cors = require('cors');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
var admin = require("firebase-admin");
var DadosIniciais = require ("./DadosIniciais.json");
var serviceAccount = require("./key.json");

initializeApp({
    credential: cert(serviceAccount)
  });
  app.use(cors());
  const db = getFirestore();
  const docRef = db.collection('Jogadores');
app.use(express.json());

app.use(express.urlencoded({extended: true}));



app.use(express.urlencoded({ extended: true }));

  


app.get('/jogadores', async(req, res) => {
    const data = await docRef.get();

 /*    data.forEach(doc =>{
        console.log(doc.id, '=>', doc.data());
    }) */
    return res.json(data.docs.map((doc)=>({...doc.data(), id: doc.id })))
});
app.post('/jogadores', async(req, res) => {


  const result = await docRef.add(req.body);

  const data =await docRef.doc(result.id).update({Shop:DadosIniciais});

    return res.json(result)
});

app.post('/jogador', async(req, res) => {
    const result = await req.body.name;
    return res.json(result)
});


 app.delete('/jogadores/:id', async(req, res) => {
   const { id } = req.params;
  
     await docRef.doc(id).delete();

     res.send("Pessoa removida do banco com sucesso!");
 });
 app.put('/jogadores', async(req, res) => {
 
     const data = await docRef.doc(req.body.id).update(req.body);
      
 
      res.send("alterado com sucesso");
    
   });

app.listen(4000, () => console.log("Servidor ligado na porta 4000!"));