<script setup>
import { ref, computed, watch } from "vue";
import { RouterLink, RouterView, useRouter } from 'vue-router'
import FooterView from '@/components/layouts/Footer.vue'
import AuthView from '@/components/layouts/auth/Auth.vue'
import store from "./stores";
import { languagePack } from "@/languages";
import iconAvata from '@/assets/images/icon-256x256.png'


const isLogin = computed(() => store.getters.usersss)
const isShowLogin = ref(false)

const router = useRouter()
window.addEventListener("message", async function (event) {
  var res = event.data
  if (res.active == "auth") {
    isShowLogin.value = true
  }
}, false
)
watch(isLogin, (oldValue, newValue) => {
  if (isLogin.value) {
    isShowLogin.value = false
  }
})
function Logout() {
  store.dispatch('logout')
  router.push('/login')
}

</script>
<template>
  <header class="header">
    <div class="container wrapper flex">
      <nav class="compute">
        <RouterLink class="item-link" to="/"><i class='bx bx-home'></i>&ensp;{{ languagePack["HOME"] }}</RouterLink>
        <RouterLink class="item-link" to="/about"><i class='bx bx-git-merge'></i>&ensp;{{ languagePack["ABOUT"] }}
        </RouterLink>
        <RouterLink class="item-link" to="/product"><i class='bx bxs-news'></i>&ensp;{{ languagePack["PRODUCT"] }}
        </RouterLink>
        <RouterLink class="item-link" to="/sevices"><i class='bx bx-cart-add'></i>&ensp;{{ languagePack["PLUGIN"] }}</RouterLink>
        <RouterLink class="item-link" to="/contact"><i class='bx bxs-contact'></i>&ensp;{{ languagePack["CONTACT"] }}
        </RouterLink>
      </nav>
      <div class="mobile">
        <div class="menu">
          <i class='bx bx-menu'></i>
        </div>
        <div class="menu-ui">
          <RouterLink class="item-link" to="/"><i class='bx bx-home'></i>&ensp;{{ languagePack["HOME"] }}</RouterLink>
          <RouterLink class="item-link" to="/about"><i class='bx bx-git-merge'></i>&ensp;{{ languagePack["ABOUT"] }}
          </RouterLink>
          <RouterLink class="item-link" to="/product"><i class='bx bxs-news'></i>&ensp;{{ languagePack["PRODUCT"] }}
          </RouterLink>
          <RouterLink class="item-link" to="/sevices"><i class='bx bx-cart-add'></i>&ensp;{{ languagePack["PLUGIN"] }}</RouterLink>
          <RouterLink class="item-link" to="/contact"><i class='bx bxs-contact'></i>&ensp;{{ languagePack["CONTACT"] }}
          </RouterLink>
        </div>
      </div>
      <div class="profile">
        <div class="user flex center" v-if="isLogin">
          <div class="user-logo flex center right">
            <img width="30" :src="iconAvata" alt="logo" class="logo">
          </div>
          <div class="user-info">
            <div class="profie">
              {{ languagePack["ME"] }}
            </div>
            <div class="sub-profile">
              <div class="profile-item">
                <div class="text">
                  <RouterLink to="/dash"><i class='bx bx-ghost'></i>&ensp;{{ languagePack["DASH"] }}</RouterLink>
                </div>
              </div>
              <div class="profile-item">
                <div class="text">
                  <RouterLink to="/new-jobs"><i class='bx bx-mail-send'></i>&ensp;{{ languagePack["NEWJOBS"] }}</RouterLink>
                </div>
              </div>
              <div class="profile-item">
                <div class="text" @click="Logout()"><i class='bx bx-log-out'></i>&ensp;{{ languagePack["LOGOUT"] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="user flex center" v-else>
          <div class="user-info flex" @click="isShowLogin = true">
            <div class="login">
              {{ languagePack["LOGIN"] }}
            </div>
            &ensp;/&ensp;<div class="signin">
              {{ languagePack["LOGUP"] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="bottom">
    <!-- <div class="title-web">
      <h2 class="title-website"><i class='bx bxs-extension'></i> OneWise<sup>.app</sup></h2>
      <div class="slogan">{{ languagePack["SLOGAN"] }}!</div>
    </div> -->
    <RouterView />
    <FooterView />
    <!-- //show login -->
    <AuthView v-if="isShowLogin" @update:closeLogin="isShowLogin = false" />
  </div>
</template>

<style scoped>
.bottom{
  padding-top: 60px;
}
.user-info {
  position: relative;
}

.sub-profile {
  display: none;
  position: absolute;
  top: 100%;
  left: -100%;
  width: 200px;
  background: rgb(0, 189, 148);
  padding: 5px;
  border-radius: 5px;
}

.profile-item {
  padding: 5px 10px;
  cursor: pointer;
  text-align: start;
}

.profile-item:hover {
  background-color: antiquewhite;
  border-radius: 5px;
  color: rgb(11, 51, 45);
}
.profile-item:hover a{
  color: rgb(11, 51, 45);
}
.user-info:hover .sub-profile {
  display: block;
}

.title-web {
  text-align: center;
}

.slogan {
  font-size: 13px;
}

.title-website {
  text-align: center;
  padding-top: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin: 0 !important;
}

.login,
.signin {
  text-decoration: underline;
  cursor: pointer;
}

header {
  width: 100%;
  background: rgb(0, 189, 148);
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
}

.wrapper {
  height: 60px;
  margin: auto;
}

nav {
  display: flex;
  align-items: center;
  justify-content: start;
  height: 100%;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 15px;
  min-width: 100px;
  border-radius: 5px;
  margin-right: 5px;
  color: rgb(255, 255, 255);
  transition: all 0.5s;
}

.profile-item a {
  padding: 0;
  justify-content: flex-start;
}

.profile {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: auto;
  padding-right: 20px;
}

.logo {
  border-radius: 50%;
  border: 1px solid rgba(92, 95, 248, 0.473);
}

.center {
  align-items: center;
  justify-content: center;
}

.right {
  margin-right: 7px;
}

.user {
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  color: rgb(255, 255, 255);
}

.item-link:hover {
  background-color: antiquewhite;
  color: rgb(11, 51, 45);
}

.mobile {
  display: none;
  position: relative;
}

.mobile:hover .menu-ui {
  display: block;
}

.menu {
  font-size: 2.3em;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
  display: flex;
  color: rgb(255, 255, 255);
}

.menu-ui {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background-color: antiquewhite;
  z-index: 99;
  display: none;
  padding-bottom: 15px;
}

.menu-ui .item-link {
  display: flex;
  align-items: center;
  justify-content: start;
  margin-right: 0;
  border-radius: 0;
  padding: 8px 15px;
}

@media only screen and (max-width: 1000px) {
  .compute {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
