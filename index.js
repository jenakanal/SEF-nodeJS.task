
const geoCode = require("./dataFunction/geoCode") 

const weather = require("./dataFunction/weather")

geoCode(process.argv[2],(error,data)=>{
    if(error){
        console.log("error is " , error)
    }
    else{
        console.log("Data is " ,data)
        weather(data.Longitude , data.latitude, (error , data)=>{
            if(error){
                console.log("error is " , error)
            }
            else{
                console.log("Data is " , data)
            }
        })
    } 
})

    


