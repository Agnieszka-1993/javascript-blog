
'use strict';

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
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){


  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);

  if (titleList) {
    titleList.innerHTML = '';
  } else {
    console.error('Nie znaleziono elementu .list.titles');
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

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    console.log('link Html to:',linkHTML);

    /* insert link into titleList */

    html = html + linkHTML;
  }
  titleList.innerHTML = html;


  const links = document.querySelectorAll('.titles a');
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks();

function generateTags(){
  /* find all articles */

  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles',articles);

  /* START LOOP: for every article: */

  for (const article of articles){

    /* find tags wrapper */

    const taglist = article.querySelector(optArticleTagsSelector);
    console.log('taglist',taglist);

    /* make html variable with empty string */

    let html = '';
    console.log('html',html);

    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags',articleTags);

    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');

    /* START LOOP: for each tag */

    for (let tag of articleTagsArray) {
      console.log('tag',tag);

      /* generate HTML of the link */

      const linkHTML = '<li><a href="#' + articleTags + '"><span>' + tag + '</span></a></li>';

      /* add generated code to html variable */

      html = html + linkHTML + ' ';

      /* END LOOP: for each tag */

    }

    /* insert HTML of all the links into the tags wrapper */

    taglist.innerHTML = html;

    /* END LOOP: for every article: */

  }
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-','');
  console.log('tag',tag);

  /* find all tag links with class active */

  const tagActiveLinks = document.querySelectorAll('.tags a.active');

  /* START LOOP: for each active tag link */

  for (let tagActiveLink of tagActiveLinks) {

    /* remove class active */

    tagActiveLink.classList.remove('active');

  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */

  const tagLinks = document.querySelectorAll('a[href="' + href +'"]');
  console.log('taglinks', tagLinks);

  /* START LOOP: for each found tag link */

  for (let tagLink of tagLinks) {

    /* add class active */

    tagLink.classList.add('active');

  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */

  const tagLinks = document.querySelectorAll('.tags a');

  /* START LOOP: for each link */

  for ( let tagLink of tagLinks) {

    /* add tagClickHandler as event listener for that link */

    tagLink.addEventListener('click', tagClickHandler);

  /* END LOOP: for each link */
  }
}

addClickListenersToTags();