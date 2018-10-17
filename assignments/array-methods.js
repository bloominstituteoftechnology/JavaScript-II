// A local community center is holding a fund rasising 5k fun run and has invited 50 small businesses to make a small donation on their behalf for some much needed updates to their facilities.  Each business has assigned a representative to attend the event along with a small donation.

// Scroll to the bottom of the list to use some advanced array methods to help the event director gather some information from the businesses.

const runners = [
  {'id':1,'first':'Charmain','last':'Seiler','email':'cseiler0@wired.com','shirt_size':'2XL','company':'Divanoodle','donation':75},
  {'id':2,'first':'Whitaker','last':'Ierland','email':'wierland1@angelfire.com','shirt_size':'2XL','company':'Wordtune','donation':148},
  {'id':3,'first':'Julieta','last':'McCloid','email':'jmccloid2@yahoo.com','shirt_size':'S','company':'Riffpedia','donation':171},
  {'id':4,'first':'Martynne','last':'Paye','email':'mpaye3@sciencedaily.com','shirt_size':'XL','company':'Wordware','donation':288},
  {'id':5,'first':'Gussy','last':'Raraty','email':'graraty4@ucoz.ru','shirt_size':'L','company':'Oozz','donation':291},
  {'id':6,'first':'Yule','last':'Tommasetti','email':'ytommasetti5@state.gov','shirt_size':'S','company':'Yodo','donation':27},
  {'id':7,'first':'Kathie','last':'Majury','email':'kmajury6@guardian.co.uk','shirt_size':'3XL','company':'Zoomcast','donation':261},
  {'id':8,'first':'Tanner','last':'Branton','email':'tbranton7@tmall.com','shirt_size':'2XL','company':'Realmix','donation':28},
  {'id':9,'first':'Sarina','last':'Lasham','email':'slasham8@toplist.cz','shirt_size':'XL','company':'Gigashots','donation':110},
  {'id':10,'first':'Bertie','last':'Lonergan','email':'blonergan9@issuu.com','shirt_size':'3XL','company':'Skinte','donation':62},
  {'id':11,'first':'Trevor','last':'Studd','email':'tstudda@networkadvertising.org','shirt_size':'S','company':'Cogidoo','donation':76},
  {'id':12,'first':'Malachi','last':'Okeshott','email':'mokeshottb@chron.com','shirt_size':'M','company':'DabZ','donation':91},
  {'id':13,'first':'Berget','last':'Logsdail','email':'blogsdailc@wix.com','shirt_size':'M','company':'Mymm','donation':9},
  {'id':14,'first':'Loise','last':'Rivlin','email':'lrivlind@behance.net','shirt_size':'2XL','company':'Linktype','donation':204},
  {'id':15,'first':'Christan','last':'Kendall','email':'ckendalle@example.com','shirt_size':'XS','company':'Skinix','donation':252},
  {'id':16,'first':'Kayla','last':'Whitwam','email':'kwhitwamf@deliciousdays.com','shirt_size':'2XL','company':'Oyope','donation':147},
  {'id':17,'first':'Heddie','last':'Heningam','email':'hheningamg@tripadvisor.com','shirt_size':'L','company':'Skinix','donation':172},
  {'id':18,'first':'Mace','last':'Ballinger','email':'mballingerh@a8.net','shirt_size':'S','company':'Nlounge','donation':266},
  {'id':19,'first':'Nola','last':'Abberley','email':'nabberleyi@jalbum.net','shirt_size':'XL','company':'Photospace','donation':148},
  {'id':20,'first':'Nadine','last':'Tresler','email':'ntreslerj@marketwatch.com','shirt_size':'3XL','company':'Wikido','donation':292},
  {'id':21,'first':'Ulrikaumeko','last':'Vuittet','email':'uvuittetk@gov.uk','shirt_size':'S','company':'Skinte','donation':102},
  {'id':22,'first':'Saunder','last':'Spennock','email':'sspennockl@icq.com','shirt_size':'3XL','company':'Kwimbee','donation':213},
  {'id':23,'first':'Carmel','last':'Woffinden','email':'cwoffindenm@wikispaces.com','shirt_size':'S','company':'Rooxo','donation':137},
  {'id':24,'first':'Marielle','last':'Kimmel','email':'mkimmeln@jimdo.com','shirt_size':'M','company':'Livetube','donation':96},
  {'id':25,'first':'Brucie','last':'Burris','email':'bburriso@slate.com','shirt_size':'2XL','company':'Wordtune','donation':128},
  {'id':26,'first':'Juan','last':'Berzon','email':'jberzonp@soup.io','shirt_size':'3XL','company':'Einti','donation':234},
  {'id':27,'first':'Sacha','last':'Olsen','email':'solsenq@reverbnation.com','shirt_size':'2XL','company':'Viva','donation':190},
  {'id':28,'first':'Jamey','last':'O\'Nolan','email':'jonolanr@samsung.com','shirt_size':'XL','company':'Skinix','donation':31},
  {'id':29,'first':'Morrie','last':'Rainard','email':'mrainards@yale.edu','shirt_size':'XS','company':'Podcat','donation':52},
  {'id':30,'first':'Fidel','last':'Roskelly','email':'froskellyt@ibm.com','shirt_size':'XS','company':'Avavee','donation':5},
  {'id':31,'first':'Toni','last':'MacSweeney','email':'tmacsweeneyu@parallels.com','shirt_size':'M','company':'Jaloo','donation':82},
  {'id':32,'first':'Jessey','last':'Walhedd','email':'jwalheddv@slashdot.org','shirt_size':'L','company':'Trilia','donation':5},
  {'id':33,'first':'Karola','last':'Piper','email':'kpiperw@ucsd.edu','shirt_size':'3XL','company':'Yombu','donation':110},
  {'id':34,'first':'Marley','last':'Mitchenson','email':'mmitchensonx@webeden.co.uk','shirt_size':'M','company':'Zoonoodle','donation':97},
  {'id':35,'first':'Marrilee','last':'Thrasher','email':'mthrashery@opensource.org','shirt_size':'XL','company':'Bluejam','donation':17},
  {'id':36,'first':'Tye','last':'Manie','email':'tmaniez@netscape.com','shirt_size':'L','company':'Kanoodle','donation':30},
  {'id':37,'first':'Charleen','last':'Sheering','email':'csheering10@mit.edu','shirt_size':'3XL','company':'Jatri','donation':262},
  {'id':38,'first':'Valma','last':'Eynaud','email':'veynaud11@archive.org','shirt_size':'XS','company':'Jaxbean','donation':212},
  {'id':39,'first':'Dollie','last':'McDarmid','email':'dmcdarmid12@tinyurl.com','shirt_size':'S','company':'Kayveo','donation':74},
  {'id':40,'first':'Minna','last':'Hymas','email':'mhymas13@cornell.edu','shirt_size':'XS','company':'Vimbo','donation':101},
  {'id':41,'first':'Jsandye','last':'Frend','email':'jfrend14@ca.gov','shirt_size':'XS','company':'Latz','donation':156},
  {'id':42,'first':'Yevette','last':'Hacket','email':'yhacket15@wp.com','shirt_size':'XL','company':'Lazzy','donation':291},
  {'id':43,'first':'Hank','last':'Zebedee','email':'hzebedee16@ezinearticles.com','shirt_size':'L','company':'Gigashots','donation':241},
  {'id':44,'first':'Jodie','last':'Stawell','email':'jstawell17@yale.edu','shirt_size':'S','company':'Jaxspan','donation':262},
  {'id':45,'first':'Falito','last':'Karsh','email':'fkarsh18@pcworld.com','shirt_size':'S','company':'Mycat','donation':239},
  {'id':46,'first':'Reginauld','last':'Purselowe','email':'rpurselowe19@thetimes.co.uk','shirt_size':'L','company':'Jabbersphere','donation':11},
  {'id':47,'first':'Vida','last':'Tydd','email':'vtydd1a@dropbox.com','shirt_size':'S','company':'Quaxo','donation':55},
  {'id':48,'first':'Anderea','last':'MacGiolla Pheadair','email':'amacgiollapheadair1b@xing.com','shirt_size':'2XL','company':'Kwimbee','donation':214},
  {'id':49,'first':'Bel','last':'Alway','email':'balway1c@ow.ly','shirt_size':'S','company':'Voolia','donation':107},
  {'id':50,'first':'Shell','last':'Baine','email':'sbaine1d@intel.com','shirt_size':'M','company':'Gabtype','donation':171}
];

// ==== Challenge 1: Use .forEach() ====
// The event director needs both the first and last names of each runner for their running bibs.  Combine both the first and last names into a new array called fullName. 
const fullName = [];
runners.forEach(({ first, last }) => fullName.push(`${first} ${last}`));
console.log(fullName);

// ==== Challenge 2: Use .map() ====
// The event director needs to have all the runner's first names converted to uppercase because the director BECAME DRUNK WITH POWER. Convert each first name into all caps and log the result
const allCaps = runners.map(({ first }) => first.toUpperCase());
console.log(allCaps); 

// ==== Challenge 3: Use .filter() ====
// The large shirts won't be available for the event due to an ordering issue.  Get a list of runners with large sized shirts so they can choose a different size. Return an array named largeShirts that contains information about the runners that have a shirt size of L and log the result
const largeShirts = runners.filter(({ shirt_size }) => shirt_size === 'L');
console.log(largeShirts);

// ==== Challenge 4: Use .reduce() ====
// The donations need to be tallied up and reported for tax purposes. Add up all the donations into a ticketPriceTotal array and log the result
const ticketPriceTotal = runners.reduce((acc, { donation }) => acc + donation, 0);
console.log(ticketPriceTotal);

// ==== Challenge 5: Be Creative ====
// Now that you have used .forEach(), .map(), .filter(), and .reduce().  I want you to think of potential problems you could solve given the data set and the 5k fun run theme.  Try to create and then solve 3 unique problems using one or many of the array methods listed above.

// Problem 1
// Create an object of companies with corresponding total donations.
const donationsByCompany = runners.reduce((acc, { company, donation }) => {
  if (acc[company]) {
    acc[company] += donation;
    return acc;
  } else return { ...acc, [company]: donation };
}, {});
console.log(donationsByCompany);

// Problem 2
// Sort the companies alphabetically, getting rid of duplicates. Do not alter the array.
const { removeDuplicates } = require('./callbacks.js');
const alphabeticalCompanies = removeDuplicates(runners.map(({ company }) => company).sort());
console.log(alphabeticalCompanies);

// Problem 3
// Sort the companies by donations (greater donations coming first). Use the result from problem 1 (and make the result structured in the same way).
const sortedDonationsByCompany = Object.entries(donationsByCompany)
  .sort((a, b) => b[1] - a[1])
  .reduce((acc, arr) => {
    return { ...acc, [arr[0]]: arr[1] };
  }, {});
console.log(sortedDonationsByCompany);
