import useFetch from "./useFetch";

const UserApi = () => {
  const [data] = useFetch("/users");

  return (
    <>
      {data &&
        data.map((item) => {
          // // return (
          // //     <div>
                  <p key={item.id}>{item.name}</p>
          // //         <p key={item.id}>{item.email}</p>
          // //     </div>
          // // )
        })}
    </>
  );
};

export default UserApi;
