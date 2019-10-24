<template>
  <div class="productvue">
    <Header></Header>
    <v-product-nav></v-product-nav>
<!--    <Redmi8A></Redmi8A>-->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import ProductNav from '../components/Product/ProductNav'
import Header from '../components/MyIndex/Header'
import Footer from '../components/MyIndex/Footer'
export default {
  name: 'Product',
  components: {
    Footer,
    'v-product-nav': ProductNav,
    Header
  }
}
</script>

<style lang="scss">
  .productvue{
    .page-nav{
      .nav{
        #nav-item-allnav{
          visibility: visible !important;
          &:hover{
            .slider-nav {
              visibility: visible !important;
            }
          }
          .slider-nav {
            visibility: hidden !important;
          }
        }
      }
    }
  }
</style>
<style scoped lang="scss">

</style>
