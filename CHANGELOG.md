# Changelog

Notable changes to this project are documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Breaking changes:

New features:

Bugfixes:

Other improvements:

## [v2.0.1](https://github.com/purescript-web/purescript-web-cssom/releases/tag/v2.0.1) - 2026-10-10

Other improvements:
- Migrated from Bower/Pulp to registry-backed Spago and updated PureScript, CI, and development tooling with Oxlint, Oxfmt, and purs-tidy (#16 by @thomashoneyman).

## [v2.0.0](https://github.com/purescript-web/purescript-web-cssom/releases/tag/v2.0.0) - 2022-04-28

Breaking changes:
- Migrate FFI to ES modules (#14 by @JordanMartinez)
- Update `CSSStyleDeclaration` functions to take `style` arg last (#12 by @theqp)

  This follows the convention of "the thing being operated on" occurs
  last in function that take multiple arguments.

New features:

Bugfixes:

Other improvements:

## [v1.0.0](https://github.com/purescript-web/purescript-web-cssom/releases/tag/v1.0.0) - 2021-02-26

- Initial release of the `web-cssom` library, compatible with PureScript 0.14
