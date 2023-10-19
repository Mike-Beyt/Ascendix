import { useQuery } from "@tanstack/react-query";
import getStudents from "../../../services/students/apiStudents";

const useGetStudents = () => {
  const {
    isLoading: isGettingStudents,
    data: students,
    error,
  } = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });
  return { isGettingStudents, error, students };
};

export default useGetStudents;
