(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0Bqm":function(e,t,a){},"6qSS":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return _}));var r=a("q1tI"),n=a.n(r),o=(a("zGcK"),a("Shy0")),l=a("9eSz"),s=a.n(l),c=(a("RaTj"),a("0Bqm"),a("gFwQ")),i=a("Wbzz"),m=a("N1om"),d=a.n(m),p=a("L4Gx"),u=a("KAy6"),h=a.n(u),g=a("zPM8");a("pJf4");var f=function(){return[{name:"vuejs",refUrl:"https://click.linksynergy.com/link?id=wGVEwkf7KWY&offerid=507388.995016&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fvuejs-2-the-complete-guide%2F",courseName:"Vue - The Complete Guide (w/ Router, Vuex, Composition API)",img:"https://i.udemycdn.com/course/480x270/995016_ebf4.jpg",hours:"48.5",enroll:"130,921"},{name:"react",refUrl:"https://click.linksynergy.com/link?id=wGVEwkf7KWY&offerid=507388.1362070&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Freact-the-complete-guide-incl-redux%2F",img:"https://i.udemycdn.com/course/480x270/1362070_b9a1_2.jpg",courseName:"React - The Complete Guide (incl Hooks, React Router, Redux)",hours:"40",enroll:"284,472"},{name:"javascript",refUrl:"https://click.linksynergy.com/link?id=wGVEwkf7KWY&offerid=507388.2508942&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fjavascript-the-complete-guide-2020-beginner-advanced%2F",img:"https://i.udemycdn.com/course/480x270/2508942_11d3.jpg",courseName:"JavaScript - The Complete Guide 2020 (Beginner + Advanced)",hours:"52",enroll:"45,614"}]};a("gNNT");var E=function(e){var t=e.tags,a=f().filter((function(e){return e.name===t[0]}));return a[0]?n.a.createElement("div",{style:{textAlign:"center"},className:"aam"},n.a.createElement("div",{className:"course-container"},n.a.createElement("a",{href:a[0].refUrl,target:"_blank",rel:"nofollow noopener noreferrer"},n.a.createElement("img",{src:a[0].img,alt:a[0].courseName})),n.a.createElement("div",{className:"description"},n.a.createElement("h5",{className:"name"},a[0].courseName),n.a.createElement("div",{style:{marginTop:"-13px",fontSize:"14px",paddingBottom:"1rem"}},a[0].enroll," students enrolled"),n.a.createElement("div",{style:{marginTop:"-13px",fontSize:"14px",paddingBottom:"1.4rem"}},a[0].hours," hours of video content"),n.a.createElement("a",{href:a[0].refUrl,className:"course-btn",target:"_blank",rel:"nofollow noopener noreferrer"},"View Course")))):n.a.createElement(n.a.Fragment,null)};var y=function(e){var t,a;function r(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).loadAd=function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.id="myscr",e.src="https://cdn4.buysellads.net/pub/reactgo.js?"+(new Date-new Date%6e5),(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)},t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=r.prototype;return n.componentDidMount=function(){document.getElementById("myscr")?window.googletag.pubads().refresh():this.loadAd()},n.render=function(){return this.props.children},r}(n.a.Component);var v=function(e){var t,a;function r(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={scrollHeight:0,similarPosts:t.props.similar.nodes.sort((function(){return.5-Math.random()})).slice(0,5)},t.updateScroll=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;t.setState({scrollHeight:e}),t.state.scrollHeight>94&&t.setState({scrollHeight:100})},t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=r.prototype;return l.componentDidMount=function(){this.attachComponent(this.article.getElementsByTagName("p")[0])},l.attachComponent=function(e){var t=h.a.renderToString(n.a.createElement(p.a,{tags:this.props.data.markdownRemark.frontmatter.tags}));e.insertAdjacentHTML("afterend",t)},l.componentWillUnmount=function(){window.onscroll=null},l.render=function(){var e=this,t=this.props.data.markdownRemark,a=this.props.similar,r=this.props.data.site.siteMetadata.url,l=this.props.location.pathname,m=t.frontmatter,p=m.title,u=m.date,h=m.thumbnail,f=m.image,v=m.course,b=m.tags,w=this.props.data.site.siteMetadata.author,N=p+" - "+(v&&v),k="blogging"===b[0];return n.a.createElement("div",{className:"blog-container"},n.a.createElement(o.a,{title:this.props.tag?N:p,description:t.excerpt,date:u,url:r,pathname:l,thumbnail:this.props.thumbnail||h&&r+h,dateMod:t.modifiedTime,datePub:t.birthTime}),n.a.createElement("div",{className:"progress-bar"},n.a.createElement("span",{className:"bar",style:{width:this.state.scrollHeight+"%"}})),n.a.createElement(y,null,n.a.createElement("div",{id:"bsa-zone_1603815949728-5_123456",className:"bsa-leaderb"})),n.a.createElement("div",{className:"blog-wrapper"},n.a.createElement("main",{className:"main-box"},n.a.createElement("article",null,n.a.createElement("header",null,u&&n.a.createElement("time",{dateTime:u},u),n.a.createElement("span",{style:{float:"right"}},"by"," ",n.a.createElement("a",{style:{color:" rgb(14, 86, 140)"},href:"https://twitter.com/saigowthamr"},w)),n.a.createElement("h1",null,p),n.a.createElement("div",{className:"post-meta"},n.a.createElement("strong",null,n.a.createElement(i.Link,{to:"/tutorials/"+d()(b[0])+"/",className:"post-tag"},b[0])),n.a.createElement("strong",{className:"readtime"},t.timeToRead&&t.timeToRead+"min read")),f&&n.a.createElement(s.a,{fluid:f.childImageSharp.fluid||f,alt:p})),n.a.createElement("div",{className:"content-render",style:{marginTop:"4.4rem"},ref:function(t){return e.article=t},dangerouslySetInnerHTML:{__html:t.html}}),n.a.createElement("div",{id:"bsa-zone_1603816109811-9_123456",className:"bsa-sidebar"}),n.a.createElement("div",{className:"mobile-social"},n.a.createElement(c.a,{title:p+" - "+(v||"Reactgo"),url:r,pathname:l})))),n.a.createElement("aside",{className:"aside-box"},n.a.createElement(g.a,null),!k&&a.nodes.length>1&&n.a.createElement("div",{className:"similar-articles dec-height"},n.a.createElement("h4",null,"Related tutorials"),this.state.similarPosts.map((function(e){if(e.frontmatter.title!==p)return n.a.createElement(i.Link,{to:e.fields.slug,key:e.fields.slug},e.frontmatter.title)}))),n.a.createElement("div",{id:"bsa-zone_1603816032622-2_123456",className:"bsa-sidebar"}))),n.a.createElement("div",{className:"desktop-social"},n.a.createElement(c.a,{title:p+" - "+(v||"Reactgo"),url:r,pathname:l})),n.a.createElement("div",{className:"top-courses"},n.a.createElement("h2",{style:{textAlign:"center",padding:"1rem"}},"Top Udemy Courses"),n.a.createElement("div",{className:"top-course-box"},n.a.createElement(E,{tags:["javascript"]}),n.a.createElement(E,{tags:["react"]}),n.a.createElement(E,{tags:["vuejs"]})),n.a.createElement("div",{className:"leader-board-2"},n.a.createElement("div",null,n.a.createElement("div",{id:"bsa-zone_1603815917966-6_123456"})))))},r}(r.Component),b=a("Bl7J"),w=a("LbRr"),N=a("W/9C");var k=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.site.siteMetadata.url,t=this.props.data.allMarkdownRemark,a=this.props.data.markdownRemark.frontmatter.image?this.props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src:"";return n.a.createElement(b.a,null,n.a.createElement(w.a,{siteTitle:"Reactgo"}),n.a.createElement(v,{bottom:!0,thumbnail:a?e+a:e+"/img/reactgo-thumbnail.png",data:this.props.data,location:this.props.location,pageContext:this.props.pageContext,similar:t}),n.a.createElement(N.a,{siteTitle:"Reactgo"}))},r}(n.a.Component),_=(t.default=k,"2401610518")},gNNT:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-post-js-379fb9df29a5e5d508fd.js.map