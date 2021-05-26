<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
      <p class="title">
       <i class="fas fa-temperature-high"/>기온별 <i class="fas fa-list-ul"/>옷차림
      </p>
      <p class="subtitle">
        계절과 기온에 따른 적당한 옷차림에 대해 설명하는 곳
      </p>
      </div>
    </section>
    <div class="columns">

      <div class="column">
        <article class="message">
          <div class="message-header">
           28ºC 이상
          </div>
          <div class="message-body">
              <figure class="image is-3by1">
                <img src="~static/temp28.jpg" alt="">
              </figure>
            민소매, 반팔, 반바지, 짧은 치마, 린넨 옷
          </div>
          <div class="message-header">
            27ºC ~ 23ºC
          </div>
          <div class="message-body">
            <figure class="image is-3by1">
                <img src="~static/temp27.jpg" alt="">
              </figure>
            반팔, 얇은 셔츠, 반바지, 면바지
          </div>
          <div class="message-header">
            22ºC ~ 20ºC
          </div>
          <div class="message-body">
            <figure class="image is-3by1">
                <img src="~static/temp22.jpg" alt="">
              </figure>
            얇은 가디건, 긴팔, 면바지, 청바지
          </div>

          <div class="message-header">
            19ºC ~ 17ºC
          </div>
          <div class="message-body">
            <figure class="image is-3by1">
                <img src="~static/temp19.jpg" alt="">
              </figure>
            얇은 니트, 맨투맨, 가디건, 청바지
          </div>
        </article>
      </div>

      <div class="column">
        <article class="message">
          <div class="message-header">
            16ºC ~ 12ºC
          </div>
          <div class="message-body">
            <figure class="image is-3by1">
                <img src="~static/temp16.jpg" alt="">
              </figure>
            자켓, 가디건, 야상, 스타킹, 청바지, 면바지
          </div>

          <div class="message-header">
            11ºC ~ 9ºC
          </div>
          <div class="message-body">
            <figure class="image is-3by1">
                <img src="~static/temp11.jpg" alt="">
              </figure>
            자켓, 트렌치코트, 야상, 니트, 청바지, 스타킹
          </div>

          <div class="message-header">
            8ºC ~ 5ºC
          </div>
          <div class="message-body">
            <figure class="image is-3by1">
                <img src="~static/temp8.jpg" alt="">
              </figure>
            코트, 가죽자켓, 히트텍, 니트, 레깅스
          </div>

          <div class="message-header">
            4ºC 이하
          </div>
          <div class="message-body">
            <figure class="image is-3by1">
                <img src="~static/temp4.jpg" alt="">
              </figure>
            패딩, 두꺼운 코트, 목도리, 기모제품
          </div>
        </article>
      </div>
    </div>
  </div>
</template>