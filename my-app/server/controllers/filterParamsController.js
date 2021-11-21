const mongoose = require("mongoose")
const FilterParams = require("../models/FilterParams")
const Product = require("../models/Product")

const checkUrlName = (urlName) => {
    switch (urlName) {
      case "/WinterTires":
        return "Зимние шины бу"
  
      case "/LightTruckTires":
        
        return "Легкогрузовые шины бу"
  
      case "/TruckTires":
        return "Грузовые шины бу"
  
      case "/DiscsAndWheels":
        return "Диски и колеса бу"

      case "/SummerTires":
        return "Летние шины бу"
  
      case "/MotorcycleTires":
        return "Мотошины бу"

    }
  }

const addParams = (dataResult, filterParamsName) => {

    if (filterParamsName.length && dataResult !== null && dataResult !== "null" && dataResult !== undefined && dataResult !== 0 && dataResult !== "0") {

        for (const key in filterParamsName) {
           
            if (filterParamsName[key][0] === dataResult) {

                filterParamsName[key][1] = filterParamsName[key][1] + 1
                return
            } 
            else if (filterParamsName[key][0] !== dataResult && +key === (filterParamsName.length - 1)) {
                
                filterParamsName.push([dataResult, 1])
                return
            }
        }
        
    } else if (dataResult !== null && dataResult !== "null" && dataResult !== undefined && dataResult !== 0 && dataResult !== "0") {

        filterParamsName.push([dataResult, 1])
        return
    }
}

const createFilterParamsList = (categoryPraduct) => {
    const arr = []
    const updateObject = {
        price: [],
        numberOfBoltHoles: [],
        rimWidth: [],
        diameterOfHolesPosition: [],
        departureET: [],
        hubDIA: [],
        wear: [],
        brand: [],
        model: [],
        address: [],
        height: [],
        width: [],
    }

    Product.find({ categoryPraduct: categoryPraduct }).countDocuments(async(error, count)=>{
        let skip = 0
        let limit
        (count > 10) ? limit = 10 : limit = count

        console.log(count, "count")

        for (let i = 0 ; i < count; i += limit) {
            
            
            if (i === count - (count % limit)) {
                limit = i + count % limit
            }

            await Product.find({ categoryPraduct: categoryPraduct }, (error, result)=>{
                
                result.map((index)=> arr.push(index))

                if (arr.length === count) {
                    console.log(arr.length, "totoal array")

                    for (const key in arr) {
                        addParams(arr[key].price, updateObject.price)
                        addParams(arr[key].numberOfBoltHoles, updateObject.numberOfBoltHoles)
                        addParams(arr[key].rimWidth, updateObject.rimWidth)
                        addParams(arr[key].diameterOfHolesPosition, updateObject.diameterOfHolesPosition)
                        addParams(arr[key].departureET, updateObject.departureET)
                        addParams(arr[key].hubDIA, updateObject.hubDIA)
                        addParams(arr[key].wear, updateObject.wear)
                        addParams(arr[key].brand, updateObject.brand)
                        addParams(arr[key].model, updateObject.model)
                        addParams(arr[key].address, updateObject.address)
                        addParams(arr[key].height, updateObject.height)
                        addParams(arr[key].width, updateObject.width)
                    }
                    
                    FilterParams.findOneAndUpdate({categoryPraduct: categoryPraduct}, updateObject, (error, result)=>{
                        if (error) return console.log(error)
            
                        if (!result) {
                            updateObject.categoryPraduct = categoryPraduct
                            FilterParams.create(updateObject, (error, result)=>{
                                if (error) return console.log(error)
                            })
                            console.log("+")
                            return
                        }

                        // console.log(result, "result")
                        console.log("+")
                    })
                }
                
            }).skip(skip).limit(limit)
            console.log( skip, limit,)

            skip += limit
        }

    })
}


// createFilterParamsList("Зимние шины бу")
// createFilterParamsList("Легкогрузовые шины бу")
// createFilterParamsList("Грузовые шины бу")
// createFilterParamsList("Диски и колеса бу")
// createFilterParamsList("Летние шины бу")
// createFilterParamsList("Мотошины бу")


exports.filterParams = (request, response)=>{
    const category = checkUrlName(request.query.category)

    FilterParams.findOne({categoryPraduct: category}, (error, result)=>{
        if (error) return console.log(error)

        response.send(result)
    })
}

exports.updateAddfilterParams = (params)=>{

    FilterParams.findOne({categoryPraduct: params.categoryPraduct}, (error, result)=>{
        if (error) return console.log(error)

        const updateObject = {
            price: result.price,
            numberOfBoltHoles: result.numberOfBoltHoles,
            rimWidth: result.rimWidth,
            diameterOfHolesPosition: result.diameterOfHolesPosition,
            departureET: result.departureET,
            hubDIA: result.hubDIA,
            wear: result.wear,
            brand: result.brand,
            model: result.model,
            address: result.address,
            height: result.height,
            width: result.width,
        }

        addParams(params.price, updateObject.price)
        addParams(params.numberOfBoltHoles, updateObject.numberOfBoltHoles)
        addParams(params.rimWidth, updateObject.rimWidth)
        addParams(params.diameterOfHolesPosition, updateObject.diameterOfHolesPosition)
        addParams(params.departureET, updateObject.departureET)
        addParams(params.hubDIA, updateObject.hubDIA)
        addParams(params.wear, updateObject.wear)
        addParams(params.brand, updateObject.brand)
        addParams(params.model, updateObject.model)
        addParams(params.address, updateObject.address)
        addParams(params.height, updateObject.height)
        addParams(params.width, updateObject.width)

        FilterParams.findOneAndUpdate({categoryPraduct: params.categoryPraduct}, updateObject, (error, result)=>{
            if (error) return console.log(error)

            if (!result) {
                updateObject.categoryPraduct = params.categoryPraduct
                FilterParams.create(updateObject, (error, result)=>{
                    if (error) return console.log(error)
                })

                console.log("+")
                return
            }

            // console.log(result, "result")
            console.log("+")
        })
    })
}

exports.updateDeletefilterParams = (params)=>{
    const deleteParams = (dataResult, filterParamsName) => {

        if (filterParamsName.length) {
    
            for (const key in filterParamsName) {
    
                if (filterParamsName[key][0] === dataResult && dataResult !== null && dataResult !== "null" && dataResult !== undefined && dataResult !== 0 && dataResult !== "0") {
    
                    filterParamsName[key][1] = filterParamsName[key][1] - 1
                    return
                } 
            }
        }
    }

    FilterParams.findOne({categoryPraduct: params.categoryPraduct}, (error, result)=>{
        if (error) return console.log(error)

        const updateObject = {
            price: result.price,
            numberOfBoltHoles: result.numberOfBoltHoles,
            rimWidth: result.rimWidth,
            diameterOfHolesPosition: result.diameterOfHolesPosition,
            departureET: result.departureET,
            hubDIA: result.hubDIA,
            wear: result.wear,
            brand: result.brand,
            model: result.model,
            address: result.address,
            height: result.height,
            width: result.width,
        }

        deleteParams(params.price, updateObject.price)
        deleteParams(params.numberOfBoltHoles, updateObject.numberOfBoltHoles)
        deleteParams(params.rimWidth, updateObject.rimWidth)
        deleteParams(params.diameterOfHolesPosition, updateObject.diameterOfHolesPosition)
        deleteParams(params.departureET, updateObject.departureET)
        deleteParams(params.hubDIA, updateObject.hubDIA)
        deleteParams(params.wear, updateObject.wear)
        deleteParams(params.brand, updateObject.brand)
        deleteParams(params.model, updateObject.model)
        deleteParams(params.address, updateObject.address)
        deleteParams(params.height, updateObject.height)
        deleteParams(params.width, updateObject.width)

        FilterParams.findOneAndUpdate({categoryPraduct: params.categoryPraduct}, updateObject, (error, result)=>{
            if (error) return console.log(error)

            // console.log(result, "result")
            console.log("-")
        })

    })
}


mongoose.disconnect()