import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { WidthNormal } from '@mui/icons-material';
import { width } from '@mui/system';


const Signup = () => {
  return(
    <div className='bg-black h-screen w-full flex justify-center items-center'>
      <div className='h-[600px] w-[800px] bg-white flex justify-center'>
        <div className='h-full w-3/5 bg-gray-400'></div>
        <div className='h-full w-2/5 bg-white'>
        <img
                    class="mx-auto w-48"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo"
                  />
          <form>
          <div class="mb-6">
            <input type="text" class="form-control block w-700 rounded-lg px-4 py-2 mx-5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <input type="text" class="form-control block w-700 rounded-lg px-4 py-2 mx-5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-6">
            <input type="text" class="form-control block w-700 rounded-lg px-4 py-2 mx-5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2"
              placeholder="Email Address"
            />
          </div>
          <div class="mb-6">
            <input
              type="password"
              class="form-control block w-450 rounded-lg px-4 py-2 mx-5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Password"
            />
          </div>
          <div class="flex items-center justify-center">
          <div class="flex items-center justify-center">
  <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
    <input type="text"
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" />
    <label for="floatingInput" class="text-gray-700">Select a date</label>
    <button class="datepicker-toggle-button" data-mdb-toggle="datepicker">
      <i class="fas fa-calendar datepicker-toggle-icon"></i>
    </button>
  </div>
</div>
</div>
          <div class="text-center lg:text-center mb-4">
          <button class="w-700 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-sky-500/100 rounded-lg focus:shadow-outline hover:bg-sky-500/100">Proceed</button>
          </div>
         

          </form>
        </div>
      </div>
    </div>
  )
}
export default Signup