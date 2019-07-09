function formatMultipyString(startNum,endNum){
    var multipyString=[]
    for(i=startNum;i<=endNum;i++){
        let itemInline=""
        for(j=startNum;j<=endNum;j++){
            if(j==i){
                itemInline+=j+"*"+i+"="+i*j+"\n"
                multipyString.push(itemInline);
                break;
            }else{
                itemInline+=j+"*"+i+"="+i*j+"   "
            }
        }
    }
    //console.log(multipyString)
   return multipyString
}
module.exports = formatMultipyString;