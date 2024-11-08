/* eslint-disable react/prop-types */

const ProductItem = ({ Logo, Name }) => {
  return (
    <div  className='text-gray-700 cursor-pointer'>
      <div className="border p-4 rounded-lg shadow-md cursor-pointer">
        <img src={Logo} className="mx-auto mb-4 " />
        <p className="text-center text-lg font-semibold">{Name}</p>
      </div>
    </div>
  );
};

export default ProductItem;
