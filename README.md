# westdash

`westdash` is (currently just an idea for) a small/thin liberally licensed open source dashboard
framework built around web standards with a minimal set of dependencies. It is intended to be easily
embeddable into other web applications and used standalone.

`westdash` is intended to be vendor neutral similar in spirit to
[OpenTelemetry](https://opentelemetry.io/). Users can invest their time in learning one dashboard
system to query and visualize many backend systems. Vendors can invest their time in building out
customer-valued differentiation rather than yet another dashboard system. See below for [ideas on governance and funding model](#governance-and-funding-ideas).

It isn't yet clear whether the framework will focus on observability/monitoring use cases
or be a more general data analytics dashboard system.

## Principles

- User-centered and easy to use
- Open and transparent
- Embrace the power of web standards, e.g. use web components, HTML, Javascript, CSS (no big web frameworks)
- Vendor neutral
- Minimal runtime and devtime dependencies to simplify coding
  - Ideal: other than a modern web browser, the dev toolchain is optional
  - If used, the toolchain provides static types (e.g. JSDoc Typescript), type checking, and
    other quality and ergonomic tooling

## Features (probably)

- Uses CSS grid system for widget layout
- Adapter/translator for other dashboard systems
- Query server to proxy between browser and backend data storage and query engines
- Optionally, can statically generate a set of non-editable (but still interactive) dashboards if
  that's all that is needed (reason: simplify deployment and operations for some use cases)
- Users can create dashboards, widgets/charts, and custom pages in Javascript/Typescript or through
  configuration
- Backend system for storing config (configured dashboards, saved queries, etc.) and serving
  dashboards
- Data transformation utilities
- Data visualization utilities
- Optional use of Markdown, MermaidJS, and similar in dashboards (maybe just a type of widget?)

## Parts of the framework

### Westdash Components

- Fully embeddable web/custom components built in vanilla HTML/JS/CSS or Lit that can be dropped-in
  for visualizations and dashboards
- Built to complement/work well with [Shoelace](https://shoelace.style/) and/or [Component.kitchen Elix](https://component.kitchen/Elix). Shoelace is a major inspiration for these components.
- Provide components for multiple visualization libraries
- Fully embrace web standards
- Easy to wire up with reactivity
- Easy to do dashboard layouts
- Easy to do exploratory query layouts
- Easy to do notebook layouts
- Empower end users to assemble dashboards easily

### Westdash Query

- Server-side service that is basically a query proxy to observability/monitoring backends,
  databases, data analytics backends
- Handles authentication to the service(s) being queried
- Query translators should be modular and easy to express
- Do this either in a toolchain that compiles to WASM or in Typescript
  - Open question as to which runtime this will execute in

### Westdash App

Server-side service that provides users, authorization, control plane/administration,
sharing/collaboration, versioning, etc.

### Adapters (speculative)

#### Westdash OpenTelemetry

Components and interface that embrace the semantic conventions of OpenTelemetry.

#### Westdash Grafana

Adapter for using existing Grafana dashboard, plugin, and query configuration to drive Westdash
dashboards.

#### Westdash Kibana

Adapter for using existing Kibana dashboard, plugin, and query configuration to drive Westdash
dashboards.

#### Westdash DBT

Adapter for using DBT definitions to generate dashboards, queries, etc.

#### Westdash Metabase

Adapter for using Metabase dashboard and query configuration to drive Westdash dashboards

### Governance and funding ideas

- Vendors and users sponsor (example: [the DuckDB Foundation](https://duckdb.org/foundation/))
- Setup a company to offer enterprise-oriented functionality (multi-user, access control, commercial adapters, etc.)
  - Might compromise the vision of being vendor neutral
- Setup a consulting/support/development-oriented company
- Provide Bring Your Own Cloud (BYOC) and/or SaaS hosting
- Sell non-OSS licenses
