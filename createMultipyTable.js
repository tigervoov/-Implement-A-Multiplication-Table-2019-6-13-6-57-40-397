
const checkNumber=require('./checkNumber')
const formatMultipyString=require('./formatMultipyString')
function createMultipyTable(startNum,endNum){
    if(checkNumber(startNum,endNum)){
        var multipyString=formatMultipyString(startNum,endNum)
        var result=multipyString.join("")
        console.log(result)
        return result
        
    }else{
        return null
    }
   
}
module.exports = createMultipyTable;
//createMultipyTable(2,4)