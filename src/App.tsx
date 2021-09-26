import './styles/_layout.scss';

function App() {
  return (
    <>
      <header className='background-primary'>
        <div className='container'>
          <img
            src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Black'
            alt=''
            width='34'
            height='34'
          />
          <h1>Amateasu's Statistics</h1>
        </div>
      </header>

      <main className='container'>
        <article className='card card--highlight'>
          <h2>Your Weekly Score</h2>
          <strong>57%</strong>
          <p>Last updated: Sept. 23, 2021</p>
        </article>
        <article className='summary'>
          <h2>Summary</h2>
          <dl className='layout-grid layout-grid--scrollsnap-cards'>
            <div className='card card--stats'>
              <dt>
                <span className='chart'></span>Time on Apps
              </dt>
              <dd>
                <strong>523</strong> Minutes
              </dd>
            </div>
            <div className='card card--stats'>
              <dt>
                <span className='chart'></span>Phone Checks
              </dt>
              <dd>
                <strong>178</strong> Times
              </dd>
            </div>
            <div className='card card--stats'>
              <dt>
                <span className='chart'></span>Most Popular App
              </dt>
              <dd>
                <strong>Twitter</strong> for 280 minutes
              </dd>
            </div>
            <div className='card card--stats'>
              <dt>
                <span className='chart'></span>Top App Category
              </dt>
              <dd>
                <strong>Social</strong> for 340 minutes
              </dd>
            </div>
            <div className='card card--stats'>
              <dt>
                <span className='chart'></span>Most Active Day
              </dt>
              <dd>
                <strong>Sunday</strong> for 80 minutes
              </dd>
            </div>
            <div className='card card--stats' >
              <dt>
                <span className='chart'></span>Least Active Day
              </dt>
              <dd>
                <strong>Wednesday</strong> for 45 minutes
              </dd>
            </div>
          </dl>
        </article>
      </main>

      <footer className='background-gray-light'>
        <p className='container'>&copy; 2021 ACME Stats</p>
      </footer>
    </>
  );
}

export default App;
