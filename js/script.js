'use strict';

/* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */

    clickedElement.classList.add('active');
    console.log('clickedElement:',clickedElement);

    /* remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post.active');
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector',articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log('targetArticle',targetArticle);

    /* add class 'active' to the correct article */

    targetArticle.classList.add('active');

    /* remove all links in left column */

    const linkList = document.querySelector('.link-list');
    linkList.innerHTML = '';

    /* Find all article in page */

    const articles = document.querySelectorAll('.artcle');

    /* Iteration through all articles */

    articles.forEach(article => {
      const articleId = article.getAttribute('id');
      const titleElement = article.querySelector('.title');
      const articleTitle = titleElement ? titleElement.innerHTML : 'not title';
      const linkHTML = `<li><a href="#${articleId}">${articleTitle}</a></li>`;
      linkList.innerHTML += linkHTML;
    });

  }

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }