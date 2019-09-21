function handshake (n){
  if (n == 0){
    return n == 0;
  }
  else{
    return (n-1) + handshake (n-1);
  }
}

console.log(handshake())
