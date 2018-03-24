module scenes {
    export class Level2Scene extends objects.Scene {
      // Private Instance Variables
      private _ocean: objects.Ocean2;
      private _plane2: objects.Plane2;
      private _island2: objects.Island2;
      private _clouds: objects.Cloud2[];
      private _cloudNum: number;
      private _scoreBoard: managers.ScoreBoard;
  
      private _engineSound: createjs.AbstractSoundInstance;
      private _coin: objects.Coin2;
  
      // Public Properties
  
      // Constructor
      constructor() {
        super();
  
        this.Start();
      }
  
      // Private Mathods
  
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
        this._ocean = new objects.Ocean2();
        this._plane2 = new objects.Plane2();
        managers.Game.plane2 = this._plane2;
  
        this._coin = new objects.Coin2();
        this._island2 = new objects.Island2();
  
        // instantiate the cloud array
        this._clouds = new Array<objects.Cloud2>();
        this._cloudNum = 2;
        // loop and add each cloud to the array
        for (let count = 0; count < this._cloudNum; count++) {
          this._clouds[count] = new objects.Cloud2();
        }
  
        this._engineSound = createjs.Sound.play("engine");
        this._engineSound.loop = -1; // play forever
        this._engineSound.volume = 0.3;
  
        // create the scoreboard UI for the Scene
        this._scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = this._scoreBoard;

        this._scoreBoard.Score = managers.Game.score;
        this._scoreBoard.Lives = managers.Game.lives;
  
        this.Main();
      }
  
      // triggered every frame
      public Update(): void {
        this._ocean.Update();
        this._plane2.Update();
  
        this._coin.x = this._island2.x;
        this._coin.y = this._island2.y;
        this._coin.Update();
  
        this._island2.Update();
  
        // check collision between plane and coin
        managers.Collision.Check(this._plane2, this._coin);
  
        this._clouds.forEach(cloud => {
          cloud.Update();
          // check collision between plane and current cloud
          managers.Collision.Check(this._plane2, cloud);
        });
  
        // if lives fall below zero switch scenes to the game over scene
        if(this._scoreBoard.Lives <= 0) {
          this._engineSound.stop();
          managers.Game.currentScene = config.Scene.OVER;
        }
  
      }
  
      // This is where the fun happens
      public Main(): void {
        // add the ocean to the scene
        this.addChild(this._ocean);
  
        // add the island to the scene
        this.addChild(this._island2);
  
        // add the coin to the scene
        this.addChild(this._coin);
  
        // add the plane to the scene
        this.addChild(this._plane2);
        this.addChild(this._plane2.planeFlash); // add the plane flashing effect
  
        // add clouds to the scene
  
        this._clouds.forEach(cloud => {
          this.addChild(cloud);
        });
  
        // add scoreboard labels to the scene
        this.addChild(this._scoreBoard.LivesLabel);
        this.addChild(this._scoreBoard.ScoreLabel);
      }
    }
  }
  