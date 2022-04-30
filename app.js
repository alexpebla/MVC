const express = require("express")
const app = express()

app.use(express.static("public"))

app.listen(3000, () => {
console.log ("servidor funcionando")
})

const rutasMain = require ("./routers/main")
app.use("/", rutasMain)