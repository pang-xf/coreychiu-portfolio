// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."

export type ProjectItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects 
  export const projects: Array<ProjectItemType> = [
    {
      name: '去水印去多多',
      description:
        'Free and efficient short video watermark removal tool',
      link: { href: 'img.pxfe.top/v2/v4dyL5T.jpeg', label: 'mini-template' },
      category: ['mini program'],
      techStack: ['Taro', 'React'],
      tags: ['Mini Program', 'Watermark Removal'],
      logo: 'https://img.pxfe.top/v2/0D2ZB11.png'
    },
  ]
  
  export const githubProjects: Array<ProjectItemType> = [
    {
      name: 'mini-template',
      description: 'Use Taro to quickly start your mini program commercialization project. / 使用Taro快速开启你的小程序商业化项目',
      link: { href: 'github.com/pang-xf/mini-template', label: 'mini-template' },
      gitStars: 10,
      gitForks: 2
    },
  ]
  