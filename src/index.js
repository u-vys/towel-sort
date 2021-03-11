
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

   if (matrix != undefined) for (let i = 0; i < matrix.length; i++)  {
   if (i % 2 === 0) matrix[i].forEach(Element => {result.push(Element)
   }
       )
   else matrix[i].reverse().forEach(Element => {result.push(Element)
  }
  )
}
  
  return result;
}
