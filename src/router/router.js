import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuth } from '../useAuth.js'
import { ref } from 'vue'
export const user = useAuth()

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/songs',
			name: 'songs',
			component: () => import('../views/SongsView.vue'),
		},
		{
			path: '/albums',
			name: 'albums',
			component: () => import('../views/AlbumsView.vue'),
		},
		{
			path: '/artists',
			name: 'artists',
			component: () => import('../views/ArtistsView.vue'),
		},
		{
			path: '/users',
			name: 'users',
			component: () => import('../views/UsersView.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},

		{
			path: '/Profile',
			name: 'profile',
			component: () => import('../views/ProfileView.vue'),
			meta: { requiresAuth: true },
		},
		{
			path: '/AuthForm',
			name: 'authForm',
			component: () => import('../components/AuthForm.vue'),
		}
	],
	
})
router.beforeEach((to) => {
  const { user } = useAuth()
  if (to.meta.requiresAuth && !user.value) {
    return '/AuthForm'
  }
})

export default router