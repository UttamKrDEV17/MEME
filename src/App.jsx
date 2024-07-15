import Home from './components/Home'
import './App.css'
import { useEffect, useState } from 'react'
function App() {
  const [value,setValue] = useState(0)
  const [dahej,setDahej] = useState(0)
  const [nam,setNam] =useState("")

  const money = value*14

  useEffect(()=>{
    if(nam==""){
      setDahej(0)
    }
    else{
      setDahej(money)
    }
  },[value,nam])

  return (
    <>
      <div className="absolute h-screen w-full bg-pink-50 ">
        <p className='font-medium text-2xl text-bold flex justify-center mt-10 underline decoration-double'>Dahej-O-meter</p>
        <div className='flex flex-col  w-full mt-20 p-5 sm:p-10 gap-12 rounded-md'>
        <Home name="salary" label="Salary" value={value} onChange={(value)=>setValue(value)} type="number"/>
        <Home name="Name" label="Name" value={nam} onChange={(nam)=>setNam(nam)}/>
        </div>
        <div className='mx-auto text-center w-40 bg-pink-500 border-2 border-pink-900 rounded-xl mt-20'>
          <p className='font-semibold text-pink-950 p-1'>Total-Dahej</p>
          <span className='font-light font-semibold text-pink-950'>{dahej}</span>
        </div>
      </div>
    </>
  )
}

export default App
