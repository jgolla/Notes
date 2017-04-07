# [NG Conf 2017](https://www.ng-conf.org)
* April 5th - 7th

# Wednesday, April 5th, 2017

## Keynote
* [STEPHEN FLUIN](https://twitter.com/stephenfluin)
* [IGOR MINAR](https://twitter.com/IgorMinar)
* [Meet Ups](https://www.meetup.com/Angular-Philly/)
* Library Spec for building and distrubing Angular libraries
* Material - Component Dev Kit
* CLI
* [Angular IDE by Webclipse](https://www.genuitec.com/products/angular-ide/)
* Language service for VSCode
* Ionic, [Josh Thomas](https://twitter.com/joshthoms1)
* Brian Martin, NBA, @bmarti44
  * dragula?
* Angular v4
  * faster load time/smaller builds, better compliation
  * new APIs, faster builds, better tooling
  * Experimental
     * Angular Universal, render on the server and send as static to client
     * PWA - progressive web apps; reliable (low/no connection), fast, engaging (push notifications)
* What's Next?
  * Semantic versioning, major.minor.patch
  * Time-based releases
    * Patches every week
    * Minor every month
    * Major 6 months
  * Long term support (LTS) for v4 through Oct 2018
  * v5 Themes
    * Simplicity - ahead of time complition by default
    * Speed and Size
    * Smooth updates

## I am One with Angular and Angular is One with Me
* [JOHN PAPA](https://twitter.com/John_Papa)
* [Demo Code](https://github.com/johnpapa/one-with-angular)
* Angular CLI
  * --dry-run, --skip-intstall
* ng eject
  * learning webpack

## Mad science with the Angular Compiler
* [MINKO GECHEV](https://twitter.com/mgechev)
* [Codelyzer](https://github.com/mgechev/codelyzer) for verifying ng code follows style guide
* [ngmigrate](https://github.com/mgechev/ngmigrate) for smoother updates from ng2 to ng4
* Visual learning of large code base
  * [ngast](https://github.com/mgechev/ngast)
  * [ngrev](https://github.com/mgechev/ngrev) visualizer
  * [ngworld](https://github.com/mgechev/ngworld) 3d visualizer

## Creating VR Experiences with Angular and WebGL
* [AUSTIN MCDANIEL](https://twitter.com/amcdnl)
* Web VR
* A frame, markup like definition of WebGL scene
* three.js has built in vr renderer

## Module vs Module
* [DEBORAH KURATA](https://twitter.com/DeborahKurata)
* ES2015 modules vs Angular Modules
* ES2015 module is a code file, export or import something, micro
* Angular Modules, macro, cohesive blocks of functionaliy
  * @NgModule decorator
* CommonModule is pulled in to almost every module, ng-if, etc
* Can create a SharedModule for importing these common modules, along with custom modules
* Preparing for lazy loading
  * use feature modules
  * group routes under a single parent
  * Do not import the module into another module, defeats the purpose of lazy loading

## Embrace Component Tranquility
* [JUSTIN SCHWARTZENBERGER](https://twitter.com/schwarty)
* Component container tax, creating container elements in every component
  * could just use use attribute component on the selector
* The tree coupling tax
  * Decision components
  * services, observables, redux in combination help solve

## Animations in Angular 4.0.0
* [MATIAS NIEMELA](https://twitter.com/yearofmoo)
* [Slides](http://yom.nu/ng-conf-2017)
* NoopAnamations module, good for testing, calls callbacks without animations
* New stuff animate, query, animation builder, route animations

## Keeping the Sand Out of Your Eyes: No Sandbox, No Problem
* [TIM EHAT](https://twitter.com/tim_ehat)
* Injection - the potential execution of code on your stuff is bad
  * Your app is part of the ecosystem, so injection matters
* Angular Expessions {{ 1 + 1 }}
* Expression Sandbox gone @ Angular 1.6
  * Was there to help devs do the right thing, not for security
  * The problem is allowing users to add stuff to your template
  * Ryan Hanson [Plunkr exploit](https://royaljay.com/security/angular-expression-injections/)
* Stop mixing server and client template binding or user ngNonBindable
* Don't pass user content to any of the following [Post](http://angularjs.blogspot.com/2016/09/angular-16-expression-sandbox-removal.html)
* Bootstrap angular where you need it
* User content can show up in unexpected places (web api posts)

## Thoughtful Component Design
* [JEREMY ELBOURN](https://twitter.com/jelbourn)
* [MILES MALERBA](https://twitter.com/milesmalerba)
* [Slides](http://goo.gl/TvRLlu)
* [Angular Material](https://material.angularjs.org/latest/)
* Using md-* attributes to keep templates/html clean
  * Helps screen readers as well
* DOM Interaction
  * User code -> Angular -> DOM
  * There are cases for user code -> DOM
    * Measuring, sizing, spacing
* Angular Zone
  * Angular's way of knowing everything that is happening with your app, even async
  * Drives when Angular does change detection
  * ngZone.runOutsideAngular(() => { ... })
    * requestAnimationFrame for custom animations in code
    * direct DOM minipulations

## Back from the past: A tale of helping others upgrade from Angular 1.x
* [SERGIO CRUZ](https://twitter.com/hashtagserg)
* Getting started with Angular is ot an Angular issues, it is a modering JS issues
* Client side onboarding has become much more difficult
* Upgrade Issues
  * Mixing front and back end
  * Coffee script
  * Bower and Grunt
* Pain Points
  * Time and proirity
  * Business incentive, what does the business get out of it
  * Team Proficiency, didnt want to learn Angular from scratch again
  * 3rd party libs
  * Tooling
* Steps we can take
  * Use component based architecture
  * Write full SPAs
  * Use NPM
  * Bring in Webpack
  * Use TypeScript

## ng-STEAM
* [JOE SKEEN](https://twitter.com/joeskeenjr)
* STEM
* [https://studio.code.org](https://studio.code.org)

## The Memory Leak Brain Drain
* [JON BOYD](https://twitter.com/biznasapps)
* Chrome dev tools
  * Timeline view to find when, what and how
  * Allocation Timeline
  * Heap snapshots
* What is causing the leak?
* Test like a real user, long running tabs
* Remove code
* Build test app if you can't remove

## There and Back Again: a developer’s tale
* [JACOB TURNER](https://twitter.com/JIsraelTurner)
* Skills > Tools
* Practice over language

## The Little Tool That Dreams Big
* [HANS LARSEN](https://twitter.com/hanslatwork)
* CLI Team
* Dev mode -> Lazy route -> typescript -> bundling -> browser
* Prod mode -> Code gen -> Lazy route -> typescript -> bundling -> browser
* Lazy Routes
  * Looks for RouterModule and grabs loadChildren
  * Bundles eager and lazy 0.bundle.js and 1.bundle.js respectively
* Refactoring Code
  * For JIT, change template and style loading to require() calls that webpack understand
  * AOT compiling, removes decorators, adds static ctorParameters for dependency injection (services)
* Bootstrapping
  * Refactors from JIT adding to App to a factory module
* ng eject
  * For when you have out grown the CLI
  * Generates webpack config
  * ng eject --aot
* CLI 1.0.0 final released
* CLI 1.x
  * Size - reducing bundle size 20%
  * JIT vs AOT - so can run AOT in dev
  * Error messaging
* CLI 2.0?
  * Plugins
  * Libraries that can be reused by other tools
  * Custom templates, builds, test frameworks
  * Same small interface

## The Angular Compiler 4.0
* [TOBIAS BOSCH](https://twitter.com/tbosch1009)
* Compiler updates 2 to 4
* AST - Abstract syntax tree
* Whats next?
  * AOT by default
  * Watch mode --watch
  * Error messages
  * Type checking in templates
  * More flexible metadata
  * Remove .ngfactory.ts files

## Reactive Programming with RxJS: A Beginner’s Perspective
* [BEN LESH](https://twitter.com/BenLesh)
* [TRACY LEE](https://twitter.com/ladyleet)
* There are many ways to create observables, all use the constructor under the covers
  * Observeable of and from are useful helper functions
* Include just what you need from rxjs, import { Subject } from 'rxjs/Subject';
* [Docs](http://reactivex.io/rxjs/) have notes on how to choose the right operators
* switchMap, share operator
* Web Speech API
* GitHub Repo from Demo

## How to Scratch an Itch
* [JUSTIN SEARLS](https://twitter.com/searls)
* Creativity talk (funny)
* [td](http://testdouble.com)
* [testdoubles.js](https://www.npmjs.com/package/testdouble)
* Emoruby, built for fun

# Thursday, April 6th, 2017

## RxJS: The Good Parts
* 10:00 am - 10:20 am Grand Ballroom B
* [CHRISTOPHER GOSSELIN](https://twitter.com/ConcertCoder)
* [DANIEL FIGUEIREDO CAETANO](https://twitter.com/danfigueiredoc)
* [Slides](https://github.com/danielfigueiredo/rxjs-goodparts)
* Common Operators
  * Creating .of and .from
  * filter, map, reduce, take (same as array methods)
  * debounce, throttle
  * combining observables, switchMap, mergemMap, zip, combineLatest
  * utils: .toArray, share
  * errors: retry, catch, onErrorResumeNext, finally (always called vs complete)
* Performance RxJS vs Array
  * Benchmarking shows array ops slower then RxJS
  * Funnel idea, each RxJS is done for each number once. Array is iterated over each time.

## Turbocharge Your Angular Testing Workflow
* VICTOR MEJIA
* [Slides](https://github.com/victormejia/ngconf2017-test-demo)
* Wallaby.js - live updates of testing during development
* Arrange tests, mock services, enforce coverage thresholds
* husky for enforcing pre-commit and pre-push npm scripts

## Diving into TypeScript
* 10:30 am - 11:30 am Grand Ballroom B
* [DAN WAHLIN](https://twitter.com/DanWahlin)
* [JOHN PAPA](https://twitter.com/John_Papa)
* [Slides](https://codewithdan.me/ts-es2015-in60)
* [Papa Website](https://johnpapa.net)
* [Wahlin Website](https://blog.codewithdan.com)
* tsc - sourceMap for debugging ts
* Demo - [typescript playground](https://www.typescript.org/play)
* public keyword in constructor makes default property on the class (can use private too)
* tsc doesn't generate any JavaScript for Interface

## Docker: What Every Angular Developer Should Know About It!
* 11:30 am - 12:30 pm Grand Ballroom B
* [DAN WAHLIN](https://twitter.com/DanWahlin)
* [Slides](https://codewithdan.me/angular-docker)
* nginx to host ng app
* Docker
  * simplify building, shipping, running apps
  * provides shipping container system for code
  * runs on linux or windows server
* Images and Containers
  * [Docker Hub](https://hub.docker.com)
  * Container is the run time version of the image; image is the blueprint
* Containers are not VMs
  * Not running full blown Guest OSes in the the container
* Docker CE (free version)
* Getting Started
  * docker pull nginx:alipine
  * docker run -d -p 8080:80 nginx:alpine
  * docker ps -a
  * docker stop c2
  * docker rm c2
* Angular
  * ng new project_name
  * ng build // create dist folder with AoT
  * docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx:alpine
* docker build with docker file to create a custom image
* docker compose to orchestrate multiple images, rather than docker rux X times

## From Inactive to Reactive with ngrx
* 1:00 pm - 2:00 pm Grand Ballroom B
* [BRANDON ROBERTS](https://twitter.com/brandontroberts)
* [MIKE RYAN](https://twitter.com/MikeRyan52)
* [Code](https://github.com/CodeSequence/ngrx-workshop)
* ngrx Effects - beware of side effects HTTP, timer, etc
  * ofType operator
  * wraps long running side effect operations
  * BookEffects from demo
  * removes responsiblity from the component
* Improve change detection performance
  * changed detection strategy on push
* ngrx store-devtools
  * interacts with redux devtools extension
  * dont want this on production, performance hit, instrumentOnlyWithExtension

## DIY ANGULAR COMPILER
* 2:00 pm - 4:00 pm Grand Ballroom C
* [URI SHAKED](https://twitter.com/UriShaked)
* [Slides](https://goo.gl/6qlZIY)
* Shrink for speed, inside the bundle, the ng4 compiler
* [source-map-explorer](https://www.npmjs.com/package/source-map-explorer) shows relative percentages of modules that make up the app
* ng build -prod --sourcemaps
  * 3G download went from 10+s to 2s
* Remove Forms and HTTP module (not used in this case)
* Compiler converts HTML template to optimized TypeScript code
  * Helps devs with errors/line numbers
  * Tooling - Language services (autocomplete for templates)
  * Predictability (abstracts out HTML rendering difference) and case-sensivity (browser always shows in upper case, disregards the developers intent)
  * server-side rendering - universal
* package.json, add script "compile": "ngc"
* app.component.ngfactory.ts - compiled version of app.component.html
* app.component.css.shim.ngstyle.ts - compiles CSS to TS with specific selector
  * Simulated shadow DOM
* [Source](./ngconf-demo/)
* Know your bundles; know what you are shipping

## Automatic Progressive Web Apps using the Angular Mobile Toolkit
* 4:00 pm - 4:20 pm Grand Ballroom A/D
* [MAXIM SALNIKOV](https://twitter.com/webmaxru)
* [Slides](http://slides.com/webmax/pwa-ng-conf#/)
* 10 Characteristics
  * Connectivity independent, service worker API
  * App shell architecture (offline experience)
  * Re-engagable, Push API and Notifications API
* [Mobile Toolkit](https://mobile.angular.io/)
* NPM Packages
  * @angular/app-shell
  * @angular/service-worker
    * Angular Service worker (ngsw)
    * /bundles, /build, /companion, /worker & /plugins
    * only works in prod, ng build --prod
    * ngsw-manifest.json - static content caching

## The Memory Leak Brain Drain – Workshop
* 4:30 pm - 5:30 pm Grand Ballroom B
* [JON BOYD](https://github.com/unbreakabler)
* [Slides](http://www.slideshare.net/biznasapps/ngconf2017-memory-leak-brain-drain-1-hour-talk)
* [Talk](https://github.com/Unbreakabler/ng-conf-memory-leaks)
* Memory bloat, Frequent GC, Memory Leaks
* No the user, how long are they using the app, how fast is it leaking
* Steps to find a leak
  * Timeline tool - start recording, run GC (trash can), do the app thing, GC again
    * memory graph
    * use incongito mode to prevent other extensions from interfering
    * start of the graph should be roughly equal to the end of the graph, no leak
* Each browser implements GC slightly different
  * May have to use a different browser to find a leak
  * Two GC cycle, minor and major, young generation and old generation
    * Minor is fast, mark and sweep
    * Major is slow
* Single threaded browser makes GC super important (jankiness)
* Likely culprits
  * detached DOM trees
  * long lived observables (always unsubscribe)
  * Console API - should be turned off in production
  * Componets that behave like leaks - unbounded list
* Normal use or memory leak
  * Profiles:
    * allocaiton timeline
      * blue bars shows unfreed memory
    * heap snapshots
      * take a snapshot, do the thing, take a snapshot
      * compare between snapshots

## Step by Step: Improving Startup Performance with Lazy Loading in Angular
* 5:30 pm - 6:00 pm Grand Ballroom A/D
* [MANFRED STEYER](https://twitter.com/ManfredSteyer)
* [Slides](https://speakerdeck.com/manfredsteyer/improving-start-up-performance-with-lazy-loading-in-angular-3)
* [Samples](https://github.com/manfredsteyer/lazy-loading-ng-conf)
* Lazy Loading
* App Module -> Feature Modules 1..n -> Shared Modules 1..n
* loadChildren in Routes
* Angular CLI helps the heavy bundling
* Lazy loading just postpones the work, but better start up performance, slight delay on run time
* Preloading helps with the delay
  * Modules that will likely to be needed are loaded imediately after the startup
  * register preloading strategy
* For shared modules, can use shared service, one with providers and one without
  * forRoot pattern

# Friday, April 7th, 2017

## Keynote Day 3
* [BRAD GREEN](https://twitter.com/bradlygreen)
* [ROB WORMALD](https://twitter.com/robwormald)

## Angular Router Authentication & Authorization – REAL LIVE LIVE LIVE LIVE LIVE DEMO
* [SHAI REZNIK](https://twitter.com/hirez_io)

## Upgrading Enterprise Angular Applications
* [VICTOR SAVKIN](https://twitter.com/victorsavkin)

## Building EmotiNg: The Real-Time Cross-Platform Service You’ve Always Wanted 👌
* [JEN LOOPER](https://twitter.com/jenlooper)
* [TARA MANICSIC](https://twitter.com/Tzmanics)
* [TJ VANTOLL](https://twitter.com/tjvantoll)

## Using the Angular Template Language Service
* [CHUCK JAZDZEWSKI](https://twitter.com/chuckjaz)

## Angular Form Validation
* [KARA ERICKSON](https://twitter.com/karaforthewin)

## Breaking The Eyes
* [URI SHAKED](https://twitter.com/UriShaked)

## Super TypeScript II Turbo – FP Remix
* [SEAN MAY](https://twitter.com/seanjmay)

## Reducing package size and complexity with NgModule
* JAMES DANIELS

## Addicted to AngularJS?
* [PETE BACON DARWIN](https://twitter.com/petebd)
* [GEORGE KALPAKAS](https://twitter.com/gkalpakas)

## Angular Pre-Rendering for SEO, Speed, and Happy Users
* [JEFF CROSS](https://twitter.com/jeffbcross)

## Giving Bootstrap the Boot
* [ALYSSA NICOLL](https://twitter.com/AlyssaNicoll)

## Packaging Angular
* [JASON ADEN]()

## Do More with Less
* [DOGUHAN ULUCA](https://twitter.com/duluca)

## Create and Attend Meetups
* [KEN SNYDER](https://twitter.com/kencoder)

## ngGirls Just Want to Have Fun
* [SHMUELA JACOBS](https://twitter.com/ShmuelaJ)

## Firebase and Google Cloud Functions: Serverless Peanut Butter and Jelly
* [BRET MCGOWEN](https://twitter.com/bretmcg)

## Best Practices
* [STEPHEN FLUIN](https://twitter.com/stephenfluin)