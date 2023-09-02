const form=document.getElementById('form');
const username=document.getElementById('name');
const password=document.getElementById('password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    inputValidate();

})

function inputValidate(){
    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();

    if(usernameVal===''){
        setError(username,"Username is required");
    }
    else{
        setSuccess(username);
    }
    if(passwordVal === ''){
        setError(password,"password is required");
    }
    else if(passwordVal.length<8){
        setError(password,"Password must be atleast 8 characters required");
    }
    else{
        setSuccess(password);
    }
}

function setError(element,message){
  const groupElement = element.parentElement;
  const errorElement=groupElement.querySelector('.error');
errorElement.innerHTML = message;
groupElement.classList.add('error')
groupElement.classList.remove('success')

}

function setSuccess(element){
    const groupElement = element.parentElement;
    const errorElement=groupElement.querySelector('.error');
  errorElement.innerHTML = ' ';
  groupElement.classList.add('success')
  groupElement.classList.remove('error')
  
  }
  

