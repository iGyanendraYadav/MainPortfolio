import { toast } from 'react-toastify';


export const handleCopyText = ()=>{
    var myNumber = "8896038076"
    navigator.clipboard.writeText(myNumber);
    document.getSelection().removeAllRanges();

    toast.success('Phone Number Copied.', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
}

export const toastCV = () => {
    toast.success('Resume Downloaded.', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }