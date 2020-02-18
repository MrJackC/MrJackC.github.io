---
layout: page
title: Spring Boot 系列文章
titlebar: spring-boot
# subtitle: <span class="mega-octicon octicon-cloud-download"></span>&nbsp;&nbsp;
#      <a href ="https://github.com/ityouknow/spring-boot-leaning">更多 Spring Boot 2.0 精选课程 ， <font color="#EB9439">点我</font>查看！</a><br/>
#      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     # <a href ="http://www.ityouknow.com/assets/images/keeppuresmile.jpg">关注公众号：<font color="#00FF00">纯洁的微笑</font>，回复"springboot" 进群交流。</a>
menu: spring-boot
css: ['blog-page.css']
permalink: /spring-boot
keywords: Spring Boot 教程,Spring Boot 示例,Spring Boot 学习,Spring Boot 资源,Spring Boot 2.0
---

<div class="row">

    <div class="col-md-12">

        <ul id="posts-list">
            {% for post in site.posts %}
                {% if post.category=='springboot' %}
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