const pages = [
  { path: '/', color: 'bg-purple-200', name: 'Index' },
  { path: '/stack', color: 'bg-yellow-200', name: 'Stack' },
  { path: '/contact', color: 'bg-green-200', name: 'Contact' }
]

const vita = [
  {
    date: 'since 06/23',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    id: 1
  },
  {
    date: 'since 07/23',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    id: 2
  },
  {
    date: 'since 08/23',
    text: 'Lorem ipsum... ',
    id: 3
  },
  {
    date: 'since 09/23',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    id: 4
  },
  { date: 'since 10/23', text: 'Lorem ipsum...', id: 5 },
  { date: 'since 11/23', text: 'Lorem ipsum...', id: 6 }
]

type Vita = {
  date: string
  text: string
  id: number
}

export { pages, vita, type Vita }
