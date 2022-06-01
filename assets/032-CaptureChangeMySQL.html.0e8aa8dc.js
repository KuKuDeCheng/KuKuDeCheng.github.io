import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o as c,c as r,a,b as s,w as p,e,d as n}from"./app.cd174add.js";var h="/assets/1.624f21f6.png",i="/assets/2.0b7bc3f3.png",l="/assets/3.3ff89835.png",m="/assets/4.08997e62.png",_="/assets/5.3e68ccb2.png";const b={},D=e("\u5728"),g=e("\u6570\u636E\u62BD\u53D6\u7684\u5E38\u89C1\u7406\u8BBA\u65B9\u6CD5"),u=e("\u4E00\u6587\u4E2D\uFF0C\u6211\u4EEC\u5386\u6570\u4E86\u5404\u79CD\u7684\u6570\u636E\u62BD\u53D6\u7684\u65B9\u5F0F\uFF0C\u5176\u4E2D\u57FA\u4E8E\u67E5\u8BE2\u5F0F\u7684\u62BD\u53D6\u65B9\u5F0F\u4FB5\u5165\u6027\u6700\u5C0F\uFF0C\u4F46\u5F80\u5F80\u65E0\u6CD5\u6EE1\u8DB3\u6211\u4EEC\u7684\u9700\u6C42\uFF0C\u89E6\u53D1\u5668\u7684\u65B9\u5F0F\u5C31\u4E0D\u8BF4\u4E86(\u55EF\uFF0C\u6709\u53EF\u80FD\u4F60\u4E00\u8BF4\u7528\u89E6\u53D1\u5668\uFF0C\u9886\u5BFC\u4EEC\u8138\u8272\u5C31\u53D8\u4E86\uFF0C\u5176\u5B9E\u5728\u5C11\u91CF\u7684\u540C\u6B65\u6570\u636E\u62BD\u53D6\u91C7\u96C6\u6211\u611F\u89C9\u53CD\u800C\u89E6\u53D1\u5668\u6027\u4EF7\u6BD4\u57FA\u4E8E\u65E5\u5FD7\u7684\u4F1A\u66F4\u9AD8)\uFF0C\u6700\u540E\u5C31\u662F\u57FA\u4E8E\u65E5\u5FD7\u7684\u3002\u57FA\u4E8E\u65E5\u5FD7\u7684\u6570\u636E\u91C7\u96C6\u6211\u5F00\u53D1\u548C\u7814\u7A76\u8FC7MySQL\u7684binlog\u65E5\u5FD7\u548COracle\u7684redo\u65E5\u5FD7\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u5C31\u4E00\u8D77\u7814\u7A76\u4E00\u4E0BNIFI\u4E2D\u7684\u57FA\u4E8Ebinlog\u65E5\u5FD7\u7684MySQL\u5B9E\u65F6\u91C7\u96C6\u7EC4\u4EF6"),L=a("code",null,"CaptureChangeMySQL",-1),y=e("\u3002"),C=n('<h2 id="\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63CF\u8FF0" aria-hidden="true">#</a> \u63CF\u8FF0</h2><p>\u4ECEMySQL\u6570\u636E\u5E93\u4E2D\u6355\u83B7\u53D8\u66F4\u6570\u636E\u7684CDC\u4E8B\u4EF6\u3002 CDC\u4E8B\u4EF6\u5305\u62EC <code>INSERT\u3001UPDATE\u3001DELETE</code>\u64CD\u4F5C\u3002\u4E8B\u4EF6\u4F5C\u4E3A\u5355\u72EC\u7684\u6D41\u6587\u4EF6\u8F93\u51FA\uFF0C\u6309\u64CD\u4F5C\u53D1\u751F\u7684\u65F6\u95F4\u6392\u5E8F\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u4EE5\u4E0B\u6311\u9009\u4E3B\u8981\u7684\u51E0\u4E2A\u914D\u7F6E\u8FDB\u884C\u8BF4\u660E\u8BB2\u89E3(\u7528\u6237\u540D \u5BC6\u7801 \u9A71\u52A8\u7B49\u7B49\u5565\u7684\u5C31\u4E0D\u8BF4\u4E86)\u3002</p><h3 id="mysql-hosts" tabindex="-1"><a class="header-anchor" href="#mysql-hosts" aria-hidden="true">#</a> MySQL Hosts</h3><p>\u5FC5\u586B\u9879\uFF0C\u4E0E<code>MySQL\u96C6\u7FA4</code>\u4E2D\u7684\u8282\u70B9\u5BF9\u5E94\u7684\u4E3B\u673A\u540D/\u7AEF\u53E3\u6761\u76EE<code>\u5217\u8868</code>(\u4F8B\u5982host1:port,host2:port,....)\u3002\u8BE5\u5904\u7406\u5668\u5C06\u5C1D\u8BD5\u6309\u987A\u5E8F\u8FDE\u63A5\u5230\u5217\u8868\u4E2D\u7684\u4E3B\u673A\u3002\u5982\u679C\u4E00\u4E2A\u8282\u70B9\u51FA\u73B0\u6545\u969C\u5E76\u4E3A\u96C6\u7FA4\u542F\u7528\u4E86\u6545\u969C\u8F6C\u79FB\uFF0C\u5219\u5904\u7406\u5668\u5C06\u8FDE\u63A5\u5230\u5176\u4ED6\u6D3B\u52A8\u8282\u70B9\u3002</p><p>\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u914D\u7F6E\u6570\u636E\u5E93\u5730\u5740\u7684\u3002</p><h3 id="server-id" tabindex="-1"><a class="header-anchor" href="#server-id" aria-hidden="true">#</a> Server ID</h3><p>\u975E\u5FC5\u586B\u9879(<code>\u4F46\u771F\u7684\u8981\u586B\u554A\uFF01</code>)\uFF0C\u8FDE\u63A5\u5230MySQL\u590D\u5236\u7EC4\u7684\u5BA2\u6237\u7AEF\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u7B80\u5316\u7684\u526F\u672C\uFF08\u670D\u52A1\u5668\uFF09\uFF0C\u6B64\u5904\u7684Server ID\u5728\u6574\u4E2A\u590D\u5236\u7EC4\u4E2D\u5FC5\u987B\u662F\u552F\u4E00\u7684\uFF08\u5373\u4E0D\u540C\u4E8E\u4EFB\u4F55\u4E3B\u670D\u52A1\u5668\u6216\u526F\u672C\u4F7F\u7528\u7684\u4EFB\u4F55\u5176\u4ED6Server ID\uFF09\u3002\u56E0\u6B64\uFF0CCaptureChangeMySQL\u7684<code>\u6BCF\u4E2A\u5B9E\u4F8B</code>\u5728\u6574\u4E2A\u590D\u5236\u7EC4\u4E2D\u90FD\u5FC5\u987B\u5177\u6709\u552F\u4E00\u7684\u670D\u52A1\u5668ID\u3002\u5982\u679C\u672A\u6307\u5B9A\u670D\u52A1\u5668ID\uFF0C\u5219\u9ED8\u8BA4\u4E3A65535\u3002</p><p>\u603B\u800C\u8A00\u4E4B\uFF0C\u8A00\u800C\u603B\u4E4B\uFF0C\u5C31\u662F\u8981 <code>\u552F\u4E00</code>\u3001<code>\u552F\u4E00</code>\u3001\u8FD8\u662F<code>\u552F\u4E00</code>\u3002\uFF08\u6211\u4E60\u60EF\u76F4\u63A5\u4F7F\u7528\u5F53\u524D\u7684Long\u578B\u7684\u65F6\u95F4\u6233\u586B\u8FDB\u53BB\u3002\uFF09\u5E76\u4E14\u662F\u5408\u683C\u7684long\u503C\uFF0C\u56E0\u4E3A\u4EE3\u7801\u91CC\u5BF9\u8FD9\u4E2A\u914D\u7F6E\u8FDB\u884C\u4E86Long\u503C\u6821\u9A8C\u3002</p><p><img src="'+h+'" alt="" loading="lazy"></p><p>\u90A3\u6211\u4E0D\u552F\u4E00\u80FD\u548B\u5730\uFF1F\u80FD\u548B\u5730\uFF1F(\u8FD9\u91CC\u5C31\u662F\u8D31\u8D31\u7684\u53CD\u95EE\uFF0C\u4E0D\u662F\u6253\u9519\u5B57)</p><p><img src="'+i+'" alt="" loading="lazy"></p><p>\u8FD8\u80FD\u548B\u5730\uFF0C\u62A5\u9519\u5457\u3002</p><h3 id="database-schema-name-pattern" tabindex="-1"><a class="header-anchor" href="#database-schema-name-pattern" aria-hidden="true">#</a> Database/Schema Name Pattern</h3><p>\u975E\u5FC5\u586B\u9879(<code>\u4F46\u4E00\u822C\u8981\u586B\u554A\uFF01\u4E0D\u7136\u4E8B\u4EF6\u592A\u591A\u4E86\u554A ==\uFF01</code>)\uFF0C\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08regex\uFF09\uFF0C\u7528\u4E8E\u6839\u636ECDC\u4E8B\u4EF6\u5217\u8868\u5339\u914D\u6570\u636E\u5E93\uFF08\u6216schema\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8ERDBMS\u7684\u672F\u8BED\uFF09\u3002 \u6B63\u5219\u8868\u8FBE\u5F0F\u5FC5\u987B\u4E0E\u5B58\u50A8\u5728RDBMS\u4E2D\u7684\u6570\u636E\u5E93\u540D\u79F0\u5339\u914D\u3002\u5982\u679C\u672A\u8BBE\u7F6E\u6B64\u5C5E\u6027\uFF0C\u5219\u6570\u636E\u5E93\u540D\u79F0\u5C06\u4E0D\u4F1A\u7528\u4E8E\u7B5B\u9009CDC\u4E8B\u4EF6\u3002NOTE: DDL\u4E8B\u4EF6\uFF0C\u5373\u4F7F\u5B83\u4EEC\u5F71\u54CD\u4E0D\u540C\u7684\u6570\u636E\u5E93\uFF0C\u4E5F\u4E0E\u7528\u6765\u6267\u884CDDL\u7684\u6570\u636E\u5E93\u4F1A\u8BDD\u76F8\u5173\u8054\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5982\u679C\u8FDE\u63A5\u5230\u4E00\u4E2A\u6570\u636E\u5E93\uFF0C\u4F46DDL\u9488\u5BF9\u53E6\u4E00\u4E2A\u6570\u636E\u5E93\u53D1\u51FA\uFF0C\u5219\u8FDE\u63A5\u7684\u6570\u636E\u5E93\u5C06\u662F\u4E0E\u6307\u5B9A\u6A21\u5F0F\u5339\u914D\u7684\u6570\u636E\u5E93\u3002</p><p>\u4ECE\u5E93\u540D(schema\u540D\u79F0)\u6765\u8FC7\u6EE4\u4E8B\u4EF6\uFF0C\u5176\u5B9E\u4ECEJava\u5B9A\u4E49\u7684api\u89D2\u5EA6\u770BMySQL\u8FD9\u91CC\u5E94\u8BE5\u53EBcatalog\u3002</p><blockquote><p>\u7B80\u5355\u6765\u8BF4\uFF0CJava\u5B9A\u4E49\u4E86\u4E00\u7CFB\u5217\u7684\u63A5\u53E3\u5B9A\u4E49\uFF0C\u5404\u4E2A\u6570\u636E\u5E93\u5382\u5546\u6309\u7167\u89C4\u8303\u53BB\u5B9E\u73B0\uFF0C\u6765\u63D0\u9AD8\u4E00\u4E2A\u9A71\u52A8\u3002\u6BD4\u5982\u8BF4\u5176\u4E2D\u6709\u4E00\u4E2A\u67E5\u8BE2\u4E3B\u952E\u7684\u63A5\u53E3\u5B9A\u4E49<code>databaseMetaData.getPrimaryKeys(catalogName, schemaName, tableName)</code>\uFF0C \u5BF9\u4E8EMySQL\u6765\u8BF4\u5E93\u540D\u79F0\u662F\u5BF9\u5E94catalogName\u7684\u3002\u518D\u6BD4\u5982\u8BF4Oracle\uFF0C\u5C31\u662F\u5BF9\u5E94schemaName\u7684\u3002</p></blockquote><p>\u7136\u540E\u4ED6Note\u6211\u4EEC(\u867D\u7136\u7FFB\u8BD1\u7684\u6BD4\u8F83\u522B\u626D\uFF0C\u5176\u5B9E\u5927\u5BB6\u5E94\u8BE5\u90FD\u80FD\u770B\u61C2\uFF0C\u4F46\u6211\u8FD9\u8FB9\u518D\u5570\u55E6\u5570\u55E6)\uFF0C\u8BF4\u5047\u5982\u54C8\uFF0C\u4F60\u8FDE\u63A5\u7684\u662F\u4E00\u4E2AdatabaseName\u53EBA\u7684\u6570\u636E\u5E93\uFF0C\u7136\u540E\u4F60\u4FEE\u6539\u4E86\u4E00\u4E2AdatabaseName\u53EBB\u7684\u6570\u636E\u5E93\u91CC\u7684\u8868(<code>alter table b.test ..... </code>)\uFF0C\u4F46\u8FD9\u4E2ADDL\u4E8B\u4EF6\u662F\u6302\u8F7DA\u7684\u540D\u4E0B\u7684\u3002\u800C\u5047\u5982\u4F60\u7528\u8FD9\u4E2A\u914D\u7F6E\uFF0C\u53EA\u8981A\u5E93\u7684\u4E8B\u4EF6\uFF0C\u90A3\u4E0D\u5E78\u7684\u662F\uFF0C\u521A\u521A\u4E0A\u9762\u8BF4\u7684\u4FEE\u6539<code>b.test</code>\u7684DDL\u4E8B\u4EF6\u4E5F\u662F\u5408\u6CD5\u7684\u3002</p><p>\u963F\u8BDA\u554A\uFF01\u8FD9\u91CC\u6709\u4E2A\u95EE\u9898\u554A\u3002\u5728\u63CF\u8FF0\u91CC\u4E0D\u662F\u8BF4\u53EA\u6709DML\u7684\u4E09\u79CD\u4E8B\u4EF6\u561B\uFF0C\u8FD9\u91CC\u600E\u4E48\u53C8\u5192\u51FA\u6765DDL\u4E8B\u4EF6\u4E86\u5462\uFF1F</p><p>\u7B54\u6848\u4F60\u53EF\u80FD\u60F3\u4E0D\u5230\uFF01\u771F\u76F8\u53EA\u6709\u4E00\u4E2A\uFF01NIFI\u5173\u4E8ECaptureChangeMySQL\u7EC4\u4EF6\u529F\u80FD\u63CF\u8FF0\u6CA1\u5199\u5168\uFF01\uFF01 \u60CA\u4E0D\u60CA\u559C\uFF1F\u610F\u4E0D\u610F\u5916\uFF1F</p><p><img src="'+l+'" alt="" loading="lazy"></p><p><img src="'+m+'" alt="" loading="lazy"></p><p>\u4EC0\u4E48\uFF1F\u6B63\u5219\u8868\u8FBE\u5F0F\u600E\u4E48\u5199\uFF1F\uFF1F</p><p><img src="'+_+'" alt="" loading="lazy"></p><p>\u6211\u4E5F\u8BB0\u4E0D\u4F4F\uFF0C\u590D\u6742\u70B9\u7684\u4E5F\u662F\u67E5\u6559\u7A0B\uFF0C\u7136\u540E\u8BD5\u7740\u8BD5\u7740\u5C31\u5199\u51FA\u6765\u4E86\u3002</p><h3 id="table-name-pattern" tabindex="-1"><a class="header-anchor" href="#table-name-pattern" aria-hidden="true">#</a> Table Name Pattern</h3><p>\u975E\u5FC5\u586B\u9879(<code>\u4F46\u4E00\u822C\u8981\u586B\u554A\uFF01\u4E0D\u7136\u4E8B\u4EF6\u592A\u591A\u4E86\u554A ==\uFF01</code>)\uFF0C\u4E0A\u9762\u5DF2\u7ECF\u8BF4\u4E86Database/Schema Name Pattern\uFF0C\u8FD9\u4E2A\u5C31\u4E0D\u591A\u8BF4\u4E86\u5427\u3002</p><h3 id="distributed-map-cache-client" tabindex="-1"><a class="header-anchor" href="#distributed-map-cache-client" aria-hidden="true">#</a> Distributed Map Cache Client</h3><p>\u975E\u5FC5\u586B\u9879(<code>\u4F46\u771F\u7684\u8981\u586B\u554A\uFF01</code>)</p><p>\u6807\u8BC6\u7528\u4E8E\u4FDD\u5B58\u5904\u7406\u5668\u6240\u9700\u7684\u5404\u79CD<code>\u8868</code>\u3001<code>\u5217</code>\u7B49\u4FE1\u606F\u7684\u5206\u5E03\u5F0F\u6620\u5C04\u7F13\u5B58\u5BA2\u6237\u7AEF\u63A7\u5236\u5668\u670D\u52A1\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u751F\u6210\u7684\u4E8B\u4EF6\u5C06<code>\u4E0D\u5305\u62EC\u5217\u7C7B\u578B\u6216\u540D\u79F0\u4FE1\u606F</code>\u3002</p><p>\u7B2C\u4E00\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u53EB\u5206\u5E03\u5F0F\u7F13\u5B58<code>\u5BA2\u6237\u7AEF</code>(\u90A3\u80AF\u5B9A\u5BF9\u5E94\u6709<code>\u670D\u52A1\u7AEF</code>\u7684)\uFF0C\u7B2C\u4E8C\uFF0C\u5982\u679C\u4F60\u4E0D\u914D\u7F6E\u8FD9\u4E2A\u4E1C\u897F\uFF0C\u751F\u6210\u7684\u4E8B\u4EF6\u5C31<code>\u4E0D\u5305\u62EC\u5217\u7C7B\u578B\u6216\u540D\u79F0\u4FE1\u606F</code>\uFF0C\u90A3\u4F60\u5C31\u770B\u4E0D\u61C2\u8FD9\u4E2A\u4E8B\u4EF6\u3002</p><p>\u8BF4\u767D\u4E86\u8FD9\u4E2A\u5C31\u662F\u8BA9\u4F60\u63D0\u4F9B\u4E00\u4E2AMap(\u5B58\u4E1C\u897F\u7684\u5730\u65B9)\uFF0Ckey\u662FtableId\uFF0Cvalue\u662F\u5173\u4E8E\u8FD9\u5F20\u8868\u7684\u5143\u6570\u636E\u4FE1\u606F\u3002\u800CtableId\u5462\uFF0C\u5C31\u662F\u4E2A\u6570\u5B57\uFF0C</p>',33);function E(S,f){const t=d("RouterLink");return c(),r("div",null,[a("p",null,[D,s(t,{to:"/ApacheNIFI%E6%95%99%E7%A8%8B/004-%E6%95%B0%E6%8D%AE%E6%8A%BD%E5%8F%96%E7%9A%84%E5%B8%B8%E8%A7%81%E7%90%86%E8%AE%BA%E6%96%B9%E6%B3%95.html"},{default:p(()=>[g]),_:1}),u,L,y]),C])}var v=o(b,[["render",E],["__file","032-CaptureChangeMySQL.html.vue"]]);export{v as default};
