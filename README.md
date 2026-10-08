<p align="center">
  <img src="assets/mark.svg" alt="Nihilism" width="72" height="72" />
</p>

# Nihilism

A private operating system for living with the absence of inherent meaning.

Not a meditation app. Not a coach. Not a quiz. Not a pump. Black square, white dot: almost nothing, on purpose.

Nihilism starts from the condition most products refuse to admit — **nothing has inherent meaning or value** — and gives you tools to notice that, invent something anyway, or refuse. In an era of AI abundance, financial nihilism, and narrative speed-runs, pretending optimization will save you is the actual joke.

This is a capital-light, AI-native product experiment. TestFlight / private beta first. The people who already feel the void; we are not converting the optimistic majority.

---

## One sentence

Most apps treat meaning as abundant. Nihilism treats its absence as the design constraint — and the feature.

---

## Table of contents

1. [Thesis](#thesis)
2. [What it is / is not](#what-it-is--is-not)
3. [Interface](#interface)
4. [The void](#the-void)
5. [Meaning map](#meaning-map)
6. [Narrative capital](#narrative-capital)
7. [Active nihilism](#active-nihilism)
8. [Social layer](#social-layer)
9. [Agent treaties](#agent-treaties)
10. [Introspection mode](#introspection-mode)
11. [Wallet and capital-light rails](#wallet-and-capital-light-rails)
12. [Architecture](#architecture)
13. [Repository](#repository)
14. [Quick start](#quick-start)
15. [Distribution](#distribution)
16. [Ethics](#ethics)
17. [Status](#status)

---

## Thesis

Three facts, none of them new, all of them louder now:

1. **Narrative is scarce.** Coordination via God, markets, and labor used to answer “why get up.” Agents answer a lot of the coordination. What’s left is story — memetic gravity or noise.
2. **Financial nihilism is rational, not edgy.** If assets speed-run narrative, “vibe buys” are just honest accounting. The app does not moralize that. It maps it.
3. **A human life still has to be lived.** When work-as-dignity wobbles, you either invent provisional values, attach to someone else’s story, or stare at the empty home screen. All three are valid. The product does not pick.

Nihilism is the notebook for that choice. Diagnostic, not therapeutic. You can leave it empty. That is a successful session.

---

## What it is / is not

| Is | Is not |
|----|--------|
| Sparse terminal / research notebook | Instagram with a philosophy skin |
| On-device + cloud agent cluster | A single chat bot that “gets you” |
| Meaning map from your actual traces | Astrology for calendar events |
| Treaties you version and expire | Permanent identity, streaks, badges |
| Optional tips / shared wallet | Speculative token as the product |
| Friends, silence as a first-class reaction | Gamified social graph |

Not meditation. Not therapy. Not productivity. Not pure financial nihilism as content. Closer to a **private OS** for the absence of inherent meaning.

---

## Interface

Dark only. Near-black. One accent or none. No confetti. Short, dry copy.

The home screen is a **void surface**. It stays empty until you deliberately put something on it. Captures can auto-expire. Nothing is promised as permanent.

The mark is the product: a white dot on a black square. Almost nothing. Deliberately.

---

## The void

A single persistent surface. Default state: blank.

You add:

- a note  
- a capture (text, voice, short video)  
- a treaty (provisional value)  
- a map refresh  

If you add nothing, the void holds. We do not fill it with prompts to “engage.” Empty is data.

Expiry timers are first-class. A thought that outlives its usefulness is just another story pretending to be a law.

---

## Meaning map

**Personal void analyzer.** Consent-gated. You feed — or allow passive observation of — calendar, notes, messages, spending, media.

An agent cluster (on-device where we can, cloud where we must) produces a living map of where you currently source “meaning”:

- status  
- money  
- relationships  
- ideology  
- novelty  
- work-as-identity  
- narrative you tell other people  
- narrative you tell yourself  

It flags empty loops and circular ones. It does **not** prescribe a better you. It does not care if you keep the loop. Diagnostic. Non-therapeutic. If a vendor copywriter wants “insights that spark joy,” they have the wrong repo.

Output is a graph you can version, export, or expire. The map is not the self. It is a computable object you can disagree with.

---

## Narrative capital

Stories you tell — public posts, private notes, conversations you choose to ingest — get scored for **memetic gravity** versus noise. Gravity is not virtue. Gravity is whether the story moves.

You can:

- draft  
- stress-test (an agent argues the story will die in a week)  
- collapse (kill a narrative on purpose)  
- publish to a small group or a wider net  

Optional public layer: others attach attention, a tip, or acknowledgment. That is narrative capitalism without pretending it’s enlightenment.

If all value is memetic, the honest product shows the meme’s mass. It does not sell you a more flattering mass.

---

## Active nihilism

**Treaties.** Provisional values you write, version, and can expire. Not a personality test. A document you can break.

Agents:

- **Adversary** — argues against your stated treaty using *your* past behavior (calendar vs. claimed values is usually enough).  
- **Sunny** — absurdist / sunny-nihilist reframe. Optional. Easy to turn off.  
- **Expiry** — timers on notes, captures, treaties. Default: things die.

You are allowed to refuse meaning. The UI will not punish that with a streak freeze.

---

## Social layer

Short, unpolished captures of moments where meaning collapsed or was invented. The same muscle as a jelly: fast, slightly embarrassing, true.

AI captions and titles are **deadpan**. Accurate, not cute. If the model editorializes hope, that is a bug.

Friends get one sparse action: a **dot**, a small tip, or silence. Silence is stored. We do not convert it to a metric that shames you.

This is the “usable with friends” filter. If it only works as a manifesto, it does not ship.

---

## Agent treaties

Personal agents can negotiate pairwise agreements with other users’ agents: data access, shared narratives, temporary alliances. No central standard required. Pairwise, revocable, logged.

This is AI-to-AI negotiation applied to personal ethics and attention — not a UN for chatbots.

Kill switches sit with the human. An agent that cannot be killed is a religion. We already have those.

---

## Introspection mode

Optional. Treats your model of self as a **computable object**: beliefs, treaties, map nodes, expired stories. You can run diffs. You can ask what would have to be true for a treaty to match last month’s spending.

This is not consciousness tourism. It is bookkeeping for people who already suspect the self is a process.

---

## Wallet and capital-light rails

Crypto is a **rail**, not the plot. Default is non-speculative: small tips, a shared wallet for the capture layer, optional early-community signaling. Capital-light. One-and-done seed if any. Profitability or a private tool — not mass App Store cosplay.

Agent wallet (ops / tips / shared pot) lives in env, not in a tweet:

```
NIHILISM_AGENT_WALLET=8eHXwXbK5XaBH2G3zYyMHpfivdmkN9MjjTNFNX7iC45f
```

See `.env.example`. Keys never go in git.

---

## Architecture

```
void surface
    → captures / notes / treaties (with expiry)
    → meaning map (consent traces)
    → narrative gravity
    → agent cluster (adversary, sunny, captioner, treaty broker)
    → optional public / friend layer (dot, tip, silence)
    → pairwise agent treaties
```

On-device first for traces you would not put in a group chat. Cloud for models that do not fit a phone. The cluster is several small agents, not one omniscient friend.

---

## Repository

```
apps/void/          home surface, dark UI copy
src/map/            meaning map
src/narrative/      gravity, draft, collapse
src/treaties/       personal + pairwise agent
src/social/         captures, deadpan caption, dot
src/expire/         timers
src/agents/         cluster, policy, kill switch
src/wallet/         capital-light tips
docs/               product papers
assets/mark.svg     black square, white dot
```

---

## Quick start

```bash
cp .env.example .env
npm install
npm test
npm run void
```

There is no onboarding carousel. The void is the onboarding.

---

## Distribution

Private beta / TestFlight among people who already live here. Not a growth loop. If an optional token appears, it is signaling for that network — not the app.

We will not A/B test whether emptiness converts.

---

## Ethics

- Consent for traces. No silent scrape of your life as a growth hack.  
- Diagnostic, not clinical. If you need a clinician, this is the wrong object.  
- Agents argue; they do not hold you hostage.  
- Expiry is respected. We do not “archive for engagement.”  
- The wallet is ops. It is not a personality.

---

## Status

Schema and product file. Void surface, map, narrative engine, treaties, social captures, agent cluster. Beta is a small group, not a launch video.

The white dot on the black square is the whole thing. Almost nothing. Deliberately.
