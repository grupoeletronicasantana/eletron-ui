import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "@components/Modal";

import { Button } from "@components/Button";
import { useState } from "react";

const meta = {
  tags: ["autodocs"],
  component: Modal,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Os exemplos que usei para Modal aqui são bem simples, mas a ideia é que o Modal seja completamente modular, aqui só usei texto, mas ele pode conter dentro dele qualquer outro componente, particularmente acredito que ele combina bastante com Tabs, componentes de Data Display e de Forms.",
      },
    },
  },
  argTypes: {
    children: {
      description: "React.ReactElement",
      control: false,
    },
    isOpen: { control: false },
  },
  args: {
    isOpen: false,
    onClose: fn(),
    children: <></>,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;

export const FullModal = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Abrir Modal</Button>

      <Modal isOpen={open} onClose={handleClose}>
        <ModalHeader
          title="Titulo do Modal"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            iure rerum aliquam asperiores voluptatum sit quod, consectetur
            facere molestiae, nam ullam labore itaque assumenda ipsa neque
            cupiditate fugit at! Sed!
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button
            variant="primary"
            onClick={() => console.log("Salvar Clicado")}
          >
            Salvar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const ModalWithoutHeader = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Abrir Modal</Button>

      <Modal isOpen={open} onClose={handleClose}>
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            iure rerum aliquam asperiores voluptatum sit quod, consectetur
            facere molestiae, nam ullam labore itaque assumenda ipsa neque
            cupiditate fugit at! Sed!
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button
            variant="primary"
            onClick={() => console.log("Salvar Clicado")}
          >
            Salvar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const ModalWithoutFooter = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Abrir Modal</Button>

      <Modal isOpen={open} onClose={handleClose}>
        <ModalHeader
          title="Titulo do Modal"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            iure rerum aliquam asperiores voluptatum sit quod, consectetur
            facere molestiae, nam ullam labore itaque assumenda ipsa neque
            cupiditate fugit at! Sed!
          </p>
        </ModalBody>
      </Modal>
    </>
  );
};

export const OnlyModalBody = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Abrir Modal</Button>

      <Modal isOpen={open} onClose={handleClose}>
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            iure rerum aliquam asperiores voluptatum sit quod, consectetur
            facere molestiae, nam ullam labore itaque assumenda ipsa neque
            cupiditate fugit at! Sed!
          </p>
        </ModalBody>
      </Modal>
    </>
  );
};

export const ModalBodyCentered = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Abrir Modal</Button>

      <Modal isOpen={open} onClose={handleClose}>
        <ModalBody align="center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            iure rerum aliquam asperiores voluptatum sit quod, consectetur
            facere molestiae, nam ullam labore itaque assumenda ipsa neque
            cupiditate fugit at! Sed!
          </p>
        </ModalBody>
      </Modal>
    </>
  );
};
