const feeds = [
{ nome:"G1 Economia", url:"https://g1.globo.com/rss/g1/economia/" },
{ nome:"CNN Brasil Economia", url:"https://www.cnnbrasil.com.br/economia/feed/" },
{ nome:"Poder360 Economia", url:"https://www.poder360.com.br/economia/feed/" },
{ nome:"InfoMoney", url:"https://www.infomoney.com.br/feed/" },
{ nome:"Exame", url:"https://exame.com/feed/" },

{ nome:"Migalhas", url:"https://www.migalhas.com.br/quentes/rss" },
{ nome:"ConJur", url:"https://www.conjur.com.br/rss.xml" },
{ nome:"JOTA", url:"https://www.jota.info/feed" },

{ nome:"STF", url:"https://portal.stf.jus.br/rss/noticia.asp" },
{ nome:"STJ", url:"https://www.stj.jus.br/sites/portalp/RSS/noticias" },

{ nome:"Canaltech", url:"https://feeds.feedburner.com/canaltechbr" },
{ nome:"Olhar Digital", url:"https://olhardigital.com.br/feed/" },

{ nome:"Serasa", url:"https://www.serasa.com.br/feed/" },
{ nome:"CNDL / SPC", url:"https://site.cndl.org.br/feed/" }
];

function formatDate(dateString){

const date = new Date(dateString);

const dia = String(date.getDate()).padStart(2,'0');
const mes = String(date.getMonth()+1).padStart(2,'0');
const ano = date.getFullYear();

const hora = String(date.getHours()).padStart(2,'0');
const min = String(date.getMinutes()).padStart(2,'0');

return `${dia}/${mes}/${ano} ${hora}:${min}`;
}

async function loadNews(){

const container = document.getElementById("news");

for(const feed of feeds){

try{

const response = await fetch(
`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`
);

const data = await response.json();

if(!data.items) continue;

data.items.slice(0,5).forEach(item => {

const li = document.createElement("li");

const dataFormatada = formatDate(item.pubDate);

li.innerHTML =
`<b>${dataFormatada}</b> | <b>${feed.nome}</b> — 
<a href="${item.link}" target="_blank">${item.title}</a>`;

container.appendChild(li);

});

}catch(err){

console.log("Erro no feed:", feed.nome);

}

}

}

loadNews();
