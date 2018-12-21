---
title: Boats Animator
repository: https://github.com/charlielee/boats-animator
version: 0.8.0
layout: page
permalink: boats-animator/
redirect_from:
- boatsanimator/
- animator/
gallery_img: assets/boats-animator/screenshot-1-gallery-image.jpg
excerpt: An open-source stop motion animation program created using NW.js.
hero_cover: true
hero_img: assets/boats-animator/screenshot-1-reduced.jpg
hero_text: A free open-source stop motion animation program.
hero_button_text: Download Boats Animator
hero_button_link: "#downloads"
hero_social: true
hero_social_github: https://github.com/charlielee/boats-animator
hero_social_docs: http://boatsanimator.readthedocs.io/
---
## Introduction

**Boats Animator** is a free and open-source stop motion animation program for Windows, macOS and Linux. Its intuitive interface caters to animators of all levels and offers many powerful features. The program has been open sourced under the GNU General Public License and contributions are welcome to the project's active [GitHub repository]({{ page.repository }}).

![Screenshot of Boats Animator](../assets/boats-animator/screenshot-1-reduced.jpg)

## Features

### Instant Playback

![Playback](../assets/boats-animator/playback.png) Instantly preview your captured frames with Boats Animator. Unlike other programs, there is no need to wait for the frames to process.

### Onion Skinning

![Onion skinning](../assets/boats-animator/onion-skin.png) This professional feature helps keep your animations smooth by showing you a translucent version of the last image captured. 

### High resolution and multi device support

![Capture options](../assets/boats-animator/capture-options.png) Boats Animator supports high resolution frame capture, including 1080p and beyond! It's also simple to switch between multiple connected devices for multi-camera shots.

### For Windows, macOS and Linux

![Cross platform](../assets/boats-animator/cross-platform.png) Boats Animator is built with [web technologies](http://nwjs.io/) which means it runs equally well on all major desktop operating systems.

### Open Source

![GitHub logo](../assets/boats-animator/github-logo.png) With an open-source code base, new features are always being added to Boats Animator by people **just like you**. [Your suggestions]({{ page.repository }}/issues) and contributions improve Boats Animator for everyone.

## Downloads

| Windows | macOS | Linux |
| - | - | - |
| [Boats Animator {{ page.version }} installer]({{ page.repository }}/releases/download/v{{ page.version }}/Boats-Animator-{{ page.version }}-Setup.exe) | [Boats Animator {{ page.version }} .zip file]({{ page.repository }}/releases/download/v{{ page.version }}/Boats-Animator-{{ page.version }}-osx-x64.zip) | [Boats Animator {{ page.version }} .tar.gz (64 bit)]({{ page.repository }}/releases/download/v{{ page.version }}/Boats-Animator-{{ page.version }}-linux-x64.tar.gz) |
| [Boats Animator {{ page.version }} .zip file]({{ page.repository }}/releases/download/v{{ page.version }}/Boats-Animator-{{ page.version }}-win-ia32.zip) | | [Boats Animator {{ page.version }} .tar.gz (32 bit)]({{ page.repository }}/releases/download/v{{ page.version }}/Boats-Animator-{{ page.version }}-linux-ia32.tar.gz) |

#### Other

<ul class="plainlist">
  <li><a href="{{ page.repository }}/releases">Other downloads and release information</a></li>
  <li><a href="http://boatsanimator.readthedocs.io/en/latest/introduction/system-requirements/">System requirements</a></li>
  <li><a href="http://boatsanimator.readthedocs.io/">Documentation</a></li>
  <li><a href="{{ page.repository }}">GitHub Repository</a></li>
</ul>

## Recent News
{% capture get_category %}{{ page.category }}{% endcapture %}
{% for post in site.categories["Boats Animator"] limit:3 %}
<article class="item">
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <h4>{{ post.date | date: "%-d %B %Y" }}</h4>
  <p>{{ post.excerpt }}</p>
</article>
{% endfor %}

<a href="/category/boats-animator" class="button">Older posts</a>
