const fs = require('fs')
const json2xls = require('json2xls')
const xlsx = require('node-xlsx')

// Ordena la información del archivo en un objecto donde la key es el participante y el value es un objeto con la información de cada participante
const orderData = (marcas, cupos, rows) => {
  let ordenedData = {}
  marcas.forEach( (marca, index) => {
    let cupo = cupos[index]
    rows.forEach( row => {
      let [ participant, ...fields ] = row
      let value = fields[index]

      if(!ordenedData.hasOwnProperty(participant)) {
        ordenedData[participant] = {}
      }

      let title = `${ marca }-${ cupo }`
      ordenedData[participant][title] = value || 0
    })
  })

  return ordenedData
}

// Obtiene los mejores 3 datos de cada participante
const getBestItems = (ordenedData) => {
  let result = []
  Object.entries(ordenedData).forEach( ([ participant, data ]) => {
    let sortedkeys = Object.keys(data).sort( (a, b) => data[b] - data[a])
    let bestSortedKeys = sortedkeys.slice(0, 3)

    let participantData = { participant }
    bestSortedKeys.forEach( (key, index) => {
      let value = data[key]
      let [ marca, cupo ] = key.split('-')

      participantData[`value ${ index }`] = value
      participantData[`marca ${ index }`] = marca
      participantData[`cupo ${ index }`] = cupo
    })

    result.push(participantData)
  })

  return result
}

const init = () => {
  const workSheetsFromFile = xlsx.parse(`./files/base_data.xlsx`)
  let fileData = workSheetsFromFile[0].data
  
  // Separa las filas entre marcas, cupos y los valores
  let [ _, marcasFields, cuposFields, ...rows ] = fileData

  // Quita el primer elemento del array que está vacio
  let [ __, ...marcas ] = marcasFields

  // Wuitar el primer elemento del array que es "Codigo De Destinatario"
  let [ ___, ...cupos ] = cuposFields

  let ordenedData = orderData(marcas, cupos, rows)
  let result = getBestItems(ordenedData)
  
  let resultFile = json2xls(result)
  fs.writeFileSync('./files/result.xlsx', resultFile, 'binary')
}

init()
