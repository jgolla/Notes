# [HTML5DevConf](http://html5devconf.com/)

## Performance: How Fast is Fast Enough?
- [Daniel Austin](https://www.twitter.com/@daniel_b_austin)
- His book: The Definitive Guide to Web Perforamance, prerelease (http://oreilly.com)
- The MPPC Model of web perfromance
- Broken up into multiple sections, netowork connection, server duration, network transport, client processing
- User think time, Client processing is more than browser rendering, has to do with user processing
- Paper: The econonmic value of rapid response time, IBM research 1982
- You are a node on the internet!
- Whats your bandwidth? Sight represents about half the brains bandwidth
  - Tor Norretranders
- The NeoCortical Visual Stack
- 100 ms to recognize visually
- Understanding is not the same as seeing
- Takes about 200ms to engage reading parts of the brain
- The brain as a bottle neck on the web
- Hick-Hyman Law
  - Antipattern country drop down list
- Fitt's Law
  - Number of objects on a page, accuracy is directly related to the size of the object
- Fitt's Law and Mobile
  - size of UI objects limit accuracy
  - Are phones getting bigger to accomodate Fitt's law
  - Wearables
- [Human Bench Mark](http://www.humanbenchmark.com/tests/reactiontime)
- Compare your response time to your sites response time
- The Power Law of Practice
- The internet will never reach tv level performance, when was the las time you worried about your tvs performance
- Fast = the system is waiting on you, Slow = user are waiting on the system
- 100ms is getting close to the theoretial limit to what we can do
- It is fast enough when it takes the user longer to process then to deliver
- But, it needs to be fast for everyone, different part of the world has different response times
- Adding more stuff to the page will not make it faster. Optimize then add
- HTTP2 might not support web sockets, look up http2
- Overall good talk, interesting way at looking at performance and what fast is

## How to create a Native-like experience in the Mobile Web
- [Amit Zur](https://www.twitter.com/@amitzur)
- [Slides](http://mobileweb.jit.su)
- Native is optimize, but has huge code base, need code for each platform
- HTML is not optimized for the platform
- On mobile there is an expectaion for webapps to be like native counter parts
- Offline
  - Appcache
  - Article: Appcache is a douchebag
  - Appcache only has total invalidation, must redownload everything
  - Appcache as a splash screen
  - Service workers, replacement for appcache
  - Slow fonts
- Animations
  - Shoot for 60 FPS, 16ms of time to do work
  - Animate only on paint trigging properties with request animation frame
  - Hardware acceleration
  - Moving to hte GPU removes paints from the browser
  - CSS will-change property, opera article
- Touch and Keyboard
  - Touch, dragging and scrolling are the same interaction
  - No keyboard control, inconsistant
- Other disappointment
  - 300ms delay (click event delay)
  - orientation change/resize
  - Hard to test mobile, need device lab
- Ok talk. Not what I was expecting, but some interesting points

## The Future of App Building with WebGL
- [Siebrand Dijkstra](https://www.twitter.com/appmachine)
- Sales pitch, basically a waste of time

## React and Flux
- [Bill Fisher](https://www.twitter.com/@fisherwebdev)
- [Slides](https://speakerdeck.com/fisherwebdev/flux-react)
- Flux has unidirection data flow, action, dispatcher, store, view
- Actions and Action Creators
- The dispatcher is a registry of callbacks
  - Singleton
- The store
  - Singleton
  - can only get into the store through the dispatcher
  - nothing get can in, only getters, no setters
  - Jest, testing framework built on jasmine
- Views, react components
  - Optimized hits to the DOM using virtual DOM
  - Flux allows moving state out of react and into stores

## The Next Leap in JavaScript Performance
- [Moh Haghighat](https://www.twitter.com/@MohHghighat)
- asm.js
- One the rendering engine in browsers is taking advantage of multicore advances
- Parallel JS
- SIMD.js
- [CrossWalk](http://crosswalk-project.org)

## Scaling Selenium Testing at Yelp
- [Ken Struys](https://www.twitter.com/@kenstruys)
- Sandbox
  - Have code for sandboxing before running code
- Create fixtures
- Create flows
- Create assertions
- Write the test
- Run against PhantomJS for headless
- Composing tests of tiny functions, reusable test code
- Patterns
  - Selenium Components, APIs to Widgets to allow everyone to hit the component the same way, reuseable
  - Page Objects, API to Pages
- Why?
  - Unit tests are necessary, but not suffienct
  - Unacceptable to break key flows
- Emulate the user
  - Write tests as a QA engineer would, not a dev
- Avoid JS injection
  - Run tests like a user
- Docker Container for Firefox+selenium server
- Yelp
  - Learned to fix and avoid flaky test
  - 1k tests
  - 30m to run, parellized execution
- Flaky tests
  - understand flakes vs failures
  - marked as flaky
  - avoid bad features in selenium (js injection)
- [SauceLabs](http://saucelabs.com) for running tests
- Future
  - Appium
  - Continuous testing/alerting
- Surprising interesting

## Data Structures with Javascript
- [Rajesh Kumar](https://www.twitter.com/rajesht)
- Waste of time

## Well-Designed Development: Sass for Engineers
- [Smith Schwartz](https://www.twitter.com/@smithschwartz)
- Use one sass code base for multiple sites, with variable for making different sites look different
- Libsass
- Writing good sass
  - naming conventions, layouts, modules, sub-modules, module modifiers, statenames (.l-, and .m-)
  - order of properties, includes come first, alphabetize props, use vars to keep one source of truth, inline media queries, use comments especially on overidies
- refactor as you go
- Sassmiester
- Running design workshops at their company for engineers
- Design + Engineering paired programming
- [Article](http://saydaily.com/2014/09/css-at-say-media)

## Responsible Responsive
- [Jameson MacArthur](http://www.twitter.com/jamacart)
- lockerdome
- Article, FUN by Ben Frain
- You should be preprocessing your CSS, chris coyier
- SASS + Bourbon
- Atomic design by Brad Frost
- Using sass to incorporate multiple files into one style
- Mobile first
- 100 ms time mentioned again
- 300ms problem, solutions no zoom, fastclick
- [webpagetest](http://webpagetest.org)
- CSS Maintainance
  - delete code
  - consolidate selectors
  - convert to variables
- Grunt-sass for compiling sass to css
- HTML based style guide with live preview

## How Web Components will change CSS best practices
- [Philip Walton](https://www.twitter.com/@philwalton)
- CSS is hard because getting your rules to match the elements that you want with out them accidentally matching others
- A rules are global, makes for easy conflicts
- How to solve withou writing too much code
- Webcomponents solve both problems
- Custom elements, shadow dom, html imports
- New elements
  - template & content
- :host selector
- polymer-project.org and chromestatus.com are using webcomponents
- with platform.js you can use in all modern browsers, ie 10+
- dynamic parts go in light dom, static goes in shadow dom
- WC allow refactoring of CSS
- [GitHub](http://github.com/philipwalton)

## Scaling A/B testing with Node.js
- [Alex Liu](https://www.twitter.com/@stinkydofu)
- multiple variations accross a single test
- Using a self contained rule based system for loading partial templates
- learn by doing, just do it. multivariant testing is hard

## Theory and Practice of Functional Reactive Javascript
- [Pete Hodgson](https://www.twitter.com/@ph1)
- FRP represents variables as streams, rather than a snapshot in time
- bacon.js, RxJS, libs for FRP
- Basically databinding with a different library
- General purpose library, can be used UI, node, etc

## Holy Grail of portability - Develop Once, Deploy Anywhere
- [Piotr Sadowski](https://www.twitter.com/@Solpeo_engine)
- Waste of time

## different.js
- [Pete Hodgson](https://www.twitter.com/@ph1)
- Book: The pramatic programmer
- Worth seeing.
- How to expand your mind your mind and level up your skills by learning new things

## Lessons and Learnings: Moving to NodeJS
- [Stephen Woods](https://www.twitter.com/ysaw)
- Isomorphic javascript
- Things to do
  - have jshint rules
  - run your build locally (grunt watch)
- Dont do
  - assume your api will work
  - write tests "later", later doesnt ever come
- Formatjs internationalization library

## Using Typescript in a big open source project
- [David Catuhe](https://www.twitter.com/@deltakosh)
- Why TS
  - transparent for users, ts is a compiler, generates js
  - ts does strong type checking, good for open source
  - ts is open source
  - ts is very effienct with VS
  - ts simplifies code, can use ES6
    - handles this correctly
- Port JS to TS
  - from the ground up, ts is super set of js, start by adding types
- interfaces and mixins
- [TS](http://typescriptlang.org)

## Don't do _this at home: best practices for managing function scope
- [Jillian Munson](https://www.twitter.com/@maykaynvwd)
- No Show

## Building Hypermedia APIs in Javascript
- [Nicolas Grenie](https://www.twitter.com/picsoung)
- Hypermedia API
  - Discoverable API, can figure out what to do
  - Machine readable
  - Link based, browser experience in an API
- HATEOAS
- Fortune.js, node project for HATEOAS
- Fortune.js does not do authentication
- [APIBunny](http://apibunny.com)
- APIBunny is on github
- [APICodex](http://apicodex.3scale.net)

## HTML5 Mobile Game Development for Beginners - Beginner (Wednesday Oct 22)
- Pablo Farias Navarro
- [Email](mailto:pablofarias@zenva.com)
- Basics
  - Rendering in DOM, canvas, webgl, svg
  - DOM: html, css, js
  - DOM: updating is resource intensive
  - Canvas: requestAnimationFrame for animating rather than setTimeout
  - WebGL: uses GPU, not fully supported
  - WebGL: pixi.js, babylog.js, three.js
  - SVG: not fully supported
  - SVG: http://snapsvg.io
  - Audio, tag or web audio api
  - Storage, localstorage, indexdb, remote ajax
  - Gamepad HTML5 experimental feature
- Workflow and distribution
  - unreasonable scope = your worst enemy
  - 80/20 rule, be smart with your focus
  - MVP
  - Building in the cloud, intel xdk and phonegap service
- Quintus
  - Dont treat frameworks as blackbox, read the source
  - has classes, components and stages/scenes
  - Stage is the scenerio
  - init Q, do includes, do setup, enable controls, touch, and sound
- Phaser
  - built on pixi.js, which will use webgl (GPU) if available
- html5-vip coupon code veg vs zombie and phaser
- https://academy.zenva.com
- https://github.com/jgolla/TheGame/tree/HTML5Conf

## Roll your Own Responsive Design - Intermediate (Thursday Oct 23)
- [Twitter](http://twitter.com/jen4web)
- Switching from hey it works on my phone, to why doesnt it work on my phone
- RWD: flexig grid based, images that resize, media queries
- RWD vs Mobile site
  - RWD serves up the same content, mobile can serve up same or different
- Apps are another alternative
- Ethan Marcotte article
- Grid based layout
  - row column layout
  - allows multiple combinations
- Media queries
  - all responsive can be done in CSS
- Images that resize
- Border box - http://www.paulirish.com/2012/box-sizing-border-box-ftw/
- Fonts to ems, width to %, height is controled by content
- Flexbox

## AngularJS 101 - Intermediate (Friday Oct 24)
- [Sean Cannon](mailto:sean@presencepg.com)
- [Batarang AngularJS Chrome Plugin](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk/related?hl=en)
- If you see your app getting huge and complicated stop! Angular should be made up of multiple simple modules.
- Very modular, you can break out separate parts and open source them. You dont have to use all of Angular in order to make an Angular app
- Protractor - selenium webdriver for Angular
- Karma - Goes hand in hand with Jasmine
- [egghead.io](egghead.io) tutorials for Angular
- ngjQuery module for wrapping jQuery and working with it the angular way
- http-server -c-1 | grunt watch ... cmdline for running server and watching for any changes
- {{::mainCtrl.myvariable}} is one time binding, just released 1.3
- $digest, $apply should only be used outside ng framework, eg in a jQuery callback
  - apply propegates up, digest is smaller scope
- use rootcontroller to help handle any routing problems, catch-all on hte ng-app
- Inject $window for testability
- 16ms on your digest loop is the goal, profile using batarang
- Directives, dont use jQuery. DOM traversal is frowned upon
- Directives, for the scope, @ is literal value (looks like a string), = is two way binding (looks like 2 arrows pointing at each other), & is functional expression (looks like music treble, expressive)
- angular templates are not as good for mobile. It will make a request for each template, on mobile this could be bad.
  - it is good for lazy loading tho
- Transclusion, tells a directive that what is inside is important
- Services
  - Singletons
  - Can not have circular refs