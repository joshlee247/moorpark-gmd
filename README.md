# moorpark-gmd
Conversion of the Moorpark College Graphic and Multimedia Design Website from Wordpress to HTML/CSS/JS
Click [here]('https://guides.github.com/') for information on operation of git and github.

In an html file with the `include_html.js` included after the body or with the `defer` keyword, all blocks like this:
```html
<div include-html="./file_name.html"></div>
```
Will be replaced with the contents of the files they link to.

Files inside of folders should include `folder_header.html` instead of `header.html` because the relative path of links need to be changed in the header. Because of this, whenever editing `header.html` or `footer.html` similar edits must also be made to `folder_header.html` or `folder_footer.html` respectively.

Full Documentation:
https://josh-lee247.gitbook.io/mc-dma-websites/
