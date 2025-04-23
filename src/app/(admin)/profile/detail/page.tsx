"use client";

import { useRouter } from "next/navigation";

const DetailProfile = () => {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center justify-center">
      <span
        className="px-4 py-1 bg-gray-300 rounded-sm cursor-pointer"
        onClick={() => router.push("/profile")}
      >
        detail porfil
      </span>
    </div>
  );
};

export default DetailProfile;
