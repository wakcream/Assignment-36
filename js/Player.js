class Player {
  constructor() {
    this.index = null
    this.distance = 0
    this.name = null



  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", function (data) {
      playerCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name: this.name,
    distance: this.distance
    });
  }
  static playerInfo(){
    var playerinfo = database.ref('players');
    playerinfo.on("value", (data)=>{
      allplayers = data.val();
    })
    
    }
}


