function passPhrase()
{
// Get the input value
    const inputField = document.getElementById("passPhrase");
    const fieldValue = inputField.value;
    const errorMessage = document.getElementById("results");
    const requireMatch = "palindrome";

    errorMessage.textContent = "";

    if (fieldValue === requiredMatch)
    {
        return true;
    }
    else
    {
       errorMessage.textContent = "Sorry that isn't correct" 
    }
}