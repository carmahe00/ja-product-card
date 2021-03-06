import React, { createContext } from 'react';

import useProduct from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)


export interface Props {
    product: Product
    //children?: ReactElement[] | ReactElement
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string
    style?: React.CSSProperties | undefined
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
    
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({onChange, product, value, initialValues})
    return (
        <ProductContext.Provider value={{ counter, increaseBy, product, maxCount }} >
            <div style={style} className={`${styles.productCard} ${className} `} >
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset
                })}
            </div >
        </ProductContext.Provider>
    )
}


