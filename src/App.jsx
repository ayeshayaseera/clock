import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours= String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds= String(time.getSeconds()).padStart(2, "0");

  const ampm = time.getHours() >= 12 ? "AM" : "PM";

  const day = time.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const month = time.toLocaleDateString("en-US", {
    month: "long",
  });

  const date = time.getDate();

  const year = time.getFullYear();


  return (
    <>
 <h1> Digital Clock</h1>
 <p>Live time updates using useEffect</p> 
 <div className="App">
      
      <div className="clock">
        <div className="time"> 
          <span id="hours">{hours}</span>:
          <span id="minutes">{minutes}</span>:
          <span id="seconds">{seconds}</span>
          </div>
          <div className="separator">
            <span id="hours1">HOURS</span>
            <span id="minutes1">MINUTES</span>
            <span id="seconds1">SECONDS</span>
          </div>
       
        <div className="date">
        
          <span id="day">📆{day}</span>,
          <span id="month">{month}</span>
          <span id="date-number">{ date}</span>,
          <span id="year">{year}</span>
          <br></br>
          <br></br>
          <span id="ampm">☀︎{ampm}</span>
        </div>
      </div>
    </div>
    
   
  
    </>
  )
}

export default App
