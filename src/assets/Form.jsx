import { useState } from "react";
import imgGif from "../assets/fullColor.gif";
import { AiOutlineCheckCircle } from "react-icons/ai";
const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <>
      {" "}
      <div className='tsgcolor'>
        <h1>Tsg-Color-Generator</h1>
      </div>
      <div className='tsgsection2'>
        <div>
          <img src={imgGif} />
        </div>
        <div className='ontsg'>
          <p className='tsgsection21'>
            Generate beautiful color palettes with ease.
          </p>
          <div className='how-to-use'>
            <h2>How it works</h2>
            <div className='step'>
              {AiOutlineCheckCircle}
              <h3>
                {" "}
                <AiOutlineCheckCircle /> Choose Your Base Color
              </h3>
              <p>
                Select or input the color you want to use as the foundation for
                your color scheme.
              </p>
            </div>
            <div className='step'>
              <h3>
                {" "}
                <AiOutlineCheckCircle /> Generate Your Palette
              </h3>
              <p>
                Simply click the "Generate" button to create your unique color
                scheme.
              </p>
            </div>
            <div className='step'>
              <h3>
                <AiOutlineCheckCircle /> Copy Your Colors
              </h3>
              <p>
                To use a specific color, just click or tap on it to copy the
                color code to your clipboard.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='tsgbutton'>
        <a href='#container'>
          <button>Get Started Now!!!</button>
        </a>
      </div>
      <section className='container' id='container'>
        <h4 className='header'> Tsg color generator</h4>

        <form className='color-form' onSubmit={handleSubmit}>
          <input
            type='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#1100ff'
          />
          <button className='btn' type='submit' style={{ background: color }}>
            Generate
          </button>
        </form>
      </section>
    </>
  );
};
export default Form;
