<div align="center">
    <h1> Web-starter </h1>
    <p> A starter template for web development </p>
    <img src="https://cdn.discordapp.com/attachments/954117377593868331/1029864040882786324/iMac_-_1.png">
</div>

## Table of Contents π¨π»βπ«

1. [Table of Contents](#table-of-contents-π¨π»βπ«)
2. [Browser Support](#browser-support-π)
3. [Installation](#installation-π¦)
4. [Usage](#usage)
5. [Structure](#structure-π¨)
6. [License](#license-π)
7. [Autor](#autor)


## Browser Support π
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Installation π¦
First step : clone the repository

```sh
$ git clone https://github.com/Olivieroy/web-starter.git
```

Second step : install the dependencies with npm

```sh
$ npm install sass
```

Third step : run the project.
Good Luck ! π

## Structure π¨

### Forlder structure

```
βββ elements π
   βββheader.php π              # Header
   βββfooter.php π               # Footer
βββ source π                    # Source folders
    βββ css π                             # CSS folder
        βββ master.css π                 #CSS file for the project 
        βββ master.css.map π       # CSS map file for browser support
    βββ img π                    # Images folder
    βββ js π                         # JS folder
        βββ master.js π                   # JS file for the project 
   βββ sass π                    # SASS folder
        βββ components π              # Components folder
            βββ _button.scss π        # Button component
            βββ _card.scss π          # Card component
            βββ _cta.scss π        # Cta component
            βββ _index.scss π        # Index file for components
            βββ _inputs.scss π          # Inputs component
            βββ _labels.scss π        # Labels component          
        βββ global π              # Global folder
            βββ _animations.scss π        # Animations file
            βββ _breakpoints.scss π        # Breakpoints file
            βββ _colors.scss π        # Colors file
            βββ _fonts.scss π        # Fonts file
            βββ _functions.scss π        # Functions file
            βββ _icons.scss π        # Icons file
            βββ _index.scss π        # Index file for global
            βββ _mixins.scss π        # Mixins file
        βββ layouts π              # Layouts folder
            βββ _footer.scss π        # Footer file
            βββ _form.scss π        # Form file
            βββ _header.scss π        # Header file
            βββ _index.scss π        # Index file for layouts
            βββ _main.scss π        # Functions file
       βββ libs π              # Libs folder
            βββ _index.scss π        # Index file for libs
            βββ _normalize.scss π        # Normalize file
            βββ _reset.scss π        # Reset file
       βββ pages π              # Pages folder
            βββ _home.scss π        # Home file
            βββ _index.scss π        # Index file for pages
       βββ master π              # SCSS file for the project to compiled 
βββ index.php π              # Index file for the project
βββ package-lock.json π                    # JSON file 
βββ package.json π                    # JSON file
βββ .gitignore π              # Git ignore file
βββ README.md π              # Readme file
βββ LICENSE π              # License file


```


## Usage
- `npm run sass` : compile sass to css 
<p> You can create another "npm run" command in the package.json file π </p>

## License
[MIT](https://github.com/Olivieroy/web-starter/LICENSE.) 

## Author
[Olivieroy](https://olivieroy.fr) π§’
