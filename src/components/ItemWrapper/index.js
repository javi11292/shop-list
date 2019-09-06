import React from "react"
import { CSSTransition } from "react-transition-group"

const ItemWrapper = React.memo(props => {
    const { item, classes, timeout, children, ...otherProps } = props

    return (
        <CSSTransition
            {...otherProps}
            key={item.id}
            classNames={{ exit: classes.exit }}
            timeout={timeout}>
            {children}
        </CSSTransition>
    )
})

export default ItemWrapper