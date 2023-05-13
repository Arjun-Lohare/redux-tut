import React from 'react'

function Home() {
    return (

        <div>

            <div className='add-cart'>
                <img src='https://cdn-icons-png.flaticon.com/512/3523/3523865.png' />
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://www.pngmart.com/files/22/iPhone-14-PNG-Clipart.png' />
                </div>
                <div className='text-wrapper item'>
                    <span>I-Phone </span>
                    <span>Price: 1000.00$</span>
                </div>
                <div className='button-wrapper item'>
                    <button>Add To Cart</button>
                </div>

            </div>

        </div>
    )
}

export default Home;