
/////////////////////////////////////////////////////////////////////////////////
// App main logic file                                                         //
/////////////////////////////////////////////////////////////////////////////////

// Create initial sheet
sheet01 = createInitSheet("sheet01");



function createInitSheet(htmlContainerId) {
    const data = [
        {}
    ]

    const config = {
        height: 205,
        data: data,
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
                editor:"input",
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
                editor:"input",
            },
            {
                title: "CAD",
                field: "cad",
                width: 120,
                editor:"input",
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
                title: "Manufacturing",
                field: "manufacturing",
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
        cellClick:function(e, cell){
            const verbose = sheet.state.verbose
            const data = cell.getData();
            const field = cell.getField();
            const value = cell.getValue();
            // cell.setValue(">>> " + value);
            if (99 < verbose) mpa.logThis("data, field, value", data, field, value);
        },
    }

    const state = {
        verbose: 100,
    }

    const html = document.querySelector("#" + htmlContainerId);

    const table = new Tabulator("#" + html.id, config);

    const sheet = {data, config, state, html, table}

    return sheet;
}

function convertSheetToStr (sheet) {
    const data = sheet.data;
    const config = sheet.config;
    const state = sheet.state;
    const objFile = {data, config, state};
    const strFile = JSON.stringify(objFile);
    return strFile;
}

function loadStrSheet (strSheet, htmlContainerId) {
    if (htmlContainerId === undefined) htmlContainerId = "sheet01";
    const obj = JSON.parse(strSheet);
    const data = obj.data;
    const config = obj.config;
    const state = obj.state;
    const html = document.querySelector("#" + htmlContainerId);
    const table = new Tabulator("#" + htmlContainerId, config);
    const sheet = {data, config, state, html, table}
    return sheet;
}