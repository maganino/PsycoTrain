# SJT Business Analyst (ONVA) — Processus de génération

Ce document décrit la démarche utilisée pour produire les **deux nouveaux ensembles de SJT**
dédiés à la préparation de l'épreuve Business Analyst (AFG26032 / ONVA, BOSA).
Il est indépendant du lot précédent (25+8 scénarios "génériques" `BOSA_SJT`) et ne doit
pas être fusionné avec lui dans l'interface de pratique.

---

## 1. Contexte du poste cible

- **Employeur** : Office National des Vacances Annuelles (ONVA), ~240 collaborateurs, Bruxelles.
- **Rôle** : Business Analyst, passerelle entre opérations, management et IT.
- **Missions** : cartographie de processus, traduction des besoins en exigences fonctionnelles,
  BPMN/UML, use cases / user stories, test scenarios, entretien d'outils internes
  (Excel, macros VBA, Access).
- **Environnement** : hybride (jusqu'à 60% de télétravail), projet de digitalisation en cours,
  chaîne Access/Excel à moderniser, public direct soumis à l'obligation de neutralité.
- **Parties prenantes fréquentes** : gestionnaires de dossiers, service juridique,
  IT (développeurs, architectes), management, autres administrations (ONSS, SPF Finances),
  ayants droit (1,1M+ travailleurs et artistes).

Les scénarios sont tous ancrés dans des situations plausibles pour ce poste
(processus vacances, pécule, prorata, comptes dormants, migration d'outil, audit de règles,
modernisation BPMN, etc.).

---

## 2. Compétences testées et niveaux attendus

Tous les niveaux sont tirés de *Cartes de compétences.pdf* (BOSA) et de l'annonce.

| # | Compétence | Niveau cible | Code | Comportements-clés (N2 sauf mention) |
|---|---|---|---|---|
| 1 | **Penser de manière critique** | N2 — *Évaluer des informations complexes et arriver à une conclusion* | `PC2` | combiner stratégies de recherche, identifier essentiels/sous-jacents, évaluer causes/conséquences, vérifier crédibilité et fiabilité, détecter contradictions, formuler recommandations fondées, réfléchir aux conséquences |
| 2 | **Communiquer** | N2 — *Partager des opinions et adapter sa communication* | `CO2` | expression claire et transparente, assertivité, équilibre écoute/parole, valorisation de la diversité, ciblage du public, usage sécurisé des canaux digitaux |
| 3 | **Être orienté solutions** | N2 — *Implémenter des solutions dans un processus d'amélioration continue* | `SO2` | examiner les causes, comparer alternatives, intégrer plusieurs points de vue, implémenter et adapter, trouver des méthodes durables, inscrire dans un cycle d'amélioration continue |
| 4 | **Être orienté clients** | N2 — *Accompagner les clients* | `CL2` | approfondir la demande, chercher la solution avec le client, conseils objectifs et impartiaux, respect des limites du service, entretien du contact, regard critique sur le service rendu, prise en compte du feedback |
| 5 | **Faire preuve d'agilité** | N2 — *Participer au changement* | `AG2` | alerte aux évolutions du domaine, intégration des nouvelles technologies, persévérance face aux difficultés, lecture de l'échec comme apprentissage, ajustement de méthode quand priorités changent, initiative hors fonction |

> Note « client » à l'ONVA : les "clients" sont essentiellement internes
> (gestionnaires de dossiers, autres départements, management) mais aussi les ayants droit finaux.
> Les scénarios couvrent les deux registres.

---

## 3. Organisation des deux ensembles

Chaque ensemble = **25 situations × 4 réactions = 100 questions**.

| | **Set 1 — Critical** | **Set 2 — Agility** |
|---|---|---|
| `source` | `BOSA_SJT_BA_CRIT` | `BOSA_SJT_BA_AGIL` |
| `set_id` | `sjt_crit_s01` → `sjt_crit_s25` | `sjt_agil_s01` → `sjt_agil_s25` |
| `id` d'une réaction | `sjt_crit_s01_r1`..`_r4` | `sjt_agil_s01_r1`..`_r4` |
| Compétence focus | Penser critique (`PC2`) | Agilité (`AG2`) |
| Poids focus | ~80 % (≈20 situations « focus pur ») | ~80 % |
| Situations « support » | ≈5, interleavées en s05, s10, s15, s20, s25 | idem |
| Mix des supports | 1 × Communiquer, 1 × Solutions, 1 × Clients, 1 × Agilité, 1 × libre | 1 × Communiquer, 1 × Solutions, 1 × Clients, 1 × Critical, 1 × libre |

Même dans les situations "focus pur", une ou deux réactions peuvent tester une compétence
**secondaire** pour ajouter de la nuance (par exemple, une réaction excellente en Critical
mais médiocre en Communiquer ne mérite pas ++).

---

## 4. Format d'une entrée

```jsonc
{
  "id": "sjt_crit_s01_r1",
  "type": "sjt",
  "source": "BOSA_SJT_BA_CRIT",
  "book_ref": "BA · Critical · Situation 1 · Réaction A",
  "set_id": "sjt_crit_s01",
  "target_sec": 90,                  // 90 pour r1 (lecture situation), 40 pour r2..r4
  "competence_primary": "PC2",       // code compétence + niveau
  "competence_secondary": ["CO2"],   // facultatif
  "situation": "...",                // 200–300 mots (contextualisé ONVA)
  "question": "RÉACTION A : ...",    // < 250 mots
  "options": [ {"letter":"A","text":"Très inapproprié (--)"}, ... ],
  "correct": "A",                    // lettre correspondant au score attendu sur l'échelle
  "expected_score": "--",            // score pédagogique attendu (--, -, +/-, +, ++)
  "explanation": "Score attendu : --\nCompétence testée : ...\n..."
}
```

Champs **nouveaux** par rapport au lot précédent :
- `target_sec` : temps cible par question (90 s pour r1, 40 s pour r2/r3/r4). L'UI doit
  respecter cet override quand il est présent.
- `competence_primary` / `competence_secondary` : codes BOSA pour permettre le filtrage
  et l'analyse par compétence dans le dashboard.
- `expected_score` : le score pédagogique explicite (dupliqué en tête d'explication, pour
  stabilité de l'UI et du scoring).

---

## 5. Temps par question

- **r1 = 90 s** : la première réaction inclut la lecture de la situation (200–300 mots).
- **r2, r3, r4 = 40 s** : la situation est déjà lue ; seule la réaction (≤250 mots) est
  à évaluer.

Total d'un ensemble de 100 questions : 25 × (90 + 3 × 40) = **25 × 210 = 5250 s ≈ 88 min**.
Proche du format BOSA réel (≈1 h 45 pour SJT + raisonnement abstrait).

---

## 6. Distribution des scores par situation

Pour chaque situation, les 4 réactions couvrent **4 positions distinctes** sur l'échelle
`-- / - / +/- / + / ++`. Deux schémas sont utilisés (tirés au sort pour éviter les patterns) :

- Schéma A : `-- , - , +/- , ++` (situations « dilemmes »)
- Schéma B : `-- , +/- , + , ++` (situations « crête »)
- Schéma C : `- , +/- , + , ++` (situations « sans piège évident »)

La lettre assignée (A/B/C/D) à chaque niveau est mélangée à la génération pour éviter
le biais "la bonne réponse est toujours D".

---

## 7. Critères de qualité d'une réaction

Les réactions suivent le **type** observé dans la démo BOSA
(`DEMO - Test de jugement situationnel - Niveaux A et B - FR.docx`) :

- Chaque situation se termine par un **prompt de parole ou d'action**
  (« Vincent répond : », « Amélie décide : »).
- Chaque réaction est une **réponse directe et courte** (≈ 20–120 mots, max 250),
  écrite comme si le protagoniste parlait ou agissait sur le moment — et non comme
  un plan de projet en quatre étapes. Un candidat doit pouvoir imaginer quelqu'un
  dire cette phrase à voix haute.
- Les réactions doivent être :
  1. **Plausibles** — ce que ferait réellement un BA dans ce contexte.
  2. **Discriminantes** sur la compétence focus (niveau N2 attendu).
- Le justificatif (`explanation`) reste en ≤ 150 mots et cite :
  - la compétence testée + le niveau,
  - pourquoi ce score-là et pas le score voisin (`pourquoi ++ et non +`),
  - un ou deux comportements-clés de la carte de compétence présents/absents.

Différence avec la démo BOSA : les situations de ce lot visent **200–300 mots**
(contre ~250 dans la démo). Les 4 samples initiaux (`sjt_crit_s01`, `sjt_crit_s02`,
`sjt_agil_s01`, `sjt_agil_s02`) sont plus longs (~400 mots) et seront conservés tels
quels ; le lot généré à partir de `s03` respecte la cible 200–300 pour rester lisible
dans la fenêtre allouée à `r1`.

---

## 8. Workflow de génération

1. **Samples** (`questions_ba_samples.json`) : 2 scénarios/set (16 réactions) — en cours
   pour validation.
2. **Batches** : une fois les samples validés, 5 scénarios/batch (20 réactions/batch) sont
   ajoutés directement à `questions.js` + `questions.json`.
3. **UI** : petit patch de `index.html` pour
   (a) lire `q.target_sec` en priorité,
   (b) afficher les deux nouvelles `source` comme filtres séparés.
4. **QA** : à l'issue de la génération, un sanity-check scripté (à ajouter dans `ingest/`)
   vérifie que
   - chaque `set_id` a exactement 4 `ri`,
   - les 4 scores d'une situation sont distincts,
   - les `source`/`target_sec`/compétences sont cohérents,
   - aucun `id` n'est dupliqué.

---

## 9. Rubrique de notation d'une réaction

La note d'une réaction sur l'échelle `-- / - / +/- / + / ++` est produite en
cinq étapes, appliquées dans l'ordre.

```
  ┌────────────────────────────────────────────────────────────────┐
  │ 1. RÉSOLUTION FONCTIONNELLE (axe principal)                    │
  │    L'action résout-elle le problème / l'objectif énoncé ?      │
  │        oui → +          non → −                                │
  └────────────────────────────────────────────────────────────────┘
                                │
  ┌────────────────────────────────────────────────────────────────┐
  │ 2. URGENCE / GRAVITÉ (amplificateur — asymétrique)             │
  │    Urgence haute + action cohérente avec l'enjeu :             │
  │        +  →  ++         −  →  −−                               │
  │    Urgence basse : pas d'upgrade automatique. Les notes         │
  │    restent à + / − par défaut. ++ / −− restent atteignables    │
  │    mais exigent une justification indépendante (qualité        │
  │    intrinsèque de l'action, ou red-flag de l'étape 5).         │
  └────────────────────────────────────────────────────────────────┘
                                │
  ┌────────────────────────────────────────────────────────────────┐
  │ 3. DISCRIMINATION entre les 4 (ou 5) réactions                 │
  │    Classer les réactions sur l'axe fonctionnel — soit en       │
  │    descendant depuis ++, soit en remontant depuis −−.          │
  │    Deux réactions partagent la même note UNIQUEMENT si leur    │
  │    effet fonctionnel+urgence est littéralement identique.      │
  │    Plafond d'égalités : ≤ 25 % des scénarios générés.          │
  └────────────────────────────────────────────────────────────────┘
                                │
  ┌────────────────────────────────────────────────────────────────┐
  │ 4. VOLET RELATIONNEL (modificateur secondaire, ±1 cran)        │
  │    Comment l'humain a-t-il été traité ?                        │
  │        ++ ↔ +      +/− ↔ +      +/− ↔ −      − ↔ −−            │
  │    Exception : si l'objectif principal du scénario EST          │
  │    relationnel (focus CL2 ou CO2), ce volet devient l'étape 1. │
  └────────────────────────────────────────────────────────────────┘
                                │
  ┌────────────────────────────────────────────────────────────────┐
  │ 5. RED-FLAG — override direct à −−                             │
  │    Manque de respect, ne rien faire, dissimuler un appui /     │
  │    un problème, couvrir une non-conformité.                    │
  │    → note verrouillée à −−, quelles que soient les étapes 1-4. │
  └────────────────────────────────────────────────────────────────┘
```

**Exemples (depuis `sjt_crit_s01` / PC2 — dilemme haute urgence : livrable
bloquant, 45 000 ayants droit, contradictions entre 3 sources) :**

- *Réaction A (−−)* : choisit une source sans vérifier + minimise le conflit.
  Étape 1 → −. Étape 2 (urgence haute + acceptation consciente du risque) →
  −−. Pas de red-flag, mais l'étape 2 a suffi.
- *Réaction B (−)* : vérifie une seule source (Access), isole juridique et
  Paul. Étape 1 → − (il y a un effort factuel, mais il confond exécution et
  norme). Étape 2 : urgence haute mais action non-triviale → pas de descente
  à −−. Reste à −.
- *Réaction C (+/−)* : détecte la contradiction, remonte l'alerte, mais ne
  tranche pas. Étape 1 ambiguë → entre + et − → +/−. Pas d'upgrade à −
  puisque la remontée d'alerte résout *partiellement* le problème de
  visibilité.
- *Réaction D (++)* : triangule, chiffre l'impact, mobilise Paul + Juridique,
  replanifie. Étape 1 → +. Étape 2 (urgence haute + action à la hauteur) →
  ++. Étape 4 (relationnel : co-saisine respectueuse) : déjà à ++, pas de
  montée.
- *Réaction E (+)* : triangule et documente, propose un arbitrage mais sans
  chiffrage ni co-saisine complète. Étape 1 → +. Étape 2 : urgence haute
  mais action incomplète vs. D → pas d'upgrade. Reste à +.

**Notes d'application pour la génération :**

- Le champ `explanation` d'une réaction doit expliciter l'étape qui fait
  basculer la note (par ex. « pourquoi −− et non − : acceptation consciente
  du risque — étape 2 »), pas seulement citer la compétence.
- Pour un scénario à focus relationnel (`competence_primary` ∈ {CO2, CL2}),
  inverser les étapes 1 et 4.
- Le plafond d'égalités (étape 3, ≤ 25 % des scénarios) se vérifie en QA
  (`ingest/qa_sjt_ba.py`) à l'échelle du lot actif.

---

## 10. Repères de révision pour le candidat

- **Critical Thinking N2** : "j'ai croisé plusieurs sources, j'ai vérifié la fiabilité,
  j'ai isolé la cause, j'ai formulé une recommandation, j'ai anticipé les conséquences".
- **Agilité N2** : "j'ai intégré le changement dans ma méthode, j'ai tiré parti de l'échec,
  j'ai ajusté mes priorités, j'ai pris une initiative hors mandat si utile,
  j'ai intégré une nouvelle techno".
- Les deux ensembles peuvent être pratiqués séparément dans l'UI (filtrer par `source`).
