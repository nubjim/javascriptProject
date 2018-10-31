function flipFunc()
{
  var coin = Math.floor((Math.random() * 2) + 1);
  if(coin == 1)
  {
    document.getElementById("result").innerHTML = "Heads!";
  }
  if(coin == 2)
  {
    document.getElementById("result").innerHTML = "Tails!";
  }
}