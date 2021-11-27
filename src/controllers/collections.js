const { collections, user, literature } = require('../../models')

exports.getMyCollections = async (req, res) => {

    const { id } = req.params;

    try {
        const data = await literature.findAll({
            where: {
                userId: id,
            },
            include: {
                model: user,
                through: {
                    model: collections,
                    attributes: [],
                },
                attributes: {
                    exclude: ["createdAt", "updatedAt", "password"],
                },
            },
            attributes: {
                exclude: ["createdAt", "updatedAt", "userId"],
            },
        });

        res.send({
            status: "Success",
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "Failed",
            message: "Server error",
        });
    }
};