const db = require('APP/db');

const users = 
[
	{name:"Brandon Simmons",email:"bsimmons0@amazon.co.jp",password:"SgQKfwogyL"},
	{name:"Lois Welch",email:"lwelch1@google.ca",password:"1RqyTpsi"},
	{name:"Linda Hall",email:"lhall2@walmart.com",password:"piawjoaUE"},
	{name:"Gloria Sullivan",email:"gsullivan3@weebly.com",password:"EiO9dR"},
	{name:"George Hansen",email:"ghansen4@unicef.org",password:"wStYjYvf5wp2"},
	{name:"Wayne Freeman",email:"wfreeman5@imgur.com",password:"tbsEJq"},
	{name:"Ralph Thompson",email:"rthompson6@mayoclinic.com",password:"rRmMp8kxynpv"},
	{name:"Carolyn Elliott",email:"celliott7@timesonline.co.uk",password:"1JQ9F2"},
	{name:"Jeffrey Woods",email:"jwoods8@clickbank.net",password:"wJhlj38CU"},
	{name:"Irene Hall",email:"ihall9@baidu.com",password:"k14nBq0rpBBL"},
	{name:"Antonio Gordon",email:"agordona@123-reg.co.uk",password:"3bRzLHezl0x"},
	{name:"Larry Gutierrez",email:"lgutierrezb@twitter.com",password:"EwblS5OF"},
	{name:"Ronald Green",email:"rgreenc@mail.ru",password:"PJacStImw"},
	{name:"Mary Wilson",email:"mwilsond@meetup.com",password:"pkjyCzkX"},
	{name:"Cynthia Powell",email:"cpowelle@home.pl",password:"iISM1vvVfZ"},
	{name:"Amanda Johnson",email:"ajohnsonf@baidu.com",password:"srPmHyz"},
	{name:"Carolyn Cook",email:"ccookg@unblog.fr",password:"sTz3qc"},
	{name:"Justin Lynch",email:"jlynchh@nps.gov",password:"eRAZyGQyQqq"},
	{name:"Michael Bennett",email:"mbennetti@drupal.org",password:"0akDY2l"},
	{name:"Philip Mills",email:"pmillsj@wikipedia.org",password:"fATl5THyXqg"}
];

const seedUsers = () => db.Promise.map(users, user => db.model('users').create(user));

module.exports = seedUsers;