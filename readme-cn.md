添加 .babelrc 里面配置一些信息 同步删除package.json 里面的babel的配置
添加 postcss.config.js 的配置信息

添加 react的jsx 支持 @babel/preset-react @babel/preset-es2015
添加 装饰器 支持 @babel/plugin-proposal-decorators
添加 静态类属性 支持 @babel/plugin-proposal-class-properties
添加 热替换 支持 react-hot-loader/babel
import {hot} form 'react-hot-loader';

@hot(module)
class App extends React.Component{
    render(
        return(
            <div>App</div>
        )
    )
}
