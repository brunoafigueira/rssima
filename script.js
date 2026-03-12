const feeds = [

{nome:"G1 Economia", url:"https://g1.globo.com/rss/g1/economia/"},
{nome:"Valor Econômico", url:"https://valor.globo.com/rss/"},
{nome:"InfoMoney", url:"https://www.infomoney.com.br/feed/"},
{nome:"Exame Economia", url:"https://exame.com/feed/"},
{nome:"CNN Brasil Economia", url:"https://www.cnnbrasil.com.br/economia/feed/"},
{nome:"Estadão Economia", url:"https://rss.estadao.com.br/economia.xml"},

{nome:"ConJur", url:"https://www.conjur.com.br/rss.xml"},
{nome:"Consultor Jurídico", url:"https://www.conjur.com.br/rss.xml"},
{nome:"Migalhas", url:"https://www.migalhas.com.br/rss"},
{nome:"Jota", url:"https://www.jota.info/feed"},
{nome:"Justificando", url:"https://www.justificando.com/feed/"},

{nome:"STF Notícias", url:"https://www.stf.jus.br/portal/rss/noticiaRss.asp"},
{nome:"STJ Notícias", url:"https://www.stj.jus.br/sites/portalp/rss/noticias.xml"},
{nome:"CNJ Notícias", url:"https://www.cnj.jus.br/feed/"},
{nome:"TST Notícias", url:"https://www.tst.jus.br/rss/-/asset_publisher/89Dk/rss"},

{nome:"AB2L Legaltech", url:"https://www.ab2l.org.br/feed/"},
{nome:"Artificial Lawyer", url:"https://www.artificiallawyer.com/feed/"},
{nome:"LawSites", url:"https://www.lawsitesblog.com/feed"},
{nome:"Legal IT Insider", url:"https://legaltechnology.com/feed/"},

{nome:"Serasa Experian", url:"https://www.serasaexperian.com.br/conteudos/feed/"},
{nome:"SPC Brasil", url:"https://www.spcbrasil.org.br/blog/feed/"},
{nome:"Proteste", url:"https://www.proteste.org.br/rss"},
{nome:"Banco Central Notícias", url:"https://www.bcb.gov.br/rss/noticias"},

{nome:"Tecnoblog", url:"https://tecnoblog.net/feed/"},
{nome:"Olhar Digital", url:"https://olhardigital.com.br/feed/"},
{nome:"MIT Technology Review BR", url:"https://mittechreview.com.br/feed/"},
{nome:"VentureBeat AI", url:"https://venturebeat.com/category/ai/feed/"}

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
