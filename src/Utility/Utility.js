export const GetEnumCollection = (jsonObjEnum, filterMethod) => {
    let result = []
    for (var p in jsonObjEnum) result.push(jsonObjEnum[p])
    // return filterMethod == undefined ? result : filterMethod(result)
    return result
}