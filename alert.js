// alert('im comming')

const teacher = () => {
    alert('teacher is coming')
}
const father = () => { 
  const response =  confirm('father is coming')
    console.log(response);
}

const tour = () => {
   const response = confirm('Are you going to tour?') 
   if (response === true) {
       alert('Please pay your tour fee.')
       
   }else{
       console.log('go to hell');
   }
}
const askQuestion = () => {
    const name = prompt('What is your name?');
    if (name) {

        console.log(name);
        
    }
}