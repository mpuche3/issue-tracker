
//////////////////////////////////////////////
// mpa: USEFUL GENERIC javascript functions //
//////////////////////////////////////////////

mpa = (function () {
    
    // GET SAFE. 
    // AVOID ERRORS WHEN LOOKING IN DEEP NEXTED CHAINED OBJECTS
    // Use case: get(_ => a.b.c.d.e.f)
    // >>> IF a, b, c, d, e objects exist, it returns value for attribute f.
    // >>> OTHERWISE it returns undefined (fallbackValue if provided)
    function get (func, fallbackValue) {
        try {
            const value = func();
            return (value === null || value === undefined) ? fallbackValue : value;
        } catch (e) {
            return fallbackValue;
        }
    }

    // Log to browser console several variable in a single line of code.
    function logThis () {
        const args = [...arguments];
        console.log("----------------------------------------")
        args.map(arg => console.log(arg));
        console.log("----------------------------------------")
        console.log("")
    }

    // Get array of ascending number
    // Useful to be used with map.
    // Use case: range(100).map(i => doSomething(i))
    // Use case: arr = range(100).map(i => returnSomething(i))
    function range (n) {
        const arr = [];
        for (let i = 0; i < n; i += 1) {
            arr.push(i);
        }
        return arr;
    }

    // Make this functions available to other functions in the app
    return {get, logThis, range}
})();