(function($) {
	var _festivalObj = {};
	$(function() {
		_festivalObj.data = FestivalData;
		setButton();
		setEventListener();
	});

	function setButton(){
		$('#searchBtn_festival').on('click', function(e){
			e.preventDefault();
			setFestival();
		});
	}

	function setEventListener(){
		$.address.init(function(event) {
		    setContinent($.address.pathNames());
		})

		$('#continent').on('change', function(e){
			continentChange($(this).val());
		});

	}

	function continentChange(pVal){
		$('#country').html('');
		for(country in _festivalObj.data[pVal]){
			$('#country').append(renderOption(country));
		}
	}

	function setContinent(pAddressArr){
		var parm1 = decodeURI(pAddressArr[0]), parm2 = decodeURI(pAddressArr[1]);
		$('#continent').html('');
		for(continent in _festivalObj.data){
			$('#continent').append(renderOption(continent));
		}
		if(parm1){
			$('#continent option').each(function(i){
				if($(this).val().indexOf(parm1) > -1){
					$(this).attr('selected', 'true');
				}
			});
		}
		$('#continent').trigger('change');
		if(parm2){
			$('#country option').each(function(i){
				if($(this).val().indexOf(parm2) > -1){
					$(this).attr('selected', 'true');
				}
			});
		}
		$('#searchBtn_festival').trigger('click');
	}

	function renderOption(pStr){
		var ele = '<option value="_val_">_name_</option>', nameArr = pStr.split('_');
		ele = ele.replace("_name_", nameArr[0]);
		ele = ele.replace("_val_", pStr);
		return $(ele);
	}

	function setFestival(){
		var continent = $('#continent').val(),
			country = $('#country').val(),
			data = _festivalObj.data[continent][country],
			festivalBox = $('#festivalBox'),
			str = '_cn_<span>/_en_</span>',
			css = {};
		festivalBox.html("");
		for(var setNum = 0; setNum < data.length; setNum++){
			var obj = data[setNum];
			festivalBox.append(renderFestival(obj));
		}
		continent = continent.split('_');
		country = country.split('_');

		str = str.replace('_cn_', country[0]);
		str = str.replace('_en_', country[1]);
		$('#festival_title').html(str);
		css.marginLeft = $('#festival_title').width();
		css.marginLeft = -parseInt(css.marginLeft / 2) - 10;
		css.marginLeft += 'px';
		$('#festival_title').css(css)

		$.address.value('/' + continent[1] + '/' + country[1]);
	}

	function renderFestival(pObj){
		var ele = ""
			+ '<li>'
			+ '    <div class="pic"><img src="_img_"></div>'
			+ '    <div class="txt">'
			+ '        <h3>_title_<span>/ _date_</span></h3>'
			+ '        <p>_text_</p>'
			+ '        <a href="_link_" target="_blank">看更多旅遊文章></a>'
			+ '    </div>'
			+ '</li>';
		ele = ele.replace("_img_", pObj.img);
		ele = ele.replace("_title_", pObj.title);
		ele = ele.replace("_date_", pObj.date);
		ele = ele.replace("_text_", pObj.text);
		ele = ele.replace("_link_", pObj.link);
		return $(ele);
	}


})(jQuery);