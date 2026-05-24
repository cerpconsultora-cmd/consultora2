"use client"

import {useState} from "react"

export default function ContactForm(){

const[sent,setSent]=useState(false)

async function enviar(
e:any
){

e.preventDefault()

const form=new FormData(
e.target
)

await fetch(
"/api/contact",
{
method:"POST",

body:JSON.stringify({

nombre:form.get(
"nombre"
),

telefono:form.get(
"telefono"
)

})

}
)

setSent(true)

}

return(

<section className="py-20 px-6">

<form
onSubmit={enviar}
className="max-w-xl mx-auto grid gap-4"
>

<input
name="nombre"
placeholder="Nombre"
className="border p-4"
/>

<input
name="telefono"
placeholder="WhatsApp"
className="border p-4"
/>

<button
className="bg-cyan-500 text-white p-4"
>

Enviar

</button>

{sent&&(
<p>

Consulta enviada

</p>
)}

</form>

</section>

)

}
