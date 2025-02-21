// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro =
  "I've worked on a variety of projects, from simple websites to complex web applications. And many of them are open-source. Here are a few of my favorites."

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

// projects
export const projects: Array<ProjectItemType> = [
  {
    name: '去水印去多多',
    description: 'Free and efficient short video watermark removal tool',
    link: { href: 'img.pxfe.top/v2/v4dyL5T.jpeg', label: 'mini-template' },
    category: ['mini program'],
    techStack: ['Taro', 'React'],
    tags: ['Mini Program', 'Watermark Removal'],
    logo: 'https://img.pxfe.top/v2/0D2ZB11.png',
  },
  {
    name: '吐司小红薯',
    description: '做东大最好用的小红书工具',
    link: { href: 'img.pxfe.top/v2/C3cJsAh.jpeg', label: 'mini-template' },
    category: ['mini program'],
    techStack: ['Taro', 'React'],
    tags: ['Mini Program', 'RedNote'],
    logo: 'https://img.pxfe.top/v2/578XgZg.png',
  },
  {
    name: 'TwitterVideoDownloader',
    description: '小蓝鸟视频下载器',
    link: { href: 'xdownload.top', label: 'Downloader' },
    category: ['Twitter'],
    techStack: ['Vite', 'React'],
    tags: ['Twitter'],
    logo: 'https://xdownload.top/favicon.svg',
  },
]

export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'mini-template',
    description:
      'Use Taro to quickly start your mini program commercialization project. / 使用Taro快速开启你的小程序商业化项目',
    link: { href: 'github.com/pang-xf/mini-template', label: 'mini-template' },
    gitStars: 10,
    gitForks: 2,
  },
]
