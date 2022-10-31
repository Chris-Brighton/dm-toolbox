module.exports = (app) => {
  const sequelize = app.get('sequelize')
  const { INTEGER, STRING, TEXT } = app.get('DataTypes')

  const monster = sequelize.define(
    'monster',
    {
      id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      slug: {
        type: STRING,
        allowNull: false,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
      description: {
        type: TEXT,
        allowNull: false,
      },
      cr: {
        type: STRING,
        allowNull: false,
      },
      type: {
        type: STRING,
        allowNull: false,
      },
      json: {
        type: TEXT,
        allowNull: true,
      },
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true
        },
      },
    }
  )
  return monster
}
