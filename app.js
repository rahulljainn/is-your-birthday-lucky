const dateofbirth = document.querySelector("#dateOfBirth");
const luckynumber = document.querySelector("#luckyNumber");
const checknumberbutton = document.querySelector("#checkNumber");
const resultbox= document.querySelector("#resultbox")

    function compareValues(sum,luckynumber){
        if(sum%luckynumber===0){
            resultbox.innerText=("BINGO!! you are lucky😍");
         }  else 
         { resultbox.innerText=("SORRY you are unlucky😒");}
         
        }
        
    


function confirmbirthdaylucky(){
    if (dateofbirth.value !=="" && luckynumber.value >0){
        const dob = dateofbirth.value;
    
    const sum = calculatesum(dob);
   
    compareValues(sum,luckynumber.value)

    
    }else{
        alert("Please Enter valid information")
    }
    

}
function calculatesum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum=sum+ Number(dob.charAt(i));
    }
    return sum;
}
    checknumberbutton.addEventListener("click",confirmbirthdaylucky)