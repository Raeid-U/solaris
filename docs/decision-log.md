# Decision Log

This file records durable project decisions. Add a new entry whenever a modelling, architecture, documentation, naming, or scope decision would matter to a future contributor or agent.

## Template

```md
## YYYY-MM-DD: Decision Title

Status: proposed | accepted | superseded

Decision:

Context:

Alternatives Considered:

Consequences:

Follow-up:
```

## 2026-10-05: Treat Solaris as an Umbrella Project

Status: accepted

Decision:

Solaris refers to the full Islamic astronomy/timekeeping project, not merely an Express API or JavaScript package.

Context:

The project includes research, whitepapers, method profiles, validation, a JavaScript library, R bindings, a hosted API, and a Docker image.

Consequences:

- Documentation should lead the repo structure.
- The API is a product surface over the core engine, not the central model.
- Future implementation should separate core calculation from delivery mechanisms.

Follow-up:

- Create a package architecture proposal before rewriting code.

## 2026-10-05: Separate Astronomy From Islamic Method Selection

Status: accepted

Decision:

The project must distinguish raw astronomical computation from Islamic method mapping, institutional conventions, profile parameters, offsets, and final published outputs.

Context:

Prayer times and Islamic dates involve observable celestial phenomena, juristic interpretation, institutional convention, and practical safety policies.

Consequences:

- Code should avoid hardcoding one method as universal truth.
- Outputs must include metadata.
- Whitepaper sections should use the chain: religious trigger -> observable phenomenon -> astronomical proxy -> tunable parameter -> calculated output.

Follow-up:

- Implement result metadata requirements in the first engine prototype.

## 2026-10-05: Use Explicit Timezone Inputs With Optional Lookup

Status: accepted

Decision:

Latitude and longitude alone should not be treated as sufficient to determine civil time. The engine should accept an explicit IANA timezone, with optional timezone lookup through a documented provider.

Context:

Longitude can approximate solar offset, but civil time depends on political timezone boundaries, daylight saving time, and historical timezone data.

Consequences:

- API and library inputs should prefer explicit timezone IDs.
- If lookup is used, output metadata must disclose the provider and data version.

Follow-up:

- Evaluate timezone lookup libraries/providers during implementation planning.

## 2026-10-05: Create Agent Timeline Memory

Status: accepted

Decision:

Create `.agents/skills/timeline` as a mutable project-memory area for future agents.

Context:

The project will involve long-running research and implementation across multiple sessions. Future agents need a concise place to see project state, decisions, open questions, and next steps.

Consequences:

- Agents should read `.agents/skills/timeline/README.md` before substantive work.
- Agents should update timeline files after meaningful changes.
- This is project memory, not an executable plugin or Codex runtime skill.

Follow-up:

- Keep the timeline concise enough that it remains useful.

## 2026-10-05: Create Research Wiki as Assertion Cache

Status: accepted

Decision:

Create `knowledge/` as a lightweight research wiki and `.agents/skills/research-wiki` as agent-facing operating instructions for maintaining it.

Context:

Solaris will depend on papers, almanacs, institutional methods, scholarly input, validation datasets, and implementation decisions. Future agents need a durable place to find source-backed assertions without repeatedly rereading every source from scratch.

Consequences:

- Research should flow from original source to source note, concept page, assertion page, and then implementation or whitepaper reference.
- The wiki is subordinate to primary sources.
- Agents should consult the wiki before web-searching or implementing source-dependent formulas.
- Full copyrighted sources should not be pasted into the repo by default.

Follow-up:

- Ingest the first secular sources one at a time, starting with NOAA, NREL SPA, Mohamoud 2017, and horizon/refraction materials.
