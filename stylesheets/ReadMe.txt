------
SOURCE
------
AUTHOR:   John W. Long
WEBSITES: http://thesassway.com/beginner/how-to-structure-a-sass-project
          http://oxygencss.com/book/01-objects-in-css.html


--------------
FILE STRUCTURE
--------------
stylesheets/
|
|-- modules/              # Common modules
|   |-- _all.scss         # Include to get all modules
|   |-- _utility.scss     # Module name
|   |-- _colors.scss      # Etc...
|   ...
|
|-- partials/             # Partials
|   |-- _base.sass        # imports for all mixins + global project variables
|   |-- _buttons.scss     # buttons
|   |-- _figures.scss     # figures
|   |-- _grids.scss       # grids
|   |-- _typography.scss  # typography
|   |-- _reset.scss       # reset
|   ...
|
|-- vendor/               # CSS or Sass from other projects
|   |-- _colorpicker.scss
|   |-- _jquery.ui.core.scss
|   ...
|
`-- main.scss            # primary Sass file


------------
DESCRIPTIONS
------------
o The "modules" directory is reserved for Sass code that doesn't cause Sass to actually output CSS. Things like mixin
  declarations, functions, and variables.

o The "partials" directory is where the meat of my CSS is constructed. A lot of folks like to break their stylesheets
  into header, content, sidebar, and footer components (and a few others). As I'm more of a SMACSS guy myself, I like
  to break things down into much finer categories (typography, buttons, textboxes, selectboxes, etc…).

o The vendor directory is for third-party CSS. This is handy when using prepackaged components developed by other
  people (or for your own components that are maintained in another project). jQuery UI and a color picker are examples
  of CSS that you might want to place in the vendor directory. As a general rule I make it a point not to modify files
  in my vendor directory. If I need to make modifications I add those after the vendored files are included in my
  primary stylesheet. This should make it easy for me to update my third-party stylesheets to more current versions in
  the future.


=================
EXAMPLE BASE.SCSS
=================
// Use Compass ('cause it rocks!)
@import "compass";

// Font weights
$light: 100;
$regular: 400;
$bold: 600;

// Base Font
$base-font-family: sans-serif;
$base-font-weight: $regular;
$base-font-size: 13px;
$base-line-height: 1.4;

// Fixed Font
$fixed-font-family: monospace;
$fixed-font-size: 85%;
$fixed-line-height: $base-line-height;

// Headings
$header-font-weight: $bold;

@import "modules/all";



