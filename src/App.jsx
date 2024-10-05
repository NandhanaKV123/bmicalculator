import './App.css'
import React, { useState } from 'react';



function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const cancel = () => {
    setWeight('')
    setHeight('')
    setBmi(null)
    setMessage('')
  }
  const calculateBmi = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);
      let bmiMessage = '';

      if (calculatedBmi < 18.5) {
        bmiMessage = 'Underweight';
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        bmiMessage = 'Normal weight';
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        bmiMessage = 'Overweight';
      } else {
        bmiMessage = 'Obesity';
      }
      setMessage(bmiMessage);
    } else {
      alert('Please enter valid height and weight');
    }






  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 mt-5'>
            <div className='border border rounded'>
              <h2 className='p-2 text-center'>Calculate Your BMI</h2>
             <div className='row w-100'>
                <div className='col-md-6'>
  
                  <img className='ms-5' src="https://cdn-icons-png.flaticon.com/512/10476/10476452.png" alt="" width={'200px'}/>
  
                </div>
  
  
                <div className=' col-md-6 mt-md-5 mt-3 d-inline justify-content-center align-items-center'>
                  {/* <label className='ms-2' htmlFor="">Gender : </label>
            <input name='gnd' className='ms-2' type="radio" />MALE 
    
            <input name= className='ms-3' type="radio" />FEMALE <br /> */}
  
                  <label className='ms-2' for="">Gender :</label>
                  <input className='ms-2' type="radio" name="gnd" />
                  <label className='' for="">MALE</label>
                  <input className='ms-2' type="radio" name="gnd" /><label for="">FEMALE</label>
  
                </div>
  
             </div>




              <div className='mt-2 pb-3'>
                <label className='ms-2' htmlFor="">Enter your weight in Kg : </label>
                <input className='border rounded ms-2' type="text" value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />  <br /> <br />

                <label className='ms-2' htmlFor="">Enter your height in cm : </label>
                <input className='border rounded ms-2 mb-4' type="text" value={height}
                  onChange={(e) => setHeight(e.target.value)} />   <br />


                <button onClick={calculateBmi} type="button" class="btn btn-outline-primary ms-5 pb-2" fdprocessedid="tt4qxr">CALCULATE</button>
                <button type="button" onClick={cancel} class="btn btn-outline-info ms-3" fdprocessedid="xf7es">CANCEL</button>


              </div>




              {bmi && (
                <div>
                  <h2 className='text-center'>Your BMI is : <span className='text-danger'>{bmi}</span></h2>
                  <h3 className='text-center text-warning'>{message}</h3>
                </div>
              )}
            </div>


          </div>
          <div className='col-md-3'></div>

        </div>

      </div>




    </>
  );
}

export default App;
