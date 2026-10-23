// Prices are whole paise (1 rupee = 100 paise), not floating-point rupees.
export const products = Object.freeze([
  Object.freeze({ id: "notebook", name: "Everyday Notebook", pricePaise: 24900,
    description: "A fictional dotted notebook for ideas, sketches, and daily learning.", image: "/notebook.svg" }),
  Object.freeze({ id: "timer", name: "Focus Timer", pricePaise: 69900,
    description: "A fictional desk timer for a small, uninterrupted work session.", image: "/timer.svg" }),
  Object.freeze({ id: "pen", name: "Studio Pen", pricePaise: 14900,
    description: "A fictional refillable pen for your next useful thought.", image: "/pen.svg" }),
]);
