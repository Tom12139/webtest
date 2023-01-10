<!-- eslint-disable vue/require-v-for-key -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Member:</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/Christina Tremblay.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Christina Tremblay</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="ChristinaTremblay@mcgill.ca">ChristinaTremblay@mcgill.ca</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>
                <div class="q-ma-md">
                  <p class="q-my-md">Christina Tremblay completed a PhD in Medical Research (Laval University, Canada) under the supervision of Dr. Laura Monetta, Dr. Joël Macoir and Dr. Cyril Schneider about the effects of two brain stimulation technics, Deep Brain Stimulation and Transcranial Magnetic Stimulation (TMS), on cognitive and language abilities in Parkinson’s disease. She also used TMS to investigate the role of the supplementary motor cortex in decision-making during her postdoctoral training at Aix-Marseille University in France. She holds a MSc in Neurobiology and BSc in Physic both from Laval University, Canada. She is currently working at the Montreal Neurological Institute (MNI) with Alain Dagher’s research team on identifying vulnerable brain regions associated with Parkinson’s and Alzheimer’s disease pathology and the factors implicated in this vulnerability using multimodal neuroimaging analyses.</p>
                </div>
              </div>
              <div class="q-ma-md flex justify-start wrap" style="width:900px">
              <p class="q-my-md text-subtitle2 text-orange-9">Preprints:</p>
                <template v-for="item in items">
                  <p>{{ item.content }}</p>
                </template>
              <p class="q-my-md text-subtitle2 text-orange-9">Peer-reviewed publications:</p>
                <template v-for="item in peer">
                  <p>{{ item.content }}</p>
                </template>
              </div>
        </div>
    </q-page>
  </template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      items: [{ content: 'Rahayel, S., Tremblay, C., Vo, A., Misic, B., Lehéricy, S., Arnulf, I., ... & Dagher, A. (2022). Mitochondrial dysfunction underlies cortical atrophy in prodromal synucleinopathies. medRxiv.' },
        { content: 'Abbasi, N., Tremblay, C., Rajimehr, R., Yu, E., Markello, R. D., Shafiei, G., ... & Dagher, A. (2022). Neuroanatomical correlates of polygenic risk for Parkinson Disease. medRxiv.' },
        { content: 'Abdelgawad, A., Rahayel, S., Zheng, Y. Q., Tremblay, C., Vo, A., Misic, B., & Dagher, A. (2022). Predicting longitudinal brain atrophy in Parkinson’s disease using a Susceptible-Infected-Removed agent-based model. medRxiv.' }],
      peer: [{ content: 'Rahayel, S., Tremblay, C., Vo, A., Zheng, Y. Q., Lehéricy, S., Arnulf, I., ... & Dagher, A. (2022). Brain atrophy in prodromal synucleinopathy is shaped by structural connectivity and gene expression. Brain, 145(9), 3162-3178.' },
        { content: 'Tremblay, C., Rahayel, S., Vo, A., Morys, F., Shafiei, G., Abbasi, N., ... & Dagher, A. (2021). Brain atrophy progression in Parkinson’s disease is shaped by connectivity and local vulnerability. Brain communications, 3(4), fcab269' },
        { content: 'Rahayel, S., Postuma, R.B., Montplaisir, J., Misic, B., Tremblay, C., … Dagher A & Gagnon JF. (2021). A prodromal brain-clinical pattern of cognition in synucleinopathies. Annals of Neurology; 89(2):341-357.' },
        { content: 'Tremblay, C., Abbasi, N., Zeighami, Y., Yau, Y., Dadar, M., Rahayel, S., Dagher, A. (2020). Sex effects on brain structure in de novo Parkinson’s disease: a multimodal neuroimaging study. Brain; 143(10): 3052-3066.' },
        { content: "Markello, R.D., Shafiei, G., Tremblay, C., Postuma, R.B., Dagher, A., Misic, B. (2020). Multimodal phenotypic axes of Parkinson’s disease. npj Parkinson's Disease; 7(1): 1-12." },
        { content: "Tremblay, C., Langlois, M., Monetta, L. (2018) Deterioration of metaphor comprehension in Parkinson’s disease over two years. Journal of Alzheimer's Disease & Related Dementias; 1(1): 1-13." },
        { content: 'Tremblay, C., Monetta, L., Langlois, M., Schneider, C. (2016). Intermittent theta burst stimulation of the right dorsolateral prefrontal cortex to promote metaphor comprehension in Parkinson’s disease. Archives of Physical Medicine and Rehabilitation; 97(1): 74-83.' },
        { content: 'Tremblay, C., Macoir, J., Langlois, M., Cantin, L., Prud’homme, M., Monetta, L. (2015). The effects of subthalamic deep brain stimulation on metaphor comprehension and language abilities in Parkinson’s disease. Brain and Language; 141: 103-109.' },
        { content: 'Tremblay, C., Macoir, J., Langlois, M., Monetta, L. (2014). The role of polysemy on metaphor comprehension processing: the example of Parkinson’s disease. Journal of Neurolinguistics; 30: 1-13.' },
        { content: 'Vachon-Joannette, J., Tremblay, C., Langlois, M., Chantal, S., Monetta, L. (2013). Are nonliteral language comprehension deficits related to a theory of mind deficit in Parkinson’s disease? Gériatrie, Psychologie et Neuropsychiatrie du Vieillissement; 11(2): 208-214.' },
        { content: "Tremblay, C., Achim, A., Macoir, J., Monetta, L. (2013). The heterogeneity of cognitive symptoms in Parkinson's disease: a meta-analysis. Journal of neurology, neurosurgery & psychiatry; 84(11): 1265-1272. " },
        { content: 'Tremblay, C., Monchi, O., Hudon, C., Macoir, J., Monetta, L. (2012) Are verbal fluency and non-literal language comprehension deficits related to depressive symptoms in Parkinson’s disease? Parkinson’s Disease; 2012; ID 308501.' }]
    }
  }
})
</script>
