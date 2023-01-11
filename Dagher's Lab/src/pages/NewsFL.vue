<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-page class="flex justify-center col items-start wrap">
        <template v-for="item,index in items" :key="index">
            <div class="q-pa-lg row justify-center items-start q-gutter-md" style="width:60%; min-width: 900px">
                <q-card class="q-ma-md" flat bordered  style="width:80%">
                <q-img
                    :src="item.url"
                />

                <q-card-section>
                    <div class="text-overline text-orange-9">Dagher's lab</div>
                    <div class="text-h5 q-mt-sm q-mb-xs">{{item.title}}</div>
                    <div class="text-caption text-black">
                    {{ item.people }}
                    </div>
                    <div class="q-my-md text-caption text-black">
                    {{ item.content }}
                    </div>
                </q-card-section>
                </q-card>
            </div>
        </template>
        <div class="q-px-lg q-pb-md" style="width:50%; min-width: 900px">
        <q-timeline color="secondary">
          <q-timeline-entry heading>
            Timeline heading
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
          >
          <q-img
            src="~assets/newsPhoto/Labpicnic2022.jpg"
          />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 21, 1986"
            icon="delete"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry heading>
            November, 2017
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            avatar="https://cdn.quasar.dev/img/avatar2.jpg"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            color="orange"
            icon="done_all"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </q-page>
</template>
<script>
import { defineComponent } from 'vue'
import { news } from '../i18n/news.js'

export default defineComponent({
  data () {
    return {
      items: [{
        title: news[0][0],
        url: new URL(news[0][1], import.meta.url).href,
        people: news[0][2],
        content: news[0][3]
      }, {
        title: news[1][0],
        url: new URL(news[1][1], import.meta.url).href,
        people: news[1][2],
        content: news[1][3]
      }, {
        title: news[2][0],
        url: new URL(news[2][1], import.meta.url).href,
        people: news[2][2],
        content: news[2][3]
      }, {
        title: news[3][0],
        url: new URL(news[3][1], import.meta.url).href,
        people: news[3][2],
        content: news[3][3]
      }, {
        title: news[4][0],
        url: new URL(news[4][1], import.meta.url).href,
        people: news[4][2],
        content: news[4][3]
      }, {
        title: news[5][0],
        url: new URL(news[5][1], import.meta.url).href,
        people: news[5][2],
        content: news[5][3]
      }, {
        title: news[6][0],
        url: new URL(news[6][1], import.meta.url).href,
        people: news[6][2],
        content: news[6][3]
      }]
    }
  },
  method: {
    goto: function (url) {
      if (url) {
        window.open(url, '_blank')
      }
    }
  }
})
</script>
