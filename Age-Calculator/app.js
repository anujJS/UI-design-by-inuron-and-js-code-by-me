document.addEventListener("input", (e) => {
  
  let enteredDate = new Date( document.querySelector("#dob").value)
    

  let inputDate = {
    year: enteredDate.getFullYear(),
    month: enteredDate.getMonth(),
    day: enteredDate.getDay()
  }

  let date = new Date()
  let d2 = date.getDate()
  let m2 = date.getMonth()
  let y2 = date.getFullYear()
  let month= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30,31]

  if(inputDate.day > d2){
    d2 = d2 +month[m2 - 1]
    m2 = m2 -1
  }
  if (inputDate.month > m2){
    m2 = m2 + 12
    y2 = y2 -1
  }

  let d = d2 - inputDate.day
  let m = m2 - inputDate.month
  let y = y2 - inputDate.year

  let year = (document.querySelector("#years").innerHTML= y)
  let months = (document.querySelector("#months").innerHTML= m)
  let day = (document.querySelector("#days").innerHTML= d)
 })