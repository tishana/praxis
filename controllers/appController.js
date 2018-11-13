
module.exports = {
    index: (req, res) => {
        res.render('../views/index', { page: 'homepage' })
    }
}