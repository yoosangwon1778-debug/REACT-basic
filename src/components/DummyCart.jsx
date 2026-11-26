import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './DummyCart.css'
const DummyCart = () => {
    const [cart, setCart] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let mounted = true;

        const fetchCarts = async () => {
            setLoading(true)
            setError(null)

            try {

                const res = await axios.get('https://dummyjson.com/carts')
                if (mounted) setCart(res.data.carts)
                console.log(res.data.carts)

            } catch (error) {
                if (mounted) setError('데이터를 불러오지 못했습니다.')
            } finally {
                if (mounted) setLoading(false)
            }
        }

        fetchCarts()

        return () => {
            mounted = false
        }

    }, [])
    if (loading)
        return (
            <div className="dummy-wrap">
                <h2 className="dummy-title">DummyJSON Carts</h2>
                <p className="dummy-state">로딩중...</p>
            </div>
        );

    if (error)
        return (
            <div className="dummy-wrap">
                <h2 className="dummy-title">DummyJSON Carts</h2>
                <p className="dummy-error">{error}</p>
            </div>
        );
    return (
        <div className='dummy-wrap'>
            <h2 className='dummy-title'>장바구니</h2>
            <ul className="cart-list">
                {cart.map((c) => {
                    const first = c.products?.[0]
                    return (
                        <li key={c.id} className='cart-item'>
                            <div className="cart-top">
                                <div className="cart-total">
                                    총액 : {(Math.round(c.total / 10) * 10).toLocaleString()}원
                                </div>
                                <div className="cart-id">Cart #{c.id}</div>
                            </div>
                            {first ? (
                                    <div className="product-box">
                                        <img className="thumb" src={first.thumbnail}
                                            alt={first.title} />
                                        <div className="product-info">
                                            <div className="product-title">{first.title}</div>
                                            <div className="product-meta">
                                                할인율:{" "}
                                                <span className="badge">
                                                    {Math.floor(first.discountPercentage)}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ):(
                                    <p className="dummy-state">상품이 없습니다.</p>
                                )}

                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default DummyCart