__server__
* the machine and code that handles requests and sends back a response

__examples of server side functions__
* visiting a url, being given htmlpage
_ visting API end-point, that parse URL parameters to provide selective JSONs
* clicking an invoices that provides a PDFF report
* image processing software that takes an image applies a filter then saves the new version
* Google providing results relevant to your searches on other sites

__client__
* whatever makes a request to the server, i.e. user's personal machine

__how client and server communicate with one another__
* using a series of understood communications defined by HTTP/HTTPs

__rack__
* stacked hardware server machines that handle all requests coming in from the browser

__where do servers live__
* in dedicated hardware intended to handle all requests and responses from clients

__servers during development__
* our personal computers will be able to simulate both the server and the client
* we will create a local server and then use our browser to interact with it

__building a server__
* creating a server equates to writing the code that handles what the server will do
* even though you pay for server-side hardware, you still need to create the code that goes inside
* This code handles things like:
    * Connections to database
    * Handling client side URL requests
    * Performing server-side processes
    * Authenticating user requests
    * Logging client requests
* _Like an empty box that we put things into to change how it behaves_
    * we will be adding code snippets and modules it give it powers to do stuff
    * LISTEN - listen to web requests coming in from browsers
    * PARSE - take a look at the URL andparse it to figure out what the user wants
    * ROUTE HANDLING - handle the route - run the code to get the user what they want
    * SEND - send back data - maybe HTML or JSON
    * recieve POSTS - special kinds of requests that carry data with them
    * server side logic

__what is Express?__
* web framework for node to make creating code for server much simpler
            
__route__
* a way to get to something on the server
* urls
* /saved is a route to the saved page

__heroku__
* paas - platform as a service
* allows deployment of a backend and serve your files
* handles your full stack app
* gives special url for your app



