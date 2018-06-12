let coordenacao = [
	{"nome":"Carmen Oliveira Alveal","descricao":"Professora Drª. do Dep. de História e do Programa de Pós-Graduação em História da UFRN e UFC","imagem":"carmen", "lattes":"K4763249J0"},
    {"nome":"José Evangelista Fagundes","descricao":"Professor Dr. do Dep. de História da UFRN e do programa de Mestrado Profissional em história da UFRN","imagem":"evangelista", "lattes":"K4779323T5"},
    {"nome":"Magno Francisco de Jesus Santos","descricao":"Professor Dr. do Dep. de História e do Programa de Pós-Graduação em História da UFRN","imagem":"magno", "lattes":"K4757826Z9"},
    {"nome":"Maria da Conceição Guilherme Coelho","descricao":"Professora Drª. do Dep. de História da UFRN e do programa de Mestrado Profissional em história da UFRN.","imagem":"conceicao", "lattes":"K4705963D6"},
    {"nome":"Ronaldo Vainfas","descricao":"Professor Dr. do Dep. de História e do Programa de Pós-Graduação em História da UFRN e UFF","imagem":"vainfas", "lattes":"K4787526J3"}
]
let colaboradores = [
    {"nome":"Aldinízia de M. Souza", "descricao": "Mestre em História pela UFRN e professora do IFRN","imagem":"aldinizia", "lattes": "K4760200P9"},
    {"nome":"Ana Lunara da S. Morais", "descricao": "Mestre em História pela UFRN e doutoranda em História no PiudHist, Portugal","imagem":"ana_lunara", "lattes": "K4450742E6"},
    {"nome":"Patrícia de O. Dias", "descricao": "Doutoranda em História da UFF, Portugal","imagem":"patricia", "lattes": "K4458633Z7"},
    {"nome":"Antônia Márcia N. Pedroza", "descricao": "Mestre em História pela UFRN e doutoranda em História na UFC","imagem":"antonia", "lattes": "K4250563Y2"},
    {"nome":"Dayane Júlia C. Dias", "descricao": "Mestre em Demografia na UFRN","imagem":"dayane", "lattes": "K4343623H4"},
    {"nome":"Julio César V. de Alencar", "descricao": "Professor mestre no IFRN","imagem":"julio", "lattes": "K8709153Y5"},
    {"nome":"Thiago do N. Torres de Paula", "descricao": "Doutor em História pela UFPR, Pós-doutorando PPGED-UFRN","imagem":"thiago", "lattes": "K4533039T6"},
    {"nome":"Leonardo Paiva", "descricao": "Doutorando UERJ","imagem":"leonardo"},
    {"nome":"Marcos fonseca", "descricao": "Doutorando UERJ","imagem":"marcos"}
]


let equipe = [
    {"nome":"Adriana de Lima Pessoa", "descricao": "Graduanda em História na UFRN","imagem":"adriana"},
    {"nome":"Alan Abel Cavalcante Paiva", "descricao": "Graduando em História na UFRN","imagem":"abel"},
    {"nome":"Aledson Manoel Silva Dantas", "descricao": "Mestrando em História na UFRN","imagem":"aledson"},
    {"nome":"Aristildes Morais da Silva Neto", "descricao": "Graduando em História na UFRN","imagem":"aristildes"},
    {"nome":"Clara Maria da Silva", "descricao": "Graduanda em História na UFRN","imagem":"clara"},
    {"nome":"Cortez Rapozo de Oliveira Júnior", "descricao": "Graduando em História na UFRN","imagem":"cortez"},
    {"nome":"Daisy de Assis Silva", "descricao": "Graduanda em História na UFRN","imagem":"daisy"},
    {"nome":"Danielle Bruna Alves Neves", "descricao": "Graduanda em História na UFRN","imagem":"danielle"},
    {"nome":"Danyella Mayara da Costa Nascimento", "descricao": "Graduanda em História na UFRN","imagem":"danyella"},
    {"nome":"Elenize Trindade Pereira", "descricao": "Mestranda em História na UFRN","imagem":"elenize"},
    {"nome":"Emanuel Fernandes da Silva", "descricao": "Graduando em História na UFRN","imagem":"emanuel"},
    {"nome":"Gustavo Melo Couto", "descricao": "Mestrando em História na UFRN","imagem":"gustavo"},
    {"nome":"Iris Isabelle Carvalho Cavalcanti", "descricao": "Graduanda em História na UFRN","imagem":"iris"},
    {"nome":"Jocimara Camara da Silva", "descricao": "Graduanda em História na UFRN","imagem":"jocimara"},
    {"nome":"José Rodrigues da Silva Filho", "descricao": "Mestrando em História na UFRN","imagem":"jose"},
    {"nome":"Kallyane Santayne Pinto da Silva", "descricao": "Graduanda em História na UFRN","imagem":"kallyany"},
    {"nome":"Krishna Luchetti", "descricao": "Graduanda em História na UFRN","imagem":"krishna"},
    {"nome":"Lívia Brenda da Silva Barbosa", "descricao": "Mestranda em História na UFRN","imagem":"livia"},
    {"nome":"Marcel de Brito Mendes", "descricao": "Graduando em História na UFRN","imagem":"marcel"},
    {"nome":"Mateus Vicente Guerra Dantas Oliveira", "descricao": "Graduanda em História na UFRN","imagem":"mateus"},
    {"nome": "Micael Nicolas H. R. e Moura", "descricao": "Graduando em História UFRN", "imagem": "user"},
    {"nome":"Monique Maia de Lima", "descricao": "Mestranda em História na UFRN","imagem":"monique"},
    {"nome":"Pedro Henrique de Assunção Trigueiro", "descricao": "Graduando em História na UFRN","imagem":"pedro"},
    {"nome":"Rodrigo Santos do Nascimento", "descricao": "Graduando em História na UFRN","imagem":"rodrigo"},
    {"nome":"Sarah Karolina Sucar Ferreira", "descricao": "Graduanda em História na UFRN","imagem":"sarah"}
    
]
    for (let i = 0; i < coordenacao.length; i++) {
    document.getElementById("move").innerHTML += "<div class='item'><a class='linklattes' onclick='window.open(this.href); return false;' onkeypress='window.open(this.href); return false;' href='http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id="+ coordenacao[i].lattes +"'><div class='imagenes' style='background-image: url(images/membros/coordenacao/"+coordenacao[i].imagem +".JPG)'></div><p>"+coordenacao[i].nome+"</p><p class='descr'>"+coordenacao[i].descricao+"</p></a></div>";
    
}
document.getElementById("um").addEventListener("click", function(){
    document.getElementById("move").innerHTML = "";
    for (let i = 0; i < coordenacao.length; i++) {
        document.getElementById("move").innerHTML += "<div class='item'><a class='linklattes' onclick='window.open(this.href); return false;' onkeypress='window.open(this.href); return false;' href='http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id="+ coordenacao[i].lattes +"'><div class='imagenes' style='background-image: url(images/membros/coordenacao/"+coordenacao[i].imagem +".JPG)'></div><p>"+coordenacao[i].nome+"</p><p class='descr'>"+coordenacao[i].descricao+"</p></a></div>";
    }
});
document.getElementById("dois").addEventListener("click", function(){
    document.getElementById("move").innerHTML = "";
    for (let i = 0; i < colaboradores.length; i++) {
        document.getElementById("move").innerHTML += "<div class='item'><a class='linklattes' onclick='window.open(this.href); return false;' onkeypress='window.open(this.href); return false;' href='http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id="+ colaboradores[i].lattes +"'><div class='imagenes' style='background-image: url(images/membros/colaboradores/"+colaboradores[i].imagem +".JPG)'></div><p>"+colaboradores[i].nome+"</p><p class='descr'>"+colaboradores[i].descricao+"</p></a></div>";  
    }
});
document.getElementById("tres").addEventListener("click", function(){
    document.getElementById("move").innerHTML = "";
    for (let i = 0; i < equipe.length; i++) {
        document.getElementById("move").innerHTML += "<div class='item'><div class='imagenes' style='background-image: url(images/membros/equipe/"+equipe[i].imagem +".JPG)'></div><p>"+equipe[i].nome+"</p><p class='descr'>"+equipe[i].descricao+"</p></div>";   
    }
});
// events
document.getElementById("um").addEventListener("click", function(){
    x = 0;
    document.getElementById("move").style.marginLeft = x+"px";
    confr = (doom.length - 3)*(-300);
    document.getElementById("move").style.width = (doom.length * 500) + "px";
});
document.getElementById("dois").addEventListener("click", function(){
    x = 0;
    document.getElementById("move").style.marginLeft = x+"px";
    confr = (doom.length - 3)*(-350);
    document.getElementById("move").style.width = (doom.length * 400) + "px";
});
document.getElementById("tres").addEventListener("click", function(){
    x = 0;
    document.getElementById("move").style.marginLeft = x+"px";
    confr = (doom.length - 3)*(-350);
    document.getElementById("move").style.width = (doom.length * 400) + "px";
});
let artigos = [
    {"nome":"<strong>As vexações e opressões dos senhores coloniais e a constituição da carta Régia de 1753 no Brasil Colonial:</strong> a tradição da posse e o justo título.", "link": "http://www.outrostempos.uema.br/OJS/index.php/outros_tempos_uema/article/view/574"},
    {"nome": "<strong>Senhores de pequenos mundos:</strong>disputas por terras e os limites do poder local na América portuguesa.", "link": "http://periodicos.ufpb.br/ojs/index.php/srh/article/view/15033"},
    {"nome": "<strong>A legitimidade da graça:</strong>os impactos da tentativa de reforço da política sesmarial sobre as terras da Casa da Torre na capitania da Paraíba (século XVIII)." ,"link": "http://www.revistatopoi.org/topoi30/A30_02_78.pdf"},
    {"nome": "<strong style='color: red'>Meu ofício, moeda e sustento:</strong> propriedade de ofícios na capitania de Pernambuco no período Post-Bellum.", "link": "http://revistahistorien.com.br/arquivos/14aledson.pdf"},
    {"nome": "<strong style='color: red'>O sertão, os dízimos e a ajuda de custo:</strong> conflitos de jurisdição na capitania do Rio Grande (1735-1736).", "link": "http://revistahistorien.com.br/arquivos/08fonseca.pdf"},
    {"nome": "<strong style='color: red'>Com os ramos nas mãos, para o lucro dos homens e da Coroa:</strong> os autos de arrematação da Provedoria da Fazenda Real do Rio Grande (1673-1723)", "link": "https://seer.ufmg.br/index.php/temporalidades/article/view/3437/2625"},
    {"nome": "<strong style='color: red'>Das terras doadas ouvi dizer:</strong> doação de sesmarias na fronteira do império, capitania do Rio Grande (1600-1614).", "link":"http://revistahistorien.com.br/arquivos/10elenize.pdf"},
    {"nome": "<strong>Quanto peixe se compra com um vintém?</strong> Análise da atividade pesqueira e as querelas derivadas desta na capitania do Rio Grande, 1650-1750.", "link":"https://sites.google.com/site/revistaultramares/quanto-peixe-se-compra-com-um-vintem-analise-da-atividade-pesqueira-e-as-querelas-derivadas-desta-na-capitania-do-rio-grande-1650-1750"},
    {"nome": "<strong>O Tirano e Digno Cristóvão Soares Reimão:</strong> Conflito de Interesses Locais e Centrais nas Capitanias de Itamaracá, Ceará, Paraíba e Rio Grande no Final do Século XVII e Início do Século XVIII.", "link": "https://sites.google.com/site/revistaultramares/o-tirano-e-digno-cristovao-soares-reimao-conflito-de-interesses-locais-e-centrais-nas-capitanias-de-itamaraca-ceara-paraiba-e-rio-grande-no-final-do-seculo-xvii-e-inicio-do-seculo-xviii"},
    {"nome": "<strong>Para além dos espaços da Cidade do Natal (1720-1759):</strong> administração camarária na capitania do Rio Grande", "link": "http://media.wix.com/ugd/5a45bd_7172b96dedef405eb7391c5ef8ae5132.pdf"},
    {"nome": "<strong>A ribeira dos interesses:</strong> contratos, fiscalidade e conflitos na revolta dos magnatas (capitania do Rio Grande, 1741-1744)", "link": "http://media.wix.com/ugd/5a45bd_10d05e55d8104e709ce91a56b6fd2ff1.pdf"},
    {"nome": "<strong style='color: red'>Muitos soldados, poucos fidalgos:</strong> os candidatos ao governo do Rio Grande (1700-1751).", "link": "http://revistahistorien.com.br/arquivos/06leonardo.pdf"},
    {"nome": "<strong>A marcha dos Carneiros:</strong> estratégias de ascensão e mobilidade social da família Carneiro nas Capitanias do Norte, séculos XVII e XVIII.", "link": "http://www.outrostempos.uema.br/OJS/index.php/outros_tempos_uema/article/view/14"},
    {"nome": "<strong>“Sempre muito obediente e com honrado procedimento”:</strong> o discurso do mérito dos candidatos ao governo da capitania do Rio Grande (1700-1739).", "link": "http://seer.uece.br/?journal=bilros&page=article&op=view&path%5B%5D=1325&path%5B%5D=1182"},
    {"nome": "<strong style='color: red'>Entre a distância e a fidelidade:</strong> relações entre os capitães-mores do Rio Grande e os governadores de Pernambuco (segunda metade do século XVII).", "link": "http://revistahistorien.com.br/arquivos/07livia.pdf"}
]
for (let i = 0; i < artigos.length; i++){
    document.getElementById("artigos").innerHTML += "<p><a href="+artigos[i].link +">"+artigos[i].nome+"</a></p>"
}
