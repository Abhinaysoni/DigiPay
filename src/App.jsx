
import Signup from './Signup';


function App() {
  return (
    <div>

      <Router>
      <Analytics />

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sendMoney" element={<SendMoney />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;