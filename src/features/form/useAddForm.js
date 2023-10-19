import { useMutation } from "@tanstack/react-query";
import { addForm as addFormApi } from "../../services/form/apiForm";
import toast from "react-hot-toast";

const useAddForm = () => {
  const { mutate: addForm, isLoading: isRequesting } = useMutation({
    mutationFn: addFormApi,
    onSuccess: () => toast.success("درخواست شما با موفقیت ثبت شد"),
    onError: () =>
      toast.error(
        "اختلالی در دخواست شما به وجود آمده است،لطفا مجددا تلاش  کنین"
      ),
  });

  return { addForm, isRequesting };
};

export default useAddForm;
