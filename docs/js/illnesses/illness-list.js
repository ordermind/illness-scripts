export default {
    back: await Promise.all([
        "StructuralScoliosis.js",
        "NonStructuralScoliosis.js",
        "Scheuermann.js",
    ].map(filename => import("./back/" + filename).then(module => module.default))),

    hip: await Promise.all([
        "Heupartrose.js",
    ].map(filename => import("./hip/" + filename).then(module => module.default))),

    knee: await Promise.all([
        "OsgoodSchlatter.js",
        "SindingLarsenJohansson.js",
        "TendinopathiePatella.js",
        "TendinopathieQuadriceps.js",
        "FatPadSyndrome.js",
        "IliotibialeBandsyndroom.js",
        "PatellofemoraalChondraaldefect.js",
        "OsteochondritisDissecans.js",
        "PlicaSyndrome.js",
        "Meniscusletsel.js",
        "ReferredPain.js",
        "BursitisPrepatellaris.js",
        "BursitisInfrapatellaris.js",
        "Knieartrose.js",
        "PatellofemoralePijnsyndroom.js",
    ].map(filename => import("./knee/" + filename).then(module => module.default))),
};