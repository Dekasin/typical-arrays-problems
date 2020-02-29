
exports.min = function min (array) {
  
    let m;
 if (Array.isArray(array) && array.length > 0){
    console.log ("yes" );

   for (let i = 0; i<array.length; i++) {
 
     if (Number.isInteger(array[i])){
       m = array[i];
      break;
      }
   }   
     if (m == undefined) { 
      m = 0;   
     }else{
         
       for (let i = 0; i<array.length; i++){
        
      if (Number.isInteger(array[i]) && array[i] < m) {
        m = array[i];
        }
      }
 
   } 

 }else{
  m = 0; 
 }
  return m;
}

exports.max = function max (array) {
  let m;
  if (Array.isArray(array) && array.length > 0){
     console.log ("yes" );
 
    for (let i = 0; i<array.length; i++) {
  
      if (Number.isInteger(array[i])){
        m = array[i];
       break;
       }
    }   
      if (m == undefined) { 
       m = 0;   
      }else{
          
        for (let i = 0; i<array.length; i++){
         
       if (Number.isInteger(array[i]) && array[i] > m) {
         m = array[i];
         }
       }
  
    } 

  }else{
   m = 0; 
  }
   return m;
}

exports.avg = function avg (array) {
  return 0;
}
