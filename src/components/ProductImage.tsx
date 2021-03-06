import React, { useContext } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

import noImage from '../assets/noimage.jpg';

export interface Props {
    img?: string | undefined
    className?: string | undefined
    style?: React.CSSProperties | undefined
}

export const ProductImage = ({ img, className, style }: Props) => {
    const { product } = useContext(ProductContext)
    let imgToShow
    img ?
        imgToShow = img :
        product.img ?
            imgToShow = product.img :
            imgToShow = noImage
    return (
        <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt="Producto" />
    )
}
