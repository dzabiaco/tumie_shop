<template>
  <header class="header-area transparent">
    <div class="container">
      <div class="row no-gutter align-items-center position-relative">
        <div class="col-12">
          <div class="header-align">
            <div class="header-align-start">
              <div class="header-logo-area">
                <router-link to="/">
                  <img class="logo-main" src="../assets/img/logo-light.png" width="158" height="36" alt="Logo" />
                </router-link>
              </div>
            </div>
            <div class="header-align-center">
              <div class="header-navigation-area position-relative">
                <ul class="main-menu nav">
                  <li class="has-submenu"><router-link to="/"><span>Home</span></router-link>
                  </li>
                  <li><router-link to="/about"><span>About</span></router-link></li>
                  <li class="has-submenu position-static"><router-link to="/shop"><span>Shop</span></router-link>
                  </li>
                  <li class="has-submenu"><router-link to="/blog"><span>Blog</span></router-link>
                  </li>
                  <li><router-link to="/contact"><span>Contact</span></router-link></li>
                </ul>
              </div>
            </div>
            <div class="header-align-end">
              <div class="header-action-area">
                <div class="shopping-account">
                  <router-link class="shopping-account-btn" to="/account-login">
                    <i class="pe-7s-users icon"></i>
                  </router-link>
                </div>
                <div class="shopping-cart">
                  <router-link to="/shop-cart">
                  <button class="shopping-cart-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasCart" aria-controls="AsideOffcanvasCart">
                    <i class="pe-7s-shopbag icon"></i>
                    <sup class="shop-count">0</sup>
                  </button>
                  </router-link>
                </div>
                <button class="btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasMenu" aria-controls="AsideOffcanvasMenu">
                  <i class="pe-7s-menu"></i>
                </button>
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
name: "TheHeader"
}
</script>

<style scoped>

</style>