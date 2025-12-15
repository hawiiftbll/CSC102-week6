function passPhrase()
{
// Get the input value of the text box and set the required passphrase to palindrome
    const inputField = document.getElementById("passPhrase");
    const fieldValue = inputField.value;
    const errorMessage = document.getElementById("results");
    const requiredMatch = "palindrome";
    const imageContainer = document.getElementById("img");
    const newImg = document.createElement("newImg");
    errorMessage.textContent = "";

    if (fieldValue === requiredMatch)
    {
       errorMessage.textContent = "That is Correct" 
        return true;
        
    }
    else
    {
       errorMessage.textContent = "Sorry that isn't correct" 
    }
}