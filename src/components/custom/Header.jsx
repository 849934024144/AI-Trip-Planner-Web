import React from 'react'
import { Button } from '../ui/button'
import { useState, useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";



function Header() {

  const user=JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);


  useEffect(()=>{
    console.log(user)
    
  },[])

  const login =useGoogleLogin({
    onSuccess:(codeResp)=> {
      const tokenInfo = codeResp;
      GetUserProfile(tokenInfo);
    },
      onError:(error)=>console.log(error)
  })

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp.data);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
        // OnGenerateTrip(); // Update this line to call the correct function
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };

  return (
    <div className=' shadow-sm flex justify-between px-5'>
        <img src='logo1.png' alt='logo' className='w-[130px] h-[100px]' />
    <div>
       {
        user?
        <div className='flex mt-7 align-middle gap-5 items-center'>
           <a href="/create-trip">
          <Button variant="outline" className="rounded-full">+ Create Trip</Button>
          </a>
          <a href="/my-trips">
          <Button variant="outline" className="rounded-full">My Trips</Button>
          </a>
          <Popover>
          <PopoverTrigger>
          <img src={user?.picture} alt=""  className='rounded-full h-[30px] w-[30px]'/>
          </PopoverTrigger>
          <PopoverContent>
            <h2 className='cursor-pointer' onClick={()=>{
              googleLogout();
              localStorage.clear();
             window.location.reload();
            }}>Logout</h2>
          </PopoverContent>
          </Popover>

        </div>
          :
          <Button className=' mt-7 align-middle' onClick={()=>setOpenDialog(true)}>Sign In</Button>
       } 
        
    </div>
    <Dialog open={openDialog} onClick={login} onClose={() => setOpenDialog(false)}>
     
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <img src="logo.svg" alt="" />
            <h2 className='font-bold text-lg mt-7 '>sign in with google</h2>
            <Button 
            
            onClick={login}
            className="w-full mt-5 gap-4 items-center">
              
             <FcGoogle className='h-5 w-5 '/> 
             sign in with google
             
             </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default Header