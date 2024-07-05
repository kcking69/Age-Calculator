const dateInput = document.getElementById('date-input')
const calculateBtn = document.getElementById('calculate-btn')
const ageMessage = document.getElementById('display-age')
const myYears = document.getElementById('years')
const myMonths = document.getElementById('months')
const myDays = document.getElementById('days')
const currentDate = new Date().getTime()

calculateBtn.addEventListener('click',()=>{
    const dateOfBirth = new Date(dateInput.value).getTime()
    const dateDifference = currentDate - dateOfBirth
    const remainingDays = dateDifference % (365*24*60*60*1000)
    console.log(remainingDays)

    myYears.innerHTML = Math.floor(dateDifference / (365*24*60*60*1000)) 
    myMonths.innerHTML = Math.floor( remainingDays / (30*24*60*60*1000))
    myDays.innerHTML = Math.floor( (remainingDays % (30*24*60*60*1000)) / (24*60*60*1000))
})



















































