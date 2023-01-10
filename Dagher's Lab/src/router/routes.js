
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'research', component: () => import('pages/research.vue') },
      { path: 'team', component: () => import('pages/team.vue') },
      { path: 'News', component: () => import('src/pages/NewsFL.vue') },
      { path: 'publications', component: () => import('pages/Publications.vue') }
    ]
  }, {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'Langliu', component: () => import('pages/teamMembers/LangLiu.vue') },
      { path: 'QinTao', component: () => import('pages/teamMembers/QinTao.vue') },
      { path: 'Christina', component: () => import('pages/teamMembers/Christina.vue') },
      { path: 'Filip', component: () => import('pages/teamMembers/Filip.vue') },
      { path: 'Shady', component: () => import('pages/teamMembers/Shady.vue') },
      { path: 'Trycia', component: () => import('pages/teamMembers/Trycia.vue') },
      { path: 'mari', component: () => import('pages/teamMembers/mari.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
