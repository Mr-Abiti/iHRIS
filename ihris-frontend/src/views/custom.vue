<template>
    <component :is="currentComponent"></component>
</template>
<script>
export default {
  props: ["path", "component"],
  data() {
    return {
        currentComponent: () => import(`@/ihris-frontend-site/${this.$route.params.path}/${this.$route.params.component}.vue`)
    }
  }
}
</script>>