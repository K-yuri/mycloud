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
								<td>
									<button
										:class="`button ${colors[(pos - 1) % colorSize]} is-light`"
										@click="submitDogName(tableDogKeys[pos - 1])"
									>
										{{ tableDogKeys[pos - 1].toUpperCase() }}
									</button>
								</td>
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
							지금 나오는 강아지를 알아보세요.
							<button class="button is-warning" @click="showDogName">
								강아지 품종?
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
			const petStat = await axios.get('https://raw.githubusercontent.com/SonYB98/MyCloud1/master/assets/petStat.json');
            //alert(Object.keys(petStat));
            console.log(Object.keys(petStat.data.message));
			return {
				tableStatus: petStat.data.message,
                tableStatusKey: Object.keys(petStat.data.message),
                tableStatus2: petStat.data.status,
                tableStatus3: petStat.data.status2
                
                
			};
		}
	};
</script>