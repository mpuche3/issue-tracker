
/////////////////////////////////////////////////////////////////////////////////
// App main logic file                                                         //
/////////////////////////////////////////////////////////////////////////////////

// Create initial sheet
sheet01 = createEmptyTable("sheet01");

function createEmptyTable(htmlContainerId) {

    const config = {
        height: 205,
        data: [],
        //layout: "fitColumns",
        columns: [{
                title: "ECR",
                field: "ecr",
                align: "center",
                width: 90,
            },
            {
                title: "Status",
                field: "status",
                align: "center",
                width: 90,
                editor:"select", 
                editorParams:{
                    values:{
                        "Open": "Open",
                        "Closed": "Closed",
                        "Deleted": "Deleted",
                    }
                }
            },
            {
                title: "Description",
                field: "description",
                sorter: "date",
                width: 250,
                editor:"input",
            },
            {
                title: "COST",
                field: "cost",
                width: 120,
                editor:"input",
            },
            {
                title: "ENG",
                field: "eng",
                width: 120,
                editor:"select", 
                editorParams:{
                    values:{
                        "N/A": "N/A",
                        "Pending": "Pending",
                        "WIP - 10%": "WIP - 10%",
                        "WIP - 10%": "WIP - 10%",
                        "WIP - 10%": "WIP - 10%",
                        "WIP - 10%": "WIP - 10%",
                        "Completed": "Completed", 
                    }
                }
            },
            {
                title: "12 Q's",
                field: "q12",
                width: 120,
                editor:"input",
            },
            {
                title: "BOM",
                field: "bom",
                width: 120,
                editor:"input",
            },
            {
                title: "Material",
                field: "material",
                width: 120,
                editor:"input",
            },
            {
                title: "Engineering",
                field: "engineering",
                width: 120,
                editor:"input",
            },
            {
                title: "Studio",
                field: "studio",
                width: 120,
                editor:"input",
            },
            {
                title: "Manuf.",
                field: "manufacturing",
                width: 120,
                editor:"input",
            },
            {
                title: "Finance",
                field: "finance",
                width: 120,
                editor:"input",
            },
            {
                title: "Comments",
                field: "comments",
                width: 420,
                editor:"input",
            },

        ],
        cellClick: function(e, cell) {
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

    const sheet = {config, state, html, table}

    return sheet;
}

function convertSheetToStr (sheet) {
    const config = sheet.config;
    const state = sheet.state;
    const objFile = {config, state};
    const strFile = mpa.JSON_stringify(objFile);
    return strFile;
}

function loadStrSheet (strSheet, htmlContainerId) {
    if (htmlContainerId === undefined) htmlContainerId = "sheet01";
    const obj = mpa.JSON_parse(strSheet);
    const config = obj.config;
    const state = obj.state;
    const html = document.querySelector("#" + htmlContainerId);
    const table = new Tabulator("#" + htmlContainerId, config);
    const sheet = {config, state, html, table}
    return sheet;
}