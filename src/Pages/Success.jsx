import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Success() {  
  
  const CartData = useSelector((state) => state.Reducer);
  const amount =
    CartData.length &&
    CartData.map((item) => item.d_price * item.quantity).reduce(
      (prev, next) => (prev += next)
    );
  return (
    <div
      className="flex flex-col items-center justify-center h-screen "
      style={{
        backgroundImage:
          "linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)",
      }}
    >
      <div className="flex flex-col item-center justify-center text-center bg-white px-10 py-4 shadow rounded-2xl">
        <CircleCheckIcon className="w-auto h-16 text-green-500 " />
        <h1 className="mt-4 text-2xl font-semibold text-center">
          Thank you for your order!
        </h1>
        <p className="mt-2 text-center text-gray-500">
          Your order was successfully placed and is being processed.
        </p>

        <div className="mt-8 w-full max-w-md mx-auto">
          <div>
            <p>Order Details</p>
          </div>
          <div>
            <div className="flex items-center justify-between mt-3">
              <span>Order Number:</span>
              <span className="font-semibold">
                {Math.floor(Math.random() * 100000000)}
              </span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span>Order Date:</span>
              <span className="font-semibold">{new Date().toDateString()}</span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span>Total:</span>
              <span className="font-semibold">$ {amount + 10}.00</span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span>Status:</span>
              <Badge className="px-2 py-1 text-xs font-bold text-white bg-success rounded-full">
                Processing
              </Badge>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span>Expected Delivery:</span>
              <span className="font-semibold">3 to 5 Days</span>
            </div>
          </div>
        </div>
        <button className="mt-8 bg-black text-white px-3 py-2 rounded-2xl hover:!bg-white border border-black hover:!text-black duration-300 hover:scale-105 ease-in-out">
          <Link to="/">Return to Homepage</Link>
        </button>
      </div>
    </div>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
