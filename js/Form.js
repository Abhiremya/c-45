class Form {
  constructor() {
    bk1 = loadImage("images/bk.jpg");
    bc1 = loadImage("images/bc.jpg"); 
  }

  display(){
    
    var title = createElement('h2')
    title.html("DoN't HiT!!");
    title.position(150, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);
    image (bk1,200,200,400,400);
    button.mousePressed(function(){
      input.hide();
      button.hide();
      image (bc1,200,200,400,400);
      
      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}
