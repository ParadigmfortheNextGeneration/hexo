title: Test a Categorized Post 3
feed_hide: false
section: syria
tags:
  - logic
  - war
  - syria
show_tags: true
category: syria
date: 2016-07-24 20:20:00
description: This had better be good.
image: politicians/kaine.jpg
---
What the hell are we going to do now?
![Kaine is a douche!](/images/politicians/kaine.jpg)
``` javascript
    var posts = category.posts.sort('-date');
    var data = pagination(category.path, posts, {
      perPage: perPage,
      layout: ['category', 'archive', 'index'],
      format: paginationDir + '/%d/',
      data: {
        category: category.name
      }
    }); ```