module.exports = {
  // 站点配置
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],
  html: true,
  yuqueLink: true,
  plugins: [
   
    [
     
      'vuepress-plugin-yuque',{
        html: true,
        yuqueLink: true,
        repoUrl: 'https://www.yuque.com/yuque/developer',
      }
    ]
  ]
}