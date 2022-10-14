const express = require("express")
const app = express()

const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.send("Vai Corinthians!")
});

app.listen(port, () => {
    console.info(`Aplicaçnao rodando em http://localhost:${port}`)
});