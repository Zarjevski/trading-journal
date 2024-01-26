import { useModalContext } from "@/context/ModalContext";
import NewRule from "@/components/forms/NewRule";

const useNewRuleForm = () => {
  const { setComponent, setIsOpen }: any = useModalContext();
  const setupModal = () => {
    setIsOpen(true);
    setComponent(() => {
      return NewRule;
    });
  };
  return setupModal;
};

export default useNewRuleForm;
