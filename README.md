# JSPteroAPI

[![GitHub](https://img.shields.io/github/license/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@linux123123/jspteroapi)](https://www.npmjs.com/package/@linux123123/jspteroapi)
[![GitHub issues](https://img.shields.io/github/issues/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/linux123123/jspteroapi)](https://github.com/Linux123123/JSPteroAPI/pulls)

**A simple Pterodactyl API library using node-fetch**

# To install:

<div class="mt-n1">
      <div class="d-flex text-small flex-justify-between">
        <h5 class="text-normal text-small text-gray mb-1 pb-1"><svg class="octicon octicon-terminal mr-1 v-align-text-top" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25H1.75zM7.25 8a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L5.44 8 3.72 6.28a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm1.5 1.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path></svg>Install from the command line:</h5>
        <span><a href="https://docs.github.com/articles/configuring-npm-for-use-with-github-package-registry/">Learn more</a></span>
      </div>
      <div class="Box bg-gray border-0 text-left mx-auto p-2">
        <code class='d-block bg-gray border-0 rounded-2 f6 lh-default'>
          <clipboard-copy
            id="npm-install"
            class="js-clipboard-copy rounded-1 d-block CopyBlock position-relative px-2 py-1 tooltipped-no-delay"
            aria-label="Copy"
            data-copy-feedback="Copied!"
            data-tooltip-direction="e"
            role="button"
            tabindex="0"
            value="npm install @linux123123/jspteroapi@1.3.1">
            <span class="text-gray-light">$</span> npm install @<span class="text-purple">linux123123</span>/<span class="text-purple">jspteroapi</span>@<span class="text-purple">1.3.1</span>
            <svg class="octicon octicon-clippy js-clipboard-clippy-icon text-blue right-0 mr-1 position-absolute" style="top: 5px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg>
            <svg class="octicon octicon-check js-clipboard-check-icon text-green position-absolute d-none" style="top: 6px; right: 5px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
          </clipboard-copy>
        </code>
      </div>
      <h5 class="text-normal text-gray f6 mb-1 mt-3 pb-1"><svg class="octicon octicon-code mr-1 v-align-text-top" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>Install via package.json:</h5>
      <div class="Box bg-gray border-0 text-left mx-auto p-2">
        <code class='d-block bg-gray border-0 rounded-2 f6 lh-default'>
          <clipboard-copy
            class="js-clipboard-copy rounded-1 d-block CopyBlock position-relative px-2 py-1 tooltipped-no-delay"
            aria-label="Copy"
            data-copy-feedback="Copied!"
            data-tooltip-direction="e"
            role="button"
            tabindex="0"
            value="&quot;@linux123123/jspteroapi&quot;: &quot;1.3.1&quot;">
            "@<span class="text-purple">linux123123</span>/<span class="text-purple">jspteroapi</span>": "<span class="text-purple">1.3.1</span>"
            <svg class="octicon octicon-clippy js-clipboard-clippy-icon text-blue right-0 mr-1 position-absolute" style="top: 5px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg>
            <svg class="octicon octicon-check js-clipboard-check-icon text-green position-absolute d-none" style="top: 6px; right: 5px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
          </clipboard-copy>
        </code>
      </div>

</div>

Then include it in your application:

```javascript
const node = require('jspteroapi');
const application = node.Application; // for application API
const client = node.Client; // for Client API
```

# How to use

To login use:

```javascript
application.login(HOST, API_KEY, (loggedIn, msg) => {
        if (loggedIn == true) {
            console.log('Pterodactyl has logged in!');
        } else {
            console.warn(msg);
        }
    }
);
})
```

And then you can use any funtion you want:

```javascript
application.function(parameters).then((response) => {
    // response
});
```

# Documentation

All the functions in https://docs.nodeactyl.xyz/ should work.

# Versions

**How versions work:**

-   The first number is the release.
-   The second number is the function release.
-   The third number is the bug fix release.

# Disclaimer

I am not responsible for any damages that you cause to your servers/nodes by using **this API**.

**Remember: This API can potentially be dangerous with the ability to Delete Servers/Nodes at an instant!**

# Contributors

Created and maintained by [Linux123123](https://github.com/linux123123)

Code snippets used from [Nodeactyl](https://github.com/Burchard36/Nodeactyl)
