class HoneyMakerBee extends Bee {
  constructor () {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeypot = 0;
  }

  makeHoney() {
    this.honeypot++;
  }

  giveHoney() {
    this.honeypot--;
  }
};
