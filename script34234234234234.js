function validateForm() {  
    const username = document.getElementById('username').value;  
    const password = document.getElementById('password').value;  
    const errorMessage = document.getElementById('errorMessage');  

    if (username === '' || password === '') {  
        errorMessage.textContent = 'Username and password cannot be empty.';  
        errorMessage.style.display = 'block';  
        return false  
    }  


    errorMessage.style.display = 'none';   
    return true;
}