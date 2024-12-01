import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { toggle, close, open, setInitialState } from "@/store/toggleSlice";
import { RefObject, useEffect } from "react";

type useToggleType = {
  id: string;
  state?: boolean;
  elementRef?: RefObject<HTMLElement>;
  closeOnClickOutside?: boolean;
  closeOnScroll?: boolean;
};

function useToggle({
  id,
  state = false,
  elementRef,
  closeOnClickOutside = true,
  closeOnScroll = false,
}: useToggleType) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setInitialState({ id, initialState: state }));
  }, [dispatch]);

  const isOpen = useAppSelector((state) => state.toggle[id]);

  const handleToggle = () => {
    dispatch(toggle(id));
  };

  const handleClose = () => {
    dispatch(close(id));
  };

  const handleOpen = () => {
    dispatch(open(id));
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        elementRef?.current &&
        !elementRef.current.contains(event.target) &&
        !event.target.closest(`.${id}__toggle`)
      ) {
        handleClose();
      }
    }

    function handleScroll() {
      handleClose();
    }

    if (closeOnClickOutside) {
      document.addEventListener("click", handleClickOutside);
    }
    if (closeOnScroll) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleClose]);

  return { handleToggle, handleClose, handleOpen, isOpen };
}

export default useToggle;
