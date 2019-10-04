
//////////////////////////////////////////////
// mpa: Useful javascript functions         //
//////////////////////////////////////////////

mpa = (function () {

    function get (func, fallbackValue) {
        try {
            const value = func();
            return (value === null || value === undefined) ? fallbackValue : value;
        } catch (e) {
            return fallbackValue;
        }
    }

    function logThis () {
        const args = [...arguments];
        console.log("----------------------------------------")
        args.map(arg => console.log(arg));
        console.log("----------------------------------------")
        console.log("")
    }

    function range (n) {
        const arr = [];
        for (let i = 0; i < n; i += 1) {
            arr.push(i);
        }
        return arr;
    }

    return {get, logThis, range}
})();