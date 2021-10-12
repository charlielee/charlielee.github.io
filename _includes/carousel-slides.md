<div class="carousel-container">
{% for slide in site.carousel_slides %}
  <div class="portfolio-item carousel-slide" style="background-image: url('{{ slide.image }}');">
    <h2>{{ slide.title }}</h2>

    _"{{ slide.content }}"_

    {% if slide.link %}
    [{{ slide.link }}]({{ slide.link }})
    {% endif %}

    {% if slide.image %}
    ![{{ slide.image-alt }}]({{ slide.image }})
    {% endif %}

  </div>
{% endfor %}
</div>
