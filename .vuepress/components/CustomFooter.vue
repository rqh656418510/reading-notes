<template>
  <div class="footer-wrapper">
    <span v-if="frontmatter?.footer?.envMessage">
      <Xicons
        icon="Palette"
        link="http://v2.vuepress-reco.recoluan.com"
        target="_blank"
        :text="`vuepress-theme-reco@${version}`"
      />
    </span>
    
    <span v-if="frontmatter?.footer?.record">
      <Xicons
        icon="ShieldCheck"
        :link="frontmatter?.footer?.recordLink || '#'"
        :text="frontmatter?.footer?.record"
        target="_blank"
      />
    </span>

    <span>
      <Xicons icon="Copyright">
        <a v-if="themeLocal.author">{{themeLocal.author}}</a>&nbsp;&nbsp;
        <a v-if="frontmatter?.footer?.startYear && frontmatter?.footer?.startYear != (new Date().getFullYear())">{{frontmatter?.footer?.startYear}} - </a>
        {{new Date().getFullYear()}}
      </Xicons>
    </span>

    <span v-show="showAccessNumber">
      <Xicons icon="Eye">
        <ValineViews idVal="/" :numStyle="{}" />
      </Xicons>
    </span>
    
    <Comments :hide-comments="true" />
  </div>
</template>

<script setup>
import { defineComponent, computed } from 'vue'
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client'
import { usePageFrontmatter } from '@vuepress/client'
import { useComment } from '@vuepress-reco/vuepress-plugin-comments/lib/client/composables'
import packageInfo from 'vuepress-theme-reco/package.json'

const themeLocal = useThemeLocaleData()
const frontmatter = usePageFrontmatter()
const { solution, options } = useComment()

const { version } = packageInfo
const showAccessNumber = computed(() => {
 if (solution.value !== 'valine') return false

  return options.value.visitor != false
})
</script>
