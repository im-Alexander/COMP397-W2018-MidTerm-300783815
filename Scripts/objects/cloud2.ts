module objects {
    export class Cloud2 extends objects.GameObject {
      // private instance variables
  
      // public properties
  
      // Constructor
      constructor() {
        super("cloud");
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this.Reset();
      }
  
      // updates the game object every frame
      public Update():void {
        this.Move();
        this.CheckBounds();
      }
  
      // reset the objects location to some value
      public Reset():void {
        //this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
        //this.y = -this.height;
        //this._dx = Math.floor((Math.random() * 4) - 2);
        //this._dy = Math.floor((Math.random() * 5) + 5);

        this.x= 960 + this.width;
        this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
        this._dx = Math.floor((Math.random() * 5) - 10);
        this._dy = Math.floor((Math.random() * 3));
      }
  
      // move the object to some new location
      public Move():void {
        this.y += this._dy;
        this.x += this._dx;
      }
  
      // check to see if some boundary has been passed
      public CheckBounds():void {
        // check lower bounds
        if(this.x <= 0 - this.width) {
          this.Reset();
        }
      }
    }
  }
  