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

function createEmployeeRecord (array){
  let employee = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return employee
}

function createEmployeeRecords (employees){
  return employees.map(x => createEmployeeRecord(x))
}

function createTimeInEvent (timeStamp){
  let [date, hour] = timeStamp.split(` `)
  let timeInEvent = {type: "TimeIn", hour: parseInt(hour, 10), date: date}
  this.timeInEvents.push(timeInEvent)
  return this
}

function createTimeOutEvent (timeStamp){
  let [date, hour] = timeStamp.split(` `)
  let timeOutEvent = {type: "TimeOut", hour: parseInt(hour, 10), date: date}
  this.timeOutEvents.push(timeOutEvent)
  return this
}

function hoursWorkedOnDate(date){
  let dateTimeIn = this.timeInEvents.find(x => x.date == date)
  let dateTimeOut = this.timeOutEvents.find(x => x.date == date)
  return (dateTimeOut.hour - dateTimeIn.hour)/100
}

function wagesEarnedOnDate(date){
  return hoursWorkedOnDate.call(this, date)*this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName){
  return srcArray.find(x => x.firstName == firstName)
}

function calculatePayroll(srcArray){
  let allWagesEarned = srcArray.map(x => allWagesFor.call(x))
  return allWagesEarned.reduce((previousValue, currentValue) => previousValue + currentValue);
}
