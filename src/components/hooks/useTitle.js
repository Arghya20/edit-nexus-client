import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Edit Nexus`;
  }, [title]);
};

export default useTitle;
