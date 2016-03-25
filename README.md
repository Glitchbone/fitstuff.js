#fitstuff.js

Elements scaling with [intrinsic ratio](http://alistapart.com/article/creating-intrinsic-ratios-for-video)

Inspired by [fluidvids.js](https://github.com/toddmotto/fluidvids)

##Installation

Install via bower:

```sh
bower install fitstuff.js --save
```

Or you can add js/fitstuff.js manually to your project

##Usage

With an IMG tag:

``` html
<img data-fitstuff src="foo.jpg" width="640" height="480" />
```

With any other tag:

``` html
<div data-fitstuff data-width="640" data-height="480"></div>
```

##Methods

Apply fitstuff to new elements added dynamically to the DOM:

``` javascript
fitstuff.update();
```

##Author

**Adrien Glitchbone**

+ [https://twitter.com/glitchbone](https://twitter.com/glitchbone)
+ [http://github.com/Glitchbone](http://github.com/Glitchbone)

##License

fitstuff.js is available under the MIT license. See the [LICENSE](LICENSE) file for more information.  
