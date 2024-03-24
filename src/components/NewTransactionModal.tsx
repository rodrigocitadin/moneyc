import { Close, Content, Overlay, Portal, Title } from "@radix-ui/react-dialog";

export default function NewTransactionModal() {
  return (
    <Portal>
      <Overlay />
      <Content>
        <Title>New transaction</Title>

        <form>
          <input type="text" placeholder="Description" required/>
          <input type="number" placeholder="Amount" required/>
          <input type="text" placeholder="Category" required/>

          <button>
            Submit
          </button>
        </form>

        <Close />
      </Content>
    </Portal>
  )
}
