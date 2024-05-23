export const checkvalidateData =(Email,password)=>{
    const isEmailValid =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)
    // console.log(Email)
    // console.log(isEmailValid)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!isEmailValid) return "Email Id is not Valid"
    if(!isPasswordValid) return "Password is not valid"

    return null 
}
