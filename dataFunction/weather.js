const request = require("request")

const weather = (Longitude , latitude , callback)=>{
    const weatherURL = "https://api.weatherapi.com/v1/current.json?key=ec63568f47b24ac995a113736241807%20&q="+Longitude+ "," +latitude

    request({url : weatherURL , json : true} , (error , response)=>{

        if(error){
            callback("unable to contact website" , undefined)
        } 
        else if(response.body.error){
            callback(response.body.error.msssage , undefined)
        }
        else {
            callback(undefined , response.body.location.name + " it is " +response.body.current.condition.text + " its temperture is " + response.body.current. temp_c + " "+ response.body.current. temp_f)
             
        }
    })
}


module.exports = weather