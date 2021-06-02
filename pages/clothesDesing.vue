<template>
    <div>
        <section class="hero is-link">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-temperature-high"/>옷차림 <i class="fas fa-list-ul"/>추천
                </p>
                <p class="subtitle">
                간편하게 옷을 추천받아보세요.
                </p>
            </div>
        </section>
        <hr />
        <section class="columes">
            <div class="colume">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>옷 추천</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
            <div class="content">
                <span class="teg is-danger">출처</span>
                <a href="https://github.com/dariusk/corpora/blob/master/data/objects/clothing.json"
                >dariusk/corpora</a>
            </div>
            <div class="content">
                <span class="teg is-danger">JSON</span>
                <nuxt-link to="~/asset/clothes.json">옷 추천을 위한 JSON</nuxt-link>
            </div>
        </section>
    </div>
</template>

<script>
import clothes from "~/assets/clothes.json";

export default {
    data() {
        return { tableClothes: clothes };
    }
};
</script>
