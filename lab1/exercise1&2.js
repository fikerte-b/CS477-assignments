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
 * it sometimes runs faster than setTimeout because it doesn't check timer
 * If we want to do callbacks after  file I/O, using setImmediate is faster since it is excuted after I/O event in the exsiting cycle
 * But to excute setTimeout in this case, the cycle has to be done and another new cycle has to start.
 * 
 */

/**question2
 * process.nextTick is not a part of the event loop while setImmediate is a part of it.
 * Node processes callbacks in the nextTick queue before processing the event loop callbacks.
 * setImmediate has limited number of callback excutions but nextTick doesn't have a limit
 * setImmediate has one chance of excution in every cycle while nexttick has multiple time since it checks...
 * 
 * 
 */

/**question3
 * setTimeout(), setInterval(), clearTimeout(),console.log(),exports,
 *  module,__dirname, require(), setImmediate(), buffer
 */