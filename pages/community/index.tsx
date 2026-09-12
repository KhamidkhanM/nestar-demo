import withLayoutBasic from "../../libs/components/layout/layoutBasic";
import { NextPage } from "next";

const Community: NextPage = () => {
  console.log("COMMUNITY COMPONENT -PAGE ROUTER");
  return (
    <div>
      Community{" "}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        Press me
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);
