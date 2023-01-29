# charlielee.github.io

My personal website [charlielee.uk](https://www.charlielee.uk/) which is hosted with GitHub pages and created using [Jekyll](https://jekyllrb.com/).

## Usage

### Layouts

#### page

The default layout.

```yaml
---
title: Page Name
layout: page
---
Page contents.
```

#### post

Creates a page with the page's author and date of creation displayed.

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

| Variable     | Description                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------- |
| `collection` | If specified, the pages in that will be displayed in the gallery instead of the most recent posts. |
| `hero_text`  | The text to display on top of the "hero" image                                                     |

```yaml
---
title: Home
layout: home
collection: posts
---
Hero image text.
```

#### category

Creates a page listing the posts in a specified `category`.

```yaml
---
title: Category Name
layout: category
category: Name of category to use
---
Category description text.
```

#### feed

- Creates a page of a specified `type` listing the posts in the category matching the `title` of the page.
- Currently the only possible value for type is `json`.

Note: the file extension of a page that is type `feed` should match the type in the file.

```yaml
---
title: Category Name
layout: feed
type: json
---
```

### Hero headers

Pages of layout `home` , `page`, `post` or `category` have a "hero" style header with the following variables:

| Variable               | Default value      | Description                                                                         |
| ---------------------- | ------------------ | ----------------------------------------------------------------------------------- |
| `hero_cover`           | `false`            | A Boolean value of if the hero header should fill the viewpoint.                    |
| `hero_title`           | `{{ page.title }}` | The title of the header.                                                            |
| `hero_text`            | none               | The sub-title of the header.                                                        |
| `hero_img`             | none               | The location of an image to use as the header's background.                         |
| `hero_img_round`       | none               | The location of an image to be rounded and used in the header.                      |
| `hero_button_text`     | none               | The text to display in the call to action button of the header.                     |
| `hero_button_link`     | none               | The link to navigate to when the header's call to action button is clicked.         |
| `hero_social`          | `false`            | Boolean value of whether social media icons should be displayed in the hero header. |
| `hero_social_github`   | none               | Url of a related GitHub page.                                                       |
| `hero_social_linkedin` | none               | Url of a related LinkedIn page.                                                     |
| `hero_social_email`    | none               | Url of a related email address.                                                     |
| `hero_social_docs`     | none               | Url of related documentation.                                                       |
| `hero_social_discord`  | none               | Url of a related Discord server invite.                                             |

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/charlielee/charlielee.github.io.

## License

This source code is available as open source under the terms of the [GPL-3.0 License](https://opensource.org/licenses/GPL-3.0).
