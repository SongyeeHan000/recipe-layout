'use client'

// export default function Contact () {
//   return (
//     <h1>Contact Page </h1>
//   );
// }


import React, { useState } from "react"

export default function Contact() {
  return (
    <div className="contactForm">
        <div className="getInTouch"> 
            <h1>Get in Touch!</h1>
            <p>Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
        </div>
     
        <form>
            <div>
            <label>First Name</label>
            <br></br>
                <input type="text" name="firstName" />
            </div>
            <div>
                <label>Last Name</label>
                <br></br>
                <input type="text" name="lastName" />
            </div>

            <div>
                <label>Email</label>
                <br></br>
                <input type="text" name="email" />
            </div>

            <div>
                <label>Message</label>
                <br></br>
                <textarea name="message"></textarea>
            </div>
            <button type="submit">Send message</button>
        </form>
    </div>
  )
}