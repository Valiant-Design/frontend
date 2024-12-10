import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, SetEmail] = useState('')
  const [passowrd, SetPassword] = useState('')
  const [name, SetName] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    
  }

  return (
    <form className='min-h-[80vh] flex items-cneter'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "Sign Up" : "Log in"} to book appointment</p>
        {
          state === "Sign Up" && <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e)=> SetName(e.target.name)} type="text" value={name} required/>
        </div>
        }
        
        <div className='w-full'>
          <p className='border border-zinc-300 rounded w-full p-2 mt-1' >Email</p>
          <input onChange={(e)=> SetName(e.target.name)} type="text" value={email} required/>
        </div>
        <div className='w-full'>
          <p className='border border-zinc-300 rounded w-full p-2 mt-1'>Password</p>
          <input onChange={(e)=> SetName(e.target.name)} type="password" value={passowrd} required/>
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-bae'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === 'Sign Up'
          ? <p> Already hav an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
          : <p>Create and new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login