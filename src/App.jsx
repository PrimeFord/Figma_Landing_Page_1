import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Meet from "./components/Meet";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="wrp1">
        <p className="title">Welcome to the best website template!</p>
        <p className="para">
          Are you looking for solutions to your problems?Look futher, because we
          have the answer. Our team of expert has the skills and experience to
          deliver top-quality results.
        </p>
        <div className="opt">
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
        <div className="pics">
          <img src="./image/pic1.png" alt="pic" />
          <img src="./image/pic2.jpg" alt="pic" />
        </div>
      </div>
      <div className="wrp2">
        <div className="line">
          <div className="one">
            <div className="head">
              <span>
                <img src="./image/Icon1.png" alt="icon" />
              </span>
              Header
            </div>
            <p className="word">
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team.Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.Ant Design, a design language for background...
            </p>
            <div className="btn_arrow">
              <a href="http://">Button</a>
              <span>
                <img src="./image/arrow.png" alt="arrow" />
              </span>
            </div>
          </div>
          <div className="one">
            <div className="head">
              <span>
                <img src="./image/Icon2.png" alt="icon" />
              </span>
              Header
            </div>
            <p className="word">
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team.Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.Ant Design, a design language for background...
            </p>
            <div className="btn_arrow">
              <a href="http://">Button</a>
              <span>
                <img src="./image/arrow.png" alt="arrow" />
              </span>
            </div>
          </div>
          <div className="one">
            <div className="head">
              <span>
                <img src="./image/Icon3.png" alt="icon" />
              </span>
              Header
            </div>
            <p className="word">
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team.Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.Ant Design, a design language for background...
            </p>
            <div className="btn_arrow">
              <a href="http://">Button</a>
              <span>
                <img src="./image/arrow.png" alt="arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrp3">
        <div className="card">
          <div className="details">
            <h2>Why you should choose us</h2>
            <p>
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team.Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.Ant Design, a design language for
            </p>
            <p>
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team.Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.Ant Design, a design language for
            </p>
          </div>
          <div className="span">
            <div className="d_img">
              <img src="./image/art1.png" alt="" />
            </div>
            <div className="d_img">
              <img src="./image/art2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="wrp4">
        <div className="card">
          <div className="bird_img">
            <h2>Why you should us</h2>
            <img src="./image/bird.png" alt="" />
          </div>
          <div className="sub">
            <h2>Subheader</h2>
            <p>
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team.Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.Ant Design, a design language for
            </p>
            <p>
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team.Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.Ant Design, a design language for
            </p>
          </div>
        </div>
      </div>
      <Gallery />
      <div className="wrp6">
        <h2>Meet the Team</h2>

        <div className="card1">
          <p>
            Ant Design, a design language for background applications, is
            refined by Ant UED Team. Ant Design, a design language for
            background applications, is refined by Ant UED Team.Ant Design, a
            design language for background applications, is refined by Ant UED
            Team.Ant Design, a design language for background applications, is
            refined by Ant UED Team.Ant Design, a design language for background
          </p>
          <div className="box">
            <div className="dir">
              <img src="./image/arr1.png" alt="left-arrow" />
              <img src="./image/arr2.png" alt="right-arrow" />
            </div>
            <div className="profile">
              <Meet img="/image/dope.png" header="John Milo" caption="CEO" />
              <Meet
                img="/image/photo.png"
                header="Georgia Miller"
                caption="Director"
              />
              <Meet
                img="/image/fresh.png"
                header="Diana Kent"
                caption="Manager"
              />
              <Meet
                img="/image/bro.png"
                header="Josh Pattel"
                caption="Assistant Manager"
              />
              <Meet
                img="/image/okay.png"
                header="Max Scott"
                caption="Supervisor"
              />
              <Meet
                img="/image/chill.png"
                header="Angela Shanks"
                caption="HR Manager"
              />
              <Meet
                img="/image/greek.png"
                header="Alex Ethan"
                caption="Advisor"
              />
              <Meet
                img="/image/fine.png"
                header="Brenda Fox"
                caption="Marketer"
              />
              <Meet
                img="/image/tshirt.png"
                header="Jeff Bush"
                caption="Head of Staff"
              />
              <Meet
                img="/image/afro.png"
                header="Bobby Terry"
                caption="Stylist"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wrp7">
        <div className="phone">
          <img src="./image/phone.png" alt="phone" />
        </div>
        <div className="form">
          <h2>Contact us</h2>
          <p>Our lovely team would like to hear from you</p>
          <div className="forms">
            <section>
              <label htmlFor="Firstname">First name</label>
              <input
                type="text"
                name="firstname"
                id="first_name"
                placeholder="example"
              />
            </section>
            <section>
              <label htmlFor="Lastname">Last name</label>
              <input
                type="text"
                name="lastname"
                id="last_name"
                placeholder="example"
              />
            </section>
            <section>
              <label htmlFor="Firstname">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example"
              />
            </section>
            <section>
              <label htmlFor="phone_no">Phone number</label>
              <input
                type="text"
                name="phone no"
                id="phone_no"
                placeholder="example"
              />
            </section>
            <section className="text">
              <label htmlFor="issue">Issue</label>
              <textarea
                name="issue"
                id="issue"
                cols="10"
                rows="5"
                placeholder="example"
              ></textarea>
            </section>
            <section className="submit">
              <button type="submit">
                Submit <img src="./image/Vector.png" alt="" />
              </button>
            </section>
          </div>
          <div className="social">
            <img src="./image/ai.png" alt="" />
            <img src="./image/google.png" alt="" />
            <img src="./image/youtube.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
