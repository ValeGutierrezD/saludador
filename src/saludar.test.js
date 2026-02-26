import saludar from "./saludar.js";

describe("Saludador", () => {
  it("deberia saludar a una persona", () => {
    expect(saludar("Juan")).toEqual("Hola, Juan");
  });

  it("deberia saludar a otra persona", () => {
    expect(saludar("Maria")).toEqual("Hola, Maria");
  });
});


