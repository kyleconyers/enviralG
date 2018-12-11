//Check categories id to api calls also in kilowatthours
var APIkey = 'd84f8f53c83715f73e4dccd041c94ca8'

//Premade totals
const urlStringRenewables = "http://api.eia.gov/category/?api_key=" + APIkey + "&category_id=2783646"
const urlStringElectricity = `http://api.eia.gov/series/?api_key=${APIkey}&series_id=INTL.2-12-WORL-BKWH.A`;
const urlStringFFuel = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.28-12-WORL-BKWH.A";
const urlStringCoal = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.29-12-WORL-BKWH.A";

// //country/fuel totals
// //Ffuels
// const urlCountriesCoal = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.4411-2-" + ISO + "-QBTU.A";
// const urlCountriesNaturalGas = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.4413-2-" + ISO + "-QBTU.A";
// const urlCountriesPetroleum = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.5-2-" + ISO + "-QBTU.A";
// const urlCountriesJetFuel = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.63-2-" + ISO + "-QBTU.A";
// //renewable
// const urlCountriesNuclear = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.27-12-" + ISO + "-BKWH.A";
// const urlCountriesSolar = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.116-12-" + ISO + "-BKWH.A";
// const urlCountriesWind = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.37-12-" + ISO + "-QBTU.A";
// const urlCountriesBiofuels = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.79-2-" + ISO + "-QBTU.A";

/////
const apiConfig = {
"Coal": "http://api.eia.gov/series/?api_key={APIkey}&series_id=INTL.{FUEL_TYPE_ID}-{ISO}-QBTU.A",
"NaturalGas": "http://api.eia.gov/series/?api_key={APIkey}&series_id=INTL.{FUEL_TYPE_ID}-{ISO}-QBTU.A",
"Petroleum": "http://api.eia.gov/series/?api_key={APIkey}&series_id=INTL.{FUEL_TYPE_ID}-{ISO}-QBTU.A",
"JetFuel": "http://api.eia.gov/series/?api_key={APIkey}&series_id=INTL.{FUEL_TYPE_ID}-{ISO}-QBTU.A",
// "Nuclear": "http://api.eia.gov/series/?api_key={APIkey}&series_id=INTL.{FUEL_TYPE_ID}-{ISO}-BKWH.A",
// "Solar": "http://api.eia.gov/series/?api_key={APIkey}&series_id=INTL.{FUEL_TYPE_ID}-{ISO}-BKWH.A",
"Wind": "http://api.eia.gov/series/?api_key={APIkey}&series_id=INTL.{FUEL_TYPE_ID}-{ISO}-QBTU.A",
"Biofuels": "http://api.eia.gov/series/?api_key={APIkey}&series_id=INTL.{FUEL_TYPE_ID}-{ISO}-QBTU.A",
}
/////
const FUEL_TYPE_IDS = {
    "coal": "4411-2",
    "NaturalGas": "4413-2",
    "Petroleum": "5-2",
    "JetFuel": "63-2",
    "Nuclear": "27-12",
    "Solar": "116-12",
    "Wind": "37-12",
    "Biofuels": "79-2"
}
function swap(json){
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
}
const REVERSE_FUEL_TYPES = swap(FUEL_TYPE_IDS);
//Aus/coal sample
const urlStringAusCoal = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.4411-2-AUS-QBTU.A";
console.log('URLSTRING', urlStringAusCoal)
//USA Sample
//ffuels

const urlUsaCoal = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.4411-2-" + "USA" + "-QBTU.A";
const urlUsaNaturalGas = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.4413-2-" + "USA" + "-QBTU.A";
const urlUsaPetroleum = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.5-2-" + "USA" + "-QBTU.A";
const urlUsaJetFuel = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.63-2-" + "USA" + "-QBTU.A";
//renewable
const urlUsaNuclear = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.27-12-" + "USA" + "-BKWH.A";
const urlUsaSolar = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.116-12-" + "USA" + "-BKWH.A";
const urlUsaWind = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.37-12-" + "USA" + "-QBTU.A";
const urlUsaBiofuels = "http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.79-2-" + "USA" + "-QBTU.A";

var fuels = ["coal", "naturalGas", "petroleum", "jetFuel", "wind", "biofuels" ];
var isoArray = ["AUS", "BRA", "CHN", "COD", "FRA", "IND", "RUS", "USA"];

var usaApiArray = [urlUsaCoal, urlUsaNaturalGas, urlUsaPetroleum, urlUsaJetFuel, urlUsaNuclear, urlUsaSolar, urlUsaWind, urlUsaBiofuels];
// var countriesApiArray = [urlCountriesCoal, urlCountriesNaturalGas, urlCountriesPetroleum, urlCountriesJetFuel, urlCountriesNuclear, urlCountriesSolar]
var usaTotalApi = [];






var totalAusArray = [];
var totalBraArray = [];
var totalChnArray = [];
var totalCodArray = [];
var totalFraArray = [];
var totalIndArray = [];
var totalRusArray = [];
// var totalUsaArray = [];
var allData = {};
var electricArray = [];
var coalArray = [];
var ffuelArray = [];
var AusCoalArray = [];
var regionData = {};
var totalCoalArrayList = [];
var totalNaturalGasList = [];
var usaTotal = [];
var fake = {
    "a": "0",
    "b": "0",
    "c": "0"
}


const coalArr = [];
const naturalGasArr = [];
var UsaArr = [];

var countriesObject = {};

// const otalApi = [urlCountriesCoal, urlCountriesNaturalGas, urlCountriesPetroleum, urlCountriesJetFuel, urlCountriesNuclear, urlCountriesSolar, urlCountriesWind, urlCountriesBiofuels, urlStringAUSCoal];

//////
var resultsObject = {};
//////

// Promise.all(urls.map(fetch)).then(responses =>
//     Promise.all(responses.map(res => res.text())
//     ).then(texts => {

//     })


function generateResultsObject(){
    isoArray.forEach(function(iso){
        allData[iso] = {};
        
        types = Object.keys(FUEL_TYPE_IDS);
        types.forEach(function(type){
            var url = "http://api.eia.gov/series/?api_key="+ APIkey + "&series_id=INTL."+ FUEL_TYPE_IDS[type] + "-" + iso + "-QBTU.A";
        
            //console.log(url);
            fetch(url).then(function(res){
                return res.json();
                
            }).then(function(data){
                
                if('series' in data){
                    allData[iso][type] = data['series'][0]['data'];
                }
                else allData[iso][type] = [];
                
                //make array with blank years 
                
            });
            
        // console.log("TEST", )
      });
      firstFewTypes = false;
    });
    //   return url
}
////////



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
        // console.log("test", coalArray);
        return coalArray;

    });

};

function fetchAusCoal() {
    return fetch(urlStringAusCoal).then(function (res) {
        return res.json()
    }).then(function (dataAusCoal) {
        // console.log("data Coal here ", dataCoal)
        // console.log(dataAusCoal)
        AusCoalArray = dataAusCoal['series'][0]['data'];
        // console.log("Coal array is heeeere", coalArray);
        // console.log("Aus coal", AusCoalArray);
        return AusCoalArray;
    });
    
};
fetchAusCoal();

function fetchTotalCoal(url) {
    return fetch(url).then(function (res) {
        return res.json()
    }).then(function (dataTotalCoal) {
        // console.log("data Coal here ", dataCoal)
        // console.log(dataTotalCoal)
        totalCoalArray = dataTotalCoal['series'][0]['data'];
        // console.log("Coal array is heeeere", coalArray);
        // console.log("Total coal", totalCoalArray);
        coalArr.push(totalCoalArray)
        return totalCoalArray;
    });

};
// fetchTotalCoal();
var totalCoalArray = isoArray.map(function(element){
    // console.log("http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.4411-2-" + element + "-QBTU.A");
    return fetchTotalCoal("http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.4411-2-" + element + "-QBTU.A")
})

Promise.all(totalCoalArray).then(function(values) {
    // console.log('coal values', values)
})



function fetchTotalNaturalGas(url) {
    return fetch(url).then(function (res) {
        return res.json()
    }).then(function (dataTotalNaturalGas) {
        // console.log("data Coal here ", dataCoal)
        // console.log(dataTotalCoal)
        totalNaturalGasArray = dataTotalNaturalGas['series'][0]['data'];
        // console.log("Coal array is heeeere", coalArray);
        // console.log("Total coal", totalCoalArray);
        naturalGasArr.push(totalNaturalGasArray)
        return totalNaturalGasArray;
    });

};
// fetchTotalCoal();
var totalNaturalGasArray = isoArray.map(function(element){
    // console.log("http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.4411-2-" + element + "-QBTU.A");
    return fetchTotalNaturalGas("http://api.eia.gov/series/?api_key=" + APIkey + "&series_id=INTL.4413-2-" + element + "-QBTU.A")
})

Promise.all(totalNaturalGasArray).then(function(values) {
    console.log('natural gas values', values)
})



// console.log(totalCoalArray)
// console.log('arr', arr)
// console.log(totalCoalArray)
// for(let i = 0; i < totalCoalArray.length; i++) {
//    console.log(totalCoalArray[i])

//    function fetchTotalCoal() {
//     return fetch(totalCoalArray[i]).then(function (res) {
//         return res.json()
//     }).then(function (dataTotalCoal) {
//         // console.log("data Coal here ", dataCoal)
//         // console.log(dataTotalCoal)
//         totalCoalArray = dataTotalCoal['series'][0]['data'];
//         // console.log("Coal array is heeeere", coalArray);
//         console.log("Total coal", totalCoalArray);
//         return totalCoalArray;
//     });

// };
// fetchTotalCoal();
// }




// Scope issue if we don't return the entire function body. The lesson learned is not to return up to the body but to the entire body. 





// console.log(countryCoalArray)



// console.log('function check ', fetchCoal());
// async function fetchAll() {
//     await fetchCoal();
//     await fetchElec();
//     await fetchFFuel();
//     await createWorld();
// };
// fetchAll();


// Promise.all([fetchCoal(), fetchFFuel(), fetchElec(), fetchTotalUsa()]).then(function (data) {
//     // console.log(data);
//     // console.log(electricArray);
//     // console.log(coalArray);
//     // console.log(ffuelArray);
   
//     var chartData = electricArray.map(function(year, i){
//         return [year[0], year[1], TotalU[i][1],
//                                   ffuelArray[i][1]
//     ]
//     })
//     console.log(coalArray)
//     console.log(chartData)

//     var worldAggArr = data[0].map(obj => {
//         var newObjectIwant = {};
//         newObjectIwant['year'] = obj[0];
//         newObjectIwant['Elec_kw'] = obj[1];
//         return newObjectIwant;

//     });
//     worldAggArr.forEach((yearObj, index) => {
//         yearObj['coal_kw'] = data[1][index][1];
//         yearObj['ffuel_kw'] = data[2][index][1];

//     });
//     chartData.unshift(["year", "electric", "coal", "ffuel"])
//     // console.log(worldAggArr);
 
//     function createworld() {
//         // console.log(coalArray)
//         var chartData = electricArray.map(function(year, i){
//             return [year[0], year[1], coalArray[i][1],
//                                       ffuelArray[i][1]
//         ]})
//         var finalData = []
//         for(var i = chartData.length - 1; i>-1; i--){
//             finalData.push(chartData[i])
//         }
//         finalData.unshift(["year", "electric", "coal", "ffuel"])
//         // var worldAggArr = electricArray.map(obj => {
//         //     var newObjectIwant = {};
//         //     newObjectIwant['year'] = obj[0];
//         //     newObjectIwant['Elec_kw'] = obj[1];
//         //     return newObjectIwant;
//         // });
    
//         // worldAggArr.forEach((yearObj, index) => {
//         //     yearObj['coal_kw'] = coalArray[index][1];
//         //     yearObj['ffuel_kw'] = ffuelArray[index][1];
    
//         // });
//         // makeGraph(worldAggArr);
//         // console.log("world agg object here ", worldAggArr)
//         // console.log(finalData, "envoked")
//         return finalData;
//     };
//     worldCreated = createworld();
//     return worldCreated;
// }).then(((worldCreated) => console.log(worldCreated)));

Promise.all([generateResultsObject(), fetchCoal(), fetchFFuel(), fetchElec()]).then(function (data) {
        // console.log(data);
        var regions = Object.keys(allData);
        regions.forEach(function(region){
            let fuels = Object.keys(allData[region]);
            
            let headers = ["1980"];
            
            

            
            // headers.unshift([fuels]);
            ["biofuels", "wind", "jetfuel", "petroleum", "naturalGas", "coal"]
            var realHeaders = ["year", "biofuels", "wind", "jetfuel", "petroleum", "naturalGas", "coal"]
            var regionChart = [headers];

            fuels.forEach(function(fuel){
                var fuelData = allData[region][fuel].reverse();
                fuelData.forEach(function(data, index){
                    console.log(fuelData)
                    if(index in regionChart){
                        regionChart[index].push(data[1]);

                        // regionChart.unshift(["coal", "naturalGas", "petrtoleum", "jetfuel", "nuclear", "solar", "wind", "biofuels"])
                    }
                    else{
                        regionChart.push(data)
                    }
                    // console.log(regionChart)

                });
                // console.log(regionChart)
                // regionChart.forEach(dataSet => {
                //     if (dataSet.length > 7){
                //         dataSet.pop()
                //         console.log("too much length")
                //         console.log(dataSet)
                //     }
                //     else if(dataSet.length < 7){
                //         while(dataSet.length < 7){
                //             dataSet.push(0)
                //         }
                //     }

                })
                regionChart.forEach(dataSet => {
                    if (dataSet.length > 7){
                        dataSet.pop()
                        console.log("too much length")
                        console.log(dataSet)
                    }
                    else if(dataSet.length < 7){
                        while(dataSet.length < 7){
                            dataSet.push(0)
                        }
                    }

            });
            // regionChart.forEach(function(data, index){
            //     console.log(data)
            //     console.log(index)
            //     regionChart[region].unshift(["Year", "Coal", "NaturalGas", "Petroleum", "JetFuel", "Nuclear", "Solar", "Wind", "Biofuels"]);
            // });
            regionChart.unshift(realHeaders);
            regionData[region] = regionChart;

        });
        // regionData.unshift(["year", "coal", "naturalGas", "petrtoleum", "jetfuel", "nuclear", "solar", "wind", "biofuels"]);
        // console.log(regionData);
        // console.log(regionChart);

        
        var chartData = electricArray.map(function(year, i){
            return [year[0], year[1], coalArray[i][1],
                                      ffuelArray[i][1],
                                      0,
                                      0,
                                      0,
                                      0

                                      
        ]})
        var finalData = []
        for(var i = chartData.length - 1; i>-1; i--){
            finalData.push(chartData[i])
        }
        
        finalData.unshift(["year", "electric", "coal", "ffuel", "0", "0", "0", "0" ]);

        

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
        // console.log(finalData, "envoked")
    //};
    console.log(regionData)
    regionData['world'] = finalData;
    
}).then((regionData) => console.log(regionData));
// console.log(regionData)
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


