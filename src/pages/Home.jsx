import React from 'react'
import "../static/Home.css"
import Contact from '../components/Contact'
import ImageContainer from '../components/ImageContainer'
import LogoSlider from '../components/LogoSlider'
import { useNavigate } from 'react-router-dom'
import { useInView } from "react-intersection-observer";

function Home() {
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger once when it comes into view
    threshold: 0.05, // Adjust this to trigger when 20% of the element is visible
  });

  const handlePostClick = () => {
    navigate(`/product`)
  }

  return (
    <>
      <div className="home-container">
        
        <ImageContainer></ImageContainer>

        <LogoSlider></LogoSlider>


          <div className="products-container">
          
            <div className={`products-wrapper ${inView ? "fade-up" : "hidden"}`}
            ref={ref}
            >

              <div className="best-selling">
                <div className="product-category">
                  <div>
                    <h3>BEST SELLERS</h3>
                    <p>The Best Selling Parfumes</p>
                  </div>
                  <a href="/filter">
                    <button>See All ></button>
                  </a>                
                  </div>

                <div className="products">
                  
                  <div className="product">
                    <h4>SPICEBOMB EXTREME</h4>
                    <p>50ml</p>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d76003029feec33/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
                    <p>$299.00</p>
                  </div>

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

                  <div className="product" onClick={handlePostClick}>
                    <h4>STRONGER WITH YOU</h4>
                    <p>50ml</p>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d420031447fa12e/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
                    <p>$299.00</p>
                  </div>
                  
                </div>
              </div>

              <div className="Advertisement">
                <img src="https://cloud.appwrite.io/v1/storage/buckets/673c8c9c000adf57ba37/files/673c92f4003864894c95/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
              </div>


              <div className="recently-added">
                <div className="product-category">
                  <div>
                    <h3>JUST ARRIVED</h3>
                    <p>Recently added Parfumes</p>
                  </div>
                  <a href="/filter">
                    <button>See All ></button>
                  </a>
                </div>

                <div className="products">
                  <div className="product">
                    <h4>YSL EDP</h4>
                    <p>50ml</p>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d3c001cc561407d/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
                    <p>$299.00</p>
                  </div>
                  
                  <div className="product">
                    <h4>SPICEBOMB EXTREME</h4>
                    <p>50ml</p>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d76003029feec33/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
                    <p>$299.00</p>
                  </div>

                  <div className="product">
                    <h4>VALENTINO BORN IN ROMA</h4>
                    <p>50ml</p>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8c03001bcc86a98f/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
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


            <div className="Advertisement">
              <img src="https://cloud.appwrite.io/v1/storage/buckets/673c8c9c000adf57ba37/files/673c92f4003864894c95/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
            </div>



              <div className="other-products">
                <div className="product-category">
                  <div>
                    <h3>OTHER PRODUCTS</h3>
                    <p>Check out our Other Products</p>
                  </div>
                  <a href="/filter">
                    <button>See All ></button>
                  </a>                </div>

                <div className="products">
                  <div className="product">
                    <h4>YSL EDP</h4>
                    <p>50ml</p>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d3c001cc561407d/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
                    <p>$299.00</p>
                  </div>

                  <div className="product">
                    <h4>SPICEBOMB EXTREME</h4>
                    <p>50ml</p>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8d76003029feec33/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
                    <p>$299.00</p>
                  </div>

                  <div className="product">
                    <h4>VALENTINO BORN IN ROMA</h4>
                    <p>50ml</p>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/671d56dc003e66f31f4d/files/671f8c03001bcc86a98f/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
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

            <div className="Advertisement">
              <img src="https://cloud.appwrite.io/v1/storage/buckets/673c8c9c000adf57ba37/files/673c92f4003864894c95/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin" alt="" />
            </div>
            </div>
          </div>
      </div>

      <Contact></Contact>
    </>
  )
}

export default Home