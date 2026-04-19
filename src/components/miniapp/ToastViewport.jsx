import { useNotification } from '../../contexts/NotificationContext';

export default function ToastViewport() {
    const { toasts } = useNotification();

    return (
        <div className='toast-viewport' aria-live='polite' aria-atomic='true'>
            {toasts.map((toast) => (
                <div key={toast.id} className={`toast toast-${toast.type}`}>
                    {toast.message}
                </div>
            ))}
        </div>
    );
}
