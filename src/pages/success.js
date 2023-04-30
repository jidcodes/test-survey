import { useRouter } from "next/router";

const success = () => {
  const router = useRouter();

  return (
    <div className="my-12 p-5 text-2xl">
      <h1 className="text-3xl text-blue-800">Hello {router.query.name} </h1>
      <h1>Your submission has been received. Thank you</h1>
    </div>
  );
};

export default success;
