import type { SiteConfig } from '$lib/types/site'
const bio = ['-','Kpouri的博客','Rabbit!','Metal-Complex']

export const site: SiteConfig = {
  protocol: 'https://',
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'metal-complex.vercel.app',
  title: 'Urara',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'en-US',
  descr: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Kpouri',
    photo: '/assets/maskable@512.png',
    status: '🌸',
    bio: bio[~~(Math.random() * bio.length)],
    github: 'Kpouri',
  },
  themeColor: '#3D4451'
}
