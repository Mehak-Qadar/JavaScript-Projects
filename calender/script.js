const date=document.querySelector('h1')
const day=document.querySelector('p')
const monthoftheyear = document.querySelector('.month-of-the-year')
const year=document.querySelector('.year')
const dateobj=new Date()
console.log(dateobj);

const daysofweek=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const dayofweek=daysofweek[dateobj.getDay()-1]

const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const month=months[dateobj.getMonth()]

date.innerText = dateobj.getDate()
day.innerText = dayofweek
monthoftheyear.innerText = month
year.innerText=dateobj.getFullYear()

