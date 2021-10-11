"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          imgUrl: "https://profileimages1.s3.us-west-1.amazonaws.com/demo.jpeg",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "val@example.com",
          username: "valeria",
          hashedPassword: bcrypt.hashSync("password"),
          imgUrl: "https://profileimages1.s3.us-west-1.amazonaws.com/demo.jpeg",
        },
        {
          email: "rappin4tay@example.com",
          username: "Rappin' 4-Tay",
          imgUrl:
            "https://profileimages1.s3.us-west-1.amazonaws.com/rappin4tay.jpeg",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "macdre@example.com",
          username: "Mac Dre",
          imgUrl:
            "https://profileimages1.s3.us-west-1.amazonaws.com/macdre.jpeg",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "Soulsofmischief@example.com",
          username: "Souls of Mischief",
          imgUrl:
            "https://profileimages1.s3.us-west-1.amazonaws.com/soulsofmis.jpeg",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "e40@example.com",
          username: "E-40",
          imgUrl:
            "https://profileimages1.s3.us-west-1.amazonaws.com/e40tupac.jpeg",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "consciousdaughters@example.com",
          username: "The Conscious Daughters",
          imgUrl:
            "https://profileimages1.s3.us-west-1.amazonaws.com/consciousdaughters.jpg",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "plo@example.com",
          username: "P-Lo",
          imgUrl: "https://profileimages1.s3.us-west-1.amazonaws.com/plo.jpeg",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    //const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Users", null, {});
    // return queryInterface.bulkDelete("Users",{username: {[Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2", "valeria"],},
    //   },
    //   {}
    // );
  },
};
