"use client";

// import { getValidAuthTokens } from "@/lib/cookies";
import { useGetUserDetailsQuery } from "@/redux/authApiSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  children?: React.ReactNode;
};

export const AuthWrapper = ({ children }: Props) => {
  const { push } = useRouter();
  //   const { userEmail } = useSelector((state: RootState) => state.auth);

  //   const { token } = getValidAuthTokens();

  // this query will only execute if the token is valid and the user email is not already in the redux store
  const { data, isLoading } = useGetUserDetailsQuery();

  // if the user doesnt have a valid token, redirect to login page
  useEffect(() => {
    if (!data) {
      push("/login");
      // will explain this in a moment
      //   dispatch(logout());
    }
  }, [data, push]);

  // optional: show a loading indicator while the query is loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return children;
};
