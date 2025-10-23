const Footer = () => {
  return (
    <footer className='bg-[#4a4949] text-gray-300 py-2 w-full'>
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-white">
        © Copyright {new Date().getFullYear()}{" "}
        <span className="text-orange-500 font-semibold">MealsNaija</span>. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer;