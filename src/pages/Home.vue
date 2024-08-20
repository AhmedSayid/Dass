<template>

    <div>
        <div class="main-container">
            <div id="content">
                <div class="content-top-w container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 col_slla  box-advanced-search">
                            <div class="so_advanced_search">
                                <div class="sas_wrap">
                                    <div class="sas_inner">
                                        <div class="heading-title">
                                            <h2>اختر مركبتك</h2>
                                        </div>
                                        <div class="sas_inner-box-search">
                                            <div class="row">
                                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 search-boxes">
                                                    <select name="make" id="so_make0" class="form-control">
                                                        <option value="">اختر الشركة المصنعة</option>
                                                        <option value="1">Acura</option>
                                                        <option value="2">BMW</option>
                                                        <option value="3">Chevrolet</option>
                                                        <option value="4">GMC</option>
                                                        <option value="5">Honda</option>
                                                        <option value="6">John deere</option>
                                                        <option value="7">Kawasaky</option>
                                                        <option value="8">Lexus</option>
                                                        <option value="9">mazda</option>
                                                        <option value="10">Mercedes</option>
                                                        <option value="11">nuko</option>
                                                        <option value="12">Opel</option>
                                                        <option value="13">Yamaha</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 search-boxes">
                                                    <select name="model" id="so_model0" class="form-control">
                                                        <option value="">اختر الموديل</option>
                                                        <option value="1">3D Model</option>
                                                        <option value="2">BMW</option>
                                                        <option value="3">1000 Rocket</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 search-button">
                                                    <button type="button" id="sas_search_button0">اجد جزئي </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 col_htca  col-style">

                            <div dir="ltr" class="slider-container">
                                <div class="module sohomepage-slider ">
                                    <div class="yt-content-slider" data-rtl="yes" data-autoplay="no"
                                        data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="0"
                                        data-items_column00="1" data-items_column0="1" data-items_column1="1"
                                        data-items_column2="1" data-items_column3="1" data-items_column4="1"
                                        data-arrows="yes" data-pagination="no" data-lazyload="yes" data-loop="no"
                                        data-hoverpause="yes">
                                        <div class="yt-content-slide">
                                            <a href="#"><img :src="ImageSlider" alt="slider1"
                                                    class="img-responsive"></a>
                                        </div>
                                        <div class="yt-content-slide">
                                            <a href="#"><img :src="ImageSlider3" alt="slider2"
                                                    class="img-responsive"></a>
                                        </div>
                                        <div class="yt-content-slide">
                                            <a href="#"><img :src="ImageSlide2" alt="slider3"
                                                    class="img-responsive"></a>
                                        </div>
                                    </div>

                                    <div class="loadeding"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-main-w">
                    <div class="container">
                        <!-- Extra Best seller -->
                        <div class="module extra-layout1">
                            <div class="pre_text">
                                الاكثر مبيعا خلال الاسبوع
                            </div>
                            <h3 class="modtitle"><span>الافضل مبيعا</span></h3>
                            <div class="modcontent">
                                <div id="so_extra_slider_11" class="so-extraslider button-type1">
                                    <div class="products-list yt-content-slider extraslider-inner" data-rtl="yes"
                                        data-pagination="no" data-arrows="no" data-autoplay="no" data-delay="4"
                                        data-speed="0.6" data-margin="30" data-items_column00="4" data-items_column0="4"
                                        data-items_column1="3" data-items_column2="3" data-items_column3="2"
                                        data-items_column4="1" data-lazyload="yes" data-loop="no" data-buttonpage="top">
                                        <div class="item">
                                            <div v-for="product in products.slice(0, 2)"
                                                class="product-layout product-grid">
                                                <div class="product-item-container item--static">
                                                    <div class="left-block">
                                                        <div class="product-../assets/img-container second_img">
                                                            <router-link :to="{ name: 'Product' }">

                                                                <a target="_self" title="Volup tatem accu">
                                                                    <img :src="'http://127.0.0.1:8000/' + product.image_url"
                                                                        class="img-1 img-responsive "
                                                                        :alt="ImageProduct1">
                                                                    <img :src="ImageProduct2"
                                                                        class="img-2 img-responsive "
                                                                        :alt="ImageProduct2">
                                                                </a>
                                                            </router-link>
                                                        </div>
                                                        <span class="label-product label-جديد">جديد </span>
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="button-group cartinfo--static">

                                                            <button type="button" class="wishlist btn-button"
                                                                title="Add to Wish List"
                                                                onclick="wishlist.add('60');"><i
                                                                    class="fa fa-heart"></i></button>
                                                            <button type="button" class="addToCart"
                                                                title="اضف الي العربة" onclick="cart.add('60 ');">
                                                                <span>اضف الي العربة </span>
                                                            </button>

                                                        </div>
                                                        <h4><a title="Volup tatem accu"
                                                                target="_self">{{ product.name }}</a></h4>
                                                        <div class="rating"> <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star-o fa-stack-2x"></i></span>
                                                        </div>
                                                        <div class="price">
                                                            <span class="price">{{ product.price }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="product-layout product-grid">
                                                <div class="product-item-container item--static">
                                                    <div class="left-block">
                                                        <div class="product-../assets/img-container second_img">
                                                            <a target="_self" title="Shoulder kevinis">
                                                                <img :src="ImageProduct1" class="img-1 img-responsive"
                                                                    :alt="ImageProduct1">
                                                                <img :src="ImageProduct2" class="img-2 img-responsive"
                                                                    :alt="ImageProduct2">
                                                            </a>
                                                        </div>

                                                        <!--quickview-->

                                                        <!--end quickview-->
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="button-group cartinfo--static">

                                                            <button type="button" class="wishlist btn-button"
                                                                title="Add to Wish List"
                                                                onclick="wishlist.add('60');"><i
                                                                    class="fa fa-heart"></i></button>
                                                            <button type="button" class="addToCart"
                                                                title="اضف الي العربة" onclick="cart.add('60 ');">
                                                                <span>اضف الي العربة </span>
                                                            </button>

                                                        </div>
                                                        <h4><a title="Shoulder kevinis" target="_self">Shoulder
                                                                kevinis</a></h4>
                                                        <div class="rating"> <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                        </div>
                                                        <div class="price">
                                                            <span class="price">$60.00</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="product-layout product-grid">
                                                <div class="product-item-container item--static">
                                                    <div class="left-block">
                                                        <div class="product-../assets/img-container second_img">
                                                            <a target="_self" title="Luis rute arure">
                                                                <img :src="ImageProduct1" class="img-1 img-responsive"
                                                                    :alt="ImageProduct1">
                                                                <img :src="ImageProduct2" class="img-2 img-responsive"
                                                                    :alt="ImageProduct2">
                                                            </a>
                                                        </div>
                                                        <span class="label-product label-sale">-15%</span>
                                                        <!--quickview-->

                                                        <!--end quickview-->
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="button-group cartinfo--static">

                                                            <button type="button" class="wishlist btn-button"
                                                                title="Add to Wish List"
                                                                onclick="wishlist.add('60');"><i
                                                                    class="fa fa-heart"></i></button>
                                                            <button type="button" class="addToCart"
                                                                title="اضف الي العربة" onclick="cart.add('60 ');">
                                                                <span>اضف الي العربة </span>
                                                            </button>

                                                        </div>
                                                        <h4><a title="Luis rute arure" target="_self">Luis rute
                                                                arure</a></h4>
                                                        <div class="rating"> <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                        </div>
                                                        <div class="price">
                                                            <span class="price-جديد">$50.00</span>
                                                            <span class="price-old">$59.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="product-layout product-grid">
                                                <div class="product-item-container item--static">
                                                    <div class="left-block">
                                                        <div class="product-../assets/img-container second_img">
                                                            <a target="_self" title="Duis aute irure ">
                                                                <img :src="ImageProduct1" class="img-1 img-responsive"
                                                                    :alt="ImageProduct1">
                                                                <img :src="ImageProduct2" class="img-2 img-responsive"
                                                                    :alt="ImageProduct2">
                                                            </a>
                                                        </div>

                                                        <!--quickview-->

                                                        <!--end quickview-->
                                                    </div>
                                                    <div class="right-block">
                                                        <div class="button-group cartinfo--static">

                                                            <button type="button" class="wishlist btn-button"
                                                                title="Add to Wish List"
                                                                onclick="wishlist.add('60');"><i
                                                                    class="fa fa-heart"></i></button>
                                                            <button type="button" class="addToCart"
                                                                title="اضف الي العربة" onclick="cart.add('60 ');">
                                                                <span>اضف الي العربة </span>
                                                            </button>

                                                        </div>
                                                        <h4><a title="Volup tatem accu" target="_self">Volup tatem
                                                                accu</a></h4>
                                                        <div class="rating"> <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star fa-stack-2x"></i></span>
                                                            <span class="fa fa-stack"><i
                                                                    class="fa fa-star-o fa-stack-2x"></i></span>
                                                        </div>
                                                        <div class="price">
                                                            <span class="price">$60.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end Extra best seller -->
                    </div>

                    <!-- Deals -->
                    <div class="row-image deals-w">
                        <div class="container row row-deals">
                            <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12">
                                <div class="module deals-layout1">
                                    <h3 class="modtitle2"><span> صفقة اليوم</span></h3>
                                    <div class="modcontent">
                                        <div id="so_deal_11" class="so-deal">
                                            <div class="products-list yt-content-slider extraslider-inner"
                                                data-rtl="yes" data-pagination="no" data-arrows="no" data-autoplay="no"
                                                data-delay="4" data-speed="0.6" data-margin="30" data-items_column00="1"
                                                data-items_column0="1" data-items_column1="1" data-items_column2="1"
                                                data-items_column3="1" data-items_column4="1" data-lazyload="yes"
                                                data-loop="no" data-buttonpage="top">
                                                <div class="item product-layout">
                                                    <div class="product-thumb transition product-item-container">
                                                        <div class="col-lg-6 col-md-5 col-sm-6 col-xs-12 col-left">
                                                            <div class="left-block">
                                                                <div class="product-image-container second_img">
                                                                    <a target="_self" title="Sunt in culpa">
                                                                        <img :src="ImageProduct3"
                                                                            class="img-1 img-responsive">
                                                                        <img :src="ImageProduct4"
                                                                            class="img-2 img-responsive">
                                                                    </a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-7 col-sm-6 col-xs-12 col-right">
                                                            <div class="right-block">
                                                                <h4><a title="Sunt in culpa" target="_self">Sunt in
                                                                        culpa back wheel</a></h4>
                                                                <div class="rating"> <span class="fa fa-stack"><i
                                                                            class="fa fa-star fa-stack-2x"></i></span>
                                                                    <span class="fa fa-stack"><i
                                                                            class="fa fa-star fa-stack-2x"></i></span>
                                                                    <span class="fa fa-stack"><i
                                                                            class="fa fa-star fa-stack-2x"></i></span>
                                                                    <span class="fa fa-stack"><i
                                                                            class="fa fa-star fa-stack-2x"></i></span>
                                                                    <span class="fa fa-stack"><i
                                                                            class="fa fa-star-o fa-stack-2x"></i></span>
                                                                </div>
                                                                <div class="price">
                                                                    <span class="price-جديد">$50.00</span>
                                                                    <span class="price-old">$59.00</span>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                                    dolore magna aliqua. Ut enim ad minim veniam, ..</p>
                                                                <div class="item-time">
                                                                    <div class="item-timer">
                                                                        <div class="defaultCountdown-30"></div>
                                                                    </div>
                                                                </div>
                                                                <div class="button-group">
                                                                    <button type="button" class="addToCart"
                                                                        title="اضف الي العربة"
                                                                        onclick="cart.add('60 ');">
                                                                        <span>اضف الي العربة </span>
                                                                    </button>
                                                                    <button type="button" class="wishlist btn-button"
                                                                        title="Add to Wish List"
                                                                        onclick="wishlist.add('60');"><i
                                                                            class="fa fa-heart"></i></button>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 col-style hidden-xs hidden-sm">
                                <div class="banners banners1 ">
                                    <div>
                                        <a href="#"><img :src="Ad" alt="banner"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end Deals -->

                    <div class="container">
                        <!-- Extra جديد arrivals -->
                        <div class="module extra-layout1">
                            <div class="pre_text">
                                الاكثلا مبيعا خلال الاسبوع
                            </div>
                            <h3 class="modtitle"><span>وصل جديدا </span></h3>
                            <div class="modcontent">
                                <div id="so_extra_slider_12" class="so-extraslider button-type1">
                                    <div class="products-list yt-content-slider extraslider-inner" data-rtl="yes"
                                        data-pagination="no" data-arrows="no" data-autoplay="no" data-delay="4"
                                        data-speed="0.6" data-margin="30" data-items_column00="4" data-items_column0="4"
                                        data-items_column1="3" data-items_column2="3" data-items_column3="2"
                                        data-items_column4="1" data-lazyload="yes" data-loop="no" data-buttonpage="top">
                                        <div class="item">
                                            <div class="product-layout product-grid">
                                                <div class="item-inner product-layout transition product-grid">
                                                    <div class="product-item-container item--static">
                                                        <div class="left-block">
                                                            <div class="product-../assets/img-container second_img">
                                                                <a target="_self" title="DPicanha porkcho">
                                                                    <img :src="ImageProduct3"
                                                                        class="img-1 img-responsive">
                                                                    <img :src="ImageProduct4"
                                                                        class="img-2 img-responsive">
                                                                </a>
                                                            </div>
                                                            <span class="label-product label-جديد">جديد</span>
                                                            <!--quickview-->
                                                            <div class="so-quickview">

                                                            </div>
                                                            <!--end quickview-->
                                                        </div>
                                                        <div class="right-block">
                                                            <div class="button-group cartinfo--static">
                                                                <button type="button" class="wishlist btn-button"
                                                                    title="Add to Wish List"
                                                                    onclick="wishlist.add('60');"><i
                                                                        class="fa fa-heart"></i></button>
                                                                <button type="button" class="addToCart"
                                                                    title="اضف الي العربة" onclick="cart.add('60 ');">
                                                                    <span>اضف الي العربة </span>
                                                                </button>

                                                            </div>
                                                            <h4><a title="Picanha porkcho" target="_self">Picanha
                                                                    porkcho</a></h4>
                                                            <div class="rating"> <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price">$89.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="product-layout product-grid">
                                                <div class="item-inner product-layout transition product-grid">
                                                    <div class="product-item-container item--static">
                                                        <div class="left-block">
                                                            <div class="product-../assets/img-container second_img">
                                                                <a target="_self" title="Stickrum bresao">
                                                                    <img :src="ImageProduct3"
                                                                        class="img-1 img-responsive">
                                                                    <img :src="ImageProduct4"
                                                                        class="img-2 img-responsive">
                                                                </a>
                                                            </div>
                                                            <span class="label-product label-sale">-11%</span>
                                                            <!--quickview-->
                                                            <div class="so-quickview">

                                                            </div>
                                                            <!--end quickview-->
                                                        </div>
                                                        <div class="right-block">
                                                            <div class="button-group cartinfo--static">

                                                                <button type="button" class="wishlist btn-button"
                                                                    title="Add to Wish List"
                                                                    onclick="wishlist.add('60');"><i
                                                                        class="fa fa-heart"></i></button>
                                                                <button type="button" class="addToCart"
                                                                    title="اضف الي العربة" onclick="cart.add('60 ');">
                                                                    <span>اضف الي العربة </span>
                                                                </button>

                                                            </div>
                                                            <h4><a title="Stickrum bresao" target="_self">Stickrum
                                                                    bresao</a></h4>
                                                            <div class="rating"> <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star-o fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star-o fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star-o fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star-o fa-stack-2x"></i></span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price-جديد">$85.00</span>
                                                                <span class="price-old">$96.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="product-layout product-grid">
                                                <div class="item-inner product-layout transition product-grid">
                                                    <div class="product-item-container item--static">
                                                        <div class="left-block">
                                                            <div class="product-../assets/img-container second_img">
                                                                <a target="_self" title="Remporum stick">
                                                                    <img :src="ImageProduct3"
                                                                        class="img-1 img-responsive">
                                                                    <img :src="ImageProduct4"
                                                                        class="img-2 img-responsive">
                                                                </a>
                                                            </div>
                                                            <span class="label-product label-جديد">جديد</span>
                                                            <!--quickview-->
                                                            <div class="so-quickview">

                                                            </div>
                                                            <!--end quickview-->
                                                        </div>
                                                        <div class="right-block">
                                                            <div class="button-group cartinfo--static">

                                                                <button type="button" class="wishlist btn-button"
                                                                    title="Add to Wish List"
                                                                    onclick="wishlist.add('60');"><i
                                                                        class="fa fa-heart"></i></button>
                                                                <button type="button" class="addToCart"
                                                                    title="اضف الي العربة" onclick="cart.add('60 ');">
                                                                    <span>اضف الي العربة </span>
                                                                </button>

                                                            </div>
                                                            <h4><a title="Remporum stick" target="_self">Remporum
                                                                    stick</a></h4>
                                                            <div class="rating"> <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star-o fa-stack-2x"></i></span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price">$65.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="product-layout product-grid">
                                                <div class="item-inner product-layout transition product-grid">
                                                    <div class="product-item-container item--static">
                                                        <div class="left-block">
                                                            <div class="product-../assets/img-container second_img">
                                                                <a target="_self" title="Duis aute irure ">
                                                                    <img :src="ImageProduct3"
                                                                        class="img-1 img-responsive">
                                                                    <img :src="ImageProduct4"
                                                                        class="img-2 img-responsive">
                                                                </a>
                                                            </div>

                                                            <!--quickview-->
                                                            <div class="so-quickview">

                                                            </div>
                                                            <!--end quickview-->
                                                        </div>
                                                        <div class="right-block">
                                                            <div class="button-group cartinfo--static">

                                                                <button type="button" class="wishlist btn-button"
                                                                    title="Add to Wish List"
                                                                    onclick="wishlist.add('60');"><i
                                                                        class="fa fa-heart"></i></button>
                                                                <button type="button" class="addToCart"
                                                                    title="اضف الي العربة" onclick="cart.add('60 ');">
                                                                    <span>اضف الي العربة </span>
                                                                </button>

                                                            </div>
                                                            <h4><a title="Volup tatem accu" target="_self">Volup tatem
                                                                    accu</a></h4>
                                                            <div class="rating"> <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star fa-stack-2x"></i></span>
                                                                <span class="fa fa-stack"><i
                                                                        class="fa fa-star-o fa-stack-2x"></i></span>
                                                            </div>
                                                            <div class="price">
                                                                <span class="price">$60.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end Extra جديد arrivals -->
                        <div class="banners banners2">
                            <div class="row">
                                <div class="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <a href="#"><img :src="Ad2" alt="banner"></a>
                                </div>
                                <div class="item col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <a href="#"><img :src="Ad3" alt="banner"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- So Categories -->
                    <div class="row-cates">
                        <div id="so_categories_11"
                            class="so-categories module theme2 cates-layout1 container preset01-3 preset02-2 preset03-2 preset04-2 preset05-1">
                            <div class="pre_text">
                                أعلى المجموعات المميزة
                            </div>
                            <h3 class="modtitle"><span>ابحث بالقسم</span></h3>
                            <div class="modcontent">
                                <div class="cat-wrap theme2">
                                    <div class="content-box">
                                        <div class="inner">
                                            <div class="parent-cat">
                                                <div class="image-cat">
                                                    <a href="#"><img :src="cate1" alt="../assets/img" /></a>
                                                </div>
                                            </div>
                                            <div class="cat-title"><a href="#">Wheels & Tires</a></div>
                                            <div class="child-cat">
                                                <div class="child-cat-title"><a href="#">Tires</a></div>
                                                <div class="child-cat-title"><a href="#">Tires Chains</a></div>
                                                <div class="child-cat-title"><a href="#">Tires Accessories</a></div>
                                                <div class="child-cat-title"><a href="#">Wheels</a></div>
                                                <div class="child-cat-title"><a href="#">Wheels Accessories</a></div>
                                                <a class="viewmore" href="#">عرض المزيد</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="content-box">
                                        <div class="inner">
                                            <div class="parent-cat">
                                                <div class="image-cat">
                                                    <a href="#"><img :src="cate2" alt="../assets/img" /></a>
                                                </div>
                                            </div>
                                            <div class="cat-title"><a href="#">Smart devices</a></div>
                                            <div class="child-cat">
                                                <div class="child-cat-title"><a href="#">Bluetooth Devices </a></div>
                                                <div class="child-cat-title"><a href="#">Dash Cam</a></div>
                                                <div class="child-cat-title"><a href="#">Screen TV</a></div>
                                                <div class="child-cat-title"><a href="#">Smartwatch</a></div>
                                                <div class="child-cat-title"><a href="#">USB Connect</a></div>
                                                <a class="viewmore" href="#">عرض المزيد</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-box">
                                        <div class="inner">
                                            <div class="parent-cat">
                                                <div class="image-cat">
                                                    <a href="#"><img :src="cate3" alt="../assets/img" /></a>
                                                </div>
                                            </div>
                                            <div class="cat-title"><a href="#">Oil Fluids</a></div>
                                            <div class="child-cat">
                                                <div class="child-cat-title"><a href="#">Esdipiscing</a></div>
                                                <div class="child-cat-title"><a href="#">Reprehenderit</a></div>
                                                <div class="child-cat-title"><a href="#">Duis aute</a></div>
                                                <div class="child-cat-title"><a href="#">Deserunt mollit</a></div>
                                                <div class="child-cat-title"><a href="#">Laudantium</a></div>
                                                <a class="viewmore" href="#">عرض المزيد</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-box">
                                        <div class="inner">
                                            <div class="parent-cat">
                                                <div class="image-cat">
                                                    <a href="#"><img :src="cate4" alt="../assets/img" /></a>
                                                </div>
                                            </div>
                                            <div class="cat-title"><a href="#">Lighting</a></div>
                                            <div class="child-cat">
                                                <div class="child-cat-title"><a href="#">LED Tail Lights</a></div>
                                                <div class="child-cat-title"><a href="#">Headlights</a></div>
                                                <div class="child-cat-title"><a href="#">Aspering</a></div>
                                                <div class="child-cat-title"><a href="#">Interior Light</a></div>
                                                <div class="child-cat-title"><a href="#">Consectetur</a></div>
                                                <a class="viewmore" href="#">عرض المزيد</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-box">
                                        <div class="inner">
                                            <div class="parent-cat">
                                                <div class="image-cat">
                                                    <a href="#"><img :src="cate5" alt="../assets/img" /></a>
                                                </div>
                                            </div>
                                            <div class="cat-title"><a href="#">Replacement Parts</a></div>
                                            <div class="child-cat">
                                                <div class="child-cat-title"><a href="#">Lighting & Electical</a></div>
                                                <div class="child-cat-title"><a href="#">Brake Parts</a></div>
                                                <div class="child-cat-title"><a href="#">Shock & Suspension</a></div>
                                                <div class="child-cat-title"><a href="#">Outerwear</a></div>
                                                <div class="child-cat-title"><a href="#">Exhaust & Emission</a></div>
                                                <a class="viewmore" href="#">عرض المزيد</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content-box">
                                        <div class="inner">
                                            <div class="parent-cat">
                                                <div class="image-cat">
                                                    <a href="#"><img :src="cate6" alt="../assets/img" /></a>
                                                </div>
                                            </div>
                                            <div class="cat-title"><a href="#">Tool & equipments</a></div>
                                            <div class="child-cat">
                                                <div class="child-cat-title"><a href="#">Tool Boxes</a></div>
                                                <div class="child-cat-title"><a href="#">Tool Sets</a></div>
                                                <div class="child-cat-title"><a href="#">Impact Wrenches</a></div>
                                                <div class="child-cat-title"><a href="#">Tire Air Compressors </a></div>
                                                <div class="child-cat-title"><a href="#">Hand Tools</a></div>
                                                <a class="viewmore" href="#">عرض المزيد</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end So Categories -->

                    <div class="container">
                        <div class="slider-brands module">
                            <div class="pre_text">شركاء الجودة العالية</div>
                            <h3 class="modtitle"><span>تسوق حسب العلامات التجارية</span></h3>

                            <div class="yt-content-slider contentslider" data-rtl="no" data-loop="yes"
                                data-autoplay="no" data-autoheight="no" data-autowidth="no" data-delay="4"
                                data-speed="0.6" data-margin="0" data-items_column00="6" data-items_column0="6"
                                data-items_column1="5" data-items_column2="3" data-items_column3="2"
                                data-items_column4="1" data-arrows="yes" data-pagination="no" data-lazyload="yes"
                                data-hoverpause="yes">
                                <div class="item"><a href="#"><img :src="b1" alt="brand"></a></div>
                                <div class="item"><a href="#"><img :src="b2" alt="brand"></a></div>
                                <div class="item"><a href="#"><img :src="b4" alt="brand"></a></div>
                                <div class="item"><a href="#"><img :src="b3" alt="brand"></a></div>
                                <div class="item"><a href="#"><img :src="b5" alt="brand"></a></div>
                                <div class="item"><a href="#"><img :src="b6" alt="brand"></a></div>
                                <div class="item"><a href="#"><img :src="b7" alt="brand"></a></div>
                            </div>

                        </div>

                    </div>
                    <div class="container">

                        <Pakages></Pakages>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import ImageSlider from "../assets/img/slider-1.jpg"
import ImageSlide2 from "../assets/img/slider-2.jpg"
import ImageSlider3 from "../assets/img/slider-3.jpg"
import ImageProduct1 from "../assets/img/1.jpg"
import ImageProduct2 from "../assets/img/2.jpg"
import ImageProduct3 from "../assets/img/3.jpg"
import ImageProduct4 from "../assets/img/4.jpg"
import Ad from "../assets/img/bn1.jpg"
import Ad2 from "../assets/img/bn2.jpg"
import Ad3 from "../assets/img/bn3.jpg"
import cate1 from "../assets/img/cate1.jpg"
import cate2 from "../assets/img/cate2.jpg"
import cate3 from "../assets/img/cate3.jpg"
import cate4 from "../assets/img/cate4.jpg"
import cate5 from "../assets/img/cate5.jpg"
import cate6 from "../assets/img/cate6.jpg"
import b1 from "../assets/img/b1.jpg"
import b2 from "../assets/img/b2.jpg"
import b3 from "../assets/img/b3.jpg"
import b4 from "../assets/img/b4.jpg"
import b5 from "../assets/img/b5.jpg"
import b6 from "../assets/img/b6.jpg"
import b7 from "../assets/img/b7.jpg"
import Pakages from '../components/pakages.vue';
import axios from 'axios';
export default {
    name: "Home",
    data() {
        return {
            // products
            products: [],
            /////////////




            ImageSlider,
            ImageSlide2,
            ImageSlider3,
            ImageProduct1,
            ImageProduct2,
            ImageProduct3,
            ImageProduct4,
            Ad,
            Ad2,
            Ad3,
            cate1,
            cate2,
            cate3,
            cate4,
            cate5,
            cate6,
            b1,
            b2,
            b3,
            b4,
            b5,
            b6,
            b7
        }
    },
    components: {
        Pakages
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/products').then(({ data }) => {
            this.products = data;


            console.log(data)
        })
    },

}
</script>