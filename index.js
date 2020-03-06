$(function () {
	let $imgList = $('.box>.boxImg>li'),
		 $box = $('.box'),
		 $mark = null;
	$imgList.on('mouseenter',function (e) {
		let imgSrc = $(this).find('img').attr('data-big');
		if(!$mark){
			$mark = `<div class="mark"><img src="${imgSrc}" alt=""></div>`;
			$box.append($mark);
			$mark = $('.mark');
		}
	}).on('mouseleave',function () {
		if($mark){
			$mark.remove();
			$mark = null;
		}
	}).on('mousemove',function(e){
		let {top: boxTop,left: boxLeft} = $box.offset(),
			 markTop = e.pageY - boxTop + 20,
			 markLeft = e.pageX - boxLeft + 20;
		$mark.css({
			top: markTop,
			left: markLeft
		})
	})
});