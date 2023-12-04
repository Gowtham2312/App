import React from 'react'
import { useForm } from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import {yupresolver} from '@hookform/resolvers'
import { string } from 'yup';
export default function Form() {

  let form = useForm({
    defaultValues:{
      channel:"soso channel"
    },
    mode: 'onBlur'  
  }); 

  let { register,control, handleSubmit, formState, }= form;

  let {errors, isSubmitted, submitCount} = formState

  const onSubmit = (data)=>{
    console.log("Form submitted",data)
    console.log({isSubmitted},{submitCount})
  }

  let schema = {
    username: string()
  }
  // let onerror = (errors)=>{
  //   console.log(errors)
  // } 
  
  /*{let watchName = watch("username")
  console.log('watchName',watchName)*/
  
  return (
    <div className='form-box'>
        <h2>{}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className='form-control'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' name='username' {...register('username',{required:"Username is required"})} />
            <p>{errors.username?.message}</p>
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' placeholder={errors.email?.message} {...register('email',{required:"Email is required"})} />
            </div>

          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' {...register('password',{required:"Password is required"})} />
            <p>{errors.password?.message}</p>
            </div>

          <div className='form-control'>
            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' name='channel' {...register('channel',{required:"Channel-name is required"})} />
            <p>{errors.channel?.message}</p>
          </div>

          <button type='submit'>Submit</button>
          <button type='reset'>Reset</button>

        </form>

        <DevTool control={control} />

    </div>
  )
}