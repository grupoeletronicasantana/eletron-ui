import type { Meta } from "@storybook/react";

import { Forms, Input } from "@components/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@components/Button";

const meta = {
  tags: ["autodocs"],
  component: Forms,
  parameters: {
    docs: {
      description: {
        story:
          "Exemplo do componente Forms que é basicamente um container estilizado do FormProvider do React-Hook-Forms, por tanto, é necessário o uso do RHF para utilizar esse componente pois ele exige receber os componentes necessários para montar o FormProvider, assim como é necessário envolver todos inputs da Eletron UI com esse componente. O Zod para declaração de schema e validação do formulário é opcional, mas altamente recomendado",
      },
    },
  },
} satisfies Meta<typeof Forms>;

export default meta;

export const Default = () => {
  const CreateFormSchema = z.object({
    field_1: z.string(),
    field_2: z.string(),
  });
  //
  type FormSchema = z.infer<typeof CreateFormSchema>;
  //
  const methods = useForm<FormSchema>({
    resolver: zodResolver(CreateFormSchema),
  });
  //
  const { register } = methods;
  //
  const submitForms = (formsData: FormSchema) => {
    console.log("Teste");

    console.log(formsData);
  };
  //
  return (
    <Forms id="exampleForms" methods={methods} onSubmit={submitForms}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Input
          id="field_1"
          {...register("field_1")}
          placeholder="Campo field_1 para teste"
        />

        <Input
          id="field_2"
          {...register("field_2")}
          placeholder="Campo field_2 para teste"
        />

        <Button type="submit">Submit in Console</Button>
      </div>
    </Forms>
  );
};
