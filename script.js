function reverseStr(str){
    var listofchar = str.split('');
    var reverselistofchar = listofchar.reverse();
    var reversedstr = reverselistofchar.join('');
    return reversedstr;
  }
  
  function isPalindrome(str){
    var reverse = reverseStr(str);
    return reverse === str;
  }
  
  function convertdatetostring(date){
    var datestr = {day:'', month:'', year:''};
    if(date.day <10){
      datestr.day = '0'+date.day;
    }
    else{
      datestr.day = date.day.toString();
    }
    if(date.month <10){
      datestr.month = '0'+date.month;
    }
    else{
      datestr.month = date.month.toString();
    }
    datestr.year = date.year.toString();
    return datestr;
  }
  
  function getDateInAllFormats(date){
    var date = convertdatetostring(date);
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  }
  function checkPalindromeForAllDateFormats(date){
    var listOfPalindromes = getDateInAllFormats(date);
  
    var flag = false;
  
    for(var i=0; i < listOfPalindromes.length; i++){
      if(isPalindrome(listOfPalindromes[i])){
        flag = true;
        break;
      }
    }
    
    return flag;
  }
  function isLeapYear(year) {
  
    if (year % 400 === 0)
      return true;
  
    if (year % 100 === 0)
      return false;
  
    if (year % 4 === 0)
      return true;
  
    return false;
  }
  function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (month === 2) {
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;
          month = 3;
        }
      }
      else {
        if (day > 28) {
          day = 1;
          month = 3;
        }
      }
    }
    else {
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
      }
    }
  
    if (month > 12) {
      month = 1;
      year++;
    }
  
    return {
      day: day,
      month: month,
      year: year
    }
  }
  function checkPalindromeForAllDateFormats(date){
    var listOfPalindromes = getDateInAllFormats(date);
  
    var flag = false;
  
    for(var i=0; i < listOfPalindromes.length; i++){
      if(isPalindrome(listOfPalindromes[i])){
        flag = true;
        break;
      }
    }
    
    return flag;
  }
  function getNextPalindromeDate(date) {
  
    var nextDate = getNextDate(date);
    var ctr = 0;
  
    while (1) {
      ctr++;
      // var dateStr = convertdatetostring(nextDate);
      var resultList = checkPalindromeForAllDateFormats(nextDate);
  
      // for (let i = 0; i < resultList.length; i++) {
        if (resultList) {
          break;
        }
      // }
      nextDate = getNextDate(nextDate);
    }
    return [ctr, nextDate];
  }
const birthdate = document.querySelector("#birthdate");
const check = document.querySelector("#check");
const output = document.querySelector("#output");
    
function clickHandler(e) {
    var bdayString = birthdate.value;
    if(bdayString !== ''){
      var listofdate = bdayString.split('-');
      var date = {
        day: Number(listofdate[2]),
        month: Number(listofdate[1]),
        year: Number(listofdate[0])
      };
      var isPalindrome = checkPalindromeForAllDateFormats(date);
      if(isPalindrome){
        output.innerText = 'Yay! Your birthday is palindrome! 😊😊';
      }
      else{
        var [ctr, nextDate] = getNextPalindromeDate(date);
        output.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr} days.☹️`;
      }
    }
  }
  
  check.addEventListener('click', clickHandler);






