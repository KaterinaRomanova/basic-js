module.exports = function createDreamTeam(members ) {
  var NameCommand = [];
  if(!Array.isArray(members)){
    return false;
  }
  members.forEach(item => {
    if(typeof item == 'string'){
      item = item.replace(/\s+/g,'');
      NameCommand.push(item[0].toUpperCase());
    }
  });
  var NameCommandStr = NameCommand.sort().join('');
  return NameCommandStr;

    
};