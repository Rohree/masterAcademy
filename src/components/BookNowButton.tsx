import { useState } from 'react';
import UserInfoModal from './UserInfoModal';

type BookNowButtonProps = {
  className?: string;
};

export default function BookNowButton({ className = "" }: BookNowButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSubmitModal = (data: { name: string; email: string; subject: string; message: string }) => {
    // You can handle the submitted data here (e.g., send to API)
    console.log('User info submitted:', data);
  };

  return (
    <>
      <button
        className={`mt-2 px-6 py-2 bg-indigo-500 text-white rounded-lg font-semibold shadow hover:bg-indigo-600 transition ${className}`}
        onClick={handleOpenModal}
      >
        Book now
      </button>
      <UserInfoModal show={showModal} onClose={handleCloseModal} onSubmit={handleSubmitModal} />
    </>
  );
}
