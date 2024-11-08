import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[0.5fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div className='w-fit'>
          <img src={assets.banner} className='mb-5 w-[100px]' alt="" />
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>CÔNG TY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Trang chủ</li>
            <li>Về chúng tôi</li>
            <li>Giao hàng</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>VỀ CHÚNG TÔI</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-789</li>
            <li>contact@FPT Polytechnic.com</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>LIÊN HỆ</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-789</li>
            <li>contact@FPT Polytechnic.com</li>
          </ul>
        </div>

      </div>
      
      <div>
          <hr />
          <p className='py-5 text-sm text-center'>Bản quyền 2024@ FPT Polytechnic - Đã đăng ký bản quyền</p>
      </div>
    </div>
  )
}

export default Footer
