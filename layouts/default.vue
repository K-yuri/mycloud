<template>
  <div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-home" aria-hidden="true"></i>
        </span>
        <span>HOME</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-cloud" aria-hidden="true"></i>
        </span>
        <span>WEATHER</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
        </span>
        <span>WORLDCLEANING</span>
      </a>
    </li>
    <li class="is-active">
      <a href="#">
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
                    <nuxt-link to="/clothesDesing"><i class="fas fa-file-signature"></i>&nbsp;옷 추천</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/shoppingmall"><i class="fas fa-file-signature"></i>&nbsp;쇼핑몰 목록</nuxt-link>
                </li>
            </ul>
        </nav>
    <nuxt/>
    <footer class="footer">
      <div class="content has-text-centered">
        <i class="fas fa-copyright"></i> 2020-2021, 모든 저작권은 월드클리닝에 있습니다.
      </div>
    </footer>
  </div>
</template>
