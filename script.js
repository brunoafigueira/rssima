const feeds = [
"https://g1.globo.com/rss/g1/",
"https://feeds.folha.uol.com.br/emcimadahora/rss091.xml",
"https://rss.estadao.com.br/feed",
"https://www.cnnbrasil.com.br/rss",
"https://www.poder360.com.br/feed/"
];

async function loadNews(){

const container = document.getElementById("news");

for(const feed of feeds){

const response = await fetch(
"https://api.rss2json.com/v1/api.json?rss_url=" + feed
);

const data = await response.json();

data.items.slice(0,5).forEach(item => {

const li = document.createElement("li");

li.innerHTML =
`<a href="${item.link}" target="_blank">${item.title}</a>`;

container.appendChild(li);

});

}

}

loadNews();
