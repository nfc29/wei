var FestivalData = (function($) {
	var obj = {};
	obj["亞洲_Asia"] = {
		"台灣_Taiwan": getTaiwan()
		,"日本_Japan": getJapan()
		,"韓國_Korea": getKorea()
		,"中國_China": getChina()
		,"印度_India": getIndia()
		,"泰國_Thailand": getThailand()
	}

	obj["歐洲_Europe"] = {
		"英國_England": getEngland()
		,"法國_France": getFrance()
		,"德國_Germany": getGermany()
		,"義大利_Italy": getItaly()
	}

	obj["非洲_Africa"] = {
		"南非_Africa": getAfrica()
	}

	obj["美洲_America"] = {
		"加拿大_Canada": getCanada()
		,"巴西_Brazil": getBrazil()
		,"阿根廷_Argentina": getArgentina()
		,"祕魯_Peru": getPeru()
		,"墨西哥_Mexico": getMexico()
		,"智利_Chile": getChile()
	}

	obj["大洋洲_Oceania"] = {
		"紐西蘭_New Zealand": getNewZealand()
		,"澳洲_Australia": getAustralia()
	}

	//================== 亞洲 ==================
	function getTaiwan(){
		var arr = [
			{title: '平溪天燈節慶', date: '2月中旬', img: 'images/festival/img_Taiwan01.jpg', link: '_link_', text: '新北市平溪區在每年元宵節所舉辦的活動，而近年已發展為全臺知名的節慶，與鹽水蜂炮齊名，有「南蜂炮，北天燈」之譽。將心願寫在天燈上，再簽上施放者的姓名，可以多人同時進行，通常是至少三人或以上，點燃底部金紙，當熱氣充滿天燈時便可施放。'}
			,{title: '台南鹽水蜂炮', date: '2月(農曆正月十五)', img: 'images/festival/img_Taiwan02.jpg', link: '_link_', text: '位在台南市的鹽水區，由鹽水武廟主辦，所謂蜂炮是指許多沖天炮組成的大型發炮台，點燃時萬炮齊發，會發出鳴聲，稱「蜂炮」。蜂炮的活動推測起於清光緒11年（1885年），當時瘟疫流行，居民基於民間習俗，向當地的「關聖帝君」（關公）祈求平安，並依占卜結果，在元宵節晚上，請出廟中的周倉爺做開路，關聖帝君殿後，一路燃放炮竹，繞鎮一晚。<span>flickr.comCC授權作者MIKI Yoshihito</span>'}
			,{title: '台東炸寒單爺', date: '2月(農曆正月十五)', img: 'images/festival/img_Taiwan03.jpg', link: '_link_', text: '寒單爺即是民間俗稱的「武財神」，據說寒單爺怕冷，所以人們就丟鞭炮為祂驅寒。元宵遊行活動中是以真人肉身扮演寒單爺接受炮竹的洗禮。一般人相信，「如果鞭炮炸的越旺，那一年的財運也就越旺」，所以只要是寒單爺神轎經過的地方，都是鞭炮炸射的對象。<span>flickr.comCC授權作者MIKI Yoshihito</span>'}
		];
		return arr;
	}

	function getJapan(){
		var arr = [
			{title: '千歲支笏湖冰濤祭', date: '1月下旬~2月中旬', img: 'images/festival/img_Japan01.jpg', link: '_link_', text: '用湖水噴成的冰濤和巨大的冰像，配合五彩的霓虹燈光，將支笏湖的冬天妝點得夢幻迷離。<span>flickr.comCC授權作者MIKI Yoshihito</span>'}
			,{title: '札幌雪祭', date: '2月上旬', img: 'images/festival/img_Japan02.jpg', link: '_link_', text: '全日本冬季最具代表性的札幌雪祭，每年都會依主題堆起超過300座的大型的冰雪雕塑，吸引觀光客前來戲雪同樂。'}
			,{title: '京都葵祭', date: '42505', img: 'images/festival/img_Japan03.jpg', link: '_link_', text: '葵祭遊行於每年5月15日舉行隊伍中有人再加上牛、馬參列其中，主祭神社為上茂賀神社及下鴨神社所共同主祭，遊行群眾穿著平安時代貴族服飾，頭上插著葵葉，具體展現平安時代之貴族風采，其中主祭官由設籍京都之未婚女性選出，稱之為「齋王代」，全身裝飾華麗為葵祭之焦點人物，而平安時代「齋王」為天皇未出嫁之女兒選出，由此可知地位之尊崇。<span>flickr.comCC授權作者MIKI Yoshihito</span>'}
			,{title: '東京神田祭', date: '42491', img: 'images/festival/img_Japan04.jpg', link: '_link_', text: '神田神社的祭典從江戶時代開始即為江戶兩大祭典之一。以每年的5月1日為主舉行的盛大祭典。此祭典期間是以太鼓嘉年華會及抬神轎，在街道上緩步前進的方式將氣氛炒熱。主要的大祭典則為隔年舉行。'}
			,{title: '東京江三社祭', date: '5/17~18', img: 'images/festival/img_Japan05.jpg', link: '_link_', text: '位於淺草寺境內的淺草神社祭典於每年的5月17日及18日左右的周末舉行、大約有100多臺左右的神轎，在街道上緩步前進將祭典的氣氛炒熱。'}
			,{title: '東京山王祭', date: '6/10~15', img: 'images/festival/img_Japan06.jpg', link: '_link_', text: '在赤阪、日枝神社的祭典是以每年6/15的例大祭為主要看頭，於6/10至6/15為期間舉行。因此祭典是隔年舉行的關係。當輪為主祭典年時還會與其他地區如大田樂、民族舞蹈大會等相關的活動共襄盛舉。'}
			,{title: '京都祇園祭', date: '7/1~29', img: 'images/festival/img_Japan07.jpg', link: '_link_', text: '祭典的主祭神社是八?神社，整個祭典的活動從每年七月一日的納吉符開始，一直到29日神事奉告祭為止，歷時一個月，而祭典的最高潮其實是在17日的山鉾巡行，也就是俗稱的花車大遊行，一共有32輛色彩鮮麗的巨型山鉾隊伍，每座山鉾高約25公尺，重約12公噸，整個遊行隊伍十分壯觀，每年都吸引數十萬的觀光人潮。'}
			,{title: '登別地獄祭', date: '8月下旬', img: 'images/festival/img_Japan08.jpg', link: '_link_', text: '閰羅大王將率領著赤鬼和青鬼在溫泉街上遊行，場面十分熱鬧盛大。'}
			,{title: '仙台七夕祭', date: '8月上旬', img: 'images/festival/img_Japan09.jpg', link: '_link_', text: '源自於中國的牛郎織女相會的七夕傳說，渡海到日本以後,變貌為具有廟會氣份的祭典，繫在綠竹上的彩紙彩球，將仙台的街道裝點的華麗繽紛。'}
			,{title: '青森侒武多祭', date: '8月上旬', img: 'images/festival/img_Japan10.jpg', link: '_link_', text: '日本首屈一指的大規模祭典，驅魔惡靈巨大的閃亮的佞武媚惑日本祭典嘉年華代表作。<span>flickr.comCC授權作者MIKI Yoshihito</span>'}
			,{title: '秋田竿燈祭', date: '8月上旬', img: 'images/festival/img_Japan11.jpg', link: '_link_', text: '具有360年歷史的竿燈祭，2百多根的燈籠串在天空中舞動，宛如光芒稻穗，熱力十足的搖晃寧靜的夜空，豐收祈願全民歡慶。<span>flickr.comCC授權作者MIKI Yoshihito</span>'}
			,{title: '山形花笠祭', date: '8月上旬', img: 'images/festival/img_Japan12.jpg', link: '_link_', text: '花笠祭享譽海外，最迷人的就是華麗的男女共舞花笠舞群。'}
			,{title: '京都時代祭', date: '42665', img: 'images/festival/img_Japan13.jpg', link: '_link_', text: '時代祭是1895年時為紀念桓武天皇遷都平安京1100年，特別建造平安神宮，神宮內供奉的就是桓武天皇，而時代祭也就此展開，祭典內容就是將京都建都後的一千年間，將每一個時代的人物服裝及風俗民情具體呈現，所有參加遊行的隊伍都必須穿著各時代之服飾，並扮演成歷史人物。'}
			,{title: '札幌白色嘉年華', date: '11月中旬~2月中旬', img: 'images/festival/img_Japan14.jpg', link: '_link_', text: '為了迎接美麗的白色耶誕節，街道兩旁的行道樹上會掛上燦爛的燈飾，非常浪漫且耀眼奪目。'}

		];
		return arr;
	}

	function getKorea(){
		var arr = [
			{title: '濟州OLLE健行節', date: '10/31~11/03', img: 'images/festival/img_Korea01.jpg', link: '_link_', text: '每年的秋季為徒步遊覽濟州島的最佳時節，濟州都會舉辦濟州偶來健行節。活動期間將規劃由當地村民精心安排的各種文化演出及美食攤位等節慶活動。期間還準備了專程為節慶活動而來的藝術家們深度的精彩演出。'}

		];
		return arr;
	}

	function getChina(){
		var arr = [
			{title: '黑龍江-哈爾濱冰雪節', date: '42374', img: 'images/festival/img_China01.jpg', link: '_link_', text: '中國哈爾濱國際冰雪節，簡稱「冰雪節」。冰雪節內容豐富，形式多樣，比較重要的活動有冰雪大世界、太陽島國際雪雕藝術博覽會和兆麟公園冰燈藝術博覽會，除此之外還有尚志公園彩燈大世界，冬泳比賽，冰球賽，雪地足球賽，速度滑冰比賽，高山滑雪比賽，各種級別和規模的冰雕、雪雕比賽，冰雪攝影展，圖書展，冰雪電影藝術節，冰上婚禮等活動。每年1月5日，根據天氣狀況和活動安排，持續時間一個月左右。'}
			,{title: '內蒙古-那達慕節', date: '8/27 ~9/3', img: 'images/festival/img_China02.jpg', link: '_link_', text: '鄂爾多斯國際那達慕大會（二年一屆）-那達慕是蒙古族人民喜愛的歷史悠久的傳統體育形式。“那達慕”是蒙語的譯音，意為“娛樂、遊戲”，以表示豐收的喜悅之情。那達慕是蒙古族人民喜愛的具有鮮明民族特色和濃郁地區特點的傳統活動，是草原上一年一度的傳統盛會，也是蒙古族人民歡樂的節日。'}

		];
		return arr;
	}

	function getIndia(){
		var arr = [
			{title: '印度色彩節', date: '每年3月前後的月圓之日', img: 'images/festival/img_India01.jpg', link: '_link_', text: '色彩節（Holi Festival）是印度三大節慶之一，在每年3月前後的月圓之日舉行，代表著色彩單調的冬天已經結束，隨之而來是春暖花開的春天。這天當地人播放著印度傳統音樂，忘情地唱歌跳舞，不管大人小孩，全都走上街頭，將彩色粉末，點抹在對方額頭以示祝福，更多人是直接抓起粉末互相噴灑「攻擊」，從頭到腳無所不塗，所到之處皆是不可思議的繽紛世界，空氣裡都懸浮著各色各樣的彩色粉末。'}

		];
		return arr;
	}

	function getThailand(){
		var arr = [
			{title: '潑水節', date: '4/13~15', img: 'images/festival/img_Thailand01.jpg', link: '_link_', text: '也稱宋干節，是泰語民族和東南亞地區最盛大的傳統節日，整個節慶歷時數日，人們清早起來便沐浴禮佛，之後便開始連續幾日的慶祝活動，這期間，大家用純淨的清水相互潑灑，祈求洗去過去一年的不順，新的一年重新出發。潑水節首二天是去舊，最後一天是迎新。此節日是新舊曆新年後，第三個在年初慶祝的節日。乃是中國新年後第二個民族性的節日。'}

		];
		return arr;
	}

	//================== 歐洲 ==================
	function getEngland(){
		var arr = [
			{title: '倫敦巧克力節', date: '3月底', img: 'images/festival/img_England01.jpg', link: '_link_', text: '倫敦每年在復活節前夕舉辦為期三天的巧克力節，世界頂尖的巧克力甜點大師齊聚一堂，展示其高超技巧的巧克力藝術品，節慶中會有高級手工巧克力品嘗活動，由專業人士為您介紹品嘗高級巧克力的獨特口感與辨別不同風格的巧克力。'}
			,{title: '倫敦美食節', date: '6月底', img: 'images/festival/img_England02.jpg', link: '_link_', text: '倫敦在每年六月底會舉辦為期四天的品味倫敦Taste of London美食節，邀請倫敦廚藝超群的廚師與頂級餐廳配合展現倫敦多元化的美食，還有許多參展攤位會提供其餐廳最具代表性的佳餚，整場盛會就像個倫敦精緻美食的縮影，吸引許多老饕前往更有機會看到廚師透露烹飪的小秘方!'}
			,{title: '愛丁堡國際藝術節', date: '8月', img: 'images/festival/img_England03.jpg', link: '_link_', text: '愛丁堡國際藝術節創辦於1947年，為世界歷史最悠久、規模最大的國際藝術節之一，內容包括了歌劇、音樂、戲劇和舞蹈表演等各種藝術形式。其中愛丁堡軍樂節是唯一老少咸宜、娛樂性最強的一個，為全球最具吸引力的文化活動之一。'}
			,{title: '萬聖節嘉年華', date: '10月最後一個星期日', img: 'images/festival/img_England04.jpg', link: '_link_', text: '萬聖節令人聯想到南瓜、蝙蝠、Treat-or-Trick還有各種角色扮演，英國中部的夏菲爾德Sheffield每年會舉辦全英規模最大的萬聖節嘉年華，在2011吸引了約四萬人參加其萬聖節遊行，讓許多人為了這天而精心打扮！一起到英國與吸血鬼、巫婆、精靈與其它各種生物一起感受截然不同的慶祝方式。'}

		];
		return arr;
	}

	function getFrance(){
		var arr = [
			{title: '尼斯嘉年華', date: '2月', img: 'images/festival/img_France01.jpg', link: '_link_', text: '位於蔚藍海岸的尼斯嘉年華與里約嘉年華、威尼斯嘉年華為世界三大嘉年華。尼斯嘉年華白天在南法暖陽下有大型人偶以及綴滿鮮花的花車遊行，夜晚還有璀璨的燈火遊行，遊客可以一同扮裝，感受蔚藍海岸的享樂氣氛。'}
			,{title: '蒙頓檸檬節', date: '2月中~3月初', img: 'images/festival/img_France02.jpg', link: '_link_', text: '聖經上說，亞當和夏娃因為受蛇的引誘而偷吃了知善惡樹的禁果，被上帝逐出了伊甸園。臨走時，他們帶走了這枚沒吃完的“金色果子”。後來，亞當說：你把它扔了吧。夏娃說：我要選個好地方把它埋起來，這地方就是後來的蒙頓。每年2～3月正是黃澄多汁的檸檬產季，利用當地柑橘裝飾色彩繽紛的街道與巨型花車，在蔚藍天空的襯托下凸顯檸檬黃的鮮豔，溫柔的海風帶來檸檬的清香，淳樸溫馨的氣氛，這就是在濱海太陽大道舉行的「金色水果大遊行」。'}
			,{title: '波爾多紅酒節', date: '兩年一度，6月底舉辦，為期四天', img: 'images/festival/img_France03.jpg', link: '_link_', text: '若把巴黎鐵塔比喻作法國的首級，讓人一看便認得；那麼，波爾多紅酒應該是法國的血吧，展現法國的優越和獨特。每隔兩年，世界各地的愛酒之人都雲集波爾多，以舌尖見證波爾多紅酒的魅力，以味蕾見識波爾多紅酒變化萬千的酒味。波爾多葡萄酒節每年吸引全球逾50萬名杯中物愛好者，邊嚐美酒邊欣賞音樂表演等。'}
			,{title: '薰衣草季', date: '6月下旬', img: 'images/festival/img_France04.jpg', link: '_link_', text: '初夏時分，又是薰衣草盛開的季節，在普羅旺斯最著名的「薰衣草之路」，您可親身感受，被薰衣草花田四處環繞著的深刻感動，薰衣草的香味撲鼻而來，整片的薰衣草田宛如深紫色的波浪層層疊疊地上下起伏，美麗萬分。'}
			,{title: '亞維儂藝術節', date: '7/4~27', img: 'images/festival/img_France05.jpg', link: '_link_', text: '1947年，法國藝術家Jean Vilar於熱情的南法小鎮創辦如今已舉世聞名的藝術慶典。每年活動期間，總會吸引大批來自世界各地(包括台灣)的表演藝術團體齊聚此地。在灑滿陽光的街道上，整個亞維儂城鎮成為表演者的舞台，熙來攘往的群眾與表演者共同感受這令人耳目一新的夏日風情。'}
			,{title: '國慶+折扣季', date: '42565', img: 'images/festival/img_France06.jpg', link: '_link_', text: '國慶日是法國的重大節慶，從早到晚都有慶典活動，除了盛大的閱兵式外，艾菲爾鐵塔還會施放壯觀的煙火秀，另外每年只有兩次的瘋狂折扣季各大品牌均有大幅度折扣，可以說是一年中最優惠的購物時機。'}
			,{title: '梅鐸馬拉松', date: '9月中旬', img: 'images/festival/img_France07.jpg', link: '_link_', text: '法國紅酒重鎮－波爾多梅鐸，自1984年來每年秋天都會盛大舉辦馬拉松路跑活動，賽程全長42公里，途中會行經50幾座酒莊，包括波爾多5大特級酒莊。沿途除了有多家酒莊設立的紅酒攤外，還有各式各樣的小攤供應起司、巧克力、生蠔、烤牛肉、麵包、甜點等，隨時為跑者補充水分和能量。所有參賽者只要能在6.5小時內完成比賽，就可獲得獎章以及官方特別準備的精美禮物。'}
			,{title: '里昂燈節', date: '12月初', img: 'images/festival/img_France08.jpg', link: '_link_', text: '據說聖母瑪麗亞在1843年解救了受瘟疫所苦的里昂，從此之後，每年的12月全市會在窗前點燃蠟燭感謝聖母拯救之恩，稱為「Fete des Lumieres」，看見燈光就彷彿看見希望，演變迄今，結合了現代科技與專業團隊規劃後，儼然已成為世界知名的國際燈光節。'}

		];
		return arr;
	}

	function getGermany(){
		var arr = [
			{title: '科隆嘉年華', date: '2月', img: 'images/festival/img_Germany01.jpg', link: '_link_', text: '德國最大的嘉年華，也是僅次聖誕節的重要慶典，於每年復活節前四十天的一個星期舉行，其中以玫瑰星期一的遊行最盛大，參加的人可以化裝成各種角色，和來自各國的人一同狂歡。'}
			,{title: '黑森林嘉年華', date: '2月，每年日期不同', img: 'images/festival/img_Germany02.jpg', link: '_link_', text: '每年隆冬的嘉年華時節，黑森林的大地白雪覆蓋，精靈、巫婆、魔鬼全都出籠，來到人間大鬧一場。山中城鎮「瓦德奇」（Waldkirch）在嘉年華期間這裡的巫婆會成群現身。讓原本陰森森的黑森林增添了一份詭異的氣氛。'}
			,{title: '哈次山地巫婆節', date: '4月底', img: 'images/festival/img_Germany03.jpg', link: '_link_', text: '巫婆節是巫婆們和魔王在哈次山地布羅肯山每年一度的聚會，當地居民及遊客會化妝成各種巫婆或精怪，在城市內遊行。4/30日傍晚可搭蒸汽火車到達布羅肯山山頂，欣賞音樂會或是浮士德的劇碼。'}
			,{title: '柏林文化節', date: '5月底', img: 'images/festival/img_Germany04.jpg', link: '_link_', text: '柏林擁有來自各國為數眾多的移民，為顯示及提升對多元文化的尊重和包容，柏林市每年舉行化妝大遊行，讓各國人民介紹自己的傳統文化，期間還有風味市集攤販。'}
			,{title: '柏林音樂節', date: '9月中', img: 'images/festival/img_Germany05.jpg', link: '_link_', text: '柏林是歐洲的音樂首都之一，每年定期邀請世界各大樂團，在柏林舉行為期十天左右的音樂表演。'}
			,{title: '慕尼黑啤酒節', date: '9月中旬~10月初', img: 'images/festival/img_Germany06.jpg', link: '_link_', text: '慕尼黑啤酒節堪稱世界最大的嘉年華會！至今已兩百年歷史。您可以於此盡情暢飲道地的啤酒、品嚐巴伐利亞佳餚、聆聽美妙的音樂、觀賞傳統舞蹈，另外更有各式遊樂設施與花車遊行活動，每年吸引近600萬人來共襄盛舉。'}
			,{title: '中歐聖誕市集', date: '11月底~12/24', img: 'images/festival/img_Germany07.jpg', link: '_link_', text: '聖誕節的傳統慶典流傳於歐洲歷史悠久，尤其是德國、法國特別重視傳統文化和精神，讓許多傳統聖誕市集在數百年後都還完整的傳承下來。每年的11月中到聖誕節前夕，在各大城市與小鎮都會有大大小小的聖誕市集，販售具有聖誕氣息的裝飾品和節慶食物，替一年一度的聖誕節開啟了溫馨歡愉的序幕！'}

		];
		return arr;
	}

	function getItaly(){
		var arr = [
			{title: '威尼斯嘉年華', date: '2月初 (齋戒月前10天開始，為期10天)', img: 'images/festival/img_Italy01.jpg', link: '_link_', text: '威尼斯嘉年華是為了慶祝戰爭的勝利而舉辦的慶祝會。每年水都威尼斯總會上演一場華麗生動的宴會，讓美麗典雅的聖馬可廣場染上一股熱鬧的氣氛。人們以中古世紀風格的各式華美服飾裝點自己，戴上精美的面具，盛裝出席。'}
			,{title: '托斯卡尼花車遊行', date: '2月', img: 'images/festival/img_Italy02.jpg', link: '_link_', text: '位於托斯卡尼海濱，靠近比薩的維亞瑞究，是地中海著名的度假城鎮，這裡的嘉年華又稱「海邊嘉年華」，最受歡迎的主題是嘲諷時事及政治人物，還有足球、童話傳說、喜劇丑角、歷史故事等，是地中海岸最盛大的慶典之一。'}
			,{title: '北義爆橘節', date: '2月', img: 'images/festival/img_Italy03.jpg', link: '_link_', text: '北義中世紀嘉年華慶典－伊芙雷亞爆橘節，又稱「橘子大戰」，節慶現場會以中世紀歷史為劇本搭配著遊行演出，象徵打倒權貴的戰爭，丟擲橘子的人群代表是反抗份子，丟橘子則代表古代的發箭和投石。'}
			,{title: '比薩燈火節', date: '7月14日', img: 'images/festival/img_Italy04.jpg', link: '_link_', text: '每年6/17是Pisa守護聖徒San Ranieri的紀念日，前一晚6/16會舉行燭火節，城內天黑後不開燈，所有房子及建築會使用為數約五萬支的蠟燭和燈火裝飾，以美麗的燭光照亮河畔，晚間約11:00會開始放煙火，派對與深夜的煙火吸引大批遊客前往。'}
			,{title: '維洛那歌劇節', date: '6月底~9月初', img: 'images/festival/img_Italy05.jpg', link: '_link_', text: '維洛那歌劇節，北義夏天最浪漫也最愉快的歌劇節慶，每年六月底至八月，的古老露天劇場輪番上演。夜晚開演時，人們手持燭光，在星空下欣賞古老劇場與近代歌劇合奏的神奇魔力，無需華麗裝扮，沒有拘謹的氣氛，中場休息時還可見冰淇淋和三明治小販穿梭觀眾席叫賣，徹底貼近藝術即生活的義式美感。'}
			,{title: '威尼斯賽船節', date: '9月第一個星期日', img: 'images/festival/img_Italy06.jpg', link: '_link_', text: '威尼斯“歷史性賽船節”是全年若干次賽船活動中最為隆重盛大的比賽。賽船會分表演和比賽兩部分內容。表演又分體育性船舶編隊表演和模仿古代船隊化妝表演兩種。歷史性賽船節很有威尼斯的傳統味道也很有看頭。'}

		];
		return arr;
	}

	//================== 非洲 ==================
	function getAfrica(){
		var arr = [
			{title: '普利托利亞紫葳花季', date: '10月~11月', img: 'images/festival/img_Africa01.jpg', link: '_link_', text: '南非為全世界唯一一個擁有三個首都的國家，其中普利托利亞，建城之初引進了原產南美洲的紫葳花樹，全城種植數量高達5萬株。每年10月春季來臨時，所有的紫葳花同時綻放，滿山滿城一片紫色花海，蔚為奇觀，也讓此城有［紫色城市］的美稱！'}

		];
		return arr;
	}

	//================== 美洲 ==================
	function getCanada(){
		var arr = [
			{title: '魁北克冬季嘉年華', date: '1月下旬~2月中旬', img: 'images/festival/img_Canada01.jpg', link: '_link_', text: '充滿浪漫優雅的魁北克古城，也有熱情如火的一面！一年一度的冬季嘉年華，讓整個魁北克市搖身一變成了狂歡的舞台，寂靜的冬天因High翻的氣氛而火熱起來，吸引來自世界各地的遊客前來同樂。精彩可期的各式活動以及精雕細刻的冰雕、雪雕搭配閃爍的燈光讓冬日的北國絢麗起來。'}
			,{title: '蒙特婁流行音樂節', date: '9月', img: 'images/festival/img_Canada02.jpg', link: '_link_', text: '蒙特婁流行音樂節（POP Montreal ）規模盛大，每年預計有超過數百場節目，分佈在全市舉行及演出。2002年發起人規劃了獨立搖滾、另類搖滾、嘻哈與北美民謠等各類演唱會，成為搖滾音樂史上最重要的音樂節之一，在國際上享有盛名。'}

		];
		return arr;
	}

	function getBrazil(){
		var arr = [
			{title: '南美四國&里約嘉年華', date: '3月初', img: 'images/festival/img_Brazil01.jpg', link: '_link_', text: '2017年二月南半球正值陽光燦爛的夏季， 也是全球最熱鬧、熱情洋溢的巴西嘉年華展開之際。這被喻為世界上最豪華、規模最大的年度嘉年華慶典為期4天，巴西許多城市都會舉行盛大的桑巴舞大賽及花車遊行，但其中最負盛名的，莫過於被評為全球必遊50大景點之一、2012年七月才被定為世界遺產城市的驚異之城 - 里約熱內盧嘉年華會。'}
			,{title: '里約跨年煙火', date: '42735', img: 'images/festival/img_Brazil02.jpg', link: '_link_', text: '一起體驗截然不同的夏日跨年吧！在巴西里約沙灘上與近200萬人一起同歡，觀賞海上20分鐘壯觀龐大、精采絕倫的煙火，在倒數聲中，燦爛炫麗的火花照亮的天空下，為過去的一年劃下完美的句點，浪漫揭開2017年的序幕！'}

		];
		return arr;
	}

	function getArgentina(){
		var arr = [
			{title: '探戈節', date: '8月中至下旬', img: 'images/festival/img_Argentina01.jpg', link: '_link_', text: '聯合國教科文組織在2009年正式把探戈列入世界文化遺產名單，政府每年會籌備一年一度遍及整個城市的盛會~探戈節。有來自全世界的探戈高手，還有一系列與探戈相關的藝文活動，彷彿就像一場藝術界的盛宴。'}

		];
		return arr;
	}

	function getPeru(){
		var arr = [
			{title: '太陽祭', date: '6月24日', img: 'images/festival/img_Peru01.jpg', link: '_link_', text: '你知道全美洲最古老的慶典在秘魯嗎? 雖然自1535年最後一位印加皇帝主持後就沒在舉行過，但如今太陽祭已成為南美洲第二大節日以及世界性祭典之一，沿襲著古代文獻記載，每年的冬至都會隆重舉行盛大祭典。太陽祭場面之盛大，氣氛之隆重…如今有機會讓你用雙眼看見5世紀前帝國最輝煌的黃金時代。'}

		];
		return arr;
	}

	function getMexico(){
		var arr = [
			{title: '萬聖節 / 萬靈節', date: '10/30~11/2', img: 'images/festival/img_Mexico01.jpg', link: '_link_', text: '墨西哥人相信只要能款待亡靈，讓亡魂開心返家過節，隔年就能夠得到庇佑及大豐收。在這幾天墨西哥人會攜家帶眷，準備亡靈最愛食物及飲料到墓地狂歡，跟已逝的親人一起過夜，一起佈置色彩鮮豔的祭壇、鋪上鮮花及點燃蠟燭，最特別的是，也會準備有許多可愛又有趣的骷顱頭裝飾品，在墨西哥骷顱頭是代表濃密親情、堅定友情及愛情。'}

		];
		return arr;
	}

	function getChile(){
		var arr = [
			{title: '復活節島跨年', date: '12月31日', img: 'images/festival/img_Chile01.jpg', link: '_link_', text: '復活節島以其大約1000多尊的巨型石像和許多不解之謎聞名，由於其地理位置及緯度，在這裡可以享受到全世界最晚跨年之一，同時，可體驗到在摩埃像旁世界最晚的一月一號日出！'}

		];
		return arr;
	}

	//================== 大洋洲 ==================
	function getNewZealand(){
		var arr = [
			{title: '布拉夫生蠔節', date: '5月', img: 'images/festival/img_NewZealand01.jpg', link: '_link_', text: '布拉夫生蠔是全世界品質最好的生蠔，為紐西蘭南島特別養殖的品種，生長在寒冷的清潔水域Foveaux海峽，以鮮甜多汁而揚名國際，因產量稀少而限制收採數量，只能少量供應當地市場需求。在這個一年一度的生蠔節慶，全國美食饕客都會在這一天飛到布拉夫，參與這個令人雀躍的年度生蠔慶典，享用產量稀少、口感鮮脆甜美的生蠔極品！'}

		];
		return arr;
	}

	function getAustralia(){
		var arr = [
			{title: '同志大遊行', date: '2月~3月中旬', img: 'images/festival/img_Australia01.jpg', link: '_link_', text: '雪梨是全世界最大的同志城市之一，每年的雪梨同志嘉年華會更是吸引超過百萬的人參與，長達2週的活動以各種形式、多樣化的精采活動呈現，包括歌劇秀、表演藝術、喜劇說笑、音樂及視覺藝術等，讓遊行活動達至高潮。'}
			,{title: '西澳柏斯藝術節', date: '每年2-3月', img: 'images/festival/img_Australia02.jpg', link: '_link_', text: '南半球為期最長的節慶活動，每年2-3月在西澳柏斯舉辦，結合社區藝術，電影舞蹈與戶外音樂活動，如有機會在農曆年到當地旅遊，千萬不能錯過這麼精彩的盛會。'}
			,{title: '雪梨皇家秀', date: '3-4月', img: 'images/festival/img_Australia03.jpg', link: '_link_', text: '源自於1823年至今，每年復活節期間展出的【復活節皇家秀Sydney Royal Easter Show】，是澳洲的年度盛典已超過190歷史，為期半個月展出澳洲鄉村特色、文化遺產及卓越的農業成果，還有許多表演活動、比賽、佳餚美酒，就像是一個大型的嘉年華！每年吸引超過1萬5千人參展，當年更因維多利亞皇后的讚賞而冠上『皇家Royal』的稱號！結合動物、農業、美食、特產、街頭藝人，適合全年齡層的人，是每年3-4月到澳洲不可錯過的盛會！'}
			,{title: '雪梨跨年煙火', date: '12月31日', img: 'images/festival/img_Australia04.jpg', link: '_link_', text: '雪梨接近國際換日線，於是跨年煙火已成為南半球的年度大事受世人最先注目外，每年在著名的海灣景致「雪梨歌劇院」及「雪梨大橋」的襯托下施放煙火迎接新年到來，被評為此生必看的的景點之一，是以年年吸引大量的觀光客來此跨年。'}

		];
		return arr;
	}

	return obj;
})(jQuery);