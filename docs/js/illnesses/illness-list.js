export default {
    knee: await Promise.all([
        import("./knee/OsgoodSchlatter.js").then(module => module.default),
        import("./knee/SindingLarsenJohansson.js").then(module => module.default),
        import("./knee/JumpersKnee.js").then(module => module.default),
        import("./knee/TendinopathieQuadriceps.js").then(module => module.default),
        import("./knee/FatPadSyndrome.js").then(module => module.default),
        import("./knee/IliotibialeBandsyndroom.js").then(module => module.default),
        import("./knee/PatellofemoraalChondraaldefect.js").then(module => module.default),
        import("./knee/OsteochondritisDissecans.js").then(module => module.default),
        import("./knee/PlicaSyndrome.js").then(module => module.default),
        import("./knee/Meniscusletsel.js").then(module => module.default),
        import("./knee/ReferredPain.js").then(module => module.default),
        import("./knee/BursitisPrepatellaris.js").then(module => module.default),
        import("./knee/BursitisInfrapatellaris.js").then(module => module.default),
        import("./knee/Knieartrose.js").then(module => module.default),
        import("./knee/PatellofemoralePijnsyndroom.js").then(module => module.default),
    ])
};