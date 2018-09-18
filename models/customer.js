module.exports = function(sequelize, DataTypes) {
    var Customers = sequelize.define("Customers", {
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });

    Customers.associate = function(models) {
        Customers.hasOne(models.Burgers, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Customers;
  };
  