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
  };
  return Song;
};