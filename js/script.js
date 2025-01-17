{
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
  }

    const optArticleSelector = '.post',
          optTitleSelector = '.post-title',
          optTitleListSelector = '.titles';

    function generateTitleLinks(){

      /* remove contents of titleList */

      function clearMessages(){
        document.getElementById('messages').innerHTML = '';
      }

      /* for each article */

      console.log('Selector:', optArticleSelector);
      const articles = document.querySelectorAll(optArticleSelector);
      console.log('Articles found:', articles);

      let html = '';

      for (const article of articles){

        /* get the article id */

        const articleId = article.getAttribute('id');

        /* find the title element */
        /* get the title from the title element */

        const articleTitle = article.querySelector(optTitleSelector).innerHTML;

        /* create HTML of the link */

        linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

        console.log('link Html to:',linkHTML);

        /* insert link into titleList */

        html = html + linkHTML;
      }
      titleList.innerHTML = html;


    }
      const links = document.querySelectorAll('.titles a');
      for (let link of links) {
        link.addEventListener('click', titleClickHandler);
  }

    generateTitleLinks();


}