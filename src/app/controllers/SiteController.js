class NewController {
    index(req, res) {
        res.render('home')
    }
    show(req, res) {
        res.render("search")
    }
}
module.exports = new NewController;