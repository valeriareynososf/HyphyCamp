'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    imgUrl: DataTypes.TEXT,
    artistId: DataTypes.INTEGER,
    url: DataTypes.TEXT
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User, {foreignKey: "artistId"});
    Song.hasMany(models.Comment, { foreignKey: "songId" });
  };
  return Song;
};