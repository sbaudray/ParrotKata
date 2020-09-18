interface IParrot {
  getSpeed: () => number;
}

export enum ParrotTypes {
  EUROPEAN,
  AFRICAN,
  NORWEGIAN_BLUE,
}

export class Parrot implements IParrot {
  constructor(
    private parrotType: ParrotTypes,
    protected numberOfCoconuts: number,
    protected voltage: number,
    protected isNailed: boolean
  ) {}

  public getSpeed(): number {
    switch (this.parrotType) {
      case ParrotTypes.EUROPEAN:
        return new EuropeanParrot(
          this.parrotType,
          this.numberOfCoconuts,
          this.voltage,
          this.isNailed
        ).getSpeed();
      case ParrotTypes.AFRICAN:
        return new AfricanParrot(
          this.parrotType,
          this.numberOfCoconuts,
          this.voltage,
          this.isNailed
        ).getSpeed();
      case ParrotTypes.NORWEGIAN_BLUE:
        return new NorwegianParrot(
          this.parrotType,
          this.numberOfCoconuts,
          this.voltage,
          this.isNailed
        ).getSpeed();
    }
  }

  protected getBaseSpeed() {
    return 12;
  }

  protected getLoadFactor() {
    return 9;
  }
}

class EuropeanParrot extends Parrot implements IParrot {
  getSpeed() {
    return this.getBaseSpeed();
  }
}

class AfricanParrot extends Parrot implements IParrot {
  getSpeed() {
    return Math.max(
      0,
      this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts
    );
  }
}

class NorwegianParrot extends Parrot implements IParrot {
  getSpeed() {
    return this.isNailed ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
  }

  private getBaseSpeedWithVoltage(voltage: number) {
    return Math.min(24, voltage * this.getBaseSpeed());
  }
}
