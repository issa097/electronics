const app = require('./index')









app.get('/', (req, res) => {
    res.send('Hello, World!');
});



app.listen(port = 4000, () => {
    console.log(`run ${port}`)
})