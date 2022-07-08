
const userColtroller = {
    async getUsers(req, res) {
        res.send("Hello all users!")
    },

    async getUser(req, res) {
        res.send("Hello ONE user!")
    }
}

module.exports = userColtroller;