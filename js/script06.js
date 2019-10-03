// Generate case example:

data = range(1000).map(n => generateObj(n));


function generateObj(n) {
    return {
        id: n,
        issue: "i" + 1000 + n,
        status: "Open",
        description: "This is a test " + Math.log(n),
        cost: `${n%8}`,
        eng: `${n%8}`,
        cad: `${n%8}`,
        tc: `${n%8}`,
        cn: `${n%8}`,
        bom: `${n%8}`,
        q12: `${n%8}`,
        material: `${n%8}`,
        engineering: `${n%8}`,
        studio: `${n%10}`,
        manufacturing: `${n%10}`,
        comments: `${n%10}`
    }
}

sheet01.data = data; 
sheet01.config.data = data;
sheet01.table.replaceData(data);