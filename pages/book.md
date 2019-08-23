---
layout: page
title: 读书笔记
titlebar: book
subtitle: <span class="mega-octicon octicon-clippy"></span> &nbsp;&nbsp; Java 人的精神家园。>&nbsp;&nbsp;>&nbsp;&nbsp;<a href ="http://www.justdojava.com/" target="_blank" ><font color="#EB9439">点我直达</font></a>
menu: book
css: ['blog-page.css']
permalink: /book
---

<div class="row">

    <div class="col-md-12">

        <ul id="posts-list">
            {% for post in site.posts %}
                {% if post.category=='book' or post.category=='book' or post.keywords contains 'book' %}
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