const urlString = "http://api.eia.gov/category/?api_key=d84f8f53c83715f73e4dccd041c94ca8&category_id=2134668";
const urlStringPetroleum = "http://api.eia.gov/category/?api_key=d84f8f53c83715f73e4dccd041c94ca8&category_id=2134436"
const urlStringCoal = "http://api.eia.gov/category/?api_key=d84f8f53c83715f73e4dccd041c94ca8&category_id=2783595"
console.log("loading");
console.log(urlString);

fetch(urlString).then(function(res){
   return res.json()
}).then(function(data){
    console.log(data)
})

fetch(urlStringPetroleum, ).then(function(res){
   return res.json()
}).then(function(data){
    console.log(data)
})

fetch(urlStringCoal).then(function(res){
   return res.json()
}).then(function(data){
    console.log(data)
})