__Why React?__
* often times, there are sections of our UIs that we want to use over and over again
* provides tools to build reusable components

__React is Declarative__
* our program describes the result we are trying to achieve - as opposed to _imperative_ - which means we describe the process and steps we need to get to our result
* most of the javascript we would write would be imperative, whereas HTML is declarative

__JavaScript Data Model__
* Arrays and Objects describing our data
* the biggest challenge is syncing our JS Data Model with out DOM UI

__Virtual DOM__
* describing our application entirely within JS files - this includes our application logic, our data, and our markup
* a React component will create a representation of its markup in javascript using basic javascript data types - like objects, arrays, and strings --> this is called the __Virtual DOM__ in React
* when React renders our code to the real DOM, it will translate our virtual DOM elements into real DOM elements on the page

React.createElement('a', {href:"http://teamtreehouse.com"}, "Treehouse");
* the createElement function takes 3 arguments:
    1. a string - which is the elements name
    2. an object - describing the keys and values describing the attributes of our element
    3. the children of our element
* the result would be:
<a href:"http://teamtreehouse.com">Treehouse</a>

__JSX__
* an extension to the JavaScript language that allows us to use an XML style syntax to build our React.createElement calls
__*this means instead of writing this:*__
    var myLink = React.createElement('a', {href:"http://teamtreehouse.com"}, "Treehouse");
__*we can write this:*__
    var myLink = (
        <a href="https://teamtreehouse.com">
        Treehouse
        </a>
    )    
* we can translate a JSX tag into a React.createElement call that the browser can execute

__Babel__
* translates JSX syntax to javascript

__Decomposing__
* breaking code into smaller components

__Stateless Functional Component__
* a component defined as a function
* it takes only props as an argument and returns a virtual DOM

__Component Class__
* a component definition that can include things like state, helper methods and other advanced hooks into the page's DOM

__State__
* data in our application that can change
* a piece of data that changes over time
* There are different types of state:
    * __Application State:__
        * the main state we think about
        * it's usually the data our application is built to display and manipulate
        * _it should be managed as high up in the application as possible_
    * __Componenent State:__
        * the state that a component might rely on to function - but we don't think about as being central to our application
        * usually not shared or visual outside of the component - and is simply a state that is required for a component to do its job

__How to run:__
_in command line:_
    --> create-react-app <name-of-project>
    --> cd <name-of-project>
    --> yarn start (starts app in development mode)

__props__
* function arguments that we can pass into components
* parents give the value of props

__3 phases a function goes through__
2. person hands us information
3. returns data

__Ternary Expression__
    if (isCool) {result = "Yes he's cool."} else {result = "Nice try, not cool."}
    
    _is the same as_

    result = isCool ? "Yes he's cool." : "Nice try, not cool.";

