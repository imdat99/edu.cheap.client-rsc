import { type Params, type UIMatch } from "react-router";
const Ahihi = (data: {
  params: Readonly<Params<string>>;
  loaderData: any;
  actionData: any;
  matches: UIMatch<unknown, unknown>[];
}) => {
  console.log("abc", data);
  // const tagId = useParams().tagId;
  return (
    <div>
      <p>Tag ID: 1</p>
      <p>Xin chào! 123</p>
    </div>
  );
};

export default Ahihi;
