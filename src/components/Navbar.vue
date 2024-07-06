<template>
    <header id="header" class=" typeheader-1">

        <!-- Header Top -->
        <div class="header-top hidden-compact">
            <div class="container">
                <div class="row">
                    <div class="header-top-left col-lg-2 col-md-2 col-sm-5 hidden-xs">
                        <div class="telephone ">
                            <ul class="socials">
                                <li class="facebook"><a href="https://www.facebook.com/smartaddons.page"
                                        target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li class="twitter"><a href="https://twitter.com/smartaddons" target="_blank"><i
                                            class="fa fa-twitter"></i></a></li>
                                <li class="instagram"><a href="#" target="_blank"><i class="fa fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div class="header-top-right col-lg-9 col-md-8 col-sm-7 col-xs-12">
                        <ul class="top-link list-inline lang-curr">
                            <li class="language">
                                <div class="btn-group languages-block ">
                                    <form action="#" method="post" enctype="multipart/form-data" id="bt-language">
                                        <a class="btn btn-link dropdown-toggle" data-toggle="dropdown">
                                            <img src="../assets/img/catalog/flags/gb.png" alt="English" title="English">
                                            <span class="eng">English</span>
                                            <span class="fa fa-angle-down"></span>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#"><img class="../assets/img_flag"
                                                        src="../assets/img/catalog/flags/gb.png" alt="English"
                                                        title="English" /> English </a></li>
                                            <li> <a href="#"> <img class="../assets/img_flag"
                                                        src="../assets/img/catalog/flags/ar.png" alt="Arabic"
                                                        title="Arabic" /> Arabic </a> </li>
                                        </ul>
                                    </form>
                                </div>

                            </li>
                        </ul>
                        <ul class="top-log list-inline " style="display: flex;">
                            <router-link :to="{ name: 'Seller' }">
                                <li class="me-3" style="margin-right: 10px;"><a href="#">be aseller</a> </li>
                            </router-link>
                            <router-link :to="{ name: 'Login' }">
                                <li><i class="fa fa-lock"></i><a href="#">Login</a> / </li>
                            </router-link>
                            <router-link :to="{ name: 'Register' }">
                                <li><a href="#">Register</a></li>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-middle hidden-compact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                        <div class="logo">
                            <a href="/"><img src="../assets/img/catalog/logo.png" title="Your Store"
                                    alt="Your Store" /></a>
                        </div>

                    </div>
                    <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 middle-right" bis_skin_checked="1">
                        <div class="search-header-w   " bis_skin_checked="1">


                            <div id="sosearchpro" class="sosearchpro-wrapper so-search " bis_skin_checked="1">
                                <form method="GET" action="#">
                                    <div id="search0" class="search input-group form-group" bis_skin_checked="1">
                                        <div class="select_category filter_type  icon-select hidden-sm hidden-xs"
                                            bis_skin_checked="1">
                                            <select class="no-border" name="category_id">
                                                <option value="0">All Categories</option>
                                                <option value="78">Apparel</option>
                                                <option value="77">Cables &amp; Connectors</option>
                                                <option value="82">Cameras &amp; Photo</option>
                                                <option value="80">Flashlights &amp; Lamps</option>
                                                <option value="81">Mobile Accessories</option>
                                                <option value="79">Video Games</option>
                                                <option value="20">Jewelry &amp; Watches</option>
                                                <option value="76">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earings</option>
                                                <option value="26">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wedding Rings
                                                </option>
                                                <option value="27">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Men Watches
                                                </option>
                                            </select>
                                        </div>


                                        <input placeholder="key word">
                                        <button type="submit" class="button-search btn btn-primary "
                                            name="submit_search"><i><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" class="bi bi-search mb-2"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                                </svg></i></button>

                                    </div>
                                    <input type="hidden" name="route" value="product/search">
                                </form>
                            </div>
                        </div>

                        <div class="shopping_cart" bis_skin_checked="1">
                            <div id="cart" class="btn-shopping-cart" bis_skin_checked="1">
                                <router-link :to="{ name: 'Cart' }">
                                    <div href="javascript:void(0)" data-loading-text="Loading... "
                                        class="btn-group top_cart dropdown-toggle" data-toggle="dropdown"
                                        aria-expanded="true" bis_skin_checked="1">
                                        <div class="shopcart" bis_skin_checked="1">
                                            <span class="icon-c">
                                                <i class="mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        fill="currentColor" class="bi bi-basket " viewBox="0 0 16 16">
                                                        <path
                                                            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
                                                    </svg>
                                                </i>
                                            </span>
                                            <div class="shopcart-inner" bis_skin_checked="1">
                                                <p class="text-shopping-cart">
                                                    My cart
                                                </p>

                                                <span class="total-shopping-cart cart-total-full">
                                                    <span class="items_cart">02</span><span class="items_cart2">
                                                        item(s)</span><span class="items_carts">$162.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>

                                <ul class="dropdown-menu pull-right shoppingcart-box" role="menu">
                                    <li>
                                        <table class="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <td class="text-center" style="width:70px">
                                                        <a href="#" bis_skin_checked="1">
                                                            <img src="../assets/img/catalog/demo/product/80/1.jpg"
                                                                style="width:70px" alt="Yutculpa ullamcon"
                                                                title="Yutculpa ullamco" class="preview">
                                                        </a>
                                                    </td>
                                                    <td class="text-left"> <a class="cart_product_name" href="#"
                                                            bis_skin_checked="1">Yutculpa
                                                            ullamco</a>
                                                    </td>
                                                    <td class="text-center">x1</td>
                                                    <td class="text-center">$80.00</td>
                                                    <td class="text-right">
                                                        <a href="#" class="fa fa-edit" bis_skin_checked="1"></a>
                                                    </td>
                                                    <td class="text-right">
                                                        <a onclick="cart.remove('2');"
                                                            class="fa fa-times fa-delete"></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center" style="width:70px">
                                                        <a href="#" bis_skin_checked="1">
                                                            <img src="../assets/img/catalog/demo/product/80/2.jpg"
                                                                style="width:70px" alt="Xancetta bresao"
                                                                title="Xancetta bresao" class="preview">
                                                        </a>
                                                    </td>
                                                    <td class="text-left"> <a class="cart_product_name" href="#"
                                                            bis_skin_checked="1">Xancetta bresao</a>
                                                    </td>
                                                    <td class="text-center">x1</td>
                                                    <td class="text-center">$60.00</td>
                                                    <td class="text-right">
                                                        <a href="#" class="fa fa-edit" bis_skin_checked="1"></a>
                                                    </td>
                                                    <td class="text-right">
                                                        <a onclick="cart.remove('1');"
                                                            class="fa fa-times fa-delete"></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                    <li>
                                        <div bis_skin_checked="1">
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td class="text-left"><strong>Sub-Total</strong>
                                                        </td>
                                                        <td class="text-right">$140.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left"><strong>Total</strong>
                                                        </td>
                                                        <td class="text-right">$162.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p class="text-right">
                                                <router-link :to="{ name: 'Cart' }">
                                                    <a class="btn view-cart" href="#" bis_skin_checked="1">
                                                        <i class="fa fa-shopping-cart"></i>View
                                                        Cart</a>
                                                </router-link>

                                                <router-link :to="{ name: 'Chekout' }">

                                                    &nbsp;&nbsp;&nbsp; <a class="btn btn-mega checkout-cart" href="#"
                                                        bis_skin_checked="1"><i class="fa fa-share"></i>Checkout</a>
                                                </router-link>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <router-link :to="{ name: 'Wishlist' }">
                            <div class="wishlist hidden-md hidden-sm hidden-xs" bis_skin_checked="1">

                                <a href="#" id="wishlist-total" class="top-link-wishlist">

                                    <i class=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-heart-fill mb-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                        </svg></i>
                                </a>
                            </div>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>

        <div class="header-bottom hidden-compact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div class="menu-vertical-w">
                            <div class="responsive so-megamenu megamenu-style-dev ">
                                <div class="so-vertical-menu ">
                                    <nav class="navbar-default">

                                        <div class="container-megamenu vertical">
                                            <div id="menuHeading">
                                                <div class="megamenuToogle-wrapper">
                                                    <div class="megamenuToogle-pattern">
                                                        <div class="container">
                                                            <div>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                            </div>
                                                            All Categories
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="navbar-header">
                                                <button type="button" id="show-verticalmenu" data-toggle="collapse"
                                                    class="navbar-toggle">
                                                    <i class="fa fa-bars"></i>
                                                    <span> All Categories </span>
                                                </button>
                                            </div>
                                            <div class="vertical-wrapper">
                                                <span id="remove-verticalmenu" class="fa fa-times"></span>
                                                <div class="megamenu-pattern">
                                                    <div class="container-mega">
                                                        <ul class="megamenu">
                                                            <li class="item-vertical  with-sub-menu hover">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Lighting</span>
                                                                    <b class="fa-angle-right"></b>
                                                                </a>
                                                                <div class="sub-menu" data-subwidth="60">
                                                                    <div class="content">
                                                                        <div class="row">
                                                                            <div class="col-sm-12">
                                                                                <div class="row">
                                                                                    <div class="col-md-4 static-menu">
                                                                                        <div class="menu">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Apparel</a>
                                                                                                    <ul>
                                                                                                        <li><a href="#">Accessories
                                                                                                                for
                                                                                                                Tablet
                                                                                                                PC</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Accessories
                                                                                                                for i
                                                                                                                Pad</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Accessories
                                                                                                                for
                                                                                                                iPhone</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Bags,
                                                                                                                Holiday
                                                                                                                Supplies</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Car
                                                                                                                Alarms
                                                                                                                and
                                                                                                                Security</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Car
                                                                                                                Audio
                                                                                                                &amp;
                                                                                                                Speakers</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Cables
                                                                                                        &amp;
                                                                                                        Connectors</a>
                                                                                                    <ul>
                                                                                                        <li><a href="#">Cameras
                                                                                                                &amp;
                                                                                                                Photo</a>
                                                                                                        </li>
                                                                                                        <li><a
                                                                                                                href="#">Electronics</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Outdoor
                                                                                                                &amp;
                                                                                                                Traveling</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-4 static-menu">
                                                                                        <div class="menu">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Camping
                                                                                                        &amp; Hiking</a>
                                                                                                    <ul>
                                                                                                        <li><a
                                                                                                                href="#">Earings</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Shaving
                                                                                                                &amp;
                                                                                                                Hair
                                                                                                                Removal</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Salon
                                                                                                                &amp;
                                                                                                                Spa
                                                                                                                Equipment</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Smartphone
                                                                                                        &amp;
                                                                                                        Tablets</a>
                                                                                                    <ul>
                                                                                                        <li><a href="#">Sports
                                                                                                                &amp;
                                                                                                                Outdoors</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Bath
                                                                                                                &amp;
                                                                                                                Body</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Gadgets
                                                                                                                &amp;
                                                                                                                Auto
                                                                                                                Parts</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-4 static-menu">
                                                                                        <div class="menu">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Bags,
                                                                                                        Holiday
                                                                                                        Supplies</a>
                                                                                                    <ul>
                                                                                                        <li><a href="#"
                                                                                                                onclick="window.location = '18_46';">Battereries
                                                                                                                &amp;
                                                                                                                Chargers</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                onclick="window.location = '24_64';">Bath
                                                                                                                &amp;
                                                                                                                Body</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                onclick="window.location = '18_45';">Headphones,
                                                                                                                Headsets</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                onclick="window.location = '18_30';">Home
                                                                                                                Audio</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item-vertical">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Oil Fluids</span>
                                                                </a>
                                                            </li>
                                                            <li class="item-vertical  style1 with-sub-menu hover">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span class="label"></span>
                                                                    <span>Smart Devices</span>
                                                                    <b class="fa-angle-right"></b>
                                                                </a>
                                                                <div class="sub-menu" data-subwidth="40">
                                                                    <div class="content">
                                                                        <div class="row">
                                                                            <div class="col-md-6">
                                                                                <div class="row">
                                                                                    <div class="col-md-12 static-menu">
                                                                                        <div class="menu">
                                                                                            <ul>
                                                                                                <li><a href="#"
                                                                                                        class="main-menu">Smartphone</a>
                                                                                                    <ul>
                                                                                                        <li><a
                                                                                                                href="#">Esdipiscing</a>
                                                                                                        </li>
                                                                                                        <li><a
                                                                                                                href="#">Scanners</a>
                                                                                                        </li>
                                                                                                        <li><a
                                                                                                                href="#">Apple</a>
                                                                                                        </li>
                                                                                                        <li><a
                                                                                                                href="#">Dell</a>
                                                                                                        </li>
                                                                                                        <li><a
                                                                                                                href="#">Scanners</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li><a href="#"
                                                                                                        class="main-menu">Electronics</a>
                                                                                                    <ul>
                                                                                                        <li><a
                                                                                                                href="#">Asdipiscing</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Diam
                                                                                                                sit</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Labore
                                                                                                                et</a>
                                                                                                        </li>
                                                                                                        <li><a
                                                                                                                href="#">Monitors</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <div class="row banner">
                                                                                    <a href="#">
                                                                                        <img src="../assets/img/vbanner1.png"
                                                                                            alt="banner1">
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item-vertical with-sub-menu hover">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Paintworks</span>
                                                                    <b class="fa-angle-right"></b>
                                                                </a>
                                                                <div class="sub-menu" data-subwidth="60">
                                                                    <div class="content">
                                                                        <div class="row">
                                                                            <div class="col-md-12">
                                                                                <div class="row">
                                                                                    <div class="col-md-4 static-menu">
                                                                                        <div class="menu">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Car
                                                                                                        Alarms and
                                                                                                        Security</a>
                                                                                                    <ul>
                                                                                                        <li><a href="#">Car
                                                                                                                Audio
                                                                                                                &amp;
                                                                                                                Speakers</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Gadgets
                                                                                                                &amp;
                                                                                                                Auto
                                                                                                                Parts</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Gadgets
                                                                                                                &amp;
                                                                                                                Auto
                                                                                                                Parts</a>
                                                                                                        </li>
                                                                                                        <li><a href="#">Headphones,
                                                                                                                Headsets</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="24"
                                                                                                        onclick="window.location = '24';"
                                                                                                        class="main-menu">Health
                                                                                                        &amp; Beauty</a>
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="#">Home
                                                                                                                Audio</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Helicopters
                                                                                                                &amp;
                                                                                                                Parts</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Outdoor
                                                                                                                &amp;
                                                                                                                Traveling</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Toys
                                                                                                                &amp;
                                                                                                                Hobbies</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-4 static-menu">
                                                                                        <div class="menu">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Electronics</a>
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a
                                                                                                                href="#">Earings</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Salon
                                                                                                                &amp;
                                                                                                                Spa
                                                                                                                Equipment</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Shaving
                                                                                                                &amp;
                                                                                                                Hair
                                                                                                                Removal</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Smartphone
                                                                                                                &amp;
                                                                                                                Tablets</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Sports
                                                                                                        &amp;
                                                                                                        Outdoors</a>
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="#">Flashlights
                                                                                                                &amp;
                                                                                                                Lamps</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a
                                                                                                                href="#">Fragrances</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a
                                                                                                                href="#">Fishing</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">FPV
                                                                                                                System
                                                                                                                &amp;
                                                                                                                Parts</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-4 static-menu">
                                                                                        <div class="menu">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">More
                                                                                                        Car
                                                                                                        Accessories</a>
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="#">Lighter
                                                                                                                &amp;
                                                                                                                Cigar
                                                                                                                Supplies</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Mp3
                                                                                                                Players
                                                                                                                &amp;
                                                                                                                Accessories</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Men
                                                                                                                Watches</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Mobile
                                                                                                                Accessories</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Gadgets
                                                                                                        &amp; Auto
                                                                                                        Parts</a>
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            <a href="#">Gift
                                                                                                                &amp;
                                                                                                                Lifestyle
                                                                                                                Gadgets</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Gift
                                                                                                                for
                                                                                                                Man</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Gift
                                                                                                                for
                                                                                                                Woman</a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#">Gift
                                                                                                                for
                                                                                                                Woman</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item-vertical css-menu with-sub-menu hover">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Replacement Parts</span>
                                                                    <b class="fa-angle-right"></b>
                                                                </a>
                                                                <div class="sub-menu" data-subwidth="20">
                                                                    <div class="content">
                                                                        <div class="row">
                                                                            <div class="col-sm-12">
                                                                                <div class="row">
                                                                                    <div class="col-sm-12 hover-menu">
                                                                                        <div class="menu">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Headphones,
                                                                                                        Headsets</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Home
                                                                                                        Audio</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Health
                                                                                                        &amp; Beauty</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Helicopters
                                                                                                        &amp; Parts</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="#"
                                                                                                        class="main-menu">Helicopters
                                                                                                        &amp; Parts</a>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="item-vertical">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Tool & equipments</span>
                                                                </a>
                                                            </li>
                                                            <li class="item-vertical">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Wheels & Tires</span>
                                                                </a>
                                                            </li>
                                                            <li class="item-vertical">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Car Parts</span>
                                                                </a>
                                                            </li>
                                                            <li class="item-vertical">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Gaming Toys</span>
                                                                </a>
                                                            </li>
                                                            <li class="item-vertical">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Baby Car Seats</span>
                                                                </a>
                                                            </li>
                                                            <li class="item-vertical">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Motobike Care</span>
                                                                </a>
                                                            </li>
                                                            <li class="item-vertical" style="display: none;">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Jewelry &amp; Watches</span>
                                                                </a>
                                                            </li>
                                                            <li class="item-vertical" style="display: none;">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Home &amp; Lights</span>
                                                                </a>
                                                            </li>
                                                            <li class="item-vertical" style="display: none;">
                                                                <p class="close-menu"></p>
                                                                <a href="#" class="clearfix">
                                                                    <span>Metallurgy</span>
                                                                </a>
                                                            </li>

                                                            <!-- <li class="loadmore">
                                                                <i class="fa fa-plus-square-o"></i>
                                                                <span class="more-view">More Categories</span>
                                                            </li> -->

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-6 col-xs-6">
                        <div class="main-menu-w">
                            <div class="responsive so-megamenu megamenu-style-dev">
                                <nav class="navbar-default">
                                    <div class=" container-megamenu  horizontal open ">
                                        <div class="navbar-header">
                                            <button type="button" id="show-megamenu" data-toggle="collapse"
                                                class="navbar-toggle">
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                            </button>
                                        </div>

                                        <div class="megamenu-wrapper">
                                            <span id="remove-megamenu" class="fa fa-times"></span>
                                            <div class="megamenu-pattern">
                                                <div class="container-mega">
                                                    <ul class="megamenu" data-transition="slide"
                                                        data-animationtime="250">
                                                        <li class=" ">
                                                            <a href="/">Home</a>

                                                        </li>
                                                        <li class="with-sub-menu hover">
                                                            <p class="close-menu"></p>
                                                            <a href="#" class="clearfix">
                                                                <strong>Features</strong>
                                                                <b class="caret"></b>
                                                            </a>
                                                            <div class="sub-menu" style="width: 100%; right: auto;">
                                                                <div class="content">
                                                                    <div class="row">


                                                                        <div class="col-md-3">
                                                                            <div class="column">
                                                                                <a href="#"
                                                                                    class="title-submenu">Shopping
                                                                                    pages</a>
                                                                                <div>
                                                                                    <ul class="row-list">
                                                                                        <router-link
                                                                                            :to="{ name: 'Cart' }">

                                                                                            <li><a href="#">Shopping
                                                                                                    Cart Page</a></li>
                                                                                        </router-link>
                                                                                        <router-link
                                                                                            :to="{ name: 'Chekout' }">
                                                                                            <li><a href="#">Checkout
                                                                                                    Page</a></li>
                                                                                        </router-link>
                                                                                        <router-link
                                                                                            :to="{ name: 'Wishlist' }">

                                                                                            <li><a href="#">Wishlist
                                                                                                    Page</a></li>
                                                                                        </router-link>
                                                                                        <li><a href="#">
                                                                                                Offers
                                                                                            </a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <div class="column">
                                                                                <a href="#" class="title-submenu">My
                                                                                    Account pages</a>
                                                                                <div>
                                                                                    <ul class="row-list">
                                                                                        <router-link
                                                                                            :to="{ name: 'Login' }">

                                                                                            <li><a href="#">Login
                                                                                                    Page</a></li>
                                                                                        </router-link>
                                                                                        <router-link
                                                                                            :to="{ name: 'Register' }">
                                                                                            <li><a href="#">Register
                                                                                                    Page</a></li>
                                                                                        </router-link>
                                                                                        <router-link
                                                                                            :to="{ name: 'Profile' }">

                                                                                            <li><a href="#">My
                                                                                                    Account</a></li>
                                                                                        </router-link>
                                                                                        <router-link
                                                                                            :to="{ name: 'OrderHistory' }">
                                                                                            <li><a href="#">Order
                                                                                                    History</a></li>
                                                                                        </router-link>
                                                                                        <router-link
                                                                                            :to="{ name: 'OrderInfo' }">

                                                                                            <li><a href="#">Order
                                                                                                    Information</a></li>
                                                                                        </router-link>


                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="with-sub-menu hover">
                                                            <p class="close-menu"></p>
                                                            <a href="#" class="clearfix">
                                                                <strong>Pages</strong>
                                                                <b class="caret"></b>
                                                            </a>
                                                            <div class="sub-menu" style="width: 40%; ">
                                                                <div class="content">
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <ul class="row-list">
                                                                                <li><a class="subcategory_item"
                                                                                        href="#">FAQ</a></li>


                                                                                <li><a class="subcategory_item"
                                                                                        href="#">Contact
                                                                                        us</a></li>

                                                                                <li><a class="subcategory_item"
                                                                                        href="#">About Us
                                                                                    </a></li>
                                                                            </ul>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="with-sub-menu hover">
                                                            <p class="close-menu"></p>
                                                            <a href="#" class="clearfix">
                                                                <strong>Categories</strong>

                                                                <b class="caret"></b>
                                                            </a>
                                                            <div class="sub-menu" style="width: 100%; display: none;">
                                                                <div class="content">
                                                                    <div class="row">
                                                                        <div class="col-sm-12">
                                                                            <div class="row">
                                                                                <div class="col-md-3 img img1">
                                                                                    <a href="#"><img
                                                                                            src="../assets/img/image-1.jpg"
                                                                                            alt="banner1"></a>
                                                                                </div>
                                                                                <div class="col-md-3 img img2">
                                                                                    <a href="#"><img
                                                                                            src="../assets/img/image-3.jpg"
                                                                                            alt="banner2"></a>
                                                                                </div>
                                                                                <div class="col-md-3 img img3">
                                                                                    <a href="#"><img
                                                                                            src="../assets/img/image-2.jpg"
                                                                                            alt="banner3"></a>
                                                                                </div>
                                                                                <div class="col-md-3 img img4">
                                                                                    <a href="#"><img
                                                                                            src="../assets/img/image-4.jpg"
                                                                                            alt="banner4"></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <a href="#"
                                                                                class="title-submenu">Automotive</a>
                                                                            <div class="row">
                                                                                <div class="col-md-12 hover-menu">
                                                                                    <div class="menu">
                                                                                        <ul>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Car
                                                                                                    Alarms and
                                                                                                    Security</a></li>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Car
                                                                                                    Audio &amp;
                                                                                                    Speakers</a></li>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Gadgets
                                                                                                    &amp; Auto Parts</a>
                                                                                            </li>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">More
                                                                                                    Car Accessories</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <a href="#"
                                                                                class="title-submenu">Funitures</a>
                                                                            <div class="row">
                                                                                <div class="col-md-12 hover-menu">
                                                                                    <div class="menu">
                                                                                        <ul>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Bathroom</a>
                                                                                            </li>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Bedroom</a>
                                                                                            </li>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Decor</a>
                                                                                            </li>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Living
                                                                                                    room</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <a href="#" class="title-submenu">Jewelry
                                                                                &amp; Watches</a>
                                                                            <div class="row">
                                                                                <div class="col-md-12 hover-menu">
                                                                                    <div class="menu">
                                                                                        <ul>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Earings</a>
                                                                                            </li>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Wedding
                                                                                                    Rings</a></li>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Men
                                                                                                    Watches</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <a href="#"
                                                                                class="title-submenu">Electronics</a>
                                                                            <div class="row">
                                                                                <div class="col-md-12 hover-menu">
                                                                                    <div class="menu">
                                                                                        <ul>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Computer</a>
                                                                                            </li>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Smartphone</a>
                                                                                            </li>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Tablets</a>
                                                                                            </li>
                                                                                            <li><a href="#"
                                                                                                    class="main-menu">Monitors</a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </header>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>