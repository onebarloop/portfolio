const pages = [
  { path: '/', color: 'bg-purple-200', name: 'Home' },
  { path: '/stack', color: 'bg-yellow-200', name: 'Stack' },
  { path: '/contact', color: 'bg-green-200', name: 'Contact' }
]

type Vita = {
  date: string
  title: string
  text: string
  id: number
  icon?: string
  link?: {
    text: string
    href: string
  }
}

const vita: Vita[] = [
  {
    date: '06/22-06/23',
    title: 'Headline #1',
    text: '<p><span class="text-purple-800 font-black">Lorem ipsum dolor sit</span>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <span class="font-black">At</span> vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
    id: 1,
    icon: 'pixelarticons:briefcase-check',
    link: {
      text: 'This is a link',
      href: '#'
    }
  },
  {
    date: 'since 07/23',
    title: 'Headline #2',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    id: 2,
    icon: 'pixelarticons:script-text'
  },
  {
    date: 'since 08/23',
    title: 'Headline #3',
    text: '<p>Cards now support <span class="text-2xl text-red-300">HTML</span> and <span class="text-3xl font-black text-blue-400">tailwind classes</span></p>',
    id: 3,
    icon: 'pixelarticons:downasaur',
    link: {
      text: 'Another Link',
      href: '/stack'
    }
  },
  {
    date: 'since 09/23',
    title: 'Headline #4',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    id: 4,
    icon: 'pixelarticons:coffee-alt'
  },
  {
    date: 'since 10/23',
    title: 'Headline #5',
    text: 'Lorem ipsum...',
    icon: 'pixelarticons:cloud-sun',
    id: 5
  },
  {
    date: 'since 11/23',
    title: 'Headline #6',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    id: 6,
    icon: 'pixelarticons:user'
  },
  {
    date: 'since 12/23',
    title: 'Headline #7',
    text: 'Lorem ipsum...',
    id: 7,
    icon: 'pixelarticons:zap'
  }
]

type TechStack = {
  logo: string
  name: string
  text: string
  link?: {
    name: string
    href: string
  }
  id: number
}

const techStack: TechStack[] = [
  { logo: '/img/logos/vue.svg', name: 'Vue JS', text: 'This is the backside', link: { name: 'Example Link', href: '#' }, id: 1 },
  { logo: '/img/logos/react.svg', name: 'React', text: 'This is the backside', id: 2 },
  { logo: '/img/logos/js.svg', name: 'JavaScript', text: 'This is the backside', id: 3 },
  { logo: '/img/logos/ts.svg', name: 'TypeScript', text: 'This is the backside', id: 4 },
  { logo: '/img/logos/tailwind.svg', name: 'Tailwind CSS', text: 'This is the backside', id: 5 },
  { logo: '/img/logos/astro.svg', name: 'Astro', text: 'This is the backside', id: 6 },
  { logo: '/img/logos/symfony.svg', name: 'Symfony', text: 'This is the backside', id: 7 },
  { logo: '/img/logos/scss.svg', name: 'Sass', text: 'This is the backside', id: 8 }
]

export { pages, vita, techStack, type Vita, type TechStack }
