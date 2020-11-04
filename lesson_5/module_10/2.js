// What does the following code log to the console?
// ORIGINAL: NaN, NaN

let RECTANGLE = {
  area() {
    return this.width * this.height;
  },

  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area;
  this.perimeter = RECTANGLE.perimeter;
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area()); // 6
console.log(rect1.perimeter()); // 10

// EXPLANATION
// Lines 17 and 18 assigned the return value of executing
// the RECTANGLE.area and RECTANGLE.perimeter functions. The
// execution happens at the global level, so undefined *
// undefined and undefined + undefined both result in NaN.
// To fix it, the area and perimeter properties for the 
// Rectangle constructor need to be assigned to the area and
// perimeter properties in the RECTANGLE object.
