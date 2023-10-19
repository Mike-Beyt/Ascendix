import supabase from "../supabase/supabase";

export const addForm = async (request) => {
  console.log(request);
  const { data, error } = await supabase
    .from("form")
    .insert([{ name: request.name, tel: request.tel, email: request.email }]);

  if (error) {
    console.error(error);
    throw new Error("there was an error in adding students request");
  }

  return data;
};
