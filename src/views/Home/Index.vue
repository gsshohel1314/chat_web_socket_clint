<template>
  <div id="index">
    <!--Start Banner Area-->
    <div class="banner-area">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <div class="carousel-indicators">
              <button v-for="(slider, index) in sliders" :key="index" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="`${index}`" :class="index == 0 ? 'active' : ''" aria-current="true" aria-label="Slide 1"></button>
            </div>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="carousel-item" :class="index == 0 ? 'active' : ''" v-for="(slider, index) in sliders">
                    <img class="d-block w-100" :src="slider.image" :alt="slider.id">
                    <div class="carousel-caption d-md-block">
                        <h1 class="text-blue">{{slider.title}}</h1>
                        <p class="text-light" style="font-size: 16px;">{{slider.short_description}}</p>
                    </div>
                </div>
            </div>

            <!-- Controls -->
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="btn btn-outline-danger rounded-circle" aria-hidden="true">
                    <i class="fa-solid fa-arrow-left"></i>
                </span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="btn btn-outline-danger rounded-circle" aria-hidden="true">
                    <i class="fa-solid fa-arrow-right"></i>
                </span>
            </a>
        </div>
    </div>

    <!--Start about you part-->
    <div v-show="Object.keys(whoWeAre).length != 0" class="campus-information-area ptb-50">
      <div class="container">
        <div class="who-we-are-section-title" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1300" data-aos-once="true">
          <h2 class="text-center">This is About You</h2>
        </div>

        <div class="row bg-1E446F">
          <div class="col-lg-4" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1300" data-aos-once="true">
            <div class="campus-content m-4">
              <div class="campus-title">
                <p style="text-align: justify">{{whoWeAre.description}}</p>
              </div>
            </div>
          </div>

          <div class="col-lg-8" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
            <div class="single-stories-card m-4">
              <iframe :src="whoWeAre.video" style="border: 2px solid white" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- start find your club part -->
    <div class="admisssion-area ptb-50 admission-bg">
        <div class="container">
            <div class="admission-content">
                <div class="section-title" style="max-width: 750px;">
                    <h2 class="text-light">Find Your Club</h2>
                    <p class="text-light">Your alumni community, 200,000 strong, is always close no matter where you live! Socialize or intellectualize—online or in-person—anytime, anywhere.</p>
                    <a href="http://ccc.fscd.xyz/clubs-all" class="default-btn btn">Learn More<i class="flaticon-next"></i></a>
                </div>
            </div>
        </div>
    </div>

    <!--start club event part-->
    <div class="lates-news-area ptb-50">
      <div class="container">
        <div class="section-title">
          <h2>Club Events</h2>
          <p>Connecting to our alumni members through events in the local community.</p>
        </div>
        
        <div class="row justify-content-center">
          <div v-for="(item, index) in clubEvents" class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
            <div class="single-news-card">
              <div class="news-img">
                <a href="#">
                  <img style="max-height: 150px;" width="420" :src="item.media_main_image" :alt="item.id">
                </a>
              </div>
              <div class="news-content">
                <div class="list">
                  <ul>
                    <li><i class="flaticon-college"></i>{{item.club.title}}</li><br>
                    <li><i class="flaticon-time"></i>{{moment(item.from).format('ll')}} - {{moment(item.to).format('ll')}}</li>
                  </ul>
                </div>

                <a :href="`http://ccc.fscd.xyz/single-media?clubId=${ item.club.id}&mediaId=${item.id}`" target="_blank">
                  <h3>{{ item.title}}</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- start launch your career part -->
    <div class="admisssion-area admission-bg ptb-50" :style="{ backgroundImage:'url(' + launchCareerImg + ')' }">
      <div class="container">
        <div class="row col-md-12 align-items-center">
          <div class="col-md-6"></div>
          <div class="col-md-6">
            <div class="admission-left-content">
              <h2>Let Us Help You Launch Your Career</h2>
              <p>East West University is committed to supporting every Triton’s career pursuits and professional mobility. By participating in career fairs, you will find outstanding job opportunities.</p>
              <a href="#" class="default-btn btn">Learn More<i class="flaticon-next"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--start alumni news part-->
    <div class="lates-news-area ptb-50">
      <div class="container">
        <div class="section-title" style="max-width: 944px;">
          <h2>Alumni News</h2>
          <p>Every individual who has interest in education whether within the country or beyond is warmly welcome to East West University community, preferably in person, and that will be a privilege of mine.</p>
        </div>

        <div class="row justify-content-center">
          <div v-for="(item, index) in news" class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
            <div class="single-news-card">
              <div class="news-img">
                <img style="max-height: 150px;" width="420" :src="item.image" :alt="item.id">
              </div>
              <div class="news-content">
                <div class="list">
                  <ul>
                    <li>
                      <i class="flaticon-tag"></i>
                      <span v-for="(category,index) in item.categories">
                        {{ category.name }}{{ (index+1 < item.categories.length) ? ', ' : '' }}
                      </span>
                    </li>
                  </ul>
                </div>

                <a :href="`http://ccc.fscd.xyz/special-news?newsId=${ item.id}`" target="_blank">
                  <h3>{{ item.title}}</h3>
                </a>
                <a :href="`http://ccc.fscd.xyz/special-news?newsId=${ item.id}`" target="_blank">
                  <p>{{item.description.substring(0,100)}}</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="more-latest-news text-center">
          <p>Select From Hundreds of Options.
            <a :href="`http://ccc.fscd.xyz/news-all`" target="_blank" class="read-more-btn active"> More on News<i class="flaticon-next"></i></a>
          </p>
        </div>
      </div>
    </div>


    <!--Start News Area-->
    <!-- <div class="campus-life-area ptb-50">
      <div class="container">
        <div class="section-title">
          <h2>News</h2>
          <h4>Stories about people, Research and innovation across the Farm</h4>
        </div>
        <div class="row justify-content-center mb-5">
          <div class="col-lg-6 col-md-6">
            <div class="campus-card">
              <img
                :src="newsBigOne.image"
                :alt="$store.state.alt"
                style="width: 100%; height: 420px"
              />
              <div class="content">
                <router-link :to="{ path: 'special-news', query: { newsId: newsBigOne.id }}">{{ newsBigOne.description }}</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card">
              <img :src="newsSmallFirst.image" class="card-img-top" :alt="$store.state.alt" height="253"/>
              <div class="card-body">
                <h5 class="card-title">
                  <router-link :to="{ path: 'special-news', query: { newsId: newsSmallFirst.id }}">{{ newsSmallFirst.title }}</router-link>
                </h5>
                <p class="card-text">
                  {{ newsSmallFirst.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card">
              <img :src="newsSmallSecond.image" class="card-img-top" :alt="$store.state.alt" height="253"/>
              <div class="card-body">
                <h5 class="card-title">
                  <router-link :to="{ path: 'special-news', query: { newsId: newsSmallSecond.id }}">{{ newsSmallSecond.title }}</router-link>
                </h5>
                <p class="card-text">
                  {{ newsSmallSecond.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mb-5">
          <div class="col-lg-3 col-md-6">
            <div class="card">
              <img :src="newsSmallThird.image" class="card-img-top" :alt="$store.state.image" height="253"/>
              <div class="card-body">
                <h5 class="card-title">
                  <router-link :to="{ path: 'special-news', query: { newsId: newsSmallThird.id }}">{{ newsSmallThird.title }}</router-link>
                </h5>
                <p class="card-text">
                  {{ newsSmallThird.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card">
              <img :src="newsSmallFourth.image" class="card-img-top" :alt="$store.state.alt" height="253"/>
              <div class="card-body">
                <h5 class="card-title">
                  <router-link :to="{ path: 'special-news', query: { newsId: newsSmallFourth.id }}">{{ newsSmallFourth.title }}</router-link>
                </h5>
                <p class="card-text">
                  {{ newsSmallFourth.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="campus-card">
              <img :src="newsBigTwo.image" :alt="$store.state.alt" style="width: 100%; height: 420px"/>
              <div class="content">
                <router-link :to="{ path: 'special-news', query: { newsId: newsBigTwo.id }}">{{ newsBigTwo.description }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!--start career counseling center news part-->
    <!-- <div class="campus-life-area ptb-50">
      <div class="container">
        <div class="section-title">
          <h2>Career Counseling Center News</h2>
          <p>
            Every individual who has interest in education whether within the country or beyond is warmly welcome to East West University community,
            preferably in person, and that will be a privilege of mine.
          </p>
        </div>
        <div class="row justify-content-center">
          <div v-for="(item, index) in cccnews" class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
            <div class="single-campus-card">
              <div class="img">
                <a href="#">
                  <img width="420" :src="item.image" :alt="item.id">
                </a>
              </div>
              <div class="campus-content">
                <span v-for="(categoryItem) in item.categories">{{ categoryItem.name }},</span>
                  <router-link :to="{ path: 'special-news', query: { newsId: item.id }}"><h6>{{ item.title.substring(0,42) }}</h6></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="more-campus text-center">
          <p>
            View From Hundreds of Career Counseling News.
            <router-link class="read-more-btn active" :to="{ name: 'AllNews' }">More on Career Counseling Center News <i class="flaticon-next"></i></router-link>
          </p>
        </div>
      </div>
    </div> -->

    <!-- Notic part start -->
    <!-- <div class="podcasts-area ptb-50">
      <div class="col-lg-8 container">
        <div
          class="row justify-content-center notice-header"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1300"
          data-aos-once="true"
        >
          <div class="bg-f4f6f9">
            <h2>Notice Events</h2>
          </div>
          <hr class="notice-header-hr" />
          <div v-for="notice_event of notice_events" class="bg-f4f6f9">
            <hr class="notice-body-hr" />
            <div class="row align-items-center">
              <div class="col-lg-2 col-md-2">
                <h4 class="text-center">{{ notice_event.time }}</h4>
                <h6 class="text-center">{{ notice_event.date }}</h6>
              </div>
              <div class="col-lg-9 col-md-9 text-center">
                <router-link :to="{ name: 'SinglecCccNoticeEvent', query:{id:notice_event.id} }" style="color: #111d5e; font-weight: 500">
                  {{ notice_event.title }}
                </router-link>
              </div>
              <div class="col-lg-1 col-md-1 text-center">
                <i class="flaticon-user"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!--Start placement Area-->
    <!-- <div class="eduction-area">
      <div class="container-fluid p-0">
        <div class="row g-0 bg-1E446F justify-content-center pb-3 pt-3">
          <div
            class="col-lg-8 col-md-8 text-center text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h2 class="text-white">Recent Placement</h2>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit
            tellus luctus nec ullamcorper mattis Lorem ipsum dolor sit amet
            consectetur adipiscing elit ut elit tellus luctus nec ullamcorper
            mattis, Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            elit tellus luctus nec ullamcorper mattis
          </div>
        </div>
        <div class="d-flex justify-content-center pt-3 pb-3 bg-E2F0FF">
          <div
            class="row col-md-8"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <div
              class="col-lg-2 col-md-3 mb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img :src="$store.state.image" :alt="$store.state.alt" />
              <div class="image-details">
                <div class="title">
                  <h5>Anil Kapoor</h5>
                  <h6 style="color: #27ae60">MBA-HM</h6>
                </div>
                <p style="line-height: 1; font-size: 12px">
                  Institute of Health Management Research
                </p>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 mb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img :src="$store.state.image" :alt="$store.state.alt" />
              <div class="image-details">
                <div class="title">
                  <h5>Anil Kapoor</h5>
                  <h6 style="color: #27ae60">MBA-HM</h6>
                </div>
                <p style="line-height: 1; font-size: 12px">
                  Institute of Health Management Research
                </p>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 mb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img :src="$store.state.image" :alt="$store.state.alt" />
              <div class="image-details">
                <div class="title">
                  <h5>Anil Kapoor</h5>
                  <h6 style="color: #27ae60">MBA-HM</h6>
                </div>
                <p style="line-height: 1; font-size: 12px">
                  Institute of Health Management Research
                </p>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 mb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img :src="$store.state.image" :alt="$store.state.alt" />
              <div class="image-details">
                <div class="title">
                  <h5>Anil Kapoor</h5>
                  <h6 style="color: #27ae60">MBA-HM</h6>
                </div>
                <p style="line-height: 1; font-size: 12px">
                  Institute of Health Management Research
                </p>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 mb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img :src="$store.state.image" :alt="$store.state.alt" />
              <div class="image-details">
                <div class="title">
                  <h5>Anil Kapoor</h5>
                  <h6 style="color: #27ae60">MBA-HM</h6>
                </div>
                <p style="line-height: 1; font-size: 12px">
                  Institute of Health Management Research
                </p>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 mb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img :src="$store.state.image" :alt="$store.state.alt" />
              <div class="image-details">
                <div class="title">
                  <h5>Anil Kapoor</h5>
                  <h6 style="color: #27ae60">MBA-HM</h6>
                </div>
                <p style="line-height: 1; font-size: 12px">
                  Institute of Health Management Research
                </p>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 mb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img :src="$store.state.image" :alt="$store.state.alt" />
              <div class="image-details">
                <div class="title">
                  <h5>Anil Kapoor</h5>
                  <h6 style="color: #27ae60">MBA-HM</h6>
                </div>
                <p style="line-height: 1; font-size: 12px">
                  Institute of Health Management Research
                </p>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 mb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img :src="$store.state.image" :alt="$store.state.alt" />
              <div class="image-details">
                <div class="title">
                  <h5>Anil Kapoor</h5>
                  <h6 style="color: #27ae60">MBA-HM</h6>
                </div>
                <p style="line-height: 1; font-size: 12px">
                  Institute of Health Management Research
                </p>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 mb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img :src="$store.state.image" :alt="$store.state.alt" />
              <div class="image-details">
                <div class="title">
                  <h5>Anil Kapoor</h5>
                  <h6 style="color: #27ae60">MBA-HM</h6>
                </div>
                <p style="line-height: 1; font-size: 12px">
                  Institute of Health Management Research
                </p>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 mb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img :src="$store.state.image" :alt="$store.state.alt" />
              <div class="image-details">
                <div class="title">
                  <h5>Anil Kapoor</h5>
                  <h6 style="color: #27ae60">MBA-HM</h6>
                </div>
                <p style="line-height: 1; font-size: 12px">
                  Institute of Health Management Research
                </p>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 mb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img :src="$store.state.image" :alt="$store.state.alt" />
              <div class="image-details">
                <div class="title">
                  <h5>Anil Kapoor</h5>
                  <h6 style="color: #27ae60">MBA-HM</h6>
                </div>
                <p style="line-height: 1; font-size: 12px">
                  Institute of Health Management Research
                </p>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 mb-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <img :src="$store.state.image" :alt="$store.state.alt" />
              <div class="image-details">
                <div class="title">
                  <h5>Anil Kapoor</h5>
                  <h6 style="color: #27ae60">MBA-HM</h6>
                </div>
                <p style="line-height: 1; font-size: 12px">
                  Institute of Health Management Research
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-0 bg-1E446F justify-content-center pt-1 pb-1">
          <div
            class="col-lg-8 col-md-8 text-center text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <a href="{{ url('recent-placement') }}" style="color: white"
              >View All</a
            >
          </div>
        </div>
      </div>
    </div> -->

    <!--Start career tips and tricks Area-->
    <!-- <div class="campus-life-area ptb-50">
      <div class="container">
        <div class="section-title">
          <h2>CAREER TIPS AND TRICKS</h2>
          <p>
            In publishing and graphic design, Lorem ipsum dolor sit amet
            consectetur adipiscing elit ut elit tellus luctus nec ullamcorper
            mattis, Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            elit tellus luctus nec ullamcorper mattis, Lorem ipsum dolor sit
            amet consectetur adipiscing elit ut elit tellus luctus nec
            ullamcorper mattis
          </p>
        </div>
        <div class="row justify-content-center">
          <div
            v-for="(item) in careerTips"
            class="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div class="single-campus-card">
              <div class="img">
                <a href="#">
                  <img width="420" :src="item.image" :alt="item.id" />
                </a>
              </div>
              <div class="campus-content">
                <span v-for="(categoryItem) in item.categories">{{ categoryItem.name }},</span>
                <a href="#">
                  <router-link :to="{ path: 'single-career-tips', query: { tipsId: item.id }}"><h6>{{ item.title.substring(0,42) }}</h6></router-link>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="more-campus text-center">
          <p>
            View From Hundreds of Tips and tricks.
            <router-link class="read-more-btn active" :to="{name: 'allCareerTips'}">
              More on CAREER TIPS AND TRICKS <i class="flaticon-next"></i>
            </router-link>
          </p>
        </div>
      </div>
    </div> -->

    <!-- Resources part start -->
    <!-- <div class="academics-area ptb-50">
      <div class="container col-md-8">
        <div
          class="section-title"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1300"
          data-aos-once="true"
        >
          <h2>Resources</h2>
          <p>
            East West University Business Club(EWUBC) is the first club of the university with the aim to promote leadership and entrepreneurship
            of dexterous students.
          </p>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="academics-left-content">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6" v-for="(item) in resources">
                  <div class="single-academics-card3">
                    <div class="icon">
                      <i :class="item.icon_class"></i>
                    </div>
                    <h3>{{item.title.substring(0,32)}}</h3>
                    <p>{{item.description.substring(0,42)}}</p>
                    <router-link :to="{ path: 'resource-single', query: { resourceId: item.id }}" class="read-more-btn">
                      Read More<i class="flaticon-next"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="more-health-care text-center">
          <router-link class="view-all-button read-more-btn active" :to="{name: 'AllResources'}">View All</router-link>
        </div>
      </div>
    </div> -->

    <!-- cv/resume part start  -->
    <!--<div
      class="news-details-area ptb-50"
      style="background-image: url(cccAssets/assets/images/background.jpg)"
    >
      <div class="col-lg-8 container">
        <div class="row justify-content-center">
          <div
            class="col-lg-10"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1300"
            data-aos-once="true"
          >
            <div class="news-details">
              <div class="single-comments-box">
                <h4>CV/RESUME</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tem incid idunt ut dolore magna aliqua. Ut enim ad
                  minim ven iam quis nostrud. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tem incid idunt ut
                  dolore magna aliqua. Ut enim ad minim ven iam quis nostrud
                </p>
              </div>
            </div>
          </div>
          <div
            id="saveChanges"
            tabindex="0"
            role="button"
            aria-pressed="false"
            class="btn col-md-2 bg-primary rounded"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div>
              <a href="{{ url('cv-resume') }}">
                <img
                  class="img-download-format"
                  :src="$store.state.image"
                  :alt="$store.state.alt"
                />
              </a>
            </div>
            Download Format
          </div>
        </div>
      </div>
    </div>-->
    <!-- cv/resume part end -->

    <!--start we successfully placed our student at part-->
    <!-- <div class="health-care-area ptb-50 bg-white">
      <div class="container col-md-8">
        <div
          class="section-title"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1300"
          data-aos-once="true"
        >
          <h2>We Successfully Placed Our Student At</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-2 col-md-4" data-aos="fade-up" v-for="(item, index) in partners" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
            <div class="single-stories-card text-center" >
              <img class="logo-img img-fluid" :src="item.image" :alt="$store.state.alt"/>
            </div>
          </div>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
import axios from "axios";
import moment from 'moment';

export default {
    name: "Index",

    data() {
        return {
            backendUrl: this.$store.state.backendUrl,
            moment: moment,
            slider_place: 'alumni_home',
            sliders: [],
            whoWeAre: [],
            clubEvents: [],
            launchCareerImg: 'home/assets/images/admission/launch.png',
            news: [],



            // newsBigOne: "",
            // newsSmallFirst: "",
            // newsSmallSecond: "",
            // newsSmallThird: "",
            // newsSmallFourth: "",
            // newsBigTwo: "",
            // newsSmall: [],

            // careerTips: [],

            // notice_events: [],

            // partners: [],
            // resources: [],
        };
    },

    watch: {
        keyword: function () {
        this.getData();
        },
    },

    mounted() {
        this.getData();
        $('.carousel').carousel({
            interval: 5000,
            pause: "false"
        });
    },

    methods: {
        getData() {
            // Slider response
            axios.get(`${this.backendUrl}/slider`, {params: {place:this.slider_place}})
            .then((response) => {
                this.sliders = response.data.data;
            })
            .catch((e) => {
                this.$Progress.fail();
                console.log(e);
            });

            // who-we-are response
            axios.get(`${this.backendUrl}/whoWeAre`)
            .then((response) => {
                this.whoWeAre = response.data;
                // console.log(this.whoWeAre.description);
                // console.log(Object.keys(this.whoWeAre).length)
            })
            .catch((e) => { 
                this.$Progress.fail();
            });

            // club event response
            axios.get(`${this.backendUrl}/club-media-event-list`)
            .then((response) => {
                this.clubEvents = response.data.data;
            })
            .catch((e) => { 
                this.$Progress.fail();
            });

            // ccc news response
            axios.get(`${this.backendUrl}/news`)
            .then((response) => {
                this.news = response.data.data;
                // console.log(this.news);
            })
            .catch((e) => {
                this.$Progress.fail();
            });



            // news response
            // let newsLinkUrl = `${this.backendUrl}news`;
            // axios.get(newsLinkUrl)
            // .then((response) => {
            //   this.cccnews = response.data.data.slice(0, 6);
            // })
            // .catch((e) => {
            //   this.$Progress.fail();
            // });

            

            // ccc news response
            // axios.get(`${this.backendUrl}ccc-news`)
            // .then((response) => {
            //     this.cccnews = response.data.data.slice(0,6);
            // })
            // .catch((e) => {
            //     this.$Progress.fail();
            // });

            // axios.get(`${this.backendUrl}career-tips`)
            // .then((response) => {
            //   this.careerTips = response.data.data.slice(0,3);
            // })
            // .catch((e) => {
            //   this.$Progress.fail();
            // });

            // ccc notice-event response
            // let noticeEventlinkUrl = `${this.backendUrl}notice-event`;
            // axios.get(noticeEventlinkUrl)
            // .then((response) => {
            //   this.notice_events = response.data.data;
            // })
            // .catch((e) => {
            //   this.$Progress.fail();
            // });

            // partner companies response
            // axios.get(`${this.backendUrl}partner`)
            // .then((response) => {
            //     this.partners = response.data.data;
            // })
            // .catch((e) => { 
            //     this.$Progress.fail();
            // });

            // resource response
            // axios.get(`${this.backendUrl}resource`)
            // .then((response) => {
            //     this.resources = response.data.data.slice(0,6);
            // })
            // .catch((e) => { 
            //     this.$Progress.fail();
            // });
        },
    },
};
</script>

<style>
.slider-title {
  display: inline-block;
  padding: 10px;
  background: #B9121B;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.admisssion-area.admission-bg::before {
  position: absolute;
  content: '';
  /* background: rgba(17, 29, 94, 0.75); */
  background: rgba(0, 0, 0, 0.13);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}
</style>
