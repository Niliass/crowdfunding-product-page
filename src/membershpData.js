const storage = localStorage;

if (!storage.getItem("crowdfunding")) {
  const Data = {
    memberships: [
      {
        id: idGenerators(),
        title: "Bamboo Stand",
        pledge: 25,
        description:
          "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        left: 1000,
      },
      {
        id: idGenerators(),
        title: "Black Edition stand",
        pledge: 75,
        description:
          "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left: 1000,
      },
      {
        id: idGenerators(),
        title: "Mahogany Special Edition",
        pledge: 200,
        description:
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left: 1000,
      },
    ],
    statistics: {
      id: idGenerators(),
      backed: 0,
      backer: 0,
      date: new Date("04/01/23"),
      progress: 0,
    },
  };
  storage.setItem("crowdfunding", JSON.stringify(Data));
}

function idGenerators() {
  let chrs = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let id = "";
  while (id.length < 5) {
    id += chrs[Math.floor(Math.random() * chrs.length)];
  }
  return id;
}

export const { memberships, statistics } = JSON.parse(
  storage.getItem("crowdfunding")
);
