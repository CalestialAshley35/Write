// localstorage.js

// Save the content of the textareas to local storage
function saveToLocalStorage() {
    localStorage.setItem('htmlCode', document.getElementById('htmlCode').value);
    localStorage.setItem('cssCode', document.getElementById('cssCode').value);
    localStorage.setItem('jsCode', document.getElementById('jsCode').value);
}

// Load the content of the textareas from local storage
function loadFromLocalStorage() {
    if (localStorage.getItem('htmlCode')) {
        document.getElementById('htmlCode').value = localStorage.getItem('htmlCode');
    }
    if (localStorage.getItem('cssCode')) {
        document.getElementById('cssCode').value = localStorage.getItem('cssCode');
    }
    if (localStorage.getItem('jsCode')) {
        document.getElementById('jsCode').value = localStorage.getItem('jsCode');
    }
}

// Add event listeners to save the content when the textareas lose focus
document.getElementById('htmlCode').addEventListener('blur', saveToLocalStorage);
document.getElementById('cssCode').addEventListener('blur', saveToLocalStorage);
document.getElementById('jsCode').addEventListener('blur', saveToLocalStorage);

// Load the content when the page loads
window.onload = loadFromLocalStorage;
