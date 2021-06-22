<template>
    <div>
        <section class="hero is-light">
			<div class="hero-body">
				<p class="title">
					<i class="fas fa-temperature-high"/>의류 목록을 위한 <i class="fas fa-list-ul"/>Firebase
				</p>
				<p class="subtile">
					외부 서비스인 Firebase가 의류 목록을 작성합니다.
				</p>
			</div>
		</section>
		<hr />
        <section class="columns">
            <div class="column">
                <table class="table is-striped is=hoverable is-fullwidth">
                    <tread>
                        <tr>
                            <th>번호</th>
                            <th>옷 이름</th>
                        </tr>
                    </tread>
                    <tbody>
                        <template v-for="pos in clothesNames.lenght">
                            <tr :key="pos">
                                <td>{{pos}}</td>
                                <td>{{clothesNames[pos-1]}}</td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>
<script>
import fbDb from '~/plugins/firebaseDB.js';
export default {
    data() {
        return {clothesNames: [], acceessoryNames: [] };
    },
    mounted() {
        fbDb
        .ref('clothes')
        .child('names')
        .get()
        .then((snapshot) => {
            if (snapshot.exists()) {
                this.clothesNames = snapshot.val();
            }
        });
        fbDb
        .ref('acceessory')
        .child('names')
        .get()
        .then((snapshot) => {
            if (snapshot.exists()) {
                this.acceessoryNames = snapshot.val();
            }
        });
    }
};
</script>
