<template>
  <div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li>
      <a href="https://www.weather.go.kr/w/index.do">
        <span class="icon is-small">
          <i class="fas fa-cloud" aria-hidden="true"></i>
        </span>
        <span>WEATHER</span>
      </a>
    </li>
    <li>
      <a href="https://blog.naver.com/worldcleaning1">
        <span class="icon is-small">
          <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
        </span>
        <span>WORLDCLEANING</span>
      </a>
    </li>
    <li class="is-active">
      <a href="https://www.facebook.com/">
        <span class="icon is-small">
          <i class="fas fa-thumbs-up" aria-hidden="true"></i>
        </span>
        <span>FACEBOOK</span>
      </a>
    </li>
  </ul>
</nav>
        <nav class="breadcrumb">
            <ul>
                <li>
                    <nuxt-link to="/"><i class="fas fa-home"></i>&nbsp;HOME</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/clothesDesing"><i class="fas fa-file-signature"></i>&nbsp;옷 추천</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/weatherClothes"><i class="fas fa-file-signature"></i>&nbsp;날씨와 옷</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/clothesChart"><i class="fas fa-file-signature"></i>&nbsp;의류 통계</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/clothesFirebase"><i class="fas fa-file-signature"></i>&nbsp;의류 저장</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/clothesShop"><i class="fas fa-file-signature"></i>&nbsp;의류 매장 찾기</nuxt-link>
                </li>
            </ul>
        </nav>
    <nuxt/>
    <footer class="footer">
      <div class="content has-text-centered">
        <i class="fas fa-copyright"></i> 2020-2021, 사이트 1860013 김유리 제작.
      </div>
    </footer>
  </div>
</template>
