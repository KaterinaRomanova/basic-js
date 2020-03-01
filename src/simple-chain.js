


const chainMaker = {
  myChain: [],
  getLength() {
    return this.myChain.length;
  },
  addLink(value) {
    if(value === undefined){
      this.myChain.push('(  )'); 
    }else{
      this.myChain.push('( ' + value + ' )');
    }
    return this;
  },
  removeLink(position) {
    if (!(typeof position == 'number' ) || this.myChain.length - 1 < position || position <= 0 ) {
      this.myChain = [];
      throw new Error('Incorrect value');
    }
    this.myChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.myChain.reverse();
    return this;
  },
  finishChain() {
    var end = this.myChain.join('~~');
    this.myChain = [];
    return end;
  }
};

module.exports = chainMaker;

