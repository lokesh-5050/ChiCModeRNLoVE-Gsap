import React, { useEffect, useLayoutEffect, useRef } from "react";

const Home = ({ tl, Expo }) => {
  let nav_sec_a1 = useRef(null);
  let nav_sec_a2 = useRef(null);
  let nav_sec_a3 = useRef(null);
  let texts = useRef(null);
  let texts_h1_span1 = useRef(null);
  let texts_h1_span2 = useRef(null);
  let texts_h1_span3 = useRef(null);
  let texts_h1_span4 = useRef(null);
  let texts_h1_span5 = useRef(null);
  let texts_h1_span6 = useRef(null);
  let texts_h1_span7 = useRef(null);
  let texts_h1_span8 = useRef(null);
  let texts_h1_span9 = useRef(null);
  let texts_h1_span10 = useRef(null);
  let texts_h1_span11 = useRef(null);
  let texts_h1_span12 = useRef(null);
  let texts_h1_span13 = useRef(null);
  let texts_h1_span14 = useRef(null);
  let ncentre = useRef(null);
  useEffect(() => {
    // document.querySelectorAll("#texts h1").forEach(function (texts) {
    //   let clutter = "";
    //   var text = texts.textContent.trim().split("");
    //   text.forEach(function (char) {
    //     clutter += `<span>${char}</span>`;
    //   });
    //   texts.innerHTML = clutter;
    // });
  }, []);
  useLayoutEffect(() => {
    tl.from([nav_sec_a1.current, nav_sec_a2.current, nav_sec_a3.current], {
      y: 20,
      opacity: -1,
      stagger: 0.1,
      duration: 2,
      ease: Expo,
    })
      .from(ncentre.current, {
        y: 20,
        opacity: -1,
        duration: 1,
        ease: Expo,
      })
      .from(
        [
          texts_h1_span1.current,
          texts_h1_span2.current,
          texts_h1_span3.current,
          texts_h1_span4.current,
          texts_h1_span5.current,
          texts_h1_span6.current,
          texts_h1_span7.current,
          texts_h1_span8.current,
          texts_h1_span9.current,
          texts_h1_span10.current,
          texts_h1_span11.current,
          texts_h1_span12.current,
          texts_h1_span13.current,
          texts_h1_span14.current,
        ],
        {
          opacity: 0,
          color: "red",
          scale: 100,
          stagger: 0.07,
          duration: 0.1,
          ease: Expo,
        }
      );
  });

  return (
    <>
      <div>
        <div id="main">
          <div id="home">
            <div id="dot-circle"></div>
            <div id="s-circle">
              <h4>View</h4>
            </div>
            <div id="hnav">
              <div className="nav-sec" id="nlef">
                <a ref={nav_sec_a1}>FB</a>
                <a ref={nav_sec_a2}>TW</a>
                <a ref={nav_sec_a3}>IG</a>
              </div>
              <div ref={ncentre} id="ncentre">
                <h1>KINK</h1>
              </div>
              <div className="nav-sec" id="nright">
                <a>Book Now</a>
                <a>Menu</a>
              </div>
            </div>
            <div id="container">
              <div ref={texts} id="texts">
                {/* <h1>ChiC</h1>
                <h1>MOdeRN</h1>
                <h1>LOVE</h1> */}
                <h1>
                  <span ref={texts_h1_span1}>C</span>
                  <span ref={texts_h1_span2}>h</span>
                  <span ref={texts_h1_span3}>i</span>
                  <span ref={texts_h1_span4}>C</span>
                  <br />
                  <span ref={texts_h1_span5}>M</span>
                  <span ref={texts_h1_span6}>O</span>
                  <span ref={texts_h1_span7}>d</span>
                  <span ref={texts_h1_span8}>e</span>
                  <span ref={texts_h1_span9}>R</span>
                  <span ref={texts_h1_span10}>N</span>
                  <br />
                  <span ref={texts_h1_span11}>L</span>
                  <span ref={texts_h1_span12}>O</span>
                  <span ref={texts_h1_span13}>V</span>
                  <span ref={texts_h1_span14}>E</span>
                </h1>
              </div>
              <div id="hcircle"></div>
            </div>
            <div id="d-nav">
              <div className="star">
                <h2>*</h2>
                <h4>
                  Gastronmy, Mixology <br />
                  and Art
                </h4>
              </div>
              <div className="star">
                <h2>*</h2>
                <h4>
                  Berlin's KINK Bar <br />& Restaurant
                </h4>
              </div>
              <div className="star">
                <h2>*</h2>
                <h4>
                  KINK brings together
                  <br />a bar
                </h4>
              </div>
            </div>
          </div>

          <div id="page2">
            <div id="images">
              <div id="runTxt">
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo perspiciatis ducimus error alias debitis. Suscipit
                  debitis dolo
                </h2>
              </div>
              <div className="pics">
                <img
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div className="pics">
                <img
                  src="https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                  alt=""
                />
              </div>
              <div id="test" className="pics">
                <img
                  src="https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                  alt=""
                />
              </div>
              <div className="pics">
                <img
                  src="https://images.unsplash.com/photo-1576944172637-4c09a92f9076?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
              <div className="pics">
                <img
                  src="https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                  alt=""
                />
              </div>
              <div className="pics">
                <img
                  src="https://images.unsplash.com/photo-1601928306874-1e650d7f8b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div id="page3">
            <div id="heads">
              <h1>THE 6 R'S OF </h1>
              <h1> SUSTAINABILITY </h1>
              <h1>-- ZERO WASTE</h1>
              <h1>TENETS</h1>
            </div>

            <div id="1" className="stripes">
              <i id="close-1" className="ri-close-line close"></i>
              <h4>Amuze</h4>
              <div className="strcnt cnt">
                <h2></h2>
                <h2>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis minima <br /> velit nulla nesciunt omnis molestiae
                  quis dicta magnam accusantium eos! <br /> Voluptatum omnis
                  cupiditate autem quas. Lorem ipsum dolor sit, amet <br />{" "}
                  consectetur adipisicing elit. Aperiam, dolorum
                </h2>

                <div id="2" className="stripes">
                  <i id="close-1" className="ri-close-line close"></i>
                  <h4>Poppins</h4>
                  <div className="strcnt cnt">
                    <h2>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Perferendis minima velit nulla nesciunt omnis molestiae
                      quis dicta magnam accusantium eos! Voluptatum omnis
                      cupiditate autem quas.
                    </h2>
                  </div>
                </div>
                <div id="3" className="stripes">
                  <i id="close-1" className="ri-close-line close"></i>

                  <h4>ChiC</h4>
                  <div className="strcnt cnt">
                    <h2>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Perferendis minima velit nulla nesciunt omnis molestiae
                      quis dicta magnam accusantium eos! Voluptatum omnis
                      cupiditate autem quas.
                    </h2>
                  </div>
                </div>
                <div id="4" className="stripes">
                  <i id="close-1" className="ri-close-line close"></i>
                  <h4>LOve</h4>
                  <div className="strcnt cnt">
                    <h2>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Perferendis minima velit nulla nesciunt omnis molestiae
                      quis dicta magnam accusantium eos! Voluptatum omnis
                      cupiditate autem quas.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="page4">
            <div id="one" className="texts">
              <h1>Architecture</h1>
              <img
                src="https://images.unsplash.com/photo-1652905248353-7d8b59c7b95d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                alt=""
              />
            </div>

            <div id="two" className="texts">
              <h1>Prototypes</h1>
              <img
                src="https://images.unsplash.com/photo-1652691292433-a8d61d9e7693?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                alt=""
              />
            </div>
            <div id="three" className="texts">
              <h1>Design</h1>
              <img
                src="https://images.unsplash.com/photo-1653605941849-e8c013bdae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                alt=""
              />
            </div>
            <div id="four" className="texts">
              <h1>Innovations</h1>
              <img
                src="https://images.unsplash.com/photo-1649894158491-4a27875ef06c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
