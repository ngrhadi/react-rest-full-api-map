import useFetch from "./useFetch";

const UserApi = () => {
  const [data] = useFetch("/points");

  return (
    <>
      {data &&
        data.map((item) => {
          // // return (
          // //     <div>
                  <p key={item.id}>{[item.x, item.y]}</p>
          // //         <p key={item.id}>{item.email}</p>
          // //     </div>
          // // )
        })}
    </>
  );
};

export default UserApi;
