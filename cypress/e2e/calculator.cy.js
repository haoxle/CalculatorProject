beforeEach(() => {
  cy.visit("http://127.0.0.1:5500/index.html");
});

describe("ac", () => {
  it("passes", () => {
    cy.get("#gbac").click().should("be.visible");
    cy.get("#gbbb").should("be.visible");
  });
});

describe("screen contains  0", () => {
  it("passes", () => {
    cy.get("#gbac").click();
    cy.get("#gbbb").contains("0");
  });
});

describe("1 + 9", () => {
  it("passes", () => {
    cy.get("#gb1").click();
    cy.get("#gbplus").click();
    cy.get("#gb8").click();
    cy.get("#gbequals").click();
    cy.get("#gbbb").contains("9");
  });
});

describe("1.1 + 9", () => {
  it("passes", () => {
    cy.get("#gb1").click();
    cy.get("#gbdot").click();
    cy.get("#gb1").click();
    cy.get("#gbplus").click();
    cy.get("#gb8").click();
    cy.get("#gbequals").click();
    cy.get("#gbbb").contains("9.1");
  });
});

describe("1.1.1 + 9", () => {
  it("passes", () => {
    cy.get("#gb1").click();
    cy.get("#gbdot").click();
    cy.get("#gb1").click();
    cy.get("#gbdot").click();
    cy.get("#gb1").click();
    cy.get("#gbplus").click();
    cy.get("#gb8").click();
    cy.get("#gbequals").click();
    cy.get("#gbbb").contains("NaN");
  });
});

describe("9 - 5", () => {
  it("passes", () => {
    cy.get("#gb9").click();
    cy.get("#gbm").click();
    cy.get("#gb5").click();
    cy.get("#gbequals").click();
    cy.get("#gbbb").contains("4");
  });
});

describe("9 - 5 x 5", () => {
  it("passes", () => {
    cy.get("#gb9").click();
    cy.get("#gbm").click();
    cy.get("#gb5").click();
    cy.get("#gbx").click();
    cy.get("#gb5").click();
    cy.get("#gbequals").click();
    cy.get("#gbbb").contains("20");
  });
});

describe("9 - 5 x 5 / 100", () => {
  it("passes", () => {
    cy.get("#gb9").click();
    cy.get("#gbm").click();
    cy.get("#gb5").click();
    cy.get("#gbx").click();
    cy.get("#gb5").click();
    cy.get("#gbd").click();
    cy.get("#gb1").click();
    cy.get("#gb0").click();
    cy.get("#gb0").click();
    cy.get("#gbequals").click();
    cy.get("#gbbb").contains("0.2");
  });
});

describe("5 - 9 ", () => {
  it("passes", () => {
    cy.get("#gb5").click();
    cy.get("#gbm").click();
    cy.get("#gb9").click();
    cy.get("#gbequals").click();
    cy.get("#gbbb").contains("-4");
  });
});

describe("5 + 5 + ", () => {
  it("passes", () => {
    cy.get("#gb5").click();
    cy.get("#gbplus").click();
    cy.get("#gb5").click();
    cy.get("#gbplus").click();
    cy.get("#gbbb").contains("10 +");
  });
});

describe("5 + + ", () => {
  it("passes", () => {
    cy.get("#gb5").click();
    cy.get("#gbplus").click();
    cy.get("#gbplus").click();
    cy.get("#gbbb").contains("5 +");
  });
});

describe("5 + / x", () => {
  it("passes", () => {
    cy.get("#gb5").click();
    cy.get("#gbplus").click();
    cy.get("#gbd").click();
    cy.get("#gbx").click();
    cy.get("#gbbb").contains("5 x");
  });
});

describe("5 + 5 == ", () => {
  it("passes", () => {
    cy.get("#gb5").click();
    cy.get("#gbplus").click();
    cy.get("#gb5").click();
    cy.get("#gbequals").click();
    cy.get("#gbequals").click();
    cy.get("#gbbb").contains("0");
  });
});

describe("screen contains  0", () => {
  it("passes", () => {
    cy.get("#gbac").click();
    cy.get("#gb5").click();
    cy.get("#gbac").click();
    cy.get("#gbbb").contains("0");
  });
});

describe("screen contains  0", () => {
  it("passes", () => {
    cy.get("#gb0").click();
    cy.get("#gb0").click();
    cy.get("#gbbb").contains("0");
  });
});
