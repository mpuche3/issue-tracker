/////////////////////////////////////////////////////////////////////////////////
// Assign buttons callback                                   //
/////////////////////////////////////////////////////////////////////////////////
document.querySelector("#export > img").onclick = exportFile;
document.querySelector("#open > img").onclick = openFile;


/////////////////////////////////////////////////////////////////////////////////
// Prevent default behaviour when dropping a file on the window                //
// To investigate: dragenter, drageleave, dragover: might be an overkill       //
/////////////////////////////////////////////////////////////////////////////////
document.querySelector("*").addEventListener("dragenter", e => {
    e.preventDefault();
}, false);
document.querySelector("*").addEventListener("dragleave", e => {
    e.preventDefault();
}, false);
document.querySelector("*").addEventListener("dragover", e => {
    e.preventDefault();
}, false);

/////////////////////////////////////////////////////////////////////////////////
// Open file: Method 1: Drag & and Drop File on window                         //
/////////////////////////////////////////////////////////////////////////////////
document.querySelector("*").addEventListener("drop", e => {
    e.preventDefault();
    let r = new FileReader();
    r.onload = e => {
        const strSheet = e.target.result;
        loadStrSheet (strSheet);
    };
    let f = e.dataTransfer.files[0];
    r.readAsText(f);
}, false);

/////////////////////////////////////////////////////////////////////////////////
// Save File: Method 2: Open File dialog                                       //
/////////////////////////////////////////////////////////////////////////////////
function showFile() {
    const reader = new FileReader()
    reader.onload = event => {
        const strFileContent = event.target.result;
        loadStrSheet (strFileContent);
        document.querySelector("#deleteme").remove();
    };
    const file = document.querySelector("#deleteme").files[0];
    reader.readAsText(file);
}

function openFile() {
    const html = "<input id=\"deleteme\" type=\"file\" style=\"display:none\" onchange=\"showFile()\">";
    document.body.insertAdjacentHTML("beforeend", html);
    document.querySelector("#deleteme").click()
}


/////////////////////////////////////////////////////////////////////////////////
// Download File                                                               //
/////////////////////////////////////////////////////////////////////////////////
function downloadTextFile (str, fileName) {
    var bb = new Blob([str], {type: "text/plain"});
    var a = document.createElement("a");
    a.display = "none";
    a.download = fileName;
    a.href = window.URL.createObjectURL(bb);
    a.textContent = "Download ready";
    a.dataset.downloadurl = ["text/plain", a.download, a.href].join(":");
    a.click();
}

function downloadFile(fileName){
    if (fileName === undefined) fileName = "fileName.json";
    const str = convertSheetToStr(window.sheet01);
    downloadTextFile (str, fileName);
}

function exportFile () {
    downloadFile("issues.xson");
}