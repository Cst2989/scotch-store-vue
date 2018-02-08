<template>
<div id="app">
  <nav>
    <div class="container">
      <ul class="nav__left">
        <li>
          <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
        </li>
        <li>
          <router-link to="/despre-noi"><i class="fa fa-home"></i> Despre Noi</router-link>
        </li>
        <li>
          <router-link to="/contact"><i class="fa fa-home"></i> Contact</router-link>
        </li>
        <li>
          <router-link to="/admin"><i class="fa fa-user"></i> Admin</router-link>
        </li>
      </ul>
      <ul class="nav__right">
        <li>
          <router-link to="/cart"><i class="fa fa-shopping-cart"></i> Cart ({{cartItemsCount}})</router-link>
        </li>
        <li>
            <a href="#"> <i class="fa fa-phone"></i>(232) 938-5798</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-phone"></i>(888) 637-7262</a>
        </li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
  <div class="overlay" v-show="showLoader">
    <div class="loading-spinner">
      <div class="dot dotOne"></div>
      <div class="dot dotTwo"></div>
      <div class="dot dotThree"></div>
    </div>
  </div>
  <footer id="footer">
    <div class="footer_widgets_wrapper container">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <aside id="media_image-2" class="col-md-6 col-lg-6 col-sm-12">
          <div class="widget-wrapper">
            <h2>Logo</h2>
          </div>
        </aside>
        <aside id="text-2" class="col-md-6 col-lg-6 col-sm-12">
          <div class="widget-wrapper">
            <div class="widget-title">
              <h6>Contact</h6></div>
            <div class="textwidget">
              <p><span class="date">Service:</span>&nbsp;(232) 938-5798<br>
                <span class="date">Informatii:</span>&nbsp;(888) 637-7262<br>
                <span class="date">Email:</span>&nbsp;office@bmwmotors.ro</p>
            </div>
          </div>
        </aside>

      </div>
      <div class="col-lg-6 col-md-6 col-sm-12">
        <aside id="text-3" class="col-lg-6 col-md-6 col-sm-12">
          <div class="widget-wrapper">
            <div class="widget-title">
              <h6>PROGRAM</h6></div>
            <div class="textwidget">
              <div class="widget-title">
                <h6></h6>
              </div>
              <div class="textwidget"><span class="date">Luni – Vineri:</span>&nbsp;09:00AM – 09:00PM<br>
                <span class="date">Sambata:</span>&nbsp;09:00AM – 07:00PM<br>
                <span class="date">Duminica:</span>&nbsp;Inchis</div>
            </div>
          </div>
        </aside>
        <aside id="socials-2" class="col-lg-6 col-md-6 col-sm-12">
          <div class="widget-wrapper">
            <div class="widget-title">
              <h6>Social</h6></div>
            <div class="socials_widget_wrapper">
              <ul class="widget_socials list-unstyled clearfix">
                <li>
                  <a href="#" target="_blank">
						<i class="fa fa-facebook"></i>
					</a>
                </li>
                <li>
                  <a href="#" target="_blank">
						<i class="fa fa-twitter"></i>
					</a>
                </li>
                <li>
                  <a href="#" target="_blank">
						<i class="fa fa-instagram"></i>
					</a>
                </li>
                <li>
                  <a href="#" target="_blank">
						<i class="fa fa-youtube"></i>
					</a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <div id="footer-copyright" style="background-color:#232628">
      <div class="container footer-copyright">
        <div class="row">
          <div class="col-md-8 col-sm-8">
            <div class="clearfix">
              <div class="copyright-text">© 2018 Service <span class="divider"></span>Toate drepturile rezervate.</div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="clearfix">
              <div class="pull-right xs-pull-left">
                <!-- Header top bar Socials -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </footer>
</div>
</template>
<style>
#footer {
    box-shadow: inset 0px 5px 5px rgba(0, 0, 0, 0.5);
    background: -webkit-linear-gradient(90deg, #22262a 0%, #181c20 100%);
    background: -webkit-linear-gradient(top, #22262a 0%, #181c20 100%);
    background: linear-gradient(180deg, #22262a 0%, #181c20 100%);
}
.footer_widgets_wrapper {
    background-color: transparent;
    padding: 66px 0 20px;
    color: #aaa;
}
.footer_widgets_wrapper .widget-title {
    margin-bottom: 15px;
}
.footer_widgets_wrapper .widget-title h6 {
    font-size: 16px;
    font-weight: 900;
    text-transform: uppercase;
    color:#fff;
}
.footer_widgets_wrapper .widget_socials {
    position: relative;
    left: 3px;
}
.footer_widgets_wrapper .widget_socials li {
    float: left;
    margin: 5px 4px 10px;
}
.footer_widgets_wrapper .widget_socials li:first-child {
    margin-left: -5px;
}
.footer_widgets_wrapper .widget_socials li a:hover {
    background-color: #2ea6b8;
}
.footer_widgets_wrapper .widget_socials li a {
    display: block;
    width: 45px;
    height: 45px;
    background-color: #3b3d3f;
    text-align: center;
    line-height: 45px;
    font-size: 20px;
    color: #fff !important;
    border-radius: 50%;
}
.footer_widgets_wrapper .textwidget {
    font-size: 13px;
    line-height: 20px;
    color: #fff;
}
.footer_widgets_wrapper .textwidget .date {
    color: #aaaaaa;
    font-weight: 700;
}
#footer-copyright {
    padding: 20px 0 19px;
}
#footer-copyright .copyright-text {
    font-size: 13px;
    color: #888;
}
</style>

<script>
import toastr from 'toastr'

import {
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS
} from './store/mutation-types'
export default {
  name: 'app',
  data() {
    return {
      cartItems: this.$store.state.cart
    }
  },
  created() {
    // Subscriptions for mutation
    this.$store.subscribe((mutation) => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ADD_PRODUCT_SUCCESS:
            toastr.success('Product created.', 'Success!')
            break
          case UPDATE_PRODUCT_SUCCESS:
            toastr.success('Product updated.', 'Success!')
            break
          case REMOVE_PRODUCT_SUCCESS:
            toastr.warning('Product deleted.', 'Deleted!')
            break
        }
      }
    })
  },
  computed: {
    cartItemsCount() {
      // Cart count
      return this.cartItems.length
    },
    showLoader() {
      // Loading spinner
      return this.$store.state.showLoader
    }
  }
}
</script>
