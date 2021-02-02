import React, { cloneElement } from "react";

export default props => {
    console.log(typeof(props.children));
    return (
        <div>
            <div>
                {React.Children.map(props.children, (el) => {
                        return cloneElement(el, props);
                })}
            </div>
            <div>
                {props.children.map((el) => {
                        return cloneElement(el, props);
                })}
            </div>
        </div>
    )
}