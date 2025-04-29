"use client";

import { useState } from "react";

const RegisterPage = () => {
  const [payload, setPayload] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="bg-white flex flex-col justify-center items-center gap-3 px-10 py-10 rounded-md">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="name"
            className="border-2 border-gray-300 rounded-md px-2 py-1"
            value={payload.name}
            onChange={(e) => setPayload({ ...payload, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="username"
            className="border-2 border-gray-300 rounded-md px-2 py-1"
            value={payload.username}
            onChange={(e) =>
              setPayload({ ...payload, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="password"
            className="border-2 border-gray-300 rounded-md px-2 py-1"
            value={payload.password}
            onChange={(e) =>
              setPayload({ ...payload, password: e.target.value })
            }
          />
        </div>

        <button
          className="px-4 py-1 rounded-md cursor-pointer bg-gray-200"
          onClick={(e) => handleRegister(e)}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
