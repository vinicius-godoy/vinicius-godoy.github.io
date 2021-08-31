const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://vinicius-godoy.github.io',
  title: '<vinicius-godoy>',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vinícius Godoy',
  role: 'Full Stack Developer',
  description:
    'Brazilian Full Stack Developer working with React and NodeJS to bring websites to life.',
  resume:
    'https://www.linkedin.com/ambry/?x-li-ambry-ep=AQFInNFe5gKnVAAAAXuZiTY7VBQPKQo1KKaOhEh72LR_eGKKTSXBbmJhFYHnGtfhEFzm752YSJK_XiTeN4CHAiqqzPLeTUpUP7ovkoYXsGWZBgbwqvGneBcQOZlbjhSBvWSOjfp02nTj0wulCCQyvOGeb22ZWWh-HXd727azcLfcF2NHWD71dsbZuPTFMK1n5T_yrgPPC7AEHH1zHhNrLHZ5_pnhormM58iIZLlewXhY3Wow7YgSJhicLH22WCNHf_lCSuONjAmUypuYv6E-Gw__fjp5DxYy5nnJ8IccUBydS_j5-0GlvDdvf5jWOkjaHm1Ca97qwV0Az0pXm4p2WeujRC4_c_Pz6RG72dE72U2DWBSK3nONIIJB_B8lBsgVaxarOFba6yMsKXprb8Sq5xf5cGd_lhdhxba7UUvRtVW3MeKxBeKLTJsP5TvEKD9OfYgspQuQ_MflRwsDrgs6mrZcDKGwBu5Zf4yyHHbxUfJZes9sBA3ic-9WVOmffiFBGVXgJgMZ7QNmEQuNzl0lLw',
  social: {
    linkedin: 'https://www.linkedin.com/in/-vinicius-godoy/',
    github: 'https://github.com/vinicius-godoy',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Netflix Clone',
    description:
      'Recreation of the Netflix interface using HTML, CSS and JavaScript',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/vinicius-godoy/Interface-Netflix',
  },
  {
    name: 'Snake Game',
    description:
      'Snake Game created with CSS and JavaScript to practice JSs Documento Object Model',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/vinicius-godoy/Jogo-Cobrinha',
  },
  {
    name: 'Alurakut',
    description:
      'Project done during the React Imersion made by Alura, has the purpose of being a copy of the old Orkut using React and NextJS to practice its contents.',
    stack: ['React', 'NextJS', 'CSS'],
    sourceCode: 'https://github.com/vinicius-godoy/alurakut',
    livePreview: 'https://alurakut-vinicius-godoy.vercel.app/login',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Git',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'NextJS',
  'Node',
  'SQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'v.godoyrodrigues@gmail.com',
}

export { header, about, projects, skills, contact }
