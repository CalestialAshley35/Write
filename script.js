function runCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = "<style>" + document.getElementById("cssCode").value + "</style>";
    const jsCode = "<script>" + document.getElementById("jsCode").value + "<\/script>";
    const output = document.getElementById("output").contentWindow.document;
    output.open();
    output.write(htmlCode + cssCode + jsCode);
    output.close();
}
