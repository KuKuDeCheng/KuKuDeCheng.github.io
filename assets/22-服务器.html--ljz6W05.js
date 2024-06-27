import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as i,a as n}from"./app-BeeusqHN.js";const a={},o=n('<ol><li>【推荐】高并发服务器建议调小 TCP 协议的 time_wait 超时时间。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明</p><p>操作系统默认 240 秒后，才会关闭处于 time_wait 状态的连接，在高并发访问下，服务器端会因为处于 time_wait 的连接数太多，可能无法建立新的连接，所以需要在服务器上调小此等待值。</p></div><div class="hint-container tip"><p class="hint-container-title">正例</p><p>在 linux 服务器上请通过变更/etc/sysctl.conf 文件去修改该缺省值（秒）：net.ipv4.tcp_fin_timeout = 30</p></div><ol start="2"><li>【推荐】调大服务器所支持的最大文件句柄数（File Descriptor，简写为 fd）。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明</p><p>主流操作系统的设计是将 TCP/UDP 连接采用与文件一样的方式去管理，即一个连接对应于一个 fd。主流的linux服务器默认所支持最大fd数量为1024，当并发连接数很大时很容易因为fd不足而出现“opentoo many files”错误，导致新的连接无法建立。建议将 linux 服务器所支持的最大句柄数调高数倍（与服务器的内存数量相关）。</p></div><ol start="3"><li>【推荐】给 JVM 环境参数设置-XX:+HeapDumpOnOutOfMemoryError 参数，让 JVM 碰到 OOM场景时输出 dump 信息。</li></ol><div class="hint-container warning"><p class="hint-container-title">说明OOM 的发生是有概率的，甚至相隔数月才出现一例，出错时的堆内信息对解决问题非常有帮助。</p></div><ol start="4"><li>【推荐】在线上生产环境，JVM 的 Xms 和 Xmx 设置一样大小的内存容量，避免在 GC 后调整堆大小带来的压力。</li><li>【参考】服务器内部重定向必须使用 forward；外部重定向地址必须使用 URL Broker 生成，否 则因线上采用 HTTPS 协议而导致浏览器提示“不安全“。此外，还会带来 URL 维护不一致的问题。</li></ol>',8),c=[o];function r(l,p){return i(),e("div",null,c)}const d=t(a,[["render",r],["__file","22-服务器.html.vue"]]),h=JSON.parse('{"path":"/%E9%98%BF%E9%87%8CJava%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C/22-%E6%9C%8D%E5%8A%A1%E5%99%A8.html","title":"服务器","lang":"zh-CN","frontmatter":{"title":"服务器","date":"2021-02-15T00:00:00.000Z","category":"阿里Java开发手册","order":22,"description":"【推荐】高并发服务器建议调小 TCP 协议的 time_wait 超时时间。 说明 操作系统默认 240 秒后，才会关闭处于 time_wait 状态的连接，在高并发访问下，服务器端会因为处于 time_wait 的连接数太多，可能无法建立新的连接，所以需要在服务器上调小此等待值。 正例 在 linux 服务器上请通过变更/etc/sysctl.con...","head":[["meta",{"property":"og:url","content":"https://zhangchengk.github.io/%E9%98%BF%E9%87%8CJava%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C/22-%E6%9C%8D%E5%8A%A1%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"Panda诚的博客"}],["meta",{"property":"og:title","content":"服务器"}],["meta",{"property":"og:description","content":"【推荐】高并发服务器建议调小 TCP 协议的 time_wait 超时时间。 说明 操作系统默认 240 秒后，才会关闭处于 time_wait 状态的连接，在高并发访问下，服务器端会因为处于 time_wait 的连接数太多，可能无法建立新的连接，所以需要在服务器上调小此等待值。 正例 在 linux 服务器上请通过变更/etc/sysctl.con..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T13:31:00.000Z"}],["meta",{"property":"article:author","content":"Panda诚"}],["meta",{"property":"article:published_time","content":"2021-02-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T13:31:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T13:31:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Panda诚\\",\\"url\\":\\"https://zhangchengk.github.io/about/intro.html\\"}]}"]]},"headers":[],"git":{"createdTime":1719488402000,"updatedTime":1719495060000,"contributors":[{"name":"zhangcheng","email":"zhangchengk@yonyou.com","commits":2}]},"readingTime":{"minutes":1.56,"words":467},"filePathRelative":"阿里Java开发手册/22-服务器.md","localizedDate":"2021年2月15日","excerpt":"<ol>\\n<li>【推荐】高并发服务器建议调小 TCP 协议的 time_wait 超时时间。</li>\\n</ol>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">说明</p>\\n<p>操作系统默认 240 秒后，才会关闭处于 time_wait 状态的连接，在高并发访问下，服务器端会因为处于 time_wait 的连接数太多，可能无法建立新的连接，所以需要在服务器上调小此等待值。</p>\\n</div>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">正例</p>\\n<p>在 linux 服务器上请通过变更/etc/sysctl.conf 文件去修改该缺省值（秒）：net.ipv4.tcp_fin_timeout = 30</p>\\n</div>","autoDesc":true}');export{d as comp,h as data};
