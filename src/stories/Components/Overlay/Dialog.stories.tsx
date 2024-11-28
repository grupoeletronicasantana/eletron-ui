import type { Meta } from "@storybook/react";

import { useState } from "react";

import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@components/Dialog";
import { Button } from "@components/Button";

const meta = {
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "O Dialog é só o componente de Modal com outro nome, mas a diferença está no propósito de cada um, o Modal tem o propósito de apresentar mais informações e ser mais modular, podendo conter dentro deles qualquer outro componente, Tabs, Table, List, enquanto o Dialog seria apenas um modal para apresentar pequenos textos informativos, tanto que DialogBody aceita apenas string.",
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
} satisfies Meta<typeof Dialog>;

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
      <Button onClick={handleOpen}>Abrir Dialog</Button>

      <Dialog isOpen={open} onClose={handleClose}>
        <DialogHeader
          title="Dialog"
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
        <DialogBody>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          cupiditate, voluptatum reiciendis explicabo consequuntur pariatur
          doloribus ducimus voluptates. Perferendis magni labore iusto impedit
          porro provident iure aut officiis quaerat ducimus.
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button>Confirmar</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const WithoutHeader = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Abrir Dialog</Button>

      <Dialog isOpen={open} onClose={handleClose}>
        <DialogBody>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          cupiditate, voluptatum reiciendis explicabo consequuntur pariatur
          doloribus ducimus voluptates. Perferendis magni labore iusto impedit
          porro provident iure aut officiis quaerat ducimus.
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button>Confirmar</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const WithoutFooter = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Abrir Dialog</Button>

      <Dialog isOpen={open} onClose={handleClose}>
        <DialogHeader
          title="Dialog"
          description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
        <DialogBody>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          cupiditate, voluptatum reiciendis explicabo consequuntur pariatur
          doloribus ducimus voluptates. Perferendis magni labore iusto impedit
          porro provident iure aut officiis quaerat ducimus.
        </DialogBody>
      </Dialog>
    </>
  );
};

export const OnlyBody = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Abrir Dialog</Button>

      <Dialog isOpen={open} onClose={handleClose}>
        <DialogBody>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          cupiditate, voluptatum reiciendis explicabo consequuntur pariatur
          doloribus ducimus voluptates. Perferendis magni labore iusto impedit
          porro provident iure aut officiis quaerat ducimus.
        </DialogBody>
      </Dialog>
    </>
  );
};
