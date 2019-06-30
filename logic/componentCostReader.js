const csv = require('csvtojson');

var reader = {};

reader.getComponentJson = function(filePath) {
    if (reader.componentJson) {
        return new Promise(
            (resolve,reject)=>{
                resolve(reader.componentJson);
            });
    }
    
    return csv().fromFile(filePath)
    .then((jsonObj)=>{
        reader.componentJson = jsonObj;            
        return new Promise(
            (resolve,reject)=>{
                resolve(reader.componentJson);
            });
    })
}

module.exports = reader;