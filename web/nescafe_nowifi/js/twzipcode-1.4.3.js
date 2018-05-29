/*
 * 本著作係依據創用 姓名標示-相同方式分享 3.0 Unported (CC BY-SA 3.0) 授權條款進行授權。
 * 如欲瀏覽本授權條款之副本，請造訪 http://creativecommons.org/licenses/by-sa/3.0/deed.zh_TW
 *
 * This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0).
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/deed.en
 *
 * 台灣郵遞區號外掛 / Taiwan Zip Code Plugin of jQuery
 * http://app.essoduke.org/twzipcode/
 *
 * version: 1.4:
 *  改寫原始碼以符合 jslint.com
 *  修改參數名稱以更符合語意 areaName => districtName, zipName => zipcodeName, areaSel => districtSel, zipSel => zipcodeSel
 *  加入 destroy, reset, serialize 等方法
 *  修正當指定元素名稱時，若名稱內包含 [] 會發生錯誤的情形。
 *  更新 Creative Commons 至 3.0
 * version 1.3.1:
 *  #因應五都改制，修正為合併後的行政區劃。
 * version 1.3:
 *  #新增輸入郵遞區號取得縣市名稱的功能。（意見提供：ileadu）
 *
 * version 1.2:
 *  #修正 IE6 鄉鎮市區選單只顯示一個以及清單過長的問題
 *
 * version 1.1:
 *  #修正 form reset 時，鄉鎮市區選單無法重置的錯誤
 *  #加入css參數以套用樣式： $(element).twzipcode({ css:[select1, select2, select3] });
 *  #改寫成更簡潔的源碼以增進效能
 *  #使用自訂表單元件名稱
 *
 * Wed, 27 April 2011 10:34:53 GMT
 */

(function ($) {

    'use strict';

    var data = {
          '基隆市': {'仁愛區': '200','信義區': '201','中正區': '202','中山區': '203','安樂區': '204','暖暖區': '205','七堵區': '206'}
          ,'臺北市': {'中正區': '100','大同區': '103','中山區': '104','松山區': '105','大安區': '106','萬華區': '108','信義區': '110','士林區': '111','北投區': '112','內湖區': '114','南港區': '115','文山區': '116'}
          ,'新北市': {'萬里區': '207','金山區': '208','板橋區': '220','汐止區': '221','深坑區': '222','石碇區': '223','瑞芳區': '224','平溪區': '226','雙溪區': '227','貢寮區': '228','新店區': '231','坪林區': '232','烏來區': '233','永和區': '234','中和區': '235','土城區': '236','三峽區': '237','樹林區': '238','鶯歌區': '239','三重區': '241','新莊區': '242','泰山區': '243','林口區': '244','蘆洲區': '247','五股區': '248','八里區': '249','淡水區': '251','三芝區': '252','石門區': '253'}
          ,'桃園市': {'中壢區': '320','平鎮區': '324','龍潭區': '325','楊梅區': '326','新屋區': '327','觀音區': '328','桃園區': '330','龜山區': '333','八德區': '334','大溪區': '335','復興區': '336','大園區': '337','蘆竹區': '338'}
          ,'新竹市': {'東 區': '300','北 區': '300','香山區': '300'}
          ,'新竹縣': {'竹 北': '302','湖 口': '303','新 豐': '304','新 埔': '305','關 西': '306','芎 林': '307','寶 山': '308','竹 東': '310','五 峰': '311','橫 山': '312','尖 石': '313','北 埔': '314','峨 眉': '315'}
          ,'苗栗縣': {'竹 南': '350','頭 份': '351','三 灣': '352','南 庄': '353','獅 潭': '354','後 龍': '356','通 霄': '357','苑 裡': '358','苗 栗': '360','造 橋': '361','頭 屋': '362','公 館': '363','大 湖': '364','泰 安': '365','銅 鑼': '366','三 義': '367','西 湖': '368','卓 蘭': '369'}
          ,'臺中市': {'中 區': '400','東 區': '401','南 區': '402','西 區': '403','北 區': '404','北屯區': '406','西屯區': '407','南屯區': '408','太平區': '411','大里區': '412','霧峰區': '413','烏日區': '414','豐原區': '420','后里區': '421','石岡區': '422','東勢區': '423','和平區': '424','新社區': '426','潭子區': '427','大雅區': '428','神岡區': '429','大肚區': '432','沙鹿區': '433','龍井區': '434','梧棲區': '435','清水區': '436','大甲區': '437','外埔區': '438','大安區': '439'}
          ,'彰化縣': {'彰 化': '500','芬 園': '502','花 壇': '503','秀 水': '504','鹿 港': '505','福 興': '506','線 西': '507','和 美': '508','伸 港': '509','員 林': '510','社 頭': '511','永 靖': '512','埔 心': '513','溪 湖': '514','大 村': '515','埔 鹽': '516','田 中': '520','北 斗': '521','田 尾': '522','埤 頭': '523','溪 州': '524','竹 塘': '525','二 林': '526','大 城': '527','芳 苑': '528','二 水': '530'}
          ,'南投縣': {'南 投': '540','中 寮': '541','草 屯': '542','國 姓': '544','埔 里': '545','仁 愛': '546','名 間': '551','集 集': '552','水 里': '553','魚 池': '555','信 義': '556','竹 山': '557','鹿 谷': '558'}
          ,'雲林縣': {'斗 南': '630','大 埤': '631','虎 尾': '632','土 庫': '633','褒 忠': '634','東 勢': '635','臺 西': '636','崙 背': '637','麥 寮': '638','斗 六': '640','林 內': '643','古 坑': '646','莿 桐': '647','西 螺': '648','二 崙': '649','北 港': '651','水 林': '652','口 湖': '653','四 湖': '654','元 長': '655'}
          ,'嘉義市': {'東 區': '600', '西 區': '600'}
          ,'嘉義縣': {'番 路': '602','梅 山': '603','竹 崎': '604','阿里山': '605','中 埔': '606','大 埔': '607','水 上': '608','鹿 草': '611','太 保': '612','朴 子': '613','東 石': '614','六 腳': '615','新 港': '616','民 雄': '621','大 林': '622','溪 口': '623','義 竹': '624','布 袋': '625'}
          ,'臺南市': {'中西 區': '700','東 區': '701','南 區': '702','北 區': '704','安平區': '708','安南區': '709','永康區': '710','歸仁區': '711','新化區': '712','左鎮區': '713','玉井區': '714','楠西區': '715','南化區': '716','仁德區': '717','關廟區': '718','龍崎區': '719','官田區': '720','麻豆區': '721','佳里區': '722','西港區': '723','七 股區': '724','將軍區': '725','學甲區': '726','北門區': '727','新營區': '730','後壁區': '731','白河區': '732','東山區': '733','六甲區': '734','下營區': '735','柳營區': '736','鹽水區': '737','善化區': '741','大內區': '742','山上區': '743','新市區': '744','安定區': '745'}
          ,'高雄市': {'新興區': '800','前金區': '801','苓雅區': '802','鹽埕區': '803','鼓山區': '804','旗津區': '805','前鎮區': '806','三民區': '807','楠梓區': '811','小港區': '812','左營區': '813','仁武區': '814','大社區': '815','岡山區': '820','路竹區': '821','阿蓮區': '822','田寮區': '823','燕巢區': '824','橋頭區': '825','梓官區': '826','彌陀區': '827','永安區': '828','湖內區': '829','鳳山區': '830','大寮區': '831','林園區': '832','鳥松區': '833','大樹區': '840','旗山區': '842','美濃區': '843','六龜區': '844','內門區': '845','杉林區': '846','甲仙區': '847','桃源區': '848','那瑪夏區': '849','茂林區': '851','茄萣區': '852'}
          ,'屏東縣': {'屏 東': '900','三地門': '901','霧 臺': '902','瑪 家': '903','九 如': '904','里 港': '905','高 樹': '906','鹽  埔': '907','長 治': '908','麟 洛': '909','竹 田': '911','內 埔': '912','萬 丹': '913','潮 州': '920','泰 武': '921','來 義': '922','萬 巒': '923','崁 頂': '924','新 埤': '925','南 州': '926','林 邊': '927','東 港': '928','琉 球': '929','佳 冬': '931','新 園': '932','枋 寮': '940','枋 山': '941','春 日': '942','獅 子': '943','車 城': '944','牡 丹': '945','恆 春': '946','滿 州': '947'}
          ,'臺東縣': {'臺 東': '950','綠 島': '951','蘭 嶼': '952','延 平': '953','卑 南': '954','鹿 野': '955','關 山': '956','海 端': '957','池 上': '958','東 河': '959','成 功': '961','長 濱': '962','太麻里': '963','金 峰': '964','大 武': '965','達 仁': '966'}
          ,'花蓮縣': {'花 蓮': '970','新 城': '971','秀 林': '972','吉 安': '973','壽 豐': '974','鳳 林': '975','光 復': '976','豐 濱': '977','瑞 穗': '978','萬 榮': '979','玉 里': '981','卓 溪': '982','富 里': '983'}
          ,'宜蘭縣': {'宜 蘭': '260','頭 城': '261','礁 溪': '262','壯 圍': '263','員 山': '264','羅 東': '265','三 星': '266','大 同': '267','五 結': '268','冬 山': '269','蘇 澳': '270','南 澳': '272','釣魚臺列嶼': '290'}
          ,'澎湖縣': {'馬 公': '880','西 嶼': '881','望 安': '882','七 美': '883','白 沙': '884','湖 西': '885'}
          ,'金門縣': {'金 沙': '890','金 湖': '891','金 寧': '892','金 城': '893','烈 嶼': '894','烏 坵': '896'}
          ,'連江縣': {'南 竿': '209','北 竿': '210','莒 光': '211','東 引': '212'}
          ,'南海諸島': {'東  沙': '817','南  沙': '819'}
    };

    //public function
    var methods = {

        //initialize
        init: function (options) {

            return this.each(function () {

                //default settings
                var settings = {
                    detect: false,
                    countyName: 'county',
                    districtName: 'district',
                    zipcodeName: 'zipcode',
                    countySel: '',
                    districtSel: '',
                    zipcodeSel: '',
                    readonly: true,
                    css: []
                };

                var self = $(this), opts = $.extend(settings, options), tpl = [], i = 0, wrap = {}, county,
                    opt = ['<option value="">縣市</option>', '<option value="">鄉鎮市區</option>'];

                self.empty();
                
                $('<select/>').attr({'name': opts.countyName, 'id': opts.countyName}).appendTo(this);
                $('<select/>').attr({'name': opts.districtName, 'id': opts.districtName}).appendTo(this);
                $('<input/>').attr({'type': 'text', 'name': opts.zipcodeName, 'readonly': opts.readonly}).appendTo(this);
                
                //DOM collections
                wrap.selector = {
                    county: 'select[name="' + opts.countyName + '"]',
                    district: 'select[name="' + opts.districtName + '"]',
                    zipcode: 'input[type=text][name="' + opts.zipcodeName + '"]'
                };

                wrap.county = self.children(wrap.selector.county);
                wrap.district = self.children(wrap.selector.district);
                wrap.zipcode = self.children(wrap.selector.zipcode);

                //add css classname
                try {
                    wrap.county.addClass(opts.css[0]);
                    wrap.district.addClass(opts.css[1]);
                    wrap.zipcode.addClass(opts.css[2]);
                } catch (e) {
                }
                
                /*
                 * append select elements
                 * You could change the sort of elements here.
                 */
                $(opt[0]).appendTo(wrap.county);
                $(opt[1]).appendTo(wrap.district);

                for (county in data) {
                    if (data.hasOwnProperty(county)) {
                        tpl[i++] = '<option value="';
                        tpl[i++] = county;
                        tpl[i++] = '">';
                        tpl[i++] = county;
                        tpl[i++] = '</option>';
                    }
                }

                $(tpl.join('')).appendTo(wrap.county);

                //county change event
                self.delegate(wrap.selector.county, 'change', function () {
                        var val = $(this).val(), i = 0, tpl = [], district;
                        wrap.district.empty();

                        if (val) {
                            for (district in data[val]) {
                                if (data[val].hasOwnProperty(district)) {
                                    tpl[i++] = '<option value="';
                                    tpl[i++] = district;
                                    tpl[i++] = '">';
                                    tpl[i++] = district;
                                    tpl[i++] = '</option>';
                                }
                            }
                            wrap.district.append(tpl.join('')).trigger('change');
                        } else {
                            wrap.county.children('option:first').prop('selected', true);
                            wrap.district.empty().append(opt[1]);
                            wrap.zipcode.val('');
                        }
                    }
                );

                //district change event
                self.delegate(wrap.selector.district, 'change', function () {
                        var val = $(this).val();
                        wrap.zipcode.val(data[wrap.county.val()][val]);
                    }
                );

                //zipcode keyup, blur event
                self.delegate(wrap.selector.zipcode, 'keyup blur', function (e) {
                        var me = $(this), result = [], val = '', i, j;
                        me.val(me.val().replace(/[^0-9]/g, ''));
                        val = me.val().toString();

                        if (3 === val.length) {
                            for (i in data) {
                                if (data.hasOwnProperty(i)) {
                                    for (j in data[i]) {
                                        if (data[i].hasOwnProperty(j)) {
                                            if (val === data[i][j]) {
                                                wrap.county.val(i).trigger('change');
                                                wrap.district.val(j).trigger('change');
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                );

                //After DOM created success then trigger the events.
                wrap.county.val(opts.countySel).trigger('change');
                
                if (0 !== opts.districtSel.length) {
                    wrap.district.val(opts.districtSel).trigger('change');
                } else{
                    wrap.district.children('option:first').prop('selected', true);
                }

                wrap.zipcode.val(opts.zipcodeSel).trigger('blur');
                
                /*
                 * location detect by W3C Geolocation API HTML5
                 * version: 1.4.1
                 * essoduke [at] Wed, 12 October 2011 09:46:19 GMT
                 */
                if (true === opts.detect) {
                
                    //ensure the google maps api was loaded.
                    if ('object' !== typeof google.maps) {
                        alert('Google Maps API was not reloaded.');
                        return;
                    }
                    
                    try {
                        var geocoder;
                        var hasGeolocation = !!(navigator.geolocation);

                        //browser supported
                        if (hasGeolocation) {
                            navigator.geolocation.getCurrentPosition(function (loc) {
                                if (loc) {
                                    geocoder = new google.maps.Geocoder();
                                    var latlng = new google.maps.LatLng(loc.coords.latitude, loc.coords.longitude);
                                    geocoder.geocode({'latLng': latlng}, function(results, status) {
                                        if (status == google.maps.GeocoderStatus.OK) {
                                            if (results[1]) {
                                                var zipcode = results[1].formatted_address.substring(0, 3);
                                                if (0 !== zipcode) {
                                                    opts.zipcodeSel = zipcode;
                                                    wrap.zipcode.val(zipcode).trigger('blur');
                                                }
                                            }
                                        } else {
                                              alert('Geocoder failed due to: ' + status);
                                        }
                                    });
                                }
                            });
                        } else {
                            alert('Your browser is not supported W3C Geolocation API.');
                            return;
                        }
                    } catch (e) {
                        //alert(e.description);
                        //console.log(e);
                        return;
                    }
                }
            });
        },

        //destroy
        destroy: function () {
            return this.each(function () {
                //unbind and destroy
                $(this).undelegate('select', 'change')
                       .undelegate('input', 'keyup blur')
                       .remove();
            });
        },
        //reset values
        reset: function () {
            return this.each(function () {
                $(this).find('select:first').children('option:first').prop('selected', true).trigger('change');
            });
        },

        //serialize result
        serialize: function () {
            var result = [];
            this.each(function () {
                    var obj = $(this);
                    obj.children().each(function () {
                            var s = $(this);
                            result.push(s.attr('name') + '=' + s.val());
                    });
            });
            return result.join('&');
        }
    };

    //main
    $.fn.twzipcode = function (method) {
        var wrap = this, container = {};
        if ('string' === typeof method) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ('object' === typeof method || !method) {
            return methods.init.apply(this, arguments);
        }
    };

}(jQuery));
