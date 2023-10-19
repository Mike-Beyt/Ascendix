import supabase from "../supabase/supabase";

const getStudents = async () => {
  const { data, error } = await supabase.from("students").select("*");

  if (error) {
    console.error(error);
    throw new Error("there was an error in fetching students");
  }

  return data;
};

export default getStudents;
