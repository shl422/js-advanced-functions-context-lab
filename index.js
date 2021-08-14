/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(array){
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: [],
    }
  }
  
  function createEmployeeRecords(aOfArray){
    // map takes each element (an array) 
    // this anonymous f sends that arg into createEmployeeRecord
    // which turns it into an obj and sends it back
    return aOfArray.map(function(array){
      return createEmployeeRecord(array)
    })
  }
  
  
  function createTimeInEvent(obj, dateStamp){
      // destructuring
      let [date, hour] = dateStamp.split(" ")
    
      // because this is an array...
      obj.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
      })
      return obj
    }
  
  
  function createTimeOutEvent(obj, dateStamp){
        // destructuring
        let [date, hour] = dateStamp.split(" ")
    
        // because this is an array...
        obj.timeOutEvents.push({
          type: "TimeOut",
          hour: parseInt(hour),
          date: date
        })
        return obj
  
  }
  
  function hoursWorkedOnDate(obj, soughtDate){
    // find takes in a function and applies it to the array timeInEvents
    //
    let inEvent = obj.timeInEvents.find(function(e){
      return e.date === soughtDate
    })
    let outEvent = obj.timeOutEvents.find(function(e){
      return e.date === soughtDate
    })
  
    return (outEvent.hour - inEvent.hour)/100
  
  }
  
  function wagesEarnedOnDate(obj, soughtDate){
    let hours = hoursWorkedOnDate(obj, soughtDate)
    return (obj.payPerHour * hours)
  }
  
  function allWagesFor(obj){
    //iterate over dates
    let total = 0
    for (let i = 0; i < obj.timeInEvents.length; i++){
      total += wagesEarnedOnDate(obj, obj.timeInEvents[i].date)
    }
    return total
  
    //use reduce & map
      //   let eligibleDates = employee.timeInEvents.map(function(e){
      //     return e.date
      // })
  
      // let payable = eligibleDates.reduce(function(memo, d){
      //     return memo + wagesEarnedOnDate(employee, d)
      // }, 0)
  
      // return payable
  }
  
  function findEmployeeByFirstName(srcArray, string){
    return srcArray.find(function(record){
      return record.firstName === string
    })
  }
  
  function calculatePayroll(array){
    let array1 = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
    for (let i = 0; i < array.length; i++){
      let wages = allWagesFor(array[i])
      array1.push(wages)
    }
    return array1.reduce(reducer)
}