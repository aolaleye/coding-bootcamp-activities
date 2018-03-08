
__ways to store data:__
server side or client side servers

__3 main ways to store data on the client:__
* local storage
* session storage
* cookies

__issues that can arise:__
_compatibility_
most browers support cookies but not local and session storage

_security_
cookies are transferred between browsers and could easily be picked up by a hacker

__difference between localStorage and sessionStorage__
sessionStorage only retains that user's information for as long as the browser is open
localStorage remains there even if the user closes and reopens the browser

__cookies__
* when a user requests a webpage from a server, the server requests that the browser store the information
* every time user returns to that website, it returns back to the server the cookie information that's been stored
* you wouldn't want to store sensitive information in a cookie
* you would usually need a server in order to use cookies
* web server asks for the cookie - localStorage and sessionStorage have nothing to do with the web server