### Headings
To write a paragraph, you simply need to write text! If you want your text to be on a separate line, you'll need to skip a line.

No other formatting is needed to write simple paragraphs.

You can add _emphasis_ to text by wrapping the text in underscores. You can also **bold** text by adding two asterisks on either side of the text you want to bold.

This syntax can vary depending on the interpreter. For example, in the Markdown used in GitHub, the distinction is between a single underscore or asterisk compared to two underscores or asterisks. Take a look:
Program overview
  Markdown
Lesson 4
Markdown
1.5 hoursAverage Reading Time
Learning Objective
By the end of this lesson, you will be able to write in Markdown and use a variety of formatting tools

Overview
In this lesson, you will get an overview of Markdown and learn how to use it to format your code.

Key Terms
Alternative text
Also called alt text, an image description that can be added as an image attribute in an HTML document
You may be used to writing text documents using a program like Microsoft Word, Pages, or Google Docs. Software developers don't use tools like those, but they still need text formatting for writing documentation and issues. The most common format that you'll find is Markdown.

Markdown is used in a variety of places frequented by developers. Lately, it has become more popular on more mainstream applications and websites, including Slack and Reddit. If you learn Markdown, you'll be able to write text documents in the same editor that you use to write code.

What is Markdown?
Markdown is a way of writing text that, when read by an interpreter, formats the text that you've written so that it includes styling such as headings, bold, and italics.

Markdown is a popular and powerful syntax that is used across the web. Most commonly, you'll be writing Markdown to write README.md files and to format your GitHub issues.

Markdown isn't complicated to learn, but it might require a bit of practice at first. And although most Markdown interpreters work the same way, you might notice minor differences between websites. In this lesson, you'll get an overview of some of the most common Markdown syntax, specifically for use on GitHub.

Preview Markdown
You can write Markdown in Visual Studio Code, and you can preview it there as well. To do so, open a Markdown file (indicated by the .md extension). Then open the command palette by pressing Control+Shift+P (or Command+Shift+P on a Mac). Type Markdown: Open Preview and select the applicable option.

Do this
Practice writing Markdown
Create a Markdown file on your computer and open it with VSCode. Then, use the instructions above to open the Markdown preview. When you type text into your Markdown file, it will automatically update in the newly opened tab or pane.

When you're learning the syntax below, use this file to practice each new piece of syntax.

Markdown syntax
It's a good idea to visit GitHub's Mastering Markdown guide and save it to your browser as a bookmark. This guide is useful to keep bookmarked until you feel comfortable with the syntax. Some syntax is used more often than others; the most common syntax is detailed below.

Headings
Document headings can be written using hash symbols (#). A single hash symbol represents an h1 element on the page, two hash symbols represent an h2, and the pattern continues up to an h6 element. You can see the syntax for an h3 heading below:

### Headings
Paragraphs
A paragraph needs no special syntax; you simply need to write the text. If you want to start a new paragraph, skip a line by pressing Enter twice.

As shown in the example below, no other formatting is needed to write simple paragraphs.

To write a paragraph, you simply need to write text! If you want your text to be on a separate line, you'll need to skip a line.

No other formatting is needed to write simple paragraphs.
Emphasis and bold
You can add emphasis to text by wrapping the text in underscores (_). You can also bold text by adding two asterisks (**) on either side of the text you want to bold. Here's what the syntax looks like:


You can add *emphasis* to text by wrapping the text in single asterisks or underscores, and you can __bold__ text by adding two asterisks or underscores on either side of the bolded text.

You can write code inline by wrapping text in backticks. This helps distinguish code, like `let x = 10`, from other text. 

For longer blocks of code, it's better to use the code block syntax that uses three backticks to start and end the code block. You can also include the language to provide appropriate syntax highlighting.

This is what the syntax for longer code blocks looks like:

```javascript
function hello(name) {
  console.log("Hello, " + name + "!");
}
```


Module 12
Developer collaboration
Program overview
  Markdown
Lesson 4
Markdown
1.5 hoursAverage Reading Time
Learning Objective
By the end of this lesson, you will be able to write in Markdown and use a variety of formatting tools

Overview
In this lesson, you will get an overview of Markdown and learn how to use it to format your code.

Key Terms
Alternative text
Also called alt text, an image description that can be added as an image attribute in an HTML document
You may be used to writing text documents using a program like Microsoft Word, Pages, or Google Docs. Software developers don't use tools like those, but they still need text formatting for writing documentation and issues. The most common format that you'll find is Markdown.

Markdown is used in a variety of places frequented by developers. Lately, it has become more popular on more mainstream applications and websites, including Slack and Reddit. If you learn Markdown, you'll be able to write text documents in the same editor that you use to write code.

What is Markdown?
Markdown is a way of writing text that, when read by an interpreter, formats the text that you've written so that it includes styling such as headings, bold, and italics.

Markdown is a popular and powerful syntax that is used across the web. Most commonly, you'll be writing Markdown to write README.md files and to format your GitHub issues.

Markdown isn't complicated to learn, but it might require a bit of practice at first. And although most Markdown interpreters work the same way, you might notice minor differences between websites. In this lesson, you'll get an overview of some of the most common Markdown syntax, specifically for use on GitHub.

Preview Markdown
You can write Markdown in Visual Studio Code, and you can preview it there as well. To do so, open a Markdown file (indicated by the .md extension). Then open the command palette by pressing Control+Shift+P (or Command+Shift+P on a Mac). Type Markdown: Open Preview and select the applicable option.

Do this
Practice writing Markdown
Create a Markdown file on your computer and open it with VSCode. Then, use the instructions above to open the Markdown preview. When you type text into your Markdown file, it will automatically update in the newly opened tab or pane.

When you're learning the syntax below, use this file to practice each new piece of syntax.

Markdown syntax
It's a good idea to visit GitHub's Mastering Markdown guide and save it to your browser as a bookmark. This guide is useful to keep bookmarked until you feel comfortable with the syntax. Some syntax is used more often than others; the most common syntax is detailed below.

Headings
Document headings can be written using hash symbols (#). A single hash symbol represents an h1 element on the page, two hash symbols represent an h2, and the pattern continues up to an h6 element. You can see the syntax for an h3 heading below:

### Headings
Paragraphs
A paragraph needs no special syntax; you simply need to write the text. If you want to start a new paragraph, skip a line by pressing Enter twice.

As shown in the example below, no other formatting is needed to write simple paragraphs.

To write a paragraph, you simply need to write text! If you want your text to be on a separate line, you'll need to skip a line.

No other formatting is needed to write simple paragraphs.
Emphasis and bold
You can add emphasis to text by wrapping the text in underscores (_). You can also bold text by adding two asterisks (**) on either side of the text you want to bold. Here's what the syntax looks like:

You can add _emphasis_ to text by wrapping the text in underscores. You can also **bold** text by adding two asterisks on either side of the text you want to bold.
This syntax can vary depending on the interpreter. For example, in the Markdown used in GitHub, the distinction is between a single underscore or asterisk compared to two underscores or asterisks. Take a look:

You can add *emphasis* to text by wrapping the text in single asterisks or underscores, and you can __bold__ text by adding two asterisks or underscores on either side of the bolded text.
Inline code blocks
You can write code inline by wrapping text in backticks (`). This helps distinguish code, like let x = 10, from other text. Here's what the syntax looks like:

You can write code inline by wrapping text in backticks. This helps distinguish code, like `let x = 10`, from other text. 
Larger code blocks
For longer blocks of code, it's better to use the code block syntax that uses three backticks to start and end the code block. You can also include the language to provide appropriate syntax highlighting.

This is what the syntax for longer code blocks looks like:

```javascript
function hello(name) {
  console.log("Hello, " + name + "!");
}
```

Lists
You can write ordered lists by writing your start number followed by a period (.). On many platforms, you can actually just repeat this number, and the interpreter will order it appropriately for you. Here's an example:

1. Markdown
1. Is
1. Amazing

unordered list

- Markdown
- Is
- Amazing

Links
Links can be written inline with a mix of brackets ([]) and parentheses (()), like the code below:

This is a link to [GitHub](http://github.com).

Images are nearly the same as links, except for !

![This is an image of a bear.](https://placebear.com/202/203)