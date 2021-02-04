import React from "react";

export default props => {
    const isPAr = props.numero % 2 === 0;
    return (
        <div>
            {isPAr ? <span>Par</span> : <span>Impar</span>}
        </div>
    )
}