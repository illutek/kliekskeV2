# 't Kliekske

The idea was to set up my own grid (see below), but afterwards everything was converted to **FLEX**.

## CUSTOM GRID 
``` scss
.col-1-of-2 {
  width: calc((100% - #{$gutter-horizontal}) / 2);
}

.col-1-of-3 {
  width: calc((100% - 2 * #{$gutter-horizontal}) / 3);
}

.col-2-of-3 {
  width: calc(2 * ((100% - 2 * #{$gutter-horizontal}) / 3) + #{$gutter-horizontal});
}

.col-1-of-4 {
  width: calc((100% - 3 * #{$gutter-horizontal}) / 4);
}

.col-2-of-4 {
  width: calc(2 * ((100% - 3 * #{$gutter-horizontal}) / 4) + #{$gutter-horizontal}) ;
}

.col-3-of-4 {
  width: calc(3 * ((100% - 3 * #{$gutter-horizontal}) / 4) + (2 * #{$gutter-horizontal}));
}
```


## FLEX
So no heavy css frame-work like Bootstrap for me.  
https://www.w3schools.com/css/css3_flexbox.asp  
The panels on the reaction page and the program page to give them the same height, 
with Bootstrap I never managed to do that.  

 
 #### CSS-Grid beats Bootstrap
 https://hackernoon.com/how-css-grid-beats-bootstrap-85d5881cf163

### Webtechnologies
- **Yarn** FAST, RELIABLE, AND SECURE DEPENDENCY MANAGEMENT, for devDependencies primarily for gulp.
- **Bower** for the theme Dependencies
for this theme Font-awesome 5, wowjs and animate.css
- **Sass** is the most mature, stable, and powerful professional grade CSS extension language in the world.
- **BEM** — Block Element Modifier is a highly useful, powerful, and simple naming convention that makes your 
front-end code easier to read and understand, easier to work with, easier to scale, more robust and explicit, and a lot more strict.
For Drupal i've raised that a level up by converting almost all views to twig files.
- **Gulp** is a toolkit for automating painful or time-consuming tasks in your development workflow.


## Navigation
With css no JS

``` scss
&__checkbox:checked ~ &__nav {
     opacity: 1;
     width: 100%;
     right: 0;
   }
```

## Font Awesome 5
Not all icons come are free disadvantage is if you want to set up your own classes as follows.   
 ``` scss
 .icon {
   font: {
     family: "Font Awesome 5 Free";
     style: normal;
     variant: normal;
   }
   display: inline-block;
   padding-right: .5rem;
   text-rendering: auto;
   -webkit-font-smoothing: antialiased;
 
   &--external-link {
     &::before {
       @extend .icon;
       content: "\f35d";
       font-weight: 900;
     }
   }
 }
 ```
The font-weight set to 900 this because the icon is pro.

## COLORBOX 
Drupal8 module is not responsief out of the box, the solution, an extra js file was added (js/colorbox.js).  
1. Set up a library.  
2. And add this only to the photos-page templates/content/photos/node--photos--full.html.twig  

``` yml
colorboxjs:
  js:
    js/colorbox.js: {}
```

```twig
{{ attach_library('kliekske/colorboxjs') }}
```

## WOW
Only on the frontpage, in a separate library   
```yml
animatestyle:
  css:
    theme:
      bower_components/animate.css/animate.css: {}
      
      
frontjs:
  js:
    bower_components/wow/dist/wow.min.js: {}
    js/wow-init.js: {}
    js/popup-close.js: {}
```
 and added this only on the front--page  
```twig
{{ attach_library('kliekske/wowjs') }}
{{ attach_library('kliekske/animatestyle') }}
```
* js/popup-close.js = close the popup 'Bestuur' after click on the body-background

## Drupal main-menu
Convert hard-coded menu to Drupal main-menu, below the hard-coded menu
```twig
<nav class="navigation__nav">
    <ul class="navigation__list">
      <li class="navigation__item"><a href="{{ path('<front>') }}" class="navigation__link">{{ "HOME"|t }}</a></li>
      <li class="navigation__item"><a href="{{ base_path }}hoe-sponseren" class="navigation__link">{{ "Hoe Sponseren?"|t }}</a></li>
      <li class="navigation__item"><a href="{{ base_path }}spelende-leden" class="navigation__link">{{ "Spelende leden"|t }}</a></li>
      <li class="navigation__item"><a href="{{ base_path }}programma-overzicht" class="navigation__link"> {{ "Programma"|t }}</a></li>
      <li class="navigation__item"><a href="{{ base_path }}photo-albums" class="navigation__link">{{ "Foto's"|t }}</a></li>
      <li class="navigation__item"><a href="{{ base_path }}reaction-page" class="navigation__link">{{ "Reacties"|t }}</a></li>
    </ul>
  </nav>
```
The only file needed menu.html.twig located in core/themes/classy/templates/navigation.  
Copy to kliekske/templates/navigation and rename to menu--main.html.twig  
Here the customized code.
```twig
{% import _self as menus %}
    {% if items %}
        <ul{{ attributes.addClass('navigation__list') }}>
            {% for item in items %}
                {% set classes = [
                    'navigation__item',
                    item.in_active_trail ? 'navigation__item--active-trail',
                ] %}
                <li{{ item.attributes.addClass(classes) }}>
                    {{ link(item.title, item.url, { class: ['navigation__link'] }) }}
                </li>
            {% endfor %}
        </ul>
    {% endif %}
```
The most special part is to add a class to the a tag.  
```twig
{ class: ['navigation__link'] }
```