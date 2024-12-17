const questions = [
    {
        question: "Quel est le principal objectif de l'économie selon le cours ?",
        choices: ["1. Cr\u00e9er des besoins inutiles", "2. Produire des ressources pour satisfaire des besoins", "3. Accro\u00eetre le capital uniquement", "4. Limiter les \u00e9changes entre pays", ""],
        correct: 1,
        chapter: "1",
        part: "I"
    },
    {
        question: "Quelles sont les deux formes de financement externe ?",
        choices: ["1. Financement priv\u00e9 et public", "2. Financement direct et indirect", "3. Financement local et international", "4. Financement personnel et solidaire", ""],
        correct: 1,
        chapter: "1",
        part: "III"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises ?",
        choices: ["1. Les entreprises collaborent pour innover", "2. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "3. Les entreprises travaillent pour l'\u00c9tat", "4. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", ""],
        correct: 1,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Quels sont les deux types de flux économiques ?",
        choices: ["1. Flux internes et externes", "2. Flux commerciaux et technologiques", "3. Flux mon\u00e9taires et flux r\u00e9els", "4. Flux juridiques et manag\u00e9riaux", ""],
        correct: 2,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quelle est la définition d’un monopole ?",
        choices: ["1. Un march\u00e9 avec plusieurs offreurs et demandeurs", "2. Un march\u00e9 avec un seul offreur face \u00e0 plusieurs demandeurs", "3. Un march\u00e9 totalement libre sans r\u00e9gulation", "4. Un march\u00e9 contr\u00f4l\u00e9 par plusieurs entreprises", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quels sont les effets d’une asymétrie d’information ?",
        choices: ["1. Am\u00e9lioration de la concurrence", "2. Baisse des prix de mani\u00e8re syst\u00e9matique", "3. Influence sur la concurrence et d\u00e9savantage pour un agent", "4. Obligation d\u2019\u00e9change \u00e9quitable", ""],
        correct: 2,
        chapter: "2",
        part: "III A"
    },
    {
        question: "Qu'est-ce qu'une externalité positive ?",
        choices: ["1. Un gain pour l'agent impact\u00e9 sans compensation", "2. Un co\u00fbt pour l'agent \u00e9conomique", "3. Une taxe impos\u00e9e par l'\u00c9tat", "4. Un effet n\u00e9gatif sur le march\u00e9", ""],
        correct: 0,
        chapter: "2",
        part: "III C"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Qu'est-ce qu'une externalité positive ?",
        choices: ["1. Un gain pour l'agent impact\u00e9 sans compensation", "2. Un co\u00fbt pour l'agent \u00e9conomique", "3. Une taxe impos\u00e9e par l'\u00c9tat", "4. Un effet n\u00e9gatif sur le march\u00e9", ""],
        correct: 0,
        chapter: "2",
        part: "III C"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises ?",
        choices: ["1. Les entreprises collaborent pour innover", "2. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "3. Les entreprises travaillent pour l'\u00c9tat", "4. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", ""],
        correct: 1,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises ?",
        choices: ["1. Les entreprises collaborent pour innover", "2. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "3. Les entreprises travaillent pour l'\u00c9tat", "4. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", ""],
        correct: 1,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises ?",
        choices: ["1. Les entreprises collaborent pour innover", "2. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "3. Les entreprises travaillent pour l'\u00c9tat", "4. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", ""],
        correct: 1,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Quels sont les deux types de flux économiques ?",
        choices: ["1. Flux internes et externes", "2. Flux commerciaux et technologiques", "3. Flux mon\u00e9taires et flux r\u00e9els", "4. Flux juridiques et manag\u00e9riaux", ""],
        correct: 2,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises ?",
        choices: ["1. Les entreprises collaborent pour innover", "2. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "3. Les entreprises travaillent pour l'\u00c9tat", "4. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", ""],
        correct: 1,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises ?",
        choices: ["1. Les entreprises collaborent pour innover", "2. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "3. Les entreprises travaillent pour l'\u00c9tat", "4. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", ""],
        correct: 1,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce qu'une externalité positive ?",
        choices: ["1. Un gain pour l'agent impact\u00e9 sans compensation", "2. Un co\u00fbt pour l'agent \u00e9conomique", "3. Une taxe impos\u00e9e par l'\u00c9tat", "4. Un effet n\u00e9gatif sur le march\u00e9", ""],
        correct: 0,
        chapter: "2",
        part: "III C"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce qu'une externalité positive ?",
        choices: ["1. Un gain pour l'agent impact\u00e9 sans compensation", "2. Un co\u00fbt pour l'agent \u00e9conomique", "3. Une taxe impos\u00e9e par l'\u00c9tat", "4. Un effet n\u00e9gatif sur le march\u00e9", ""],
        correct: 0,
        chapter: "2",
        part: "III C"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quel est le principal objectif de l'économie selon le cours ?",
        choices: ["1. Cr\u00e9er des besoins inutiles", "2. Produire des ressources pour satisfaire des besoins", "3. Accro\u00eetre le capital uniquement", "4. Limiter les \u00e9changes entre pays", ""],
        correct: 1,
        chapter: "1",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quel est le principal objectif de l'économie selon le cours ?",
        choices: ["1. Cr\u00e9er des besoins inutiles", "2. Produire des ressources pour satisfaire des besoins", "3. Accro\u00eetre le capital uniquement", "4. Limiter les \u00e9changes entre pays", ""],
        correct: 1,
        chapter: "1",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quel est le principal objectif de l'économie selon le cours ?",
        choices: ["1. Cr\u00e9er des besoins inutiles", "2. Produire des ressources pour satisfaire des besoins", "3. Accro\u00eetre le capital uniquement", "4. Limiter les \u00e9changes entre pays", ""],
        correct: 1,
        chapter: "1",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les deux formes de financement externe ?",
        choices: ["1. Financement priv\u00e9 et public", "2. Financement direct et indirect", "3. Financement local et international", "4. Financement personnel et solidaire", ""],
        correct: 1,
        chapter: "1",
        part: "III"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quels sont les deux types de flux économiques ?",
        choices: ["1. Flux internes et externes", "2. Flux commerciaux et technologiques", "3. Flux mon\u00e9taires et flux r\u00e9els", "4. Flux juridiques et manag\u00e9riaux", ""],
        correct: 2,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises ?",
        choices: ["1. Les entreprises collaborent pour innover", "2. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "3. Les entreprises travaillent pour l'\u00c9tat", "4. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", ""],
        correct: 1,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle ?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quels sont les deux types de flux économiques ?",
        choices: ["1. Flux internes et externes", "2. Flux commerciaux et technologiques", "3. Flux mon\u00e9taires et flux r\u00e9els", "4. Flux juridiques et manag\u00e9riaux", ""],
        correct: 2,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite ?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les deux formes de financement externe ?",
        choices: ["1. Financement priv\u00e9 et public", "2. Financement direct et indirect", "3. Financement local et international", "4. Financement personnel et solidaire", ""],
        correct: 1,
        chapter: "1",
        part: "III"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises ?",
        choices: ["1. Les entreprises collaborent pour innover", "2. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "3. Les entreprises travaillent pour l'\u00c9tat", "4. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", ""],
        correct: 1,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole ?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelle est la définition de la logique entrepreneuriale ?",
        choices: ["1. La gestion des ressources pour p\u00e9renniser l'entreprise", "2. La d\u00e9marche visant \u00e0 cr\u00e9er et d\u00e9velopper une nouvelle activit\u00e9", "3. La r\u00e9duction des co\u00fbts pour maximiser les b\u00e9n\u00e9fices", "4. L'ex\u00e9cution syst\u00e9matique des objectifs fix\u00e9s", ""],
        correct: 1,
        chapter: "5",
        part: "I A"
    },
    {
        question: "Selon Schumpeter, quel est le rôle principal de l'entrepreneur ?",
        choices: ["1. Cr\u00e9er des emplois uniquement", "2. Investir pour favoriser des innovations et transformations \u00e9conomiques", "3. Maximiser les profits \u00e0 court terme", "4. Standardiser les processus de production", ""],
        correct: 1,
        chapter: "5",
        part: "I A"
    },
    {
        question: "Quelles sont les quatre principales finalités d'une entreprise ?",
        choices: ["1. \u00c9conomique, sociale, soci\u00e9tale, environnementale", "2. Financi\u00e8re, administrative, sociale, contractuelle", "3. \u00c9conomique, juridique, technique, commerciale", "4. Sociale, manag\u00e9riale, technique, environnementale", ""],
        correct: 0,
        chapter: "5",
        part: "I B"
    },
    {
        question: "Qu'est-ce que la responsabilité sociétale des entreprises (RSE) ?",
        choices: ["1. L'obligation de maximiser les b\u00e9n\u00e9fices pour les actionnaires", "2. L'int\u00e9gration des pr\u00e9occupations sociales et environnementales dans les activit\u00e9s", "3. Une d\u00e9marche pour r\u00e9duire les co\u00fbts internes uniquement", "4. L'application stricte des lois fiscales", ""],
        correct: 1,
        chapter: "5",
        part: "I B"
    },
    {
        question: "Quelles sont les cinq fonctions du management ?",
        choices: ["1. Planifier, organiser, diriger, coordonner, contr\u00f4ler", "2. Fixer des objectifs, d\u00e9finir des moyens, g\u00e9rer, contr\u00f4ler, corriger", "3. Recruter, planifier, \u00e9valuer, contr\u00f4ler, produire", "4. Diriger, \u00e9valuer, financer, innover, vendre", ""],
        correct: 1,
        chapter: "5",
        part: "II A"
    },
    {
        question: "Qu'est-ce qu'une partie prenante dans la gestion d'une entreprise ?",
        choices: ["1. Une personne ou groupe affect\u00e9 par les d\u00e9cisions de l'entreprise", "2. Un dirigeant charg\u00e9 d'\u00e9laborer la strat\u00e9gie de l'entreprise", "3. Un client ayant sign\u00e9 un contrat exclusif avec l'entreprise", "4. Un actionnaire unique ayant un droit de d\u00e9cision", ""],
        correct: 0,
        chapter: "5",
        part: "II B"
    },
    {
        question: "Quel est l'objectif principal de la démarche RSE ?",
        choices: ["1. Cr\u00e9er de la valeur uniquement pour les actionnaires", "2. Am\u00e9liorer le bien-\u00eatre des employ\u00e9s", "3. Concilier performance \u00e9conomique et responsabilit\u00e9 soci\u00e9tale", "4. Limiter les pertes financi\u00e8res de l'entreprise", ""],
        correct: 2,
        chapter: "5",
        part: "I B"
    },
    {
        question: "Quelle est la première finalité d'une entreprise selon Peter Drucker ?",
        choices: ["1. Assurer la p\u00e9rennit\u00e9 financi\u00e8re", "2. Cr\u00e9er de la valeur pour les actionnaires", "3. D\u00e9velopper une client\u00e8le", "4. Optimiser les processus de production", ""],
        correct: 2,
        chapter: "5",
        part: "I B"
    },
    {
        question: "Quels sont les deux types de flux économiques?",
        choices: ["1. Flux internes et externes", "2. Flux mon\u00e9taires et flux r\u00e9els", "3. Flux juridiques et manag\u00e9riaux", "4. Flux commerciaux et technologiques", ""],
        correct: 1,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Libre n\u00e9gociation des prix uniquement", "4. Innovation totale et absence de concurrence", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Amorce de baisse des prix et ententes possibles", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Prix fixes et absence d\u2019innovation", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quels sont les deux types de flux économiques?",
        choices: ["1. Flux internes et externes", "2. Flux mon\u00e9taires et flux r\u00e9els", "3. Flux commerciaux et technologiques", "4. Flux juridiques et manag\u00e9riaux", ""],
        correct: 1,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Amorce de baisse des prix et ententes possibles", "2. Prix totalement libre sans r\u00e9gulation", "3. Baisse des prix et concurrence exacerb\u00e9e", "4. Prix fixes et absence d\u2019innovation", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Amorce de baisse des prix et ententes possibles", "2. Prix fixes et absence d\u2019innovation", "3. Prix totalement libre sans r\u00e9gulation", "4. Baisse des prix et concurrence exacerb\u00e9e", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Un contrat \u00e0 titre gratuit", "2. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "3. Un accord librement n\u00e9goci\u00e9", "4. Une clause autorisant l'innovation", ""],
        correct: 1,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Baisse des prix et concurrence exacerb\u00e9e", "2. Amorce de baisse des prix et ententes possibles", "3. Prix fixes et absence d\u2019innovation", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix totalement libre sans r\u00e9gulation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix fixes et absence d\u2019innovation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Amorce de baisse des prix et ententes possibles", "2. Prix fixes et absence d\u2019innovation", "3. Baisse des prix et concurrence exacerb\u00e9e", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Un accord librement n\u00e9goci\u00e9", "2. Une clause autorisant l'innovation", "3. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 2,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Monopole et transparence totale", "2. Libre n\u00e9gociation des prix uniquement", "3. Innovation totale et absence de concurrence", "4. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelle est la définition d’un monopole?",
        choices: ["1. Un march\u00e9 contr\u00f4l\u00e9 par plusieurs entreprises", "2. Un march\u00e9 avec un seul offreur face \u00e0 plusieurs demandeurs", "3. Un march\u00e9 totalement libre sans r\u00e9gulation", "4. Un march\u00e9 avec plusieurs offreurs et demandeurs", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises?",
        choices: ["1. Les entreprises collaborent pour innover", "2. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "3. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", "4. Les entreprises travaillent pour l'\u00c9tat", ""],
        correct: 1,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Un contrat \u00e0 titre gratuit", "2. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "3. Une clause autorisant l'innovation", "4. Un accord librement n\u00e9goci\u00e9", ""],
        correct: 1,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelle est la définition d’un monopole?",
        choices: ["1. Un march\u00e9 contr\u00f4l\u00e9 par plusieurs entreprises", "2. Un march\u00e9 totalement libre sans r\u00e9gulation", "3. Un march\u00e9 avec un seul offreur face \u00e0 plusieurs demandeurs", "4. Un march\u00e9 avec plusieurs offreurs et demandeurs", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Innovation totale et absence de concurrence", "3. Monopole et transparence totale", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quels sont les effets d’une asymétrie d’information?",
        choices: ["1. Baisse des prix de mani\u00e8re syst\u00e9matique", "2. Obligation d\u2019\u00e9change \u00e9quitable", "3. Am\u00e9lioration de la concurrence", "4. Influence sur la concurrence et d\u00e9savantage pour un agent", ""],
        correct: 3,
        chapter: "2",
        part: "III A"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Amorce de baisse des prix et ententes possibles", "3. Prix totalement libre sans r\u00e9gulation", "4. Baisse des prix et concurrence exacerb\u00e9e", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les deux formes de financement externe?",
        choices: ["1. Financement local et international", "2. Financement direct et indirect", "3. Financement priv\u00e9 et public", "4. Financement personnel et solidaire", ""],
        correct: 1,
        chapter: "1",
        part: "III"
    },
    {
        question: "Quels sont les deux types de flux économiques?",
        choices: ["1. Flux mon\u00e9taires et flux r\u00e9els", "2. Flux internes et externes", "3. Flux commerciaux et technologiques", "4. Flux juridiques et manag\u00e9riaux", ""],
        correct: 0,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises?",
        choices: ["1. Les entreprises travaillent pour l'\u00c9tat", "2. Les entreprises collaborent pour innover", "3. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", "4. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", ""],
        correct: 3,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les deux formes de financement externe?",
        choices: ["1. Financement priv\u00e9 et public", "2. Financement local et international", "3. Financement direct et indirect", "4. Financement personnel et solidaire", ""],
        correct: 2,
        chapter: "1",
        part: "III"
    },
    {
        question: "Quels sont les deux types de flux économiques?",
        choices: ["1. Flux juridiques et manag\u00e9riaux", "2. Flux commerciaux et technologiques", "3. Flux internes et externes", "4. Flux mon\u00e9taires et flux r\u00e9els", ""],
        correct: 3,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Qu'est-ce qu'une externalité positive?",
        choices: ["1. Un effet n\u00e9gatif sur le march\u00e9", "2. Une taxe impos\u00e9e par l'\u00c9tat", "3. Un co\u00fbt pour l'agent \u00e9conomique", "4. Un gain pour l'agent impact\u00e9 sans compensation", ""],
        correct: 3,
        chapter: "2",
        part: "III C"
    },
    {
        question: "Quels sont les effets d’une asymétrie d’information?",
        choices: ["1. Obligation d\u2019\u00e9change \u00e9quitable", "2. Am\u00e9lioration de la concurrence", "3. Influence sur la concurrence et d\u00e9savantage pour un agent", "4. Baisse des prix de mani\u00e8re syst\u00e9matique", ""],
        correct: 2,
        chapter: "2",
        part: "III A"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Amorce de baisse des prix et ententes possibles", "2. Prix fixes et absence d\u2019innovation", "3. Baisse des prix et concurrence exacerb\u00e9e", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix totalement libre sans r\u00e9gulation", "2. Amorce de baisse des prix et ententes possibles", "3. Baisse des prix et concurrence exacerb\u00e9e", "4. Prix fixes et absence d\u2019innovation", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Libre n\u00e9gociation des prix uniquement", "2. Innovation totale et absence de concurrence", "3. Monopole et transparence totale", "4. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises?",
        choices: ["1. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", "2. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "3. Les entreprises travaillent pour l'\u00c9tat", "4. Les entreprises collaborent pour innover", ""],
        correct: 1,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Quelle est la première finalité d'une entreprise selon Peter Drucker?",
        choices: ["1. Cr\u00e9er de la valeur pour les actionnaires", "2. Assurer la p\u00e9rennit\u00e9 financi\u00e8re", "3. D\u00e9velopper une client\u00e8le", "4. Optimiser les processus de production", ""],
        correct: 2,
        chapter: "5",
        part: "I B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Prix totalement libre sans r\u00e9gulation", "4. Amorce de baisse des prix et ententes possibles", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Amorce de baisse des prix et ententes possibles", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Prix totalement libre sans r\u00e9gulation", "4. Prix fixes et absence d\u2019innovation", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Une clause autorisant l'innovation", "2. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "3. Un contrat \u00e0 titre gratuit", "4. Un accord librement n\u00e9goci\u00e9", ""],
        correct: 1,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Innovation totale et absence de concurrence", "3. Libre n\u00e9gociation des prix uniquement", "4. Monopole et transparence totale", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Innovation totale et absence de concurrence", "2. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "3. Monopole et transparence totale", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Une clause autorisant l'innovation", "2. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "3. Un accord librement n\u00e9goci\u00e9", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 1,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Un accord librement n\u00e9goci\u00e9", "2. Une clause autorisant l'innovation", "3. Un contrat \u00e0 titre gratuit", "4. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", ""],
        correct: 3,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Monopole et transparence totale", "2. Innovation totale et absence de concurrence", "3. Libre n\u00e9gociation des prix uniquement", "4. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises?",
        choices: ["1. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", "2. Les entreprises travaillent pour l'\u00c9tat", "3. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "4. Les entreprises collaborent pour innover", ""],
        correct: 2,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Un contrat \u00e0 titre gratuit", "2. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "3. Un accord librement n\u00e9goci\u00e9", "4. Une clause autorisant l'innovation", ""],
        correct: 1,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Innovation totale et absence de concurrence", "2. Monopole et transparence totale", "3. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Amorce de baisse des prix et ententes possibles", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Prix totalement libre sans r\u00e9gulation", "4. Prix fixes et absence d\u2019innovation", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les cinq fonctions du management?",
        choices: ["1. Recruter, planifier, \u00e9valuer, contr\u00f4ler, produire", "2. Diriger, \u00e9valuer, financer, innover, vendre", "3. Fixer des objectifs, d\u00e9finir des moyens, g\u00e9rer, contr\u00f4ler, corriger", "4. Planifier, organiser, diriger, coordonner, contr\u00f4ler", ""],
        correct: 2,
        chapter: "5",
        part: "II A"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Baisse des prix et concurrence exacerb\u00e9e", "2. Prix totalement libre sans r\u00e9gulation", "3. Amorce de baisse des prix et ententes possibles", "4. Prix fixes et absence d\u2019innovation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix totalement libre sans r\u00e9gulation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Prix fixes et absence d\u2019innovation", "4. Amorce de baisse des prix et ententes possibles", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix totalement libre sans r\u00e9gulation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix fixes et absence d\u2019innovation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Monopole et transparence totale", "2. Innovation totale et absence de concurrence", "3. Libre n\u00e9gociation des prix uniquement", "4. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Libre n\u00e9gociation des prix uniquement", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quels sont les deux types de flux économiques?",
        choices: ["1. Flux mon\u00e9taires et flux r\u00e9els", "2. Flux juridiques et manag\u00e9riaux", "3. Flux internes et externes", "4. Flux commerciaux et technologiques", ""],
        correct: 0,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Libre n\u00e9gociation des prix uniquement", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises?",
        choices: ["1. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "2. Les entreprises travaillent pour l'\u00c9tat", "3. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", "4. Les entreprises collaborent pour innover", ""],
        correct: 0,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Une clause autorisant l'innovation", "2. Un contrat \u00e0 titre gratuit", "3. Un accord librement n\u00e9goci\u00e9", "4. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", ""],
        correct: 3,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelle est la première finalité d'une entreprise selon Peter Drucker?",
        choices: ["1. Cr\u00e9er de la valeur pour les actionnaires", "2. Optimiser les processus de production", "3. Assurer la p\u00e9rennit\u00e9 financi\u00e8re", "4. D\u00e9velopper une client\u00e8le", ""],
        correct: 3,
        chapter: "5",
        part: "I B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix totalement libre sans r\u00e9gulation", "2. Prix fixes et absence d\u2019innovation", "3. Amorce de baisse des prix et ententes possibles", "4. Baisse des prix et concurrence exacerb\u00e9e", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Un accord librement n\u00e9goci\u00e9", "2. Un contrat \u00e0 titre gratuit", "3. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "4. Une clause autorisant l'innovation", ""],
        correct: 2,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Un contrat \u00e0 titre gratuit", "2. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "3. Un accord librement n\u00e9goci\u00e9", "4. Une clause autorisant l'innovation", ""],
        correct: 1,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Baisse des prix et concurrence exacerb\u00e9e", "2. Prix totalement libre sans r\u00e9gulation", "3. Amorce de baisse des prix et ententes possibles", "4. Prix fixes et absence d\u2019innovation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Baisse des prix et concurrence exacerb\u00e9e", "2. Prix fixes et absence d\u2019innovation", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Libre n\u00e9gociation des prix uniquement", "2. Innovation totale et absence de concurrence", "3. Monopole et transparence totale", "4. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Une clause autorisant l'innovation", "2. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "3. Un accord librement n\u00e9goci\u00e9", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 1,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Qu'est-ce qu'une externalité positive?",
        choices: ["1. Un co\u00fbt pour l'agent \u00e9conomique", "2. Un gain pour l'agent impact\u00e9 sans compensation", "3. Une taxe impos\u00e9e par l'\u00c9tat", "4. Un effet n\u00e9gatif sur le march\u00e9", ""],
        correct: 1,
        chapter: "2",
        part: "III C"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Baisse des prix et concurrence exacerb\u00e9e", "2. Amorce de baisse des prix et ententes possibles", "3. Prix totalement libre sans r\u00e9gulation", "4. Prix fixes et absence d\u2019innovation", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Amorce de baisse des prix et ententes possibles", "2. Prix fixes et absence d\u2019innovation", "3. Baisse des prix et concurrence exacerb\u00e9e", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Libre n\u00e9gociation des prix uniquement", "2. Monopole et transparence totale", "3. Innovation totale et absence de concurrence", "4. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Innovation totale et absence de concurrence", "2. Monopole et transparence totale", "3. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Une clause autorisant l'innovation", "3. Un accord librement n\u00e9goci\u00e9", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Baisse des prix et concurrence exacerb\u00e9e", "2. Prix fixes et absence d\u2019innovation", "3. Prix totalement libre sans r\u00e9gulation", "4. Amorce de baisse des prix et ententes possibles", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises?",
        choices: ["1. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", "2. Les entreprises collaborent pour innover", "3. Les entreprises travaillent pour l'\u00c9tat", "4. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", ""],
        correct: 0,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Baisse des prix et concurrence exacerb\u00e9e", "2. Amorce de baisse des prix et ententes possibles", "3. Prix fixes et absence d\u2019innovation", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les cinq fonctions du management?",
        choices: ["1. Diriger, \u00e9valuer, financer, innover, vendre", "2. Fixer des objectifs, d\u00e9finir des moyens, g\u00e9rer, contr\u00f4ler, corriger", "3. Recruter, planifier, \u00e9valuer, contr\u00f4ler, produire", "4. Planifier, organiser, diriger, coordonner, contr\u00f4ler", ""],
        correct: 1,
        chapter: "5",
        part: "II A"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "2. Monopole et transparence totale", "3. Libre n\u00e9gociation des prix uniquement", "4. Innovation totale et absence de concurrence", ""],
        correct: 0,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce qu'une externalité positive?",
        choices: ["1. Un gain pour l'agent impact\u00e9 sans compensation", "2. Un co\u00fbt pour l'agent \u00e9conomique", "3. Un effet n\u00e9gatif sur le march\u00e9", "4. Une taxe impos\u00e9e par l'\u00c9tat", ""],
        correct: 0,
        chapter: "2",
        part: "III C"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Prix totalement libre sans r\u00e9gulation", "4. Amorce de baisse des prix et ententes possibles", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Innovation totale et absence de concurrence", "2. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "3. Monopole et transparence totale", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Un contrat \u00e0 titre gratuit", "2. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "3. Une clause autorisant l'innovation", "4. Un accord librement n\u00e9goci\u00e9", ""],
        correct: 1,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Amorce de baisse des prix et ententes possibles", "3. Prix totalement libre sans r\u00e9gulation", "4. Baisse des prix et concurrence exacerb\u00e9e", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Libre n\u00e9gociation des prix uniquement", "2. Innovation totale et absence de concurrence", "3. Monopole et transparence totale", "4. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", ""],
        correct: 3,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les quatre principales finalités d'une entreprise?",
        choices: ["1. Sociale, manag\u00e9riale, technique, environnementale", "2. \u00c9conomique, sociale, soci\u00e9tale, environnementale", "3. \u00c9conomique, juridique, technique, commerciale", "4. Financi\u00e8re, administrative, sociale, contractuelle", ""],
        correct: 1,
        chapter: "5",
        part: "I B"
    },
    {
        question: "Quels sont les deux types de flux économiques?",
        choices: ["1. Flux internes et externes", "2. Flux juridiques et manag\u00e9riaux", "3. Flux commerciaux et technologiques", "4. Flux mon\u00e9taires et flux r\u00e9els", ""],
        correct: 3,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quelle est la définition d'une relation de concurrence entre entreprises?",
        choices: ["1. Les entreprises travaillent pour l'\u00c9tat", "2. Les entreprises fusionnent pour contr\u00f4ler le march\u00e9", "3. Les entreprises collaborent pour innover", "4. Les entreprises s\u2019affrontent pour capter des parts de march\u00e9", ""],
        correct: 3,
        chapter: "1",
        part: "II B"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix totalement libre sans r\u00e9gulation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix fixes et absence d\u2019innovation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Amorce de baisse des prix et ententes possibles", "3. Prix totalement libre sans r\u00e9gulation", "4. Baisse des prix et concurrence exacerb\u00e9e", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Innovation totale et absence de concurrence", "2. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "3. Libre n\u00e9gociation des prix uniquement", "4. Monopole et transparence totale", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Prix fixes et absence d\u2019innovation", "2. Baisse des prix et concurrence exacerb\u00e9e", "3. Amorce de baisse des prix et ententes possibles", "4. Prix totalement libre sans r\u00e9gulation", ""],
        correct: 2,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Une clause autorisant l'innovation", "2. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "3. Un contrat \u00e0 titre gratuit", "4. Un accord librement n\u00e9goci\u00e9", ""],
        correct: 1,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Une clause autorisant l'innovation", "2. Un contrat \u00e0 titre gratuit", "3. Un accord librement n\u00e9goci\u00e9", "4. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", ""],
        correct: 3,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quels sont les deux types de flux économiques?",
        choices: ["1. Flux internes et externes", "2. Flux commerciaux et technologiques", "3. Flux juridiques et manag\u00e9riaux", "4. Flux mon\u00e9taires et flux r\u00e9els", ""],
        correct: 3,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quels sont les deux types de flux économiques?",
        choices: ["1. Flux internes et externes", "2. Flux juridiques et manag\u00e9riaux", "3. Flux commerciaux et technologiques", "4. Flux mon\u00e9taires et flux r\u00e9els", ""],
        correct: 3,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quels sont les deux types de flux économiques?",
        choices: ["1. Flux mon\u00e9taires et flux r\u00e9els", "2. Flux commerciaux et technologiques", "3. Flux internes et externes", "4. Flux juridiques et manag\u00e9riaux", ""],
        correct: 0,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quels sont les deux types de flux économiques?",
        choices: ["1. Flux commerciaux et technologiques", "2. Flux juridiques et manag\u00e9riaux", "3. Flux mon\u00e9taires et flux r\u00e9els", "4. Flux internes et externes", ""],
        correct: 2,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Un accord librement n\u00e9goci\u00e9", "2. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 1,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Qu'est-ce que la responsabilité sociétale des entreprises (RSE)?",
        choices: ["1. L'application stricte des lois fiscales", "2. Une d\u00e9marche pour r\u00e9duire les co\u00fbts internes uniquement", "3. L'int\u00e9gration des pr\u00e9occupations sociales et environnementales dans les activit\u00e9s", "4. L'obligation de maximiser les b\u00e9n\u00e9fices pour les actionnaires", ""],
        correct: 2,
        chapter: "5",
        part: "I B"
    },
    {
        question: "Quelles sont les caractéristiques d’une concurrence pure et parfaite?",
        choices: ["1. Innovation totale et absence de concurrence", "2. Atomicit\u00e9, homog\u00e9n\u00e9it\u00e9, transparence, libre entr\u00e9e et sortie, libre circulation", "3. Monopole et transparence totale", "4. Libre n\u00e9gociation des prix uniquement", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Quelles sont les conséquences d’un marché en oligopole?",
        choices: ["1. Baisse des prix et concurrence exacerb\u00e9e", "2. Amorce de baisse des prix et ententes possibles", "3. Prix totalement libre sans r\u00e9gulation", "4. Prix fixes et absence d\u2019innovation", ""],
        correct: 1,
        chapter: "2",
        part: "I"
    },
    {
        question: "Qu'est-ce que la responsabilité civile contractuelle?",
        choices: ["1. Une obligation impos\u00e9e par un juge pour un pr\u00e9judice caus\u00e9", "2. Un accord librement n\u00e9goci\u00e9", "3. Une clause autorisant l'innovation", "4. Un contrat \u00e0 titre gratuit", ""],
        correct: 0,
        chapter: "4",
        part: "III B"
    },
    {
        question: "Quels sont les deux types de flux économiques?",
        choices: ["1. Flux juridiques et manag\u00e9riaux", "2. Flux mon\u00e9taires et flux r\u00e9els", "3. Flux internes et externes", "4. Flux commerciaux et technologiques", ""],
        correct: 1,
        chapter: "1",
        part: "II A"
    },
    {
        question: "Quels sont les deux types de flux économiques?",
        choices: ["1. Flux internes et externes", "2. Flux mon\u00e9taires et flux r\u00e9els", "3. Flux juridiques et manag\u00e9riaux", "4. Flux commerciaux et technologiques", ""],
        correct: 1,
        chapter: "1",
        part: "II A"
    },

    // Ajoute toutes les autres questions ici
];

let score = 0;

const questionElement = document.getElementById("question");
const cardsContainer = document.getElementById("cards");
const scoreElement = document.getElementById("score");
const feedbackElement = document.getElementById("feedback");
const chapterElement = document.getElementById("chapter");
const partElement = document.getElementById("part");

// Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange des éléments
    }
}

// Mélanger les questions au chargement de la page
shuffleArray(questions);


function loadQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[randomIndex];

    questionElement.innerHTML = currentQuestion.question;
    chapterElement.innerHTML = currentQuestion.chapter;
    partElement.innerHTML = currentQuestion.part;

    cardsContainer.innerHTML = "";
    feedbackElement.innerHTML = "";

    const shuffledChoices = [...currentQuestion.choices].sort(() => Math.random() - 0.5);

    shuffledChoices.forEach((choice, index) => {
        if (choice) {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = choice; // Retiré `${index + 1}.` pour ne pas afficher le numéro
            card.addEventListener("click", () => {
                const correctAnswer = currentQuestion.choices[currentQuestion.correct];
                if (choice === correctAnswer) {
                    card.classList.add("correct");
                    score++;
                    feedbackElement.innerHTML = "Bonne réponse ! 🎉";
                } else {
                    card.classList.add("incorrect");
                    feedbackElement.innerHTML = `Mauvaise réponse... 😢<br>La bonne réponse était : <strong>${correctAnswer}</strong>`;
                }
                scoreElement.innerHTML = score;
                setTimeout(loadQuestion, 4000); // La réponse reste affichée 4 secondes
            });
            cardsContainer.appendChild(card);
        }
    });
     
}

window.onload = loadQuestion;
