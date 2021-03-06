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

#### Custom responsive slideshow component

* Uses `overflow: hidden` and `transform: translate` to pan elements left and right
* Switches from three elements to one element on smaller screens

##### Showcase

<img src="https://github.com/johnnydevster/readme_gifs/blob/main/delidelights/3%20-%20Custom%20Slider.gif" alt="custom slider component">

### :eyeglasses: What did I learn?

#### WordPress as a headless CMS

WordPress is a very mature CMS and comes with a user friendly admin panel and a WYSIWYG-editor out of the box, which makes it great to spin up sites and get some content going quickly.

When used as a headless CMS, however, I found that some solutions had to be "hacked together" - if you don't want to just use the default "post"-type, you have to install a couple of plugins in order to setup custom post types and custom fields - which is critical if the CMS side of the application is to "make sense" to non-devs.

Even after installing custom post types I still feel the interface feels somewhat "hacked", since I wasn't really able to do away with the WYSIWYG editor completely, since the title has to be entered in the editor (and possibly the body text, if the client wants to use things like font-weight etc), while inputting your custom fields is handled in a separate space.

This quirky behavior would of course be possible to explain to the client, but it all just feels somewhat disconnected and more "hacky" than I'd like it to be.
Next time I'm building a headless CMS, I'll probably try something like [strapi](https://strapi.io/) instead.

##### Example
*Title and body text is in the WYSIWYG editor because font weight has to be carried over to the front end, but the custom "excerpt" field lies separately below.*

<img src="https://github.com/johnnydevster/readme_gifs/blob/main/delidelights/2%20-%20CMS.gif" alt="CMS interface">

#### Using Next.js

Next.js comes with a ton of great features, many of which I feel I've only scratched the surface of.

Vercel has truly created an incredible developer experience with great documentation and deployment options through their extensive cloud network, and I'll most definitely continue using Next.js in all my React projects from now on. The SEO and flexibility with static and dynamic pages are simply too good to pass up, along with great perks such as image optimization and automatic routing.

The hardest part to get a grasp of was the dynamic routing - where you prefetch all the slugs at build time in order to automatically route posts.

However, I believe the difficulty lied mostly in the fact that I was also learning GraphQL queries and trying to figure out how to create custom fields and expose them on the GraphQL endpoint in WordPress.

Overall, the experience working with Next.js was a dream :clap:




