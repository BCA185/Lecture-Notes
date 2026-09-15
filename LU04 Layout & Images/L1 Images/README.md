<!-- TODO Slow down only do the first three articales -->
<!-- TODO don't do any flexbox this first day -->
<!-- TODO Make images more responsive -->
<!-- TODO show off placeholder images: https://placehold.co/ -->

# LU04 Images

Last unit we made our websites pretty with colors and fonts using CSS.
This unit will will enrich our websites with images.
Modern readers hate reading, so break up your text with images to make your website more visually appealing.
Images are **large** so we have to be careful and optimize them for the web.

## Image formats and Optimization

[Where](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types) is a guide to image formats.

> The older formats like PNG, JPEG, GIF have poor performance compared to newer formats like WebP and AVIF, but enjoy broader "historical" browser support.

## How to optimize

Modern smart phones take pictures that are 12MP or more, which is way too large for the web.
Older images might be uncompressed or in an older unoptimized format.

We will use the following tools to optimize our images for the web:

- [Gimp](https://www.gimp.org/) - Free and open source image editor
- MS Paint - Free image editor that comes with Windows
- [KolorPaint](https://www.kolorpaint.com/) - Good for Linux.

### Alternative Tools

I also like [Squoosh](https://squoosh.app/) for web.
For more advanced users, I use [cwebp](https://developers.google.com/speed/webp/docs/cwebp) to compress images from the comfort of the command line.

Example:

```bash
# Compress a PNG to WebP with 80% quality
cwebp -q 80 input.png -o output.webp
```

## HTML Example

CSS is kept inline so we can quickly effect the images.
Together build [ImagesExample.html](ImagesExample.html).
