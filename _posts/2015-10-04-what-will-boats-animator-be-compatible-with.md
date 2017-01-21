---
title: What will Boats Animator be compatible with?
author: Charlie Lee
layout: post
categories:
  - Boats Animator
---
Boats Animator has been created using HTML 5 and JavaScript which means in theory it should work in any web browser on any operating system. Right now it pretty much does in the Windows versions of Chrome Desktop, Firefox Desktop, Opera and even Microsoft Edge. I am sure it will also work in the browsers mentioned before that have Mac and Linux versions.

However this will soon not be the case. The JavaScript encoder [Whammy](https://github.com/antimatter15/whammy) that I plan to use makes use of the WebP image format but this currently only works in Google Chrome and Opera. In addition only Chrome and Opera support the WebRTC feature required to allow the ability to select video sources in a native interface. As a result I do not currently plan on hosting an online version of Boats Animator that can simply be used by navigating to a URL. Instead Boats Animator will be a downloadable Web App that runs in a wrapper.

This will achieved using [NW.js](http://nwjs.io/) which is essentially a cross platform Chromium wrapper (Chromium being the open source browser Google Chrome draws its source code from). With NW.js I can make Boats Animator appear like a native program with proper &#8220;File&#8221;, &#8220;Edit&#8221;, &#8220;Help&#8221;, etc menus, have better open and saving features and native pop up windows. NW.js&#8217;s Chromium basis means that Boats Animator will function in it almost exactly the same way as it does in Google Chrome and this means that the issues I mentioned above will also not occur.

So as well as making Boats Animator feel like a native application using NW.js will also sort out the cross-browser issues it will eventually have.

 **In summary Boats Animator will come in the form of a downloadable ZIP folder and will work on Windows, Mac and Linux based computers.**