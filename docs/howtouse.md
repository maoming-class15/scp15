# 使用方法

::: danger
**我们强烈推荐无论如何请先阅读完这个文档到 md 拓展语法之前的部分。**  
:::
首先先强烈推荐在 vscode 中使用 git, 撰写 markdown（当然你有更好的软件也可以。。）
怎么才能写自己的文章，并且上传到这个项目中呢？或者这个项目中有些文章你需要增添删改应该怎么办呢？这个教程可以解决一些问题。  
当然你也可以直接新建一个 markdown(.md，以下简称 md)文件，写好之后把文档和引用的图片丢给管理者让管理者上传，但是这并不方便。  
[md 教程](/howtouse.md#md教程)

## Github 的基本操作

再次推荐在 vscode 中使用 git，不然命令行操作还挺麻烦的。

如果有人想写的话可以自己补充一下。。。  

::: danger
每个人修改时请务必添加一个自己的分支，不要直接在 main 或者这个分支上写（这个分支叫v2）
:::

## 快速开始

### 如果啥都没有，只是想写文档

vscode 有 md 实时渲染一样的插件，建议装一个；或者去使用专门的，能导出 md 的编辑器。
你可以直接新建一个 md 文件，就纯脑补，什么预览都没有（反正其实写多了也不一定要看）。写好之后把文档和引用的图片丢给管理者让管理者上传，但是这对于大家来说都不方便。

### 如果只有 vscode/其他撰写 md 的软件，想写文档

当你一开始进来时，你就会看到文件架构是这样的： ![文件架构](/file.png)
我们**只需要用`docs`文件夹里的文件就好了**，其他的东西**最好都不要碰捏**。

进入`docs`，又可以看到（可能以后就不是这样了）：
![文件架构](/file2.png)
一般来说，如果我们要写文章和修改文章，请在`people`文件夹中新建一个文件夹或者 md 文件进行写作，或者修改其他的文件中的文章。（现在的文件结构可能不是最优的，**希望大家能保持它不凌乱**。也希望以后能有人帮我维护一下文件结构）

如果我们需要图片，请在 `public` 文件夹中粘贴想要引用的照片（当然**也强烈推荐在里面又用文件夹之类的整理好！！**）

那么现在我们就可以开始写作和修改了。在写作时，会使用到 markdown，如果尚未清楚 markdown 如何使用，请[md 教程](/howtouse.md#md教程)。

如果可以的话，顺带帮忙，比如新建人物时把目录之类的补上……
写好之后就可以将你的成果 commit。

### 在以上内容下如果你有一套完整的前端开发环境

那么此时你就可以在终端运行 `npm i`然后`npm run docs:dev`（或者 pnpm 啥啥啥，取决于你的包管理器），这样你就可以看到你改任何一个 md 文档的实时进度和渲染效果。

## md 教程

**请参阅[Markdown 教程](https://markdown.com.cn/)**
有不会的再问吧！

需要特别注意的是，和自己使用 md 的时候不一样。  
添加超链接时，如果你要连接文档，应该以`docs`为根路径。比如你要链接`(docs\)people\mai.md`，你需要在链接中输入 `/people/mai`（看看[麦](/people/mai)），如果你丢在 docs 里面了，那，那我不推荐你放这里面，否则会对维护产生不必要的麻烦。
同理，添加图片的时候使用的链接以 `docs` 中 `public` 为根路径，点开 `public` 文件夹，如果你直接丢在里面了，就直接是 xxx.png，那么链接中只需要输入`/xxx.png`。  
如果你新建了一个文件夹叫 abc，并在里面放了一个图片（也即是/abc/xxx.png），那么此时也应该把链接修改为`/abc/xxx.png`。
![正确的图片引用方法](/eg.png)
↑ 你可以以这个里面所有的引用方法为参考 ↑

::: danger
可能有人注意到了，自己写的时候引用超链接或者图片的路径、方式之类是不相同的，甚至每个软件的某些 md 语法也不相同，建议上传完之后看看预览效果捏。
:::

当然 md 也是支持内置 html 的，如果你的前端学的足够给力，也可以直接以 html 的方式引入图片，甚至做出一整个页面出来。
并且视频是没办法用 md 的方式引入的，此时你需要[其他操作教程](/howtouse.md#其他操作教程)

## 其他操作教程

::: tip
以下路径如果要引用**本地**的话，也是**遵循把资源放在public里，并以正确的方式引入的原则**
:::
- 如果要引入**音频**怎么办？

- 如果要引入**视频**怎么办？
  你可以使用`<iframe src="视频或者网页路径" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height=600 width=800></iframe>`  
  当然这里面有一大堆参数是可以省略的，看你如何去使用吧。（会自动播放）
  不想自动播放的更好的方法是`<video src="视频或者网页路径" height=700 width=400 controls></video>`**（注意添加了 controls 才行）** + 例子：<video src="/xiliang/de07a016c7f6dbc7a469a0b2e82b9618.mp4" height=700 width=400 controls></video>
  `<video src="/xiliang/de07a016c7f6dbc7a469a0b2e82b9618.mp4" height=700 width=400 controls></video>`

- 既然是链接，那么也**可以链接到外部网站**，这是没问题的。
  - 例子：<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=2622292975&auto=1&height=66"></iframe>
    `<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=2622292975&auto=1&height=66"></iframe>`（在 wyy 生成外链可以生成这段代码）

## 当你写完了

写完了之后可以把你的文档和资源丢给管理的人，也可以自己摆到自己想要的位置并commit和push。
如果你有闲心，还可以看看[面向开发与维护的教程](/howtousePro)

## VitePress 中 md 拓展语法（尚未翻译）

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
