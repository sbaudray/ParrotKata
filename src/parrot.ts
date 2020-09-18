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

  private get parrotClasses() {
    return {
      [ParrotTypes.EUROPEAN]: EuropeanParrot,
      [ParrotTypes.AFRICAN]: AfricanParrot,
      [ParrotTypes.NORWEGIAN_BLUE]: NorwegianParrot,
    };
  }

  public getSpeed(): number {
    return new this.parrotClasses[this.parrotType](
      this.parrotType,
      this.numberOfCoconuts,
      this.voltage,
      this.isNailed
    ).getSpeed();
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
    return this.isNailed ? 0 : this.getBaseSpeedWithVoltage();
  }

  private getBaseSpeedWithVoltage() {
    return Math.min(24, this.voltage * this.getBaseSpeed());
  }
}
