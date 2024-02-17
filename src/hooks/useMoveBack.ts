import { useNavigate } from "react-router-dom";

const useMoveBack = (): (() => void) => {
  const navigate = useNavigate();
  return () => navigate(-1);
};

export default useMoveBack;
