# Deno

## 环境

- Deno 1.0.0

    - curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.0.0

    - 可以使用 [asdf](https://github.com/asdf-vm/asdf) 版本切换，如果之前已经安装0.**，可以在安装完asdf-deno后创建  [软连接](https://juejin.im/post/5ebb8b9c5188250bdf5c2d89#heading-8)  
    ln -s /Users/${USER_NAME}/.asdf/installs/deno/1.0.0-rc3/bin/deno /usr/local/bin

- ts配置。[typescript-deno-plugin](https://github.com/justjavac/typescript-deno-plugin)。🎉

## 项目启动

```js
// deno run --allow-net index.js
// deno run --allow-net --allow-read --config ./tsconfig.json app.ts 
```
