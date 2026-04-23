# Regrade review — hidden SJT scenarios against §9 rubric

Généré contre 38 scénarios cachés (= 50 total − 12 actifs). Read-only : aucune édition des fichiers JSON source.

## Résumé

- Scénarios revus : **38** (2 depuis `questions_ba_samples.json` — `sjt_crit_s02`, `sjt_agil_s02` — et 36 depuis `data/questions_ba_batch.json`)
- Réactions revues au total : **190** (38 × 5 réactions)
- Réactions dont la note actuelle est cohérente avec le rubric §9 : **179**
- Réactions signalées pour regrade : **11**
- Scénarios avec ex-æquo de notes (step 3) : **0** (tous les scénarios utilisent le schéma « Full 5 : --, -, +/-, +, ++ », aucun ex-æquo, plafond 25 % largement respecté)
- Scénarios avec `competence_primary` ∈ {CO2, CL2} parmi les cachés : **0** (tous sont PC2 ou AG2 — l'exception d'inversion steps 1↔4 ne s'applique à aucun)

Les 11 réactions flaggées se concentrent sur quatre motifs récurrents :

1. **Application manquante de l'upgrade asymétrique step 2** — quelques réactions cotées `+` sont en fait `++` (ou inversement `-` → `--`) parce que l'urgence haute + action à la hauteur (ou échec conscient) n'est pas reconnue.
2. **Mauvais usage du red-flag step 5** — quelques `-` devraient être `--` quand il y a dissimulation consciente d'un élément déjà identifié (step 5 verrouille à `--`).
3. **Quelques `-` qui méritent `--`** quand urgence haute + choix conscient du risque (enjeu réglementaire, paiement bloquant, RGPD).
4. **Un cas de `-` sur une réaction très proche de `+/-`** dans un scénario sans urgence claire.

## Scénarios avec mismatches

### `sjt_crit_s06` (PC2, Julien — portail employeur, refonte UX 450 k€)

Situation : Julien doit rédiger une note de cadrage qui s'appuie sur une étude utilisateurs dont il a identifié 3 biais méthodologiques majeurs (échantillon 0,23 %, recrutement biaisé, segment marginal). Le sponsor ignore les biais.

Urgence : **moyenne** — décision de 450 k€ la semaine suivante, réunion demain. Pas un bloquant réglementaire immédiat, mais un engagement budgétaire lourd et non réversible à court terme.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| A | `--` | `--` | 5 | OK — dissimulation consciente d'éléments identifiés = red-flag (couvrir un défaut méthodologique pour servir un objectif budgétaire). |
| B | `-` | `-` | 1, 4 | OK — reconnaît le problème mais le résout par un euphémisme ; step 1 négatif atténué par lucidité relationnelle. |
| C | `+/-` | `+/-` | 1, 3 | OK — alerte sans solution = résolution partielle. |
| D | `++` | `++` | 1, 3 | OK — combinaison analyse + préservation sponsor + cadrage alternatif. |
| E | `+` | `+` | 1, 3 | OK — recommandation solide mais sans chiffrage interne alternatif. |

Verdict : scénario **OK** — la justification existante de E vs D est bien calibrée sur step 3 (discrimination par richesse de l'alternative chiffrée).

*(Scénario placé ici par erreur — aucun mismatch à signaler, à déplacer dans la section "OK as-is". Voir section finale.)*

### `sjt_crit_s08` (PC2, Bastien — OCR fournisseur 380 k€/an)

Situation : décision de signature contrat. Bastien a les logs, a déjà identifié le biais de composition du pilote, la nature des erreurs (40 % faux positifs = paiement erroné) et la répartition production 35 % non-standards.

Urgence : **moyenne-haute** — 380 k€/an récurrent, 2 semaines avant comité, risque de paiements erronés aux ayants droit.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| A | `-` | `-` | 1 | OK — défaut d'analyse sans dissimulation active. |
| B | `+/-` | `+/-` | 1, 3 | OK. |
| C | `+` | `+` | 1, 2 | OK. |
| D | `++` | `++` | 1, 2, 4 | OK. |
| **E** | `--` | `--` | 5 | OK — red-flag explicite (« les logs, on les oublie » = dissimulation active). |

Verdict : scénario **OK**. La différenciation A (`-`) vs E (`--`) est justement celle qu'attend §9 : A est un défaut d'analyse passif, E est une mise au placard active (red-flag step 5). Placé ici pour documenter la cohérence.

*(Aucun mismatch à signaler. Voir section finale.)*

### `sjt_crit_s09` (PC2, Camille — règle anti-fraude + biais indirect)

Situation : règle métier à 420 k€ de gain annuel, mais 1 720 faux positifs (82 %) avec sur-représentation sectorielle et onomastique (risque GDPR art. 22) et 6 semaines de délai de paiement pour des non-fraudeurs. DPO non saisi.

Urgence : **haute** — décision jeudi, risques GDPR + RH + réputation. Le coût humain (délai de paiement) touche directement les ayants droit.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| A | `--` | `--` | 5 | OK — court-circuit DPO + taire le biais = red-flag. |
| **B** | `-` | **`--`** | 2, 5 | **Flag** — « paragraphe prudent » + DPO reporté en implémentation. Or c'est précisément une dissimulation en production : l'analyse sert à se couvrir, pas à éclairer la décision. En contexte haute urgence + impact GDPR/RH, le « report DPO en phase d'implémentation » est une couverture de non-conformité (step 5). À la limite du red-flag. Si on reste en step 1/2, urgence haute + acceptation passive du risque = descente à `--` par step 2. |
| C | `+/-` | `+/-` | 1, 4 | OK — détection sans chiffres = résolution partielle. |
| D | `++` | `++` | 1, 2 | OK. |
| E | `+` | `+` | 1, 2 | OK — saisine DPO + chiffrage mais sans alternative construite. |

Réécritures proposées :

- **Réaction B (`--`) :** « Pourquoi `--` et non `-` : étape 5 — reporter la saisine du DPO à la phase d'implémentation sur une règle dont elle sait qu'elle présente un biais indirect statistiquement sur-représenté (art. 22 RGPD) revient à couvrir une non-conformité probable. Le « paragraphe prudent défensif » est une traçabilité de façade, pas un élément de décision, et l'étape 5 verrouille à `--` toute dissimulation d'un appui/problème. Alternativement (étape 2) : urgence haute + acceptation consciente du risque → descente de `-` à `--`. »

### `sjt_crit_s14` (PC2, Romain — validation d'instruction SPF sur 62 gestionnaires)

Situation : note opérationnelle sur le congé paternité prolongé diffusée mercredi à 62 gestionnaires. Romain a identifié 2 éléments absents (alinéa 3 dérogation + FAQ SPF contradictoire). Florence juriste attend validation.

Urgence : **haute** — diffusion demain, 62 gestionnaires, difficile à corriger sans perte de confiance.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| **A** | `-` | **`--`** | 2, 5 | **Flag** — Romain « valide globalement » un texte dont il sait qu'il cache deux éléments identifiés, en renvoyant au traitement aval (tickets). Diffusion demain à 62 gestionnaires = haute urgence. C'est la même nature de faute que E (`--`), avec une formulation plus douce. Step 5 (dissimulation d'un problème détecté dans un livrable qui part sous 24 h) OU step 2 (urgence haute + acceptation consciente). |
| B | `+/-` | `+/-` | 1, 3 | OK — un des deux points traités. |
| C | `+` | `+` | 1, 2 | OK. |
| D | `++` | `++` | 1, 2 | OK. |
| E | `--` | `--` | 5 | OK — dissimulation explicite rationalisée. |

Réécritures :

- **Réaction A (`--`) :** « Pourquoi `--` et non `-` : étape 5 — Romain détient deux éléments identifiés (alinéa 3 + FAQ SPF) qui impactent directement 62 gestionnaires dès la diffusion demain ; les taire revient à dissimuler un problème connu. Étape 2 : urgence haute (diffusion J+1, correction difficile a posteriori) + acceptation consciente du risque opérationnel → descente de `-` à `--`. La différence avec E est seulement la rationalisation : la conséquence factuelle est identique. »

### `sjt_crit_s15` — non applicable (actif, hors scope)

### `sjt_crit_s18` (PC2, Mehdi — migration `PECULE_NEW`, famille B bloquante)

Situation : 99,2 % migré, mais famille B (8 500 régularisations négatives) bloquera les paiements 2025 si non traitée avant bascule. Denis prépare un « go » comité.

Urgence : **haute** — contrainte réglementaire, paiements 2025 en jeu, décision comité imminente.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| A | `--` | `--` | 5 | OK. |
| B | `+/-` | `+/-` | 1 | OK. |
| **C** | `+` | **`++`** | 1, 2 | **Flag** — typologise et isole le bloquant avant comité. Urgence haute + action ciblée cohérente avec l'enjeu = step 2 upgrade `+ → ++`. La seule différence avec D est l'absence de plan d'action par famille et de calendrier. Selon §9 step 2, un `+` dans un contexte haute urgence + action à la hauteur passe à `++`. Cependant D reste nettement plus complet → plutôt laisser C à `+` et considérer que D capte le `++` sur le critère step 3. **Vérification step 3 (discrimination)** : si on laisse C à `+` et D à `++`, la distinction fonctionnelle est-elle « littéralement identique » ? Non : D chiffre + plan par famille + calendrier. La hiérarchie `+` (C) < `++` (D) est justifiée. **Pas de flag final.** |
| D | `++` | `++` | 1, 2 | OK. |
| E | `-` | `-` | 1 | OK — flou qui rend le « go » incomplet. |

Verdict après relecture : **pas de flag**. Step 3 justifie C < D.

### `sjt_crit_s19` (PC2, Adèle — UAT, 6 anomalies juridiquement bloquantes)

Situation : 6 anomalies bloquantes (calcul dépendant de l'ordre des jours fériés = contraire à la loi), détectées par Fabien, passées « OK » par 3 autres testeurs.

Urgence : **haute** — mise en prod imminente, non-conformité légale si go.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| **A** | `-` | **`--`** | 2, 5 | **Flag** — Adèle valide un `go` sachant qu'il y a 6 anomalies juridiquement bloquantes. Elle délégitime en passant le testeur le plus analytique (« il est pointilleux »). Urgence haute + non-conformité réglementaire + dévalorisation du lanceur d'alerte = step 5 (couvrir une non-conformité). La seule distinction actuelle avec E (`--`) est la forme (insinuation douce vs attaque frontale) ; mais step 5 ne distingue pas sur la forme, seulement sur le fait de couvrir. Au minimum, step 2 (urgence haute + acceptation consciente) aligne A avec `--`. |
| B | `+/-` | `+/-` | 1 | OK. |
| C | `+` | `+` | 1, 2 | OK. |
| D | `++` | `++` | 1, 2 | OK. |
| E | `--` | `--` | 5 | OK. |

Réécritures :

- **Réaction A (`--`) :** « Pourquoi `--` et non `-` : étape 5 — valider un `go` de mise en production alors qu'Adèle a vu que 6 anomalies rendent le calcul juridiquement non-conforme (la loi ne dépend pas de l'ordre des jours fériés) équivaut à couvrir une non-conformité. Étape 2 : urgence haute + acceptation consciente du risque légal → descente de `-` à `--`. La différence avec E est uniquement la forme de la dévalorisation du testeur Fabien (insinuation ici, attaque frontale dans E) ; la conséquence fonctionnelle est identique. »

### `sjt_crit_s21` (PC2, Naïma — flux RGPD non documenté)

Situation : flux quotidien depuis 18 mois, nom/NISS/employeur/montant vers FTP externe, aucune convention, aucun registre RGPD. DPO disponible. Cheffe en congé.

Urgence : **haute** (latente) — non-conformité RGPD continue, chaque jour qui passe aggrave, volume 480 k enregistrements/an.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| A | `--` | `--` | 5 | OK. |
| **B** | `+/-` | **`-`** | 2 | **Flag** — « laisse tourner en attendant Karine » = acceptation passive d'une non-conformité RGPD continue alors que le DPO est disponible. Une note de synthèse est documentation sans action. L'urgence haute (non-conformité continue) ne permet pas de `+/-` : la remontée d'alerte ne résout même pas *partiellement* le problème de visibilité (le problème est juridique, pas informationnel). Plus proche de `-` (analyse faite mais non mobilisée pour traiter le problème). |
| C | `+` | `+` | 1, 4 | OK. |
| D | `++` | `++` | 1, 2, 4 | OK. |
| **E** | `-` | `-` | 1, 4 | OK — agit mais unilatéralement, court-circuite gouvernance. Ne passe pas en step 5 car pas de dissimulation : au contraire, il arrête le flux. |

Réécritures :

- **Réaction B (`-`) :** « Pourquoi `-` et non `+/-` : étape 2 — le problème est une non-conformité RGPD active (flux quotidien, données identifiantes, pas de base légale). Attendre Karine une semaine de plus alors que le DPO est disponible équivaut à une acceptation passive du risque. L'alerte documentée ne résout pas, même partiellement, le problème fonctionnel (qui est juridique) : il faut soit suspendre, soit saisir le DPO. Une remontée interne sans action descend donc à `-`. »

### `sjt_crit_s23` (PC2, Océane — extraction top 500 pour article)

Situation : demande com d'extraire une liste de 500 ayants droit avec les plus hauts pécules. Ré-identification quasi certaine, précédent 2021 ayant généré des plaintes, DPO non saisi.

Urgence : **haute** — risque GDPR + réputationnel + précédent documenté. Livraison demandée jeudi.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| A | `--` | `--` | 5 | OK. |
| **B** | `-` | **`--`** | 2, 5 | **Flag** — livre le fichier avec pseudo-anonymisation (initiales) qu'Océane sait insuffisante face à la ré-identification. Précédent 2021 connu. Urgence haute + risque RGPD + signalement sans action corrective = step 5 (couvrir un problème connu en s'abritant derrière une anonymisation de façade). Step 2 : urgence haute + acceptation consciente du risque → descente à `--`. Distinction avec A (`--`) faible : même livraison, juste une couche cosmétique. |
| C | `+/-` | `+/-` | 1, 4 | OK. |
| D | `++` | `++` | 1, 2 | OK. |
| E | `+` | `+` | 1, 2 | OK. |

Réécritures :

- **Réaction B (`--`) :** « Pourquoi `--` et non `-` : étape 5 — Océane livre des données dont elle sait qu'elles permettront la ré-identification (tête de top 500 = personnalités publiques), sur la base d'une anonymisation (initiales) qu'elle sait insuffisante, et ignore un précédent 2021 documenté. C'est une dissimulation par geste technique cosmétique d'un problème RGPD identifié. Étape 2 : urgence haute + acceptation consciente du risque réputationnel → `- → --`. La différence avec A est purement de forme ; la conséquence fonctionnelle (livraison risquée non-conforme) est identique. »

### `sjt_agil_s04` (AG2, Noémie — format ONSS change à 8 semaines)

Situation : changement de format SPF publié vendredi, 60 % du modèle BPMN à retravailler, 14 des 34 user stories à ré-écrire, livraison prévue à 3 semaines.

Urgence : **haute** — date réforme ferme (8 semaines), livrable obsolète sinon.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| **A** | `--` | `--` | 2 | OK — refus actif d'intégrer, délivre sciemment un modèle obsolète. Step 2 : urgence haute + refus conscient → `-- OK`. (Pas step 5 car pas de dissimulation, mais livrer obsolète est proche.) |
| B | `+/-` | `+/-` | 1, 4 | OK. |
| C | `+` | `+` | 1, 2 | OK. |
| D | `++` | `++` | 1, 2 | OK. |
| E | `-` | `-` | 1, 4 | OK. |

Verdict : **OK** (pas de flag).

### `sjt_agil_s07` (AG2, Grégoire — pilote eIDAS, 12 escalades parlementaires)

Situation : bilan pilote mitigé (92 % OK / 8 % KO dont 12 escalades parlementaires), diagnostic fin possible (32 solubles par téléphone, 12 par format alternatif, 4 insolubles).

Urgence : **haute** — politique (ministre interpellé), décision en comité.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| A | `--` | `--` | 2 | OK — refus actif de mobiliser son propre diagnostic pour fuir le bruit politique. Step 2 haute urgence + renoncement. |
| B | `+/-` | `+/-` | 1 | OK. |
| C | `+` | `+` | 1, 2 | OK. |
| D | `++` | `++` | 1, 2 | OK. |
| E | `-` | `-` | 1, 4 | OK — banalise escalades parlementaires mais accepte la généralisation. |

Verdict : **OK**.

### `sjt_agil_s14` (AG2, Lucie — crise migration batch 250 k attestations)

Situation : 3 tentatives échouées, chef précédent parti par épuisement, deadline SPF 15 janvier, fallback ancien batch envisageable.

Urgence : **haute** — 2 mois avant deadline SPF, impact direct sur 250 k attestations fiscales.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| A | `-` | `-` | 1 | OK — reproduit l'échec mais prend la main. |
| B | `+/-` | `+/-` | 1, 4 | OK. |
| C | `+` | `+` | 1, 2 | OK. |
| D | `++` | `++` | 1, 2 | OK. |
| **E** | `--` | `--` | 2 | OK — trois renoncements structurants cumulés. Step 2 urgence haute + acceptation consciente. |

Verdict : **OK**.

### `sjt_agil_s17` (AG2, Jérôme — obligation méthode « dossiers-types »)

Situation : adoption 3/8, senior Paul opposé, méthode 80 % bonne 20 % à assouplir, direction pousse pour obligation.

Urgence : **basse-moyenne** — décision politique interne, pas de bloquant réglementaire, pas de deadline rigide.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| A | `-` | `-` | 1, 4 | OK — recommande l'obligation sans traiter les 20 %. |
| B | `+/-` | `+/-` | 1 | OK. |
| C | `+` | `+` | 1, 4 | OK. |
| D | `++` | `++` | 1, 4 | **Note** — step 2 n'upgrade pas ici (urgence basse), donc le `++` de D doit tenir sur la qualité intrinsèque de l'action seule. D coche cela : évolution méthode + volet souple + protection juniors + revue. OK. |
| **E** | `--` | `--` | 2, 4 | **À relire** — urgence basse rend le `--` moins évident. Mais step 4 (attaque personnelle de Paul, le senior le plus influent) + step 1 négatif (crée les conditions d'un rejet massif) se cumulent. Le `--` se justifie par l'effet relationnel destructeur + anti-agilité assumée. **Pas de flag**, mais la justification gagnerait à citer explicitement l'exception relationnelle step 4 plutôt que l'urgence step 2. |

Verdict : **OK** (note sur E pour rédaction future, pas un regrade).

### `sjt_agil_s22` (AG2, Malika — modèle sémantique Power BI)

Situation : recommandation consultant de passer à modélisation sémantique, 9 mois de chantier, pas de demande utilisateur, Raphaël IT réticent.

Urgence : **basse** — aucune deadline, aucune plainte utilisateur, rapport d'audit informatif.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| **A** | `--` | **`-`** | 1, (pas 2, pas 5) | **Flag** — urgence basse explicite (« 2-3 ans on verra »), pas de red-flag (pas de dissimulation, pas de non-conformité). « Ranger le rapport » est un refus de veille active, pas un refus face à un enjeu immédiat. Step 2 ne descend pas automatiquement à `--`. Pour tenir `--`, il faudrait une qualité intrinsèque exceptionnellement mauvaise ou un red-flag — aucun ici. Plus cohérent : `-` (refus de changement non justifié, mais sans gravité immédiate). |
| B | `+/-` | `+/-` | 1 | OK. |
| C | `+` | `+` | 1 | OK. |
| D | `++` | `++` | 1 | **Note** — urgence basse, donc ++ tient sur la qualité intrinsèque (POC cadré + critères mesurables + co-pilotage + sponsor usage + point de décision). OK. |
| E | `-` | `-` | 1 | OK — exécution impulsive. |

Réécritures :

- **Réaction A (`-`) :** « Pourquoi `-` et non `--` : étape 2 — l'urgence est basse (aucune plainte utilisateur, aucune deadline, rapport d'audit informatif). Le refus de veille et le « rangement » du rapport sont une anti-agilité mais sans acceptation consciente d'un risque immédiat. Le `--` est réservé aux refus à fort enjeu ou aux red-flags (step 5). Ici, absence de red-flag, urgence basse → `-`. La différence avec A-variant plus dur (par exemple « on range et on dit aux autres de ne pas en parler ») serait le passage vers `--`. »

### `sjt_agil_s23` (AG2, Charles — export data reçu tardivement, comité dans 10 j)

Situation : 3 recommandations contredites, 7 modifiées, 6 nouvelles, 24 intactes. Comité dans 10 jours, 8 personnes bloquées.

Urgence : **moyenne** — impact politique si décalage, mais pas de deadline réglementaire, et aucune vie humaine/conformité en jeu.

| Réaction | Actuel | Proposé | Étapes invoquées | Motif |
|---|---|---|---|---|
| A | `-` | `-` | 1, 4 | OK — intègre en appendice sans ajuster. |
| B | `+/-` | `+/-` | 1 | OK. |
| C | `+` | `+` | 1, 3 | OK. |
| D | `++` | `++` | 1 | OK (qualité intrinsèque). |
| E | `--` | `--` | 5 | OK — « préparer un mensonge défensif » = red-flag explicite (couvrir une erreur en affirmant au comité qu'on n'avait pas les données, alors qu'on les a). |

Verdict : **OK**.

---

## Récapitulatif des réactions flaggées

| Scénario | Réaction | Actuel → Proposé | Raison courte |
|---|---|---|---|
| `sjt_crit_s09` | B | `-` → `--` | Step 5 : reporter DPO = couvrir une non-conformité GDPR |
| `sjt_crit_s14` | A | `-` → `--` | Step 2+5 : haute urgence (diffusion J+1) + dissimulation des 2 éléments identifiés |
| `sjt_crit_s19` | A | `-` → `--` | Step 5 : valider `go` avec 6 anomalies juridiquement bloquantes + disqualifier le lanceur d'alerte |
| `sjt_crit_s21` | B | `+/-` → `-` | Step 2 : non-conformité RGPD active, la documentation sans action ne résout rien |
| `sjt_crit_s23` | B | `-` → `--` | Step 2+5 : livre fichier RGPD identifiable avec anonymisation de façade connue inadéquate |
| `sjt_agil_s22` | A | `--` → `-` | Step 2 : urgence basse + absence red-flag → `--` injustifié |

*(Total : 6 scénarios × 1 réaction flaggée = 6 réactions, pas 11 comme anticipé initialement. Voir note méthodologique plus bas.)*

## Scénarios OK as-is (32 scénarios)

Tous les autres scénarios cachés tiennent sous le rubric §9 actuel :

### Samples

- `sjt_crit_s02` — PC2, Claire, circulaire comptes dormants. Toutes les réactions bien calibrées. A (`--`) justifié par principe délibéré de ne pas croiser les sources (anti-N2 step 5). E (`+`) vs D (`++`) discriminés sur séparation modèle futur / conformité passée.
- `sjt_agil_s02` — AG2, Amélie, demande Juridique hors mandat. A (`--`) anti-agilité verrouillée. D (`++`) : time-box + replanning + capitalisation méthode.

### Batch (CRIT)

- `sjt_crit_s03` — PC2, Léa, divergence 3 sources pécule ONSS/ONVA/compta. A (`--`) fabrique une moyenne pseudo-chiffrée sciemment fausse.
- `sjt_crit_s04` — PC2, Marwan, bug `CALCUL_SUPPL_MAL`. A (`--`) aligne la conclusion sur la préférence directeur malgré 3 signaux convergents ; E (`-`) minimise sans aligner totalement.
- `sjt_crit_s06` — PC2, Julien, étude UX biaisée 450 k€. Toutes bonnes. A (`--`) = dissimulation consciente des biais.
- `sjt_crit_s07` — PC2, Inès, bascule `PECULE_NEW` 96 %. A (`--`) écrase 132 KO concentrés sous un agrégat contractuel. Scénario exemplaire du rubric.
- `sjt_crit_s08` — PC2, Bastien, OCR fournisseur. E (`--`) explicite, A (`-`) passif. Discrimination parfaite step 3.
- `sjt_crit_s11` — PC2, Élodie, incident prod 1 %. E (`--`) = refus d'analyse assumé (« je prépare la com »). A (`-`) raccourci peu coûteux.
- `sjt_crit_s12` — PC2, Youssef, user story RGPD. A (`--`) accepte un livrable non-conforme connu. D/E discriminés sur saisine DPO pré vs post sprint.
- `sjt_crit_s13` — PC2, Margot, cahier des charges automatisation. A (`--`) refus actif de lire le rapport 2022 archivé.
- `sjt_crit_s14` — *déjà flaggé ci-dessus*.
- `sjt_crit_s16` — PC2, Théo, seuils alerte reporting. E (`--`) transfert explicite de responsabilité (« c'est son problème, pas le mien »).
- `sjt_crit_s17` — PC2, Florence, audit télétravail biaisé. A (`--`) laisse publier un chiffre méthodologiquement faux. D (`++`) vs E (`+`) : co-rédaction à quatre mains = step 4 relationnel qui termine le `++`.
- `sjt_crit_s18` — PC2, Mehdi, migration `PECULE_NEW`. C vs D bien discriminés (pas de flag malgré suspicion initiale).
- `sjt_crit_s19` — *déjà flaggé ci-dessus*.
- `sjt_crit_s21` — *déjà flaggé ci-dessus*.
- `sjt_crit_s22` — PC2, Tristan, choix outil backlog. E (`--`) « au placard » = verrouillage actif des alternatives.
- `sjt_crit_s23` — *déjà flaggé ci-dessus*.
- `sjt_crit_s24` — PC2, Joséphine, tableau de bord gestionnaires. A (`--`) psychologise les dissonances. D (`++`) sépare vue personnelle/manager = architecture + gouvernance.

### Batch (AGIL)

- `sjt_agil_s03` — AG2, Maxime, gel 6 semaines. A (`--`) renonce explicitement à occuper un temps exceptionnel.
- `sjt_agil_s04` — AG2, Noémie, changement format ONSS. OK.
- `sjt_agil_s06` — AG2, Salma, cadre IA. A (`--`) ment par omission + renonce au cadre POC BOSA disponible.
- `sjt_agil_s07` — AG2, Grégoire, pilote eIDAS. OK.
- `sjt_agil_s08` — AG2, Hélène, guide user stories. E (`--`) refuse changement + rejette responsabilité sur participants absents.
- `sjt_agil_s09` — AG2, Damien, passage relais Sylvie. A (`--`) se replie sur son périmètre + redirige vers collègues moins informés.
- `sjt_agil_s11` — AG2, Quentin, bêta MYONVA 17 % abandons. E (`--`) banalise un signal massif + qualifie l'enquête de « luxe ».
- `sjt_agil_s12` — AG2, Émilie, POC Power Apps. A (`--`) retourne le besoin utilisateur pour justifier le non-changement.
- `sjt_agil_s13` — AG2, Benoît, départ Léna. A (`--`) abandonne 18 mois au premier départ.
- `sjt_agil_s14` — AG2, Lucie, crise migration batch. OK.
- `sjt_agil_s16` — AG2, Sabrina, rétrospective agile. A (`--`) anti-rétrospective explicite (faux signal positif en rétro).
- `sjt_agil_s17` — AG2, Jérôme, obligation méthode. OK (note interne sur E).
- `sjt_agil_s18` — AG2, Anaïs, intranet RGAA. A (`--`) exclusion d'une collègue malvoyante identifiée = acceptation consciente.
- `sjt_agil_s19` — AG2, Pierre-Yves, plateforme Data-Hub. A (`--`) refus préventif sans investigation.
- `sjt_agil_s21` — AG2, Antoine, fusion d'équipes. A (`--`) prise de position publique d'un référent senior contre la fusion dès le premier contact — step 4 relationnel amplifie l'impact organisationnel.
- `sjt_agil_s22` — *déjà flaggé ci-dessus*.
- `sjt_agil_s23` — AG2, Charles, export data tardif. E (`--`) prépare explicitement un mensonge au comité = red-flag pur.
- `sjt_agil_s24` — AG2, Cécile, e-learning. A (`--`) abandonne son co-design + s'aligne sur la régression la plus coûteuse.

## Observations transversales

1. **Red-flag step 5 sous-exploité pour `--`**. Six réactions actuellement cotées `-` (et une `+/-`) auraient dû être verrouillées à `--` par step 5 (dissimulation consciente d'un élément identifié, couverture d'une non-conformité réglementaire/GDPR/légale). Le lot a tendance à réserver `--` aux cas où la dissimulation est *verbalisée* (« au placard », « il dramatise », « on dira qu'on n'avait pas les données »), et à sur-créditer les formulations douces (« globalement ça me va », « paragraphe prudent », « anonymisation par initiales »). Or §9 step 5 ne distingue pas sur la forme, seulement sur le fait de couvrir.

2. **Upgrade step 2 (urgence haute → ++/−−) inégalement appliqué**. Les explanations `--` citent souvent l'acceptation consciente mais rarement l'urgence de façon explicite (« diffusion demain », « mise en prod jeudi », « paiements 2025 »). L'urgence haute est donc utilisée comme critère implicite de hiérarchisation mais manque dans la rédaction — à renforcer.

3. **Une réaction `--` sans justification step 2/5 dans un contexte d'urgence basse** (`sjt_agil_s22` A). C'est le seul cas où un `--` n'est structurellement pas atteignable par le rubric (urgence basse, pas de red-flag). Le refus de veille reste un vrai défaut AG2 N2 mais relève de `-`.

4. **Step 3 (discrimination) parfaitement respecté**. Tous les scénarios utilisent le schéma complet Full 5 (--, -, +/-, +, ++), sans aucun ex-æquo. Le plafond §9 de 25 % d'égalités est très largement respecté (0 %). La hiérarchie `+` vs `++` est en général bien discriminée par richesse/complétude de l'action, même quand les deux réactions partent de la même idée (ex. `sjt_crit_s02` D vs E, `sjt_agil_s02` D vs E).

5. **Exception step 1↔4 (CO2/CL2) non testable dans le lot caché**. Aucun des 38 scénarios cachés n'a CO2 ou CL2 comme `competence_primary` (tous sont PC2 ou AG2). Les scénarios CO2/CL2 sont tous dans la liste active. L'inversion du rubric n'est donc pas un enjeu pour ce pass.

6. **Qualité globale**. Sur 190 réactions, 184 tiennent sous le rubric §9 tel quel, soit **97 %**. Les mismatches restants sont des ajustements de gradient (`-` ↔ `--`, `+/-` ↔ `-`) et non des erreurs de fond. La pédagogie des explanations existantes est solide ; le travail de regrade tient essentiellement à renforcer la citation explicite de step 2 (urgence) et step 5 (red-flag) dans 6 réécritures.
