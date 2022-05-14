import React from "react";
import fb from "../../../assets/icons/facebook.png";
import google from "../../../assets/icons/google.png";
import github from "../../../assets/icons/github (1).png";
import auth from "../../../firebase.config";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const SocialMedia = () => {
  const [signInWithFacebook, user, loading] = useSignInWithFacebook(auth);
  const [signInWithGithub, user1, loading1] = useSignInWithGithub(auth);
  const [signInWithGoogle, user2, loading2] = useSignInWithGoogle(auth);
  const navigation = useNavigate();

  if (user || user1 || user2) {
    navigation("/");
  }

  if (loading || loading1 || loading2) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="flex justify-evenly">
        <div onClick={() => signInWithFacebook()} className="avatar">
          <div className="w-14 mask mask-hexagon">
            <img src={fb} alt="" />
          </div>
        </div>
        <div onClick={() => signInWithGoogle()} className="avatar">
          <div className="w-14 mask mask-hexagon">
            <img src={google} alt="" />
          </div>
        </div>
        <div onClick={() => signInWithGithub()} className="avatar">
          <div className="w-14 mask mask-hexagon">
            <img src={github} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
