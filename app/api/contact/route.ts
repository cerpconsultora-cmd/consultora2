export async function POST(
req:Request
){

const body=
await req.json()

if(
process.env.ANTIGRAVITI_WEBHOOK
){

await fetch(

process.env
.ANTIGRAVITI_WEBHOOK,

{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify(
body
)

}

)

}

return Response.json({
ok:true
})

}
