<template>
    <div>
        <section class="hero is-success">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-dog"></i>의류
                    <i class="fas fa-cat"></i>통계
                </p>
                <p class="subtitle">
                의상 통계를 제공합니다.
                </p>
            </div>
        </section>
        <hr />
        <section class="columns">
			<div class="column">
				<div id="lineChart"></div>
			</div>
			<div class="column"></div>
		</section>
    </div>
</template>

<script>
    import toastuiChart from '~/plugins/toastuiChart';
    let showChart = false;
    export default {
        mounted() {
            if (!showChart && process.client) {
                if (toastuiChart('lineChart')) return;
                showChart = true;
            }
        },
        destroyed() {
            showChart = false;
        }
    };
</script>
