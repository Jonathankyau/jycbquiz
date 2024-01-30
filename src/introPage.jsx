import './introPage.scss';

const IntroPage = ({ startQuiz }) => {
  return (
    <div className="intro-container">
      <div className='logo'>City Beauty</div>
      <div className='content'>     
          <div className="intro-statement">
            <h1>Achieve Perfectly <span>Smooth, Youthful</span> Skin</h1>
            <h3>Get a personalized skin care treatment</h3>
          </div>
        <div className="goal-container">
          <h2>Choose Your Goal</h2>
          <button onClick={startQuiz}>Remove Crepey Skin</button>
          <button onClick={startQuiz}>Relieve Dry, Flaky Skin</button>
          <button onClick={startQuiz}>Get Firmer, Tighter, Younger Looking Skin</button>
        </div>
      </div> 
    </div>

  );
};

export default IntroPage;

