// Texto da atividade
var dados = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>"
// busca texto da cidade 1
var cidade1txtbuscainicio = dados.search("<b>->1");
var cidade1txtbuscafim = dados.search("<b>->2");
var cidade1txt = dados.substring(cidade1txtbuscainicio,cidade1txtbuscafim);
// busca texto da cidade 3
var cidade2txtbuscainicio = dados.search("<b>->2");
var cidade2txtbuscafim = dados.search("<b>->3");
var cidade2txt = dados.substring(cidade2txtbuscainicio,cidade2txtbuscafim);
// busca texto da cidade 3
var cidade3txtbuscainicio = dados.search("<b>->3");
var cidade3txtbuscafim = dados.search("</html>");
var cidade3txt = dados.substring(cidade3txtbuscainicio,cidade3txtbuscafim);

// busca nome da cidade 1
var cidade1infocidadebuscainicio = cidade1txt.search ("<b>->")+24;
var cidade1infocidadebuscafim = cidade1txt.search ("</b><br>")-1;
var cidade1infocidade = cidade1txt.substring(cidade1infocidadebuscainicio,cidade1infocidadebuscafim);
// busca nome da cidade 2
var cidade2infocidadebuscainicio = cidade2txt.search ("<b>->")+24;
var cidade2infocidadebuscafim = cidade2txt.search ("</b><br>")-1;
var cidade2infocidade = cidade2txt.substring(cidade2infocidadebuscainicio,cidade2infocidadebuscafim);
// busca nome da cidade 3
var cidade3infocidadebuscainicio = cidade3txt.search ("<b>->")+24;
var cidade3infocidadebuscafim = cidade3txt.search ("</b><br>")-1;
var cidade3infocidade = cidade3txt.substring(cidade3infocidadebuscainicio,cidade3infocidadebuscafim);






// busca Roteiro A da cidade 1
var cidade1roteiroabuscainicio = cidade1txt.split("<br>",4).join("<br>").length+4;
var cidade1roteiroabuscafim = cidade1txt.split("<br>",5).join("<br>").length;
var cidade1inforoteiroa = cidade1txt.substring(cidade1roteiroabuscainicio,cidade1roteiroabuscafim);
var cidade1roteiroa = cidade1inforoteiroa.split(";");
var cidade1roteiroaqtde = cidade1roteiroa.length;

// busca Roteiro B da cidade 1
var cidade1roteirobbuscainicio = cidade1txt.split("<br>",6).join("<br>").length+4;
var cidade1roteirobbuscafim = cidade1txt.split("<br>",7).join("<br>").length;
var cidade1inforoteirob = cidade1txt.substring(cidade1roteirobbuscainicio,cidade1roteirobbuscafim);
var cidade1roteirob = cidade1inforoteirob.split(";");
var cidade1roteirobqtde = cidade1roteirob.length;

// busca Roteiro C da cidade 1
var cidade1roteirocbuscainicio = cidade1txt.split("<br>",8).join("<br>").length+4;
var cidade1roteirocbuscafim = cidade1txt.split("<br>",9).join("<br>").length;
var cidade1inforoteiroc = cidade1txt.substring(cidade1roteirocbuscainicio,cidade1roteirocbuscafim);
var cidade1roteiroc = cidade1inforoteiroc.split(";");
var cidade1roteirocqtde = cidade1roteiroc.length;

// busca Roteiro A da cidade 2
var cidade2roteiroabuscainicio = cidade2txt.split("<br>",4).join("<br>").length+4;
var cidade2roteiroabuscafim = cidade2txt.split("<br>",5).join("<br>").length;
var cidade2inforoteiroa = cidade2txt.substring(cidade2roteiroabuscainicio,cidade2roteiroabuscafim);
var cidade2roteiroa = cidade2inforoteiroa.split(";");
var cidade2roteiroaqtde = cidade2roteiroa.length;
// busca Roteiro B da cidade 2
var cidade2roteirobbuscainicio = cidade2txt.split("<br>",6).join("<br>").length+4;
var cidade2roteirobbuscafim = cidade2txt.split("<br>",7).join("<br>").length;
var cidade2inforoteirob = cidade2txt.substring(cidade2roteirobbuscainicio,cidade2roteirobbuscafim);
var cidade2roteirob = cidade2inforoteirob.split(";");
var cidade2roteirobqtde = cidade2roteirob.length;
// busca Roteiro C da cidade 2
var cidade2roteirocbuscainicio = cidade2txt.split("<br>",8).join("<br>").length+4;
var cidade2roteirocbuscafim = cidade2txt.split("<br>",9).join("<br>").length;
var cidade2inforoteiroc = cidade2txt.substring(cidade2roteirocbuscainicio,cidade2roteirocbuscafim);
var cidade2roteiroc = cidade2inforoteiroc.split(";");
var cidade2roteirocqtde = cidade2roteiroc.length;

// busca Roteiro A da cidade 3
var cidade3roteiroabuscainicio = cidade3txt.split("<br>",4).join("<br>").length+4;
var cidade3roteiroabuscafim = cidade3txt.split("<br>",5).join("<br>").length;
var cidade3inforoteiroa = cidade3txt.substring(cidade3roteiroabuscainicio,cidade3roteiroabuscafim);
var cidade3roteiroa = cidade3inforoteiroa.split(";");
var cidade3roteiroaqtde = cidade3roteiroa.length;
// busca Roteiro B da cidade 3
var cidade3roteirobbuscainicio = cidade3txt.split("<br>",6).join("<br>").length+4;
var cidade3roteirobbuscafim = cidade3txt.split("<br>",7).join("<br>").length;
var cidade3inforoteirob = cidade3txt.substring(cidade3roteirobbuscainicio,cidade3roteirobbuscafim);
var cidade3roteirob = cidade3inforoteirob.split(";");
var cidade3roteirobqtde = cidade3roteirob.length;
// busca Roteiro C da cidade 3
var cidade3roteirocbuscainicio = cidade3txt.split("<br>",8).join("<br>").length+4;
var cidade3roteirocbuscafim = cidade3txt.split("<br>",9).join("<br>").length;
var cidade3inforoteiroc = cidade3txt.substring(cidade3roteirocbuscainicio,cidade3roteirocbuscafim);
var cidade3roteiroc = cidade3inforoteiroc.split(";");
var cidade3roteirocqtde = cidade3roteiroc.length;


var cidadesavaliadasprincipal = ("CIDADES AVALIADAS" + "\n" + cidade1infocidade + "\n" + cidade2infocidade + "\n" + cidade3infocidade)
alert(cidadesavaliadasprincipal);


var cidadesavaliada1roteiroa = ("Roteiro para " + cidade1infocidade+ "\n" + cidade1roteiroa[0] + ", " +cidade1roteiroa[1] + " e " + cidade1roteiroa[2])
alert(cidadesavaliada1roteiroa);

var cidadesavaliada2roteiroa = ("Roteiro para " + cidade2infocidade+ "\n" + cidade2roteiroa[0] + ", " +cidade2roteiroa[1] + " e " + cidade2roteiroa[2])
alert(cidadesavaliada2roteiroa);

var cidadesavaliada3roteiroa = ("Roteiro para " + cidade3infocidade+ "\n" + cidade3roteiroa[0] + ", " +cidade3roteiroa[1] + " e " + cidade3roteiroa[2])
alert(cidadesavaliada3roteiroa);
