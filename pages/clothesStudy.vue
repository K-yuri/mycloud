<template>
	<div>
		<section class="hero is-danger">
			<div class="hero-body">
				<p class="title"><i class="fas fa-dog"></i>의류 상식</p>
				<p class="subtile">
					각 의류에 대해 알아봅시다.
				</p>
			</div>
		</section>
		<hr />
		<section class="box">
			<form @submit.prevent="submitDogName">
				<div class="field">
					<label class="label">의류</label>
					<div class="control">
						<input type="text" v-model="dogName" />
						<button class="button is-link" type="submit">알아보기</button>
					</div>
					<p class="help is-success">
						알아보고 싶은 의류의 이름을 입력하세요.
					</p>
				</div>
			</form>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				dogNameField: 'dogName',
				dogName: null,
			};
		},
		methods: {
			submitDogName() {
				this.$router.push(
					'/studyClothes?' + this.dogNameField + '=' + this.dogName
				);
			},
		},
	};
</script>