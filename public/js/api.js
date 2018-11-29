//Check categories id to api calls also in kilowatthours
var APIkey = 'd84f8f53c83715f73e4dccd041c94ca8'

const urlStringElectricity = `http://api.eia.gov/series/?api_key=${APIkey}&series_id=INTL.2-12-WORL-BKWH.A`;
const urlStringFFuel = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.28-12-WORL-BKWH.A";
const urlStringCoal = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.29-12-WORL-BKWH.A";
console.log("loading");
// console.log(urlString);
var electricArray = [];
var coalArray = [];
var ffuelArray = [];

function fetchElec() {
    return fetch(urlStringElectricity).then(function (res) {
        return res.json()
    }).then(function (dataE) {
        // console.log('dataE', dataE['series'][0]['data']);
        electricArray = dataE['series'][0]['data'];
        // console.log("It's meeeeeeee", electricArray);
        return electricArray;
    })
}

function fetchFFuel() {
    return fetch(urlStringFFuel).then(function (res) {
        return res.json()
    }).then(function (dataFFuel) {
        // console.log("data Fuel here ", dataFFuel)
        ffuelArray = dataFFuel['series'][0]['data'];
        return ffuelArray;
    })
};

function fetchCoal() {
    return fetch(urlStringCoal).then(function (res) {
        return res.json()
    }).then(function (dataCoal) {
        // console.log("data Coal here ", dataCoal)
        coalArray = dataCoal['series'][0]['data'];
        // console.log("Coal array is heeeere", coalArray);
        return coalArray;
    });

};

console.log('function check ', fetchCoal());
// async function fetchAll() {
//     await fetchCoal();
//     await fetchElec();
//     await fetchFFuel();
//     await createWorld();
// };
// fetchAll();


Promise.all([fetchCoal(), fetchFFuel(), fetchElec()]).then(function (data) {
    // console.log(data);
    var worldAggArr = data[0].map(obj => {
        var newObjectIwant = {};
        newObjectIwant['year'] = obj[0];
        newObjectIwant['Elec_kw'] = obj[1];
        return newObjectIwant;
        
    });
    worldAggArr.forEach((yearObj, index) => {
        yearObj['coal_kw'] = data[1][index][1];
        yearObj['ffuel_kw'] = data[2][index][1];

    });
    console.log(worldAggArr);
})
//Create object for NA with each type of energy production method
var objectA = {
    countryname: "USA",
    Petroleum: 6,
    Hydroleum: 7,
    Year: 1999
};

// //Aggregate into an array
var MassiveArray = [];


//REformatting URL string array

function createWorld() {
    var worldAggArr = electricArray.map(obj => {
        var newObjectIwant = {};
        newObjectIwant['year'] = obj[0];
        newObjectIwant['Elec_kw'] = obj[1];
        return newObjectIwant;
    });

    worldAggArr.forEach((yearObj, index) => {
        yearObj['coal_kw'] = coalArray[index][1];
        yearObj['ffuel_kw'] = ffuelArray[index][1];

    });

    console.log("world agg object here ", worldAggArr)
};


//Chaining the data parsing methods
//https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4
// let Electricity = electricArray
//     .filter((units) => {
//         return units.type === 'Quadrillion Btu';
//     }).map((world) => {
//         //Slice(1) because we try get to country name only
//         return world.name.slice(1)
//     }).reduce((sum, world) => {
//         return sum + units.type
//     });