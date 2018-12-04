//Check categories id to api calls also in kilowatthours
var APIkey = 'd84f8f53c83715f73e4dccd041c94ca8'
const urlStringRenewables = "http://api.eia.gov/category/?api_key=" + APIkey + "&category_id=2783646"
const urlStringElectricity = `http://api.eia.gov/series/?api_key=${APIkey}&series_id=INTL.2-12-WORL-BKWH.A`;
const urlStringFFuel = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.28-12-WORL-BKWH.A";
const urlStringCoal = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.29-12-WORL-BKWH.A";
console.log("loading");
// console.log(urlString);
var electricArray = [];
var coalArray = [];
var ffuelArray = [];
var worldCreated;

// Scope issue if we don't return the entire function body. The lesson learned is not to return up to the body but to the entire body. 
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
    console.log(electricArray);
    // console.log(coalArray);
    // console.log(ffuelArray);
   
    var chartData = electricArray.map(function(year, i){
        return [year[0], year[1], coalArray[i][1],
                                  ffuelArray[i][1]
    ]

    })
    console.log(chartData)

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
    chartData.unshift(["year", "electric", "coal", "ffuel"])
    // console.log(worldAggArr);
 
    function createworld() {
        console.log(coalArray)
        var chartData = electricArray.map(function(year, i){
            return [year[0], year[1], coalArray[i][1],
                                      ffuelArray[i][1]
        ]})
        var finalData = []
        for(var i = chartData.length - 1; i>-1; i--){
            finalData.push(chartData[i])
        }
        finalData.unshift(["year", "electric", "coal", "ffuel"])
        // var worldAggArr = electricArray.map(obj => {
        //     var newObjectIwant = {};
        //     newObjectIwant['year'] = obj[0];
        //     newObjectIwant['Elec_kw'] = obj[1];
        //     return newObjectIwant;
        // });
    
        // worldAggArr.forEach((yearObj, index) => {
        //     yearObj['coal_kw'] = coalArray[index][1];
        //     yearObj['ffuel_kw'] = ffuelArray[index][1];
    
        // });
        // makeGraph(worldAggArr);
        // console.log("world agg object here ", worldAggArr)
        console.log(finalData, "envoked")
        return finalData;
    };
    worldCreated = createworld();
    return worldCreated;
}).then(((worldCreated) => console.log(worldCreated)));
// .then(createworld());
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

