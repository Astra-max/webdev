import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'


function Begin ()
{
  return (
    <div>
    <div className="header">
      <div className="hd">
        <h1>WestMart</h1>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Track order</a></li>
          <li><a href="">Cart</a></li>
        </ul>  
      </div>
    </div>
    <div className="display">
    <div className="srch">
      <input type='search' placeholder='Search' className='ipt-srch'/>
      <button className='srch-btn'>search</button>
    </div>
      <div className="first-four">
        <div className="card">
          <div className="sample">
            <div className="items">
              <img src="/jeans.jpeg"/>
            </div>
            <p><strong>French blue jeans 1960</strong></p>
            <p><strong>Kshs 500.00</strong></p>
            <div className="purchase">
              <div className="center-btn">
                <button><strong>Buy</strong></button>
              </div>
              <div className="save-item">
                <button><strong>Save</strong></button>
              </div>
            </div>  
          </div>
        </div>
        <div className="card">
          <div className="sample">
            <div className="items">
              <img src="./pullneck.jpeg"/>
            </div>
            <p><strong>Red Pull Neck</strong></p>
            <p><strong>Kshs 900.00</strong></p>
            <button><strong>Buy</strong></button> 
          </div>
        </div>  
        <div className="card">
          <div className="sample">
            <div className="items">
              <img src="./jacket.jpeg" alt="Trouser image"/>
            </div>
            <p><strong>Jungle Jacket</strong></p>
            <p><strong>Kshs 1,500.00</strong></p>
            <button><strong>Buy</strong></button> 
          </div>
        </div>
        <div className="card">
          <div className="sample">
            <div className="items">
              <img src="./lapbag.jpeg" alt="Trouser image"/>
            </div>
            <p><strong>Laptop Bag</strong></p>
            <p><strong>Kshs 2,500.00</strong></p>
            <button><strong>Buy</strong></button> 
          </div>
        </div>
        <div className="card">
          <div className="sample">
            <div className="items">
              <img src="./black-belt.jpeg" alt="Trouser image"/>
            </div>
            <p><strong>Men's black belt</strong></p>
            <p><strong>Kshs 850.00</strong></p>
            <button><strong>Buy</strong></button> 
          </div>
        </div>
      </div>
      <div className="last-four">
        <div className="card">
          <div className="sample">
            <div className="items">
              <img src="./body_shaper.jpeg" alt="Trouser image"/>
            </div>
            <p><strong>Body Shaper</strong></p>
            <p><strong>Kshs 650.00</strong></p>
            <button><strong>Buy</strong></button> 
          </div>
        </div>
        <div className="card">
          <div className="sample">
            <div className="items">
              <img src="./sneakers.jpeg" alt="Trouser image"/>
            </div>
            <p><strong>Sport Shoe</strong></p>
            <p><strong>Kshs 1,500.00</strong></p>
            <button><strong>Buy</strong></button> 
          </div>
        </div>
        <div className="card">
          <div className="sample">
            <div className="items">
              <img src="./belt.jpeg" alt="Trouser image"/>
            </div>
            <p><strong>Men's Belt</strong></p>
            <p><strong>Kshs 500.00</strong></p>
            <button><strong>Buy</strong></button> 
          </div>
        </div>
        <div className="card">
          <div className="sample">
            <div className="items">
              <img src="pullneck.jpeg" alt="Trouser image"/>
            </div>
            <p><strong>Chinnese collar</strong></p>
            <p><strong>Kshs 800.00</strong></p>
            <button><strong>Buy</strong></button> 
          </div>
        </div>
        <div className="card">
          <div className="sample">
            <div className="items">
              <img src="./Quilted Gym Bag - black-l.jpeg" alt="Trouser image"/>
            </div>
            <p><strong>Gym Bag</strong></p>
            <p><strong>Kshs 1900.00</strong></p>
            <button><strong>Buy</strong></button> 
          </div>
        </div>
      </div>
      <footer>
        <div className='west-mart'>
          <p>Our offices</p>
          <ul>
            <li>Nairobi Cyberton first floor</li>
            <li>Kisumu Astra tower first floor</li>
            <li>Nakuru Phoenix house</li>
            <li>Kisii Zimmers tower</li>
            <li>Eldorate Majengo house</li>
            <li>Kakamega Township house</li>
          </ul>
          <div className="policy">
            <p>Our Policy</p>
            <ul>
              <li>Honesty</li>
              <li>Convenince</li>
              <li>Acountability</li>
              <li>Transparent</li>
              <li>Realiable</li>
            </ul>
          </div>
          <div className="contact">
            <p>Contact info</p>
            <ul>
              <li>+254796066170</li>
              <li>+25478465689</li>
              <li>westmart.trade@gmail.com</li>
              <li>westmart.ltd@gmail.com</li>
            </ul>
          </div>
          <div className="alerts">
            <p>Current trends and news</p>
            <ul>
              <li>Our black fridays-10th Nov</li>
              <li>Online payment systems</li>
              <li>Security and delivery</li>
              <li>Electronics appliances</li>
              <li>Bonuses and offers</li>
            </ul>
          </div>
        </div>
        <div className='endpage'>
          <p>&copy;WestMart Ltd 2024</p>
          <ul>
            <li><a href='#'>FaceBook</a></li>
            <li>< a href='#'>Twitter</a></li>
            <li><a href='#'>Instagram</a></li>
          </ul>
        </div>
      </footer>
    </div>  
   </div> 

  )
}
ReactDOM.createRoot(document.getElementById('root')!).render(<Begin />)