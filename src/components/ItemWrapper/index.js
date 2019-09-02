import React from "react"
import { CSSTransition } from "react-transition-group"

const ItemWrapper = React.memo(props => {
    const { isEnabled, item, classes, timeout, children, ...otherProps } = props

    return (
        <CSSTransition
            {...otherProps}
            key={item.id}
            classNames={{ exit: isEnabled ? classes.exit : undefined }}
            timeout={isEnabled ? timeout : 0}>
            {children}
        </CSSTransition>
    )
})

export default ItemWrapper