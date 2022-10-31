module.exports = (app) => {
  const sequelize = app.get('sequelize')
  const { INTEGER, STRING, TEXT } = app.get('DataTypes')

  const spell = sequelize.define(
    'spell',
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
      level: {
        type: STRING,
        allowNull: false,
      },
      school: {
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
  return spell
}
