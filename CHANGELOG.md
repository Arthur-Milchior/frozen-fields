# Changelog

All notable changes to [Frozen Fields](https://ankiweb.net/shared/info/1771074083) will be documented here. You can click on each release number to be directed to a detailed log of all code commits for that particular release. The download links will direct you to the GitHub release page, allowing you to manually install a release if you want.

If you enjoy Frozen Fields, please consider supporting my work on Patreon, or by buying me a cup of coffee :coffee::

<center><a href="https://patreon.com/glutanimate"><img src="https://glutanimate.com/logos/patreon_button.svg" height="48px"></a> <a href='https://ko-fi.com/X8X0L4YV' target='_blank'><img height='48px' style='border:0px;height:48px;margin-left:2em;' src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a></center>

&nbsp;

:heart: My heartfelt thanks goes out to everyone who has supported this add-on through their tips, contributions, or any other means (you know who you are!). All of this would not have been possible without you. Thank you for being awesome!

## [Unreleased]

### Fixed

- Fixed addition of line breaks in recent versions of Anki 2.1 (#11, thanks to z1lc for the report!)
- Fixed JS console errors (#7, thanks to ijgnd for the report!)

## [2.0.0] - 2018-02-25

### [Download](https://github.com/glutanimate/frozen-fields/releases/tag/v2.0.0)

This is the first public release of my fork of Tiago Barroso's *Frozen Fields* add-on. I would like to extend my heartfelt gratitude to all of what he has done for the Anki community over the years.

This update is meant to carry on his legacy by adding Anki 2.1 support, refactoring some parts of the codebase, and fixing a few smaller issues. All of this was made possible through the generous support of a fellow Anki user who would like to remain anonymous.

### Added

- Anki 2.1 compatibility
- Hotkey for toggling all fields (default: `Shift+F9`)
- Configurable hotkeys

### Changed

- Field toggles only appear when adding notes (having them available in the browser or while editing cards didn't make much sense)

### Fixed

-  Fix rare instances of snowflake icon being pasted into fields (thanks to [Dmitry Mikheev](https://github.com/ankitest/)!)


[Unreleased]: https://github.com/glutanimate/frozen-fields/compare/v2.0.0...HEAD

-----

The format of this file is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).