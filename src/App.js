import './App.css';

function App() {
  return (
    <main>
      <div id="backdrop">
        <div id="card">
          <div id="info">
            <h1 id="title">Get <span id="purple">insights</span> that help your business grow.</h1>
            <p id="description">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <div id="stats">
              <div id="company">
                <h2 className="number">10k+</h2>
                <p className="stat-name">COMPANIES</p>
              </div>
              <div id="template">
                <h2 className="number">314</h2>
                <p className="stat-name">TEMPLATES</p>
              </div>
              <div id="query">
                <h2 className="number">12M+</h2>
                <p className="stat-name">QUERIES</p>
              </div>
            </div>
          </div>
          <div id="fm-image-container">
            <div id="image-overlay"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
