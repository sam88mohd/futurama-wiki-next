import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default NotFound;
