const request = require('request')
const fs=require('fs')
const dotenv = require('dotenv');
dotenv.config()
Darksky_API_key=process.env.key



const forecast=({latitude,longitude},callback)=>{
    const url="https://api.darksky.net/forecast/"+Darksky_API_key+"/"+encodeURIComponent(longitude)+","+encodeURIComponent(latitude)+"?units=si"
    
    request({url,json:true},(error,{body})=>{
        const {temperature=body.currently["temperature"],precipProbability=body.currently["precipProbability"],uvindex=body.currently["uvIndex"],visibility=body.currently["visibility"],humidity=body.currently["humidity"],windSpeed=body.currently["windSpeed"]}=body
        if(error){
            callback("Unable to access weather service please try again later",undefined)
        }
        else if(body.code==400){
            callback(body.error,undefined)
        }
        else{
            callback(undefined,{
                temperature,
                rainP:precipProbability,
                uvindex,
                visibility,
                humidity,
                windSpeed,
                summary:body.daily.data[0].summary

            })
        }
    })
}
module.exports=forecast
