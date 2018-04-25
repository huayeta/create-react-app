/**
* 利用模块系统去共享全局变量
* 只能共享不可变数据 不会自动更新
* 如果需要更新 使用 react@16.3版本后的context
**/

import React from 'react';

const dependencies={};

// 注册函数
export const register=(key,dependency)=>{
    dependencies[key]=dependency;
}

// 获取key值的value
export const gain=(key)=>{
    if(dependencies[key])return dependencies[key];
    return new Error(`${key} is not registered as dependency`);
}

export const wire=(deps,mapper)=>{
    return (Component)=>{
        return class Injector extends React.Component {
            constructor(props) {
                super(props);
                this._resolvedDependencies=mapper([...deps.map(gain)]);
            }
            render(){
                return(
                    <Component
                        {...this.state}
                        {...this.props}
                        {...this._resolvedDependencies}
                    />
                );
            }
        };
    }
}
