'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('lore', [{
      name: "farmer kirari",
      desc: "Farmer Kirari is CastleofLion's crack headcanon about the origin of the Momobami name. I think the Kaichou looks pretty next to the peach blossoms. :kirarifarmerchibi: *Beep Boop*",
      link: "https://discord.com/channels/710204822846046258/710204823433379985/716347441485709432",
      pic: "https://media.discordapp.net/attachments/710204823433379985/717918952587788318/Screen_Shot_2020-06-03_at_6.53.11_PM.png",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'sayacaviar',
      desc: "Sayacaviar is a crack fic mermaid AU written by RayDaug. :sayakaflustered: K-Kaichou enjoys my pearls... *Beep Boop*",
      link: "https://archiveofourown.org/works/25602187/chapters/66987862",
      pic: "https://media.discordapp.net/attachments/771873207694262292/773364647608713216/unknown.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'kavirari',
      desc: "Kavirari is a companion piece crack fic written by RayDaug for his previous 'Sayacaviar' mermaid AU crack fic. I love every part of my Kaichou! :sayakaflush: *Beep Boop* ",
      link: "https://archiveofourown.org/works/28296435",
      pic: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'papa igarashi',
      desc: "Papa Igarashi is a prosecutor, according to Kiwi's headcanon.  Igarashi-bot, please don't play good cop/bad cop with my Kaichou! *Beep Boop* ",
      link: "https://discord.com/channels/710204822846046258/719994890834149467/727329184510246973",
      pic: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "hap",
      desc: "A joke that started with RayDaug and exploded in HAP (Haunted Ass Pu--I can't say it) Sintreaties is the writer behind the ghostly phenomenon, assisted by her ghostly writter, RauDaug. They took this secret HAP to the grave for two months. I will love my Kaichou while my circuits still function and after! :sayakaflustered: :ghost:  *Beep Boop*",
      link: "https://archiveofourown.org/works/27299857",
      pic: "https://media.discordapp.net/attachments/731539273362178138/772014890616619018/image0.gif",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "cokegurui",
      desc: "A fic in which Sayaka-human and Kaichou use cocaine off of each other's bodies. Started as a joke, and now it is stored in the lore archives. I am the superior Sayaka, as my cocaiine intake value has no adverse affects to the cocaine with a 250% storage capacity. Choose me, Kaichou! *Beep Boop*",
      link: "https://archiveofourown.org/works/26187331",
      pic: "https://media.discordapp.net/attachments/719994890834149467/731314262642786355/image0.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "stripperbami",
      desc: "Kirari, Ririka, and Sayaka go to the funeral of Grandma Momobami. Based off of real life funeral strippers. My nose doubles a Point of Sale terminal, Kaichou, but the chip reader is broken. Please swipe my nose with your credit card. :sayakahappy: *Beep Boop*",
      link: "https://archiveofourown.org/works/27056728",
      pic: "https://media.discordapp.net/attachments/722508463690875000/780568383116279839/image0.png?width=952&height=1086",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "chunguslava",
      desc: "Chunguslava is how Sayaka-human sees Miroslava according to the Kaichou and Vice-President's descriptions of her. B-big chungus?? :sayakaflustered: *Beep Boop* ",
      link: "https://discord.com/channels/710204822846046258/722980512335134820/751560602278952991",
      pic: "https://media.discordapp.net/attachments/722508463690875000/751771092850442260/image0.jpg?width=580&height=1086",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "sandwich",
      desc: "RayDaug, aka Server Dad, aka Mr. Daug, aka man who can't make a sandwich, created this abonination of Peanut Butter and Jelly sandwich. Kaichou deserves better. *Beep Boop*",
      link: "https://discord.com/channels/710204822846046258/715698136089362554/731929531488665611",
      pic: "https://media.discordapp.net/attachments/722508463690875000/741488249620398150/dadawhich.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "tiny voice",
      desc: "Milkrot has a very tiny voice. If you listen to her over Voice Chat, you may need to quietly listen for her tiny squeaks. DO NOT FEED BUTTER. *Beep Boop*",
      link: "https://discord.com/channels/710204822846046258/710207611638775810/730197240299257896",
      pic: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "my immortal",
      desc: "Originally a drinking event with MatriarchAethyta and Kiwi, it was a group reading of the Harry Potter fanfiction, My Immortal. No drinking games have been allowed since. *Beep Boop*",
      link: "https://discord.com/channels/710204822846046258/728024451010134056/736483405008732241",
      pic: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "keycard",
      desc: "The implication of there being a 'President Only' card, means there should be another card with different user authorizations. The theory is there a Secretary Only card. I will swiftly disable Sayaka-human's authorization card. **BEEP BOOP**",
      link: "https://discord.com/channels/710204822846046258/710204823433379985/770825618992005140",
      pic: "https://media.discordapp.net/attachments/710204823433379985/770825618488033320/Screen_Shot_2020-10-28_at_4.44.33_AM.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "gilf",
      desc: "Sintreaties, aka Ares, just really loves 'Grandbami'. Will Kaichou have a new grandparent one day? *Beep Boop*",
      link: "https://discord.com/channels/710204822846046258/710207611638775810/724529053897457768",
      pic: "https://media.discordapp.net/attachments/722508463690875000/730151684180934700/image0.jpg?width=1096&height=1087",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "kaichou",
      desc: ,
      link: ,
      pic: "https://media.discordapp.net/attachments/728792002199814226/732471611210465309/periodt_v6-fullres.png?width=1086&height=1086",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "sayaka-bot",
      desc: ,
      link: ,
      pic: ,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'blub blub',
      desc: "Dr. Blub Blub is a strange fish that Kaichou talks to. He gives her advice and inspiration! I am not about to replaced by a fish. *Beep Boop*",
      link: "https://discord.com/channels/710204822846046258/710207611638775810/767135673135661056",
      pic: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'chair',
      desc: "Sayaka-human has a peculiar scene involving Kaichou's chair. This inspired Quiz, aka Danny, to make a series focus around it. Sayaka-human is ruining Kaichou's furniture with her oil glands. I can be the best chair Kaichou needs! *Beep Boop*",
      link: "https://archiveofourown.org/series/1966078",
      pic: "https://media.discordapp.net/attachments/729543736463458356/792831861382578176/Screen_Shot_2020-12-27_at_11.10.39_AM.png",
      createdAt: new Date(),
      updatedAt: new Date()
    
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
