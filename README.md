# windowJS

## A free and open-source JavaScript library, focused on managing tabs in the browser.

### How to install
No fancy *command line* here! <br>
All you have to do is **insert this line of code into your website's HTML code**:
~~~
<script src="https://raw.githubusercontent.com/redwoodsteve/windowJS/main/src/window.js"></script>
~~~
### Syntax
#### This is all the functions in window.js, explained here.

Open a masked tab:
~~~
mask(url, replace)
~~~
**URL**: The URL to mask. <br>
**replace**: The URL to show in history, instead of the current URL.

> #### A bit about tab masking
> Tab masking is where you, in most cases, open an *about:blank* page and inject HTML content into it. With this version, you can change the current tab's URL with another one, so > only that will show up in your history. If you don't specify a tab to replace with, then you will see the current tab in your history (but not the masked tab.)
