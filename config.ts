const pages = [
  { path: '/', color: 'bg-purple-200', name: 'Index' },
  { path: '/stack', color: 'bg-yellow-200', name: 'Stack' },
  { path: '/contact', color: 'bg-green-200', name: 'Contact' }
]

const vita = [
  { date: 'since 06/23', text: 'Lorem ipsum...', id: 1 },
  { date: 'since 07/23', text: 'Lorem ipsum...', id: 2 },
  {
    date: 'since 08/23',
    text: 'Lorem ipsum... ',
    id: 3
  },
  { date: 'since 09/23', text: 'Lorem ipsum...', id: 4 },
  { date: 'since 10/23', text: 'Lorem ipsum...', id: 5 },
  { date: 'since 11/23', text: 'Lorem ipsum...', id: 6 }
]

type Vita = {
  date: string
  text: string
  id: number
}

export { pages, vita, type Vita }
