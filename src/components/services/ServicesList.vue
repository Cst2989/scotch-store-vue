<template>
<div class="services">
      <div class="row">
        <div :class="'col-md-'+size+' col-sm-12'">
          <div class="service-box">
            <router-link class="link" to="/service">
                <div class="service-title">
                  <h3>This is Service</h3>
                </div>
                <div class="service-items">
                  <ul>
                    <li>We do stuff</li>
                    <li>We do stuff</li>
                    <li>We do stuff</li>
                  </ul>
                </div>
                <div class="service-link">
                  <button class="button"><i class="fa fa-link"></i> Mai multe detalii </button>
                </div>
            </router-link>
          </div>
        </div>
        <div :class="'col-md-'+size+' col-sm-12'">
          <div class="service-box">
            <router-link class="link" to="/service">
                <div class="service-title">
                 <h3>This is Service</h3>
                </div>
                <div class="service-items">
                  <ul>
                    <li>We do stuff</li>
                    <li>We do stuff</li>
                    <li>We do stuff</li>
                  </ul>
                </div>
                <div class="service-link">
                  <button class="button"><i class="fa fa-link"></i> Mai multe detalii </button>
                </div>
            </router-link>
          </div>
        </div>
        <div :class="'col-md-'+size+' col-sm-12'">
          <div class="service-box last">
            <router-link class="link" to="/service">
                <div class="service-title">
                 <h3>This is Service</h3>
                </div>
                <div class="service-items">
                  <ul>
                    <li>We do stuff</li>
                    <li>We do stuff</li>
                    <li>We do stuff</li>
                  </ul>
                </div>
                <div class="service-link">
                  <button class="button"><i class="fa fa-link"></i> Mai multe detalii </button>
                </div>
            </router-link>
          </div>
        </div>
      </div>
    <div class="row">
      <div :class="'col-md-'+size+' col-sm-12'">
        <div class="service-box">
          <router-link class="link" to="/service">
              <div class="service-title">
               <h3>This is Service</h3>
              </div>
              <div class="service-items">
                <ul>
                  <li>We do stuff</li>
                  <li>We do stuff</li>
                  <li>We do stuff</li>
                </ul>
              </div>
              <div class="service-link">
                <button class="button"><i class="fa fa-link"></i> Mai multe detalii </button>
              </div>
          </router-link>
        </div>
      </div>
      <div :class="'col-md-'+size+' col-sm-12'">
        <div class="service-box">
          <router-link class="link" to="/service">
              <div class="service-title">
               <h3>This is Service</h3>
              </div>
              <div class="service-items">
                <ul>
                  <li>We do stuff</li>
                  <li>We do stuff</li>
                  <li>We do stuff</li>
                </ul>
              </div>
              <div class="service-link">
                <button class="button"><i class="fa fa-link"></i> Mai multe detalii </button>
              </div>
          </router-link>
        </div>
      </div>
      <div :class="'col-md-'+size+' col-sm-12'">
        <div class="service-box last">
          <router-link class="link" to="/service">
              <div class="service-title">
               <h3>This is Service</h3>
              </div>
              <div class="service-items">
                <ul>
                  <li>We do stuff</li>
                  <li>We do stuff</li>
                  <li>We do stuff</li>
                </ul>
              </div>
              <div class="service-link">
                <button class="button"><i class="fa fa-link"></i> Mai multe detalii </button>
              </div>
          </router-link>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'service-list',
  props: ['size'],
}
</script>
<style>
.service-box {
    width: 100%;
    display: block;
    padding:15px;
    margin: 15px;
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-image: url(http://bmwmotors.gq/wp-content/uploads/2017/11/stm-service-1-1.jpg?id=49) !important;
}
.service-box.last {
    color:#fff;
    background-image: url(http://bmwmotors.gq/wp-content/uploads/2017/11/stm-service-3-1.jpg?id=53) !important;
}
.link {
    display: block;
    color: #333;
    text-decoration: none;
}
.link:hover {
  color: #3D3D3D;
  text-decoration: none;
}
.service-title {
    position: relative;
    display: block;
    margin:10px;
    margin-bottom: 30px;
    margin-top: 30px;
    text-transform: uppercase;

}
.service-box.last .link{
    color:#fff;
}
.service-box.last .service-title {
    color:#fff;
}
.service-items {
    position: relative;
    display: block;
    margin:10px;
    margin-bottom: 30px;
}

.service-box .service-items,
.service-box .service-title,
.service-box .service-link {
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
}
.service-box:hover .service-items {
  transform: translateY(-30px);
}
.service-box:hover .service-title {
  transform: translateY(-30px);
}
.service-box:hover .service-link {
  transform: none;
}
.service-link {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
}
.service-link button {
    border-radius: 0;
    width: 100%;
    border-top: none;
    border-bottom: none;
    display: block;
}
</style>
