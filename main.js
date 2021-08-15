const elt = document.getElementById("calculator");
const calculator = Desmos.GraphingCalculator(elt);

calculator.setExpression({ id: "graph1", latex: "y=x^2" });
