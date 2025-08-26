type UserInfoModalProps = {
  show: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; subject: string; message: string }) => void;
};

import { useState } from "react";

export default function UserInfoModal({ show, onClose, onSubmit }: UserInfoModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Contact / Book a Tutor</h2>
        <form
          className="flex flex-col gap-4 text-black"
          onSubmit={e => {
            e.preventDefault();
            onSubmit({ name, email, subject, message });
            setName(""); setEmail(""); setSubject(""); setMessage("");
            onClose();
          }}
        >
          <input type="text" placeholder="Your Name" className="border p-2 rounded" value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" placeholder="Your Email" className="border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="text" placeholder="Subject" className="border p-2 rounded" value={subject} onChange={e => setSubject(e.target.value)} required />
          <textarea placeholder="Your Message" className="border p-2 rounded" rows={4} value={message} onChange={e => setMessage(e.target.value)} />
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Send</button>
        </form>
      </div>
    </div>
  );
}
