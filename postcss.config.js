const path=require('path');
const isProduction=(process.env.NODE_ENV==='production'?true:false);

let return_json={
    "plugins":{
        "postcss-import":{},
        "precss":{},
        "postcss-url":{
            basePath:path.resolve(__dirname),
            url:'inline',
            encodeType:'base64',
            maxSize:10,
            fallback:function(asset){
                return asset.url;
            }
        },
        // "autoprefixer":{},
        "postcss-aspect-ratio-mini":{},
        "postcss-write-svg":{
            utf8:false
        },
        "postcss-cssnext":{},
        "postcss-px-to-viewport":{
            viewportWidth:750,
            viewportHeight:1334,
            unitPrecision:3,
            viewportUnit:'vw',
            selectorBlackList:['.ignore','.hairlines',/^\.\w+?(-(?!mb)+?)+?/,/^body/],
            minPixelValue:1,
            mediaQuery:false
        },
        // "postcss-viewport-units":{},
        // "cssnano":{
        //     preset:"advanced",
        //     autoprefixer:false,
        //     "postcss-zindex":false
        // }
    }
};
if(isProduction){
    return_json.plugins['cssnano']={
        preset:"advanced",
        autoprefixer:false,
        "postcss-zindex":false
    }
}

module.exports=return_json;
