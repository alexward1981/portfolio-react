# Technical Debt
[![Build Status](https://travis-ci.org/alexward1981/portfolio-react.svg?branch=master)](https://travis-ci.org/alexward1981/portfolio-react)
[![Dependency Status](https://gemnasium.com/alexward1981/portfolio-react.svg)](https://gemnasium.com/alexward1981/portfolio-react)

Any development tasks or optimisations which need to be made should be listed here.

**Note:** If there is a task/bug manager in place to cover this then this file will not be updated.

## Tasks:
1. Set up tests (jasmine and casperjs/spooky)

## Issues
1. Components seem to be loading data in multiple times. The issue is being tracked at http://stackoverflow.com/questions/36742775/getting-cannot-read-property-asmutable-of-undefined-error-even-though-the-pa/36744491#36744491
2. The errors seem to be causing code failures. Nothing past the header nav will load. In fact I can't even get a console.log() in the header itself to fire. This needs investigation.
