import React from 'react';
import LeftSidebar from '../Leftpannel/leftbar';
import FadeIn from 'react-fade-in';

export default function ResetPassword(){
    return(
        <>
        <div className='reset-pass'>
           <LeftSidebar/>
         
        <div className="body" style={{padding:"100px 0 120px"}}>
        <FadeIn>
        <div class="wrapper">
         <div class="title">
            Reset Password
         </div>
         <p className='description'>Hey, Enter your email address to reset your password.</p>

         <form action="#">
            <div class="field">
               <input type="text"  required/>
               <label>Current Password</label>
            </div>
          
            <div class="field">
               <input type="text" required/>
               <label>New Password</label>
            </div>
         
            <div class="field">
               <input type="text" required/>
               <label>Re-enter New Password</label>
            </div>

            <div class="field" style={{marginTop:"50px"}}>
               <input type="submit" value="Submit" />
            </div>

        
         </form>
      </div>
        </FadeIn>
        </div>
        </div>
        
        </>
    )
}