# boatsarerockable.github.io

My personal website created using Jekyll. When completed this will replace the Wordpress site currrently hosted at [charlielee.uk](http://charlielee.uk).

## Usage

### Layouts

#### page

The default layout. If an `img` is specified it will displayed behind the title.

```yaml
---
title: Page Name
layout: page
---
Page contents.
```

#### post

Creates a page with the page's author and date of creation displayed. If an `img` is specified it will displayed behind the title.

```yaml
---
title: Post Name
author: John Smith
categories:
  - Announcements
layout: post
---
Post contents.
```

#### home

Creates a page with a grid displaying recent posts.

| Variable | Description |
| - | - |
| `img` | The image to use as the "hero" image |
| `collection` | If specified, the pages in that will be displayed in the gallery instead of the most recent posts. Gallery items will also use the `img` and `external_url` specified on the page of the collection. |
| `hero_text` | The text to display on top of the "hero" image |

```yaml
---
title: Home
layout: home
collection: posts
img: assets/image.png
---
Hero image text.
```

#### category

Creates a page listing the posts in a specified `category`. If an `img` is specified it will displayed behind the title.

```yaml
---
title: Category Name
layout: category
category: Name of category to use
---
Category description text.
```

#### feed

* Creates a page of a specified `type` listing the posts in the category matching the `title` of the page.
* Currently the only possible value for type is `json`.

Note: the file extension of a page that is type `feed` should match the type in the file.

```yaml
---
title: Category Name
layout: feed
type: json
---
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/BoatsAreRockable/boatsarerockable.github.io.

## License

This source code is available as open source under the terms of the [GPL-3.0 License](https://opensource.org/licenses/GPL-3.0).

