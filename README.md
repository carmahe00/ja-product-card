# Ja-Product-Card
Este es un paquete de pruebas

### Juan Pablo

## Ejemplo 
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'
```

```
<ProductCard
    product={product}
                
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({ reset, increaseBy, isMaxCountReached, count }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
                            
             </>
        )
    }
</ProductCard>
```
