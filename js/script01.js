/////////////////////////////////////////////////////////////////////////////////
// App main logic file                                                         //
/////////////////////////////////////////////////////////////////////////////////

// Create initial sheet
sheet01 = createEmptyTable("sheet01");

function createEmptyTable(htmlContainerId) {

    const editorParams_progress = {
        values: {
            "N/A": "N/A",
            "Pending": "Pending",
            "WIP - 20%": "WIP - 20%",
            "WIP - 40%": "WIP - 40%",
            "WIP - 60%": "WIP - 60%",
            "WIP - 80%": "WIP - 80%",
            "Completed": "Completed",
        }
    }

    const editorParams_approval = {
        values: {
            "N/A": "N/A",
            "Pending": "Pending",
            "Rejected": "Rejected",
            "Approved": "Approved",
        }
    }

    const config = {
        height: 205,
        data: [],
        //layout: "fitColumns",
        columns: [{
                title: "ECR",
                field: "ecr",
                align: "center",
                formatter:function(cell){return "<img src='svg/chip.svg' style='height:10px;max-width: 10px'></img>" + " " + cell.getValue().replace("_", "")},
                width: 100,
            },
            {
                title: "Status",
                field: "status",
                align: "center",
                width: 90,
                editor: "select",
                editorParams: {
                    values: {
                        "Open": "Open",
                        "Closed": "Closed",
                        "Deleted": "Deleted",
                    }
                },
            },
            {
                title: "Description",
                field: "description",
                sorter: "date",
                width: 250,
                editor: "input",
            },
            {
                title: "COST",
                field: "cost",
                width: 120,
                editor: "select",
                editorParams: editorParams_progress,
            },
            {
                title: "ENG",
                field: "eng",
                width: 120,
                editor: "select",
                editorParams: editorParams_progress,
            },
            {
                title: "12 Q's",
                field: "q12",
                width: 120,
                editor: "select",
                editorParams: editorParams_progress,
            },
            {
                title: "BOM",
                field: "bom",
                width: 120,
                editor: "select",
                editorParams: editorParams_progress,
            },
            {
                title: "Material",
                field: "material",
                width: 120,
                editor: "select",
                editorParams: editorParams_approval,
            },
            {
                title: "Engineering",
                field: "engineering",
                width: 120,
                editor: "select",
                editorParams: editorParams_approval,
            },
            {
                title: "Studio",
                field: "studio",
                width: 120,
                editor: "select",
                editorParams: editorParams_approval,
            },
            {
                title: "Manuf.",
                field: "manufacturing",
                width: 120,
                editor: "select",
                editorParams: editorParams_approval,
            },
            {
                title: "Finance",
                field: "finance",
                width: 120,
                editor: "select",
                editorParams: editorParams_approval,
            },
            {
                title: "Comments",
                field: "comments",
                width: 420,
                editor: "input",
            },
        ],
        cellClick: function (e, cell) {
            // funny thing!
            // When map.JSON_parse(mpa.JSON_stringigy(obj)), the function looks access to its outerfunction.
            // TODO: find a permanent solution for this
            const verbose = mpa.get(_ => sheet.state.verbose, 100);
            const data = cell.getData();
            const field = cell.getField();
            const value = cell.getValue();
            // cell.setValue(">>> " + value);
            if (99 < verbose) mpa.logThis("cell, data, field, value", cell, data, field, value);
        },

    }

    const state = {
        verbose: 100,
    }

    const html = document.querySelector("#" + htmlContainerId);

    const table = new Tabulator("#" + html.id, config);

    const sheet = {
        config,
        state,
        html,
        table
    }

    return sheet;
}

function convertSheetToStr(sheet) {
    const config = sheet.config;
    const state = sheet.state;
    const objFile = {
        config,
        state
    };
    const strFile = mpa.JSON_stringify(objFile);
    return strFile;
}

function loadStrSheet(strSheet, htmlContainerId) {
    if (htmlContainerId === undefined) htmlContainerId = "sheet01";
    const obj = mpa.JSON_parse(strSheet);
    const config = obj.config;
    const state = obj.state;
    const html = document.querySelector("#" + htmlContainerId);
    const table = new Tabulator("#" + htmlContainerId, config);
    const sheet = {
        config,
        state,
        html,
        table
    }
    return sheet;
}

function dateEditor(cell, onRendered, success, cancel, editorParams) {
    //cell - the cell component for the editable cell
    //onRendered - function to call when the editor has been rendered
    //success - function to call to pass the successfuly updated value to Tabulator
    //cancel - function to call to abort the edit and return to a normal cell
    //editorParams - params object passed into the editorParams column definition property

    //create and style editor
    var editor = document.createElement("div");

    const subDiv = document.createElement("div");
    subDiv.style.width = "100%";
    subDiv.style.height = "300px";
    subDiv.style.backgroundColor = "green";
    editor.appendChild(subDiv);

    //create and style input
    editor.style.padding = "3px";
    editor.style.width = "100%";
    editor.style.boxSizing = "border-box";

    //Set value of editor to the current value of the cell
    editor.value = "hola" //moment(cell.getValue(), "DD/MM/YYYY").format("YYYY-MM-DD")

    //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
    onRendered(function () {
        editor.focus();
        editor.style.css = "100%";
    });

    //when the value has been set, trigger the cell to update
    function successFunc() {
        success(moment(editor.value, "YYYY-MM-DD").format("DD/MM/YYYY"));
    }

    editor.addEventListener("change", successFunc);
    editor.addEventListener("blur", successFunc);

    //return the editor element
    return editor;
};