<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/pe-icon-7-stroke.css';
import './assets/css/swiper.min.css';
import './assets/css/fancybox.min.css';
import './assets/css/ion.rangeSlider.min.css';
import './assets/css/style.css';

import './assets/js/modernizr.js';
import './assets/js/jquery-main.js';

export default defineComponent({
  name: 'App',
  components: {
  },
  mounted() {
    let yourScript= document.createElement('script')
    yourScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js')
    yourScript.setAttribute('async','true');
    document.body.appendChild(yourScript);

    yourScript= document.createElement('script')
    yourScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js')
    yourScript.setAttribute('async','true');
    document.body.appendChild(yourScript);

    yourScript= document.createElement('script')
    yourScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.2/jquery-migrate.min.js')
    yourScript.setAttribute('async','true');
    document.body.appendChild(yourScript);

    yourScript= document.createElement('script')
    yourScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.2/umd/popper.min.js')
    yourScript.setAttribute('async','true');
    document.body.appendChild(yourScript);

    yourScript= document.createElement('script')
    yourScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js')
    yourScript.setAttribute('async','true');
    document.body.appendChild(yourScript);

    yourScript= document.createElement('script')
    yourScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.0.7/swiper-bundle.min.js')
    yourScript.setAttribute('async','true');
    document.body.appendChild(yourScript);

    yourScript= document.createElement('script')
    yourScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js')
    yourScript.setAttribute('async','true');
    document.body.appendChild(yourScript);

    yourScript= document.createElement('script')
    yourScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/countdown/2.6.0/countdown.min.js')
    yourScript.setAttribute('async','true');
    document.body.appendChild(yourScript);

    yourScript= document.createElement('script')
    yourScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js')
    yourScript.setAttribute('async','true');
    document.body.appendChild(yourScript);

    yourScript= document.createElement('script')
    yourScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js')
    yourScript.setAttribute('async','true');
    document.body.appendChild(yourScript);

    // yourScript= document.createElement('script')
    // yourScript.setAttribute('src', 'https://template.hasthemes.com/tuime/tuime/assets/js/custom.js')
    // yourScript.setAttribute('async','true');
    // document.body.appendChild(yourScript);

  if(localStorage.getItem("cart") === null){
    localStorage.setItem("cart", JSON.stringify([]));
  }
  }
});
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600&amp;display=swap');
</style>
