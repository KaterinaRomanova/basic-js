
module.exports = function repeater(str, options) {
    var addStr='';
    if (options.addition !== undefined){
        for (i = 1; i < options.additionRepeatTimes; i++) {
            addStr += options.addition;
            if(options.additionSeparator !== undefined){
                addStr += options.additionSeparator;  
            }else{
                addStr += options.additionSeparator + '|'; 
            }
        }
    addStr += options.addition;
    }
    var newStr = '';
    var finishStr ='';
    newStr = str + addStr;
    for (i = 1; i < options.repeatTimes; i++) {
        finishStr += newStr;
        if(options.separator !== undefined){
            finishStr += options.separator 
        }else{
            finishStr = finishStr + '+';
        } 
    }
    finishStr+= newStr;
    return finishStr;
};
