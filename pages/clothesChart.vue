<template>
	<div>
		<section class="hero is-success">
			<div class="hero-body">
				<p class="title">
					<i class="fas fa-temperature-high"/>의류 <i class="fas fa-list-ul"/>통계
				</p>
				<p class="subtile">
					의류에 관련한 통계를 시각적 자료로 보여줍니다.
				</p>
			</div>
		</section>
		<hr />
		<section class="columns">
			<div class="column">
				<article class="message">
					<div class="message-header">
						한국인이 좋아하는 의류 브랜드
					</div>
					<div class="message-body">
						<div
							id="lineChart"
							:style="`width:100%;height:${chartHeight}px`"
						></div>
						<div class="content">
							<p class="tag is-danger">출처</p>
							<a href="http://digitalchosun.dizzo.com/site/data/html_dir/2019/11/22/2019112280092.html">
								디지틀조선의보</a
							>
						</div>
					</div>
				</article>
			</div>
			<div class="column">
				<article class="message">
					<div class="message-header">
						품목별 피해구제 접수 현황
					</div>
					<div class="message-body">
						<div id="pieChart" style="width:100%;height:400px"></div>
						<div class="content">
							<p class="tag is-danger">출처</p>
							<a href="https://www.consumer.go.kr/user/ftc/consumer/cnsmrBBS/80/selectInfoCmprDetail.do?page=1&row=50&insttId=&infoRealmIdList=&infoPrdlstIdList=&infoTyIdList=243&searchRange=searchRangeAll&searchKeyword=&rnum=10&infoId=A0000168&infoId1=&searchGbn=HIT_CO&infoCl=&infoCl2=&kcnsmrYn=&no=&emplyrEvlSe=&stsfdg=&infoDetailSn=&rptTabId=&userReviewMode=insert&updateUserReviewSn=&infoSj=%EA%B5%90%EC%82%AC%EB%B0%A9%EB%AC%B8%ED%98%95+%ED%95%99%EC%8A%B5%EC%A7%80+%EC%86%8C%EB%B9%84%EC%9E%90%EB%A7%8C%EC%A1%B1%EB%8F%84+%EB%B9%84%EA%B5%90&tmnlImageCours=20120131081331272_thumbnail.jpg&cntntsId=00000205&CSRFToken=510f3f42-99d5-4f25-8b9b-702774e2d510">
								소비자24</a
							>
						</div>
					</div>
				</article>
			</div>
		</section>
	</div>
</template>
<script>
	import toastuiChart from '~/plugins/toastuiChart';
	let showChart = false;
	const favoirteBrand = {
		categories: [
			'1위 나이키',
			'2위 빈폴',
			'2위 유니클로',
			'4위 닥스',
			'4위 아디다스',
			'6위 크로커다일',
			'6위 인디안',
			'8위 파크랜드',
			'9위 자라',
			'10위 갤럭시',
			'10위 헤지스'
		], // y-axis
		series: [
			// x-axis
			{
				name: '선호도',
				data: [9.0, 5.0, 5.0, 4.0, 4.0, 3.5, 3.5, 2.8, 2.5, 2.1, 2.1],
			},
		],
	};
	const clothesProduct = {
		categories: ['품목'],
		series: [
			{
				name: '외의류',
				data: 22.7,
			},
			{
				name: '가방류',
				data: 7.0,
			},
			{
				name: '스포츠 의류, 용품',
				data: 3.0,
			},
			{
				name: '정장류',
				data: 2.2,
			},
			{
				name: '아동, 유아복류',
				data: 2.0,
			},
			{
				name: '기타',
				data: 6.3,
			},
			{
				name: '중의류',
				data: 29.2,
			},
			{
				name: '신발',
				data: 27.6,
			},
		],
	};
	export default {
		data() {
			return { chartHeight: 400 };
		},
		mounted() {
			if (!showChart && process.client) {
				if (!toastuiChart('bar', 'lineChart', favoirteBrand)) return;
				if (!toastuiChart('pie', 'pieChart', clothesProduct)) return;
				showChart = true;
			}
		},
		destroyed() {
			showChart = false;
		},
	};
</script>