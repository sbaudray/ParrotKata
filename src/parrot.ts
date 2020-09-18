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
  protected readonly baseSpeed = 12;
  protected readonly loadFactor = 9;

  constructor(
    protected readonly numberOfCoconuts: number,
    protected readonly voltage: number,
    protected readonly isNailed: boolean
  ) {}
}

class EuropeanParrot extends ParrotBase implements IParrot {
  getSpeed() {
    return this.baseSpeed;
  }
}

class AfricanParrot extends ParrotBase implements IParrot {
  getSpeed() {
    return Math.max(
      0,
      this.baseSpeed - this.loadFactor * this.numberOfCoconuts
    );
  }
}

class NorwegianParrot extends ParrotBase implements IParrot {
  getSpeed() {
    return this.isNailed ? 0 : this.baseSpeedWithVoltage;
  }

  private get baseSpeedWithVoltage() {
    return Math.min(24, this.voltage * this.baseSpeed);
  }
}
