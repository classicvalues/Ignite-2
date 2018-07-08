(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{77:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=[{id:"pages/IncludedPlugins.md",body:"# Included Plugins\n\n## Embed\n\nFormat = \\[SERVICE|ARGS\\]\n\nSupported Embeds:\n\n```markdown\n[github|ID:FILE]\n\n[youtube|id]\n\n[twitter|ID]\n\n[soundcloud|id]\n```\n\nOUTPUT:\n\n[twitter|989197113648037888]\n\n## Collapse\n\nMake a set of elements collapsible. If first word is 'open' the elements will default to being shown.\n\n```markdown\n::: collapse Title For Collapse Area\nSome text\n:::\n```\n\nOUTPUT:\n\n::: collapse Title For Collapse Area\nSome text\n:::\n\nCollapse in the sidebar defaults to open.\n\nIt is possible to make a list or sub-list collapsible too. The ending `:::` is not needed in this case.\n\n```\n* ::: collapse [:package: Publishing](/Ignite/pages/pages/Publishing.html)\n  * [Setup](/Ignite/pages/pages/Publishing.html#setup-branch)\n  * [Continuous Integration](/Ignite/pages/pages/Publishing.html#Continuous-integration)\n```\n\n## Font awesome\n\nAll icons listed [here](https://fontawesome.com/icons/bomb?style=solid).\n\nStructure: : [TYPE] - [ICON] :\n\n```markdown\n:fas-bomb:\n```\n\nOUTPUT:\n:fas-bomb:\n\n## Emoji\n\nAll emoji listed [here](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json).\n\nStructure: : [EMOJI] :\n\nTransforms ascii emotes as [well](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/shortcuts.js).\n\n```markdown\n:banana: :)\n```\n\nOUTPUT:\n:banana: :)\n\n## Code Highlighting\n\nCode blocks are colored with [Highlight.js](https://github.com/isagalaev/highlight.js). You must provide a language like this:\n\n````markdown\n```javascript\n```\n````\n\n## Tabbed Code Blocks\n\nYou can group multiple markdown code blocks into a tabbed code block.\n\n1 word currently supported.\n\nFORMAT: codeTabs First Second Third Title\n\nAlso must include the matching index of the title on the code block.\n\n````markdown\n::: codeTabs CSS HTML JS\n\n```css [0]\n.className {\n  background: red;\n}\n```\n\n```html [1]\n<div class=\"className\">\n```\n\n```javascript [2]\nfunction doSomething() {\n  return 'foo';\n}\n```\n\n:::\n````\n\nOUTPUT:\n\n::: codeTabs CSS HTML JS\n\n```css [0]\n.className {\n  background: red;\n}\n```\n\n```html [1]\n<div class=\"className\">\n```\n\n```javascript [2]\nfunction doSomething() {\n  return 'foo';\n}\n```\n\n:::\n\n## Highlight Specific lines\n\nYou can call attention to specific lines in your code by including the lines in the block definition.\n\n````markdown\n```javascript {2}\nfunction foo() {\n  return bar().then(res => {\n    return res.doSomething();\n  });\n}\n```\n````\n\nOUTPUT:\n\n```javascript {2}\nfunction foo() {\n  return bar().then(res => {\n    return res.doSomething();\n  });\n}\n```\n\n## Image Captions\n\nAdds a caption to an image and centers it within the page.\n\n**_Must have 'caption' alt text for styles to work_**\n\n```markdown\n![caption](https://media.tenor.com/images/cb12bc24511449db821768715e85b0d9/tenor.gif)\n_image caption_\n```\n\nOUTPUT:\n![caption](https://media.tenor.com/images/cb12bc24511449db821768715e85b0d9/tenor.gif)\n_image caption_\n\n## (Super|Sub)script\n\nAdd characters printed above or below the line.\n\n```markdown\n29^th^ H~2~0\n```\n\nOUTPUT: 29^th^ H~2~0\n\n## Underline\n\n```markdown\n++underline++\n```\n\nOUTPUT: ++underline++\n\n## Highlight\n\n```markdown\n==highlight==\n```\n\nOUTPUT: ==highlight==\n\n## Check Boxes and Task Lists\n\n```markdown\n[ ] unchecked\n[x] checked\n```\n\nOUTPUT:\n\n[ ] unchecked\n[x] checked\n\n## Breaks\n\nSome times you just need a break.\n\n```markdown\nparagraph 1\n\n<br>\n\nparagraph 1\n```\n\nOUTPUT:\n\nparagraph 1\n\n<br>\n\nparagraph 1\n\n## HTML Attributes\n\nAdd a class, id, or attribute to an element.\n\nMore documentation [here](https://www.npmjs.com/package/markdown-it-attrs).\n\n```markdown\n# Title /.has-text-danger\\\n```\n\nOUTPUT:\n\n# Title /.has-text-danger\\\n\n::: message is-success is-8 is-offset-2 has-text-centered\nTIP: Use with [Bulma Helpers](/Ignite/pages/BulmaPlugins.html#useful-helpers) to style your page perfectly!\n:::\n"},{id:"home.md",body:"::: hero is-primary is-bold is-medium has-text-centered\n\n# Ignite\n\n## Zero Hassle Documentation\n\n:::\n\n## Finally, a markdown documentation generation tool built around plugins. /.no-link .has-text-primary .has-text-centered\\\n\nIgnite makes documenting your open source project as easy as adding files to a folder. The barrier to writing documentation should be low, encouraging us to write more of it! /.has-text-centered\\\n\n||| row has-text-centered wide\n\n::: box\n\n### Plugins\n\nThey're just React Components. Use NPM packages or write your own.\n:::\n\n::: box\n\n### Themeable\n\nBuilt on [Bulma](https://bulma.io/documentation/overview/customize/)\n:::\n\n::: box\n\n### Blog\n\nGreat for things that aren't quite documentation but need explanation.\n:::\n\n|||\n\n||| row has-text-centered wide\n\n::: box\n\n### Optimized Images\n\nAll images are minified and transformed into various formats for a progressive image loading experience.\n:::\n\n::: box\n\n### Lazy Loading\n\nEvery page, plugin, and image is lazy loaded, making the initial bundle download as small as possible.\n:::\n\n::: box\n\n### Static Builds\n\nBuild your website as a Single Page App or a collection of HTML Files. You Choose\n:::\n\n|||\n\n::: hero is-info is-small has-text-centered\nUsing Ignite\n:::\n\n::::: hero is-small\n:::: div columns\n::: div column feature\n\n# Write Markdown\n\n:::\n::: div column\n![Markdown](images/markdown.png)\n:::\n::::\n:::::\n\n::::: hero is-light is-small\n:::: div columns\n::: div column featureImages\n![Markdown](images/config.png)\n![Markdown](images/component.png)\n:::\n::: div column feature\n\n# Add Plugins\n\nIgnite uses React, so we thought the simplest plugin system would just be plain old React components.\n\nThis means any react component can be exposed as a plugin for Ignite. The possibilities for expressive documentation are endless! Read more [here](/Ignite/pages/IgnitePlugins.html)\n\n:::\n::::\n:::::\n\n::::: hero is-small\n:::: div columns\n::: div column feature\n\n# Deploy\n\nIgnite has Github-Pages publishing **built in** and setup is [easy](/Ignite/pages/Publishing.html)\n:::\n::: div column\n![Markdown](images/deploy.png)\n:::\n::::\n:::::\n\n::: hero is-info is-small has-text-centered\nBlog\n:::\n\nBlogging shouldn't be hard either! Why host posts about your product anywhere but with your documentation? All information about your project should be accessible from one easy to search location. Ignite makes this simple.\n\n<br>\n\n::::: hero is-small is-light no-margin\n:::: div columns\n::: div column feature\n\n# Just Add Posts to `blog/`\n\nIgnite will generate a blog for you and add an item to the header\n:::\n::: div column fadeBottom\n![Markdown](images/blog.png)\n:::\n::::\n:::::\n\n:::: hero is-link is-small has-text-centered\n\n# Even this pages is markdown. What are you waiting for? /.no-link .title .is-4 .has-text-centered\\\n\n::: button is-large is-link is-bold is-inverted is-outlined\n[Get Started :tada:](/Ignite/pages/GettingStarted.html)\n:::\n\n::::\n"},{id:"blog/FirstPost.md",body:"---\ntitle: First Post\nimage: https://pbs.twimg.com/profile_banners/7547562/1516584955/1500x500\nauthor:\n  name: Andrew Lisowski\n  url: https://github.intuit.com/alisowski\n  email: lisowski54@gmail.com\n---\n\nI am the first post\n\nPellentesque et pulvinar quam. Integer et metus non felis laoreet interdum quis id justo. Proin scelerisque diam eget lorem viverra lacinia. Nulla et convallis sapien. Ut mauris nisi, ultrices quis dui sit amet, rhoncus auctor arcu. Fusce et velit molestie, posuere est vitae, dictum est. Fusce vel risus ac libero maximus luctus. Sed fermentum augue in mauris pretium vestibulum. Proin dolor lacus, volutpat in nisi sit amet, laoreet accumsan magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam et tempus neque. Maecenas tortor tortor, auctor ac risus et, egestas sagittis elit. Morbi ac massa augue. Phasellus bibendum nulla diam, nec tempus urna congue vel. Donec ullamcorper turpis et ligula volutpat, placerat consectetur est hendrerit. Aliquam eget viverra metus.\n\nThis is our implementation of a font-awesome 5 plugin. It matches tags in the markdown the look like `:far-flag:` and replaces them with the html representation.\n\n```js\nimport makePlugin from 'markdown-it-regexp';\n\nexport default function fontawesomePlugin(md) {\n  md.use(\n    makePlugin(/:[a-z]{2,}-[a-z]{2,}:/, match => {\n      const [type, icon] = match[0].split(':')[1].split('-');\n      return `<i class=\"${type} fa-${icon}\"></i>`;\n    })\n  );\n}\n```\n\nEtiam tincidunt est tortor, sed consectetur augue pellentesque et. Sed sit amet elementum purus. Nunc et leo quis justo ultrices faucibus et eu arcu. Nulla facilisi. Vestibulum et nisi vitae urna vulputate faucibus. In cursus iaculis aliquam. Fusce tempor facilisis eleifend.\n\nCurabitur viverra elementum dolor, nec dapibus quam vulputate nec. Fusce laoreet velit ut est pulvinar porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut lacinia dui. Aenean nec erat blandit, efficitur mi at, dictum turpis. Suspendisse potenti. Mauris at nibh pulvinar, semper diam sit amet, egestas tellus. Nam varius tellus quis enim varius, eget pretium turpis condimentum. Integer cursus neque mattis libero rutrum mollis. Aliquam at suscipit est, eu rutrum mauris. Quisque in urna quam. Donec porta ligula nec magna auctor dictum. Etiam ut fermentum purus, id tristique nisl. Nunc porttitor, mauris interdum tincidunt dictum, est lectus feugiat nulla, nec cursus purus metus nec magna. Ut sed ipsum at libero finibus elementum et et magna. Sed ac facilisis purus, mattis dignissim sapien.\n\nDonec mollis diam sit amet sodales faucibus. Integer rhoncus lacus nunc, in tincidunt lorem auctor nec. Integer porta magna quis eros sollicitudin, vel lobortis nisl interdum. Quisque fringilla dolor sit amet justo posuere placerat. Duis feugiat velit eu velit vulputate, sit amet interdum diam cursus. Curabitur varius velit vitae diam tempus, non faucibus dui porta. Etiam imperdiet sit amet justo a varius. Suspendisse quis odio lacus. Aliquam quis viverra nisi, id ullamcorper turpis. Fusce non feugiat quam. Aliquam varius euismod turpis at fermentum.\n\nTags: #:is-info:is-medium first post #:is-info:is-medium lorem ipsum\n"},{id:"blog/ShorterPost.md",body:"---\ntitle: Shorter Post\nauthor:\n  name: Andrew Lisowski\n  url: https://github.intuit.com/alisowski\n  email: lisowski54@gmail.com\n---\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu metus et est luctus efficitur non sit amet erat. Nulla et tincidunt purus. Suspendisse cursus pretium massa, non bibendum sapien ullamcorper a. Phasellus sodales vitae nulla a convallis. Donec molestie condimentum eleifend. Nam fringilla dapibus lectus, eu mollis felis pretium sed. In rutrum mollis massa, eu gravida urna. Nam rutrum dolor neque, a facilisis risus consequat eget. Etiam et elit rhoncus, viverra sapien ac, venenatis est.\n\n::: codeTabs CSS HTML JS\n\n```css [0]\n.className {\n  background: red;\n}\n```\n\n```html [1]\n<div class=\"className\">\n```\n\n```javascript [2]\nfunction doSomething() {\n  return 'foo';\n}\n```\n\n:::\n\nPellentesque et pulvinar quam. Integer et metus non felis laoreet interdum quis id justo. Proin scelerisque diam eget lorem viverra lacinia. Nulla et convallis sapien. Ut mauris nisi, ultrices quis dui sit amet, rhoncus auctor arcu. Fusce et velit molestie, posuere est vitae, dictum est. Fusce vel risus ac libero maximus luctus. Sed fermentum augue in mauris pretium vestibulum. Proin dolor lacus, volutpat in nisi sit amet, laoreet accumsan magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam et tempus neque. Maecenas tortor tortor, auctor ac risus et, egestas sagittis elit. Morbi ac massa augue. Phasellus bibendum nulla diam, nec tempus urna congue vel. Donec ullamcorper turpis et ligula volutpat, placerat consectetur est hendrerit. Aliquam eget viverra metus.\n"},{id:"pages/Options.md",body:"# Options\n\nAll options can be used as CLI arguments, declared in the package.json, or your project can have an `.igniterc`. This file can be at the project root or anywhere [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) can find it.\n\n```json\n{\n  \"ignite\": {\n    \"src\": \"some/path/to/folder\"\n  }\n}\n```\n\n[[toc]]\n\n---\n\n## Source (--src, -s)\n\nSource folder to search for markdown files in\n\n```bash\nignite --src docs\n```\n\n## Destination (--dst, -d)\n\nFolder to output bundled documentation website.\n\n```bash\nignite --dst _ignite\n```\n\n## Index (--index, -i)\n\nFill to be used as the index of your website. Is also used as the sidebar. This file should be located in the docs folder\n\n```bash\nignite --index index.md\n```\n\n## Static (--static)\n\nBuild the documentation website as individual static html pages.\n\n```bash\nignite --static\n```\n\n## Plugins (--plugins)\n\nA list of plugins (package names or functions) to render your documentation with.\n\n```bash\nignite --plugins markdown-it-emoji markdown-it-video\n```\n\n::: message is-success is-three-fifths is-offset-one-fifth has-text-centered\nMore on including Ignite plugins [here](/Ignite/pages/IgnitePlugins.html#register-plugin)\n:::\n\n## Publish (--publish)\n\nPublish the docs to the githubURL. Must [setup](/Ignite/pages/Publishing.html)\n\n```bash\nignite --publish\n```\n\n## Watch (--watch, -w)\n\nBuild the documentation website and serve it on localhost. Default port is 8008.\n\n```bash\nignite --watch\n```\n\n## Port (--port, -p)\n\nPort to start the documentation website on.\n\n```bash\nignite --port 1337\n```\n\n## Title (--title, -t)\n\nTitle of the docs. Usually what you are documenting. Used in the navigation bar.\n\n```bash\nignite --title 'My Cool Docs'\n```\n\n## Logo (--logo)\n\nLogo for app. Displayed in title bar.\n\n```bash\nignite --logo 'logo.svg'\n```\n\n## GitHub URL (--githubURL)\n\nIf present includes a link to github. Usually where you store the source code for what you're documenting.\n\n```bash\nignite --githubURL https://github.com/Team/Project\n```\n\n## Code Highlight Style (--codeStyle)\n\nCode highlight style for code blocks. Can use any of [these](https://github.com/isagalaev/highlight.js/tree/master/src/styles) styles\n\n```bash\nignite --codeStyle foundation\n```\n\n## App Color (--color, -c)\n\nSpecify the color to use throughout the app.\n\n```bash\nignite --color 'cadetblue'\nignite --color '#f44336'\n```\n\n---\n\n## Utility Commands\n\n### Version (--version, -v)\n\nCurrent version of Ignite.\n\n```bash\nignite --version\n```\n\n### Help (--help -h)\n\nList all of these commands an their defaults.\n\n```bash\nignite --help\n```\n"},{id:"pages/Blog.md",body:"# Blog\n\nTo setup a blog for your documentation website all you have to do is create a `blog/` folder in your src and start writing blog posts. That's it.\n\n## Blog Front Matter\n\nAt the Start of each blog post you must have a front matter. This sections specifies metadata about your blog post that will also be used to render the header.\n\n## Title\n\n```markdown\n---\ntitle: First Post\n---\n```\n\n## Hero Image\n\nControl the background of the hero on the blog. Works better with wide images. (Twitter banners work great!)\n\n```markdown\n---\nimage: https://pbs.twimg.com/profile_banners/7547562/1516584955/1500x500\n---\n```\n\n## Author\n\n```markdown\n---\nauthor: Andrew Lisowski\n---\n```\n\n### Profile Pic\n\nIgnite uses [gravatar](http://en.gravatar.com/) to find a profile pic for your blog posts.\n\n```markdown\n---\nauthor:\n  name: Andrew Lisowski\n  email: suacy.badger@gmail.com\n---\n```\n\n### Name Link\n\nHave your name link to any website.\n\n```markdown\n---\nauthor:\n  name: Andrew Lisowski\n  link: https://github.intuit.com/alisowski\n---\n```\n"},{id:"index.md",body:"- [:page_facing_up: Introduction](/Ignite/pages/Introduction.html)\n- [:tada: Getting Started](/Ignite/pages/GettingStarted.html)\n\n---\n\n:construction: Project Structure\n\n- [Index](/Ignite/pages/ProjectStructure.html)\n- [Blog](/Ignite/pages/Blog.html)\n- [Home](/Ignite/pages/home.html)\n\n---\n\n::: collapse Customization\n\n- [:nail_care: Theming](/Ignite/pages/Theming.html)\n- [:cake: Plugins](/Ignite/pages/Plugins.html)\n  - [Markdown-it Plugins](/Ignite/pages/Plugins.html#markdown-it-plugins)\n  - [Configuration](/Ignite/pages/Plugins.html#configuration)\n  - [Plugin Example](/Ignite/pages/Plugins.html#plugin-example)\n  - [Useful Plugins](/Ignite/pages/Plugins.html#useful-plugins)\n  - [Ignite Plugins](/Ignite/pages/IgnitePlugins.html)\n  - [Included Plugins](/Ignite/pages/IncludedPlugins.html)\n  - [Bulma Plugins](/Ignite/pages/BulmaPlugins.html)\n\n:::\n\n---\n\n::: collapse Usage\n\n- [:package: Publishing](/Ignite/pages/Publishing.html)\n  - [Setup](/Ignite/pages/Publishing.html#setup-branch)\n  - [Continuous Integration](/Ignite/pages/Publishing.html#continuous-integration)\n- [:wrench: Options](/Ignite/pages/Options.html)\n\n:::\n"},{id:"pages/BulmaPlugins.md",body:"# Bulma Plugins\n\nIgnite is built upon Bulma and exposes some of the elements and components as markdown extensions. Not all of them are implemented but feel free to make a pull request!\n\n## Elements\n\n### [Button](https://bulma.io/documentation/elements/button/)\n\nThe classic button, in different colors, sizes, and states\n\n```markdown\n::: button is-large is-bold\n[Get Started :tada:](/Ignite/pages/GettingStarted.html)\n:::\n```\n\nOUTPUT:\n\n::: button is-large is-bold\n[Get Started :tada:](/Ignite/pages/GettingStarted.html)\n:::\n\n### [Box](https://bulma.io/documentation/elements/box/)\n\nThe .box element is simply a container with a shadow, a border, a radius, and some padding.\nFor example, you can include a media object.\n\n```markdown\n::: box\n\n# Title\n\nI can contain various combinations of elements.\n:::\n```\n\nOUTPUT:\n\n::: box\n\n# Title\n\nI can contain various combinations of elements.\n:::\n\n### [Message](https://bulma.io/documentation/components/message/)\n\nColored message blocks, to emphasize part of your page. Supports color, size, w/o Title\n\n```markdown\n::: message is-warning\n:warning: Body of the message\n:::\n\n::: message is-danger Message with a Title\nBody of the message\n:::\n```\n\nOUTPUT:\n\n::: message is-warning\n:warning: Body of the message\n:::\n\n::: message is-danger Message with a Title\nBody of the message\n:::\n\n### [Progress](https://bulma.io/documentation/elements/progress/)\n\nNative HTML progress bars\n\nSTRUCTURE: %% [VALUE COLOR SIZE] Message %%\n\nValue is required.\n\n```markdown\n%% 75 is-primary is-large message %%\n```\n\nOUTPUT:\n\n%% 75 is-primary is-large Look at all this progress! %%\n\n### [Tags](https://bulma.io/documentation/elements/tag/)\n\nSmall tag labels to insert anywhere\n\nStructure: # : [[COLOR](https://bulma.io/documentation/elements/tag/#colors)][your_string]\n\nStructure: # : [[COLOR](https://bulma.io/documentation/elements/tag/#colors)]:[[SIZE](https://bulma.io/documentation/elements/tag/#sizes)][your_string]\n\n```markdown\n#:is-info useful information #:is-success:is-large extension\n```\n\nOUTPUT:\n\n#:is-info useful information #:is-success:is-medium extension extension\n\n## Layout\n\n### [Hero](https://bulma.io/documentation/layout/hero/)\n\nThe hero component allows you to add a full width banner to your webpage, which can optionally cover the full height of the page as well.\n\nSupport color, gradient, and size. Full height hero unsupported.\n\n```markdown\n::: hero is-primary is-bold is-medium\n\n# This is getting cool\n\n...really cool\n:::\n```\n\nOUTPUT:\n\n::: hero is-primary is-bold is-medium\n\n# This is getting cool\n\n## ...really cool\n\n:::\n\n### Row\n\nAn element to organize a bunch of boxes into equal columns.\n\n```markdown\n||| row\n\n::: box\n\n# Title\n\nI can contain various combinations of elements.\n:::\n\n::: box\n\n# Title\n\nI can contain various combinations of elements.\n:::\n\n|||\n```\n\nOUTPUT:\n\n||| row\n\n::: box\n\n# Title\n\nI can contain various combinations of elements.\n:::\n\n::: box\n\n# Title\n\nI can contain various combinations of elements.\n:::\n\n|||\n\n### Tile\n\nA single tile element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like grids.\n\n```markdown\n::: tile is-warning notification\nI'm a simple tile.\n:::\n```\n\nOUTPUT:\n\n::: tile is-warning notification\nI'm a simple tile.\n:::\n\n[COMPLEX OUTPUT](https://bulma.io/documentation/layout/tiles/#example):\n\n::::::: tile is-ancestor\n:::::: tile is-vertical is-8\n::::: tile\n:::: tile is-vertical is-parent\n\n::: tile is-child is-primary notification\n\n# Vertical\n\nTop Tile\n:::\n\n::: tile is-child is-warning notification\n\n# ...tiles\n\nBottom Tile\n:::\n\n::::\n\n:::: tile is-vertical is-parent\n\n::: tile is-child is-info notification\n\n# Middle tile\n\n:::\n\n::::\n:::::\n::::: tile is-parent\n::: tile is-child is-danger notification\n\n# Wide Tile\n\n## Aligned with the right tile\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.\n:::\n:::::\n::::::\n:::::: tile is-parent\n::::: tile is-child notification is-success\n\n# Tall tile\n\n## With even more content\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.\n\nSuspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.\n\nInteger sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.\n:::::\n::::::\n:::::::\n\n## [Useful Helpers](https://bulma.io/documentation/modifiers/)\n\nMany of the Bulma plugins above can take bulma helper classes as arguments. These are applied to the html. These helpers can be used to change the color of text or backgrounds, to change the size of components, and to layout the components in a specific pattern.\n\nThe following are used throughout ignite and can be used to easily theme your plugins to match Bulma.\n\n### [Color](https://bulma.io/documentation/modifiers/color-helpers/)\n\n| Class                  | Effect                                                                                            |\n| ---------------------- | ------------------------------------------------------------------------------------------------- |\n| is-primary             | in combination with an element changes its color to whatever the theme sets for the primary color |\n| has-background-[COLOR] | changes the background to one of the defined color values                                         |\n| has-text-[COLOR]       | changes the text color to one of the defined color values                                         |\n\n### [Size](https://bulma.io/documentation/columns/sizes/)\n\n| Class            | Effect                                                                                                     |\n| ---------------- | ---------------------------------------------------------------------------------------------------------- |\n| is-[SIZE]        | Set a columns width [three-quarters, two-thirds, half, one-third, one-quarter, one-fifth, two-fifths, ...] |\n| is-[NUMBER]      | Set a columns width to 1-12                                                                                |\n| is-offset-[SIZE] | Set a columns offset (same values as size above)                                                           |\n\n::: message is-success is-three-fifths is-offset-one-fifth has-text-centered\nTIP: Use size and offset to narrow and center any bulma element\n:::\n\n### A Sneaky Div\n\nSometimes your just really want a div, so we gave you one!\n\n```markdown\n::: div takes classes like this\n:::\n\n::: div /.or .like .this\\\n:::\n```\n"},{id:"pages/GettingStarted.md",body:'# Getting Started\n\n## Installation\n\n```bash\nyarn add -D ignite\n```\n\n## Add scripts\n\nAdd `docs` script to package.json\n\n```json\n{\n  "scripts": {\n    "docs": "ignite",\n    "docs:watch": "ignite -w"\n  }\n}\n```\n\nIf your docs are set up according to the default configuration a folder `_ignite` will contain a bundled documentation website.\n\nMore information about configuration can be found at [Options](/Ignite/pages/Options.html)\n'},{id:"pages/IgnitePlugins.md",body:'# Ignite Plugins\n\nIgnite plugins are incredibly easy to write. If you know how to write a react component, then you already know how to write an Ignite plugin.\n\nIgnite works by parsing all of you markdown files into react components and loading them into a single page documentation app. Since we are already building the app in react, it makes sense to have the plugins just be react components.\n\n## Define your plugin\n\n```javascript\nimport React from \'react\';\n\nconst myPlugin = props => (\n  <div>\n    <h1>This is pretty awesome.</h1>\n    {props.children}\n  </div>\n);\n\nexport default myPlugin;\n```\n\n## Register Plugin\n\nTo register a component just add an entry to the plugins array defined in your config.\n\nIgnite will load strings as markdown-it plugins. If an entry in the plugin array is an array, then the first element of that array is used as the plugin name and the second is used to load it. This can be either a path or a package name.\n\n```json\n{\n  "ignite": {\n    "plugins": [\n      ["Boom", "/path/to/myPlugin.js"],\n      "some-markdown-plugin",\n      "another-markdown-plugin"\n    ]\n  }\n}\n```\n\n## Use your plugins\n\nNow that you have defined the behavior of your plugin and registered it with Ignite, you can use your plugin in any of your markdown pages.\n\nYou can use the plugin with a markdown syntax or just plain old JSX. To use the plugin as JSX make sure that the plugin is capitalized just like in normal JSX.\n\n_Markdown:_\n\n```markdown\n::: Boom\n\n# Anything inside\n\n## is passed in as props.children\n\n:::\n```\n\n_JSX:_\n\n```html\n<Boom>\n  <h1>Anything inside</h1>\n  <h2>is passed in as props.children</h2>\n</Boom>\n```\n\nWill render this to the dom:\n\n```html\n<div>\n  <h1>This is pretty awesome.</h1>\n  <h1>Anything inside</h1>\n  <h2>is passed in as props.children</h2>\n</div>\n```\n\n### Options\n\nAny single token arguments following the keyword become an array of `options` passed to the component as a prop.\n\n```\n::: boom these are individual props\n\n## Anything inside\n\n## is passed in as props.children\n\n:::\n```\n\n### Properties\n\nAny token after the arg with an equal sign in it is treated as a property. All matching tokens fill an object the is spread onto the component.\n\n```\n::: boom first=string second=2 third=["Array", "of, "Things"] fourth={ "some": "JSON Structure" }\n\n# Anything inside\n\n## is passed in as props.children\n\n:::\n```\n\n::: message is-warning is-three-fifths is-offset-one-fifth has-text-centered\n:warning:\nProperties with arrays or objects must be valid JSON\n:::\n\n### Style\n\nCSS Modules is supported for all plugins. To style your component simply import your styles and use them.\n\n```javascript\nimport React from \'react\';\nimport styles from \'./styles.css\';\n\nconst myPlugin = props => (\n  <div className={styles.unicorn}>\n    <h1>This is pretty awesome.</h1>\n    {props.children}\n  </div>\n);\n\nexport myPlugin;\n```\n\n## Using Any React Component\n\nSince we can render a react component as a plugin that means we can use _ANY_ react component as plugin to our docs. If the component doesn\'t require state to be handled by the parent, using it is as simple as giving it a name!\n\n## Download\n\nFind some random react component you would like to use in your docs. Here we are gonna use [react-gist](https://github.com/tleunen/react-gist) a react gist component\n\n```bash\nyarn add react-gist\n```\n\n## Definition\n\nAdd an entry to your configuration\'s plugin section. The first item in the entry should be the name you want to give the plugin and the second is just the package name.\n\n```json\n{\n  "plugins": [["Gist", "react-gist"]]\n}\n```\n\n## All Done\n\nNow you can use the new component anywhere! The possibilities for new components in your app are endless.\n\n**Markdown**\n\n```markdown\n::: Gist id="5995ea726914f280afb3" file="Chef-Dockerfile"\n:::\n```\n\n**JSX**\n\n```jsx\n<Gist id="5995ea726914f280afb3" file="Chef-Dockerfile" />\n```\n\n<Gist id="5995ea726914f280afb3" file="Chef-Dockerfile" />\n\n## ES6 Imports\n\n```json\n{\n  "plugins": ["ColorPicker, { SketchPicker, AlphaPicker }", "react-color"]\n}\n```\n\nColorPicker:\n\n<ColorPicker />\n\n<br />\n\nSketchPicker:\n\n<SketchPicker style={{ paddingBottom: 20 }} />\n\n<br />\n\nAlphaPicker:\n\n<AlphaPicker />\n'},{id:"pages/Introduction.md",body:"# :fire: Ignite :fire:\n\nModern markdown documentation generator.\n\nIgnite makes it super easy to get a documentation website running.\n\n## Features\n\n* Easy Setup - define an index file and get to documenting!\n* Themeable - Easily change the overall look of your app or just change 1 value\n* Plugins - Extend any part of documentation generation or use any `markdown-it` plugin.\n* Easy Publishing\n"},{id:"pages/Plugins.md",body:"# Plugins #:is-info:is-medium useful information #:is-success:is-medium extension\n\n## Markdown-it Plugins\n\nIgnite supports all the plugins available on the underlying markdown parser. Markdown-It has a large collection of plugins already [available](https://www.npmjs.com/search?q=keywords:markdown-it-plugin).\n\n### Configuration\n\nA markdown-it plugin can be included in 2 ways. For both you must include a plugins options when running Ignite.\n\nIt can either be the npm package name.\n\n```json\n{\n  \"plugins\": [\"markdown-it-emoji\"]\n}\n```\n\nor a local plugin\n\n```js\n{\n  \"plugins\": [\n    require('path/to/local/plugin')\n  ]\n}\n```\n\n#### Plugin Example\n\nThis is our implementation of a font-awesome 5 plugin. It matches tags in the markdown the look like `:far-flag:` and replaces them with the html representation.\n\n```js\nimport makePlugin from 'markdown-it-regexp';\n\nexport default function fontawesomePlugin(md) {\n  md.use(\n    makePlugin(/:[a-z]{2,}-[a-z]{2,}:/, match => {\n      const [type, icon] = match[0].split(':')[1].split('-');\n      return `<i class=\"${type} fa-${icon}\"></i>`;\n    })\n  );\n}\n```\n\nThe following is an partial es6 implementation of the 'markdown-it-regexp' used above. It shows how to hook into the markdown engine in a more complex manner.\n\n```js\nclass Plugin {\n  constructor(regexp, replacer) {\n    this.regexp = regexp;\n    this.replacer = replacer;\n\n    this.id = 'regexp-' + counter;\n    counter++;\n  }\n\n  init = (md, options) => {\n    this.options = options;\n\n    md.inline.ruler.push(this.id, this.parse);\n    md.renderer.rules[this.id] = this.render;\n  };\n\n  parse = (state, silent) => {\n    const match = this.regexp.exec(state.src);\n    if (!match) return false;\n\n    // Valid match found, now we need to advance cursor\n    state.pos += match[0].length;\n\n    // Don't insert any tokens in silent mode\n    if (silent) return true;\n\n    const token = state.push(this.id, '', 0);\n    token.meta = { match };\n\n    return true;\n  };\n\n  render = (tokens, id) => {\n    return this.replacer(tokens[id].meta.match);\n  };\n}\n```\n\n---\n\n## Useful Plugins\n\n* [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote) - Footnotes with anchors\n* [markdown-it-container](https://www.npmjs.com/package/markdown-it-container) - Plugin for creating block-level custom containers (a good starting place for a plugin)\n* [markdown-it-abbr](https://www.npmjs.com/package/markdown-it-abbr) - Abbreviation (\\<abbr\\>) tag plugin\n* [markdown-it-video](https://www.npmjs.com/package/markdown-it-video) - markdown-it plugin for embedding hosted videos.\n* [markdown-it-mentions](https://www.npmjs.com/package/markdown-it-mentions) - Support Twitter like mentions\n"},{id:"pages/ProjectStructure.md",body:'# Index Structure\n\nIgnite builds the app from your side bar. Here is where your organize your documentation into overall ideas.\n\n<br>\n\nThe default configuration looks for a file named `index.md` in your `docs/` directory. This file links to the rest of your documentation. Any linked `.md` files will be included in the docs website.\n\n**_Changing the [default configuration](/Ignite/pages/Options.html#source-src-s)_**\n\n```markdown\n- [Introduction](/Ignite/pages/Introduction.html)\n- [Page 1](/Ignite/pages/pages/Page1.html)\n- [Page 2](/Ignite/pages/pages/Page2.html)\n```\n\n## Sub-Headings\n\nYou can have sub-lists in your navigation which will create nested navigation lists.\n\n```markdown\n- [Introduction](/Ignite/pages/Introduction.html)\n  - [Page 1](/Ignite/pages/pages/Page1.html)\n  - [Page 2](/Ignite/pages/pages/Page2.html)\n```\n\n## List Title\n\nYou can add context to your navigation by adding paragraphs between sections of your index file.\n\n**_There must be an empty line between list sections_**\n\n```markdown\nIntro\n\n- [Introduction](/Ignite/pages/Introduction.html)\n  - [Page 1](/Ignite/pages/pages/Page1.html)\n  - [Page 2](/Ignite/pages/pages/Page2.html)\n\nSome Other Nav Section\n\n- [Something Else](/Ignite/pages/Bees.html)\n  ...\n```\n\n## Multiple Top Level Tags\n\nYou can split your documentation up into multiple top level sections. To have multiple top level headings you will need to also have multiple index files in multiple folders.\n\nEach index file will used as the sidebar and the first link in the sidebar as it\'s default page.\n\n```text\nfolder1/\n  index.md\n  other.md\nfolder2/\n  index.md\n  another.md\n```\n\n```json\n{\n  "navItems": {\n    "root": "path/to/folder",\n    "Name to Display in NavBar": "path/to/folder"\n  }\n}\n```\n\n::: message is-warning is-three-fifths is-offset-one-fifth\n\n:warning: Root should point to the default folder.\n\n:warning: All index files must have the same name specified in [configuration](/Ignite/pages/Options.html#index-index-i).\n\n:warning: All paths to NavItems use [source folder](/Ignite/pages/Options.html#source-src-s) as root.\n\n:::\n\n::: message is-success is-three-fifths is-offset-one-fifth\n\nIf you aren\'t using GitHub pages make sure to redirect 404s to the 404.html.\n\n:::\n'},{id:"pages/Publishing.md",body:'# Publishing\n\nPublishing to github pages is easy.\n\n[[toc]]\n\n## Setup Branch\n\nTo publish your docs first setup a clean `gh-pages` branch.\n\n```bash\ngit symbolic-ref HEAD refs/heads/gh-pages\nrm .git/index\ngit clean -fdx\necho "My GitHub Page" > index.html\ngit add .\ngit commit -a -m "First pages commit"\ngit push origin gh-pages\n```\n\n## Setup Git\n\n### Key\n\nTo successfully publish your documentation on a Continuous integration environment, or anything other than your local machine, you will need to set up a `GH_TOKEN` environment variable.\n\n```bash\nGH_TOKEN={github key with write access}\n```\n\n### Name and Email\n\nIgnite also needs a git name and email set to publish. To ensure this works locally and in the CI environment these values are pulled from the package.json author.\n\n```json\n{\n  "author": {\n    "name": "Your Name",\n    "email": "your_github@email.com"\n  }\n}\n```\n\n## Setup Script\n\nNow all you need to do is setup up a `script` in package.json to publish the documentation.\n\n```json\n{\n  "scripts": {\n    "publish:docs": "ignite --publish"\n  }\n}\n```\n\nNow all that\'s left to do is to publish to github-pages! Run the publish docs command and if everything goes well your \'gh-pages\' branch should be updated with the new documentation bundle. A little more setup is needed for a Continuos Integration environment.\n\n## Continuous Integration\n\n### Circle CI\n\nMake sure you have set up the `GH_TOKEN` environment variable. Then add the publish job to your `config.yml`.\n\n```yaml\npublishDocs:\n    <<: *defaults\n    steps:\n      - attach_workspace:\n          at: ~/YourProject\n      - run:\n          name: Publish Docs\n          command: yarn publish:docs\n```\n\nTo publish the documentation on each commit to master, add this to your `config.yml`.\n\n```yaml\n- publishDocs:\n    requires:\n        - lint\n        - test\n    filters:\n      branches:\n        only:\n          - master\n```\n'},{id:"pages/Theming.md",body:"# Theming\n\nIgnite offers a variety ways to theme the documentation website.\n\n## Default Color\n\nSet the default color for everything across the app. This set the header, links, and all low level colored things.\n\n```bash\nignite --color '#f44336'\n```\n\n## Selected Color\n\nSet the color for the highlight in the sidebar. Useful when changing the bulma theme.\n\n```bash\nignite --selectedColor '#fff'\n```\n\n## Bulma Theme\n\nSets the bulma theme for the app. Default and Selected colors both override the bulma theme. All available [Bulma Themes](https://jenil.github.io/bulmaswatch/).\n\n```bash\nignite --bulmaTheme nuclear\n```\n"},{id:"pages/home.md",body:"# Home Page\n\nIf you want to have a home page (or a cover page) for your documentation website, all you have to do is add a `home.md` to your source folder. This page is good for summing up the features of whatever you are documenting. Head over [here](/Ignite/home.html) to see our home page.\n\n::: message is-warning is-three-fifths is-offset-one-fifth\n\n:warning: All hero sections in the home page are given full width to make the look pretty.\n\n:::\n"}];e.default=i,n.exports=e.default}}]);
//# sourceMappingURL=search-files.js.map