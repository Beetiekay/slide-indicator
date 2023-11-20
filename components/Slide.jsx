import "../components/Slide.css";



const Slide = () =>{
    return(
      <>
      <span className="main-container">
        <div className="container">
             <input type="radio" name="slider" id="Burger" checked/>
             <input type="radio" name="slider" id="Pizza"/>
             <input type="radio" name="slider" id="Chicken"/>
             <input type="radio" name="slider" id="Fried"/>
             <input type="radio" name="slider" id="Rice"/>
          <nav>
            <label For="Burger" className="Burger">Burger</label>
            <label For="Pizza" className="Pizza">Pizza</label>
            <label For="Chicken" className="Chicken">Chicken</label>
            <label For="Fried" className="Fried">Fried</label>
            <label For="Rice" className="Rice">Rice</label>
            <div className="slider"></div>
          </nav>

          <section>
            <div className="content content-1">
              <div className="title">Burger</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, maiores reiciendis laborum non numquam ullam magni aspernatur voluptas. Nemo, minima.</p>
            </div>

            <div className="content content-2">
              <div className="title">Pizza</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, maiores reiciendis laborum non numquam ullam magni aspernatur voluptas. Nemo, minima.</p>
            </div>

            <div className="content content-3">
              <div className="title">Chichen</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, maiores reiciendis laborum non numquam ullam magni aspernatur voluptas. Nemo, minima.</p>
            </div>

            <div className="content content-4">
              <div className="title">Fried</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, maiores reiciendis laborum non numquam ullam magni aspernatur voluptas. Nemo, minima.</p>
            </div>

            <div className="content content-5">
              <div className="title">Rice</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, maiores reiciendis laborum non numquam ullam magni aspernatur voluptas. Nemo, minima.</p>
            </div>
          </section>
       </div>
      </span>
      </>
    )
  };
  
  export default Slide;