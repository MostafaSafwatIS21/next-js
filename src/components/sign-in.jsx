"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => signIn("github")}
        className="rounded-md bg-gray-700 px-3 py-2 text-sm font-medium text-white hover:bg-gray-600 transition-colors"
      >
        GitHub
      </button>
      <button
        type="button"
        onClick={() => signIn("google")}
        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
      >
        Google
      </button>
    </div>
  );
}
