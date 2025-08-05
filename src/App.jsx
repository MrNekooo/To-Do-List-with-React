import Header from "./Components/Header.jsx"
import Main from "./Components/Main.jsx"
import Footer from "./Components/Footer.jsx"


const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
