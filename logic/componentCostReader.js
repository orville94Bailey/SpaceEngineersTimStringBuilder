const csv = require('csvtojson');

var reader = {};

reader.getComponentJson = function (filePath) {
    if (reader.componentJson) {
        return new Promise(
            (resolve, reject) => {
                resolve(reader.otherJson);
            });
    }

    return csv().fromFile(filePath)
        .then((jsonObj) => {
            reader.componentJson = jsonObj;
            translate()
            return new Promise(
                (resolve, reject) => {
                    resolve(reader.otherJson);
                });
        })
}

function translate() {
    if (!reader.componentJson) {
        reader.getComponentJson().then(() => translate());
    }

    reader.otherJson = reader.componentJson.map(x => {
        return {
            Block: x.Block,
            Components: [
                {
                    Name: 'BulletproofGlass',
                    Quantity: x.BulletproofGlass
                },
                {
                    Name: 'Computer',
                    Quantity: x.Computer
                },
                {
                    Name: 'Construction',
                    Quantity: x.Construction
                },
                {
                    Name: 'Detector',
                    Quantity: x.Detector
                },
                {
                    Name: 'Display',
                    Quantity: x.Display
                },
                {
                    Name: 'Explosives',
                    Quantity: x.Explosives
                },
                {
                    Name: 'Girder',
                    Quantity: x.Girder
                },
                {
                    Name: 'GravityGenerator',
                    Quantity: x.GravityGenerator
                },
                {
                    Name: 'InteriorPlate',
                    Quantity: x.InteriorPlate
                },
                {
                    Name: 'LargeTube',
                    Quantity: x.LargeTube
                },
                {
                    Name: 'Medical',
                    Quantity: x.Medical
                },
                {
                    Name: 'MetalGrid',
                    Quantity: x.MetalGrid
                },
                {
                    Name: 'Motor',
                    Quantity: x.Motor
                },
                {
                    Name: 'PowerCell',
                    Quantity: x.PowerCell
                },
                {
                    Name: 'RadioCommunication',
                    Quantity: x.RadioCommunication
                },
                {
                    Name: 'Reactor',
                    Quantity: x.Reactor
                },
                {
                    Name: 'SmallTube',
                    Quantity: x.SmallTube
                },
                {
                    Name: 'SolarCell',
                    Quantity: x.SolarCell
                },
                {
                    Name: 'SteelPlate',
                    Quantity: x.SteelPlate
                },
                {
                    Name: 'Superconductor',
                    Quantity: x.Superconductor
                },
                {
                    Name: 'Thrust',
                    Quantity: x.Thrust
                }
            ]
        }
    })

    reader.otherJson.forEach(x=>console.log(x))

}

module.exports = reader;