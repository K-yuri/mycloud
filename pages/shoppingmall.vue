<template>
    <div>
        <section class="hero is-link">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-temperature-high"/>오늘의<i class="fas fa-list-ul"/>날씨
                </p>
                <p class="subtitle">
                날씨를 미리 살피고 기온에 맞는 옷을 입읍시다.
                </p>
            </div>
        </section>
        <hr />

        <section class="columns">
			<div class="column">
				<table class="table">
					<thead>
						<th>번호</th>
						<th>강아지 품종</th>
						<th>강아지 아품종</th>
					</thead>
					<tbody>
						<template v-for="pos in tableDogKeys.length">
							<tr :key="pos">
								<td>{{ pos }}</td>
								<td>{{ tableDogKeys[pos - 1].toUpperCase() }}</td>
								<td>
									<span
										class="tag is-black"
										v-if="
											((ar = tableDogBreeds[tableDogKeys[pos - 1]]),
											ar.length == 0)
										"
										>없음</span
									>
									<span v-else
										><template v-for="subbreed in ar"
											><span class="tag is-success" :key="subbreed">{{
												subbreed.toLowerCase()
											}}</span
											>&nbsp;</template
										>
									</span>
								</td>
							</tr>
						</template>
					</tbody>
				</table>
				<div class="content">
					<p class="tag is-danger">출처</p>
					<a href="https://dog.ceo/dog-api/documentation/">Dog CEO</a><br />
					<a
						class="button is-primary is-small"
						href="https://dog.ceo/api/breeds/list/all"
						>List all breeds</a
					>
				</div>
			</div>
			<div class="column">
				<article class="message is-primary">
					<div class="message-header">오늘의 강아지</div>
					<div class="message-body">
						<div class="content">
							오늘 소개할 강아지를 소개합니다.
							<button class="button is-warning" @click="showDogName">
								강아지 이름?
							</button>
						</div>
						<figure class="image container">
							<img :src="dogImageUrl" alt="" />
						</figure>
					</div>
				</article>
			</div>
		</section>
    </div>
</template>

<script>
	import axios from 'axios';
	export default {
		async asyncData() {
			const dogBreeds = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=28982191e068cf8b6788eedf6e051f7e');
			const randomImg = await axios.get(
				'http://openweathermap.org/img/w/'
			);
			//alert(Object.keys(dogBreeds));
			return {
				tableDogBreeds: dogBreeds.data.weather,
				tableDogKeys: Object.keys(dogBreeds.data.weather),
				dogImageUrl: randomImg.data.weather,
			};
		},
		methods: {
			showDogName() {
				let urlArray = this.dogImageUrl.split('/');
				let dogName = urlArray[urlArray.length - 2].toUpperCase();
				alert('저는 ' + dogName + '입니다.');
			},
		},
	};
</script>