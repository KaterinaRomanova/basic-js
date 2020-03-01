module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    if(disksNumber == null || turnsSpeed == null){
        throw 'Not implemented';
    }
    
    var turns = Math.pow(2,disksNumber); //кол-во оборотов
    var seconds = turns/(turnsSpeed/3600)-1;
    var hanoi = {
        turns: turns,
        seconds: seconds
    }
    
    return hanoi;
}




