const circle = (radii) => Math.PI*radii*radii;
const rectangle = (length,breadth) => length * breadth;
const cylinder = (radius,height) => ((2*Math.PI*radius*height) + (2*Math.PI*radius*radius));
export{circle,rectangle,cylinder};
