//a class for setting up the data from dataloader
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp =  bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

//the getData function extracts the data from the dataloader.js file
function getData(){ 
var loadedData = loadData();
return loadedData;
}

//function to setup data in the table 
function dataRow(legend, value, units){
    msg ="<td>";
    msg += legend;
    msg += ":</td><td";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function updateDisplay(){
console.log("updateDisplay() started");
//record and display time data
theTime = new Date();

//new if then statement style cond ? // ifTrue : ifFalse
console.log(theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) 
+ ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));

//update table
var timeRead = data[index].time_seconds;

if (timeRead) >= 10){
document.getElementById("dataTable").rows["seconds"].innerHTML =
     dataRow("Time Elapsed", data[index].time_second,"seconds");

document.getElementById("dataTable").rows["latitude"].innerHTML =
     dataRow("Latitude", data[index].time_second.latitude);

document.getElementById("dataTable").rows["seconds"].innerHTML =
     dataRow("Time Elapsed", data[index].time_second,"seconds");

document.getElementById("dataTable").rows["seconds"].innerHTML =
     dataRow("Time Elapsed", data[index].time_second,"seconds");
}
}