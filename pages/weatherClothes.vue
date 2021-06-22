<template>
    <div>
        <section class="hero is-warning">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-temperature-high"/>날씨에 맞춰<i class="fas fa-list-ul"/>옷입기
                </p>
                <p class="subtitle">
                날씨를 미리 살피고 기온에 맞는 옷을 입읍시다.
                </p>
            </div>
        </section>
		<hr />
		<section class="columns"></section>
		<div class="column">
			<table class="table">
				<thead>
					<th>기온</th>
					<th>권장 옷차림</th>
                    <th>비고</th>
				</thead>
				<tbody>
					<template v-for="pos in tableStatusKey.length">
						<tr :key="pos">
							<td>{{ tableStatus[pos - 1]}}</td>
                            <td>{{ tableStatus2[pos - 1]}}</td>
                            <td>{{ tableStatus3[pos - 1]}}</td>						
						</tr>
					</template>
				</tbody>
			</table>
            <div class="content">
				<p class="tag is-danger">출처</p>
				<a href="https://github.com/K-yuri/mycloud">GIT MY</a><br />
			</div>
		</div>
		<div class="column"></div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		async asyncData() {
			const tempClothes = await axios.get('https://raw.githubusercontent.com/K-yuri/mycloud/master/assets/tempClothes.json');
            //alert(Object.keys(petStat));
            console.log(Object.keys(tempClothes.data.temp));
			return {
				tableStatus: tempClothes.data.temp,
                tableStatusKey: Object.keys(tempClothes.data.temp),
                tableStatus2: tempClothes.data.weather,
                tableStatus3: tempClothes.data.other
                
                
			};
		}
	};
</script>