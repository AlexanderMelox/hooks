// useDisclosure is used for common use cases of having an open state and it's respective open and close functions

const useDisclosure = (isOpenDefault = false) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen(state => !state), []);

    return { isOpen, open, close, toggle };
}
