# [NG Conf 2017](https://www.ng-conf.org)
* April 5th - 7th

# Wednesday April 5th, 2017

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
* Angular CLI
  * --dry-run, --skip-intstall
* ng eject
  * learning webpack
* [Demo Code](https://github.com/johnpapa/one-with-angular)

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
* NoopAnamations module, good for testing, calls callbacks without animations
* New stuff animate, query, animation builder, route animations
* [Slides](http://yom.nu/ng-conf-2017)

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

## Nrwl

## Thoughtful Component Design
* [JEREMY ELBOURN](https://twitter.com/jelbourn)
* MILES MALERBA
*

## Back from the past: A tale of helping others upgrade from Angular 1.x
* [SERGIO CRUZ](https://twitter.com/hashtagserg)
*

## ng-breather (break)

## Mischief Maker

## ng-STEAM

## The Memory Leak Brain Drain

## There and Back Again: a developer’s tale

## The Little Tool That Dreams Big

## ag-grid

## The Angular Compiler 4.0

## Reactive Programming with RxJS: A Beginner’s Perspective

## Wakanda

## How to Scratch an Itch

## ng-party
