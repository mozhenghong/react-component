import React from 'react';
import scopedClassMaker from '../helpers/classes'

const scopedClass = scopedClassMaker('moui-layout')
const sc = scopedClass
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Aside: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props

    return (
        <div className={sc('aside',{extra: className})} {...rest}>
            aside
        </div>
    )
}

export default Aside;