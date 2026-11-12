
const dugmeler = document.querySelectorAll("nav button");
const baslik = document.getElementById("masalBaslik");
const metin = document.getElementById("masalMetin");
const motifler = {
"Öksüz Kız": "✿",
"Üç Turunçlar": "🍊",
"Zümrüdüanka Kuşu": "🪶",
"Keloğlan ve Padişahın Kızı": "♛",
"Tuz Kadar Sevgi": "♡",
"Dört Öğüt": "📜",
"Hüsnü Yusuf": "🕊",
"Keloğlan ve Altın Bülbül": "♫"
};

  dugmeler.forEach(function(dugme) {
dugme.addEventListener("click", function() {
const secilenAd = dugme.textContent.trim();
baslik.textContent = motifler[secilenAd] + " " + secilenAd;
dugmeler.forEach(function(digerDugme) {
digerDugme.classList.remove("secili");
digerDugme.removeAttribute("aria-current");
});

dugme.classList.add("secili");
dugme.setAttribute("aria-current", "true");
if (dugme.textContent.trim() === "Öksüz Kız") {
metin.textContent = "Annesini kaybeden bir kız, üvey annesinin verdiği ağır işlerle uğraşırmış. Her gün ineği otlatmaya gider, yanında yalnızca kuru bir ekmek götürürmüş. Konuşabilen inek ona yiyecek verir, eğirmesi gereken pamuğu da incecik ipliğe dönüştürürmüş.\n\nÜvey anne bu yardımdan şüphelenerek ineği kestirmiş. Kız, ineğin son isteğini yerine getirip kemiklerini beyaz bir beze sararak yemliğin altına koymuş.\n\nBir gün üvey annesiyle kardeşi saraydaki düğüne giderken kıza iki imkânsız iş bırakmışlar: Bir kazanı gözyaşıyla doldurmak ve birbirine karıştırılmış buğdaylarla mercimekleri ayırmak. Yoldan geçen tuzcu, suya tuz karıştırmasını önermiş. Kızın ekmeğini paylaştığı kalbur satıcıları da taneleri ayırmasına yardım etmiş.\n\nİşlerini bitiren kız yemliğe gidince güzel giysiler ve bir at bulmuş. Düğüne katılmış, dönerken ayakkabısını çeşmede düşürmüş. Ayakkabıyı bulan şehzade sahibini aratmış. Ayakkabı yalnızca öksüz kıza uyunca onunla evlenmiş; kızın sıkıntılı günleri sona ermiş.";
} else if (dugme.textContent.trim() === "Üç Turunçlar") {
metin.textContent = "Bir şehzade, yaşlı bir kadının testisini taş atarak kırmış. Kadının sözlerinin ardından üç turunçları bulma arzusuna kapılıp yola çıkmış.\n\nYolda aslan yavrularını bir yılandan kurtarmış, annelerinin ayağındaki dikeni çıkarmış. Aslan da ona devin kalesine nasıl gireceğini öğretmiş. Şehzade kalede hayvanlara uygun yiyecekler vermiş, dikenli bitkilere nazik davranmış. Üç turuncu alırken yaptığı iyilikler sayesinde kaçabilmiş.\n\nTurunçları su yanında açması gerektiğini unutmuş. İlk ikisinden çıkan kızlar susuzluktan ölmüş. Sonuncuyu göl kıyısında açıp içindeki kızı kurtarmış. Ona yüzüğünü vererek saraydan bir karşılama alayı getirmeye gitmiş.\n\nBu sırada başka bir kız, turunç güzelini kandırıp güvercine dönüştürmüş ve onun yerine geçmiş. Güzel kız daha sonra bir kavak ağacına, ardından tahta parçasına dönüşmüş. Tahtayı evine götüren yaşlı kadının yanında yeniden insan olmuş.\n\nŞehzadenin üzüntüden hastalandığını duyunca ona yaptığı çorbaya yüzüğü koymuş. Yüzüğü tanıyan şehzade gerçeği öğrenmiş. Aldatmaca ortaya çıkmış ve iki sevgili yeniden kavuşmuş.";
} else if (dugme.textContent.trim() === "Zümrüdüanka Kuşu") {
metin.textContent = "Bir padişahın bahçesindeki elmaları her yıl bir dev çalarmış. Büyük ve ortanca şehzadeler onu durduramamış. Küçük kardeşleri ise devi yaralayıp peşinden gitmiş.\n\nÜç kardeş bir kuyu bulmuş. Küçük şehzade aşağı inerek devi yenmiş ve tutsak üç kız kardeşi kurtarmış. Kızlar yukarı çıkarılmış, fakat şehzadenin ipi kopmuş. Kurtardığı kızın öğrettiği büyüyle beliren iki koyundan karasının üzerine düşünce yerin daha derinlerine gitmiş.\n\nOrada suyun önünü kesen bir ejderhayı yenmiş. Kurtardığı yaşlı kadın, yeryüzüne ancak Zümrüdüanka’nın yardımıyla dönebileceğini söylemiş.\n\nKuşu arayan şehzade, onun yavrularını bir yılandan kurtarmış. Zümrüdüanka teşekkür etmek için dileğini kabul etmiş. Uzun uçuş için et ve süt hazırlamasını istemiş.\n\nHazırlıklar tamamlanınca yola çıkmışlar. Şehzade yol boyunca kuşu beslemiş. Sonunda yeryüzüne ulaşmış, kardeşleriyle ve kurtardığı kızlarla buluşarak saraya dönmüş.";
} else if (dugme.textContent.trim() === "Keloğlan ve Padişahın Kızı") {
metin.textContent = "Keloğlan, köyünde zor durumlara bulduğu akıllıca çözümlerle tanınırmış. Bir gün padişahın, kızıyla evlenmek isteyenler arasında yarışma düzenlediğini duymuş. Annesi kaygılansa da hazırlanıp saraya gitmiş.\n\nPadişah adaylara üç soru soracağını açıklamış. İlk olarak gökteki yıldızların sayısını istemiş. Diğerleri susarken Keloğlan, yıldızların padişahın saç telleri kadar olduğunu söylemiş. Bu beklenmedik cevap saraydakileri güldürmüş.\n\nİkinci soru dünyanın merkezinin nerede olduğuymuş. Keloğlan durduğu yeri göstermiş, inanmayanların ölçebileceğini belirtmiş. Kimse bunu ölçmeye girişememiş.\n\nSon olarak padişah, iki parmakla dünyanın nasıl ters çevrileceğini sormuş. Keloğlan biraz düşünmüş, sonra bir ayna istemiş. Aynayı padişahın başının üzerinde tutarak ona dünyayı ters göstermiş.\n\nPadişahın kızı onun zekâsından etkilenmiş. Üç soruya da karşılık bulan Keloğlan yarışmayı kazanmış. Annesinin de katıldığı düğünle evlenmişler.";
} else if (dugme.textContent.trim() === "Tuz Kadar Sevgi") {
metin.textContent = "Bir padişah üç oğluna kendisini ne kadar sevdiklerini sormuş. Büyük oğlu sevgisini değerli taşlara, ortancası sevdiği tatlılara benzetmiş. Küçük oğlu ise babasını tuz kadar sevdiğini söylemiş.\n\nPadişah bu cevabı küçümseme sayıp oğlunun öldürülmesini emretmiş. Fakat görevliler şehzadeye kıyamamış ve onu serbest bırakmışlar. Genç, uzak bir ülkeye giderek yalnız yaşayan yaşlı bir kadına sığınmış.\n\nO ülkede yeni hükümdarı seçmek için bir talih kuşu uçurulurmuş. Kuş üç kez şehzadenin başına konunca halk onu padişah kabul etmiş. Genç hükümdar ülkesini iyi yöneterek insanların sevgisini kazanmış.\n\nYıllar sonra babasını kimliğini açıklamadan sarayına çağırmış. Konuklarına güzel yemekler hazırlatmış ama hiçbirine tuz koydurmamış. Babası yemeklerin lezzetsizliğinden yakınmış.\n\nGenç hükümdar eski sözünü hatırlatıp kimliğini açıklamış. Babası tuzun değerini ve oğlunun sevgisini anlayarak ona sarılmış. Barışmışlar; genç padişah hizmet ettiği halkının yanında kalmış.";
} else if (dugme.textContent.trim() === "Dört Öğüt") {
metin.textContent = "Yoksul bir adam, ailesini geçindirmek için gurbete gitmiş. Yirmi yıl çalıştıktan sonra evine dönmek istemiş. Ağası ona üç lira vermiş. Ağanın karısı da eşine götürmesi için içine altın sakladığı bir çörek hazırlamış.\n\nAdam ayrılmadan önce üç lirasını ağasından öğüt almak için vermiş. Gece yolculuk etmemesini, dibini görmediği sudan geçmemesini ve gerçeğini bilmediği konuda hüküm vermemesini öğrenmiş. Ağası son olarak bilmediği işe düşünmeden karışmamasını söylemiş.\n\nYolda katıldığı kervan gece ilerlerken o durmuş. Sabah kervanın saldırıya uğradığını görmüş. Sonra karşılaştığı bir atlı derin suya girip kaybolmuş; adam ise güvenli bir geçit aramış.\n\nKonakladığı köyde gördüğü tuhaf ve korkutucu duruma hemen yorum yapmamış. Ev sahibi, suskunluğunun sebebini öğrenince onu ödüllendirip köyüne göndermiş.\n\nEvine vardığında eşinin yanında genç bir erkek görmüş. Öfkeyle davranmak üzereyken son öğüdü hatırlayıp kapıyı çalmış. Gencin, yıllardır görmediği oğlu olduğunu öğrenmiş. Ailesine kavuşunca düşünerek davranmanın değerini anlamış.";
} else if (dugme.textContent.trim() === "Hüsnü Yusuf") {
metin.textContent = "Bir padişahın kızı, bahçedeki derenin yanında kırk bir beyaz güvercin görmüş. Kuşlar insan biçimine bürünmüş; kırkı genç kız, biri Hüsnü Yusuf adlı bir delikanlı olmuş. Delikanlı, kızın bileziğini alarak yeniden kuşa dönüşüp uzaklaşmış.\n\nOna gönlünü kaptıran kız beklemekten hastalanmış. Babası, gelenlerin ilginç olaylar anlattığı bir hamam yaptırmış. Bir ziyaretçi, güvercinlerin yaşadığı gizli yeri tarif etmiş.\n\nKız oraya gidip bir dolaba saklanmış. Hüsnü Yusuf geldiğinde konuşan dolap onun yerini açıklamış. İki genç kavuşmuş, fakat perilerin tehlikesinden korunmak için kız daha sonra Yusuf’un babasının sarayına götürülmüş. Orada bir oğulları doğmuş.\n\nGizli ziyaretler fark edilince saraydaki padişah gerçeği öğrenmiş. Hüsnü Yusuf’u perilerden kurtarmak için başka bir beyaz güvercini kullanarak onları yanıltmış. Periler, Yusuf sandıkları kuşun ardından ateşe atılmışlar.\n\nTehlike sona erince iki genç çocuklarıyla birlikte güvene kavuşmuş ve düğünleri yapılmış.";
} else if (dugme.textContent.trim() === "Keloğlan ve Altın Bülbül") {
metin.textContent = "Bir padişah camdan bir cami yaptırmış. Karşısına çıkan yaşlı bir adam, yapının Kafdağı’nın ardındaki Altın Bülbül ile tamamlanacağını söylemiş. Padişahın üç oğlu kuşu bulmak için yola çıkmış.\n\nYollar ayrılınca en zorlu yol küçük kardeşe düşmüş. Kararlılıkla ilerleyen genç, karşılaştığı bir ihtiyarın desteğiyle yolculuğunu sürdürmüş. Devleri yenmiş, peri kızlarından yol öğrenmiş ve bir kedinin yardımıyla Altın Bülbül’ü bulmuş.\n\nDönüşte ağabeylerini de yanına almış. Ancak onlar kıskançlıkla küçük kardeşlerini suya atıp kuşu babalarına götürmüşler. Altın Bülbül sarayda hiç ötmemiş.\n\nHayatta kalan genç, kimliğini gizleyerek Keloğlan görünümüne bürünmüş ve bir handa çalışmaya başlamış. Han sahibi hastalanınca ona şifa getirmesi umulan suyu almak için babasının yaptırdığı camiye gitmiş.\n\nAltın Bülbül onu görünce ötmeye başlamış. Padişah bu durumu araştırınca genç kimliğini açıklamış. Kuşu getirenin küçük oğlu olduğunu öğrenen padişah, diğer oğullarını saraydan uzaklaştırmış.";
} else {
metin.textContent = "Lütfen listeden bir masal seçin.";
}
});
});
let yaziBoyutu = 18;
metin.style.fontSize = yaziBoyutu + "px";

document.getElementById("buyut").addEventListener("click", function() {
if (yaziBoyutu < 30) {
yaziBoyutu = yaziBoyutu + 2;
metin.style.fontSize = yaziBoyutu + "px";
}
});

document.getElementById("kucult").addEventListener("click", function() {
if (yaziBoyutu > 14) {
yaziBoyutu = yaziBoyutu - 2;
metin.style.fontSize = yaziBoyutu + "px";
}
});
document.getElementById("masalAra").addEventListener("input", function() {
const aranan = this.value.trim().toLocaleLowerCase("tr");

  dugmeler.forEach(function(dugme) {
const isim = dugme.textContent.toLocaleLowerCase("tr");
dugme.parentElement.hidden = !isim.includes(aranan);
});
});
document.getElementById("temaDegistir").addEventListener("click", function() {
const geceAcik = document.body.classList.toggle("gece");
this.setAttribute("aria-pressed", String(geceAcik));

  if (geceAcik) {
this.textContent = "Gündüz moduna geç";
} else {
this.textContent = "Gece moduna geç";
}
});
document.getElementById("rastgeleMasal").addEventListener("click", function() {
const arama = document.getElementById("masalAra");
arama.value = "";
arama.dispatchEvent(new Event("input"));

  const sira = Math.floor(Math.random() * dugmeler.length);
dugmeler[sira].click();
});
