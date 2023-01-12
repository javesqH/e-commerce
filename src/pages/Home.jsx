import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import ToOrderProducts from '../components/home/ToOrderProducts'
import './styles/home.css'

const Home = () => {

    const [productsFilter, setProductsFilter] = useState()
    const [inputValue, setInputValue] = useState("")
    const [inputPrice, setInputPrice] = useState({
        from: 0,
        to: Infinity
    })

    const products = useSelector(state => state.products)

    useEffect(() => {
        if(products) {
            setProductsFilter(products)
        }
    }, [products])

    const handleChange = e => {
        const inputValue = e.target.value.toLowerCase().trim()
        const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
        setProductsFilter(filter)
        setInputValue(e.target.value)
    }

    console.log(productsFilter)

    const filterCallBack = prod => +prod.price >= inputPrice.from && +prod.price <= inputPrice.to

    return (
        <div>
            <div className='hp-price'>
                  <h2>Price</h2>
                  <input value={inputValue} onChange={handleChange} type="text" />
            </div>
            <FilterPrice setInputPrice={setInputPrice} />
            <FilterCategory setInputValue={setInputValue} />
            <ToOrderProducts />
            <div className='products-container'>
                {
                    productsFilter?.filter(filterCallBack).length !== 0 ?
                    productsFilter?.filter(filterCallBack).map(product => (
                       <CardProduct 
                         key={product.id}
                         product={product}
                       /> 
                    ))
                    :
                      <h1>Not exist products to this filter</h1>
                }
            </div>
        </div>
    )
}

export default Home