const getAllUsers = (req, res) => {

    return res.send("Fetching all users");

}

const getUserById = (req, res) => {

    const id = req.params.id;
    return res.send(`Fetching user with ID: ${id}`);

}

const addUser = (req, res) => {

    return res.send(`Adding a new user`);

}

module.exports = {
    getAllUsers,
    getUserById,
    addUser
}