var knex = require('./db/knex');

function Users(){
    return knex('users');
};

// function Breweries(){
//     return knex('breweries');
// };

module.exports = {
    getUser: function(id){
        // Get User by ID
        return Users().where('id',id);
    }
};

// module.exports = {
//     getBreweries: function(){
//         // Get all breweries
//         return Breweries().select();
//     },
//     getBrewery: function(id){
//         // Get one brewery that matches the id
//         return Breweries().where('id',id);
//     },
//     getBeers: function(){
//         // Get beers and brewery data
//         // Alias the beer name to beer_name and the brewery name to brewery_name
//         return Beers().select('*','name as beer_name', 'brewery as brewery_name');
//     },
//     getBeersByBrewery: function(brewery_id){
//         // Get beers and brewery data for a single brewery
//         // Alias the beer name to beer_name and the brewery name to brewery_name
//         return knex.select('beers.brewery as brewery_name', 'beers.name as beer_name', 'beers.abv')
//                    .from('breweries')
//                    .rightJoin('beers','beers.brewery','breweries.name')
//                    .where('breweries.id',brewery_id);
//     }
// };
