

module.exports = {
    index: (req, res) => {
        Test.find({}, (err, allDemTests) => {
            res.send(allDemTests)
        })
    },

    show: (req, res) => {
        Test.findById(req.params.id), (err, thatTest) => {
            res.send(thatTest)
        }
    },

    new:(),

    create:(),

    edit:(),

    update:(),

    destroy:
}