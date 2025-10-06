import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import { user } from '../useAuth.js' // must be a ref exported from useAuth.js

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/songs', name: 'songs', component: () => import('../views/SongsView.vue') },
    { path: '/albums', name: 'albums', component: () => import('../views/AlbumsView.vue') },
    { path: '/artists', name: 'artists', component: () => import('../views/ArtistsView.vue') },
    { path: '/users', name: 'users', component: () => import('../views/UsersView.vue') },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    { path: '/songs/:id', name: 'song', component: () => import('../views/SongPage.vue') },
    { path: '/albums/:id', name: 'album', component: () => import('../views/AlbumPage.vue') },
    { path: '/artists/:id', name: 'artist', component: () => import('../views/ArtistPage.vue') },
    { path: '/profile', name: 'profile', component: () => import('../views/ProfileView.vue'), meta: { requiresAuth: true } },
    { path: '/authform', name: 'authForm', component: () => import('../components/AuthForm.vue') },
    { path: '/signin', name: 'signin', component: () => import('../views/SignInView.vue') },
    { path: '/:catchAll(.*)*', name: 'not-found', component: NotFoundView },
  ]
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !user.value) {
    return '/AuthForm'
  }
})

export default router
