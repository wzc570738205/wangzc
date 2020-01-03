var Main = {
  data() {
    return {
      banner1List: [
        {
          url: '../img/banner/banner8.jpg',
          tag: 'HTML5',
          title: 'HTML5 是定义 HTML 标准的最新的版本',
          detile: '它是一个新版本的HTML语言，具有新的元素，属性和行为，\n\r\b它有更大的技术集，允许构建更多样化和更强大的网站和应用程序。这个集合有时称为HTML5和它的朋友们，不过大多数时候仅缩写为一个词 HTML5。'
        },
        {
          url: '../img/banner/banner5.jpg',
          tag: 'JavaScript',
          title:
            'JavaScript是一种具有函数优先的轻量级，解释型或即时编译型的编程语言',
          detile: '因为你没有选择。在Web世界里，只有JavaScript能跨平台、跨浏览器驱动网页，与用户交互'
        },
        {
          url: '../img/banner/banner7.jpg',
          tag: 'Angular',
          title: '渐进式应用',
          detile: '充分利用现代 Web 平台的各种能力，提供 App 式体验。高性能、离线使用、免安装'
        }
      ],
      banner2List: [
        {
          url: '../img/banner2/banner1.png',
          name: 'wangzc',
          number:2,
          title: 'Html基础',
          detile: '详细介绍html的标签'
        },
        {
          url: '../img/banner2/banner2.png',
          name: 'wangzc',
          number:12,
          title: 'Css3',
          detile: '网页的护肤品'
        }, {
          url: '../img/banner2/banner3.png',
          name: 'wangzc',
          number:36,
          title: 'javascript',
          detile: '轻量级，解释型或即时编译型的编程语言'
        }, {
          url: '../img/banner2/banner4.png',
          name: 'wangzc',
          number:66,
          title: 'Angular2.0+',
          detile: '企业级应用框架详细教程'
        }, {
          url: '../img/banner2/banner5.png',
          name: 'wangzc',
          number:106,
          title: 'Vue2.0',
          detile: '渐进式JavaScript 框架使用指南'
        },
      ],
      blogs: [{
        url:'../img/artilce/banner1.jpeg',
        tag: 'Html、Css',
        title: 'HTML 超文本标记语言',
        detile: 'HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、网页应用程序以及移动应用程序的用户界面[3]。网页浏览器可以读取HTML文件，并将其渲染成可视化网页。HTML描述了一个网站的结构语义随着线索的呈现，使之成为一种标记语言而非编程语言。',
        name: 'wangzc',
        time: '2016/02/03',
        like: '1.1k',
        number: 150
      }, {
        url:'../img/artilce/banner2.jpg',
        tag: 'Javascript',
        title: 'JavaScript编程语言',
        detile: 'JavaScript是一门基于原型、函数先行的语言[6]，是一门多范式的语言，它支持面向对象编程，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等，不支持I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。它已经由ECMA（欧洲电脑制造商协会）通过ECMAScript实现语言的标准化[5]。它被世界上的绝大多数网站所使用，也被世界主流浏览器（Chrome、IE、Firefox、Safari、Opera）支持',
        name: 'wangzc',
        time: '2016/03/26',
        like: 6890,
        number: 65
      },{
        url:'../img/artilce/banner3.jpeg',
        tag: 'Javascript、Typescript',
        title: 'TypeScript编程语言',
        detile: 'TypeScript是JavaScript的一个严格超集，并添加了可选的静态类型和使用看起来像基于类的面向对象编程语法操作 Prototype,它的设计目标是开发大型应用，然后转译成JavaScript',
        name: 'wangzc',
        time: '2017/12/03',
        like: 260,
        number:20
      },{
        url:'../img/artilce/banner4.jpg',
        tag: 'Angular、Mvc',
        title: 'Angular8.0新特性',
        detile: '在今天早些时候Angular团队发布了8.0.0稳定版。其实早在NgConf 2019大会上，演讲者就已经提及了从工具到差分加载的许多内容以及更多令人敬畏的功能。下面是我对8.0.0一些新功能的简单介绍，希望可以帮助大家快速了解新版本。',
        name: 'wangzc',
        time: '2019/05/30',
        like: 35,
        number:1
      },]
    };
  },
  methods: {
    open() {
      this.$message('系统维护中');
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h(
            'i',
            {
              style: 'color: teal'
            },
            'VNode'
          )
        ])
      });
    }
  }
};
var Ctor = Vue.extend(Main);
new Ctor().$mount('#app');
