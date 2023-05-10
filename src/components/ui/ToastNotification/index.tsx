import { TrashIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = () => {
	const notify = () => toast.success("Mail deleted!");

	return (
		<div>
			<button onClick={notify}>
				<TrashIcon className='w-4 h-4 text-red-400' />
			</button>
			<ToastContainer position='bottom-left' theme='dark' />
		</div>
	);
};

export { ToastNotification };
