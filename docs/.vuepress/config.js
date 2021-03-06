// 注意: base的值为github仓库的名称(/不能少)
module.exports = {
  base: '/vuepress/', /* 基础虚拟路径 */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: '技术小记', // 标题
  description: '记录一些技术和生活', // 标题下的描述
  
  themeConfig: { // 主题配置
    logo: '/logo.png',
    sidebarDepth: 2,
    nav: [ // 头部导航
      { text: '官网', link: 'http://www.atguigu.com' },
      { text: '谷粒学院', link: 'http://www.gulixueyuan.com/' },
      { 
        text: '学习路线', 
        items: [
          { text: '前端', link: 'http://www.atguigu.com/web/' },
          { text: 'Java', link: 'http://www.atguigu.com/kecheng.shtml' },
          { text: '大数据', link: 'http://www.atguigu.com/bigdata/' }
        ] 
      },
    ],
    sidebar: [ // 左侧导航
      {
        title: '技术方面', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          { 
            title: '前端杂记',
            collapsable: true,
            children: [

              {
                title: '初级',
                collapsable: true,
                children: [
                  {
                    title: 'CSS',
                    collapsable: true,
                    children: [
                      {
                        title: 'CSS1',
                        path: '../pages/前端/CSS/CSS1',
                      },
                      {
                        title: 'CSS2',
                        path: '../pages/前端/CSS/CSS2',
                      }
                    ]
                  }
                  
                ]
              }
            ]
          },
          { title: 'Node相关', path: '../pages/Node/aaa' },
          { title: 'Python', path: '../pages/Python/python基础' },
        ]
      }
    ],
  head: [ // 指定网页head图标
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ]
}
}