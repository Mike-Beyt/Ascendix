import styled from "styled-components";
import { useForm } from "react-hook-form";
import useAddForm from "./useAddForm";

import Heading from "../../ui/components/texts/Heading";
import P from "../../ui/components/texts/P";
import StyledInput from "../../ui/components/input/input";
import Button from "../../ui/components/buttons/button";
import FormRow from "../../ui/components/form/FormRow";

const StyledForm = styled.form`
  background-color: var(--color-purewhite);
  position: absolute;
  top: 8rem;
  left: 15rem;

  border-radius: 3.2rem;

  width: 45rem;
  height: 45rem;

  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.1);
  padding: 0rem 4rem;

  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: 1267px) {
    position: relative;
    top: 0;
    left: 0;
    grid-column: 2;
    grid-row: 1;
  }

  @media (max-width: 976px) {
    grid-column: 1;
    grid-row: 1;
  }

  @media (max-width: 610px) {
    max-width: 30rem;
    padding: 2rem;
  }

  @media (max-width: 380px) {
    width: 25rem;
    padding: 2rem;
  }
`;

const StyledHeading = styled.div`
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 2rem;
`;

const Form = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { addForm, isRequesting } = useAddForm();
  const { errors } = formState;

  const onSubmit = (request) => {
    console.log(request);
    addForm(request, { onSettled: () => reset() });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledHeading>
        <Heading type="header">فرم تماس</Heading>
      </StyledHeading>

      <StyledInputBox>
        <FormRow error={errors?.name?.message}>
          <StyledInput
            placeholder="نام :"
            type="text"
            id="name"
            disabled={isRequesting}
            {...register("name", {
              required: "لطفا نام خود را وارد کنین",
              minLength: {
                value: 3,
                message: "نام شما حداقل باید سه حرف داشته باشد. ",
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.email?.message}>
          <StyledInput
            placeholder="ایمیل :"
            type="text"
            id="email"
            disabled={isRequesting}
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "لطفا آدرس اینترنیتی صحیح وارد کنید.",
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.tel?.message}>
          <StyledInput
            placeholder="شماره تماس :"
            type="number"
            id="tel"
            disabled={isRequesting}
            {...register("tel", {
              required: "لطفا تلفن خود را وارد کنین",
              minLength: {
                value: 10,
                message: "نام شماشما حداقل باید سه حرف داشته باشد. ",
              },
            })}
          />
        </FormRow>
      </StyledInputBox>

      <Button type="form">ثبت</Button>

      <P color="form">تمام اطلاعات شما نرد اسندیکس ایمن می ماند</P>
    </StyledForm>
  );
};

export default Form;
