const app = require('./core/app');

app.get('/',(req, res) => {
    return res.send({
        message: "Hello world"
    })
});