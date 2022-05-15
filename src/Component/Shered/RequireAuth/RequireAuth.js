import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.config";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div class="flex items-center justify-center min-h-screen p-5 bg-blue-100 min-w-screen">
        <div class="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
          <h3 class="text-2xl">Thanks for signing up for Websitename!</h3>
          <div class="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-24 h-24 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
          </div>

          <p>We're happy you're here. Let's get your email address verified:</p>
          <div class="mt-4">
            <button
              class="px-2 py-2 text-blue-200 bg-blue-600 rounded"
              onClick={async () => {
                await sendEmailVerification();
                toast("Send Email");
              }}
            >
              Click to Verify Email
            </button>
          </div>
        </div>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
