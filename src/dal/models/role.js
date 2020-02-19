
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        role: DataTypes.STRING,
        fk_status: DataTypes.INTEGER,
    }, {});
    Role.associate = function (models) {
        Role.belongsTo(models.Status);
        Role.hasMany(models.Users, {
            foreignKey: 'fk_role',
            as: 'users',
        });
    };
    return Role;
};
