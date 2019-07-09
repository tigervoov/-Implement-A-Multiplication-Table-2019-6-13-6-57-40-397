function checkNumber(startNum,endNum){
    if(isSmartNumSmallerEndNum(startNum,endNum)&&checkNumberRange(startNum,endNum)){
        return true
    }else{
        return false;
    }
}
function isSmartNumSmallerEndNum(startNum,endNum){
    if(startNum<endNum){
        return true;
    }else{
        return false;
    }
}
function checkNumberRange(startNum,endNum){
    if(1<=startNum<=1000 && 1<=endNum<=1000){
        return true
    }else{
        return false;
    }
}
module.exports = checkNumber;