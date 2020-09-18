import { expect } from "chai";
import "mocha";
import { Parrot, ParrotTypes } from "../src/parrot";

describe("Parrot", () => {
  it("gets speed of European Parrot", () => {
    const parrot = Parrot.for(ParrotTypes.EUROPEAN, 0, 0, false);

    expect(parrot.getSpeed()).eql(12);
  });

  it("gets speed of African Parrot with one coconut", () => {
    const parrot = Parrot.for(ParrotTypes.AFRICAN, 1, 0, false);

    expect(parrot.getSpeed()).eql(3);
  });

  it("gets speed of African Parrot with two coconuts", () => {
    const parrot = Parrot.for(ParrotTypes.AFRICAN, 2, 0, false);

    expect(parrot.getSpeed()).eql(0);
  });

  it("gets speed of African Parrot with no coconuts", () => {
    const parrot = Parrot.for(ParrotTypes.AFRICAN, 0, 0, false);

    expect(parrot.getSpeed()).eql(12);
  });

  it("gets speed of Norwegian Blue Parrot nailed", () => {
    const parrot = Parrot.for(ParrotTypes.NORWEGIAN_BLUE, 0, 1.5, true);

    expect(parrot.getSpeed()).eql(0);
  });

  it("gets speed of Norwegian Blue Parrot not nailed", () => {
    const parrot = Parrot.for(ParrotTypes.NORWEGIAN_BLUE, 0, 1.5, false);

    expect(parrot.getSpeed()).eql(18);
  });

  it("gets speed of Norwegian Blue Parrot not nailed high voltage", () => {
    const parrot = Parrot.for(ParrotTypes.NORWEGIAN_BLUE, 0, 4, false);

    expect(parrot.getSpeed()).eql(24);
  });
});
