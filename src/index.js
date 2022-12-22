import './index.less'
import './components/article/article.js'
import './components/menu/menu.js'
import data from './components/article/article.js'

const artAnchor = document.querySelector('.articles');

function articleMaker(article) {
    // create

    const div = document.createElement('div');
    const title = document.createElement('h2');
    const dateM = document.createElement('p');

    dateM.classList.add('date');
    
    const firstParagraph = document.createElement('p');
    const secondParagraph = document.createElement('p');
    const thirdParagraph = document.createElement('p');
    
    title.textContent = article['title'];
    dateM.textContent = article['date'];
    firstParagraph.textContent = article['firstParagraph'];
    secondParagraph.textContent = article['secondParagraph'];
    thirdParagraph.textContent = article['thirdParagraph'];

    const span = document.createElement('span');
    span.classList.add('expandButton');
    span.textContent = '+';

    // append

    div.appendChild(title);
    div.appendChild(dateM);
    div.appendChild(firstParagraph);
    div.appendChild(secondParagraph);
    div.appendChild(thirdParagraph);
    div.appendChild(span);

    //span

    span.addEventListener('click', () => {
        div.article.toggle('.article-open');
    })
    
    //return

    return div;

}

const dataElements = data.map(dataObj => {
    return articleMaker(dataObj);
})

dataElements.forEach(dataObj => {
    artAnchor.appendChild(dataObj);
})

const myArticle = [{
    title: 'Razorblade by The Strokes', 
    date: 'Dec, 21, 2022',
    firstParagraph: "Oh, razorblade, That's what I call love, I bet you'd pick it up and mess around with it if I put it down. It get's extremely complicated. Anything to forget everything",
    secondParagraph: "You've got to take me out at least once a week, whether I'm in your arms or I'm at your feet. I know exactly what you're thinkin', You won't say it now, But in your heart it's loud",
    thirdParagraph: "Oh, no, my feelings are more important than yours. Oh-oh-oh, drop dead, I don't care, I won't worry. Let it go"
}]

artAnchor.appendChild(myArticle);


/* <div class="article">
<h2>{title of the article}</h2>
<p class="date">{date of the article}</p>

{three separate paragraph elements}

<span class="expandButton">+</span>
</div> */