export class Game {
  scoreValue: number = 0;
  rolls: number[] = [21];
  currentRoll: number = 0;

  //SONO RIMASTO AL MINUTO 18
  constructor() {
    
  }

  public roll(pins: number) {
    this.rolls[this.currentRoll++] = pins;
  }
  
  public score() {
    let i=0;
    for(let frame=0; frame < 10; frame++) {
      if (this.rolls[i] + this.rolls[i+1] === 10) {
        this.scoreValue += 10 + this.rolls[i+2];
        i+=2;
      } else {
        this.scoreValue += this.rolls[i] + this.rolls[i+1];
        i+=2;
      }
    }
    return this.scoreValue;
  }

}