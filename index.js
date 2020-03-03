const express = require('express');
const path = require('path'); //Constante para guardar la ruta de las vistas.
const app = express();
const files = path.join( __dirname, '/views' );

app.use( express.static( path.join( __dirname, '/public' ) ) )

app.get('/', (req, res) =>{
  res.sendFile( `${files}/index.html` );
});

app.route('/user').get( (req, res) =>{
  res.sendFile(`${files}/user.html`)
})

app.route('/login-usuario/?').get( (req, res) =>{
  if ( req.query.usuario === 'Paola' && req.query.password === '1234567' ){
    res.sendFile(`${files}/usuarioLogueado.html`  )
  }else{
    res.sendFile(`${files}/falloLogin.html`  )
  }
} )



app.listen(4200);

console.log("primer sever")