/**
 * Write a function named `countByView`
 */
//function has two auguments
function countByView(campgrounds, viewToMatch){
  let count = 0
  //loop through collection of campgrounds
  
  for (let i=0; i<campgrounds.length; i++){
    
    if(campgrounds[i].view === viewToMatch){
      count = count + 1
      
    }
  }
   //return count after the loop
  
  return count  
}

// Do not make changes below this line
module.exports = countByView;
