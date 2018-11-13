module.exports = {
    index: (req, res) => {
        res.render('../views/index', { page: 'homepage' })
    }
    // new: (req, res) => { },
    // create: (req, res) => { },
    // update: (req, res) => { },
    // delete: (req, res) => { },
    // show: (req, res) => { }
}
