
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        dni: {
            type: Sequelize.INTEGER,
        },
        cuil: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
        },
        lastname: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
        fk_role: {
            type: Sequelize.INTEGER,
        },
        address: {
            type: Sequelize.STRING,
        },
        fk_city: {
            type: Sequelize.INTEGER,
        },
        fk_country: {
            type: Sequelize.INTEGER,
        },
        phone: {
            type: Sequelize.STRING,
        },
        mobile: {
            type: Sequelize.STRING,
        },
        photo: {
            type: Sequelize.STRING,
        },
        fk_status: {
            type: Sequelize.STRING,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Users'),
};
