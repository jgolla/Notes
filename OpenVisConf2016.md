# OpenVis Conference, April 24-26, 2016
* [Site](https://openvisconf.com/)
* Bocoup Youtube for old vids
* [Google Docs Notes](http://bit.ly/ovc-2016-notes)

## Introduction to D3.js (Workshop)
* [Slides & Notes](http://bit.ly/ovc-d3-workshop)
* [K Adam White](http://twitter.com/kadamwhite)
  * [GitHub](http://github.com/kadamwhite)
* [Bob Holt](http://twitter.com/bobholt)
  * [GitHub](http://github.com/bobholt)
* [blocks](http://bl.ocks.org) - Gallery
* [blocks explorer](http://bl.ocksplorer.org/) - Nicer front end
* d3 upgrade process is in progress (v4.0)
* [Learnjsdata.com](http://learnjsdata.com/)
* Selections
   * similiar to jQuery selectors
   * selectors return array of array, important for sizing
   * use .node() to get native HTML DOM node
   * .call(selection) as an iterator over all DOM elements
* Data Binding
  * Data joins, one to one mapping
  * Terminology
    * entering - new data, doesnt exist on page
    * updating - data already on the page
    * exiting - data removed from page
  * .data method for binding array data to selections
    * the function passed in determines uniqueness
* Scales
  * .extent takes in array and returns hi and low
  * can use this in the scale method
  * domain is input, range is output?
* SVG
* Axes
  * d3 can create, but we must position

## Seeing Machines Think
* Neural nets, based on the human brain
* Learn over time
* Red/White wine machine learning
  * only can determine if its be trained
* TensorFlow.org

## A Return to Machine Learning
* [Twitter]kcimc

## Drawing on <canvas> - how computers read pixels
* [Twitter]kosamari
* Using canvas, getImage putImage for performing image processing
* Creating fake instagram filters
* Can be slow in browser
  * web workers to push off expensive calcs
* toDataURL v toBlob to export
  * toDataURL is expensive to handle image in Base64, href length is capped
  * toBlob need to specify compression algo
* grafi.js

## How To Simulate The Universe, In 134 Easy Steps
* ncase.me/ovc2016
* Trends show what, but not why
* Systems thinking, the world is loopy, everything effects everything else
* Parable of the Polygons
* In a loopy world, there is no root cause, only in linear process
* You are not stuck in traffic, you are traffic
* Story telling about systems (tools)
  * Movies/Books/Lit
    * Book building stories
    * Breakfast of Champions
    * A visit from the goon squad
  * Causal loop diagram
  * Stock and Flow Models
    * bathtub, stuff flows in and stuff flows out
    * for simulations things go in and out
  * Probabiltiy Simulations
  * Agent-based modeling
    * Makes decisions based off others decisions
    * Parable of Polygon is agent-based

## Do you know Nothing when you see it?
* [Twitter]AmeliaMN
* Statical based determining if values are significant

## SVG Beyond Mere Shapes
* [Twitter]NadiehBremer
* VisualCinnamon.com
* Wanted ot create gradient legend
  * add linearGraient to defs
  * set x1, x2...
  * gradient is the bounding box, not necessarily the shape
  * add stops
  * can use style attr to reference gradient id
  * radialGradients
  * linearChorGradients
* Filters
  * Added to SVG defs
  * Set the filters style
  * using blur so show speed
  * gooey effect
* CSS mix-blend-mode

## Enhancing your maps and visualizations with WebGL GLSL Shaders
* [Twitter]patriciogv
* The book of shaders
* mapzen.com
* Used image compression to represent data

## Everything is Seasonal
* [Twitter]zanstrong
* patterns tthat repeat over known fixed periods of time
* when considering time series seasonality matters
* consider the seasonality of causal factors
* baby data, day of week, week of year, month hour of day
* monthly aggregation is a bad idea, unless the data is inherently monthly (rent check)
* aggregate to time periods that make sense to your data
* sometimes seasonality is the story
* estimate the impact of seasonality when doing causal analysis
* decomposing a time series with STL
* Seasonalities are different for differnt people in different places

## Building Data Visualizations for Product
* [Twitter]sxywu
* Use customer data as early as possible, fake it when necessary
* Don't pre-optimize
* Summed up on one of her last slides, need to look up TODO

## Animation, Pacing, and Exposition
* [Twitter]tonyhschu
* A visual representaton of Machine Learning
* Types of attention
  * Visual attention, guide the eye to the important thing
  * Short term memory
* ![Gain and drain attention](images/OpenVis2016/openvis1.jpg)
* Gain and drain attention
  * Surprise / Time
  * Delight / Decision
  * Order / Clutter
  * Coherence / Confusion
* "Graphic design is the use of space to control time" Barbara deWilde
* R2D3
* Click is a decision, scrolling is a continuation
* Animation
  * Motion is pre-attentive
* Pace
* !Matters Order
* Walkthrough on how ML decision trees are created
* Slow measured conveyance of ideas

## Informing Without Alienating
## The Charting Monster that Spawned from the Jaws of Defeat
## Everything we know about how humans interpret graphics
## Designing for Realtime Spacecraft Operations
## Reactive Building Blocks: Interactive Visualizations with Vega
## Tiny Tools
## The Visual Uncertainty Experience
## Untangling Tennis
## Our Planet Seen from Space
## Finding What to Read: Visual Text Analytics Tools and Techniques to Guide Investigation
## Designing Virtual Reality Data Visualizations
