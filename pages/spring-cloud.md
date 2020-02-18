---
layout: page
title: Spring Cloud 系列文章
titlebar: spring-cloud
# subtitle: <span class="mega-octicon octicon-cloud-upload"></span>&nbsp;&nbsp;
#      <a href ="http://www.ityouknow.com/assets/images/keeppuresmile.jpg">关注公众号：<font color="#00FF00">纯洁的微笑</font>，回复"springcloud"进群交流。</a>
menu: spring-cloud
css: ['blog-page.css']
permalink: /spring-cloud
keywords: Spring Cloud 教程,Spring Cloud 示例,Spring Cloud 学习,Spring Cloud 资源,Spring Cloud
---

<div class="row">

    <div class="col-md-12">

        <!-- Blog list -->
        <ul id="posts-list">
            {% for post in site.posts %}
                {% if post.category=='springcloud' %}
                <li class="posts-list-item">
                    <div class="posts-content">
                        <span class="posts-list-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
                        <a class="posts-list-name bubble-float-left" href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
                        <span class='circle'></span>
                    </div>
                </li>
                {% endif %}
            {% endfor %}
        </ul>

        <!-- Pagination -->
        {% include pagination.html %}

        <!-- Comments -->
       <div class="comment">
         {% include comments.html %}
       </div>

    </div>

</div>
<script>
    $(document).ready(function(){

        // Enable bootstrap tooltip
        $("body").tooltip({ selector: '[data-toggle=tooltip]' });

    });
</script>