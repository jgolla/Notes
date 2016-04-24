# OpenVis Conference, April 24-26, 2016
* [Site](https://openvisconf.com/)

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