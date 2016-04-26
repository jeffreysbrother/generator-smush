# Minify Images

> [Yeoman](http://yeoman.io) generator for minifying images using [grunt](http://gruntjs.com/)


## Generator Features

**grunt-responsive-images** is used for compressing and possibly resizing and renaming image assets (jpg, gif, and png). This generator is useful in cases where assets need to be compressed independently of any project *x*; there is no need to scaffold an entire web application to carry out such a process. Additionally, in some cases, it might be beneficial to *treat* a round of asset minification as if it were a project, for record-keeping sake. Instead of creating a Gruntfile and downloading dependencies for every minification task, and instead of having to go search for some local or remote repository dedicated to this task, we have a simple Yeoman command to get you started. This generator is very minimalistic, so can be set up and executed with decent speed.

Please keep in mind that since the compression offered by this particular grunt plugin is not lossless, the quality of the resulting assets should be monitored.


## Getting Started

- Install [GraphicsMagick](https://sourceforge.net/projects/graphicsmagick/files/graphicsmagick/)
- Install dependencies: `npm install --global yo grunt-cli`
- Install the generator: `npm install --global generator-smush`
- Run `yo smush` within a new project directory to generate all necessary files
- Place your assets in the images/ folder, configure the Gruntfile as needed, and run `grunt`


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
