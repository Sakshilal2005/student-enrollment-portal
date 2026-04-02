import React, {useState} from "react";
function RegistrationForm(){
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [course,setCourse] = useState("")
const handleSubmit = async (e) =>{
e.preventDefault()
const response = await fetch("http://127.0.0.1:5000/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name,email,course})
})
const data = await response.json()
alert(data.message)
}
return(
<div className="form-section">
<h2>Student Registration</h2>
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Enter Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>
<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>
<select
value={course}
onChange={(e)=>setCourse(e.target.value)}
required
>
<option value="">Select Course</option>
<option value="BTech">B.Tech</option>
<option value="BCA">BCA</option>
<option value="BBA">BBA</option>
</select>
<button type="submit">Register</button>
</form>
</div>
)
}
export default RegistrationForm;