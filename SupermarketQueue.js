function queueTime(customers, n) {
   let queue = new Array(n).fill(0);
   customers.forEach(el => {
      let i = queue.indexOf(Math.min(...queue));
      queue[i] += el;
   });
   console.log(Math.max(...queue));
}
 
 queueTime([50,45,1,12,22,44,44,42,19,24,11,25,18,23,38,3,36],3 );