import { Random } from "mockjs"
import { ArticleId, IArticle } from "../../type/article"
const markdown = `
# 标题1
// # 标题11
// # 标题12
## 标题2
## 标题22
## 标题23
### 标题3
### 标题31
# 标题1-1
## 标题2-1
\`\`\`javascript
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
    <ReactMarkdown 
        rehypePlugins= {[rehypeHighlight]} > { # Your markdown here } </ReactMarkdown>, document.querySelector('#content')
)
 \`\`\`
<iframe src="//player.bilibili.com/player.html?aid=973729704&bvid=BV1644y1B7Et&cid=357367201&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
`
export const createArticle = (id: ArticleId): IArticle => {
    return {
        id: Random.id(),
        content: markdown,//Random.cparagraph(10),
        title: Random.title(),
        releaseTime: Random.date(),
        updateTime: Random.date(),
        pv: Random.integer(0, 10000)
    }
}