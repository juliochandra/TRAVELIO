/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del();
  await knex('user').insert([
    {
      id: '760a2087-f3d1-477d-8fc0-3118c71667b5',
      name: 'julio',
      email: 'juliochandra@gmail.com',
      password: 'julio'
    },
    {
      id: '760a2087-ab53-4080-9444-4c7c3599fd45',
      name: 'aaaa',
      email: 'juliochandra@gmail.com',
      password: 'julio'
    },
    {
      id: '03ff6218-bcff-40e1-bc5e-7fb1c383e420',
      name: 'Rodolph Tschierasche',
      email: 'rtschierasche0@cnn.com',
      password: 'password'
    },
    {
      id: '0d19fbb8-2d5f-4531-bed1-2fedec7149b1',
      name: 'Any Romanet',
      email: 'aromanet1@webeden.co.uk',
      password: 'password'
    },
    {
      id: 'cb5d0fdc-db6c-4b24-b62e-5d9a43b257a2',
      name: 'Jessalyn Greig',
      email: 'jgreig2@microsoft.com',
      password: 'password'
    },
    {
      id: '6263874e-48a4-45f8-9356-0856f78e73f0',
      name: 'Vidovik Sawood',
      email: 'vsawood3@reddit.com',
      password: 'password'
    },
    {
      id: 'fedbaee9-4548-4067-9a82-b25fd2283e50',
      name: 'Lonnie Sauvan',
      email: 'lsauvan4@telegraph.co.uk',
      password: 'password'
    },
    {
      id: '85af1e16-90b0-4706-ad30-23d204551697',
      name: 'Konrad Cowern',
      email: 'kcowern5@ow.ly',
      password: 'password'
    },
    {
      id: 'a4ef303b-60ff-42db-bc81-1e93eec2c1e8',
      name: 'Mora Camoletto',
      email: 'mcamoletto6@dropbox.com',
      password: 'password'
    },
    {
      id: '3a26baca-632e-4bbb-be14-3c7c141960f9',
      name: 'Melinda Bohea',
      email: 'mbohea7@state.tx.us',
      password: 'password'
    },
    {
      id: '7d40e799-be45-474a-bfb9-52bbb3e90cd4',
      name: 'Fern Bisacre',
      email: 'fbisacre8@springer.com',
      password: 'password'
    },
    {
      id: 'a353913e-c9aa-4cab-b278-80be69152e8d',
      name: 'Yuri Sauvain',
      email: 'ysauvain9@livejournal.com',
      password: 'password'
    },
    {
      id: '6349cc31-3d56-4d12-b6f7-4519bfc8e0f9',
      name: 'Rebeka Drinkwater',
      email: 'rdrinkwatera@mediafire.com',
      password: 'password'
    },
    {
      id: '151b5f84-b55c-4f85-bf17-263b5b0fb3aa',
      name: 'Ailee Krout',
      email: 'akroutb@yahoo.co.jp',
      password: 'password'
    },
    {
      id: 'fa3b5e2f-cbe8-4259-b265-9cea2fb76352',
      name: 'Torey Lighton',
      email: 'tlightonc@loc.gov',
      password: 'password'
    },
    {
      id: 'ce2e86e4-73a4-435c-9dd3-1901d71bde60',
      name: 'Jamie Seleway',
      email: 'jselewayd@hostgator.com',
      password: 'password'
    },
    {
      id: 'b0764ff7-db3e-4c72-a996-be4e21ffa195',
      name: 'Deck Pistol',
      email: 'dpistole@bizjournals.com',
      password: 'password'
    },
    {
      id: '88a9f552-b5d0-4f34-bef5-883a5e26f3b8',
      name: 'Justus Shorto',
      email: 'jshortof@yahoo.com',
      password: 'password'
    },
    {
      id: '6bc1f391-cca7-4d11-b463-3a8cf24e3746',
      name: 'Valentia Wayper',
      email: 'vwayperg@nifty.com',
      password: 'password'
    },
    {
      id: 'b4d8142f-9dd8-4ed9-b31a-977d7005039f',
      name: 'Harold Daveley',
      email: 'hdaveleyh@over-blog.com',
      password: 'password'
    },
    {
      id: '942e1327-736e-4c74-abd0-f0ef15c3346a',
      name: 'Vinni Cubbit',
      email: 'vcubbiti@psu.edu',
      password: 'password'
    },
    {
      id: '0ba0a7f0-d2d5-4699-ae22-6892a5d7b47c',
      name: 'Maggee Cuseck',
      email: 'mcuseckj@mashable.com',
      password: 'password'
    },
    {
      id: '0eb2dc48-5be1-4f13-b56d-6b1c7f457ed5',
      name: 'Maryanne Fazakerley',
      email: 'mfazakerleyk@technorati.com',
      password: 'password'
    },
    {
      id: '3d3661ac-41d5-49a1-b961-7be31a858bbb',
      name: 'Melvyn Southeran',
      email: 'msoutheranl@php.net',
      password: 'password'
    },
    {
      id: '635ba31d-f2ca-48cb-b888-61f74f5cba32',
      name: 'Aylmar Castagnone',
      email: 'acastagnonem@goo.ne.jp',
      password: 'password'
    },
    {
      id: '33ae006c-0129-4ddf-a28b-e40dfff2ddfb',
      name: 'Goldy Jandac',
      email: 'gjandacn@amazon.com',
      password: 'password'
    },
    {
      id: '9ed5156b-7bf1-48c8-a377-19f23eb51fe6',
      name: 'Jarrad Ferreras',
      email: 'jferreraso@hao123.com',
      password: 'password'
    },
    {
      id: '737a4d13-0268-465d-9fdb-bb94fb40f61b',
      name: 'Rena Feely',
      email: 'rfeelyp@delicious.com',
      password: 'password'
    },
    {
      id: '622dcc70-6f48-458f-ac36-eae306243eaf',
      name: 'Albie Edwinson',
      email: 'aedwinsonq@godaddy.com',
      password: 'password'
    },
    {
      id: '3cdd1e23-8cd3-4ab7-b5d8-70332501e499',
      name: 'Cloe Casoni',
      email: 'ccasonir@seattletimes.com',
      password: 'password'
    },
    {
      id: 'dcee2850-a015-4687-9d00-35bfbdb50c52',
      name: 'Jarid Casone',
      email: 'jcasones@squarespace.com',
      password: 'password'
    },
    {
      id: 'cf3621ea-a7f1-47e7-8ce9-4c9291299a32',
      name: 'Catherine Hackey',
      email: 'chackeyt@geocities.jp',
      password: 'password'
    },
    {
      id: '5824595b-5f69-4704-9585-250bc15f4d3a',
      name: 'Sara Alywin',
      email: 'salywinu@msn.com',
      password: 'password'
    },
    {
      id: '1818f80a-8743-4bf2-aa5b-99f6c29f1ffd',
      name: 'Miof mela Coggon',
      email: 'mmelav@nhs.uk',
      password: 'password'
    },
    {
      id: '6663d5e0-dbc0-4c1e-bd85-3c2f965342e0',
      name: 'Anitra Tabourier',
      email: 'atabourierw@vimeo.com',
      password: 'password'
    },
    {
      id: '8d0a7d59-423c-41c7-8863-80403609b010',
      name: 'Marie Burkin',
      email: 'mburkinx@taobao.com',
      password: 'password'
    },
    {
      id: '2fd1a65f-d4d4-4d99-b0bb-0b6210f6fe0a',
      name: 'Chlo Furmagier',
      email: 'cfurmagiery@plala.or.jp',
      password: 'password'
    },
    {
      id: '9a6afdcb-8739-465f-ad2c-bf48ea42cd35',
      name: 'Veda McLoney',
      email: 'vmcloneyz@biblegateway.com',
      password: 'password'
    },
    {
      id: '1a189414-c046-45b2-85bb-1c22c4b5075e',
      name: 'Kippie Risebrow',
      email: 'krisebrow10@upenn.edu',
      password: 'password'
    },
    {
      id: '412e6809-528c-49f9-bc14-54ad4250c6a8',
      name: 'Tarrance Wilkenson',
      email: 'twilkenson11@biglobe.ne.jp',
      password: 'password'
    },
    {
      id: 'eca857cc-d17b-4df9-a3d0-64182324005e',
      name: 'Adams Caplen',
      email: 'acaplen12@sbwire.com',
      password: 'password'
    },
    {
      id: '4389fec7-250b-4ac1-b60d-1e8a6753aa3c',
      name: 'Lina Kovnot',
      email: 'lkovnot13@ameblo.jp',
      password: 'password'
    },
    {
      id: 'e784069a-123c-401a-8488-c5ad6f9e54bf',
      name: 'Veradis Gilluley',
      email: 'vgilluley14@wordpress.com',
      password: 'password'
    },
    {
      id: 'b483618c-39b3-43b3-bf29-2c7d51101f49',
      name: 'Leonidas Lazer',
      email: 'llazer15@jugem.jp',
      password: 'password'
    },
    {
      id: '935bbe9d-fb6f-40ae-b5be-4dbe9d5df70d',
      name: 'Oralle Tapsell',
      email: 'otapsell16@so-net.ne.jp',
      password: 'password'
    },
    {
      id: '07187477-832b-49eb-9eec-f2b79dd55515',
      name: 'Debera McKirton',
      email: 'dmckirton17@hp.com',
      password: 'password'
    },
    {
      id: '4b97c432-d4d9-48ce-90d9-8cc94bdee23f',
      name: 'Jennifer Bassett',
      email: 'jbassett18@addtoany.com',
      password: 'password'
    },
    {
      id: '382edc4f-9855-486e-97a9-b7da68859ebb',
      name: 'Caldwell Timms',
      email: 'ctimms19@ustream.tv',
      password: 'password'
    },
    {
      id: 'e5b352f1-dd31-4d0d-8f57-5a713bf8f034',
      name: 'Randy Pirolini',
      email: 'rpirolini1a@rediff.com',
      password: 'password'
    },
    {
      id: 'a431dbe3-fae0-4166-a4ec-81f8bebe36e8',
      name: 'Kendricks Sharratt',
      email: 'ksharratt1b@eventbrite.com',
      password: 'password'
    },
    {
      id: '5ed4d908-6d5d-4b84-9369-ccb1e010f67c',
      name: 'Ulick Montilla',
      email: 'umontilla1c@youtube.com',
      password: 'password'
    },
    {
      id: '1fdb86b6-1d80-4833-8969-7139f5bb1c0f',
      name: 'Emelen Corkish',
      email: 'ecorkish1d@bizjournals.com',
      password: 'password'
    },
    {
      id: 'e187ea5f-f7ee-4f7b-932f-17da39341d3f',
      name: 'Fernando Azemar',
      email: 'fazemar1e@yahoo.co.jp',
      password: 'password'
    },
    {
      id: '4aa1ea5f-8614-4e9f-950d-4187eb5532e5',
      name: 'Karee Cutteridge',
      email: 'kcutteridge1f@nbcnews.com',
      password: 'password'
    },
    {
      id: 'a7a3c4e8-61e4-4964-a64b-03f8c22a9126',
      name: 'Samara Alloway',
      email: 'salloway1g@gravatar.com',
      password: 'password'
    },
    {
      id: '85fc6666-8979-4ec6-93b4-d4b1d9d2cb12',
      name: 'Darrel Baudinot',
      email: 'dbaudinot1h@wikipedia.org',
      password: 'password'
    },
    {
      id: '48fb9815-1147-46b2-8d2c-cf67faa92d62',
      name: 'Duky Chittleburgh',
      email: 'dchittleburgh1i@netlog.com',
      password: 'password'
    },
    {
      id: '9ee7ed54-bff9-4395-8170-741c1241faae',
      name: 'Vale Thornewell',
      email: 'vthornewell1j@globo.com',
      password: 'password'
    },
    {
      id: '0e4883ea-9808-41b9-8ec5-c941a1282638',
      name: 'Carmen Pindar',
      email: 'cpindar1k@posterous.com',
      password: 'password'
    },
    {
      id: '868d76ac-abbb-43ad-b115-18e820a6b56c',
      name: 'Thadeus Manjin',
      email: 'tmanjin1l@blog.com',
      password: 'password'
    },
    {
      id: 'd8aed062-5783-4481-af98-732e1ed3397d',
      name: 'Fancie Alvey',
      email: 'falvey1m@usnews.com',
      password: 'password'
    },
    {
      id: 'a1f09ee0-c331-4a9e-9636-4deb3906cdee',
      name: 'Deirdre Raft',
      email: 'draft1n@deviantart.com',
      password: 'password'
    },
    {
      id: '57971cc5-ebef-428e-8712-f40b73feda24',
      name: 'Albertine Tremmil',
      email: 'atremmil1o@state.tx.us',
      password: 'password'
    },
    {
      id: 'dd2da629-e9b0-431b-818f-f024699f1d83',
      name: 'Abigail Cockney',
      email: 'acockney1p@bbc.co.uk',
      password: 'password'
    },
    {
      id: '8c0b11a6-3250-47ea-be49-361785e81c15',
      name: 'Thea McLaren',
      email: 'tmclaren1q@samsung.com',
      password: 'password'
    },
    {
      id: '49b8fb71-d011-48ae-a482-701328f98cda',
      name: 'Cristina McPhilemy',
      email: 'cmcphilemy1r@hp.com',
      password: 'password'
    },
    {
      id: 'b70c1e11-abe3-44ae-933a-b09a8ed7e1f1',
      name: 'Rosalia Castri',
      email: 'rcastri1s@baidu.com',
      password: 'password'
    },
    {
      id: 'd60e4dc3-39a5-44b4-a57f-96e1a7cc8758',
      name: 'Saunders Hallede',
      email: 'shallede1t@blinklist.com',
      password: 'password'
    },
    {
      id: '280f31b5-4cb6-4ef0-8bf0-f33dc13b1f60',
      name: 'Ynes Fradson',
      email: 'yfradson1u@taobao.com',
      password: 'password'
    },
    {
      id: 'fd4d11df-a317-4c1a-b723-93d1a13b390a',
      name: 'Minnnie Need',
      email: 'mneed1v@google.ru',
      password: 'password'
    },
    {
      id: 'c5ebed8c-23b4-42fe-a4d4-53ec9b2cf2bc',
      name: 'Harrietta Bim',
      email: 'hbim1w@oakley.com',
      password: 'password'
    },
    {
      id: 'f261ef88-76cf-42fb-a502-9d787d1151cf',
      name: 'Moses Jillett',
      email: 'mjillett1x@newsvine.com',
      password: 'password'
    },
    {
      id: 'b02de6f7-ec1c-4803-a1d4-19fdd798d732',
      name: 'Gabie Arlidge',
      email: 'garlidge1y@google.ru',
      password: 'password'
    },
    {
      id: '1f9952fd-44c4-448d-89a7-5235e1442b61',
      name: 'Antoine Bickerdike',
      email: 'abickerdike1z@mapy.cz',
      password: 'password'
    },
    {
      id: '2d4c5624-1d2a-41f0-a14c-04c4cf7088d3',
      name: 'Sondra Piolli',
      email: 'spiolli20@livejournal.com',
      password: 'password'
    },
    {
      id: '54183813-7f7c-46dd-be3a-8a66d9616651',
      name: 'Jemie Amorts',
      email: 'jamorts21@weebly.com',
      password: 'password'
    },
    {
      id: '7dd7d1cc-8ccb-4533-a5fa-8cc7e180d4aa',
      name: 'Sherlocke Gilson',
      email: 'sgilson22@fastcompany.com',
      password: 'password'
    },
    {
      id: 'a036cc80-f750-40ec-989a-1d7aeb6113d9',
      name: 'Law McKelvie',
      email: 'lmckelvie23@nps.gov',
      password: 'password'
    },
    {
      id: 'a8ea06dd-eb1e-42cf-8208-eb434424fd5f',
      name: 'Estevan Leveret',
      email: 'eleveret24@hp.com',
      password: 'password'
    },
    {
      id: '57fed0f2-7f30-40c1-aebe-c19411504c63',
      name: 'Danyette Goward',
      email: 'dgoward25@altervista.org',
      password: 'password'
    },
    {
      id: '9cf88a33-f38b-4c08-9ccd-eb35b5fdae15',
      name: 'Virgilio Pilkington',
      email: 'vpilkington26@webnode.com',
      password: 'password'
    },
    {
      id: 'cb9dc94d-8db3-4081-bd50-a88eb8091896',
      name: 'Erek Kilminster',
      email: 'ekilminster27@nasa.gov',
      password: 'password'
    },
    {
      id: '0d26e60b-661f-408e-a505-6869199aa714',
      name: 'Roseanne Pinshon',
      email: 'rpinshon28@homestead.com',
      password: 'password'
    },
    {
      id: 'c81ca118-3097-403e-bbb9-1b0a354653ab',
      name: 'Milka Biaggelli',
      email: 'mbiaggelli29@fema.gov',
      password: 'password'
    },
    {
      id: '47b26dfc-aba3-4699-9c93-dadfa43edb0f',
      name: 'Monica Rising',
      email: 'mrising2a@comsenz.com',
      password: 'password'
    },
    {
      id: 'c57dd086-7b38-4c2e-bac4-c87f1e3a7688',
      name: 'Corrie Heynel',
      email: 'cheynel2b@google.it',
      password: 'password'
    },
    {
      id: '64334900-8dd9-404c-b36c-4329bbda5d23',
      name: 'Madella MacDermand',
      email: 'mmacdermand2c@dion.ne.jp',
      password: 'password'
    },
    {
      id: 'e9929a0a-542e-4b3e-ba1f-6e0ca90a6139',
      name: 'Drona MacAdie',
      email: 'dmacadie2d@usnews.com',
      password: 'password'
    },
    {
      id: 'f93b1c9f-5ad9-4528-9c1f-5ef0d7268908',
      name: 'Sayres Barratt',
      email: 'sbarratt2e@xinhuanet.com',
      password: 'password'
    },
    {
      id: 'b3c0c545-1711-4f6c-a205-f23922d79d86',
      name: 'Bambi Filpo',
      email: 'bfilpo2f@google.co.jp',
      password: 'password'
    },
    {
      id: 'f6145e4e-a0f3-40bf-9707-13a158f51d0e',
      name: 'Cheston Casley',
      email: 'ccasley2g@miibeian.gov.cn',
      password: 'password'
    },
    {
      id: '28c0d3e8-293e-4fa4-a60d-70b13dc4127d',
      name: 'Muffin Manklow',
      email: 'mmanklow2h@tumblr.com',
      password: 'password'
    },
    {
      id: '4ba158ca-6729-4da4-926c-6dcdcb21b752',
      name: 'Ashly MacCourt',
      email: 'amaccourt2i@dagondesign.com',
      password: 'password'
    },
    {
      id: '128ece9c-8d9c-42a9-9a5b-0c5bfce8ac41',
      name: 'Claudelle Vasyutkin',
      email: 'cvasyutkin2j@home.pl',
      password: 'password'
    },
    {
      id: 'e2030162-8f18-4b6c-8a36-3f901eda2eec',
      name: 'Graig Garfield',
      email: 'ggarfield2k@skype.com',
      password: 'password'
    },
    {
      id: 'c289c820-7aa6-416f-9222-dc56dcb7183d',
      name: 'Donal Dukelow',
      email: 'ddukelow2l@blogtalkradio.com',
      password: 'password'
    },
    {
      id: '173b9282-6a4c-4279-8c94-357ec12cc18b',
      name: 'Agretha Bruineman',
      email: 'abruineman2m@dailymail.co.uk',
      password: 'password'
    },
    {
      id: '548d01d6-c6ee-4323-9684-5655c352f691',
      name: 'Tierney Enstone',
      email: 'tenstone2n@psu.edu',
      password: 'password'
    },
    {
      id: '97008124-673f-413d-9253-e0c83bba7e4c',
      name: 'Stacia Denyukhin',
      email: 'sdenyukhin2o@psu.edu',
      password: 'password'
    },
    {
      id: '5148cba5-06f2-4513-af3c-d884498e9524',
      name: 'Gretal Yanez',
      email: 'gyanez2p@biblegateway.com',
      password: 'password'
    },
    {
      id: 'ed6cc3a5-f62e-43c3-a237-10f03de804bf',
      name: 'Dniren Detoile',
      email: 'ddetoile2q@nydailynews.com',
      password: 'password'
    },
    {
      id: '628eea6c-ff9b-459a-a18a-d254a69e9f2f',
      name: 'Lynnett Kennet',
      email: 'lkennet2r@quantcast.com',
      password: 'password'
    }
  ]);
};
