interface IParrot {
  getSpeed: () => number;
}

export enum ParrotTypes {
  EUROPEAN,
  AFRICAN,
  NORWEGIAN_BLUE,
}

export class Parrot {
  static for(
    parrotType: ParrotTypes,
    numberOfCoconuts: number,
    voltage: number,
    isNailed: boolean
  ) {
    let parrotClasses = {
      [ParrotTypes.EUROPEAN]: EuropeanParrot,
      [ParrotTypes.AFRICAN]: AfricanParrot,
      [ParrotTypes.NORWEGIAN_BLUE]: NorwegianParrot,
    };

    return new parrotClasses[parrotType](numberOfCoconuts, voltage, isNailed);
  }
}

class ParrotBase {
  constructor(
    protected numberOfCoconuts: number,
    protected voltage: number,
    protected isNailed: boolean
  ) {}

  protected getBaseSpeed() {
    return 12;
  }

  protected getLoadFactor() {
    return 9;
  }
}

class EuropeanParrot extends ParrotBase implements IParrot {
  getSpeed() {
    return this.getBaseSpeed();
  }
}

class AfricanParrot extends ParrotBase implements IParrot {
  getSpeed() {
    return Math.max(
      0,
      this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts
    );
  }
}

class NorwegianParrot extends ParrotBase implements IParrot {
  getSpeed() {
    return this.isNailed ? 0 : this.getBaseSpeedWithVoltage();
  }

  private getBaseSpeedWithVoltage() {
    return Math.min(24, this.voltage * this.getBaseSpeed());
  }
}
