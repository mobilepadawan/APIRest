# AJAX and API REST PROJECTS

## SUMMARY
- [TRAILERFLIX](https://github.com/mobilepadawan/APIRest/blob/master/README.md#trailerflix)
- [TRAILERFLIX 2021 (update)](https://github.com/mobilepadawan/APIRest/blob/master/README.md#trailerflix-2021-update)
- [FRAMEWORKS](https://github.com/mobilepadawan/APIRest/blob/master/README.md#frameworks)
  - [CSS](https://github.com/mobilepadawan/APIRest/blob/master/README.md#css)
  - [JS](https://github.com/mobilepadawan/APIRest/blob/master/README.md#js)
  - [DB for MOVIES & SERIES](https://github.com/mobilepadawan/APIRest/blob/master/README.md#db-for-movies--series)
- - [SCREENSHOTS](https://github.com/mobilepadawan/APIRest/blob/master/README.md#screenshots)
- [CODERBOOK](https://github.com/mobilepadawan/APIRest/blob/master/README.md#coderbook)
- [FRAMEWORKS](https://github.com/mobilepadawan/APIRest/blob/master/README.md#frameworks-1)
  - [CSS](https://github.com/mobilepadawan/APIRest/blob/master/README.md#css-1)
  - [JS](https://github.com/mobilepadawan/APIRest/blob/master/README.md#js-1)
  - [SCREENSHOTS](https://github.com/mobilepadawan/APIRest/blob/master/README.md#screenshots-1)
- [Credits and Copyrights](https://github.com/mobilepadawan/APIRest/blob/master/README.md#credits-and-copyrights)


I have two projects on this respository, both using AJAX() to query and show data on screen.
* Ajax - TrailerFlix (_a kind of video and series streaming platform_)
* coderbook (_a kind of social network search engine._)



## TRAILERFLIX
This project was born as an **Ajax Project**, emulating a video streaming platform.
As seen in the common video streaming platforms, but limited to trailer's watching __;)__.

All the trailers available are dinamically linked from Youtube (_most of them are coming from the official YT channels_).


- - - -
## TRAILERFLIX 2021 (update)
This version includes an improvement into the JSON file. A field 'busqueda' was added to get a better and unique searching field. I also added an associated searching function(). It works fine, since the first  shoot! <3
- - - -


### FRAMEWORKS
I am using two simple frameworks:

#### CSS
Materialize CSS is integrated for solving the UI. I use it locally.

#### JS
I also added __JQuery 3.5.1__ for basic animations on the HTML documents and __AJAX()__ to get and show on screen the movies and series information.


### DB for MOVIES & SERIES
I am taking the information of movies and series from a local JSON file. The cover images were taken from the Internet. The image sizing was normalized by me, and every block of text information on the JSON file was written for me. Some things are invented. Other things are real and maybe, a couple of them, were taken from Wikipedia, IMDB or a similar website.

## Update 2021-04-20 (searching bar)
In the added searching bar and its code logic, I'm giving to the user the possibility to search any movie or series typing any parameter. The topics included at the 'busqueda' field are:
- Title
- Actors
- Category

In addition to this parameters, in some cases we have the possibility to search using another key parameters, such as title in another language or any other reference to the movie or series (I.E.: Avangers, Black Panther and Black Widow, gives you the possibility to do this searchi directly using 'Marvel').

The main idea for the searching function was create this topic bar with multiple parameters fields to search, but I tried to avoid a nested searching applying a first searching function over the title, with the results apply another searching function over the synophis... (and over and over and over in the rest of fields).

You'll have some screenshots to the end of the section.

### Next updates
I'm thinking to apply a loading structure sliced the content into some cathegories or maybe I'll create a navigation bar with predefined cathegories to filter. I don't know, I don't have a date or any urgency for that. We'll see.

- - - -

### SCREENSHOTS
These are some screenshots of this Web App, showing the different screens and the correct behavior for the mobile-first paradigm. 

![Content loading animation](https://github.com/mobilepadawan/APIRest/blob/master/Readme.md%23images/screenshots/vertical_loading.jpg?raw=true)

![Content navigation](https://github.com/mobilepadawan/APIRest/blob/master/Readme.md%23images/screenshots/vertical_navigation.jpg?raw=true)

![Content detail](https://github.com/mobilepadawan/APIRest/blob/master/Readme.md%23images/screenshots/vertical_detail.jpg?raw=true)

![Content Responsive](https://github.com/mobilepadawan/APIRest/blob/master/Readme.md%23images/screenshots/horizontal_navigation.jpg?raw=true)

#### Searching Bar in action
![Searching bar button on top of the screen](https://github.com/mobilepadawan/APIRest/blob/master/Readme.md%23images/Captura%20de%20Pantalla%202021-04-20%20a%20la(s)%2008.50.23.png?raw=true)

![Showing the searching bar textbox](https://github.com/mobilepadawan/APIRest/blob/master/Readme.md%23images/Captura%20de%20Pantalla%202021-04-20%20a%20la(s)%2008.50.48.png?raw=true)

![Results of a simple searching topic typed](https://github.com/mobilepadawan/APIRest/blob/master/Readme.md%23images/Captura%20de%20Pantalla%202021-04-20%20a%20la(s)%2008.51.36.png?raw=true)

![Another searching with multiple results](https://github.com/mobilepadawan/APIRest/blob/master/Readme.md%23images/Captura%20de%20Pantalla%202021-04-20%20a%20la(s)%2008.52.27.png?raw=true)

![And a search over a hidden topic into the 'busqueda' field](https://github.com/mobilepadawan/APIRest/blob/master/Readme.md%23images/Captura%20de%20Pantalla%202021-04-20%20a%20la(s)%2008.53.26.png?raw=true)

- - - -


## CODERBOOK
This project is using the __randomuser.me API__ to get a list of users, emulating the typical Social Networks user search engine.
I use __$.AJAX()__ to get the data and __JQuery animations__.


- - - -
### FRAMEWORKS
#### CSS
I integrated __Materialize CSS__ for solving the __UI__. I use it locally.
#### JS
I added JQuery 3.5.1 to show a basic hide() and show() effects over different HTML sections after the query ends, and AJAX() to read the Rest API from randomuser.me and iterate with every item to load and show it on screen as seen on any searching result.


- - - -
### SCREENSHOTS
Following the paradigm of Trailerflix App, __Coderbook__ is also behavioring fine on both ecosystems: __mobile__ and __web__.

![Coderbook home page](https://github.com/mobilepadawan/APIRest/blob/master/Readme.md%23images/Coderbook.screenshots/coderbook-home.jpg?raw=true)

![Coderbook searching result](https://github.com/mobilepadawan/APIRest/blob/master/Readme.md%23images/Coderbook.screenshots/coderbook-results.jpg?raw=true)

![Coderbook responsive](https://github.com/mobilepadawan/APIRest/blob/master/Readme.md%23images/Coderbook.screenshots/coderbook-responsive.jpg?raw=true)


- - - -
## Credits and Copyrights
All the information that I'm using in this project is Copyrighted by their own authors and owners. I just took this images and/or information for academic teaching purposes. I don't want to make money and to pirate anything.

I promote the legal use of streaming services since always.
