import style from './index.module.sass'

export const reactElement = (
    // Из-за несовершенсва jsxFactory используется class вместо className
    <div class={style.div}>
        <h1 class={style.h1}>Hello, i'm jsx</h1>
    </div>
)