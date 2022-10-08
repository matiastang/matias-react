<!--
 * @Author: matiastang
 * @Date: 2022-10-08 15:45:31
 * @LastEditors: matiastang
 * @LastEditTime: 2022-10-08 16:02:46
 * @FilePath: /matias-react/md/CSS/css:text-decoration.md
 * @Description: text-decoration
-->
# text-decoration

## 介绍

`text-decoration` 这个 `CSS` 属性是用于**设置文本的修饰线外观（下划线、上划线、贯穿线/删除线 或 闪烁）**它是 `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, 和新出现的 `text-decoration-thickness` 属性的缩写。

[MDN text-decoration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration)
[兼容性](https://caniuse.com/?search=text-decoration)

## 语法

`text-decoration` 属性是一种简写属性，并且可以使用普通属性三个值中的任何一个。

```css
text-decoration: <text-decoration-line text-decoration-style text-decoration-color>
```

### text-decoration-line

| 值 | 描述 |
| - | - |
| none | 默认。定义标准的文本。 |
| underline | 定义文本下的一条线。 |
| overline | 定义文本上的一条线。 |
| line-through | 定义穿过文本下的一条线。 |
| blink | 定义闪烁的文本。 |
| inherit | 规定应该从父元素继承 text-decoration 属性的值。 |

### text-decoration-style

| 值 | 描述 |
| - | - |
| solid | 默认值。线条显示为单行。 |
| double | 线条显示为双线。 |
| dotted | 线条显示为点线。 |
| dashed | 线条显示为虚线。 |
| wavy | 线条显示为波浪线。 |
| initial | 将此属性设置为其默认值。 |
| inherit | 从其父元素继承此属性。 |

### text-decoration-color

| 值 | 描述 |
| - | - |
| color | 规定 text-decoration 的颜色。 |
| initial | 将此属性设置为其默认值。 |
| inherit | 从其父元素继承此属性。 |

### text-decoration-thickness

`CSS` 属性 `text-decoration-thickness` 用于设置元素中文本所使用的装饰线（如 `line-through`、`underline` 或 `overline`）的笔触厚度。

```css
text-decoration-thickness =
    auto          |
    from-font     |
    <length>      |
    <percentage> 
```

```css
/* Single keyword */
text-decoration-thickness: auto;
text-decoration-thickness: from-font;

/* length */
text-decoration-thickness: 0.1em;
text-decoration-thickness: 3px;

/* percentage */
text-decoration-thickness: 10%;

/* Global values */
text-decoration-thickness: inherit;
text-decoration-thickness: initial;
text-decoration-thickness: unset;
```