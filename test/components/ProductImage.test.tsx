import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';


describe('ProductImage', () => {
    

    test('debe de mostrar el componente correctamente con la imagen personalizado', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://static1.mileroticos.com/photos/d/2022/02/15/c5/0d5145369dec455f03771f14fa19adac.jpg" className="custom-class" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe de mostrar el componente correctamente con imagen producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2} >
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})
