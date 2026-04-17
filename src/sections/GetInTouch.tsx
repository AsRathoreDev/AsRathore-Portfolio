"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Copy, Check } from "lucide-react"
import { ContactForm } from "@/components/ui/ContactForm"

export default function GetInTouch(){

const [copied,setCopied]=useState("")

const copyText=(text:string,type:string)=>{

navigator.clipboard.writeText(text)

setCopied(type)

setTimeout(()=>{

setCopied("")

},2000)

}

return(

<section className="relative w-full py-28  text-white overflow-hidden" id="get-in-touch">

{/* background glow */}

<div className="absolute inset-0 flex justify-center pointer-events-none">

<div className="w-[500px] h-[500px] rounded-full"/>

</div>


<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 px-6">

{/* LEFT SIDE */}

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:.7}}
className="space-y-8"
>

<h1 className="text-4xl md:text-5xl font-bold">

<motion.span

animate={{y:[0,-6,0]}}

transition={{
duration:3,
repeat:Infinity,
ease:"easeInOut"
}}

className="
bg-gradient-to-r
from-yellow-400
to-purple-400
bg-clip-text
text-transparent
"

>

Get In Touch

</motion.span>

</h1>

<p className="text-gray-400 text-lg leading-relaxed">

I am currently open to new opportunities and collaborations.
Whether you have a question, want to work together or just want to say hi,
feel free to reach out.

</p>


{/* EMAIL */}

<motion.div
whileHover={{scale:1.04}}
className="
flex items-center
justify-between
border border-neutral-800
p-4
rounded-xl
cursor-pointer
bg-neutral-900/40
backdrop-blur
"
onClick={()=>copyText("adityakumar1142007@gmail.com","email")}
>

<div className="flex items-center gap-3">

<Mail size={20}/>

<span className="text-sm">

adityakumar1142007@gmail.com

</span>

</div>

{copied==="email"
?<Check className="text-green-400"/>
:<Copy/>
}

</motion.div>


{/* PHONE */}

<motion.div
whileHover={{scale:1.04}}
className="
flex items-center
justify-between
border border-neutral-800
p-4
rounded-xl
cursor-pointer
bg-neutral-900/40
backdrop-blur
"
onClick={()=>copyText("+919771387427","phone")}
>

<div className="flex items-center gap-3">

<Phone size={20}/>

<span className="text-sm">

+91 97713 87427

</span>

</div>

{copied==="phone"
?<Check className="text-green-400"/>
:<Copy/>
}

</motion.div>


{/* MAP */}

<motion.div
whileHover={{scale:1.02}}
className="
border border-neutral-800
rounded-xl
overflow-hidden
"
>

<iframe
src="https://maps.google.com/maps?q=india&t=&z=4&ie=UTF8&iwloc=&output=embed"
className="w-full h-[260px]"
/>

</motion.div>

</motion.div>


{/* RIGHT SIDE CONTACT FORM */}

<motion.div
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:.7}}
>

<ContactForm/>

</motion.div>

</div>

</section>

)

}