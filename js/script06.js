//////////////////////////////////////////////
// Generate sample                          //
//////////////////////////////////////////////

data = mpa.range(1000).map(n => generateObj(n));


function generateObj(n) {
    return {
        id: n,
        ecr: "ECR" + Math.floor(Math.random() * (99999 - 11111) + 11111),
        status: chooseRamdonly("Open", "Open", "Open", "Open", "Closed", "Closed", "Deleted"),
        description: generateRandomSentence(),
        cost: chooseRamdonly("Completed", "Completed", "Completed", "N/A", "WIP - 60%", "WIP - 40%", "Rejected"),
        eng: chooseRamdonly("Completed", "Completed", "Completed", "N/A", "WIP - 60%", "WIP - 40%", "Rejected"),
        cad: chooseRamdonly("Completed", "Completed", "Completed", "N/A", "WIP - 60%", "WIP - 40%", "Rejected"),
        tc: chooseRamdonly("Completed", "Completed", "Completed", "N/A", "WIP - 60%", "WIP - 40%", "Rejected"),
        cn: chooseRamdonly("Completed", "Completed", "Completed", "N/A", "WIP - 60%", "WIP - 40%", "Rejected"),
        bom: chooseRamdonly("Completed", "Completed", "Completed", "N/A", "WIP - 60%", "WIP - 40%", "Rejected"),
        q12: chooseRamdonly("Completed", "Completed", "Completed", "Completed", "WIP - 80%", "WIP - 20%", "WIP - 60%", "WIP - 40%", "Rejected"),
        material: chooseRamdonly("Approved", "Approved", "Approved", "N/A", "WIP", "WIP", "Rejected"),
        engineering: chooseRamdonly("Approved", "Approved", "Approved", "N/A", "WIP", "WIP", "Rejected"),
        finance: chooseRamdonly("Approved", "Approved", "Approved", "N/A", "WIP", "WIP", "Rejected"),
        studio: chooseRamdonly("Approved", "Approved", "Approved", "N/A", "WIP", "WIP", "Rejected"),
        manufacturing: chooseRamdonly("Approved", "Approved", "Approved", "N/A", "WIP", "WIP", "Rejected"),
        comments: generateRandomSentence(),
    }
}

sheet01.data = data;
sheet01.config.data = data;
sheet01.table.replaceData(data);

function chooseRamdonly() {
    const args = [...arguments];
    const n = args.length;
    const i = Math.floor(Math.random() * n);
    const arg = args[i];
    return arg;
}

function generateRandomSentence() {
    const nouns = ["part", "component", "assembly", "production", "issue", "fix", "engine", "solution", "engineering", "action"];
    const verbs = ["fix", "break", "repair", "broke", "sliced", "rolled", "exploded", "repaired", "complain", "rattle"];
    const adjectives = ["consistent", "noisy", "broken", "repaired", "fixed", "replaced", "vibrating", "noisy", "broken", "noisy", "broken", ];
    const adverbs = ["slowly", "elegantly", "precisely", "quickly", "rapidly", "quickly", "rapidly", "quickly", "rapidly", "quickly", "rapidly"];
    const preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards", "across", "towards"];

    const rand1 = Math.floor(Math.random() * 10);
    const rand2 = Math.floor(Math.random() * 10);
    const rand3 = Math.floor(Math.random() * 10);
    const rand4 = Math.floor(Math.random() * 10);
    const rand5 = Math.floor(Math.random() * 10);
    const rand6 = Math.floor(Math.random() * 10);
    const content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";
    return content;

}