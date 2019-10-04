/////////////////////////////////////////////////////////////////////////////////
// Provide export/import file functionality                                    //
/////////////////////////////////////////////////////////////////////////////////
const cssExportBttnSelector = "#export > img";
const cssImportBttnSelector = "#open > img";
const defaultFileName = "data.json";

// Load the data from a str to the app
// Input: <str> app data from file
// Output: None
// Side Effect: Load str input to app
const loadStrToAppData = loadStrSheet;

// Save the data from the app to a str
// Input: None
// Ouput: <str> app data
// Side Effect: None
const saveAppDatatoStr = _ => convertSheetToStr(window.sheet01);            


/////////////////////////////////////////////////////////////////////////////////
// Assign buttons callback                                                     //
/////////////////////////////////////////////////////////////////////////////////
document.querySelector(cssExportBttnSelector).onclick = downloadFile;
document.querySelector(cssImportBttnSelector).onclick = openFile;

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
        loadStrToAppData (strSheet);
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
        loadStrToAppData (strFileContent);
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
    const blob = new Blob([str], {type: "text/plain"});
    var a = document.createElement("a");
    a.display = "none";
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    a.textContent = "Download ready";
    a.dataset.downloadurl = ["text/plain", a.download, a.href].join(":");
    a.remove();
    a.click();
}

function downloadFile() {
    const fileName = defaultFileName;
    const str = saveAppDatatoStr();
    downloadTextFile (str, fileName);
}