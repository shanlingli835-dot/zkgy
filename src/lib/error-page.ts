export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>页面暂时无法加载</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <main>
      <h1>页面暂时无法加载</h1>
      <p>请刷新页面重试，或返回首页。</p>
      <button onclick="location.reload()">重新加载</button>
      <a href="/">返回首页</a>
    </main>
  </body>
</html>`;
}
