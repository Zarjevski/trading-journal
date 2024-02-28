import { useModalContext } from "@/context/ModalContext";
import NewExcahnge from "@/components/forms/NewExcahnge";

const useNewExcahngeForm = () => {
  const { setComponent, setIsOpen }: any = useModalContext();
  const setupModal = () => {
    setIsOpen(true);
    setComponent(() => {
      return NewExcahnge;
    });
  };
  return setupModal;
};

export default useNewExcahngeForm;
