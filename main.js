// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//factory function for one specimen
const pAequorFactory = (number, dnaArray) => {
  return{
    specimenNum: number,
    dna: dnaArray,
    mutate(){
      let newRandBase = returnRandBase();
      if(newRandBase === this.dna[0]){
        newRandBase = returnRandBase()
      }
      this.dna[0] = newRandBase;
      return this.dna;
    },
    compareDNA(pAequor){
      //6.25% it for one element in the same place
      let coincidence = 0;
      for(let i = 0; i <= this.dna.length -1; i++){
        if(this.dna[i] === pAequor[i]){
          coincidence += 6.25;
        }
      }
      return `specimen #1 and specimen #2 have ${coincidence}% DNA in common`;
    },
    willLikelySurvive(){
      let percetaje = 0;
      const dnaArray = this.dna;
      dnaArray.forEach(element => {
        if(element === 'C' || element === 'G'){
          percetaje += 6.25;
        }
      });
      if(percetaje >= 60){
        return true;
      }
      else{
        return false;
      }
    }
  }
};

//30 instances of pAequor that can survive
let survivors = [];
let iterator = 1;

while(iterator <= 30){
  let newSpecimen = pAequorFactory(iterator, mockUpStrand());
  if(newSpecimen.willLikelySurvive() === true){
      survivors.push(newSpecimen);
      iterator ++;
  }
}

console.log(survivors);

// console.log(test);
// console.log(test.willLikelySurvive());

