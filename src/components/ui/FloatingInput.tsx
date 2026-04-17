"use client"

export default function FloatingInput({label,...props}:any){

return(

<div className="relative">

<input
placeholder=" "
className="
peer w-full
p-3
bg-black
border border-neutral-700
rounded-lg
focus:outline-none
focus:border-purple-500
"
/>

<label
className="
absolute left-3
top-3
text-neutral-400
text-sm
transition
peer-placeholder-shown:top-3
peer-placeholder-shown:text-sm
peer-focus:-top-2
peer-focus:text-xs
peer-focus:text-purple-400
bg-black px-1
"
>

{label}

</label>

</div>

)

}