var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://www.facebook.com/olivier.boudjema/friends?lst=1165367417%3A1165367417%3A1504447415&source_ref=pb_friends_tl/", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  var balise = '._6a'

  var test = $('._39g5');
  var testtexte = test.text();
  console.log(testtexte);

  // $(balise).each(function( index ) {
  //   //console.log($(balise).text());
  //
  //   //var title = $(this).find('p.title > a.title').text().trim();
  //   //console.log("Title: " + title);
  //   //fs.appendFileSync('reddit.txt', title + '\n');
  // });

});
