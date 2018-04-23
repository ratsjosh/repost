<template>
    <div>
      Callback
    </div>
</template>

<script>
import { setIdToken, setAccessToken } from '../../services/utils/auth'

export default {
  name: 'Callback',
  mounted () {
    this.$nextTick(() => {
      setAccessToken()
      setIdToken()
      window.location.href = '/post'
    })
  }
}
</script>

<style scoped>

</style>