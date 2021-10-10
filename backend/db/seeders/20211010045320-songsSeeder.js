'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:    */
      return queryInterface.bulkInsert(
        "Songs",
        [
          {
            name: "I'll Be Around",
            imgUrl:
              "https://songimg1.s3.us-west-1.amazonaws.com/illbearound.jpeg",
            artistId: 5,
            url: "https://audioforartists.s3.us-west-1.amazonaws.com/08+I'll+Be+Around.m4a",
          },
          {
            name: "Playaz Club",
            imgUrl:
              "https://songimg1.s3.us-west-1.amazonaws.com/playersclub.jpeg",
            artistId: 5,
            url: "https://audioforartists.s3.us-west-1.amazonaws.com/Rappin+4+Tay+-+Players+Club.mp3",
          },
          {
            name: "Feelin' Myself",
            imgUrl:
              "https://songimg1.s3.us-west-1.amazonaws.com/feelinmyself.jpg",
            artistId: 6,
            url: "https://audioforartists.s3.us-west-1.amazonaws.com/Mac+Dre+-+%E2%80%9CFeelin%E2%80%99+Myself%E2%80%9D+(Clean+Version).mp3",
          },
          {
            name: "Neva Seen [instrumental]",
            imgUrl:
              "https://songimg1.s3.us-west-1.amazonaws.com/shenevaseen.jpeg",
            artistId: 6,
            url: "https://audioforartists.s3.us-west-1.amazonaws.com/Mac+Dre+-+She+Neva+Seen+%5BInstrumental%5D.mp3",
          },
          {
            name: "93 'til Infinity",
            imgUrl: "https://songimg1.s3.us-west-1.amazonaws.com/93till.jpg",
            artistId: 7,
            url: "https://audioforartists.s3.us-west-1.amazonaws.com/Souls+of+Mischief+-+93+'til+Infinity.mp3",
          },
          {
            name: "Tell Me When to Go",
            imgUrl:
              "https://songimg1.s3.us-west-1.amazonaws.com/tellmewhen.jpeg",
            artistId: 8,
            url: "https://audioforartists.s3.us-west-1.amazonaws.com/Tell+Me+When+to+Go+(feat.+Keak+da+Sneak).mp3",
          },
          {
            name: "Put Me On Something",
            imgUrl: "https://songimg1.s3.us-west-1.amazonaws.com/e40putme.jpeg",
            artistId: 8,
            url: "https://audioforartists.s3.us-west-1.amazonaws.com/P-Lo+ft.+E40+-+Put+Me+On+Something+(Clean)+(NBA+2K19+Edit).mp3",
          },
          {
            name: "Something To Ride To",
            imgUrl: "https://songimg1.s3.us-west-1.amazonaws.com/fonky.jpg",
            artistId: 9,
            url: "https://audioforartists.s3.us-west-1.amazonaws.com/Conscious+Daughters+-+Something+to+Ride+To+(Fonky+Expedition)+(Original+Version).mp3",
          },
          {
            name: "We Roll Deep",
            imgUrl:
              "https://songimg1.s3.us-west-1.amazonaws.com/werolldeep.jpeg",
            artistId: 9,
            url: "https://audioforartists.s3.us-west-1.amazonaws.com/Conscious+Daughters+-++We+Roll+Deep.mp3",
          },
          {
            name: "Put Me On Something",
            imgUrl: "https://songimg1.s3.us-west-1.amazonaws.com/putmeon.jpg",
            artistId: 10,
            url: "https://audioforartists.s3.us-west-1.amazonaws.com/P-Lo+ft.+E40+-+Put+Me+On+Something+(Clean)+(NBA+2K19+Edit).mp3",
          },
          {
            name: "Same Squad",
            imgUrl: "https://songimg1.s3.us-west-1.amazonaws.com/samesquad.jpg",
            artistId: 10,
            url: "https://audioforartists.s3.us-west-1.amazonaws.com/P-Lo+-+%E2%80%9CSame+Squad%E2%80%9D+(Radio+Edit).mp3",
          },
          {
            name: "Neva Seen [instrumental]",
            imgUrl:
              "https://songimg1.s3.us-west-1.amazonaws.com/shenevaseen.jpeg",
            artistId: 1,
            url: "https://audioforartists.s3.us-west-1.amazonaws.com/Mac+Dre+-+She+Neva+Seen+%5BInstrumental%5D.mp3",
          },
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:    */
      return queryInterface.bulkDelete('Songs', null, {});
  }
};
