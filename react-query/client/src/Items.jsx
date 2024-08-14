import SingleItem from "./SingleItem";
import { useFetchTask } from "./reactQueryCustomHook";

const Items = ({ items }) => {
  const { data, isLoading, error } = useFetchTask();

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading... </p>;
  }

  // if (isError) {
  //   return <p style={{ marginTop: "1rem" }}>Something went wrong</p>;
  // }

  if (error) {
    return <p style={{ marginTop: "1rem" }}>{error.response.data}</p>;
  }
  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
