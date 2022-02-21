import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle } from '../../src/components';
import { ProductCard } from '../../src/components/ProductCard';
import { product1, product2 } from '../data/products';
import { ProductImage } from '../../src/components/ProductImage';

describe('ProductTitle', () => {
    test('debe de mostrar el componente correctamente con el titulo personalizado', () =>{
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className="custom-class" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe de mostrar el componente correctamente con el titulo personalizado', () =>{
        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {
                    ()=>(
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe de mostrar el componente correctamente con el titulo personalizado', () =>{
        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {
                    ()=>(
                        <ProductImage img={product2.id} />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})
