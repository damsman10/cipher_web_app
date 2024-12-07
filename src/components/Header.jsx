import des from '../assets/kindpng_78383.png'

const Header = () => {
  return (
    <div className="h-[12%] header-bg w-full flex justify-center items-center relative" style={{backgroundImage: `url(${des})`}}>
      <div className="absolute inset-0 bg-[rgb(2,0,36)] opacity-75"></div>
      <h1 className="text-[2.05rem] text-white font-bold z-10">D'Oracle Cipher Machine</h1>
    </div>
  )
}

export default Header