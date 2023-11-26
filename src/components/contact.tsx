import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface MyComponentState {
  isClicked1: boolean;
}
function Contact() {
  const [state, setState] = useState<MyComponentState>({
    isClicked1: false,
  });

  const Whatsapp = () => {
    setState((prevState) => ({
      ...prevState,
      isClicked1: !prevState.isClicked1,
    }));
    Notif();
  };

  const Notif = () => {
    toast.info("Terima Kasih! Sudah Mengontak", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <section id="contact" className="section">
        <div className="container container-contact">
          <div className="wrapper wrapper-contact">
            <h1>Reach Out to me!</h1>
            <h2>Contact</h2>
            <br />
            <hr />
            <div className="card card-contact">
              <a
                href="mailto:satriodrajat43@gmail.com"
                target="_blank"
                onClick={Notif}
              >
                <svg
                  width="100"
                  height="100"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </a>
              <a href="https://wa.me/+6281528999217" target="_blank">
                <svg
                  onClick={Whatsapp}
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  fill={state.isClicked1 ? "#14eb46" : "#ffffff"}
                >
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
              </a>
            </div>
            <div>
              <div className="card card-contact">
                <div>
                  <a
                    href="mailto:satriodrajat43@gmail.com"
                    target="_blank"
                    onClick={Notif}
                  >
                    <h4>satriodrajat43@gmail.com</h4>
                  </a>
                </div>
                <div>
                  <a
                    href="https://wa.me/+6281528999217"
                    target="_blank"
                    onClick={Notif}
                  >
                    <h4>+6281528999217</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
