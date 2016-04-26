# Minify Images

> [Yeoman](http://yeoman.io) generator for minifying images using [grunt](http://gruntjs.com/)


## Generator Features

* **grunt-responsive-images** is used for compressing and possibly resizing and renaming image assets (jpg, gif, and png). This generator is useful in cases where assets need to be compressed independently of any project; there is no need to scaffold an entire web application to carry out such a process. This generator is very minimalistic, so can be set up and executed with great speed. Please keep in mind that since the compression offered by this particular grunt plugin is not lossless, the quality of the resulting assets should be monitored.


## Getting Started

- Install dependencies: `npm install --global yo grunt-cli`
- Install the generator: `npm install --global generator-smush`
- Run `yo smush` within a new project directory to generate all necessary files
- Place your assets in the images/ folder, configure the Gruntfile as needed, and run `grunt`


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
