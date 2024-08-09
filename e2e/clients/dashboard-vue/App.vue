<template>
  <dashboard :Tool="Tool" />
</template>

<script>
import Vue from 'vue'
import Tool from '@Tool/core'
import { Dashboard } from '@Tool/vue'

export default {
  name: 'App',
  components: {
    Dashboard,
  },
  computed: {
    Tool: () => new Tool(),
  },
}
</script>

<style src="@Tool/core/dist/style.css"></style>
<style src="@Tool/dashboard/dist/style.css"></style>
