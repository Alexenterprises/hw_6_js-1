function drawTriangle (symbol,height){
 if (height>3) {
  for (i=1;i<=height;++i){
   console.log (symbol.repeat(i));
  }
 } else {
  for (i=1;i<=3;++i){
   console.log (symbol.repeat(i));
  }
 }
}


drawTriangle('#',10);
