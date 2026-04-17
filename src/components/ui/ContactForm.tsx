"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function ContactForm(){

const [success,setSuccess] = useState(false)
const [loading,setLoading] = useState(false)

const handleSubmit = async(e:any)=>{

e.preventDefault()
setLoading(true)

const formData = new FormData(e.target)

const data={
name:formData.get("name"),
email:formData.get("email"),
message:formData.get("message")
}

await fetch("/api/get-in-touch",{
method:"POST",
body:JSON.stringify(data)
})

setLoading(false)
setSuccess(true)
e.target.reset()

setTimeout(()=>{
setSuccess(false)
},3000)

}

return(

<div className="border border-neutral-800 p-8 rounded-xl backdrop-blur-md bg-neutral-900/40">

<form onSubmit={handleSubmit} className="space-y-4">

<input
name="name"
placeholder="Full Name"
required
className="w-full p-3 bg-black border border-neutral-700 rounded-lg"
/>

<input
name="email"
placeholder="Email"
required
className="w-full p-3 bg-black border border-neutral-700 rounded-lg"
/>

<textarea
name="message"
placeholder="Your Message"
required
className="w-full p-3 bg-black border border-neutral-700 rounded-lg h-32"
/>

<button
className="w-full py-3 rounded-lg bg-white text-black font-medium hover:scale-105 transition"
>

{loading ? "Sending..." : "Send Message"}

</button>

</form>


{success && (

<motion.div
initial={{opacity:0,scale:.8}}
animate={{opacity:1,scale:1}}
className="mt-4 text-green-400"
>

✅ Message sent successfully

</motion.div>

)}

</div>

)

}