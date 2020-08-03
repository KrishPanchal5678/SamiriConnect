function ES()
{
  background("red");
  textStyle(BOLD);
  textSize(25);
  textFont("Castellar");
  text("EMERGENCY SERVICES");

  /*<li>*/Police = createButton("Police/Cop       🚓");/*</li>*/
  Police.position(100, 300);
  /*<li>*/Ambulance = createButton("Ambulance     🚑");/*</li>*/
  Ambulance.position(100, 400);
  /*<li>*/Fire = createButton("Fire Truck         🚒");/*</li>*/
  Fire.position(100, 500);
  /*<li>*/Tow = createButton("Tow Truck");/*</li>*/
  Tow.position(100, 600);
  /*<li>*/Covid = createButton("Covid - 19 Helpline      🦠🦠");/*</li>*/
  Covid.position(100, 700);
}