function calsses(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ')
}

interface Options {
    extra: string | undefined
}
interface ClassToggle {
    //声明一组接口，接口中的key是字符串，value是boolean
    [K: string]: boolean
}
function scopedClassMaker(prefix: string) {
    return function (name?: string | ClassToggle, options?: Options) {
        let name2
        let result
        if(typeof name === 'string' || name === undefined) {
            name2 = name
            result =  [prefix, name].filter(Boolean).join('-')
        }  else {
            name2 = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0])
            result = name2.map(n => {
                return [prefix, n].filter(Boolean).join('-')
            }).join(' ')
        }
        if(options && options.extra) {
            return [result, options && options.extra].filter(Boolean).join(' ')
        }else {
            return result
        }
    }
}

export {scopedClassMaker,calsses}