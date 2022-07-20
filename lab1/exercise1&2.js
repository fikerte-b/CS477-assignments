//  exercise1

const arr = function(){};
arr.prototype.even = function(){
   let result = this.filter(num=> num%2===0)
   return result;
}

arr.prototype.odd = function(){
    let result = this.filter(num=>num%2 !==0)
    return result;
}


//exercise2
/** question1
 * setTimeout schedules a callback to run after a delayed time and
 * it is excuted in the timers phase of the event loop
 *  setImmediate runs at the check phase of the event loop and 
 * it sometimes it runs faster than setTimeout because it doesn't check timer
 */

/**question2
 * process.nextTick is not a part of the event loop while setrImmediate is a part of it.
 * Node processes callbacks in the nextTick queue before processing the event loop callbacks.
 * 
 */

/**question3
 * setTimeout(), setInterval(), clearTimeout(),console.log(),exports,
 *  module,__dirname, require(), setImmediate()
 */