import useFetch from "./useFetch";

const PoleApi = () => {
  const [data] = useFetch("/poles");

  return (
    <>
      {data &&
        data.map((item) => {
          // // return (
          // //     <div>
                  <p key={item.id}>{item.device_id}</p>
          // //         <p key={item.id}>{item.email}</p>
          // //     </div>
          // // )
        })}
    </>
  );
};
 
export default PoleApi;
