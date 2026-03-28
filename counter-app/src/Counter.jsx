import React,{useState} from 'react'


// main counter component
const Counter = () => {

    // function to determine the color of the count display based on the count value

    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)
     
    const increment = () => {
        if(count - step <=100)
        {
            setCount(count + step)
        }
    }
   

    const decrement = ()=>{
        if(count - step >=-100){
            setCount(count-step);
        }
    }

    const reset = () => setCount(0);

    const getCountColor =()=>{
        if(count>0)
            return "positive";
        if(count<0)
            return "negative"
        return "zero";


    }

    return(
    <><div className='counter-wrapper'>
          <h1 className='app-title'>counter App</h1>
          <p className='app-subtitle'>useState pratice project</p>
      </div>
      
      {/* Count Display */}
      <div className={`count-display ${getCountColor()}`}>
         <span className='count-label'>Current Count</span>
         <span className='count-value'>{count}</span>
         <span className='count-range'>Range:-100 to 100</span>
      </div>
          
          {/* Step Size Selection */}
          <div className="step-section">
             <span className="step-label">Step Size:</span>
            <div className="step-buttons">
               {[1, 5,10].map((s) => (
               <button
                key={s}
                className={`step-btn ${step === s ? "active" : ""}`}
                onClick={() => setStep(s)}>
                    {s}
               </button>
                ))}
          </div>
          </div>

          {/* Action Buttons */}
      <div className="action-buttons">
        <button
          className="btn btn-decrement"
          onClick={decrement}
          disabled={count - step < -100}
        >
          {step}
        </button>

        <button className="btn btn-reset" onClick={reset}>
          Reset
        </button>

        <button
          className="btn btn-increment"
          onClick={increment}
          disabled={count + step > 100}
        >
          + {step}
        </button>
      </div>

            {/* Concepts Learned Section */}
      <div className="concepts-box">
        <p className="concepts-title">Learn useState:</p>
        <ul>
          <li>✅ useState hook</li>
          <li>✅ onClick event handler</li>
          <li>✅ Conditional disable (disabled prop)</li>
          <li>✅ Dynamic className</li>
          <li>✅ Array.map() for rendering</li>
        </ul>
      </div>
    
          </>

  )
}

export default Counter
