'use strict';

module.exports = {
    up: function(migration, DataTypes) {
        migration.createTable(
            'Classes',{
              id: {
                  type: DataTypes.INTEGER,
                  primaryKey: true,
                  autoIncrement: true
              },
              createdAt: {
                  type: DataTypes.DATE
              },
              updatedAt: {
                  type: DataTypes.DATE
              },
              className: DataTypes.STRING
            } ,{
                engine: 'MYISAM',
                charset: 'latin1'
            });
            migration.createTable(
            'Students', {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                createdAt: {
                    type: DataTypes.DATE
                },
                updatedAt: {
                    type: DataTypes.DATE
                },
                name: DataTypes.STRING,
                sex: DataTypes.ENUM('male', 'female'),
                ClassId: {
                  type: DataTypes.INTEGER,
                  references: 'Classes',
                  referencesKey: 'id'
                }
            },{
                engine: 'MYISAM',
                charset: 'latin1'
            });
            migration.createTable(
            'Courses', {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                createdAt: {
                    type: DataTypes.DATE
                },
                updatedAt: {
                    type: DataTypes.DATE
                },
                CourseName: DataTypes.STRING,
            },{
                engine: 'MYISAM',
                charset: 'latin1'
            });
    },

    down: function(migration, DataTypes) {
        migration.dropTable('demo')

    }
};
