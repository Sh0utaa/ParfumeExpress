import React from 'react'
import Navbar from '../components/Navbar'
import "../static/Home.css"

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="image-container">
          <div className="image-wrapper">
            <img src="src/assets/ManModel.png" alt="manModelPicture" />
            <div className="overlay"></div>
          </div>
          <div className="image-wrapper">
            <img src="src/assets/WomanModel.png" alt="womanModelPicture" />
            <div className="overlay"></div>
          </div>
          <div className="image-wrapper">
            <img src="src/assets/UnisexModel.png" alt="unisexModelPicture" />
            <div className="overlay"></div>
          </div>
        </div>


          <div className="products-container">
            <div className="Advertisemenet">Advertisement 1</div>
          
            <div className='products-wrapper'>
              <div className="best-selling">
                <div className="product-category">
                  <div>
                    <h3>BEST SELLERS</h3>
                    <p>The Best Selling Parfumes</p>
                  </div>
                  <button>See All ></button>
                </div>

                <div className="products">
                  
                  <div className="product">
                    <h4>SPICEBOMB EXTREME</h4>
                    <p>50ml</p>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d76003029feec33/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
                    <p>$299.00</p>
                  </div>

                  <div className="product">
                    <h4>STRONGER WITH YOU</h4>
                    <p>50ml</p>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d420031447fa12e/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
                    <p>$299.00</p>
                  </div>

                  
                </div>

              </div>

              <div className="recently-added">
                <div className="product-category">
                  <div>
                    <h3>JUST ARRIVED</h3>
                    <p>Recently added Parfumes</p>
                  </div>
                  <button>See All ></button>
                </div>

                <div className="products">
                  <div className="product">
                    <h4>YSL EDP</h4>
                    <p>50ml</p>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d3c001cc561407d/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
                    <p>$299.00</p>
                  </div>

                  <div className="product">
                    <h4>VALENTINO BORN IN ROMA</h4>
                    <p>50ml</p>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8c03001bcc86a98f/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
                    <p>$299.00</p>
                  </div>
                </div>

              </div>
            </div>



            <div className="Advertisemenet">Advertisement 2</div>
          </div>
      </div>
    </>
  )
}

export default Home