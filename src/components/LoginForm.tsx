"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import LabelField from "./LabelField";
import InputField from "./InputField";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { userLogin } from "@/redux/authAction";
// import { sendOtp } from "@/lib/utils/two-factor-authentication";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { userInfo, success } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo?.role === "super_admin") {
      router.push("/admin");
    } else if (userInfo?.role === "user") {
      router.push("/user");
    }
  }, [userInfo]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };
  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="space-y-2">
        <LabelField htmlFor="email">Email</LabelField>
        <InputField
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          type="email"
          id="email"
        />
      </div>
      <div className="mb-2">
        <LabelField htmlFor="password">Password</LabelField>
        <InputField
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
      </div>
      {error && (
        <div className="mb-2">
          <small className="text-red-600">{error}</small>
        </div>
      )}
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
