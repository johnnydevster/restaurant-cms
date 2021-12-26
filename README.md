# Deli Delights 

### Headless Wordpress CMS with Next.js

<img src="https://github.com/johnnydevster/readme_gifs/blob/main/delidelights/1%20-%20Main.gif" alt="scrolling through deli delights fake restaurant webside">

#### :clipboard: My main purpose with this project 

* Learn how **Server Side Rendering** works through Next.js
* Learn how to use WordPress as a **headless CMS**
* Learn more about **GraphQL-queries**
* Learn how to use **Dynamic Routes** using slugs fetched through queries

#### :question: Why headless WordPress?
The reasoning behind using WordPress as a headless CMS was that I wanted the hypothetical client (i.e the store owner / administrator) to easily be able to add / edit content on the site through WordPress' admin panel, while me as the developer can still retain full control over the front end presentation.

Also, because I still need to practice my CSS chops and didn't want to cheat with a WYSIWYG editor. :eyes:

#### :question: Why Next.js?
I've used React for quite some time, but have come to realize that base React apps don't play well with search engines since they're pure JavaScript instead of pre rendered.
Also, the dynamic routing seems to be built with CMS systems in mind, so this was a golden opportunity to strike two birds with one stone.

### Features of this project

#### The following content is easily editable by the restaurant staff through the WordPress admin panel:

* Modal lunch menu contents
* 'Our favorites' section on the main page
* Testimonials slider contents
* 'Meet our chefs' section on the 'about' page
* News announcements

#### Custom responsive slider

* Uses `overflow: hidden` and `transform: translate` to pan elements left and right
* Switches from three elements to one on smaller screens

##### Showcase

<img src="https://github.com/johnnydevster/readme_gifs/blob/main/delidelights/3%20-%20Custom%20Slider.gif" alt="custom slider component">

#### Custom responsive slider

