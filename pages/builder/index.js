import Builder from "@/components/Builder";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BuilderPage() {
  const [bearer, setBearer] = useState();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const a = await axios.get("/api/accessToken");
      setBearer(a.data);
    }
    catch (err) {
      console.log(err)
    }
  };

  //return <Builder bearer={bearer} />;
  return <div></div>
}

BuilderPage.DisplayName = 'Builder';
