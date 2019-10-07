/////////////////////////////////////////////////////////////////////////////////
// App helper functions here:                                                  //
// Also.. Reading this file is the best way to understand how the app works    //
/////////////////////////////////////////////////////////////////////////////////

function updateForm(data) {
    Object.keys(data).map(key => {
        document.querySelector("#" + key).value = data[key];
    })
}
