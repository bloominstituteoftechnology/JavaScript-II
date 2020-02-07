// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    firstItem passes the first item of the given array to the callback function.
  }

  SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  NOTES ON THE SOLUTION:

  firstItem is a higher order function.
  It expects a callback (referred to as `cb`) as its second argument.
  To test our solution, we can use the given `items` array and a variety of callbacks.
  Note how callbacks can be declared separately, or inlined.

  TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

cbLength = arr => arr.length;

//! console.log(getLength(items, cbLength));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
cbLast = arr => arr[arr.length - 1];

//! console.log(last(items, cbLast));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
cbSumNums = (x, y) => x + y;

//! console.log(sumNums(2, 4, cbSumNums));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}
cdMultiplyNums = (x, y) => x * y;

// ! console.log(multiplyNums(3, 6, cdMultiplyNums));

// let items = ["Pencil", "Notebook", "yo-yo", "Gum"];
/*
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  list.forEach(function(currentValue) {
    if (item == currentValue) {
      return cb(true);
    } else {
      cb(false);
    }
  });
  //* return item == list[i] ? cb(true) : cb(false);
}
//! let containsCb = argumentPassed => console.log(argumentPassed);

//! contains("yo-yo", items, containsCb);
*/

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    //* return item == list[i] ? cb(true) : cb(false);
    if (item == list[i]) {
      return cb(true);
    }
  }
  return cb(false);
}
//! let containsCb = argumentPassed => console.log(argumentPassed);

//! contains("yo-yo", items, containsCb);

const runners = [
  {
    id: 1,
    first_name: "Charmain",
    last_name: "Seiler",
    email: "cseiler0@wired.com",
    shirt_size: "2XL",
    company_name: "Divanoodle",
    donation: 75
  },
  {
    id: 2,
    first_name: "Whitaker",
    last_name: "Ierland",
    email: "wierland1@angelfire.com",
    shirt_size: "2XL",
    company_name: "Wordtune",
    donation: 148
  },
  {
    id: 3,
    first_name: "Julieta",
    last_name: "McCloid",
    email: "jmccloid2@yahoo.com",
    shirt_size: "S",
    company_name: "Riffpedia",
    donation: 171
  },
  {
    id: 4,
    first_name: "Martynne",
    last_name: "Paye",
    email: "mpaye3@sciencedaily.com",
    shirt_size: "XL",
    company_name: "Wordware",
    donation: 288
  },
  {
    id: 5,
    first_name: "Gussy",
    last_name: "Raraty",
    email: "graraty4@ucoz.ru",
    shirt_size: "L",
    company_name: "Oozz",
    donation: 291
  },
  {
    id: 6,
    first_name: "Yule",
    last_name: "Tommasetti",
    email: "ytommasetti5@state.gov",
    shirt_size: "S",
    company_name: "Yodo",
    donation: 27
  },
  {
    id: 7,
    first_name: "Kathie",
    last_name: "Majury",
    email: "kmajury6@guardian.co.uk",
    shirt_size: "3XL",
    company_name: "Zoomcast",
    donation: 261
  },
  {
    id: 8,
    first_name: "Tanner",
    last_name: "Branton",
    email: "tbranton7@tmall.com",
    shirt_size: "2XL",
    company_name: "Realmix",
    donation: 28
  },
  {
    id: 9,
    first_name: "Sarina",
    last_name: "Lasham",
    email: "slasham8@toplist.cz",
    shirt_size: "XL",
    company_name: "Gigashots",
    donation: 110
  },
  {
    id: 10,
    first_name: "Bertie",
    last_name: "Lonergan",
    email: "blonergan9@issuu.com",
    shirt_size: "3XL",
    company_name: "Skinte",
    donation: 62
  },
  {
    id: 11,
    first_name: "Trevor",
    last_name: "Studd",
    email: "tstudda@networkadvertising.org",
    shirt_size: "S",
    company_name: "Cogidoo",
    donation: 76
  },
  {
    id: 12,
    first_name: "Malachi",
    last_name: "Okeshott",
    email: "mokeshottb@chron.com",
    shirt_size: "M",
    company_name: "DabZ",
    donation: 91
  },
  {
    id: 13,
    first_name: "Berget",
    last_name: "Logsdail",
    email: "blogsdailc@wix.com",
    shirt_size: "M",
    company_name: "Mymm",
    donation: 9
  },
  {
    id: 14,
    first_name: "Loise",
    last_name: "Rivlin",
    email: "lrivlind@behance.net",
    shirt_size: "2XL",
    company_name: "Linktype",
    donation: 204
  },
  {
    id: 15,
    first_name: "Christan",
    last_name: "Kendall",
    email: "ckendalle@example.com",
    shirt_size: "XS",
    company_name: "Skinix",
    donation: 252
  },
  {
    id: 16,
    first_name: "Kayla",
    last_name: "Whitwam",
    email: "kwhitwamf@deliciousdays.com",
    shirt_size: "2XL",
    company_name: "Oyope",
    donation: 147
  },
  {
    id: 17,
    first_name: "Heddie",
    last_name: "Heningam",
    email: "hheningamg@tripadvisor.com",
    shirt_size: "L",
    company_name: "Skinix",
    donation: 172
  },
  {
    id: 18,
    first_name: "Mace",
    last_name: "Ballinger",
    email: "mballingerh@a8.net",
    shirt_size: "S",
    company_name: "Nlounge",
    donation: 266
  },
  {
    id: 19,
    first_name: "Nola",
    last_name: "Abberley",
    email: "nabberleyi@jalbum.net",
    shirt_size: "XL",
    company_name: "Photospace",
    donation: 148
  },
  {
    id: 20,
    first_name: "Nadine",
    last_name: "Tresler",
    email: "ntreslerj@marketwatch.com",
    shirt_size: "3XL",
    company_name: "Wikido",
    donation: 292
  },
  {
    id: 21,
    first_name: "Ulrikaumeko",
    last_name: "Vuittet",
    email: "uvuittetk@gov.uk",
    shirt_size: "S",
    company_name: "Skinte",
    donation: 102
  },
  {
    id: 22,
    first_name: "Saunder",
    last_name: "Spennock",
    email: "sspennockl@icq.com",
    shirt_size: "3XL",
    company_name: "Kwimbee",
    donation: 213
  },
  {
    id: 23,
    first_name: "Carmel",
    last_name: "Woffinden",
    email: "cwoffindenm@wikispaces.com",
    shirt_size: "S",
    company_name: "Rooxo",
    donation: 137
  },
  {
    id: 24,
    first_name: "Marielle",
    last_name: "Kimmel",
    email: "mkimmeln@jimdo.com",
    shirt_size: "M",
    company_name: "Livetube",
    donation: 96
  },
  {
    id: 25,
    first_name: "Brucie",
    last_name: "Burris",
    email: "bburriso@slate.com",
    shirt_size: "2XL",
    company_name: "Wordtune",
    donation: 128
  },
  {
    id: 26,
    first_name: "Juan",
    last_name: "Berzon",
    email: "jberzonp@soup.io",
    shirt_size: "3XL",
    company_name: "Einti",
    donation: 234
  },
  {
    id: 27,
    first_name: "Sacha",
    last_name: "Olsen",
    email: "solsenq@reverbnation.com",
    shirt_size: "2XL",
    company_name: "Viva",
    donation: 190
  },
  {
    id: 28,
    first_name: "Jamey",
    last_name: "O'Nolan",
    email: "jonolanr@samsung.com",
    shirt_size: "XL",
    company_name: "Skinix",
    donation: 31
  },
  {
    id: 29,
    first_name: "Morrie",
    last_name: "Rainard",
    email: "mrainards@yale.edu",
    shirt_size: "XS",
    company_name: "Podcat",
    donation: 52
  },
  {
    id: 30,
    first_name: "Fidel",
    last_name: "Roskelly",
    email: "froskellyt@ibm.com",
    shirt_size: "XS",
    company_name: "Avavee",
    donation: 5
  },
  {
    id: 31,
    first_name: "Toni",
    last_name: "MacSweeney",
    email: "tmacsweeneyu@parallels.com",
    shirt_size: "M",
    company_name: "Jaloo",
    donation: 82
  },
  {
    id: 32,
    first_name: "Jessey",
    last_name: "Walhedd",
    email: "jwalheddv@slashdot.org",
    shirt_size: "L",
    company_name: "Trilia",
    donation: 5
  },
  {
    id: 33,
    first_name: "Karola",
    last_name: "Piper",
    email: "kpiperw@ucsd.edu",
    shirt_size: "3XL",
    company_name: "Yombu",
    donation: 110
  },
  {
    id: 34,
    first_name: "Marley",
    last_name: "Mitchenson",
    email: "mmitchensonx@webeden.co.uk",
    shirt_size: "M",
    company_name: "Zoonoodle",
    donation: 97
  },
  {
    id: 35,
    first_name: "Marrilee",
    last_name: "Thrasher",
    email: "mthrashery@opensource.org",
    shirt_size: "XL",
    company_name: "Bluejam",
    donation: 17
  },
  {
    id: 36,
    first_name: "Tye",
    last_name: "Manie",
    email: "tmaniez@netscape.com",
    shirt_size: "L",
    company_name: "Kanoodle",
    donation: 30
  },
  {
    id: 37,
    first_name: "Charleen",
    last_name: "Sheering",
    email: "csheering10@mit.edu",
    shirt_size: "3XL",
    company_name: "Jatri",
    donation: 262
  },
  {
    id: 38,
    first_name: "Valma",
    last_name: "Eynaud",
    email: "veynaud11@archive.org",
    shirt_size: "XS",
    company_name: "Jaxbean",
    donation: 212
  },
  {
    id: 39,
    first_name: "Dollie",
    last_name: "McDarmid",
    email: "dmcdarmid12@tinyurl.com",
    shirt_size: "S",
    company_name: "Kayveo",
    donation: 74
  },
  {
    id: 40,
    first_name: "Minna",
    last_name: "Hymas",
    email: "mhymas13@cornell.edu",
    shirt_size: "XS",
    company_name: "Vimbo",
    donation: 101
  },
  {
    id: 41,
    first_name: "Jsandye",
    last_name: "Frend",
    email: "jfrend14@ca.gov",
    shirt_size: "XS",
    company_name: "Latz",
    donation: 156
  },
  {
    id: 42,
    first_name: "Hanky", //todo CHANGE NAME HERE *****************************
    last_name: "Hacket",
    email: "yhacket15@wp.com",
    shirt_size: "XL",
    company_name: "Lazzy",
    donation: 291
  },
  {
    id: 43,
    first_name: "Vida", //todo **********************
    last_name: "Zebedee",
    email: "hzebedee16@ezinearticles.com",
    shirt_size: "L",
    company_name: "Gigashots",
    donation: 241
  },
  {
    id: 44,
    first_name: "Jodie",
    last_name: "Stawell",
    email: "jstawell17@yale.edu",
    shirt_size: "S",
    company_name: "Jaxspan",
    donation: 262
  },
  {
    id: 45,
    first_name: "Vidaa",
    last_name: "Karsh",
    email: "fkarsh18@pcworld.com",
    shirt_size: "S",
    company_name: "Mycat",
    donation: 239
  },
  {
    id: 46,
    first_name: "Vitality",
    last_name: "Purselowe",
    email: "rpurselowe19@thetimes.co.uk",
    shirt_size: "L",
    company_name: "Jabbersphere",
    donation: 11
  },
  {
    id: 47,
    first_name: "Vida",
    last_name: "Tydd",
    email: "vtydd1a@dropbox.com",
    shirt_size: "S",
    company_name: "Quaxo",
    donation: 55
  },
  {
    id: 48,
    first_name: "Shelll",
    last_name: "MacGiolla Pheadair",
    email: "amacgiollapheadair1b@xing.com",
    shirt_size: "2XL",
    company_name: "Kwimbee",
    donation: 214
  },
  {
    id: 49,
    first_name: "Sheld",
    last_name: "Alway",
    email: "balway1c@ow.ly",
    shirt_size: "S",
    company_name: "Voolia",
    donation: 107
  },
  {
    id: 50,
    first_name: "She",
    last_name: "Baine",
    email: "sbaine1d@intel.com",
    shirt_size: "M",
    company_name: "Gabtype",
    donation: 171
  }
];

//todo STRETCH PROBLEM

function findDuplicates(array, cb) {
  for (let i = 0; i < array.length; i++) {
    let j = i + 1;
    if (j < array.length) {
      do {
        if (array[i].first_name === array[j].first_name) {
          return cb(
            `${array[i].first_name} and ${array[j].first_name} are duplicates`
          );
        }
        j++;
      } while (j < array.length);
    }
  }
  return cb("No Duplicates Found");
}

findDuplicatesCb = argument => console.log(argument);

findDuplicates(runners, findDuplicatesCb);
