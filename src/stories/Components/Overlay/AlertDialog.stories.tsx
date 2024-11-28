import type { Meta } from "@storybook/react";

import { useState } from "react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogActions,
} from "@components/Dialog";
import { Button } from "@components/Button";

const meta = {
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Usado para alertar, pedir confirmação ou confirmar uma ação tomada pelo usuário, é possivel ser um info, error, destroy e success",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
          width: "100vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AlertDialog>;

export default meta;

export const Default = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Abrir AlertDialog</Button>

      <AlertDialog isOpen={open} onClose={handleClose}>
        <AlertDialogBody
          title="Info"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <AlertDialogActions>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button>Confirmar</Button>
        </AlertDialogActions>
      </AlertDialog>
    </>
  );
};

Default.parameters = {
  docs: {
    description: {
      story:
        "O comportamente pardão do variant é usar o info, caso não seja passado nada.",
    },
  },
};

export const Success = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Abrir AlertDialog</Button>

      <AlertDialog isOpen={open} onClose={handleClose}>
        <AlertDialogBody
          variant="success"
          title="Success"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <AlertDialogActions>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button>Confirmar</Button>
        </AlertDialogActions>
      </AlertDialog>
    </>
  );
};

export const Error = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Abrir AlertDialog</Button>

      <AlertDialog isOpen={open} onClose={handleClose}>
        <AlertDialogBody
          variant="error"
          title="Error"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <AlertDialogActions>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button>Confirmar</Button>
        </AlertDialogActions>
      </AlertDialog>
    </>
  );
};

export const Destroy = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Abrir AlertDialog</Button>

      <AlertDialog isOpen={open} onClose={handleClose}>
        <AlertDialogBody
          variant="destroy"
          title="Destroy"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <AlertDialogActions>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="destroy">Confirmar</Button>
        </AlertDialogActions>
      </AlertDialog>
    </>
  );
};
