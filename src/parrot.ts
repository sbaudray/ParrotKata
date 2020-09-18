interface IParrot {
  getSpeed: (coconuts: number) => number;
}

export enum ParrotTypes {
  EUROPEAN,
  AFRICAN,
  NORWEGIAN_BLUE,
}

export class Parrot {
  constructor(
    private parrotType: ParrotTypes,
    private numberOfCoconuts: number,
    private voltage: number,
    private isNailed: boolean
  ) {}

  public getSpeed(): number {
    switch (this.parrotType) {
      case ParrotTypes.EUROPEAN:
        return new EuropeanParrot().getSpeed(this.numberOfCoconuts);
      case ParrotTypes.AFRICAN:
        return new AfricanParrot().getSpeed(this.numberOfCoconuts);
      case ParrotTypes.NORWEGIAN_BLUE:
        return this.isNailed ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }
  }

  private getBaseSpeed(): number {
    return 12;
  }

  private getLoadFactor(): number {
    return 9;
  }

  private getBaseSpeedWithVoltage(voltage: number): number {
    return Math.min(24, voltage * this.getBaseSpeed());
  }
}

class EuropeanParrot implements IParrot {
  getSpeed(coconuts: number) {
    return 12;
  }
}

class AfricanParrot implements IParrot {
  getSpeed(coconuts: number) {
    return Math.max(0, 12 - 9 * coconuts);
  }
}
