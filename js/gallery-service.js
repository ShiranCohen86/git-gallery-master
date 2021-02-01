var gIdx = -1;
var gProjs = [
    {
        id: ++gIdx,
        name: "Mine Sweeper",
        title: "Try not to get exploited",
        desc: "lorem ipsum lorem ",
        url: "https://shirancohen86.github.io/Sprint-1-20-27/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },
    {
        id: ++gIdx,
        name: "Sokoban",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },
    {
        id: ++gIdx,
        name: "Sokoban",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    }
]

function getProjects() {
    return gProjs;
}

function getProjById(projIdx) {
    var proj = gProjs.find(function (proj) {
        return (proj.id === projIdx)
    })
    
    return proj
}