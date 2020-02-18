
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        role: DataTypes.STRING,
        fk_status: DataTypes.INTEGER,
    }, {});
    Role.associate = function (models) {
    // associations can be defined here
    };
    return Role;
};
