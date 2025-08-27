import Header from "./Components/Header.jsx"
import Main from "./Components/Main.jsx"
import Footer from "./Components/Footer.jsx"
import ColorMode from "./Components/ColorMode.jsx"


const App = () => {
  return (
    <ColorMode>
      <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
        <Header />
        <Main />
        <Footer />
      </div>
    </ColorMode>
  )
}

export default App
