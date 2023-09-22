abstract class Figure {
  constructor(
    public readonly name: string,
    public readonly color: string
  ) {};

  public abstract calculateArea(): number;
}

class Circle extends Figure {
  constructor(name: string, color: string, private radius: number) {
    super(name, color);
  }

  public calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Figure {
  private length: number;
  private width: number;

  constructor(name: string, color: string, length: number, width: number) {
    super(name, color);
    this.length = length;
    this.width = width;
  }

  public calculateArea(): number {
    return this.length * this.width;
  }

  public print(): void {
    console.log('Area = length * width');
  }
}

class Square extends Figure {  
  constructor(name: string, color: string, private side: number) {
    super(name, color);
  }

  public calculateArea(): number {
    return this.side * this.side;
  }

  public print(): void {
    console.log('Area = side * side');
  }
}

class Triangle extends Figure {
  constructor(name: string, color: string, private side: number, private height: number) {
    super(name, color);  
  }

  public calculateArea(): number {
    return (this.side * this.height) / 2;
  }
}
