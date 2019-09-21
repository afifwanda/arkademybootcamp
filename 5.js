
function buyNoodle(a,b){
  var c = b / 2500;
  if(a % 2 !== 0 && c % 3 == 0){
    return ( b / 2500 ) + (c / 3);
    }

  else if(a % 2 == 0 && c % 4 == 0){
    return ( b / 2500 ) + (c / 4);
    }

  else {
    return ( b / 2500 );
  }

}
console.log(buyNoodle(20 , 30000));

