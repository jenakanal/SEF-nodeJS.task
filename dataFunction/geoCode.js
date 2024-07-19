const request = require("request")

const geoCode = (location , callbak)=>{

const geoCodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + location +".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

request({url : geoCodeURL , json : true},(error,response)=>{

    console.log(response.body.message)
    if(error){
        callbak("unale to connect website" , undefined)
    }
    else if(response.body.message){
        callbak(response.body.message , undefined)
    }
    else if(response.body.features.length==0){
        callbak("unable to reache the location", undefined)
    }
    else{
        callbak(undefined , {
            Longitude : response.body.features[0].center[0],
            latitude : response.body.features[0].center[1]
        })
    }
})
}  

module.exports = geoCode