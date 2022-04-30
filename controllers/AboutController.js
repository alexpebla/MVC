const path = require("path")


let AboutController = {
    index :  (req, res) =>{
        res.sendFile(path.join(__dirname,"../views/home.html"))
    },

    }

    module.exports = AboutController;