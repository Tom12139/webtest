<!-- eslint-disable vue/valid-v-for -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Principal Investigator</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/alain_dagher.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Alain Dagher</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="alain.dagher@mcgill.ca">alain.dagher@mcgill.ca</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>

              <a class="q-my-md text-subtitle2" href="https://scholar.google.ca/citations?user=Lu2XPfUAAAAJ&hl=en&oi=ao">Google-scholar</a>
              <p class="q-my-md">Dr. Dagher is a neurologist specializing in movement disorders and functional brain imaging. His research aims at understanding the function of the basal ganglia, with a particular emphasis on appetitive behaviours. This involves studying how we learn about rewards and punishments, and become motivated to engage in reward seeking behaviours. The two main techniques used are positron emission tomography (PET) targeting the dopamine system, and functional magnetic resonance imaging (fMRI). The research focuses on Parkinson’s disease, stress, drug addiction (notably cigarette smoking), pathological gambling, and obesity. Dr Dagher is funded by CIHR, FRSQ, NIDA, the Parkinson Society of Canada, The Institute for Research on Pathological Gambling and Related Disorders, and Unilever PLC.</p>
            </div>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Current Members</p>
            <div style="width:100%" class="flex">
              <template v-for="item,index in items" :key="index">
                  <q-card @click="toPage(index)" class="q-ma-sm gt-xs cursor-pointer" style="width:30%" flat bordered>
                    <q-img
                      class="rounded-borders col-3"
                      fit="cover"
                      :src="item.url"
                    >
                    <div class="absolute-bottom text-subtitle2 text-center ">
                      {{item.title}}
                    </div>
                    </q-img>
                  </q-card>
              </template>
            </div>
            <template v-for="item in items">
                <q-card class="my-card q-ma-sm lt-sm cursor-pointer" style="width:90%" flat bordered>
                  <q-card-section horizontal>
                        <q-img
                        class="rounded-borders col-6"
                        fit="cover"
                        Style="height:100%"
                        :src="item.url"
                        />
                        <q-card-section>
                          <p class="text-subtitle2 text-weight-bold">{{item.title}}</p>
                          {{ item.content }}
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </template>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Alumni</p>
              <template v-for="thing,x in alumni" :key="x">
                    <q-card @click="goPage(x)" class="q-ma-md gt-xs cursor-pointer" style="width:30%" flat bordered>
                      <q-img
                        class="rounded-borders col-3"
                        fit="cover"
                        :src="thing.url"
                      >
                      <div class="absolute-bottom text-subtitle2 text-center">
                        {{thing.title}}
                      </div>
                      </q-img>
                    </q-card>
                </template>
        </div>
    </q-page>
  </template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      items: [{
        title: 'PhD student: Lang Liu',
        url: new URL('../assets/Team/langliu.jpg', import.meta.url).href,
        link: '/LangLiu',
        content: 'Lang completed his BA in cell and systems biology, statistics and mathematics in the University of Toronto. He completed his MSc in biomedical informatics in the Department of Computing, Queens University. His projects are focused on bioinformatic and machine learning approaches using genetics and brain imaging in PD.'
      }, {
        title: 'PhD student: Qin Tao',
        url: new URL('../assets/Team/QinTao.jpg', import.meta.url).href,
        link: '/QinTao',
        content: 'Qin received her B.S. degree in computer science and technology from Chengdu University of Technology and her M.S. degree in biomedical engineering from University of Electronic Science and Technology of China. For her PhD, her research interests include visual neuroscience research, where she attempts to explore the inner visual representation and apply it to computational model design. Moreover, Qin is also interested in decision-making and the reward system, and she attempts to collaborate with Alex Pastor-Bernier to investigate the effect of dopamine levels on perceptual decision-making.'
      }, {
        title: 'PhD student: Christina Tremblay',
        url: new URL('../assets/Team/ChristinaTremblay.jpg', import.meta.url).href,
        link: '/Christina',
        content: 'Christina Tremblay completed a PhD in Medical Research (Laval University, Canada) under the supervision of Dr. Laura Monetta, Dr. Joël Macoir and Dr. Cyril Schneider about the effects of two brain stimulation technics, Deep Brain Stimulation and Transcranial Magnetic Stimulation (TMS), on cognitive and language abilities in Parkinson’s disease. She also used TMS to investigate the role of the supplementary motor cortex in decision-making during her postdoctoral training at Aix-Marseille University in France. She holds a MSc in Neurobiology and BSc in Physic both from Laval University, Canada. She is currently working at the Montreal Neurological Institute (MNI) with Alain Dagher’s research team on identifying vulnerable brain regions associated with Parkinson’s and Alzheimer’s disease pathology and the factors implicated in this vulnerability using multimodal neuroimaging analyses.'
      }, {
        title: 'postdoctoral researcher: Filip Morys',
        url: new URL('../assets/Team/FilipMorys.jpg', import.meta.url).href,
        link: '/Filip',
        content: 'Filip is a postdoctoral research fellow at the Dagher Lab. He received his PhD in Leipzig, Germany, where he worked with Dr. Annette Horstmann on neural correlates of maladaptive decision-making in obesity. Currently, Filip is funded by the FRQS and is working on defining the causes and consequences of obesity. He is investigating the environmental, brain, and genetic risk factors for unhealthy weight gain as well as the long-term effects of chronic obesity on the brain. When not neurosciencing, Filip can be found playing tennis, watching tennis, or obsessing about a healthy lifestyle'
      }, {
        title: 'postdoctoral researcher: \n Shady Rahayel',
        url: new URL('../assets/Team/ShadyRahayel.jpg', import.meta.url).href,
        link: '/Shady',
        content: 'Shady Rahayel is a postdoctoral researcher specialized in brain imaging, sleep, and neurodegenerative disorders. After a first postdoctoral training in molecular imaging at the University of Montreal, he is now a postdoctoral researcher at The Neuro in the lab of Alain Dagher. His research work primarily focuses on the use of MRI imaging and computational neuroscience to understand the neurodegeneration associated with prodromal and manifest synucleinopathies. Shady also practices as a clinical sleep psychologist.'
      }, {
        title: 'PhD student: Mari Shishikura',
        url: new URL('../assets/Team/mari.jpg', import.meta.url).href,
        link: '/mari',
        content: 'Mari received B.Sc. in biology from Kyoto University, Japan. For her PhD, she investigates how genetic and socioeconomic factors impact the brain, leading to impulsive behaviours. Additionally, she is interested in how brain mechanisms involved in impulsivity plays a role in obesity.'
      }],
      alumni: [{
        title: 'Master Student: Trycia Kouchache',
        url: new URL('../assets/Team/TryciaKouchache.jpg', import.meta.url).href,
        link: '/Trycia',
        content: 'Trycia completed her MSc in the Dopamine Neuroimaging lab working on the Polygenic Risk Scores for Smoking and their association with brain morphometry in typical development. Trycia now works in clinical research on brain tumours, movement disorders and cognitive diseases at the NEURO.'
      }]
    }
  },
  methods: {
    toPage (i) {
      this.$router.push(`${this.items[i].link}`)
    },
    goPage (i) {
      this.$router.push(`${this.alumni[i].link}`)
    }
  }
})
</script>
